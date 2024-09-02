"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from "react";
import ReactPlayer from 'react-player/lazy';
import { useGlobalContext } from '@/src/contexts';

interface ExerciseData {
    _id: string;
    name: string;
    description: string;
    repetition: string;
    sets: number;
    frequency: string;
    imageUrl: string;
    videoUrl: string;
}

const ProtocolSession = () => {
    const router = useRouter();
    const { user } = useGlobalContext();

    const protocolId = router.query.protocolId as string;
    const timeframeId = router.query.timeframeId as string;

    const videoBaseUrl = "https://mehab.s3.amazonaws.com/videos/";
    const imageBaseUrl = "https://mehab.s3.amazonaws.com/images/";

    const [protocol, setProtocol] = useState<ExerciseData[]>([]);
    const [currentExercise, setCurrentExercise] = useState<ExerciseData | null>(null);
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        if (protocolId && timeframeId && user && user.accessToken) {
            setLoading(true);
    
            const headerOptions = {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${user.accessToken}`,
                },
                redirect: "follow" as RequestRedirect
            };
    
            const url = `${process.env.NEXT_PUBLIC_BASE_URL}/api/protocol/getTimeframeExercise?protocolId=${protocolId}&timeframeId=${timeframeId}&userId=${user._id}`;
    
            fetch(url, headerOptions)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (Array.isArray(data)) {
                        setProtocol(data);
                        if (data.length > 0) {
                            setCurrentExercise(data[0]);
                            setCurrentIndex(0);
                        }
                    } else {
                        console.error('Unexpected data format:', data);
                        setProtocol([]);
                    }
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                    setProtocol([]);
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    }, [protocolId, timeframeId, user]);

    const nextExercise = () => {
        if (protocol.length > 0 && currentIndex < protocol.length - 1) {
            setCurrentIndex(currentIndex + 1);
            setCurrentExercise(protocol[currentIndex + 1]);
        }
    };

    const previousExercise = () => {
        if (protocol.length > 0 && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            setCurrentExercise(protocol[currentIndex - 1]);
        }
    };

    return (
        <div className="mx-60 my-24 w-1/4 ">
            {loading ? (
                <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                    <div className="top-[80px] left-0 w-full h-full bg-blue-900" style={{ animation: 'move 2s infinite' }}></div>
                </div>
            ) : protocol.length > 0 ? (
                <div>
                    {currentExercise ? (
                        <div className='flex flex-col items-center justify-center h-full md:mt-40 mt-20'>
                            <ReactPlayer className='react-player ml-60 mr-6 md:ml-0' url={videoBaseUrl + currentExercise.videoUrl} playing={true} controls={true} />
                            <div className='h-32 text-center flex w-[400px] mt-10 md:w-[490px] ml-40 md:ml-0'>{currentExercise.description}</div>
                            <div className='flex w-full space-x-4 justify-center text-lg ml-28 md:ml-0'>
                                <div className='border rounded-md bg-slate-100 text-center'>
                                    <div className='font-bold'>{currentExercise.repetition}</div>
                                    <div>repetition</div>
                                </div>
                                <div className='border rounded-md bg-slate-100 p-4 text-center'>
                                    <div className='font-bold'>{currentExercise.sets}</div>
                                    <div>sets</div>
                                </div>
                                <div className='border rounded-md bg-slate-100 p-4 text-center'>
                                    <div className='font-bold'>{currentExercise.frequency}</div>
                                    <div>daily freq.</div>
                                </div>
                            </div>
                            <div className='flex space-x-4 ml-40 mr-10 md:ml-10'>
                                {currentIndex > 0 && (
                                    <button className="bg-cyan-500 hover:bg-cyan-600 mt-4 md:mt-4 text-center w-60 rounded-md px-3 py-3 font-semibold text-white" onClick={previousExercise}>
                                        Previous
                                    </button>
                                )}
                                {currentIndex < protocol.length - 1 && (
                                    <button className="bg-cyan-500 hover:bg-cyan-600 mt-4 md:mt-4 text-center w-60 rounded-md px-3 py-3 font-semibold text-white" onClick={nextExercise}>
                                        Next
                                    </button>
                                )}
                            </div>
                            {currentIndex >= protocol.length - 1 && (
                                <button className="bg-cyan-500 hover:bg-cyan-600 mt-4 md:mt-4 text-center w-60 rounded-md px-3 py-3 font-semibold text-white ml-28 md:ml-0" 
                                onClick={() => router.push(`/profile/protocol?id=${protocolId}`)}>
                                
                                 Mark session as complete
                                </button>
                            )}
                        </div>
                    ) : (
                        <div></div>
                    )}
                </div>
            ) : (
                <div>router.push(&quot;/login&quot;)</div>
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

export default ProtocolSession;
