import { useState, useEffect } from 'react';
export default function Terms() {
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        
        setLoading(false);
    }, []);

    return (
        <div className="min-h-screen flex flex-col mt-[50px] ml-40  md:ml-0 w-full">
        {loading ? (
            <div className="fixed top-[80px] left-0 w-full h-1 bg-blue-400 overflow-hidden">
                <div
                    className="w-full h-full bg-blue-900"
                    style={{ animation: 'move 2s infinite' }}
                ></div>
            </div>
        ) : (
        <div className="mt-10">
            <h2 className="font-bold">1. Introduction</h2>
            <div className="pt-2 pl-10">
                Please read these Terms of Service as it is binding upon You by downloading and being a User of the Site and the App.
            </div>
            <h2 className="pt-5 font-bold">
                2. Terminology</h2>
                <div className="pt-4 pl-10">
    &quot;Agreement&quot; refers to these Terms of Service; &quot;App(s)&quot; refers to our mobile applications made available to you through Apple AppStore, Google Play or Android Marketplace;
</div>
<div className="pt-4 pl-10">
    &quot;Mehab&quot; refers to our company, known as &quot;Mehab, LLC&quot;; our Site; our Service; or a combination of all or some of the preceding definitions, depending on the context in which the word is used;
</div>
<div className="pt-4 pl-10">
    &quot;Registered User&quot; is a User who has registered an account on the Website (&quot;Account&quot;), has a valid account on the social networking service (&quot;SNS&quot;) through which the User has connected to the Services (each such account, a &quot;Third Party Account&quot;), or has an account with the applications provider for the User&rsquo;s mobile device.
</div>
<div className="pt-4 pl-10">
    &quot;Service&quot; refers to the services that we provide, including our Apps, our Site, and referring you to third parties that provide goods and services you may be interested in;
</div>
<div className="pt-4 pl-10">
    &quot;Site&quot; refers to any website controlled by us where this privacy policy appears, including www.mehab.net; &quot;User&quot; refers to users of our Apps and visitors to our Site;
</div>
<div className="pt-4 pl-10">
    &quot;You&quot; refers to you, the person who is entering into this Agreement with Mehab.
</div>
<h2 className="pt-5 font-bold">
    3. What is Mehab?
</h2>
<div className="pt-4 pl-10">
    Mehab is a mobile app that provides injury and post-surgical rehabilitation protocol information. Your progress is tracked and displayed to be able to show your healthcare professional and you, your progress. You are solely responsible for how You use the App. If you experience any noticeable increase in pain or discomfort then You must consult further with a medical practitioner. Mehab is not a medical care, or treatment service, and should not be used in lieu of evaluation or care by a medical professional.
</div>
<h2 className="pt-5 font-bold">
    4. Eligibility
</h2>
<div className="pt-4 pl-10">
    We are a professional medical education company and in order to access our App and Site you must: · not be in violation of any embargoes, export controls, or other laws of the United States or other countries having jurisdiction over this Agreement, Mehab, and yourself. For example, if the Office of Foreign Assets Control prohibits conducting financial transactions with nationals, residents, or banks of your country, you must not use our Service.
</div>
<ol className="list-disc pt-4 pl-20">
    <li>
        Make any purchases through our App, you must be the minimum age required to enter into a contract in the area in which you reside, and, in any event, must not be less than 18 years of age.
    </li>
    <li>
        Be at least 13 years of age in accordance with the Children&rsquo;s Online Privacy Protection Act to use our free App.
    </li>
</ol>

<h2 className="pt-5 font-bold">
    5. Warning
</h2>
<div className="pt-4 pl-10">
    The information that we provide is based upon sound evidence, designed by licensed medical professionals and exceeds the current standard for home exercise programs; however, with any activity there is an inherent risk. We highly recommend that you consult with your healthcare professional before using our App.
</div>

<h2 className="pt-5 font-bold">
    6. License to Bill
</h2>
<div className="pt-4 pl-10">
    <div>
        Subject to your compliance with this Agreement, we grant you a limited non-exclusive, non-transferable, non-sublicensable, revocable license to download, install and use a copy of the App on a single mobile device or computer that you own or control and to run such copy of the App solely for your own personal use.
    </div>
    <div className="pt-4">
        Furthermore, with respect to any App accessed through or downloaded from the Apple App Store (an &quot;App Store Sourced Application&quot;), you will only use the App Store Sourced Application
    </div>
    <ul className="pt-4">
        <li>(i) on an Apple-branded product that runs the iOS (Apple&rsquo;s proprietary operating system)</li>
        <li>(ii) as permitted by the &quot;Usage Rules&quot; set forth in the Apple App Store Terms of Service.</li>
    </ul>
</div>
<div className="pt-4 pl-10">
    You understand that the Site, Apps and the Services are evolving. As a result, we may require you to accept updates to the Site, Apps or the Services that you have installed on your computer or mobile device. You acknowledge and agree that we may update the Site, Apps and/or the Services with or without notifying you.
</div>
<div className="pt-4 pl-10">
    As a part of the Site, Apps or Service, you may have access to materials that are hosted by another party. You agree that it is impossible for Mehab to monitor such materials and that you access these materials at your own risk.
</div>
<div className="pt-4 pl-10">
    In order to access certain features of the Site, Apps and/or the Services you may be required to become a Registered User. If you access the Services through an SNS as part of the functionality of the Site, Apps or the Services, you may link your Account with Third-Party Accounts, by either
    <ul className="pt-4">
        <li>(i) providing your Third Party Account login information to Mehab through the Site, Apps or the Services; or </li>
        <li>(ii) allowing Mehab to access your Third-Party Account, as is permitted under the applicable terms and conditions that govern your use of each Third-Party Account. You represent that you are entitled to disclose your Third Party Account login information to Mehab and/or grant Mehab access to your Third-Party Account (including, but not limited to, for use for the purposes described herein) without breach by you of any of the terms and conditions that govern your use of the applicable Third-Party Account and without obligating Mehab to pay any fees or making Mehab subject to any usage limitations imposed by such third-party service providers. By granting Mehab access to any Third Party Accounts, you understand that Mehab will access, make available and store (if applicable) any Content that you have provided to and stored in your Third-Party Account (&quot;SNS Content&quot;) so that it is available on and through the Site, Apps and/or Services via your Account Unless otherwise specified in this Agreement, all SNS Content shall be considered to be Your Content (as defined below) for all purposes of this Agreement. Depending on the Third-Party Accounts you choose and subject to the privacy settings that you have set in such Third-Party Accounts, personally identifiable information that you post to your Third-Party Accounts will be available on and through your Account on the Site, Apps, and Services. Please note that if a Third-Party Account or associated service becomes unavailable or Mehab&rsquo;s access to such Third-Party Account is terminated by the third-party service provider, then SNS Content will no longer be available on and through the Site, Apps, and Services. You have the ability to disable the connection between your Account and your Third-Party Accounts at any time by accessing the &quot;Settings&quot; section of the Apps.
        </li>
    </ul>
    <div className="font-bold pt-4">
        PLEASE NOTE THAT YOUR RELATIONSHIP WITH THE THIRD PARTY SERVICE PROVIDERS ASSOCIATED WITH YOUR THIRD-PARTY ACCOUNTS IS GOVERNED SOLELY BY YOUR AGREEMENT(S) WITH SUCH THIRD-PARTY SERVICE PROVIDERS.
    </div>
    <div className="pt-4">
        Mehab makes no effort to review any SNS Content for any purpose, including but not limited to, for accuracy, legality or noninfringement and Mehab is not responsible for any SNS Content.
    </div>
</div>
<div className="pt-4 pl-10">
    You are responsible for all activities that occur under your Account. You may not share your Account or password with anyone, and you agree to 
    <ul>
        <li>(1) notify Mehab immediately of any unauthorized use of your password or any other breach of security; and </li>
        <li>(2) exit from your Account at the end of each session.</li>
    </ul>
    <div className="pt-4">
        You must provide all equipment and software necessary to connect to the Site, Apps and the Services, including but not limited to, a mobile device that is suitable to connect with and use the Site, Apps and the Services, in cases where the Services offer a mobile component. You are solely responsible for any fees, including Internet connection or mobile fees, that you incur when accessing the Site, Apps and the Services.
    </div>
</div>
<h2 className="pt-5 font-bold">
    7. Rules of Use
</h2>
<div className="pt-4 pl-10">
    Once you are a registered User of Mehab, you must not:
</div>
<ol className="list-decimal pt-4 pl-16">
    <li>Make the Apps available to any third party or try to sell access to the Apps for money or anything else of value.</li>
    <li>
        Modify, translate, adapt, merge, make derivative works of, disassemble, decompile, reverse compile or reverse engineer any part of the Site, Apps or Services.
    </li>
    <li>
        Access the Site, Apps or Services in order to build a similar or competitive website, application or service.
    </li>
    <li>
        Use any manual or automated software, devices or other processes (including but not limited to spiders, robots, scrapers, crawlers, avatars, data mining tools or the like) to &quot;scrape&quot; or download data from any web pages contained in the Site, Apps or Services.
    </li>
    <li>
        Violate the laws of the United States, its states, or any foreign political entity having jurisdiction over this Agreement, whether or not the foreign political entity is a country or a subdivision (such as a state or province) or municipality (such as a city, town, county, or region) of a foreign country. Post or send anything violent, threatening, pornographic, racist, hateful, or otherwise objectionable. Infringe on anyone&apos;s intellectual property rights, defame anyone, impersonate anyone, or otherwise violate the rights of a third party. Basically, don&apos;t do anything online to someone that would get you a black eye if you did it in real life.
    </li>
    <li>
        Hack, crack, phish, SQL inject, or otherwise compromise the security or integrity of our Site, Service, or its Users&apos; computers.
    </li>
    <li>
        Do anything else that Mehab believes could harm us or any third party.
    </li>
    <li>
        Mehab, its suppliers and service providers reserve all rights not granted in the Agreement. Any unauthorized use of the Site, Apps or the Services terminates the licenses granted by Mehab pursuant to this Agreement.
    </li>
</ol>
<h2 className="pt-5 font-bold">8. Paid Goods</h2>
<div className="pt-4 pl-10">
    We may offer third party goods and services through our Site, Apps and Services. Please note that all terms surrounding payment, order fulfillment, and refunds are covered by such third-party provider and not Mehab, and are hereby incorporated into this Agreement by reference.
</div>
<div className="pt-4 pl-10">
    <h2 className="font-bold">Content</h2>
    <ul className="pl-6 list-decimal">
        <li className="pt-2">You acknowledge that all information, data, text, software, music, sound, photographs, graphics, video, messages, tags and/or other materials accessible through the Site, Apps or the Services, whether publicly posted or privately transmitted (&quot;Content&quot;), are the sole responsibility of the party from whom such Content originated. This means that you, and not Mehab, are entirely responsible for all Content that you upload, post, e-mail, transmit or otherwise make available (&quot;Make Available&quot;) through the Services, Apps, or the Site (&quot;Your Content&quot;), and other Users of the Services, and not Mehab, are similarly responsible for all Content they Make Available through the Services, Apps, the Software or the Site (&quot;User Content&quot;).</li>
        <li className="pt-2">
            You acknowledge that Mehab has no obligation to pre-screen Content (including, but not limited to, Your Content and User Content), although Mehab reserves the right in its sole discretion to pre-screen, refuse or remove any Content. By entering into the Terms, you hereby provide your irrevocable consent to such monitoring and recording. You acknowledge and agree that you have no expectation of privacy concerning the transmission of Your Content, including without limitation chat, text, or voice communications. In the event that Mehab pre-screens, refuses or removes any Content, you acknowledge that Mehab will do so for Company&apos;s benefit, not yours. Without limiting the foregoing, Mehab shall have the right to remove any Content that violates this Agreement or is otherwise objectionable.
        </li>
        <li className="pt-2">
            Unless expressly agreed to by Mehab in writing elsewhere, Mehab has no obligation to store any of Your Content that you Make Available on the Site, Apps or via the Services. Mehab has no responsibility or liability for the deletion or accuracy of any Content, including Your Content; the failure to store, transmit or receive transmission of Content; or the security, privacy, storage, or transmission of other communications originating with or involving use of the Services. Certain Services may enable you to specify the level at which such Services restrict access to Your Content. You are solely responsible for applying the appropriate level of access to Your Content. If you do not choose, the system may default to its most permissive setting. You agree that Mehab retains the right to create reasonable limits on Mehab’s use and storage of the Content, including Your Content, such as limits on file size, storage space, processing capacity, and similar limits described in the web pages accompanying the Services and as otherwise determined by Mehab in its sole discretion.
        </li>
        <li className="pt-2">
            Whenever submitting Your Content to our Sites or Apps, you agree that you are granting us a non-exclusive, universal, perpetual, irrevocable, sublicensable, commercial and non-commercial right to use, distribute, sell, publish, and otherwise make use of Your Content that you submit to us. You warrant to us that you have the right to grant us this right over Your Content, and that you will indemnify us for any loss resulting from a breach of this warranty and defend us against claims regarding the same. Except with respect to Your Content, you agree that you have no right or title in or to any Content that appears on or in the Site, Apps or the Services, including, but not limited to, the virtual goods or currency appearing or originating in any Mehab game, whether earned in a game or purchased from Mehab, or any other attributes associated with an account or stored on the Site, Apps or Services. Mehab prohibits and does not recognize any purported transfers of virtual property effectuated outside of the Services, or the purported sale, lease, gift or trade in the &quot;real world&quot; of anything that appears or originates in the Services. Accordingly, you may not trade, sell or attempt to sell in-game items or currency for &quot;real&quot; money, or exchange those items or currency for value of any kind outside of a game. Any such transfer or attempted transfer is prohibited and void, and will subject your Account to termination. Notwithstanding anything contained herein to the contrary, by submitting Your Content to any forums, comments or any other area on the Website or the Services, you hereby expressly permit Company to identify you by your username (which may be a pseudonym) as the contributor of Your Content in any publication in any form, media or technology now known or later developed in connection with Your Content.
        </li>
        <li className="pt-2">
            Notwithstanding anything to the contrary herein, you acknowledge and agree that you shall have no ownership or other property interest in your Account, and you further acknowledge and agree that all rights in and to your Account are and shall forever be owned by and inure to the benefit of Mehab. You agree that submission of any ideas, suggestions, documents, and/or proposals to Mehab through its suggestion, feedback, wiki, forum or similar pages (&quot;Feedback&quot;) is at your own risk and that Mehab has no obligations (including without limitation obligations of confidentiality) with respect to such. You represent and warrant that you have all rights necessary to submit the Feedback. You hereby grant to Mehab a fully-paid, royalty-free, perpetual, irrevocable, worldwide, non-exclusive, and fully sublicensable right and license to use, reproduce, perform, display, distribute, adapt, modify, reformat, create derivative works of, and otherwise commercially or non-commercially exploit in any manner, any and all Feedback, and to sublicense the foregoing rights, in connection with the operation and maintenance of the Site, Apps and the Services.
        </li>
    </ul>
</div>
<h2 className="pt-5 font-bold">10. Third-Party Services.</h2>
<div className="pt-4 pl-10">
    The Site, Services, and Apps may contain links to third-party websites (&quot;Third Party Websites&quot;) and advertisements for third parties (collectively, &quot;Third Party Websites & Ads&quot;). When you click on a link to a Third Party Website or Ad, we will not warn you that you have left our Site or App and are subject to the terms and conditions (including privacy policies) of another website or destination. Such Third-Party Websites are not under the control of Mehab. Mehab is not responsible for any Third-Party Websites & Ads. Mehab provides these Third-Party Websites & Ads only as a convenience and does not review, approve, monitor, endorse, warrant, or make any representations with respect to Third-Party Websites & Ads, or their products or services. You use all links in Third-Party Websites & Ads at your own risk. When you leave our Site or App, our terms and policies no longer govern. You should review applicable terms and policies, including privacy and data gathering practices, of any Third-Party Websites, and should make whatever investigation you feel necessary or appropriate before proceeding with any transaction with any third party.
</div>
<div className="pt-4 pl-10">
    You acknowledge and agree that the availability of the Apps and the Services is dependent on the third party from which you received the Application license, e.g., the Apple iPhone or Android app stores (&quot;App Store&quot;). You acknowledge that this Agreement is between you and Mehab and not with the App Store. Mehab, not the App Store, is solely responsible for the Site, Services, and Apps, the content thereof, maintenance, support services, and warranty therefor, and addressing any claims relating thereto (e.g. product liability, legal compliance, or intellectual property infringement). In order to use the App, you must have access to a wireless network, and you agree to pay all fees associated with such access. You also agree to pay all fees (if any) charged by the App Store in connection with the App or Services. You agree to comply with, and your license to use the App is conditioned upon your compliance with, all applicable third-party terms of agreement (e.g., the App Store&apos;s terms and policies) when using the App and the Services. You acknowledge that the App Store (and its subsidiaries) are third party beneficiaries of this Agreement and will have the right to enforce it.
</div>
<h2 className="pt-5 font-bold">11. Our Name</h2>
<div className="pt-4 pl-10">
    &quot;Mehab&quot; is a registered trademark used by us, Mehab, LLC, to uniquely identify our Site, Apps, Service, and business. You agree not to use this phrase anywhere without our prior written consent. Additionally, you agree not to use our trade dress or copy the look and feel of our website or its design, without our prior written consent. You agree that this paragraph goes beyond the governing law on intellectual property law, and includes prohibitions on any competition that violates the provisions of this paragraph, including starting your own app.
</div>
<h2 className="pt-5 font-bold">12. Revocation of Consent</h2>
<div className="pt-4 pl-10">
    We may revoke our consent for your use of our intellectual property, or any other permission granted to you under this Agreement, at any time. You agree that if we so request, you must take immediate action to remove any usage of our intellectual property that you may have engaged in, or surrender it to us, even if it would cause a loss to you.
</div>
<h2 className="pt-5 font-bold">13. Copyright Infringement</h2>
<div className="pt-4 pl-10">
    If you believe that your copyright has been infringed, send us a DMCA notice which contains:
    <ul className="list-decimal pl-6">
        <li>Your name.</li>
        <li>The name of the party whose copyright has been infringed, if different from your name.</li>
        <li>The name and description of the work that is being infringed.</li>
        <li>The location on our website of the infringing copy.</li>
        <li>A statement that you have a good faith belief that use of the copyrighted work described above is not authorized by the copyright owner (or by a third party who is legally entitled to do so on behalf of the copyright owner) and is not otherwise permitted by law.</li>
        <li>A statement that you swear, under penalty of perjury, that the information contained in this notification is accurate and that you are the copyright owner or have an exclusive right in law to bring infringement proceedings with respect to its use.</li>
        <li>You must sign this notification and send it to our Copyright Agent at support@mehab.net. Although U.S. law does not provide for a similar procedure for trademark infringement, we recommend that you send us similar information to that above in regards to any allegation of trademark infringement, and we will address it as soon as practicable.</li>
    </ul>
</div>
<h2 className="pt-5 font-bold">14. Defamation</h2>
<div className="pt-4 pl-10">
    United States law—specifically Section 230 of the Communications Decency Act—creates a defense for us for the actions of third parties in regards to any defamatory content posted on our website. Although we are not liable for defamatory words posted on our website by our Users even if given notice, we do prohibit defamation under this Agreement and we may, if we believe the situation warrants it, take action against the offending User. Please notify us at support@Mehab.com if any of our Users have posted anything that you believe is defamatory.
</div>
<h2 className="pt-5 font-bold">15. Representations & Warranties; Limits on our Liability</h2>
<div className="pt-4 pl-10">
    We make no representations or warranties as to the merchantability of our service for any particular purpose. You agree that you are releasing us from any liability that we may otherwise have to you in relation to or arising from this agreement or our services, for reasons including, but not limited to, failure of our service, negligence, or any other tort. To the extent that applicable law restricts this release of liability, you agree that we are only liable to you for the minimum amount of damages that the law restricts our liability to if such a minimum exists.
</div>
<div className="pt-4 pl-10">
    You agree that we are not responsible in any way for damages caused by third parties who may use our services, including but not limited to people who commit intellectual property infringement, defamation, tortious interference with economic relations, or any other actionable conduct towards you.
</div>
<div className="pt-4 pl-10">
    We are not responsible for any failure of a third party to fulfill their commitments to you.
</div>
<div className="pt-4 pl-10">
    We are not liable for any failure of the goods or services of our company or a third party, including any failures or disruptions, untimely delivery, scheduled or unscheduled, intentional or unintentional, on our website which prevents access to our website temporarily or permanently.
</div>
<div className="pt-4 pl-10">
    Mehab does not offer any medical diagnosis. Any content accessed through the site, apps or services is for informational and educational purposes only and is not intended to diagnose a medical condition. The content should not be used during a medical emergency or for the diagnosis of any medical condition. Please consult your doctor or other qualified health care provider if you have any questions about a medical condition, or before taking any drug, changing your diet, or commencing or discontinuing any course of treatment. Do not ignore or delay obtaining professional medical advice because of information accessed through the site, apps or services. Call 911 (or equivalent emergency service telephone number) or your doctor for all medical emergencies.
</div>
<div className="pt-4 pl-10">
    The provision of our service to you is contingent on your agreement with this and all other sections of this agreement. Nothing in the provisions of this &quot;representations &amp; warranties&quot; section shall be construed to limit the generality of the first paragraph of this section.
</div>
<div className="pt-4 pl-10">
    For jurisdictions that do not allow us to limit our liability: Notwithstanding any provision of these terms, if your jurisdiction has provisions specific to waiver or liability that conflict with the above, then our liability is limited to the smallest extent possible by law. Specifically, in those jurisdictions not allowed, we do not disclaim liability for:
    <ul className="pt-2">
        <li>(a) death or personal injury caused by its negligence or that of any of its officers, employees, or agents; or</li>
        <li>(b) fraudulent misrepresentation; or</li>
        <li>(c) any liability which it is not lawful to exclude either now or in the future.</li>
    </ul>
</div>
<div className="pt-4 pl-10">
    You understand and agree that in no event shall Mehab be liable for any indirect, incidental, special, exemplary, or consequential damages arising out of or in connection with the site, apps, the services, or the site content, including, without limitation, any damages resulting from loss of use, data, or profits, whether or not the company has been advised of the possibility of such damages, or for any damages for personal or bodily injury or emotional distress arising out of or in connection with these terms, or from any communications, interactions, or meetings with other users of the site, the apps, or the services, on any theory of liability, resulting from:
    <ul className="pt-2 pl-2">
        <li>(1) the use or inability to use the site, the apps, or the services;</li>
        <li>(2) the cost of procurement of substitute goods or services resulting from any goods, data, information, or services purchased or obtained or messages received for transactions entered into through the site, the apps, or the services;</li>
        <li>(3) unauthorized access to or alteration of your transmissions or data;</li>
        <li>(4) statements or conduct of any third party on the site, apps, or the services; or</li>
        <li>(5) any other matter related to the site, apps, or the services, whether based on warranty, copyright, contract, tort (including negligence), product liability, or any other legal theory.</li>
    </ul>
</div>
<div className="pt-4 pl-10">
    Under no circumstances will Mehab be liable to you for more than the amount received by Mehab as a result of your use of the Site, Apps, and Services. If you have not paid Mehab any amounts, Mehab&apos;s sole and exclusive liability shall be limited to fifty dollars ($50).
</div>

<div className="pt-4 pl-10">
    The limitations of damages set forth above are fundamental elements of the basis of the bargain between Mehab and you.
</div>
<div className="pt-4 pl-10">
    If you are a resident of a jurisdiction that requires a specific statement regarding release, then the following applies. California residents must, as a condition of this agreement, waive the applicability of California Civil Code Section 1542, which states, &quot;a general release does not extend to claims which the creditor does not know or suspect to exist in his or her favor at the time of executing the release, which if known by him or her must have materially affected his or her settlement with the debtor.&quot; You hereby waive this section of the California Civil Code. You hereby waive any similar provision in law, regulation, or code that has the same intent or effect as the aforementioned release.
</div>

<h2 className="pt-5 font-bold">16. Indemnity</h2>
<div className="pt-4 pl-10">
    You agree to indemnify and hold us harmless for any claims by you or any third party which may arise from or relate to this Agreement or the provision of our service to you, including any damages caused by your use of our website or acceptance of the offers contained on it. You also agree that you have a duty to defend us against such claims and we may require you to pay for an attorney(s) of our choice in such cases. You agree that this indemnity extends to requiring you to pay for our reasonable attorneys&apos; fees, court costs, and disbursements. In the event of a claim such as one described in this paragraph, we may elect to settle with the party/parties making the claim, and you shall be liable for the damages as though we had proceeded with a trial.
</div>
<h2 className="pt-5 font-bold">17. Litigation</h2>
<div className="pt-4 pl-10">
    This Agreement shall be governed by the laws in force in the State of Pennsylvania. The offer and acceptance of this contract are deemed to have occurred in the State of Pennsylvania.
</div>
<div className="pt-4 pl-10">
    You agree that any dispute arising from or relating to this Agreement will be heard in the lowest civil court in the State of Pennsylvania (&quot;Small Claims Court&quot;).
</div>
<div className="pt-4 pl-10">
    If a dispute claims multiple claims and one or more of those claims would be eligible to be heard by the Small Claims Court, you agree not to bring the other claims against us and to instead proceed within the Small Claims Court.
</div>
<div className="pt-4 pl-10">
    If you would be entitled in a dispute to an amount exceeding the monetary jurisdiction of the Small Claims Court, you agree to waive your right to collect any damages in excess of the monetary jurisdiction and instead still bring your claim within the Small Claims Court.
</div>
<div className="pt-4 pl-10">
    You agree that if a dispute is eligible to be heard in Small Claims Court but you would be entitled to an additional or alternative remedy in a higher court, such as injunctive relief, you will waive your right to that remedy and still bring the dispute within the Small Claims Court.
</div>
<div className="pt-4 pl-10">
    If you bring a dispute in a manner other than in accordance with this section, you agree that we may move to have it dismissed and that you will be responsible for our reasonable attorneys&apos; fees, court costs, and disbursements in doing so.
</div>
<div className="pt-4 pl-10">
    You agree that the unsuccessful party in any dispute arising from or relating to this Agreement will be responsible for the reimbursement of the successful party&apos;s reasonable attorneys&apos; fees, court costs, and disbursements.
</div>
<h2 className="pt-5 font-bold">18. Force Majeure</h2>
<div className="pt-4 pl-10">
    You agree that we are not responsible to you for anything that we may otherwise be responsible for, if it is the result of events beyond our control, including, but not limited to, acts of God, war, insurrection, riots, terrorism, crime, labor shortages (including lawful and unlawful strikes), embargoes, postal disruption, communication disruption, failure or shortage of infrastructure, shortage of materials, or any other event beyond our control.
</div>
<h2 className="pt-5 font-bold">19. Severability</h2>
<div className="pt-4 pl-10">
    In the event that a provision of this Agreement is found to be unlawful, conflicting with another provision of the Agreement, or otherwise unenforceable, the Agreement will remain in force as though it had been entered into without that unenforceable provision being included in it.
</div>
<h2 className="pt-5 font-bold">20. Non-Waiver</h2>
<div className="pt-4 pl-10">
    Mehab reserves all rights afforded to us under this Agreement as well as under the provisions of any applicable law. Our non-enforcement of any particular provision or provisions of this Agreement or any applicable law should not be construed as our waiver of the right to enforce that same provision under the same or different circumstances at any time in the future.
</div>
<h2 className="pt-5 font-bold">21. Termination</h2>
<div className="pt-4 pl-10">
    We may terminate your account or access as well as access to our Site, Apps, and Service to you at our discretion without explanation, though we will strive to provide a timely explanation in most cases. Under no circumstances, including termination or cancellation of our Service to you, will we be liable for any losses related to the actions of other Users.
</div>
<h2 className="pt-5 font-bold">22. Assignment of Rights</h2>
<div className="pt-4 pl-10">
    You may not assign your rights and/or obligations under this Agreement to any other party without our prior written consent. We may assign our rights and/or obligations under this Agreement to any other party at our discretion.
</div>
<h2 className="pt-5 font-bold">23. Amendments</h2>
<div className="pt-4 pl-10">
    We may amend this Agreement periodically. Any amendments will be posted. Your agreement to those changes will be through your continued use of our Service. If you do not agree to the changes, you must cease using our Site and Service immediately and inform us of your non-agreement with sufficient information to identify your account at support@mehab.net so that we may disable your account.
</div>
<h2 className="pt-5 font-bold">24. Downloading Apps from iTunes</h2>
<div className="pt-4 pl-10">
    The following applies to any App accessed through or downloaded from the Apple App Store (&quot;App Store Sourced Application&quot;):
    <ul className="ml-2 space-y-2">
        <li>
            (a) You acknowledge and agree that 
            <div className="ml-6">
                <div>(i) these Terms are concluded between you and Mehab only, and not Apple, and</div>
                <div>(ii) Mehab, not Apple, is solely responsible for the App Store Sourced Application and content thereof. Your use of the App Store Sourced Application must comply with the App Store Terms of Service.</div>
            </div>
        </li>
        <li>(b) You acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the App Store Sourced Application.</li>
        <li>
            (c) In the event of any failure of the App Store Sourced Application to conform to any applicable warranty, you may notify Apple, and Apple will refund the purchase price for the App Store Sourced Application to you. To the maximum extent permitted by applicable law, Apple will have no other warranty obligation whatsoever with respect to the App Store Sourced Application. As between Mehab and Apple, any other claims, losses, liabilities, damages, costs, or expenses attributable to any failure to conform to any warranty will be the sole responsibility of Mehab.
        </li>
        <li>
            (d) You and Mehab acknowledge that, as between Mehab and Apple, Apple is not responsible for addressing any claims you have or any claims of any third party relating to the App Store Sourced Application or your possession and use of the App Store Sourced Application, including, but not limited to:
            <div className="pl-6">
                <div>(i) product liability claims;</div>
                <div>(ii) any claim that the App Store Sourced Application fails to conform to any applicable legal or regulatory requirement; and</div>
                <div>(iii) claims arising under consumer protection or similar legislation.</div>
            </div>
        </li>
        <li>
            (e) You and Mehab acknowledge that, in the event of any third-party claim that the App Store Sourced Application or your possession and use of that App Store Sourced Application infringes that third party&apos;s intellectual property rights, as between Mehab and Apple, Mehab, not Apple, will be solely responsible for the investigation, defense, settlement, and discharge of any such intellectual property infringement claim to the extent required by these Terms.
        </li>
        <li>
            (f) You and Mehab acknowledge and agree that Apple, and Apple&apos;s subsidiaries, are third-party beneficiaries of these Terms as related to your license of the App Store Sourced Application, and that, upon your acceptance of the terms and conditions of these Terms, Apple will have the right (and will be deemed to have accepted the right) to enforce these Terms as related to your license of the App Store Sourced Application against you as a third-party beneficiary thereof.
        </li>
        <li>
            (g) Without limiting any other terms of these Terms, you must comply with all applicable third-party terms of agreement when using the App Store Sourced Application.
        </li>
    </ul>
</div>

<h2 className="pt-5 font-bold">25. Consumer Complaints</h2>
<div className="pt-4 pl-10">
    In accordance with the Pennsylvania Civil Code, you may report complaints to the Bureau of Consumer Protection, 15th Floor, Strawberry Square, Harrisburg, PA 17120, or by telephone at (800) 441-2555.
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
    )
}