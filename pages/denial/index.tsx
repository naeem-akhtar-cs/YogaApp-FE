import { useRouter } from 'next/router'
import { useState, useEffect } from 'react';

export default function Denial() {
    const router = useRouter();
    const protocolId = router.query.protocolId;
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="min-h-screen flex flex-col mt-[20px] ml-40 md:ml-0 w-full ">
            {loading ? (
                <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                    <div
                        className="w-full h-full bg-blue-900"
                        style={{ animation: 'move 2s infinite' }}
                    ></div>
                </div>
            ) : (
                <div className="mt-[90px] space-y-6 px-10 lg:px-40 md:px-40">
                    <h2 className="text-5xl font-bold text-center">Denial</h2>
                    <div className="mt-14 space-y-6">
                        <div>You have identified yourself as a person who would benefit from further assessment from a healthcare professional.</div>
                        <div>While purchasing of protocols is permitted without consultation, Mehab highly recommends having an evaluation to identify potentially serious conditions, ensure your appropriateness to participate, and improve the accuracy of your diagnosis.</div>
                        <div>This will in turn maximize the benefits of a self-directed rehabilitation protocol.</div>
                    </div>
                    <div className='flex justify-center space-x-4 '>
    <button
        type="submit"
        className="px-4 py-2 lg:px-3 lg:py-2.5 md:px-3 md:py-2.5 w-full lg:w-80 md:w-80 rounded-md border-2 text-md font-semibold leading-6 text-black shadow-sm"
        onClick={() => router.push(`/waiver?protocolId=${protocolId}`)}
    >
        Ignore &amp; Continue
    </button>
    <button
        type="submit"
        className="px-2 py-2 lg:px-3 lg:py-2.5 md:px-3 md:py-2.5 w-full lg:w-80 md:w-80 bg-cyan-700 rounded-md text-md font-semibold leading-6 text-white shadow-sm"
        onClick={() => router.push(`/protocols`)}
    >
        I&apos;ll be back
    </button>
</div>

                </div>
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
}
