import { useEffect, useState } from "react";
import { useGlobalContext } from "@/src/contexts";
import { useRouter } from "next/router";
import refreshSession from "@/src/functions/refreshSession";

interface ProtocolsData {
  _id: string;
  name: string;
}
interface Protocol {
  _id: string;
  name: string;
  
}

const Subscription = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { user, setUser, isLoading } = useGlobalContext();
  const [protocols, setProtocols] = useState<ProtocolsData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchUserSubscriptions = async () => {
      const requestNewToken = async () => {
        try {
          const userData = {
            userId: user._id,
            refreshToken: user.refreshToken,
            email: user.email,
          };
          const newTokens = await refreshSession(userData);
          if (!newTokens) {
            throw new Error("Could not refresh token");
          }
          const userUpdated = { ...user, ...newTokens };
          setUser(userUpdated);
          localStorage.setItem("user", JSON.stringify(userUpdated));
          return userUpdated.accessToken;
        } catch (error) {
          console.error("Error refreshing token:", error);
          if (error instanceof Response && error.status === 403) {
            router.push('/login');
          } else {
            throw new Error("Could not refresh token");
          }
        }
      };

      if (!isLoading && user) {
        setLoading(true);
        console.log("User Object:", user);

        if (!user._id || !user.email) {
          console.error("User ID or Email is missing");
          setLoading(false);
          return;
        }

        try {
          let accessToken = user.accessToken;
          const myHeaders = new Headers();
          myHeaders.append("Authorization", `Bearer ${accessToken}`);

          const requestOptions: RequestInit = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow",
          };

          const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/subscription/getUserSubscriptions?userId=${user._id}`;
          console.log("API URL:", apiUrl);

          let response = await fetch(apiUrl, requestOptions);

          if (!response.ok) {
            if (response.status === 401) {
              accessToken = await requestNewToken();
              if (!accessToken) return;
              myHeaders.set("Authorization", `Bearer ${accessToken}`);
              response = await fetch(apiUrl, { ...requestOptions, headers: myHeaders });
            }
            if (!response.ok) {
              throw new Error("Failed to fetch subscriptions after token refresh");
            }
          }console.log('Fetched protocols:', response);

          const result: ProtocolsData[] = await response.json();
          console.log('Fetched protocols:', result);
          setProtocols(result);
        } catch (error) {
          console.error("Error fetching subscriptions:", error);
          router.push("/login");
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserSubscriptions();
  }, [user, isLoading, router, setUser]);
  const handleUnsubscribe = async (protocolId: string) => {
    try {
      const requestOptions: RequestInit = {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${user.accessToken}`, 
        },
      };
  
      const apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/api/subscription/unsubscribe?protocolId=${protocolId}`;
      console.log("Unsubscribe API URL:", apiUrl);
  
      const response = await fetch(apiUrl, requestOptions);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to unsubscribe");
      }
  
      setProtocols(protocols.filter(protocol => protocol._id !== protocolId));
    } catch (error) {
      console.error("Error unsubscribing:", error);
      
    }
  };

  return (
    <div className="flex flex-col min-h-screen w-full mt-[50px]">
      {loading ? (
        <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
          <div className="w-full h-full bg-blue-900" style={{ animation: 'move 2s infinite' }}></div>
        </div>
      ) : (
        <div className="flex min-h-full flex-col justify-center mt-10">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 mt-10">
              My Subscriptions
            </h2>
            <div className="space-y-4 mt-[30px]">
              {protocols.length > 0 ? (
                protocols.map((protocol: ProtocolsData) => (
                  <div key={protocol._id} className="flex items-center justify-between">
                    <button
                      className="flex w-4/5 rounded-lg border border-gray-300 text-black bg-gray-100 hover:bg-cyan-500 p-8"
                      onClick={() => { router.push(`/profile/protocol?id=${protocol._id}`) }}
                    >
                      <span className="mr-2">Protocol ID: {protocol._id}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </button>
                    <button
                      
                      className="bg-cyan-500 ml-2 md:ml-4 py-2 md:py-4  md:px-3    text-center justify-center rounded-md   text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 inline-flex"
                      onClick={() => handleUnsubscribe(protocol._id)}
                    >
                      Unsubscribe
                    </button>
                  </div>
                ))
              ) : (
                <div className="mt-6 text-center text-gray-600">
                  No subscribed protocols found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
      <style jsx>{`
        @keyframes move {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default Subscription;
