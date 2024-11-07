
// 'use client';
// import { useState } from 'react';
// import Image from 'next/image';
// import { FaArrowUp, FaInstagram, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

// export default function FooterSection() {
//   const [language, setLanguage] = useState('English');
//   const [email, setEmail] = useState('');
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar initially closed

//   const handleLanguageChange = (e) => {
//     setLanguage(e.target.value);
//   };

//   const handleSubscribe = () => {
//     if (email.trim() === '') {
//       alert('Email field cannot be blank');
//       return;
//     }
//     // Subscription logic here
//     alert(`Subscribed successfully with ${email}`);
//     setIsSubscribed(true);
//   };

//   // Function to open the sidebar
//   const openSidebar = () => {
//     setIsSidebarOpen(true);
//   };

//   // Function to close the sidebar
//   const closeSidebar = () => {
//     setIsSidebarOpen(false);
//   };

//   return (
//     <footer className="bg-black text-white py-12 font-hammersmith-one relative">
//       {/* Go to Top Button */}
//       <div className="text-center mb-8">
//         <button
//           onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//           className="go-to-top"
//         >
//           GO TO TOP <FaArrowUp className="inline-block ml-2" />
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left max-w-7xl mx-auto px-4 md:px-0">
//         {/* Company Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Company</h3>
//           <ul className="space-y-2">
//             <li><a href="#login" className="footer-link">Login</a></li>
//             <li><a href="#signup" className="footer-link">Sign Up</a></li>
//             <li><a href="#support" className="footer-link">Support</a></li>
//             <li><a href="#pricing" className="footer-link">Pricing</a></li>
//             <li><a href="#aboutus" className="footer-link">About Us</a></li>
//           </ul>
//         </div>
        
//         {/* Extras Links */}
//         <div>
//           <h3 className="text-xl font-semibold mb-4">Extras</h3>
//           <ul className="space-y-2">
//             <li><a href="#music-publishing" className="footer-link">Music Publishing</a></li>
//             <li><a href="#music-promotion" className="footer-link">Music Promotion</a></li>
//             <li><a href="#artist-services" className="footer-link">Artist Services</a></li>
//             <li><a href="#newsroom" className="footer-link">Newsroom</a></li>
//             <li><a href="#subscribe" className="footer-link">Subscribe</a></li>
//           </ul>
//         </div>
        
//         {/* Subscribe Form */}
//         <div className="flex flex-col items-center md:items-end">
//           <input
//             type="email"
//             placeholder="Email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="px-4 py-2 rounded text-black mb-4 w-full max-w-xs"
//           />
//           <button
//             onClick={handleSubscribe}
//             className="subscribe-button"
//             disabled={isSubscribed}
//           >
//             Subscribe
//           </button>
//         </div>
//       </div>
      
//       {/* Language Dropdown */}
//       <div className="absolute top-12 right-5 md:right-16 flex justify-center items-center mt-8 md:mt-0">
//         <div className="relative">
//           <select
//             value={language}
//             onChange={handleLanguageChange}
//             className="language-dropdown"
//           >
//             <option value="English">English</option>
//             {/* Add more languages here */}
//           </select>
//         </div>
//       </div>
      
//       {/* Footer Bottom */}
//       <div className="text-center mt-12 text-sm">
//         {/* Company Logo */}
//         <div className="flex justify-center mb-4">
//           <Image
//             src="/images/logo.png" //logo
//             alt="Company Logo"
//             width={100}
//             height={50}
//           />
//         </div>
        
//         <p>Young CEO Entertainment | <span className="align-middle">&copy; 2024</span></p>
        
//         {/* Social Media Icons */}
//         <div className="flex justify-center space-x-4 mt-4">
//           <a href="https://www.linkedin.com/company/young-ceo-entertainment/" target="_blank" className="social-link">
//             <FaLinkedin size={20} />
//           </a>
//           <a href="" target="_blank" className="social-link">
//             <FaInstagram size={20} />
//           </a>
//           <a
//             href="mailto:connectwithyoungceo@gmail.com?subject=Contacting Young CEO Entertainment"
//             className="social-link"
//           >
//             <FaEnvelope size={20} />
//           </a>
//           <a href="https://twitter.com" target="_blank" className="social-link">
//             <FaTwitter size={20} />
//           </a>
//         </div>
        
