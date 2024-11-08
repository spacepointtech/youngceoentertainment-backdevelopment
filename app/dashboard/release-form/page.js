
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { FaChevronDown, FaAngleLeft, FaPlus, FaCloudUploadAlt, FaMinus } from 'react-icons/fa';
import Link from 'next/link';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';


export default function Dashboard() {
  const [progress, setProgress] = useState(20);
  const [step, setStep] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState('');
  const [contributors, setContributors] = useState([]);
  const [role, setRole] = useState('');
  const [name, setName] = useState('');
  const [tooltip, setTooltip] = useState({ visible: false, message: '', position: '' });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [license, setLicense] = useState('');
  const [showIndependentTooltip, setShowIndependentTooltip] = useState(false);
  const [showCreativeTooltip, setShowCreativeTooltip] = useState(false);
  const [ccType, setCcType] = useState(''); // New state for CC dropdown
  const [trackFile, setTrackFile] = useState(null);
  const [trackFileName, setTrackFileName] = useState('');
  const [catalogFile, setCatalogFile] = useState(null);
  const [catalogFileName, setCatalogFileName] = useState('');
  const [coverFile, setCoverFile] = useState(null);
  const [coverFileName, setCoverFileName] = useState('');

  const handleFileUpload = (e, setFile, setFileName, allowedTypes) => {
    const file = e.target.files[0];
    if (file && allowedTypes.includes(file.type)) {
      setFile(file);
      setFileName(file.name); 
    } else {
      alert('Invalid file type. Please upload a valid file.');
    }
  };

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setSelectedTime(e.target.value);
  };
  
  const handleLicenseChange = (e) => {
    setLicense(e.target.value);
    if (e.target.value !== 'Creative Commons') {
      setCcType(''); // Reset CC type if not Creative Commons
    }
  };


  const handleAddContributor = () => {
    if (role && name) {
      setContributors([...contributors, { role, name }]);
      setRole('');
      setName('');
    }
  };

  const handleRemoveContributor = (index) => {
    const newContributors = contributors.filter((_, i) => i !== index);
    setContributors(newContributors);
  };

  const Tooltip = ({ message, visible, position }) => {
    return (
      visible && (
        <div
          className={`absolute bg-black text-white p-1 text-xs rounded-md`}
          style={{ left: position.left, top: position.top }}
        >
          {message}
        </div>
      )
    );
  };
  const showTooltip = (message, e) => {
    const { top, left, height } = e.target.getBoundingClientRect();
    setTooltip({
      visible: true,
      message,
      position: {
        left: left + e.target.offsetWidth + 0, 
        top: top + window.scrollY // Account for scrolling
      }
    });
  };
  
  const hideTooltip = () => {
    setTooltip({ visible: false, message: '', position: '' });
  };

  const handleReleaseTypeChange = (e) => {
    const value = e.target.value;
    if (value === 'Remixes') {
      setPopupType('remixes');
      setShowPopup(true);
    } else {
      setReleaseType(value);
      setShowOtherInput(value === 'Others');
    }
  };

  const handlePopupResponse = (agreed) => {
    if (agreed) {
      setReleaseType('Remixes');
    }
    setShowPopup(false);
  };
  

  const nextPhase = () => {
    if (step === 2) {
     
    }
    setStep((prev) => Math.min(prev + 1, 5));
  };

  const previousPhase = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleLogout = () => {
    console.log('Logged out');
  };

  const submitForm = () => {
    // Handle form submission here (e.g., send data to server)
    console.log('Form submitted');
  };

  // Profile Form Component
  const ProfileForm = () => (
    <div className="bg-opacity-40 backdrop-blur-lg text-white w-[800px] p-8 rounded-lg shadow-lg z-10 relative ml-32 mt-[100px]">
    
      
      {/* Phase-specific message */}
      {step === 1 && (
        <>
          
        </>
      )}

      {step === 1 && (
        <div>
         {/* Greetings Box */}
         <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center relative overflow-visible">
            <div>
              <h1 className="text-2xl font-bold">Hello User!</h1>
              <p className="mt-2 opacity-75">Launch your release today with Young CEO Entertainment!</p>
            </div>
            <Image
              src="/images/welc.svg"
              alt="Illustration"
              width={150}
              height={150}
              className="object-contain absolute right-8 bottom-10 translate-y-10"
            />
          </div>

             {/* Essential Details text */}
          <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg flex items-start relative">
            {/* Background Image */}
            <Image
              src="/images/C1.png"
              alt="Key Details Illustration"
              objectFit="cover"
              className="absolute opacity-70 left-0 top-12"
              width={360}
              height={220}
            />

            <div className="w-1/2 relative z-10 ml-auto mr-8">
              {/* Text */}
              <p className="text-white text-xl text-left mb-4">Key Details of Your Release</p>

              {/* Progress Bar */}
              <div className="bg-gray-700 rounded-full h-2 mb-8 ml-auto">
                <div className="bg-white h-2 rounded-full" style={{ width: '25%' }}></div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                <div>
                  <label className="text-white block mb-2">Write Your Song Title Here!<span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                    placeholder="Song Title"
                    required
                  />
                </div>

                <div>
                  <label className="text-white block mb-2">Version (Optional)</label>
                  <input
                    type="text"
                    className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                    placeholder=" "
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Specify how this release differs from the original (e.g., Remix, Radio Edit, Bonus Track)
                  </p>
                </div>

                <div>
                  <label className="text-white block mb-2">Language of the Titles<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select className="w-full p-3 rounded bg-[#CDCDCD] text-black appearance-none pr-10" required>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Marathi</option>
                    </select>
                    <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-black" />
                  </div>
                </div>

                <div>
                  <label className="text-white block mb-2">Release Type of Your Music<span className="text-red-500">*</span></label>
                  <div className="relative">
                    <select
                      className="w-full p-3 rounded bg-[#CDCDCD] text-black appearance-none pr-10"
                      onChange={handleReleaseTypeChange}
                      required
                    >
                      <option>Single</option>
                      <option>Album</option>
                      <option>EP</option>
                     
                      <option>Remixes</option>
                    
                    </select>
                    <FaChevronDown className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none text-black" />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Choose your release type: Album, Single or EP
                  </p>
                </div>

                
              </div>

               {/* Submit and Cancel Buttons */}
               <div className="mt-6 flex justify-center items-center">
                <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>

             
                  <button 
                   onClick={step === 5 ? submitForm : nextPhase}
        
                  className="bg-white text-black py-2 px-4 rounded"> 
                  {step === 5 ? 'Submit' : 'Next'}
                  </button>
                
              </div>
            </div>
            
          </div>

        
        </div>
      )}
         {/* Phase 2 Questions */}
      {step === 2 && (
        <div>
            {/* Song Detail box */}
          <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center mb-4 relative overflow-visible">
            <div>
              <p className="mt-2 opacity-75">--- Song Details Box ---</p>
            </div>
          </div>
           {/* Essential Details text */}
           <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>

          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg flex items-start relative">
          <FaAngleLeft
              className="absolute top-4 left-4 cursor-pointer text-white"
              onClick={previousPhase}
            />
            {/* Background Image */}
            <Image
              src="/images/C2.png"
              alt="Key Details Illustration"
              objectFit="cover"
              className="absolute opacity-70 left-0 top-6"
              width={345}
              height={250}
            />

            <div className="w-1/2 relative z-10 ml-auto mr-8">
              {/* Text */}
              <p className="text-white text-xl text-left mb-4">Genre & Credits Details</p>

              {/* Progress Bar */}
              <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
                <div className="bg-white h-2 rounded-full" style={{ width: '50%' }}></div>
              </div>

              {/* Form Fields */}
              <div className="space-y-4">
                
                {/* Primary Genre */}
              <div>
                <label className="text-white block mb-2">Primary Genre<span className="text-red-500">*</span></label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Primary Genre"
                  required
                />
              </div>

                {/* Secondary Genre */}
              <div>
                <label className="text-white block mb-2">Secondary Genre</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Secondary Genre"
                />
                <p className="text-xs text-gray-400 mt-1">Add a secondary genre for additional context, if needed.</p>
              </div>

                {/* Horizontal Line */}
                <hr className="border-t border-white opacity-30 my-4" />

               {/* Contributors */}
              <div>
                <label className="text-white block mb-2">Contributor Role & Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Contributor Role"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
              </div>


              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                  placeholder="Contributor Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <button
                  onClick={handleAddContributor}
                  className="bg-[#CDCDCD] text-white rounded p-3"
                >
                  <FaPlus className="text-black"/>
                </button>
              </div>

                {/* Contributor List */}
                <ul className="mt-4">
                  {contributors.map((contributor, index) => (
                    <li key={index} className="flex justify-between items-center text-white">
                      <span>{`${contributor.role}: ${contributor.name}`}</span>
                      <button
                        onClick={() => handleRemoveContributor(index)}
                        className="text-red-500"
                      >
                        <FaMinus />
                      </button>
                    </li>
                  ))}
                </ul>

                <button className="mt-4 bg-white text-black py-2 px-4 rounded">Add Artists</button>

              {/* Submit and Cancel Buttons */}
             <div className="mt-6 flex justify-center items-center">
                 <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                 </Link>

               
                  <button 
                  onClick={step === 5 ? submitForm : nextPhase}
                  className="bg-white text-black py-2 px-4 rounded">
                   {step === 5 ? 'Submit' : 'Next'}
                  </button>
                
              </div>
             
              </div>
            </div>
          </div>



        </div>
      )}
    
      {step === 3 && (
        <div>
               {/* Greetings Box */}
          <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center mb-4 relative overflow-visible">
            <div>
          
              <p className="mt-2 opacity-75">--- Song Details Box --- </p>
            </div>
           
          </div>
          {/* Essential Details text */}
          <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>
 
          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg relative">
            {/* Back Button */}
            <FaAngleLeft
              className="absolute top-4 left-4 cursor-pointer text-white"
              onClick={previousPhase}
            />
            <p className="text-white text-xl text-center mb-4 mt-2">Providing License Details</p>
            {/* Progress Bar */}
            <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
              <div className="bg-white h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>

            <div className="relative z-10 w-full">
                        {/* Form Fields */}
        <div className="space-y-4">
          {/* Digital Release Date and Time */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="text-white block mb-2">Digital Release Date<span className="text-red-500">*</span></label>
              <input
                type="date"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                onChange={handleDateChange}
                required
              />
            </div>
            <div className="w-1/2 relative">
              <label className="text-white block mb-2">Release Time<span className="text-red-500">*</span></label>
              <input
                type="time"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                onChange={handleTimeChange}
                required
              />
             
            </div>
          </div>
          <p className="text-gray-400 text-xs mt-2">
            Set your digital release date. We recommend at least 7 days in advance to account for processing time.
          </p>
          {selectedDate && selectedTime && (
            <p className="text-white mt-2">
              Release Date: {selectedDate}, Time: {selectedTime}
            </p>
          )}
                 {/* License Type */}
                 <div className="mt-4">
                  <p className="text-white block mb-2">Select the License Type<span className="text-red-500">*</span></p>
                  <div className="border rounded-lg flex items-center justify-center p-2">
                    <div
                      className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${license === 'Copyright' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                      onMouseEnter={() => setShowIndependentTooltip(true)}
                      onMouseLeave={() => setShowIndependentTooltip(false)}
                    >
                      <input
                        type="radio"
                        value="Copyright"
                        className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                        checked={license === 'Copyright'}
                        onChange={handleLicenseChange}
                      />
                      <label htmlFor="independent">Copyright</label>
                      {showIndependentTooltip && !license && (
                        <div className="absolute left-0 mt-28 bg-gray-700 text-white text-xs p-2 rounded-md z-10">
                          Copyright (or author's right) is a legal term used to describe the rights that creators have over their literary and artistic works. Works covered by copyright range from books, music, paintings, sculpture, and films, to computer programs, databases, advertisements, maps, and technical drawings.
                        </div>
                      )}
                    </div>
                    <div
                      className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${license === 'Creative Commons' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                      onMouseEnter={() => setShowCreativeTooltip(true)}
                      onMouseLeave={() => setShowCreativeTooltip(false)}
                    >
                      <input
                        type="radio"
                        value="Creative Commons"
                        className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                        onChange={handleLicenseChange}
                        checked={license === 'Creative Commons'} 
                      />
                      <label htmlFor="label">Creative Commons</label>
                      {showCreativeTooltip && !license && (
                        <div className="absolute right-0 mt-28 bg-gray-700 text-white text-xs p-2 rounded-md z-10">
                          A Creative Commons license is a standard way for a copyright holder to grant others permission to use their work under certain conditions.
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-400 text-xs">
                    Select the applicable license: Copyright or Creative Commons (choose the CC type)
                  </p>
                  {/* Creative Commons Type Dropdown */}
                  {license === 'Creative Commons' && (
                    <div className="mt-4">
                      <label className="text-white block mb-2">Select Creative Commons Type</label>
                      <select
                        className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                        value={ccType}
                        onChange={(e) => setCcType(e.target.value)}
                      >
                        <option value="">Choose CC Type</option>
                        <option value="Attribution">Attribution (CC BY)</option>
                        <option value="Attribution-ShareAlike">Attribution-ShareAlike (CC BY-SA)</option>
                        <option value="Attribution-NoDerivs">Attribution-NoDerivs (CC BY-ND)</option>
                        <option value="Attribution-NonCommercial">Attribution-NonCommercial (CC BY-NC)</option>
                        <option value="Attribution-NonCommercial-ShareAlike">Attribution-NonCommercial-ShareAlike (CC BY-NC-SA)</option>
                        <option value="Attribution-NonCommercial-NoDerivs">Attribution-NonCommercial-NoDerivs (CC BY-NC-ND)</option>
                      </select>
                    </div>
                  )}
                </div>
          {/* Territories and Price Category */}
          <div className="flex space-x-4">
            <div className="w-1/2 relative">
              <label className="text-white block mb-2">Territories (Optional)</label>
              <select className="w-full p-3 rounded bg-[#CDCDCD] text-black appearance-none pr-10">
                <option>Entire World</option>
                <option>Africa</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>North America</option>
                <option>South America</option>
                <option>Oceania</option>
              </select>
              <FaChevronDown className="absolute top-3/4 right-4  transform -translate-y-1/2 text-black" />
            </div>
            <div className="w-1/2">
              <label className="text-white block mb-2">Price Category</label>
              <input
                type="text"
                className="w-full p-3 rounded bg-[#CDCDCD] text-black"
                placeholder="Enter Price Category"
              />
            </div>
          </div>
        </div>
                {/* Submit and Cancel Buttons */}
              <div className="mt-16 flex justify-center items-center">
                <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>
                  <button 
                  onClick={step === 5 ? submitForm : nextPhase}
                  className="bg-white text-black py-2 px-4 rounded">
                     {step === 5 ? 'Submit' : 'Next'}
                  </button>
              </div>
            </div>
          </div>
        </div>
       
      )}
          {/* Phase 4 Placeholder */}
      {step === 4 && (
        <div>
             <div className="bg-[#1A1A1A] text-white p-6 rounded-lg flex justify-between items-center mb-4 relative overflow-visible">
            <div>
          
              <p className="mt-2 opacity-75">--- Song Details Box --- </p>
            </div>
           
          </div>
          {/* Essential Details text */}
          <h3 className="text-white text-2xl text-center mb-6">Essential Details for Your Next Big Release</h3>

          {/* Key Details container box */}
          <div className="bg-[#1A1A1A] border border-[#262626] p-6 rounded-lg relative">
            {/* Back Button */}
            <FaAngleLeft
              className="absolute top-4 left-4 cursor-pointer text-white"
              onClick={previousPhase}
            />
            <p className="text-white text-xl text-center mb-4 mt-2">Upload Your Artistic Data</p>
            {/* Progress Bar */}
            <div className=" bg-gray-700 rounded-full h-2 mb-8 ml-auto">
              <div className="bg-white h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>

            <div className="relative z-10 w-full">
              {/* Add Tracks from Computer */}
              <div className="space-y-4 mb-8">
                <label className="text-white block mb-2 mt-3">Add Tracks from Computer</label>
                <div className="flex justify-between space-x-4">
                  <label className="w-2/3 p-3 flex items-center justify-between border border-white text-black rounded h-12 cursor-pointer relative bg-[#CDCDCD]">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => handleFileUpload(e, setTrackFile, setTrackFileName, ['audio/wav'])}
                    />
                    <span>{trackFileName || 'Upload From Computer'}</span>  
                    <FaCloudUploadAlt className="text-3xl" />
                  </label>
                </div>
                <p className="text-xs text-white opacity-75 mt-2">The tracks will be uploaded from your computer.</p>

              </div>
               
                {/* Add from Catalog */}
              <div className="space-y-4 mb-8">
                <label className="text-white block mb-2">Add from Catalog</label>
                <div className="flex justify-between space-x-4">
                  <label className="w-2/3 p-3 flex items-center justify-between border border-white text-black rounded h-12 cursor-pointer relative bg-[#CDCDCD]">
                    <input
                      type="file"
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      onChange={(e) => handleFileUpload(e, setCatalogFile, setCatalogFileName, ['audio/wav'])}
                    />
                    <span>{catalogFileName || 'Upload from Catalog'}</span> 
                    <FaCloudUploadAlt className="text-3xl" />
                  </label>
                </div>
                <p className="text-xs text-white opacity-75 mt-2">The tracks will be uploaded from your catalog.</p>
              </div>


                {/* Upload Cover Photo */}
<div className="flex space-x-6">
  <div className="w-1/2">
    <label className="text-white block mb-2">Upload Cover Photo</label>

    {/* Upload Box */}
    <label className="w-full p-3 flex flex-col items-center justify-center border-2 border-white border-dashed text-white rounded h-44 cursor-pointer relative">
      <input
        type="file"
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={(e) => handleFileUpload(e, setCoverFile, setCoverFileName, ['image/png', 'image/jpeg', 'image/jpg'])}
      />
      <div className="flex flex-col items-center">
        <FaCloudUploadAlt className="text-4xl mb-2" />
        <span>{coverFileName || 'Drag and Drop your cover art'}</span>
      </div>
    </label>
  </div>

  <div className="w-1/2 text-xs text-gray-400 opacity-70 mt-10">
    <h5 className="text-xs text-white mb-2 font-semibold">Cover Art Requirement:</h5>
    <p className="text-xs text-gray-400 mb-4">Size: 300X300PX</p>
    <p className="text-xs text-gray-400 mb-4">Format: JPG, JPEG or PNG</p>
    <p>Ensure you own the rights to all artwork elements. Information must match release metadata. Stores reject blurry, low-quality images or those with URLs, contact info, barcodes, prices, or logos. No explicit content. Non-compliant artwork will be rejected.</p>
  </div>
</div>
              {/* Submit and Cancel Buttons */}
              <div className="mt-6 flex justify-center items-center">
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
               <button 
                  onClick={step === 5 ? submitForm : nextPhase}
                  className="bg-white text-black py-2 px-4 rounded">
                  {step === 5 ? 'Submit' : 'Next'}
                  </button>
              </div>
            </div>
          </div>
       
        </div>
      )}
              {/* Phase 5 Placeholder */}
      {step === 5 && (
        <div>
          
           <div className="mt-6 flex justify-center items-center">
                <Link href='/dashboard'>
                  <button className="border border-[#A6A6A6] text-white py-2 px-4 rounded mr-4">Cancel</button>
                </Link>
                  <button 
                   onClick={step === 5 ? submitForm : nextPhase}
        
                  className="bg-white text-black py-2 px-4 rounded"> 
                  {step === 5 ? 'Submit' : 'Next'}
                  </button>  
              </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
      <Sidebar progress={progress} onLogout={handleLogout} />
      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
      <Header />
        <div className="border-t-2 border-white absolute top-14 w-[1092px]"></div>
        <ProfileForm />
      </main>
    </div>
  );
}
