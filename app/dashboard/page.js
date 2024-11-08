// 'use client';
// import { useState } from 'react';
// import { Line } from 'react-chartjs-2';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faYoutube, faSpotify, faInstagram, faApple, faShareAlt } from '@fortawesome/free-brands-svg-icons';
// import { useRouter } from 'next/navigation';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';
// import { FaShareAlt } from 'react-icons/fa';



// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export default function Dashboard() {
//   const router = useRouter();
//   const [progress, setProgress] = useState(20);
//   const chartData = {
//     labels: ["May 7", "May 14", "May 21", "May 28"],
//     datasets: [
//       {
//         label: "Streams",
//         data: [1500, 3000, 2800, 3500],
//         borderColor: "#ffffff",
//         backgroundColor: "rgba(255, 255, 255, 0.2)",
//         tension: 0.4,
//       },
//     ],
//   };

//   const chartOptions = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//       tooltip: {
//         enabled: true,
//       },
//     },
//     scales: {
//       y: {
//         beginAtZero: true,
//         ticks: {
//           color: "#FFF",
//         },
//       },
//       x: {
//         ticks: {
//           color: "#FFF",
//         },
//       },
//     },
//   };

//   const handleRelease = () => {
//     router.push('/dashboard/release-form');
//   };

//   return (
//     <div className="flex w-full h-[1500px] bg-[#0F0F0F]">
//       {/* Sidebar */}
//       <Sidebar progress={progress}/>

//       <main className="flex-1 p-6 flex flex-col gap-6 text-white">
//         {/* Header */}
//         <Header />

//         {/* Horizontal Line */}
//         <div className="border-t-2 border-white absolute top-14 w-[1092px]"></div>

//         {/* Timer Box */}
//         <section className="p-6 bg-[#1F1F1F] h-[250px] border border-[#EBEBEB] border-opacity-15 rounded-2xl mt-2 shadow-2xl shadow-gray-500">
//   <div className="flex items-center justify-between">
//     <h2 className="text-4xl font-bold">Your Song Goes Live In... Stay Tuned!</h2>
//     <div className="flex items-center justify-center bg-[#141414] border border-[#EBEBEB] p-2 rounded">
//       <FaShareAlt className="text-white text-lg" />
//     </div>
//   </div>
//   <hr className="my-4 border-t-2 border-gray-500" />
  
//   <div className="flex gap-4 mt-6">
//     {/* Left section with image and text */}
//     <div className="flex items-center">
//       <img src="/images/" alt="Song Image" className="w-[80px] h-[80px] object-cover rounded-lg" />
//       <div className="ml-4">
//         <p className="text-white font-semibold">Song Title</p>
//         <p className="text-sm text-gray-400">Artist's Name</p>
//       </div>
//     </div>

//     {/* Right section with countdown */}
//     <div className="flex gap-4 mt-10 justify-end text-4xl font-bold flex-grow">
//       <div>5 <span className="text-sm font-normal">Days</span></div>
//       <div>4 <span className="text-sm font-normal">Hours</span></div>
//       <div>59 <span className="text-sm font-normal">Minutes</span></div>
//       <div>12 <span className="text-sm font-normal">Seconds</span></div>
//     </div>
//   </div>
// </section>



//         {/* Catalog Box */}
//         <section className="p-6 bg-[#1F1F1F] rounded-lg shadow-lg mt-10">
//           <h2 className="text-xl font-bold">Your Catalog</h2>
//           <div className="mt-4 text-gray-400">No Recent Releases</div>
//         </section>

//         {/* Release Box */}
//         <section className="flex justify-between items-center p-6 bg-[#CDCDCD] rounded-lg text-black">
//           <div>
//             <h2 className="text-xl font-bold">Release today!</h2>
//             <p className="font-thin mt-2 text-base">Submit your release today and join the multitude of</p>
//             <p className="font-thin text-base">artists already using Young Ceo Entertainment.</p>
//           </div>
//           <button 
//           onClick={handleRelease} 
//           className="bg-[#181818] text-white px-6 py-2 rounded-lg">Create New Release</button>
//         </section>

//         {/* Analytics Section */}
//         <section className="flex gap-6">
//           {/* Streams Box */}
//           <div className="bg-[#191919] w-[700px] h-[430px] rounded-lg p-6 shadow-lg relative">
//             <div className="absolute top-1 left-4 mb-2  text-white text-xl font-bold">Streams</div>
//             <Line data={chartData} options={chartOptions} />
//             <div className="absolute top-4 right-4 flex gap-4">
//               <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
//               <FontAwesomeIcon icon={faSpotify} className="text-green-500" />
//               <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
//               <FontAwesomeIcon icon={faApple} className="text-gray-500" />
//             </div>
//           </div>

