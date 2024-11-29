// // Navbar.js
// 'use client';
// import React, { useState } from 'react';
// import Link from 'next/link';
// import { FaBars } from 'react-icons/fa';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-black bg-opacity-[30%] text-white p-4 fixed w-full z-10">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-lg flex items-center">
//           {/* Toggle Menu for Small Screens */}
//           <div className="block sm:hidden flex items-center space-x-4">
//             <button onClick={toggleMenu} className="text-white hover:text-gray-400 focus:outline-none">
//               <FaBars />
//             </button>
//             {/* Login/Signup Buttons on Small Screens */}
//             <Link href="/login"><button className="bg-gray-700 px-2 py-1 rounded">Log In</button></Link>
//             <Link href="/signup"><button className="bg-gray-700 px-2 py-1 rounded">Sign Up</button></Link>
//           </div>

//           {/* Navigation Links */}
//           <div className="hidden sm:flex space-x-4">
//             <Link href="/" className="hover:text-gray-400">Home</Link>
//             <Link href="/music" className="hover:text-gray-400">Artists Engagement</Link>
//             <Link href="/Pricing" className="hover:text-gray-400">Pricing</Link>
//             <Link href="/services" className="hover:text-gray-400">Services</Link>
//             <Link href="/support" className="hover:text-gray-400">Support</Link>
//             <Link href="/contact" className="hover:text-gray-400">Contact us</Link>
//             <Link href="/Splits" className="hover:text-gray-400">Splits</Link>
//           </div>
//         </div>

//         {/* Login/Signup Buttons on Medium and Larger Screens */}
//         <div className="hidden sm:flex ml-auto space-x-4">
//           <Link href="/login"><button className="bg-gray-700 px-4 py-2 rounded">Log In</button></Link>
//           <Link href="/signup"><button className="bg-gray-700 px-4 py-2 rounded">Sign Up</button></Link>
//         </div>

//         {/* Toggle Menu Box */}
//         {isOpen && (
//           <div className="sm:hidden absolute top-full left-0 w-full bg-black bg-opacity-50 py-2 px-4 rounded text-white">
//             <div className="block py-2">
//               <Link href="/" className="hover:text-gray-400">Home</Link>
//             </div>
//             <div className="block py-2">
//               <Link href="#" className="hover:text-gray-400">Artists Engagement</Link>
//             </div>
//             <div className="block py-2">
//               <Link href="/pricing" className="hover:text-gray-400">Pricing</Link>
//             </div>
//             <div className="block py-2">
//               <Link href="/services" className="hover:text-gray-400">Services</Link>
//             </div>
//             <div className="block py-2">
//               <Link href="/support" className="hover:text-gray-400">Support</Link>
//             </div>
//             <div className="block py-2">
//               <Link href="/contact" className="hover:text-gray-400">Contact us</Link>
//             </div>
//             <div className="block py-2">
//               <Link href="/splits" className="hover:text-gray-400">Splits</Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-[30%] text-white p-4 fixed w-full z-10 font-poppins">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg flex items-center">
          {/* Toggle Menu for Small Screens */}
          <div className="block sm:hidden flex items-center space-x-4">
            <button 
              onClick={toggleMenu} 
              className="text-white focus:outline-none"
              aria-label="Toggle menu" 
            >
              <FaBars />
            </button>
            {/* Login/Signup Buttons on Small Screens */}
            <Link href="/login">
              <button className="bg-gray-700 px-2 py-1 rounded">Log In</button>
            </Link>
            <Link href="/signup">
              <button className="bg-gray-700 px-2 py-1 rounded">Sign Up</button>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden sm:flex space-x-4">
            <Link href="/" className="group relative">
              <span className="relative z-10">Home</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
    
            <Link href="/pricing" className="group relative">
              <span className="relative z-10">Pricing</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="group relative">
              <span className="relative z-10">Services</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/support" className="group relative">
              <span className="relative z-10">Support</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="group relative">
              <span className="relative z-10">Contact us</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
            <Link href="/splits" className="group relative">
              <span className="relative z-10">Splits</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </Link>
          </div>
        </div>

        {/* Login/Signup Buttons on Medium and Larger Screens */}
        <div className="hidden sm:flex ml-auto space-x-4">
          <Link href="/login">
            <button className="bg-gray-700 px-8 py-2 rounded">Log In</button>
          </Link>
          <Link href="/signup">
            <button className="bg-gray-700 px-8 py-2 rounded">Sign Up</button>
          </Link>
        </div>

        {/* Toggle Menu Box */}
        {isOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-black bg-opacity-50 py-2 px-4 rounded text-white">
            <ul className="space-y-2">
              <li key="home">
                <Link href="/" className="link-underline">Home</Link>
              </li>
              <li key="artists-engagement">
                <Link href="/music">Artists Engagement</Link>
              </li>
              <li key="pricing">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li key="services">
                <Link href="/services">Services</Link>
              </li>
              <li key="support">
                <Link href="/support">Support</Link>
              </li>
              <li key="contact">
                <Link href="/contact">Contact us</Link>
              </li>
              <li key="splits">
                <Link href="/splits">Splits</Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
