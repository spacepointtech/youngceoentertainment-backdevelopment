// 'use client';
// import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
// import { useRouter } from 'next/navigation';

// export default function Header() {
//   const [showNotifications, setShowNotifications] = useState(false);
//   const router = useRouter();

//   const handleUserClick = () => {
//     router.push('/dashboard/profile'); // Navigate to profile page
//   };

//   const handleBellClick = () => {
//     setShowNotifications(!showNotifications); // Toggle notifications box visibility
//   };

//   return (
//     <div className="flex justify-end items-center mb-7 relative">
//       <div className="flex items-center gap-4">
//         <FontAwesomeIcon
//           icon={faBell}
//           className="text-white text-2xl cursor-pointer"
//           onClick={handleBellClick}
//         />
//         {showNotifications && (
//           <div className="absolute top-10 right-0 bg-gradient-to-t from-black to-[#666666] text-white text-sm p-4 rounded shadow-lg">
//             <p className="font-poppins">No Notifications as of now</p>
//           </div>
//         )}
//         <FontAwesomeIcon
//           icon={faUser}
//           className="text-white text-2xl cursor-pointer"
//           onClick={handleUserClick}
//         />
//       </div>
//     </div>
//   );
// }

'use client';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation';

export default function Header() {
  const [showNotifications, setShowNotifications] = useState(false);
  const router = useRouter();

  const handleUserClick = () => {
    router.push('/dashboard/profile'); // Navigate to profile page
  };

  const handleBellClick = () => {
    setShowNotifications(!showNotifications); // Toggle notifications box visibility
  };

  return (
    <div className="relative">
      <div className="flex justify-end items-center mb-4">
        <div className="flex items-center gap-4">
          <FontAwesomeIcon
            icon={faBell}
            className="text-white text-2xl cursor-pointer"
            onClick={handleBellClick}
          />
          {showNotifications && (
            <div className="absolute top-10 right-0 bg-gradient-to-t from-black to-[#666666] text-white text-sm p-4 rounded shadow-lg">
              <p className="font-poppins">No Notifications as of now</p>
            </div>
          )}
          <FontAwesomeIcon
            icon={faUser}
            className="text-white text-2xl cursor-pointer"
            onClick={handleUserClick}
          />
        </div>
      </div>
      <hr className="border-t-slate-400 border-gray-300  w-full mr-10" /> {/* Horizontal line */}
    </div>
  );
}
