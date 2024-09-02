import Link from "next/link";
import { useRouter } from 'next/router'
import { useState, useEffect } from "react";

export default function Waiver() {
    const router = useRouter();
    const protocolId = router.query.protocolId as string
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <div className="min-h-screen flex flex-col mt-[50px] ml-40 md:ml-0">
        {loading ? (
            <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                <div
                    className="w-full h-full bg-blue-900"
                    style={{ animation: 'move 2s infinite' }}
                ></div>
            </div>
        ) : (
        <div className="mt-[50px] space-y-6 px-10 lg:px-40 md:px-40">
            <h2 className="text-5xl font-bold text-center">Waiver</h2>
            <div className="mt-14 space-y-4">
                <h2 className="text-2xl text-center">RELEASE, WAIVER OF LIABILITY AND HOLD HARMLESS AGREEMENT</h2>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h2 className="text-xl text-left">1. Recognition of health and safety</h2>
                        <div className="ml-6">As a user of the Mehab, LLC. App (<span className="font-bold">App</span>) and website (<Link href="/"><span className="underline underline-offset-2 text-blue-600">www.mehab.net</span></Link>) (<span className="font-bold">Website</span>), you understand and acknowledge that:</div>
                        <ul className="list-disc ml-14">
                            <li>
                                You are over 18 years of age to be eligible to use the App and Website. If you are under 18 years of age, your parent or guardian has expressly authorised your use of the App and Website and that your parent or guardian supervises your use of the App and Website and is aware of your responses to questions and warnings in the App and Website.
                            </li>
                            <li>You have consulted a medical practitioner or other suitably qualified medical health assessor with regard to your personal needs.</li>
                            <li>You do not have any health issue or medical condition that would prevent you from understanding the instructions in the App or on the Website. You do not have any health issue or medical condition that would prevent you from understanding and truthfully answering any questions in the App or on the Website that relate to you, your health and pain levels, and medical issues.</li>
                            <li>You understand that any warnings provided by the App or Website need to be followed by you and that you will follow all warnings and directions provided by the App and Website.</li>
                            <li>The App and Website are not a substitute for receiving medical attention from a medical practitioner where you are experiencing severe pain and discomfort.</li>
                            <li>You will immediately cease using the App and Website where you are experiencing severe pain and discomfort and that you will contact a medical practitioner.</li>
                            <li>You understand that undertaking rehabilitation and strengthening exercises for the body may expose you to an inherent risk of further harm, injury, illness, or even death where you do not follow the directions carefully or where you are reckless.</li>
                            <li>You assume all risk of injury or medical complications with respect to your use of the App and Website.</li>
                        </ul>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl text-left">2. Waiver of Mehab LLC. Liability and Indemnification of Mehab LLC. For Risks and Dangers</h2>
                        <div className="ml-6 space-y-3">
                            <div>As a condition precedent to your use of the App and Website, you agree to exercise reasonable care at all times with respect to your safety and with respect to the safety of others. You understand, however, that there are certain dangers, hazards, and risks inherent in the activities included in the use of the App and Website. Mehab LLC. does not assume any responsibility for any personal injuries resulting from your use of the App and Website.</div>
                            <div>Accordingly, by use of the App and Website, you and your spouse (if applicable), heirs, and assigns, do hereby waive, release, absolve, discharge and agree to hold harmless Mehab LLC., its directors, officers, employees, agents, and insurers, (collectively, the &quot;Released Parties&quot;), from and against any and all rights, claims, demands, causes of action, obligations, suits, liens, damages, or liabilities of any kind and character whatsoever, whether known or unknown, suspected or claimed, which you and your spouse (if applicable), heirs, and assigns, shall, or may have, in the future against the Released Parties arising out of, based on, related to, or connected with, your use of the App and Website.</div>
                            <div>You also agree to indemnify and hold the Released Parties harmless from the payment of any and all judgments, settlements, costs, disbursements, and attorneys&apos; fees that are associated with the Released Parties having to defend or investigate any claim, action, or proceeding of any type whatsoever arising out of your use of the App and Website, including, but not limited to, claims for breach of contract, negligence, strict liability, or otherwise. This indemnification obligation and Release, Waiver of Liability and Hold Harmless Agreement does not, however, absolve the Released Parties from any liabilities, damages, costs, disbursements, and attorneys’ fees incurred due to its gross negligence.</div>
                            <div>You understand that if any fact with respect to which this Release, Waiver of Liability and Hold Harmless Agreement is executed is found hereafter to be other than or different from the fact in that connection now believed by you to be true, you expressly accept and assume the risk of such a possible difference in fact and agree that this Release, Waiver of Liability and Hold Harmless Agreement shall be and remain effective notwithstanding such difference in facts.</div>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl text-left">3. Governing Law : Forum</h2>
                        <div className="ml-6 space-y-3">
                            <div>You agree that this Release, Waiver of Liability and Hold Harmless Agreement shall be construed in accordance with the laws of the State of Pennsylvania and Bucks County, Pennsylvania shall be the forum for any lawsuits filed under, or incident to, this Release, Waiver of Liability and Hold Harmless Agreement. The terms and provisions of this Release, Waiver of Liability and Hold Harmless Agreement shall be severable, such that if a court of competent jurisdiction holds any term to be illegal, unenforceable, or in conflict with any law governing this Release, Waiver of Liability and Hold Harmless Agreement, the validity of the remaining portions shall not be affected thereby.</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-center space-x-4'>
                <button type="submit" className="bg-cyan-700 mt-4 w-60 rounded-md px-3 border-2 py-1.5 text-md font-semibold leading-6 text-white shadow-sm" onClick={() => {

                    if (protocolId) {
                        let cartProtocols: string | null = localStorage.getItem("cart");
                        let existingProtocols: string[] = [];

                        if (cartProtocols) {
                            existingProtocols = JSON.parse(cartProtocols) as string[];
                            if (!existingProtocols.includes(protocolId)) {
                                existingProtocols.push(protocolId);
                            }
                        } else {
                            existingProtocols.push(protocolId);
                        }
                        localStorage.setItem("cart", JSON.stringify(existingProtocols));
                        router.push(`/cart`);
                    }
                }}>
                    Accept
                </button>
                <button type="submit" className="bg-red-700 mt-4 w-60 rounded-md px-3 py-1.5 text-md font-semibold leading-6 text-white shadow-sm" onClick={() => router.push(`/`)}>
                    Decline
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