//           {/* Analytical Platform */}
//           <div className="bg-[#191919] w-[350px] h-[395px] rounded-lg flex items-center justify-center shadow-lg text-gray-400">
//             <p>Your analytics will be displayed here.</p>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// }


'use client';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faSpotify, faInstagram, faApple, faShareAlt } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/navigation';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';

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
import { FaShareAlt } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Dashboard() {
  const router = useRouter();
  const [progress, setProgress] = useState(20);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set the target date for the countdown (replace with your desired date)
  const targetDate = new Date('2024-11-20T00:00:00').getTime();

  // Chart data and options
  const chartData = {
    labels: ['May 7', 'May 14', 'May 21', 'May 28'],
    datasets: [
      {
        label: 'Streams',
        data: [1500, 3000, 2800, 3500],
        borderColor: '#ffffff',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
          color: '#FFF',
        },
      },
      x: {
        ticks: {
          color: '#FFF',
        },
      },
    },
  };

  // Handle release button click
  const handleRelease = () => {
    router.push('/dashboard/release-form');
  };

  // Countdown timer logic
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval); // Stop the interval when the countdown ends
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [targetDate]);

  return (
    <div className="flex w-full h-[1500px] bg-[#0F0F0F]">
      {/* Sidebar */}
      <Sidebar progress={progress} />

      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
        {/* Header */}
        <Header />

        {/* Horizontal Line */}
        <div className="border-t-2 border-white absolute top-14 w-[1092px]"></div>

        {/* Timer Box */}
        <section className="p-6 bg-[#1F1F1F] h-[250px] border border-[#EBEBEB] border-opacity-15 rounded-2xl mt-2 shadow-2xl shadow-gray-500">
          <div className="flex items-center justify-between">
            <h2 className="text-4xl font-bold">Your Song Goes Live In... Stay Tuned!</h2>
            <div className="flex items-center justify-center bg-[#141414] border border-[#EBEBEB] p-2 rounded">
              <FaShareAlt className="text-white text-lg" />
            </div>
          </div>
          <hr className="my-4 border-t-2 border-gray-500" />

          <div className="flex gap-4 mt-6">
            {/* Left section with image and text */}
            <div className="flex items-center">
              <img src="/images/" alt="Song Image" className="w-[80px] h-[80px] object-cover rounded-lg" />
              <div className="ml-4">
                <p className="text-white font-semibold">Song Title</p>
                <p className="text-sm text-gray-400">Artist's Name</p>
              </div>
            </div>

            {/* Right section with dynamic countdown */}
            <div className="flex gap-4 mt-10 justify-end text-4xl font-bold flex-grow">
              <div>{timeLeft.days} <span className="text-sm font-normal">Days</span></div>
              <div>{timeLeft.hours} <span className="text-sm font-normal">Hours</span></div>
              <div>{timeLeft.minutes} <span className="text-sm font-normal">Minutes</span></div>
              <div>{timeLeft.seconds} <span className="text-sm font-normal">Seconds</span></div>
            </div>
          </div>
        </section>

        {/* Catalog Box */}
        <section className="p-6 bg-[#1F1F1F] rounded-2xl shadow-lg mt-10">
          <h2 className="text-xl font-bold">Your Catalog</h2>
          <div className="mt-4 text-gray-400">No Recent Releases</div>
        </section>

        {/* Release Box */}
        <section className="flex justify-between items-center p-6 bg-[#CDCDCD] rounded-2xl text-black mt-10">
          <div>
            <h2 className="text-xl font-bold">Release today!</h2>
            <p className="font-thin mt-2 text-base">Submit your release today and join the multitude of</p>
            <p className="font-thin text-base">artists already using Young Ceo Entertainment.</p>
          </div>
          <button
            onClick={handleRelease}
            className="bg-[#181818] text-white px-6 py-2 rounded-lg"
          >
            Create New Release
          </button>
        </section>

        {/* Analytics Section */}
        <section className="flex gap-6 mt-10">
          {/* Streams Box */}
          <div className="bg-[#191919] w-[700px] h-[395px] rounded-2xl p-6 shadow-lg relative">
            <div className="absolute top-1.5 left-4  text-white text-xl font-bold">Streams</div>
            <Line data={chartData} options={chartOptions}/>
            <div className="absolute top-1.5 right-4 flex gap-4">
              <FontAwesomeIcon icon={faYoutube} className="text-red-500" />
              <FontAwesomeIcon icon={faSpotify} className="text-green-500" />
              <FontAwesomeIcon icon={faInstagram} className="text-pink-500" />
              <FontAwesomeIcon icon={faApple} className="text-gray-500" />
            </div>
          </div>

          {/* Analytical Platform */}
          <div className="bg-[#191919] w-[350px] h-[395px] rounded-2xl flex items-center justify-center shadow-lg text-gray-400">
            <p>Your analytics will be displayed here.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
