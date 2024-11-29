
// 'use client'; // for client side rendering
// import React from 'react';

// export default function PricingSection() {
//   return (
//     <div className="min-h-screen bg-black text-white py-20 px-4 md:px-0 font-poppins">
//       <h2 className="text-4xl font-bold text-center mb-10">
//         Craft Your Sound, Conquer the World:<br />
//         Focus on your music, we&apos;ll handle the reach
//       </h2>
//       <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
//         {/* Basic Plan */}
//         <div className="plan-box">
//           <h3 className="text-xl font-semibold mb-4"> Independent Artists </h3>
//           <p className="text-2xl font-bold mb-4">₹ 1001/Year</p>
//           <p className="mb-4">This Plan is suitable for 1-Artist</p>
//           <p className="font-semibold mb-4">What includes:</p>
//           <ul className="text-left mb-6 space-y-2">
//             <li>• Upload Unlimited Songs and Lyrics</li>
//             <li>• Spotify Verification</li>
//             <li>• Create royalty splits</li>
//             <li>• Access to 21 free tools</li>
//             <li>• iPhone app Access</li>
//             <li>• Synced Lyrics in Apple Music</li>
//           </ul>
//           <button className="plan-button">
//             Get Started
//           </button>
//         </div>
//         {/* Premium Plan */}
//         <div className="plan-box">
//           <h3 className="text-xl font-semibold mb-4"> Duo </h3>
//           <p className="text-2xl font-bold mb-4">₹3090/Year</p>
//           <p className="mb-4">This Plan is suitable for 1-5 Artists</p>
//           <p className="font-semibold mb-4">What includes:</p>
//           <ul className="text-left mb-6 space-y-2">
//             <li>• All Features of Independent Artist</li>
//             <li>• Daily Streaming Stats</li>
//             <li>• Customized Label name, release date & iTunes pricing</li>
//           </ul>
//           <button className="plan-button">
//             Get Started
//           </button>
//         </div>
//         {/* Super Plan */}
//         <div className="plan-box">
//           <h3 className="text-xl font-semibold mb-4"> Label </h3>
//           <p className="mb-4"> <span className="text-xs italic">starts with</span> <span className="text-2xl font-bold ">₹7300/Year</span> </p>  
//           <p className="mb-4">This Plan is suitable for 5-40 Artists</p>
//           <p className="font-semibold mb-4">What includes:</p>
//           <ul className="text-left mb-6 space-y-2">
//             <li>• All Features of Duo Plan</li>
//             <li>• ITB Instant File Sharing</li>
//             <li>• RIAA gold and platinum Monitoring</li>
//           </ul>
//           <button className="plan-button">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client'; // for client side rendering
import Link from 'next/link';
import React from 'react';

export default function PricingSection() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 font-poppins">
      <h2 className="text-4xl font-bold text-center mb-10">
        Craft Your Sound, Conquer the World:<br />
        Focus on your music, we&apos;ll handle the reach
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Basic Plan */}
        <div className="plan-box">
          <h3 className="text-xl font-semibold mb-4"> Independent Artists </h3>
          <p className="text-2xl font-bold mb-4">₹ 1001/Year</p>
          <p className="mb-4 font-bold">1-Artist</p>
          <p className="font-semibold mb-4">What includes:</p>
          <ul className="text-left mb-6 space-y-2">
            <li>• Upload Unlimited Songs and Lyrics</li>
            <li>• Spotify Verification</li>
            <li>• Create royalty splits</li>
            <li>• Access to 21 free tools</li>
            <li>• iPhone app Access</li>
            <li>• Synced Lyrics in Apple Music</li>
          </ul>
          <Link href='/signup' className="plan-button">
             Get Started
          </Link>
        </div>
        {/* Premium Plan */}
        <div className="plan-box">
          <h3 className="text-xl font-semibold mb-4"> Duo </h3>
          <p className="text-2xl font-bold mb-4">₹2001/Year</p>
          <p className="mb-4 font-bold">2 Artists</p>
          <p className="font-semibold mb-4">What includes:</p>
          <ul className="text-left mb-6 space-y-2">
            <li>• All Features of <span className='font-bold'> Independent Artist </span></li>
            <li>• Daily Streaming Stats</li>
            <li>• Customized Label name, release date & iTunes pricing</li>
          </ul>
          <Link href='/signup' className="plan-button">
            Get Started
          </Link>
        </div>
        {/* Super Plan */}
        <div className="plan-box">
          <h3 className="text-xl font-semibold mb-4"> Label </h3>
          <p className="mb-4"> <span className="text-xs italic">starts with</span> <span className="text-2xl font-bold">₹4899/Year</span> </p>  
          <p className="mb-4 font-bold">5-40 Artists</p>
          <p className="font-semibold mb-4">What includes:</p>
          <ul className="text-left mb-6 space-y-2">
            <li>• All Features of <span className='font-bold'> Duo Plan </span> </li>
            <li>• ITB Instant File Sharing</li>
            <li>• RIAA gold and platinum Monitoring</li>
          </ul>
          <Link href='/signup' className="plan-button">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

