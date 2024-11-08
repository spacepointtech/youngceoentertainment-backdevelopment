'use client';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUsers, faTshirt, faVideo, faCog, faSignOutAlt, faUser, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useRouter, usePathname } from 'next/navigation';

export default function Sidebar({ progress, onLogout }) {
  const router = useRouter();
  const pathname = usePathname(); // Get the current path

  // Function to determine if a menu item is active
  const isActive = (path) => pathname === path;


  const handleCompleteProfile = () => {
    router.push('/dashboard/profile-questions');
  };

  const handleUpgrade = () => {
    router.push('/subscription/upgrade');
  };

  return (
    <aside className="w-[310px] h-[1412px] p-6 flex flex-col gap-6" style={{ backgroundColor: '#EBEBEB', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
      {/* Profile Box */}
      <div className="bg-[rgba(0,0,0,0.77)] p-4 rounded-2xl flex items-center justify-between gap-2 w-full">
        {/* Left: User Icon */}
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
        </div>

        {/* Right: Progress Bar, Percentage and Button */}
        <div className="flex flex-col items-end gap-2 w-[75%]">
          {/* Progress Bar Container */}
          <div className="flex items-center w-full mt-2">
            {/* Progress Bar */}
            <div className="w-[80%] h-2 bg-gray-700 rounded-full">
              <div className="h-2 bg-white rounded-full" style={{ width: `${progress}%` }}></div>
            </div>

            {/* Progress Percentage */}
            <div className="text-white text-sm ml-6">{progress}%</div>
          </div>

          <button onClick={handleCompleteProfile} 
          className="text-white border border-white px-3 py-2 text-sm rounded-md mt-2 inline-block">
            Complete your profile
          </button>
        </div>
      </div>

      {/* Logo */}
      <Image src="/images/blogo.png" alt="Logo" width={184} height={169} className="w-[184px] h-[169px] mx-auto" />

      {/* Menu */}
      <nav className="flex flex-col justify-center ml-14 gap-4 text-lg font-semibold">
        <div
          onClick={() => router.push('/dashboard')}
          className={`flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer ${isActive('/dashboard') ? 'text-white' : 'text-black'}`}
        >
          <FontAwesomeIcon icon={faMusic} />
          <span> Music </span>
        </div>
        <div
          onClick={() => router.push('/dashboard/audience')}
          className={`flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer ${isActive('/dashboard/audience') ? 'text-white' : 'text-black'}`}
        >
          <FontAwesomeIcon icon={faUsers} />
          <span> Audience </span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-not-allowed">
          <FontAwesomeIcon icon={faTshirt} className="text-black" />
          <span className="text-black"> Merch </span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-not-allowed">
          <FontAwesomeIcon icon={faVideo} className="text-black" />
          <span className="text-black"> Video & Visuals </span>
        </div>
        <div
          onClick={() => router.push('/dashboard/settings')}
          className={`flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer ${isActive('/dashboard/settings') ? 'text-white' : 'text-black'}`}
        >
          <FontAwesomeIcon icon={faCog} />
          <span> Settings</span>
        </div>
      </nav>

      {/* Logout Button */}
      <button onClick={onLogout} className="bg-black text-white px-4 py-3 mt-4 rounded-md">
        <FontAwesomeIcon icon={faSignOutAlt} />
        <span> Logout </span>
      </button>

      {/* Flex-grow content */}
      <div className="flex-grow" />

      {/* Upgrade Box at the bottom */}
      <div className="h-[265px] w-[226px] bg-[#121212] rounded-2xl shadow-lg flex flex-col items-center justify-center mt-8 relative">
        {/* Outer Circle */}
        <div className="w-[130px] h-[130px] rounded-full bg-[#333] flex items-center justify-center mt-6">
          {/* Inner Circle */}
          <div className="w-[80px] h-[80px] rounded-full bg-black flex items-center justify-center">
            <FontAwesomeIcon icon={faBolt} className="text-white text-2xl" />
          </div>
        </div>

        {/* Upgrade Button */}
        <button 
        onClick={handleUpgrade} 
        className="text-white font-bold bg-[#0F0F0F] border border-[#757575] px-6 py-2 rounded-md mt-6">
          UPGRADE
        </button>
      </div>
    </aside>
  );
}
