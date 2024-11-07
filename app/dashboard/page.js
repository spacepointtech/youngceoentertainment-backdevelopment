'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faInstagram, faApple } from '@fortawesome/free-brands-svg-icons';
import { faMusic, faUsers, faTshirt, faVideo, faCog, faSignOutAlt, faBell, faUser, faBolt } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const [progress, setProgress] = useState(20);
  const router = useRouter(); // Initialize the router

  const chartData = {
    labels: ["May 7", "May 14", "May 21", "May 28"],
    datasets: [
      {
        label: "Streams",
        data: [1500, 3000, 2800, 3500],
        borderColor: "#ffffff",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: "#FFF",
        },
      },
      x: {
        ticks: {
          color: "#FFF",
        },
      },
    },
  };

  const handleLogout = () => {
    // Handle logout logic
    console.log('Logged out');
  };

  // Handle profile completion and navigate to profile questions page
  const handleCompleteProfile = () => {
    router.push('/dashboard/profile-questions'); // Navigate to the profile questions page
  };
  const handleUpgrade = () => {
    router.push('/subscription/upgrade'); // Navigate to the subscription upgrade page
  };
  // Sidebar Component
  const Sidebar = ({ progress, onLogout }) => (
    
    <aside className="w-[310px] h-[1412px] p-6 flex flex-col gap-6" style={{ backgroundColor: '#EBEBEB', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
      {/* Profile Box */}
      <div className="bg-black/80 p-4 rounded-2xl flex items-center justify-between gap-2 w-full">
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

          <button onClick={handleCompleteProfile} className="text-white border border-white px-3 py-2 text-sm rounded-md mt-2 inline-block">
            Complete your profile
          </button>
        </div>
      </div>

      {/* Logo */}
      <Image src="/images/blogo.png" alt="Logo" width={184} height={169} className="w-[184px] h-[169px] mx-auto" />

      {/* Menu */}
      <nav className="flex flex-col justify-center ml-14 gap-4 text-white text-lg font-semibold">
        <div onClick={() => router.push('/dashboard')} className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer">
          <FontAwesomeIcon icon={faMusic} className="text-white" />
          <span className="text-white"> Music </span>
        </div>
        <div onClick={() => router.push('/dashboard/audience')} className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer">
          <FontAwesomeIcon icon={faUsers} className="text-black" />
          <span className="text-black"> Audience </span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-not-allowed">
          <FontAwesomeIcon icon={faTshirt} className="text-black" />
          <span className="text-black"> Merch </span>
        </div>
        <div className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-not-allowed">
          <FontAwesomeIcon icon={faVideo} className="text-black" />
          <span className="text-black"> Video & Visuals </span>
        </div>
        <div onClick={() => router.push('/dashboard/settings')} className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer">
          <FontAwesomeIcon icon={faCog} className="text-black" />
          <span className="text-black"> Settings</span>
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

  // Header Component
  const Header = () => (
    <div className="flex justify-end items-center mb-6">
      <div className="flex items-center gap-4">
        <FontAwesomeIcon icon={faBell} className="text-white text-2xl" />
        <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
      </div>
    </div>
  );

  return (
    <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
      {/* Sidebar */}
      <Sidebar progress={progress} onLogout={handleLogout} />

      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
        {/* Header */}
        <Header />

        {/* Horizontal Line from Sidebar to Screen */}
        <div className="border-t-2 border-white absolute top-14 w-[1092px]"></div>

        {/* Timer Box */}
        <section className="p-6 bg-[#1F1F1F] rounded-lg shadow-lg mt-8">
          <h2 className="text-xl font-bold">Your Song Goes Live In... Stay Tuned!</h2>
          <div className="flex gap-4 mt-4 text-center text-4xl font-bold">
            <div>5 <span className="text-sm font-normal">Days</span></div>
            <div>4 <span className="text-sm font-normal">Hours</span></div>
            <div>59 <span className="text-sm font-normal">Minutes</span></div>
            <div>12 <span className="text-sm font-normal">Seconds</span></div>
          </div>
        </section>

        {/* Catalog Box */}
        <section className="p-6 bg-[#1F1F1F] rounded-lg shadow-lg">
          <h2 className="text-xl font-bold">Your Catalog</h2>
          <div className="mt-4 text-gray-400">No Recent Releases</div>
        </section>

        {/* Release Box */}
        <section className="flex justify-between items-center p-6 bg-[#CDCDCD] rounded-lg text-black">
          <div>
            <h2 className="text-xl font-bold">Release today!</h2>
            <p className="font-thin mt-2 text-base">Submit your release today and join the multitude of</p>
            <p className="font-thin text-base">artists already using Young Ceo Entertainment.</p>
          </div>
          <button className="bg-[#181818] text-white px-6 py-2 rounded-lg">Create New Release</button>
        </section>

        {/* Analytics Section */}
        <section className="flex gap-6">
          {/* Streams Box */}
          <div className="bg-[#191919] w-[700px] h-[395px] rounded-lg p-6 shadow-lg relative">
            <div className="absolute top-4 left-4 mb-10 text-white text-xl font-bold">Streams</div>
            <Line data={chartData} options={chartOptions} />
            <div className="absolute top-4 right-4 flex gap-4">
              <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
              <FontAwesomeIcon icon={faSpotify} className="text-green-500" />
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
              <FontAwesomeIcon icon={faApple} className="text-gray-500" />
            </div>
          </div>

          {/* Analytical Platform */}
          <div className="bg-[#191919] w-[350px] h-[395px] rounded-lg flex items-center justify-center shadow-lg text-gray-400">
            <p>Your analytics will be displayed here.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