//         {/* Privacy and Terms */}
//         <div className="mt-4">
//           <a href="#privacy" className="footer-bottom-link">Privacy</a>
//           <span className="mx-2">|</span>
//           <a href="#terms" className="footer-bottom-link">Terms & Condition</a>
//           <span className="mx-2">|</span>
//           <a
//             href="#"
//             className="footer-bottom-link"
//             onClick={openSidebar} // Open sidebar when clicked
//           >
//             Cookies
//           </a>
//         </div>
//       </div>

//       {/* Sidebar (only rendered when open) */}
//       {isSidebarOpen && (
//         <div
//           className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
//             isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
//           } z-50`}
//         >
//           <div className="p-6">
//             <h2 className="text-xl text-black font-bold mb-4">Storage Preferences</h2>
//              <p className="text-[#A6A6A6] text-sm text-justify mb-6"> When you visit websites, they may store or retrieve data about you using cookies and similar technologies ("cookies"). Cookies may be necessary for the basic functionality of the website as well as other purposes. You have the option of disabling certain types of cookies, though doing so may impact your experience on the website.</p>
//             {/* Essential */}
//             <div className="mb-4">
//               <div className="flex items-center justify-between">
//                 <p className="font-semibold text-black">Essential</p>
//                 <input
//                   type="checkbox"
//                   className="toggle-checkbox"
//                   defaultChecked
//                   disabled
//                 />
//               </div>
//               <p className="text-gray-600 mb-2">
//                 Required to enable basic website functionality. You may not disable essential cookies.
//               </p>
//               <a href="#" className="text-blue-600 hover:underline">
//                 View Cookies
//               </a>
//             </div>

//             {/* Targeted Advertising */}
//             <div className="mb-4">
//               <div className="flex items-center justify-between">
//                 <p className="font-semibold text-black">Targeted Advertising</p>
//                 <input
//                   type="checkbox"
//                   className="toggle-checkbox"
//                 />
//               </div>
//               <p className="text-gray-600 mb-2">
//                 Used to deliver advertising that is more relevant to you and your interests.
//               </p>
//               <a href="#" className="text-blue-600 hover:underline">
//                 View Cookies
//               </a>
//             </div>

//             {/* Personalization */}
//             <div className="mb-4">
//               <div className="flex items-center justify-between">
//                 <p className="font-semibold text-black">Personalization</p>
//                 <input
//                   type="checkbox"
//                   className="toggle-checkbox"
//                 />
//               </div>
//               <p className="text-gray-600 mb-2">
//                 Allow the website to remember choices you make such as your language or region.
//               </p>
//               <a href="#" className="text-blue-600 hover:underline">
//                 View Cookies
//               </a>
//             </div>

//             {/* Analytics */}
//             <div className="mb-4">
//               <div className="flex items-center justify-between">
//                 <p className="font-semibold text-black">Analytics</p>
//                 <input
//                   type="checkbox"
//                   className="toggle-checkbox"
//                 />
//               </div>
//               <p className="text-gray-600 mb-2">
//                 Help the website operator understand how visitors interact with the site.
//               </p>
//               <a href="#" className="text-blue-600 hover:underline">
//                 View Cookies
//               </a>
//             </div>

//             {/* Close button */}
//             <button
//               className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-md"
//               onClick={closeSidebar}
//             >
//               Close
//             </button>
//           </div>
//         </div>
//       )}
//     </footer>
//   );
// }

'use client';
import { useState } from 'react';
import Image from 'next/image';
import { FaArrowUp, FaInstagram, FaLinkedin, FaEnvelope, FaTwitter } from 'react-icons/fa';

