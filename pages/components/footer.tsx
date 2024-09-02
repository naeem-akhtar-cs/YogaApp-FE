// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

// const Footer = () => {
//   return (
//     <div className="bg-gray-100 mt-10 h-auto relative z-10 w-[600px] p-4 md:p-10 md:w-full">
//       <div className="flex flex-col md:flex-row p-4">
       
//         <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/4 flex justify-center md:justify-start">
//           <Link href="/">
//             <Image
//               className="h-16 w-auto"
//               src="/logo.png"
//               alt="Mehab"
//               width={150}
//               height={150}
//             />
//           </Link>
//         </div>

//         <div className="flex px-15 md:px-0 md:flex-row md:w-1/2 md:space-x-8 mb-6 md:mb-0 text-center md:text-left ">
//           <div className="flex flex-col md:w-1/2 mb-4 md:mb-0 mt-14 md:mt-0">
//             <Link href="/" className="text-gray-400 text-lg mb-2">Home</Link>
//             <Link href="/protocols" className="text-gray-400 text-lg mb-2">Protocols</Link>
//             <Link href="/settings" className="text-gray-400 text-lg">Settings</Link>
//           </div>
          
//           <div className="flex flex-col md:w-1/2 mb-4 md:mb-0 mx-20 text-start">
//             <div className="text-2xl mb-2 mt-4 md:mt-0">About</div>
//             <Link href="/" className="text-gray-400 text-lg mb-2">About Mehab</Link>
//             <Link href="/terms" className="text-gray-400 text-lg mb-2">Terms & Conditions</Link>
//             <Link href="/" className="text-gray-400 text-lg mb-2">Privacy Policy</Link>
//             <Link href="/" className="text-gray-400 text-lg">Feedback</Link>
//           </div>
          
//           {/* Share Section */}
//           <div className="flex flex-col md:w-1/12 mb-4 md:mb-0 justify">
//             <div className="text-2xl mb-2    ">Share</div>
//             <div className="flex space-x-4 justify-center md:justify-start ml-20 mt-14 md:mt-0 md:ml-0">
//               <Link href="https://www.facebook.com/mehabllc/" target="_blank" aria-label="Facebook">
//                 <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" size="lg" />
//               </Link>
//               <Link href="https://twitter.com/mehabllc" target="_blank" aria-label="Twitter">
//                 <FontAwesomeIcon icon={faTwitter} className="text-blue-400" size="lg" />
//               </Link>
//               <Link href="https://www.instagram.com/mehabllc/" target="_blank" aria-label="Instagram">
//                 <FontAwesomeIcon icon={faInstagram} className="text-pink-500" size="lg" />
//               </Link>
//               <Link href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fmehab.net" target="_blank" aria-label="LinkedIn">
//                 <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700" size="lg" />
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="border-t border-gray-200 md:mt-6"></div>
//       <div className="text-gray-500 text-lg text-center md:text-start md:mt-6">© Copyright 2020 All Rights Reserved</div>
//     </div>
//   );
// };

// export default Footer;
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="bg-gray-100 mt-10 h-auto relative z-10 w-[600px] p-4 md:p-10 md:w-full">
      <div className="flex flex-col md:flex-row p-4">
       
        <div className="flex-shrink-0 mb-6 md:mb-0 md:w-1/4 flex justify-center md:justify-start">
          <Link href="/">
            <Image
              className="h-16 w-auto"
              src="/logo.png"
              alt="Mehab"
              width={150}
              height={150}
            />
          </Link>
        </div>

        <div className="flex px-20 md:px-0 md:flex-row md:w-1/2 md:space-x-8 mb-6 md:mb-0 text-start md:text-left ">
          <div className="flex flex-col md:w-1/2 mb-4 md:mb-0 mt-14 md:mt-0">
            <Link href="/" className="text-gray-400 text-lg mb-2">Home</Link>
            <Link href="/protocols" className="text-gray-400 text-lg mb-2">Protocols</Link>
            <Link href="/settings" className="text-gray-400 text-lg">Settings</Link>
          </div>
          
          <div className="flex flex-col md:w-1/2 mb-4 md:mb-0 mx-20 text-start">
            <div className="text-2xl mb-2 mt-4 md:mt-0">About</div>
            <Link href="/" className="text-gray-400 text-lg mb-2">About Mehab</Link>
            <Link href="/terms" className="text-gray-400 text-lg mb-2">Terms & Conditions</Link>
            <Link href="/" className="text-gray-400 text-lg mb-2">Privacy Policy</Link>
            <Link href="/" className="text-gray-400 text-lg">Feedback</Link>
          </div>
          
          {/* Share Section */}
          <div className="flex flex-col md:w-1/3 mb-4 md:mb-0">
            <div className="text-2xl mb-2 hidden md:block">Share</div>
            <div className="flex space-x-4 hidden md:block justify-center md:justify-start">
              <Link href="https://www.facebook.com/mehabllc/" target="_blank" aria-label="Facebook">
                <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" size="lg" />
              </Link>
              <Link href="https://twitter.com/mehabllc" target="_blank" aria-label="Twitter">
                <FontAwesomeIcon icon={faTwitter} className="text-blue-400" size="lg" />
              </Link>
              <Link href="https://www.instagram.com/mehabllc/" target="_blank" aria-label="Instagram">
                <FontAwesomeIcon icon={faInstagram} className="text-pink-500" size="lg" />
              </Link>
              <Link href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fmehab.net" target="_blank" aria-label="LinkedIn">
                <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700" size="lg" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Social Icons Section */}
      <div className="block md:hidden flex flex-col items-center mt-4">
        <div className="flex space-x-4 mb-4">
          <Link href="https://www.facebook.com/mehabllc/" target="_blank" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} className="text-blue-600" size="lg" />
          </Link>
          <Link href="https://twitter.com/mehabllc" target="_blank" aria-label="Twitter">
            <FontAwesomeIcon icon={faTwitter} className="text-blue-400" size="lg" />
          </Link>
          <Link href="https://www.instagram.com/mehabllc/" target="_blank" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500" size="lg" />
          </Link>
          <Link href="https://www.linkedin.com/feed/?linkOrigin=LI_BADGE&shareActive=true&shareUrl=https%3A%2F%2Fmehab.net" target="_blank" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-blue-700" size="lg" />
          </Link>
        </div>
        <div className="text-gray-500 text-lg">© Copyright 2020 All Rights Reserved</div>
      </div>

      <div className="border-t border-gray-200 md:mt-6 hidden md:block"></div>
    </div>
  );
};

export default Footer;
