"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import { useGlobalContext } from '@/src/contexts';

interface ProtocolTimeframe {
    _id: String;
    fromDuration: Number;
    toDuration: Number;
}

interface ProtocolData {
    _id: String;
    name: String;
    protocolTimeframes: ProtocolTimeframe[];
}

const ProfileProtocol = () => {
    const router = useRouter();
    const protocolId = router.query.id;
    const { user } = useGlobalContext();

    const [protocol, setProtocol] = useState<ProtocolData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (protocolId) {
            setLoading(true);
            try {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Authorization": `Bearer ${user.accessToken}`, // Added 'Bearer ' prefix
                    },
                    redirect: "follow" as RequestRedirect
                };
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protocol/getProtocolTimeframes?protocolId=${protocolId}`, requestOptions)
                    .then((response) => response.json())
                    .then((data: ProtocolData) => {
                      
                        setProtocol({
                            ...data,
                            protocolTimeframes: data.protocolTimeframes || []
                        });
                    })
                    .catch((error) => {
                        console.error('Error fetching data:', error);
                        setProtocol(null);
                    })
                    .finally(() => {
                        setLoading(false);
                    });
            } catch (error) {
                console.error('Error fetching data:', error);
                setProtocol(null);
                setLoading(false);
            }
        }
    }, [protocolId, user]);

    return (
        <div className="mx-auto my-24  md:w-[50%] w-[70%]  ml-40  md:ml-60 ">
            {loading ? (
                <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                    <div className="top-[80px] left-0 w-full h-full bg-blue-900" style={{ animation: 'move 2s infinite' }}></div>
                </div>
            ) : protocol ? (
                <div>
                    <h2 className="text-3xl text-center ">{protocol.name}</h2>
                    <div className='space-y-4 mt-6 '>
                        {protocol.protocolTimeframes.length > 0 ? (
                            protocol.protocolTimeframes.map((timeframe) => (
                                <button 
                                    className="w-full rounded-lg border border-gray-300 text-black bg-gray-100 hover:bg-cyan-500 p-5" 
                                    onClick={() => { router.push(`/profile/protocol/session?protocolId=${protocolId}&timeframeId=${timeframe._id}`) }} 
                                    key={timeframe._id.toString()}
                                >
                                    <span className="mr-2  ">
                                        Week {timeframe.fromDuration.toString()}
                                        {timeframe.fromDuration.toString() !== timeframe.toDuration.toString() && 
                                            ` to ${timeframe.toDuration.toString()}`}
                                    </span>
                                </button>
                            ))
                        ) : (
                            <div>No timeframes available</div>
                        )}
                    </div>
                </div>
            ) : (
                <div>No protocol data available</div>
            )}
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

export default ProfileProtocol;