export default function FooterSection() {
  const [language, setLanguage] = useState('English');
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar initially closed

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubscribe = () => {
    if (email.trim() === '') {
      alert('Email field cannot be blank');
      return;
    }
    // Subscription logic here
    alert(`Subscribed successfully with ${email}`);
    setIsSubscribed(true);
  };

  // Function to open the sidebar
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <footer className="bg-black text-white py-12 font-hammersmith-one relative">
      {/* Go to Top Button */}
      <div className="text-center mb-8">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="go-to-top"
        >
          GO TO TOP <FaArrowUp className="inline-block ml-2" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left max-w-7xl mx-auto px-4 md:px-0">
        {/* Company Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><a href="#login" className="footer-link">Login</a></li>
            <li><a href="#signup" className="footer-link">Sign Up</a></li>
            <li><a href="#support" className="footer-link">Support</a></li>
            <li><a href="#pricing" className="footer-link">Pricing</a></li>
            <li><a href="#aboutus" className="footer-link">About Us</a></li>
          </ul>
        </div>
        
        {/* Extras Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Extras</h3>
          <ul className="space-y-2">
            <li><a href="#music-publishing" className="footer-link">Music Publishing</a></li>
            <li><a href="#music-promotion" className="footer-link">Music Promotion</a></li>
            <li><a href="#artist-services" className="footer-link">Artist Services</a></li>
            <li><a href="#newsroom" className="footer-link">Newsroom</a></li>
            <li><a href="#subscribe" className="footer-link">Subscribe</a></li>
          </ul>
        </div>
        
        {/* Subscribe Form */}
        <div className="flex flex-col items-center md:items-end">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded text-black mb-4 w-full max-w-xs"
          />
          <button
            onClick={handleSubscribe}
            className="subscribe-button"
            disabled={isSubscribed}
          >
            Subscribe
          </button>
        </div>
      </div>
      
      {/* Language Dropdown */}
      <div className="absolute top-12 right-5 md:right-16 flex justify-center items-center mt-8 md:mt-0">
        <div className="relative">
          <select
            value={language}
            onChange={handleLanguageChange}
            className="language-dropdown"
          >
            <option value="English">English</option>
            {/* Add more languages here */}
          </select>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="text-center mt-12 text-sm">
        {/* Company Logo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/images/logo.png" //logo
            alt="Company Logo"
            width={100}
            height={50}
          />
        </div>
        
        <p>Young CEO Entertainment | <span className="align-middle">&copy; 2024</span></p>
        
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mt-4">
          <a href="https://www.linkedin.com/company/young-ceo-entertainment/" target="_blank" className="social-link">
            <FaLinkedin size={20} />
          </a>
          <a href="" target="_blank" className="social-link">
            <FaInstagram size={20} />
          </a>
          <a
            href="mailto:connectwithyoungceo@gmail.com?subject=Contacting Young CEO Entertainment"
            className="social-link"
          >
            <FaEnvelope size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" className="social-link">
            <FaTwitter size={20} />
          </a>
        </div>
        
        {/* Privacy and Terms */}
        <div className="mt-4">
          <a href="#privacy" className="footer-bottom-link">Privacy</a>
          <span className="mx-2">|</span>
          <a href="#terms" className="footer-bottom-link">Terms & Condition</a>
          <span className="mx-2">|</span>
          <a
            href="#"
            className="footer-bottom-link"
            onClick={openSidebar} // Open sidebar when clicked
          >
            Cookies
          </a>
        </div>
      </div>

      {/* Sidebar (only rendered when open) */}
      {isSidebarOpen && (
        <div
          className={`fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50`}
        >
          <div className="p-6 h-full overflow-y-auto"> {/* Make the sidebar scrollable */}
            <h2 className="text-xl text-black font-bold mb-4">Storage Preferences</h2>
            <p className="text-[#A6A6A6] text-sm text-justify mb-6">
              When you visit websites, they may store or retrieve data about you using cookies and similar technologies ("cookies"). Cookies may be necessary for the basic functionality of the website as well as other purposes. You have the option of disabling certain types of cookies, though doing so may impact your experience on the website.
            </p>
            {/* Essential */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">Essential</p>
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                  defaultChecked
                  disabled
                />
              </div>
              <p className="text-gray-600 mb-2">
                Required to enable basic website functionality. You may not disable essential cookies.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Cookies
              </a>
            </div>

            {/* Targeted Advertising */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">Targeted Advertising</p>
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                />
              </div>
              <p className="text-gray-600 mb-2">
                Used to deliver advertising that is more relevant to you and your interests.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Cookies
              </a>
            </div>

            {/* Personalization */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">Personalization</p>
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                />
              </div>
              <p className="text-gray-600 mb-2">
                Allow the website to remember choices you make such as your language or region.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Cookies
              </a>
            </div>

            {/* Analytics */}
            <div className="mb-4">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">Analytics</p>
                <input
                  type="checkbox"
                  className="toggle-checkbox"
                />
              </div>
              <p className="text-gray-600 mb-2">
                Help the website operator understand how visitors interact with the site.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Cookies
              </a>
            </div>

            {/* Close button */}
            <button
              className="bg-gray-800 text-white px-4 py-2 mt-4 rounded-md"
              onClick={closeSidebar}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
