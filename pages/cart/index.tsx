import { useEffect, useState, useCallback } from "react";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useRouter } from "next/router";
import ProtocolData from "@/interfaces/ProtocolData";
import CartProtocol from "./CartProtocol";
import CheckoutForm from "./CheckoutForm";
import refreshSession from "@/src/functions/refreshSession";
import { useGlobalContext } from "@/src/contexts";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Cart() {
    const [clientSecret, setClientSecret] = useState("");
    const { user, setUser, isLoading } = useGlobalContext();
    const router = useRouter();

    interface CheckoutOptions {
        clientSecret: string;
        appearance?: {
            theme: 'stripe' | 'night' | 'flat' | undefined;
        };
    }

    const options: CheckoutOptions = {
        clientSecret,
        appearance: {
            theme: 'stripe',
        },
    };

    const [protocols, setProtocols] = useState<ProtocolData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    let subTotal: number = 0;
    for (let i = 0; i < protocols.length; i++) {
        subTotal += parseFloat(protocols[i].price);
    }
    subTotal = parseFloat(subTotal.toFixed(2));

    const removeSavedProtocol = async (protocolId: string) => {
        const updatedProtocols = protocols.filter((protocol: ProtocolData) => protocol._id !== protocolId);
        localStorage.setItem("cart", JSON.stringify(updatedProtocols));
        setProtocols(updatedProtocols);
    };

    const requestNewToken = useCallback(async () => {
        try {
            const userData = {
                "userId": user._id,
                "refreshToken": user.refreshToken
            }
            const newTokens = await refreshSession(userData);
            if (!newTokens) {
                throw new Error("Could not refresh token");
            }
            const userUpdated = { ...user, accessToken: newTokens.accessToken, refreshToken: newTokens.refreshToken };
            setUser(userUpdated);
            localStorage.setItem("user", JSON.stringify(userUpdated));
        } catch (error) {
            console.error("Error refreshing token:", error);
            throw new Error("Session expired. Please log in again.");
        }
    }, [user, setUser]);

    useEffect(() => {
        const fetchCartData = async () => {
            if (!isLoading) {
                if (!user || !user._id || !user.accessToken || !user.refreshToken) {
                    console.log("User not authenticated. Redirecting to login...");
                    router.push('/login');
                    return;
                }

                const savedProtocols = localStorage.getItem("cart");
                if (savedProtocols) {
                    let protocolIds = JSON.parse(savedProtocols);
                    protocolIds = protocolIds.filter((id: string) => id && id !== "undefined");

                    if (protocolIds.length === 0) {
                        setProtocols([]);
                        setLoading(false);
                        return;
                    }

                    let accessToken = user.accessToken;

                    try {
                        const fetchWithAuth = async (url: string, options: RequestInit) => {
                            const response = await fetch(url, {
                                ...options,
                                headers: {
                                    ...options.headers,
                                    'Authorization': `Bearer ${accessToken}`,
                                },
                            });

                            if (response.status === 401) {
                                // Token expired, try to refresh
                                try {
                                    await requestNewToken();
                                    accessToken = user.accessToken; // Get the new token
                                    // Retry the original request with the new token
                                    return await fetch(url, {
                                        ...options,
                                        headers: {
                                            ...options.headers,
                                            'Authorization': `Bearer ${accessToken}`,
                                        },
                                    });
                                } catch (refreshError) {
                                    console.error("Error refreshing token:", refreshError);
                                    router.push('/login');
                                    throw new Error("Session expired. Please log in again.");
                                }
                            }

                            return response;
                        };

                        const createSubscriptionResponse = await fetchWithAuth(
                            `${process.env.NEXT_PUBLIC_BASE_URL}/api/payment/createSubscription`,
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify({ protocols: protocolIds }),
                            }
                        );

                        if (!createSubscriptionResponse.ok) {
                            throw new Error("Failed to create subscription: " + createSubscriptionResponse.statusText);
                        }

                        const createSubscriptionData = await createSubscriptionResponse.json();
                        setClientSecret(createSubscriptionData.clientSecret);

                        const protocolInfoResponse = await fetchWithAuth(
                            `${process.env.NEXT_PUBLIC_BASE_URL}/api/protocol/getProtocolInfo`,
                            {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(protocolIds),
                            }
                        );

                        if (!protocolInfoResponse.ok) {
                            throw new Error("Failed to fetch protocol info: " + protocolInfoResponse.statusText);
                        }

                        const protocolInfoData = await protocolInfoResponse.json();
                        setProtocols(protocolInfoData);
                    } catch (error:any) {
                        console.error("Error fetching cart data:", error);
                        setProtocols([]);
                        if (error.message === "Session expired. Please log in again.") {
                            router.push('/login');
                        }
                    }
                } else {
                    setProtocols([]);
                }
                setLoading(false);
            }
        };

        fetchCartData();
    }, [user, isLoading, requestNewToken, router]);

    return (
        <div className="mt-10 px-1 lg:px-40 md:px-40 ml-40 md:ml-0  w-full md:w-[70%]">
            <h2 className="text-3xl text-center font-bold mt-[80px]">Shopping Cart</h2>
            <div className="mt-10">
                {!loading ? (
                    protocols.length > 0 ? (
                        <div className="space-y-4">
                            {protocols.map((protocol) => (
                                <CartProtocol key={protocol._id} protocol={protocol} removeSavedProtocol={removeSavedProtocol} />
                            ))}
                            <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                <div className="flex justify-between text-base font-medium text-gray-900">
                                    <p>Subtotal</p>
                                    <p>${subTotal}</p>
                                </div>
                                <div className="mt-10">
                                    {clientSecret && (
                                        <Elements options={options} stripe={stripePromise}>
                                            <CheckoutForm />
                                        </Elements>
                                    )}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center">Nothing in cart</div>
                    )
                ) : (
                    <div className="min-h-screen flex flex-col mt-[50px]">
                        <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                            <div className="w-full h-full bg-blue-900" style={{ animation: 'move 2s infinite' }}></div>
                        </div>
                    </div>
                )}
            </div>
            <style jsx>{`
                @keyframes move {
                    0% {
                        transform: translateX(-100%);
                    }
                    50% {
                        transform: translateX(100%);
                    }
                    100% {
                        transform: translateX(-100%);
                    }
                }
            `}</style>
        </div>
    );
}