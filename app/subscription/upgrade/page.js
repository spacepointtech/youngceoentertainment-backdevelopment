'use client';
import '@/app/style.css';
import Image from 'next/image'; // Import Next.js Image component
import { useRouter } from 'next/navigation'; // Import useRouter hook for navigation

export default function UpgradePlan() {
  const router = useRouter(); // Initialize the useRouter hook

  // Function to handle Cancel button click
  const handleCancel = () => {
    router.push('/dashboard'); // Navigate to the dashboard
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-[#191919] text-white p-6 font-poppins">
      {/* Heading */}
      <div className="w-full max-w-4xl text-left mb-6">
        <h1 className="text-4xl font-semibold mb-1">Upgrade Your Plan</h1>
        <p className="text-gray-400">
          Get access to premium features by upgrading your current plan.
        </p>
      </div>

      {/* Grid Container for Plan Info and Features */}
      <div className="w-full max-w-4xl grid grid-cols-1 gap-6">
        {/* Plan Info Box */}
        <div
          className="p-6 rounded-lg border border-[#444]"
          style={{
            background: 'linear-gradient(180deg, #333333 55%, #0F0F0F 100%)',
          }}
        >
          <p className="text-lg font-medium mb-1">
            You are currently on the <span className="font-semibold">Artist Plan</span>.
          </p>
          <p className="text-white/70">To unlock all premium features, you need to pay</p>
          <p className="text-2xl font-semibold mt-4">₹1899/Year</p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444] text-center">
            <div className="flex justify-start mb-2">
              <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-white text-[#7A6802]">
                Premium ★
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2 ml-2 text-left">Social Media Royalties</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/bro.png"
                alt="Social Media Royalties"
                width={220}
                height={120}
                className="h-40"
              />
            </div>
            <p className="text-sm text-gray-400 text-justify">
              Keep track of your earnings from social platforms like Instagram, TikTok, and YouTube
              Shorts. Stay on top of your revenue with automatic updates.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444] text-center">
            <div className="flex justify-start mb-2">
              <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-white text-[#7A6802]">
                Premium ★
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Lyrics Timestamping & Syncing</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/control.png"
                alt="Lyrics Timestamping"
                width={200}
                height={100}
                className="h-32"
              />
            </div>
            <p className="text-sm text-gray-400 text-justify">
              Perfectly sync your lyrics with your tracks across all platforms, ensuring your
              audience can follow along in real time.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 rounded-lg bg-[#1E1E1E] border border-[#444444] text-center">
            <div className="flex justify-start mb-2">
              <span className="ml-2 px-2 py-1 text-xs rounded-full font-semibold bg-white text-[#7A6802]">
                Premium ★
              </span>
            </div>
            <h3 className="text-lg font-semibold mb-2">Advanced Dashboard</h3>
            <div className="flex justify-center mb-4">
              <Image
                src="/images/amico.png"
                alt="Advanced Dashboard"
                width={200}
                height={96}
                className="h-40"
              />
            </div>
            <p className="text-sm text-gray-400 text-justify">
              Access an upgraded dashboard with detailed insights into your music's performance,
              customized reports, and additional tools to manage your releases.
            </p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex items-center justify-between mt-8">
          <button
            onClick={handleCancel} // Trigger cancel navigation
            className="bg-gray-700 text-gray-300 py-2 px-[90px] rounded-md"
          >
            Cancel
          </button>
          <button className="bg-white text-black py-2 px-72 rounded-md">Pay Now</button>
        </div>

        <p className="mt-4 text-xs text-gray-500">
          By providing your card information, you allow us to charge your card for future payments
          in accordance with our terms.
        </p>
      </div>
    </div>
  );
}
