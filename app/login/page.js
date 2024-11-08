// 'use client';
// import '@/app/globals.css'
// import React from 'react';
// import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
// import Image from 'next/image';
// import Link from 'next/link';

// export default function LoginPage() {
//   return (
//     <div className="login-wrapper">
//       <div className="background-image"></div>
//       <div className="login-content">
//         <div className="logo-container">
//           <Link href="/">
//             <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//           </Link>
//         </div>
//         <div className="login-form-container">
//           <h2 className="login-title">Welcome to YCE HUB</h2>
//           <p className="login-subtitle">
//             Want to Become Young CEO?{' '}
//             <Link href="/signup" className="signup-link">Become Now?</Link>
//           </p>
//           <form>
//             <input type="email" placeholder="Email" className="login-input" required />
//             <input type="password" placeholder="Password" className="login-input" required />
//             <div className="login-actions">
//               <Link href="/reset" className="forgot-password-link">Forget Password?</Link>
//             </div>
//             <button type="submit" className="login-button">Get into your YCE HUB</button>
//             <button type="button" className="google-login-button">
//               <FaGoogle className="google-icon" />
//               Continue With Google
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

'use client';
import '@/app/globals.css';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Toaster, toast } from 'sonner';  // Import toast for notifications
import { useRouter } from 'next/navigation';
import '@/app/style.css'

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const router = useRouter();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        toast.success('Login successful!');
        router.push('/dashboard'); // Redirect to dashboard
      } else {
        const errorData = await response.json();
        toast.error(errorData.message); // Display error message from server
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An unexpected error occurred. Please try again.');
    }
  };

  return (
    <div className="login-wrapper">
      <Toaster richColors closeButton position="top-center" />
      <div className="background-image"></div>
      <div className="login-content">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Welcome to YCE HUB</h2>
          <p className="login-subtitle">
            Want to Become Young CEO?{' '}
            <Link href="/signup" className="signup-link">Become Now?</Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="login-input text-black font-poppins"
              required
              value={formData.email}
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="login-input text-black font-poppins"
              required
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="login-actions">
              <Link href="/reset" className="forgot-password-link">Forget Password?</Link>
            </div>
            <button type="submit" className="login-button">Get into your YCE HUB</button>
            <button type="button" className="google-login-button">
              <FaGoogle className="google-icon" />
              Continue With Google
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
