// 'use client'; // Needed for client-side hooks 
// import { usePathname } from 'next/navigation';
// import Navbar from '@/components/Navbar';
// import '@/app/globals.css';

// export default function Layout({ children }) {
//   const pathname = usePathname(); // Get the current path

//   // Hide Navbar 
//   const hideNavbar = ['/login', '/signup', '/reset', '/upgrade', '/upgrade-duo', '/upgrade-label', '/subscription', '/pre-save', '/smart-links']
//     .includes(pathname) || pathname.startsWith('/dashboard') || pathname.startsWith('/subscription');

//   return (
//     <html lang="en">
//       <head>
//         <title>Young CEO Entertainment</title>
//         <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
//       </head>
//       <body>
//         {!hideNavbar && <Navbar />}
//         {children}
//       </body>
//     </html>
//   );
// }

'use client'; // Needed for client-side hooks
import { usePathname } from 'next/navigation';
import Navbar from '@/components/Navbar';
import '@/app/globals.css';

const NO_NAVBAR_ROUTES = [
  '/login',
  '/signup',
  '/reset',
  '/upgrade',
  '/upgrade-duo',
  '/upgrade-label',
  '/subscription',
  '/pre-save',
  '/smart-links'
];

const isDashboardRoute = (pathname) => pathname.startsWith('/dashboard');
const isSubscriptionRoute = (pathname) => pathname.startsWith('/subscription');

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Logic to hide navbar based on pathname
  const shouldHideNavbar = NO_NAVBAR_ROUTES.includes(pathname) || isDashboardRoute(pathname) || isSubscriptionRoute(pathname);

  return (
    <html lang="en">
      <head>
        <title>Young CEO Entertainment</title>
        <meta name="Designed & Developed by YCE Tech Team" content="YCE MUSIC DISTRIBUTION" />
      </head>
      <body className="bg-black text-white">
        {/* Conditionally render Navbar */}
        {!shouldHideNavbar && <Navbar />}
        {children}
      </body>
    </html>
  );
}
