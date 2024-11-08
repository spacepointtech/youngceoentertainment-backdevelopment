'use client';
import Sidebar from '@/app/dashboard/components/Sidebar';
import Header from '@/app/dashboard/components/Header';

export default function AudiencePage() {
  const handleLogout = () => {
    console.log('Logged out');
  };

  return (
    <div className="flex w-full h-[1742px] bg-[#0F0F0F]">
      <Sidebar progress={20} onLogout={handleLogout} />
      <main className="flex-1 p-6 flex flex-col gap-6 text-white">
        <Header />
        <div className="border-t-2 border-white w-full mt-0"></div>
   


   
      </main>
    </div>
  );
}
