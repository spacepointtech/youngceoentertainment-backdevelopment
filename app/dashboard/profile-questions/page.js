
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMusic, faUsers, faTshirt, faVideo, faCog, faSignOutAlt, faUser, faBell, faBolt, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  const [progress, setProgress] = useState(20);
  const [selectedArtistType, setSelectedArtistType] = useState(null);
  const [step, setStep] = useState(1);
  const [distributedSong, setDistributedSong] = useState(null);
  const [spotifyStatus, setSpotifyStatus] = useState('');
  const [spotifyLink, setSpotifyLink] = useState('');
  const [YoutubeStatus, setYoutubeStatus] = useState('');
  const [YoutubeLink, setYoutubeLink] = useState('');
  const [instagramLink, setInstagramLink] = useState('');
  const [facebookLink, setFacebookLink] = useState('');
  const [twitterLink, setTwitterLink] = useState('');

  // Load saved form data from localStorage (if any)
  useEffect(() => {
    const savedData = localStorage.getItem('profileFormDraft');
    if (savedData) {
      const { selectedArtistType, distributedSong } = JSON.parse(savedData);
      setSelectedArtistType(selectedArtistType);
      setDistributedSong(distributedSong);
    }
  }, []);

  const nextPhase = () => {
    if (step === 2) {
      // Save the form in draft when transitioning to phase 2
      const formData = { selectedArtistType, distributedSong };
      localStorage.setItem('profileFormDraft', JSON.stringify(formData));
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

  // Sidebar Component
 // Sidebar Component
 const Sidebar = ({ progress, onLogout }) => (
  <aside className="w-[310px] h-[800px] p-6 flex flex-col gap-6" style={{ backgroundColor: '#EBEBEB', borderTopRightRadius: '20px', borderBottomRightRadius: '20px' }}>
    <div className="bg-black/80 p-4 rounded-2xl flex items-center justify-between gap-2 w-full">
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faUser} className="text-white text-2xl" />
      </div>
      <div className="flex flex-col items-end gap-2 w-[75%]">
        <div className="flex items-center w-full mt-2">
          <div className="w-[80%] h-2 bg-gray-700 rounded-full">
            <div className="h-2 bg-white rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="text-white text-sm ml-6">{progress}%</div>
        </div>
        <button className="text-white border border-white px-3 py-2 text-sm rounded-md mt-2 inline-block">
          Complete your profile
        </button>
      </div>
    </div>
    <Image src="/images/blogo.png" alt="Logo" width={184} height={169} className="w-[184px] h-[169px] mx-auto" />
    <nav className="flex flex-col justify-center ml-14 gap-4 text-white text-lg font-semibold">
      <div onClick={() => router.push('/dashboard')} className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer">
        <FontAwesomeIcon icon={faMusic} className="text-white" />
        <span className="text-white"> Music </span>
      </div>
      <div onClick={() => router.push('/dashboard/audience')} className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer">
        <FontAwesomeIcon icon={faUsers} className="text-black" />
        <span className="text-black"> Audience </span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 rounded-r-full text-gray-500 cursor-not-allowed">
        <FontAwesomeIcon icon={faTshirt} className="text-black" />
        <span className="text-black"> Merch </span>
      </div>
      <div className="flex items-center gap-4 px-4 py-2 rounded-r-full text-gray-500 cursor-not-allowed">
        <FontAwesomeIcon icon={faVideo} className="text-black" />
        <span className="text-black"> Video & Visuals </span>
      </div>
      <div onClick={() => router.push('/dashboard/settings')} className="flex items-center gap-4 px-4 py-2 rounded-r-full cursor-pointer">
        <FontAwesomeIcon icon={faCog} className="text-black" />
        <span className="text-black"> Settings</span>
      </div>
    </nav>
    <button onClick={onLogout} className="bg-black text-white px-4 py-3 mt-4 rounded-md">
      <FontAwesomeIcon icon={faSignOutAlt} />
      <span> Logout </span>
    </button>
    <div className="flex-grow" />
  </aside>
);

  // Profile Form Component
  const ProfileForm = () => (
    <div className="bg-black bg-opacity-40 backdrop-blur-lg text-white w-[800px] p-8 rounded-lg shadow-lg z-10 relative ml-32 mt-[100px]">
      <div className="flex justify-between items-center mb-4">
        <button onClick={previousPhase}>
          <FontAwesomeIcon icon={faAngleLeft} className="text-white text-2xl" />
        </button>
        <span>{step}/5</span>
      </div>
      
      {/* Phase-specific message */}
      {step === 1 && (
        <>
          <h2 className="text-2xl font-semibold text-center mb-4">Complete your Account Setup!</h2>
          <p className="text-gray-400 text-center mb-6">
            Provide your basic profile information to complete your artist profile. This helps us create a more personalized experience for you.
          </p>
        </>
      )}

      {step === 1 && (
        <div>
          {/* Phase 1 Questions */}
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="bg-transparent border text-white p-2 rounded-lg mb-4"  />
            <input type="text" placeholder="Last Name" className="bg-transparent border text-white p-2 rounded-lg mb-4" />
          </div>
          <input type="email" placeholder="Your Email address" className="bg-transparent border text-white w-full p-2 mt-4 rounded-lg mb-4" />
          <input type="text" placeholder="Your Mobile No." className="bg-transparent border text-white w-full p-2 mt-4 rounded-lg mb-4" />
        

      {/* Artist Type Selection */}
      <div className="mt-4">
          <p className="mb-4 text-center">I am a:</p>
          <div className="border rounded-lg flex items-center justify-center p-2">
            <div
              className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${selectedArtistType === 'independent' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
              onClick={() => setSelectedArtistType('independent')}
            >
              <input
                type="radio"
                name="artist_type"
                id="independent"
                className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                checked={selectedArtistType === 'independent'}
                onChange={() => setSelectedArtistType('independent')}
              />
              <label htmlFor="independent">Independent artist</label>
            </div>

            <div
              className={`flex-1 flex items-center justify-center cursor-pointer p-4 ${selectedArtistType === 'label' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
              onClick={() => setSelectedArtistType('label')}
            >
              <input
                type="radio"
                name="artist_type"
                id="label"
                className="mr-2 h-5 w-5 appearance-none border-2 border-white rounded-full checked:bg-black checked:border-white focus:outline-none"
                checked={selectedArtistType === 'label'}
                onChange={() => setSelectedArtistType('label')}
              />
              <label htmlFor="label">Signed to a Label</label>
            </div>
          </div>
        </div>


        
        </div>
      )}

      {step === 2 && (
        <div>
          {/* Phase 2 Questions */}
          <div className="flex justify-center mb-6">
            <Image src="/images/cuate.png" alt="Illustration" height={300} width={300} />
          </div>
          <div className="mt-4">
            <p className="text-center mb-4">Have you distributed a song before?</p>
            <div className="flex flex-col mt-4">
              <div
                className={`flex items-center p-4 ${distributedSong === 'yes' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                onClick={() => setDistributedSong('yes')}
              >
                <input
                  type="radio"
                  name="distributed_song"
                  id="yes"
                  className="mr-2"
                  checked={distributedSong === 'yes'}
                  onChange={() => setDistributedSong('yes')}
                />
                <label htmlFor="yes">Yes, I have distributed a song before</label>
              </div>
              <div className="border-t border-white mt-2"></div>
              <div
                className={`flex items-center p-4 ${distributedSong === 'no' ? 'bg-white text-black' : 'bg-transparent text-white'}`}
                onClick={() => setDistributedSong('no')}
              >
                <input
                  type="radio"
                  name="distributed_song"
                  id="no"
                  className="mr-2"
                  checked={distributedSong === 'no'}
                  onChange={() => setDistributedSong('no')}
                />
                <label htmlFor="no">No, I have not distributed a song before</label>
              </div>
            </div>
          </div>
        </div>
      )}
    
      {step === 3 && (
        <div>
               <div className="flex justify-center mb-6">
            <Image src="/images/amico.svg" alt="Illustration" height={300} width={300} />
          </div>
          <div className="mt-4">
            <p className="text-center mb-4">Do you have previous works</p>
           
              </div>
              
              <select
              className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
              value={spotifyStatus}
              onChange={(e) => setSpotifyStatus(e.target.value)}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes, I am already on Spotify</option>
              <option value="no">No, I don&apos;t have a Spotify account</option>
            </select>

            {spotifyStatus === 'yes' && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Provide link to your Spotify handle"
                  className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
                  value={spotifyLink}
                  onChange={(e) => setSpotifyLink(e.target.value)}
                />
              </div>
            )}
              </div>
        
        
       
      )}
          {/* Phase 4 Placeholder */}
      {step === 4 && (
        <div>
       
       <div className="flex justify-center mb-6">
            <Image src="/images/amico.svg" alt="Illustration" height={300} width={300} />
          </div>
          <div className="mt-4">
            <p className="text-center">Do you have previous works</p>
              <p className="text-center mb-4"> on Youtube?</p>
              </div>
              
              <select
              className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
              value={YoutubeStatus}
              onChange={(e) => setYoutubeStatus(e.target.value)}
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes, I am already on Youtube</option>
              <option value="no">No, I don&apos;t have a Youtube Channel</option>
            </select>

            {YoutubeStatus === 'yes' && (
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Provide link to your Youtube Channel"
                  className="bg-transparent border border-white text-white w-full p-2 rounded-lg"
                  value={YoutubeLink}
                  onChange={(e) => setYoutubeLink(e.target.value)}
                />
              </div>
            )}
        </div>
      )}
              {/* Phase 5 Placeholder */}
      {step === 5 && (
        <div>
           {/* Illustration */}
           <div className="flex justify-center mb-6">
            <Image src="/images/social.svg" alt="Illustration" height={300} width={300} />
          </div>

          {/* Social Media Handles */}
          <div className="mt-4">
            <p className="text-center mb-2 font-bold text-xl">Social Media Presence</p>
           

            <div className="mt-4">
              <div className="relative mb-4 flex items-center">
                <FaInstagram className="absolute left-3 text-white" />
                <input
                  type="text"
                  placeholder="Instagram Handle"
                  className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
                  value={instagramLink}
                  onChange={(e) => setInstagramLink(e.target.value)}
                />
              </div>

              <div className="relative mb-4 flex items-center">
                <FaFacebook className="absolute left-3 text-white" />
                <input
                  type="text"
                  placeholder="Facebook Link"
                  className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
                  value={facebookLink}
                  onChange={(e) => setFacebookLink(e.target.value)}
                />
              </div>

              <div className="relative mb-4 flex items-center">
                <FaTwitter className="absolute left-3 text-white" />
                <input
                  type="text"
                  placeholder="Twitter Handle"
                  className="bg-transparent border border-white text-white w-full pl-10 p-2 rounded-lg"
                  value={twitterLink}
                  onChange={(e) => setTwitterLink(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
   
      )}

      {/* Button logic */}
      <button
        onClick={step === 5 ? submitForm : nextPhase}
        className="bg-white text-black w-full py-2 mt-6 rounded-lg font-semibold"
      >
        {step === 5 ? 'Submit' : 'Next'}
      </button>
    </div>
  );

  return (
    <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
      <Sidebar progress={progress} onLogout={handleLogout} />
      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
        <div className="border-t-2 border-white absolute top-14 w-[1092px]"></div>
        <ProfileForm />
      </main>
    </div>
  );
}
