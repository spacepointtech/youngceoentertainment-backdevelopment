'use client';
import { useState } from 'react';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';

export default function AudiencePage() {
  const [selectedSection, setSelectedSection] = useState("Smart Link");

  const handleLogout = () => {
    console.log('Logged out');
  };

  const sections = ["Smart Link", "Overview", "Segments", "Location"];

  // Calculate the left offset based on selected section index
  const underlineOffset = 395 + sections.indexOf(selectedSection) * 120;

  return (
    <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
      <Sidebar progress={20} onLogout={handleLogout} />
      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
        <Header />

        {/* TOP SECTION */}
        <div className="absolute left-[395px] top-[125px] text-white text-4xl font-semibold font-['Inter'] leading-[54px]">
          Audience
        </div>
        <div className="absolute left-[395px] top-[200px] flex items-center gap-10">
          {sections.map((section) => (
            <div
              key={section}
              onClick={() => setSelectedSection(section)}
              className={`text-xl font-normal font-['Inter'] leading-snug cursor-pointer ${
                selectedSection === section ? 'text-white' : 'text-[#757575]'
              }`}
            >
              {section}
            </div>
          ))}
        </div>

        {/* Dynamic Underline */}
        <div
          className="absolute top-[255px] w-[108px] border-2 border-white transition-all duration-300"
          style={{ left: `${underlineOffset}px` }}
        ></div>

        {/* Separator Line */}
        <div className="absolute left-[395px] top-[255px] w-[939px] border border-neutral-800"></div>

        {/* Time Filters */}
        <div className="absolute left-[869px] top-[158px] flex gap-4">
          {['7 Days', '25 Days', '12 Months', 'Filters'].map((label, index) => (
            <div
              key={label}
              className={`w-[106.54px] h-[26.64px] rounded-xl flex items-center justify-center ${
                index % 2 === 0 ? 'bg-[#757575]' : 'bg-[#d9d9d9]'
              }`}
            >
              <span className="text-black text-xs font-normal font-['Poppins'] leading-[18.80px]">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Common Analytics Section */}
        <div className="w-[947px] h-[388px] left-[393px] top-[309px] absolute rounded-[32px]">
          <div className="w-[939px] h-[422.55px] left-0 top-0 absolute bg-gradient-to-r from-black via-[#2d2d2d] to-black rounded-[17.18px]" />
          
          <div className="left-[54.12px] top-[55.52px] absolute text-white text-[32px] font-bold font-['Poppins'] leading-[45.51px]">Welcome to your Analytics</div>
          <div className="w-[164.54px] h-[155.23px] left-[69px] top-[155px] absolute">
            <div className="w-[145.67px] h-[23.11px] left-[9.69px] top-[132.12px] absolute bg-[#616161] rounded-[9.10px]" />
            <div className="w-[164.54px] h-[143.68px] left-0 top-0 absolute bg-gradient-to-tr from-[#3d3d3d] via-[#2c2c2c] to-[#969696] rounded-[9.10px] backdrop-blur-[16.98px]" />
            <div className="left-[63.71px] top-[56.85px] absolute text-center text-white text-2xl font-bold font-['Poppins'] leading-[52.16px] tracking-[2.67px]">112</div>
            <div className="left-[49.61px] top-[38.40px] absolute text-right text-[#b7b7b7] text-sm font-bold font-['Poppins'] uppercase leading-snug">Listeners</div>
          </div>
          <div className="w-[164.54px] h-[155.23px] left-[265.82px] top-[155px] absolute">
            <div className="w-[145.67px] h-[23.11px] left-[9.69px] top-[132.12px] absolute bg-[#616161] rounded-[9.10px]" />
            <div className="w-[164.54px] h-[143.68px] left-0 top-0 absolute bg-gradient-to-tr from-[#3d3d3d] via-[#2c2c2c] to-[#969696] rounded-[9.10px]" />
            <div className="left-[63.71px] top-[56.85px] absolute text-center text-white text-2xl font-bold font-['Poppins'] leading-[52.16px] tracking-[2.67px]">112</div>
            <div className="left-[55.92px] top-[35.02px] absolute text-right text-[#b7b7b7] text-sm font-bold font-['Poppins'] uppercase leading-snug">Streams</div>
          </div>
          <div className="w-[164.54px] h-[155.23px] left-[462.64px] top-[155px] absolute">
            <div className="w-[145.67px] h-[23.11px] left-[9.69px] top-[132.12px] absolute bg-[#616161] rounded-[9.10px]" />
            <div className="w-[164.54px] h-[143.68px] left-0 top-0 absolute bg-gradient-to-tr from-[#3d3d3d] via-[#2c2c2c] to-[#969696] rounded-[9.10px]" />
            <div className="left-[63.71px] top-[56.85px] absolute text-center text-white text-2xl font-bold font-['Poppins'] leading-[52.16px] tracking-[2.67px]">112</div>
            <div className="left-[55.92px] top-[38.40px] absolute  text-[#b7b7b7] text-sm font-bold font-['Poppins'] uppercase leading-snug">Average</div>
          </div>
          <div className="w-[164.54px] h-[155.23px] left-[659.46px] top-[155px] absolute">
            <div className="w-[145.67px] h-[23.11px] left-[9.69px] top-[132.12px] absolute bg-[#616161] rounded-[9.10px]" />
            <div className="w-[164.54px] h-[143.68px] left-0 top-0 absolute bg-gradient-to-tr from-[#3d3d3d] via-[#2c2c2c] to-[#969696] rounded-[9.10px]" />
            <div className="left-[63.71px] top-[56.85px] absolute text-center text-white text-2xl font-bold font-['Poppins'] leading-[52.16px] tracking-[2.67px]">112</div>
            <div className="left-[56.81px] top-[29.31px] absolute text-right text-[#b7b7b7] text-sm font-bold font-['Poppins'] uppercase leading-snug">Saves</div>
          </div>
        </div>

        {/* Section Content */}
        <div className="mt-[320px] text-center">
          {selectedSection === "Smart Link" && (
            <div>
              <div className="left-[395px] top-[737px] mt-2 absolute text-white text-4xl font-semibold font-['Poppins'] leading-[45.51px]">Smart Link Traffic</div>
              
              <div className="w-[945px] h-[198px] ml-12 mt-[390px] relative bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7]">
  <div className="w-[311px] h-[118px] absolute left-[234.41px] top-[40px] flex flex-col space-y-2">
  <div className="text-[#757575] text-sm font-normal text-left font-['Poppins'] leading-[21px]">
  <div className="underline">SMART LINK</div>
  <div className="w-[310px] text-[#ebebeb] text-base font-semibold leading-normal">Mai Khush Hun , Meri Kya Galti</div>
  <div className="ml-4"> -- Song Link </div>
</div>
<div className="text-[#757575] text-left text-xs font-normal">
  last updated 3 hours ago
</div>

  </div>

  <div className="w-[163px] h-[107px] absolute left-[736px] top-[46px]">
    <div className="w-[163px] h-[107px] rounded-2xl border border-[#a6a6a6]" />
    <div className="w-20 h-[67.69px] absolute left-[41px] top-[16px]">
      <div className="text-[#ebebeb] text-[28px] font-medium">
        6,420
      </div>
      <div className="text-[#a6a6a6] text-xl font-normal">
        Clicks
      </div>
    </div>
  </div>

  <img className="w-[139.41px] h-[150.06px] rounded-2xl absolute left-[75px] top-[24px]" src="https://via.placeholder.com/139x150" />
</div>

            </div>
          )}
          {selectedSection === "Overview" && <div>{/* Overview code goes here */}</div>}
          {selectedSection === "Segments" && <div>{/* Segments code goes here */}</div>}
          {selectedSection === "Location" && <div>{/* Location code goes here */}</div>}
        </div>
      </main>
    </div>
  );
}

// 'use client';
// import { useState } from 'react';
// import Sidebar from '@/app/dashboard/components/Sidebar';
// import Header from '@/app/dashboard/components/Header';

// export default function AudiencePage() {
//   const [selectedSection, setSelectedSection] = useState("Smart Link");

//   const handleLogout = () => {
//     console.log('Logged out');
//   };

//   const sections = ["Smart Link", "Overview", "Segments", "Location"];

//   // Calculate the left offset based on selected section index
//   const underlineOffset = 395 + sections.indexOf(selectedSection) * 120;

//   return (
//     <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
//       <Sidebar progress={20} onLogout={handleLogout} />
//       <main className="flex-1 p-6 flex flex-col gap-6 text-white">
//         <Header />

//         {/* TOP SECTION */}
//         <div className="absolute left-[395px] top-[125px] text-white text-4xl font-semibold font-['Inter'] leading-[54px]">
//           Audience
//         </div>
//         <div className="absolute left-[395px] top-[200px] flex items-center gap-10">
//           {sections.map((section) => (
//             <div
//               key={section}
//               onClick={() => setSelectedSection(section)}
//               className={`text-xl font-normal font-['Inter'] leading-snug cursor-pointer ${
//                 selectedSection === section ? 'text-white' : 'text-[#757575]'
//               }`}
//             >
//               {section}
//             </div>
//           ))}
//         </div>

//         {/* Dynamic Underline */}
//         <div
//           className="absolute top-[255px] w-[108px] border-2 border-white transition-all duration-300"
//           style={{ left: `${underlineOffset}px` }}
//         ></div>

//         {/* Separator Line */}
//         <div className="absolute left-[395px] top-[255px] w-[939px] border border-neutral-800"></div>

//         {/* Time Filters */}
//         <div className="absolute left-[869px] top-[158px] flex gap-4">
//           {['7 Days', '25 Days', '12 Months', 'Filters'].map((label, index) => (
//             <div
//               key={label}
//               className={`w-[106.54px] h-[26.64px] rounded-xl flex items-center justify-center ${
//                 index % 2 === 0 ? 'bg-[#757575]' : 'bg-[#d9d9d9]'
//               }`}
//             >
//               <span className="text-black text-xs font-normal font-['Poppins'] leading-[18.80px]">
//                 {label}
//               </span>
//             </div>
//           ))}
//         </div>

//         {/* Common Analytics Section */}
//         <div className="w-[947px] h-[388px] left-[393px] top-[309px] absolute rounded-[32px]">
//           <div className="w-[939px] h-[422.55px] left-0 top-0 absolute bg-gradient-to-r from-black via-[#2d2d2d] to-black rounded-[17.18px]" />
          
//           <div className="left-[54.12px] top-[55.52px] absolute text-white text-[32px] font-bold font-['Poppins'] leading-[45.51px]">
//             Welcome to your Analytics
//           </div>

//           {/* Analytics Boxes */}
//           {['Listeners', 'Streams', 'AVERAGE', 'Saves'].map((label, index) => (
//             <div className="w-[164.54px] h-[155.23px] absolute" key={label} style={{ left: `${69 + 196 * index}px`, top: '155px' }}>
//               <div className="w-[145.67px] h-[23.11px] absolute bg-[#616161] rounded-[9.10px]" />
//               <div className="w-[164.54px] h-[143.68px] absolute bg-gradient-to-tr from-[#3d3d3d] via-[#2c2c2c] to-[#969696] rounded-[9.10px]" />
//               <div className="left-[63.71px] top-[56.85px] absolute text-center text-white text-2xl font-bold font-['Poppins'] leading-[52.16px] tracking-[2.67px]">112</div>
//               <div className="left-[49.61px] top-[38.40px] absolute text-right text-[#b7b7b7] text-sm font-bold font-['Poppins'] uppercase leading-snug">
//                 {label}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Section Content */}
//         <div className="mt-[320px] text-center">
//           {selectedSection === "Smart Link" && (
//             <div>
//               <div className="left-[395px] top-[737px] mt-2 absolute text-white text-4xl font-semibold font-['Poppins'] leading-[45.51px]">
//                 Smart Link Traffic
//               </div>
//               <div className="w-[945px] h-[198px] ml-12 mt-[390px] relative bg-[#191919] rounded-[36px] shadow border border-[#c7c7c7]">
//                 <div className="w-[311px] h-[118px] absolute left-[234.41px] top-[40px] flex flex-col space-y-2">
//                   <div className="text-[#757575] text-sm font-normal text-left font-['Poppins'] leading-[21px]">
//                     <div className="underline">SMART LINK</div>
//                     <div className="w-[310px] text-[#ebebeb] text-base font-semibold leading-normal">Mai Khush Hun , Meri Kya Galti</div>
//                     <div className="ml-4"> -- Song Link </div>
//                   </div>
//                   <div className="text-[#757575] text-left text-xs font-normal">
//                     last updated 3 hours ago
//                   </div>
//                 </div>
//                 <div className="w-[163px] h-[107px] absolute left-[736px] top-[46px]">
//                   <div className="w-[163px] h-[107px] rounded-2xl border border-[#a6a6a6]" />
//                   <div className="w-20 h-[67.69px] absolute left-[41px] top-[16px]">
//                     <div className="text-[#ebebeb] text-[28px] font-medium">6,420</div>
//                     <div className="text-[#a6a6a6] text-xl font-normal">Clicks</div>
//                   </div>
//                 </div>
//                 <img className="w-[139.41px] h-[150.06px] rounded-2xl absolute left-[75px] top-[24px]" src="https://via.placeholder.com/139x150" />
//               </div>
//             </div>
//           )}
//           {selectedSection === "Overview" && <div>{/* Overview content */}</div>}
//           {selectedSection === "Segments" && <div>{/* Segments content */}</div>}
//           {selectedSection === "Location" && <div>{/* Location content */}</div>}
//         </div>
//       </main>
//     </div>
//   );
// }
