'use client';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Image from 'next/image';
import { FaPencilAlt, FaArrowUp, FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaCheckCircle, FaSpotify, FaItunes, FaAmazon } from 'react-icons/fa';
import Header from '@/app/dashboard/components/Header';

export default function Profile() {

  return (
    <div className="flex flex-auto w-full h-[2100px] bg-[#0F0F0F]">
      <Sidebar progress={20}/>
    
      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
      <Header /> 
        {/* Profile Section */}
         {/* Profile Section */}
         <div className="h-[308px] pl-[45px] pr-[434px] py-[74px] left-[330px] top-[135px] absolute bg-gradient-to-t from-black to-[#666666] rounded-[32px] justify-start items-center inline-flex">
          <div className="w-[595px] h-40 relative">
            <img className="w-40 h-40 left-0 top-0 absolute rounded-full shadow" src="https://via.placeholder.com/160x160" alt="Profile"/>
            <div className="w-[419px] h-[132px] left-[176px] top-[12px] absolute">
              <div className="h-[18px] left-0 top-0 absolute flex items-center gap-2">
                <FaCheckCircle className="text-blue-500" /> {/* Verification icon */}
                <div className="text-white text-sm font-medium font-['Poppins'] leading-[14px]">Verified Artist</div>
              </div>
              <div className="h-3.5 left-0 top-[118px] absolute justify-start items-start gap-1 inline-flex">
                <div className="text-white text-sm font-medium font-['Poppins'] leading-[14px] tracking-wide">1,271</div>
                <div className="text-white text-sm font-medium font-['Poppins'] leading-[14px]">monthly listeners</div>
              </div>
              <div className="left-0 top-[20px] absolute text-white text-5xl font-bold font-['Poppins'] leading-[78px]">Deepesh Vanjani</div>
            </div>
          </div>
        </div>

        {/* Personal Details Section */}
        <div className="w-[630px] h-[356px] left-[330px] top-[473px] absolute bg-[#191919] rounded-[32px] shadow border border-neutral-800">
          <div className="left-[50px] top-[40px] absolute text-white text-xl font-semibold font-['Poppins']">Personal Details</div>
          <div className="p-[5px] left-[550px] top-[43px] absolute bg-[#333333] rounded-md flex items-center">
            <FaPencilAlt className="text-white" />
          </div>
          <div className="absolute left-[53px] top-[100px]">
            <div className="text-[#757575] text-base font-normal font-['Poppins']">Your Name</div>
            <div className="text-white text-base font-normal font-['Poppins']">Deepesh Vanjani</div>
          </div>
          <div className="absolute left-[53px] top-[182px]">
            <div className="text-[#757575] text-base font-normal font-['Poppins']">Email</div>
            <div className="text-white text-base font-normal font-['Poppins']">deepesh123@gmail.com</div>
          </div>
          <div className="absolute left-[53px] top-[264px]">
            <div className="text-[#757575] text-base font-normal font-['Poppins']">Joined Date</div>
            <div className="text-white text-base font-normal font-['Poppins']">September 10, 2024</div>
          </div>
          <div className="absolute left-[475px] top-[182px]">
            <div className="text-[#757575] text-base font-normal font-['Poppins']">Contact</div>
            <div className="text-white text-base font-normal font-['Poppins']">7709574621</div>
          </div>
          <div className="absolute left-[475px] top-[100px]">
            <div className="text-[#757575] text-base font-normal font-['Poppins']">Stage Name</div>
            <div className="text-white text-base font-normal font-['Poppins']">DJ Sonic</div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="w-[404px] h-[534px] left-[990px] top-[473px] absolute bg-[#191919] rounded-[32px] shadow border border-neutral-800">
          <div className="left-[43px] top-[40px] absolute text-white text-xl font-semibold font-['Poppins']">Social Media Links</div>
          <div className="left-[43px] top-[100px] absolute flex-col justify-start items-start gap-[30px] inline-flex">
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaInstagram className="text-white" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal font-['Inter'] leading-[21px]">Instagram</div>
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123</div>
              </div>
            </div>
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaFacebookF className="text-white" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal font-['Inter'] leading-[21px]">Facebook</div>
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123</div>
              </div>
            </div>
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaTwitter className="text-white" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal font-['Inter'] leading-[21px]">Twitter</div>
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123</div>
              </div>
            </div>
            <div className="justify-start items-end gap-5 inline-flex">
              <div className="p-[13px] bg-[#333333] rounded-xl justify-center items-center flex">
                <FaYoutube className="text-white" />
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-center text-gray-400 text-sm font-normal font-['Inter'] leading-[21px]">YouTube</div>
                <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123</div>
              </div>
            </div>
          </div>
          <div className="w-[323px] h-[48px] left-[43px] top-[430px] absolute bg-transparent border-2 border-[#333333] rounded-2xl flex items-center justify-center">
            <span className="text-[#a6a6a6] text-base font-medium font-['Inter'] leading-normal">+ Add Account</span>
          </div>
        </div>

        {/* Additional sections would continue here as in the original code */}
        
        {/* Achievements & Activity Section */}
        <div className="w-[630px] h-[471px] left-[330px] top-[871px] absolute bg-[#191919] rounded-[32px] shadow border border-neutral-800">
          <div className="left-[50px] top-[40px] absolute text-white text-xl font-semibold font-['Poppins']">Achievements & Activity</div>
          <div className="p-[5px] left-[550px] top-[43px] absolute bg-[#333333] rounded-md flex items-center">
            <FaArrowUp className="text-white" />
          </div>
          <div className="absolute left-[50px] top-[100px] text-white">
            <p>Your Achievements will be displayed here</p>
          </div>
        </div>
        
           {/* Music Platforms Box */}
        <div className="w-[404px] h-[679px] left-[990px] top-[1037px] absolute bg-[#191919] rounded-[32px] shadow border-t border-b border-neutral-800">
        <div className="p-[5px] left-[336px] top-[40px] absolute bg-[#333333] rounded-md justify-start items-start gap-2.5 inline-flex">
            <div className="w-5 h-5 justify-center items-center flex">
                <div className="w-5 h-5 relative">
                </div>
            </div>
        </div>
        <div className="left-[43px] top-[40px] absolute text-white text-xl font-semibold font-['Poppins']">Music Platforms</div>
        <div className="w-[323px] h-[48px] left-[43px] top-[580px] absolute bg-transparent border-2 border-[#333333] rounded-2xl flex items-center justify-center mt-5">
      <span className="text-[#a6a6a6] text-base font-medium font-['Inter'] leading-normal">+ Add Platform</span>
    </div>
        <div className="h-[410px] left-0 top-[100px] absolute flex-col justify-start items-center gap-5 inline-flex">
            <div className="w-80 justify-start items-start inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
               
                    <FaSpotify className="text-green-400" size={50} />
                 
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-['Inter'] leading-[21px]">Spotify</div>
                        <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                <FaItunes className="text-red-400" size={50} />
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-['Inter'] leading-[21px]">Apple Music</div>
                        <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                    
                        <Image
                         width={47}
                         height={47}
                          src="/images/jiosavan.svg"
                          alt="jio"
                        className="w-[47px] h-[47px] text-green-400" 
                        />
                        
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="opacity-10 text-center text-gray-300 text-sm font-medium font-['Inter'] leading-[21px]">Jio Sawan</div>
                        <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                <FaAmazon className="text-black-400" size={50} />
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-['Inter'] leading-[21px]">Amazon Music</div>
                        <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
            <div className="w-[400px] h-[0px] border border-[#333333]"></div>
            <div className="w-80 justify-start items-center gap-5 inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                <FaYoutube className="text-red-400" size={50} />
                    <div className="flex-col justify-start items-start inline-flex">
                        <div className="text-center text-gray-500 text-sm font-medium font-['Inter'] leading-[21px]">Youtube Music</div>
                        <div className="text-center text-white text-base font-medium font-['Inter'] leading-normal">Deepesh@123456</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        
        {/* Subscription Details */}
    <div className="w-[404px] h-[264px] left-[990px] top-[1746px] absolute bg-[#191919] rounded-[32px] shadow border-t border-b border-neutral-800">
  <div className="left-[50px] top-[40px] absolute text-white text-xl font-semibold font-['Poppins']">Subscription Details</div>

  <div className="flex flex-col gap-6 absolute left-[50px] top-[100px]">
    {/* Plan Type */}
    <div className="flex flex-col">
      <div className="text-[#757575] text-base font-normal font-['Poppins']">Plan Type</div>
      <div className="text-white text-base font-normal font-['Poppins']">Independent Artist Plan</div>
    </div>
    
    {/* Next Renewal Date */}
    <div className="flex flex-col">
      <div className="text-[#757575] text-base font-normal font-['Poppins']">Next Renewal Date</div>
      <div className="text-white text-base font-normal font-['Poppins']">October 1, 2024</div>
    </div>
  </div>
    <div className="w-6 h-6 flex items-center justify-center">
      <div className="w-6 h-6 relative"></div>
  </div>
</div>
      </main>
    </div>
  );
}
