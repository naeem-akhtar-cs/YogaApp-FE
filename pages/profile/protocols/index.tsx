import { useEffect, useState } from "react";
import { useGlobalContext } from "@/src/contexts";
import { useRouter } from "next/navigation";

interface ProtocolData {
    _id: string;
    protocol: {
        _id: string;
        name: string;
    };
}

const ProfileProtocols = () => {
    const { user } = useGlobalContext();
    const router = useRouter();

    const [protocols, setProtocols] = useState<ProtocolData[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (user && user.accessToken) {
            setLoading(true);

            if (!user._id) {
                router.push('/login');
                return;
            }

            const requestOptions = {
                method: "GET",
                headers: {
                    'Authorization': `Bearer ${user.accessToken}`
                }
            };

            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protocol/getUserProtocols?userId=${user._id}`, requestOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Fetched protocols:', data); 
                    setProtocols(data);
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setProtocols([]);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [user, router]);

    return (
        <div className="mx-20 md:mx-60">
            <h2 className="text-5xl font-bold text-center">Current Protocols</h2>
            <div className="mt-10">
                {loading ? (
                    <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                        <div className="top-[80px] left-0 w-full h-full bg-blue-900" style={{ animation: 'move 2s infinite' }}></div>
                    </div>
                ) : protocols.length > 0 ? (
                    <div className="space-y-4 mt-[30px]">
                        {protocols.map((userProtocol) => (
                            <button
                                className="flex w-full rounded-lg border border-gray-300 text-black bg-gray-100 hover:bg-cyan-500 p-8"
                                onClick={() => router.push(`/profile/protocol?id=${userProtocol.protocol._id}`)}
                                key={userProtocol._id}
                            >
                                <span className="mr-2">{userProtocol.protocol.name}</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">No protocols available</div>
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
};

export default ProfileProtocols;
