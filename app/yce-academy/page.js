


// import Image from "next/image";
// import { FaCheckCircle } from "react-icons/fa"; // Import the Font Awesome checkmark icon

// const AcademySection = () => {
//   return (
//     <div className="flex flex-col items-center bg-black text-white font-poppins p-10">
//       {/* Header Section */}
//       <div className="text-center mb-10">
//         <h1 className="text-[48px] font-semibold mt-8 text-left">YCE Academy</h1>
//         <p className="text-[#6b6b6b] text-[20px] leading-[29.3px] mt-2 mb-8 text-left">
//           Discover tips and tricks for getting your music out there. Our quizzes are quick, optional, and packed with practical insights to help you thrive!
//         </p>
//       </div>

//       {/* Cards Section */}
//       <div className="grid grid-cols-2 gap-x-10 gap-y-[40px]">
        
//         {/* Profile Completion Card */}
//         <div className="bg-[#191919] rounded-[40px] w-[599px] h-[610px] flex flex-col items-center p-10 relative">
//           <h2 className="text-[24px] font-semibold mb-6">Profile Completion</h2>
//           <Image src="/images/profile.png" width={370} height={306} alt="Profile Completion Illustration" />
//           <button className="bg-white/20 rounded-[9.267px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8 shadow-[0px_2.317px_0px_rgba(0,0,0,0.04)]">
//             Start Now
//           </button>
//           <div className="mt-4 text-[20px] font-medium text-white text-center leading-[25.484px]">100% Completed</div>
//           <div className="absolute -top-2 -right-0 text-white"> {/* Adjusted position to sit on the curve */}
//             <FaCheckCircle size={32} />
//           </div>
//         </div>
        
//         {/* Create Release Card */}
//         <div className="bg-[#191919] rounded-[40px] w-[599px] h-[610px] flex flex-col items-center p-10">
//           <h2 className="text-[24px] font-semibold mb-6">Create Release</h2>
//           <Image src="/images/release.png" width={370} height={306} alt="Create Release Illustration" />
//           <button className="bg-white text-black rounded-[9px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8">
//             Start Now
//           </button>
//           <div className="mt-4 text-[20px] font-medium text-white text-center leading-[25.484px]">42% Completed</div>
//         </div>
        
//         {/* Uploading Track Card */}
//         <div className="bg-[#191919] rounded-[40px] w-[599px] h-[610px] flex flex-col items-center p-10">
//           <h2 className="text-[24px] font-semibold mb-6">Uploading Track</h2>
//           <Image src="/images/tracks.png" width={370} height={306} alt="Uploading Track Illustration" />
//           <button className="bg-white text-black rounded-[9px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8">
//             Start Now
//           </button>
//           <div className="mt-4 text-[20px] font-medium text-white text-center leading-[25.484px]">37% Completed</div>
//         </div>
        
//         {/* AI Mastering Card */}
//         <div className="bg-[#191919] rounded-[40px] w-[599px] h-[610px] flex flex-col items-center p-10">
//           <h2 className="text-[24px] font-semibold mb-6">AI Mastering</h2>
//           <Image src="/images/mastering.png" width={370} height={306} alt="AI Mastering Illustration" />
//           <button className="bg-white text-black rounded-[9px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8">
//             Start Now
//           </button>
//           <div className="mt-4 text-[20px] font-medium text-white text-center leading-[25.484px]">10% Completed</div>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default AcademySection;


import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa"; // Import the Font Awesome checkmark icon

const AcademySection = () => {
  return (
    <div className="flex flex-col items-center bg-black text-white font-poppins p-10">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-[48px] font-semibold mt-8 text-left">YCE Academy</h1>
        <p className="text-[#6b6b6b] text-[20px] leading-[29.3px] mt-2 mb-8 text-left">
          Discover tips and tricks for getting your music out there. Our quizzes are quick, optional, and packed with practical insights to help you thrive!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-2 gap-x-10 gap-y-[40px]">
        
        {/* Profile Completion Card */}
        <div className="bg-[#191919] rounded-[40px] w-[599px] flex flex-col items-center p-10 relative h-[650px]">
          <h2 className="text-[24px] font-semibold mb-6">Profile Completion</h2>
          <Image src="/images/profile.png" width={370} height={306} alt="Profile Completion Illustration" />
          <button className="bg-white/20 rounded-[9.267px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8 shadow-[0px_2.317px_0px_rgba(0,0,0,0.04)]">
            Start Now
          </button>
          <div className="mt-12 text-[20px] font-medium text-white text-center leading-[25.484px]">100% Completed</div>
          <div className="absolute -top-2 -right-0 text-white"> {/* Adjusted position to sit on the curve */}
            <FaCheckCircle size={32} />
          </div>
        </div>
        
        {/* Create Release Card */}
        <div className="bg-[#191919] rounded-[40px] w-[599px] flex flex-col items-center p-10 relative h-[650px]">
          <h2 className="text-[24px] font-semibold mb-6">Create Release</h2>
          <Image src="/images/release.png" width={360} height={306} alt="Create Release Illustration" />
          <button className="bg-white text-black rounded-[9px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8">
            Start Now
          </button>
          <div className="mt-9 text-[20px] font-medium text-white text-center leading-[25.484px]">42% Completed</div>
        </div>
        
        {/* Uploading Track Card */}
        <div className="bg-[#191919] rounded-[40px] w-[599px] flex flex-col items-center p-10 relative h-[650px]">
          <h2 className="text-[24px] font-semibold mb-6">Uploading Track</h2>
          <Image src="/images/tracks.png" width={370} height={306} alt="Uploading Track Illustration" />
          <button className="bg-white text-black rounded-[9px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8">
            Start Now
          </button>
          <div className="mt-8 mb-40 text-[20px] font-medium text-white text-center leading-[25.484px]">37% Completed</div>
 {/* Added flex-grow to push the content downward */}
        </div>
        
        {/* AI Mastering Card */}
        <div className="bg-[#191919] rounded-[40px] w-[599px] flex flex-col items-center p-10 relative h-[650px]">
          <h2 className="text-[24px] font-semibold mb-6">AI Mastering</h2>
          <Image src="/images/mastering.png" width={370} height={306} alt="AI Mastering Illustration" />
          <button className="bg-white text-black rounded-[9px] text-[20px] font-semibold flex py-3 px-4 justify-center items-center gap-2 w-full mt-8">
            Start Now
          </button>
          <div className="mt-8 text-[20px] font-medium text-white text-center leading-[25.484px]">10% Completed</div>
          <div className="flex-grow"></div> {/* Added flex-grow to push the content downward */}
        </div>

      </div>
    </div>
  );
};

export default AcademySection;
