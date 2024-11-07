// // HeroSection.js

// 'use client'; // for client side rendering
// import React from 'react';
// import Image from 'next/image';

// export default function HeroSection() {
//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//       <div className="text-center">
//         <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
//           <div className="w-52 mb-4 sm:mb-0 sm:w-auto">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
//           </div>
//           <div>
//             {/* Responsive text size adjustments */}
//             <h1 className="text-white text-4xl sm:text-6xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
//             <p className="text-white text-xl sm:text-2xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'; // for client-side rendering
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function HeroSection() {
//   const [showDisclaimer, setShowDisclaimer] = useState(true); // State to control disclaimer visibility

//   // Use effect to hide the disclaimer automatically after 5 minutes (300,000 ms)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowDisclaimer(false);
//     }, 300000); // 300,000 ms = 5 minutes

//     // Cleanup timer when component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//       <div className="text-center">
//         <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
//           <div className="w-52 mb-4 sm:mb-0 sm:w-auto">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
//           </div>
//           <div>
//             <h1 className="text-white text-4xl sm:text-6xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
//             <p className="text-white text-xl sm:text-2xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
//           </div>
//         </div>
//       </div>

//       {/* Disclaimer Modal */}
//       {showDisclaimer && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 mt-14">
//           <div className="bg-[#191919] p-8 rounded-lg text-center max-w-2xl w-full">
//             <h2 className="text-3xl font-bold mb-6 text-white">Welcome to Young CEO Entertainment!</h2>
//             <p className="text-base mb-4 text-white">
//               By using our website and services, you agree to the following terms and conditions:
//             </p>
//             <p className="text-base mb-4 text-white text-justify">
//               <strong>Ownership of Content:</strong> All songs and musical content distributed through our service remain the property of their respective owners. Young CEO Entertainment does not claim any ownership rights over the content provided by users.
//             </p>
//             <p className="text-base mb-4 text-white text-justify">
//               <strong>Dispute Resolution: </strong> 
//               Young Ceo Entertainment has no standing in any disputes arising from the use of third-party samples, vocals, beats, or other elements in the distributed content. Any disputes or legal issues must be resolved directly between the content owner and the third party. Young Ceo Entertainment will not be liable for any damages of any kind arising from the use of this website or from any information, content, materials, products, or services included on or otherwise made available to you through this website.
//             </p>
//             <button
//               onClick={() => setShowDisclaimer(false)}
//               className="mt-6 bg-white text-black px-8 py-3 rounded-md text-lg"
//             >
//               I Agree
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// 'use client'; // for client-side rendering
// import React, { useState, useEffect } from 'react';
// import Image from 'next/image';

// export default function HeroSection() {
//   const [showDisclaimer, setShowDisclaimer] = useState(true); // State to control disclaimer visibility

//   // Use effect to hide the disclaimer automatically after 5 minutes (300,000 ms)
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowDisclaimer(false);
//     }, 300000); // 300,000 ms = 5 minutes

//     // Cleanup timer when component unmounts
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
//       <div className="text-center">
//         <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
//           <div className="w-52 mb-4 sm:mb-0 sm:w-auto">
//             <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
//           </div>
//           <div>
//             <h1 className="text-white text-4xl sm:text-6xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
//             <p className="text-white text-xl sm:text-2xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
//           </div>
//         </div>
//       </div>

//       {/* Disclaimer Modal */}
//       {showDisclaimer && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 mt-14">
//           <div className="bg-[#191919] p-8 rounded-lg text-left max-w-3xl w-full">
//             <h2 className="text-3xl font-bold mb-6 text-white text-left">Welcome to Young CEO Entertainment!</h2> {/* Left-aligned heading */}
//             <p className="text-base mb-4 text-[#AAAAAA] text-justify">
//               By using our website and services, you agree to the following terms and conditions:
//             </p>
//             <p className="text-base mb-4 text-[#AAAAAA] text-justify">
//               <strong className="text-white font-bold">Ownership of Content:</strong> All songs and musical content distributed through our service remain the property of their respective owners. Young CEO Entertainment does not claim any ownership rights over the content provided by users.
//             </p>
//             <p className="text-base mb-4 text-[#AAAAAA] text-justify">
//               <strong className="text-white font-bold">Dispute Resolution:</strong> 
//               Young Ceo Entertainment has no standing in any disputes arising from the use of third-party samples, vocals, beats, or other elements in the distributed content. Any disputes or legal issues must be resolved directly between the content owner and the third party. Young Ceo Entertainment will not be liable for any damages of any kind arising from the use of this website or from any information, content, materials, products, or services included on or otherwise made available to you through this website.
//             </p>
//             <div className="flex justify-center"> {/* Center the button */}
//               <button
//                 onClick={() => setShowDisclaimer(false)}
//                 className="mt-6 bg-white text-black px-8 py-3 rounded-md text-lg"
//               >
//                 I Agree
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// HeroSection.js
'use client'; // for client-side rendering
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Cookies from 'js-cookie'; // Import the cookie library

export default function HeroSection() {
  const [showDisclaimer, setShowDisclaimer] = useState(false); // State to control disclaimer visibility

  // Check for the cookie on component mount
  useEffect(() => {
    const cookie = Cookies.get('disclaimerAgreed'); // Check if the cookie exists

    // If cookie doesn't exist, show the disclaimer
    if (!cookie) {
      setShowDisclaimer(true);
    }
  }, []);

  // Use effect to hide the disclaimer automatically after 5 minutes (300,000 ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDisclaimer(false);
    }, 300000); // 300,000 ms = 5 minutes

    // Cleanup timer when component unmounts
    return () => clearTimeout(timer);
  }, [showDisclaimer]);

  const handleAgree = () => {
    Cookies.set('disclaimerAgreed', 'true', { expires: 30 }); // Set a cookie for 30 days
    setShowDisclaimer(false); // Hide the disclaimer
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/images/background.jpg')" }}>
      <div className="text-center">
        <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-center sm:justify-center sm:space-x-4">
          <div className="w-52 mb-4 sm:mb-0 sm:w-auto">
            <Image src="/images/logo.png" alt="Young CEO Entertainment" width={208} height={64} />
          </div>
          <div>
            <h1 className="text-white text-4xl sm:text-6xl font-rubik-glitch">YOUNG CEO ENTERTAINMENT</h1>
            <p className="text-white text-xl sm:text-2xl font-rubik-glitch mt-2">TRY NOW FOR FREE</p>
          </div>
        </div>
      </div>

      {/* Disclaimer Modal */}
      {showDisclaimer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 mt-14">
          <div className="bg-[#191919] p-8 rounded-lg text-left max-w-3xl w-full">
            <h2 className="text-3xl font-bold mb-6 text-white text-left">Welcome to Young CEO Entertainment!</h2>
            <p className="text-base mb-4 text-[#AAAAAA] text-justify">
              By using our website and services, you agree to the following terms and conditions:
            </p>
            <p className="text-base mb-4 text-[#AAAAAA] text-justify">
              <strong className="text-white font-bold">Ownership of Content:</strong> All songs and musical content distributed through our service remain the property of their respective owners. Young CEO Entertainment does not claim any ownership rights over the content provided by users.
            </p>
            <p className="text-base mb-4 text-[#AAAAAA] text-justify">
              <strong className="text-white font-bold">Dispute Resolution:</strong> 
              Young Ceo Entertainment has no standing in any disputes arising from the use of third-party samples, vocals, beats, or other elements in the distributed content. Any disputes or legal issues must be resolved directly between the content owner and the third party. Young Ceo Entertainment will not be liable for any damages of any kind arising from the use of this website or from any information, content, materials, products, or services included on or otherwise made available to you through this website.
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleAgree} // Handle agree button click
                className="mt-6 bg-white text-black px-8 py-3 rounded-md text-lg"
              >
                I Agree
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
