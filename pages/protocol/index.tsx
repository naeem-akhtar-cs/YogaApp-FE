"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import ProtocolData from '@/interfaces/ProtocolData';
import ProtocolDetails from './ProtocolDetails';
import { useGlobalContext } from "@/src/contexts";

export default function Protocol() {
    const router = useRouter();
    const protocolId = router.query.id;
    const { user } = useGlobalContext();
    const [protocol, setProtocol] = useState<ProtocolData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchProtocolData = async () => {
            if (!protocolId) {
                setLoading(false);
                return;
            }

            try {
                const accessToken = user?.accessToken;

                const myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                if (accessToken) {
                    myHeaders.append('Authorization', `Bearer ${accessToken}`);
                }
                const raw = JSON.stringify([protocolId]);

                const requestOptions = {
                    method: "POST",
                    headers: myHeaders,
                    body: raw,
                    redirect: "follow" as RequestRedirect
                };

                const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/protocol/getProtocolInfo`, requestOptions);
                const data = await response.json();

                if (data && data.length > 0) {
                    setProtocol(data[0]);
                } else {
                    setProtocol(null);
                }
            } catch (error) {
                console.log('Error fetching data:', error);
                setProtocol(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProtocolData();
    }, [protocolId, user]);

    const handleSubscribeClick = () => {
        if (!user || !user.accessToken) {
            
            router.push('/login');
        } else if (protocol) {
          
            router.push(`/symptoms?protocolId=${protocol._id}`);
        }
    };

    return (
        <div className="mx-10 lg:mx-60 md:mx-60 mt-40 ml-60 md:ml-0  ">
            {loading ? (
                <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                    <div className="top-[80px] left-0 w-full h-full bg-blue-900" style={{
                        animation: 'move 2s infinite'
                    }}></div>
                </div>
            ) : protocol ? (
                <div>
                    <ProtocolDetails protocol={protocol} />
                    <div className='flex justify-center items-center md:w-[600px]  '>
    <button
        type="submit"
        className="bg-cyan-700 mt-12 w-80 rounded-md px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm"
        onClick={handleSubscribeClick}
    >
        Subscribe
    </button>
</div>

                </div>
            ) : (
                <div></div> 
            )}
        </div>
    );
}
