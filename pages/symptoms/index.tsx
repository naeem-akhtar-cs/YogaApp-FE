import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function Symptoms() {
    const router = useRouter();
    const protocolId = router.query.protocolId as string | undefined;

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleNextClick = () => {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        const isAnyChecked = Array.from(checkboxes).some((checkbox): checkbox is HTMLInputElement => 
            checkbox instanceof HTMLInputElement && checkbox.checked
        );

        if (!isAnyChecked && protocolId) {
            addToCart(protocolId);
            router.push('/cart');
        } else {
            router.push(`/denial?protocolId=${protocolId}`);
        }
    };

    const addToCart = (id: string) => {
        const cart: string[] = JSON.parse(localStorage.getItem('cart') || '[]');
        if (!cart.includes(id)) {
            cart.push(id);
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    };
    return (
        <div className="min-h-screen flex flex-col mt-[90px] ml-60 md:ml-0">
            {loading ? (
                <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                    <div
                        className="w-full h-full bg-blue-900"
                        style={{ animation: 'move 2s infinite' }}
                    ></div>
                </div>
            ) : (
                <div className="mt-[30px] space-y-6 px-10 lg:px-40 md:px-40">
                    <h2 className="text-5xl font-bold text-center">Symptoms</h2>
                    <div className="mt-14">
                        <div>Please read the list of symptoms below. If you have any of the following, it is recommended, if you have not already done so, that you see a healthcare professional.</div>
                        <div className="space-y-2 mt-4">
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Unexplained weight loss {'>'} 10lbs (4.5kg)</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Pain at night or rest</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Bowel or bladder changes</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">History of cancer</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Over 50 years of age</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Altered sensation in saddle area</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Immunosuppression</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Recent fall, MVA or trauma</span>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" />
                                <span className="ml-2">Decreased control of limbs</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <button
                            type="button"
                            className="bg-cyan-700 mt-4 w-80 rounded-md px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm"
                            onClick={handleNextClick}
                        >
                            Next
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