// // SignupPage Landing Page

// import React from 'react';
// import { FaGoogle } from 'react-icons/fa'; // Import FaGoogle icon
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SignupPage() {
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
//           <h2 className="login-title">Become The Young CEO!</h2>
//           <p className="login-subtitle">
//             Already Young CEO?{' '}
//             <Link href="/login" className="signup-link">Log In</Link>
//           </p>
//           <form>
//             <input type="email" placeholder="Email" className="login-input" required />
//             <input type="password" placeholder="Password" className="login-input" required />
//             <div className="policy-checkbox">
//               <input type="checkbox" id="agree-policy" className="policy-input" required />
//               <label htmlFor="agree-policy" className="policy-label">I agree with the policy of YCE</label>
//             </div>
//             <button type="submit" className="login-button">Become The Young CEO Now!!</button>
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


// 'use client';

// import React, { useState } from 'react';
// import { FaGoogle } from 'react-icons/fa';
// import Image from 'next/image';
// import Link from 'next/link';
// import { Toaster, toast } from 'sonner';

// export default function SignupPage() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: '',
//     agreePolicy: false
//   });

//   const validatePassword = (password) => {
//     const criteria = {
//       length: password.length >= 8,
//       capital: /[A-Z]/.test(password),
//       number: /[0-9]/.test(password),
//       special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
//     };

//     return {
//       isValid: Object.values(criteria).every(Boolean),
//       criteria
//     };
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.agreePolicy) {
//       toast.error('Please agree to the YCE policy to continue');
//       return;
//     }

//     const { isValid, criteria } = validatePassword(formData.password);

//     if (!isValid) {
//       let errorMessage = 'Password must contain:\n';
//       if (!criteria.length) errorMessage += '- At least 8 characters\n';
//       if (!criteria.capital) errorMessage += '- At least 1 capital letter\n';
//       if (!criteria.number) errorMessage += '- At least 1 number\n';
//       if (!criteria.special) errorMessage += '- At least 1 special character';

//       toast.error(errorMessage);
//       return;
//     }

//     // Add your signup logic here
//     toast.success('Account created successfully!');
//   };

//   return (
//     <div className="login-wrapper">
//       <Toaster richColors closeButton position="top-center" />
//       <div className="background-image"></div>
//       <div className="login-content">
//         <div className="logo-container">
//           <Link href="/">
//             <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
//           </Link>
//         </div>
//         <div className="login-form-container">
//           <h2 className="login-title">Become The Young CEO!</h2>
//           <p className="login-subtitle">
//             Already Young CEO?{' '}
//             <Link href="/login" className="signup-link">Log In</Link>
//           </p>
//           <form onSubmit={handleSubmit}>
//             <input 
//               type="email" 
//               name="email"
//               placeholder="Email" 
//               className="login-input" 
//               required 
//               value={formData.email}
//               onChange={handleInputChange}
//             />
//             <input 
//               type="password" 
//               name="password"
//               placeholder="Password" 
//               className="login-input" 
//               required 
//               value={formData.password}
//               onChange={handleInputChange}
//             />
//             <div className="policy-checkbox">
//               <input 
//                 type="checkbox" 
//                 id="agree-policy" 
//                 name="agreePolicy"
//                 className="policy-input" 
//                 required 
//                 checked={formData.agreePolicy}
//                 onChange={handleInputChange}
//               />
//               <label htmlFor="agree-policy" className="policy-label">
//                 I agree with the policy of YCE
//               </label>
//             </div>
//             <button type="submit" className="login-button">
//               Become The Young CEO Now!!
//             </button>
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
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Toaster, toast } from 'sonner';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    artistname:'',   
    email: '',
    password: '',
    agreePolicy: false
  });

  // Password validation function
  const validatePassword = (password) => {
    const criteria = {
      length: password.length >= 8,
      capital: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
      special: /[!@#$%^&*(),.?":{}|<>]/.test(password)
    };

    return {
      isValid: Object.values(criteria).every(Boolean),
      criteria
    };
  };

  // Input change handler
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user agreed to policy
    if (!formData.agreePolicy) {
      toast.error('Please agree to the YCE policy to continue');
      return;
    }

    // Validate password
    const { isValid, criteria } = validatePassword(formData.password);
    if (!isValid) {
      let errorMessage = 'Password must contain:\n';
      if (!criteria.length) errorMessage += '- At least 8 characters\n';
      if (!criteria.capital) errorMessage += '- At least 1 capital letter\n';
      if (!criteria.number) errorMessage += '- At least 1 number\n';
      if (!criteria.special) errorMessage += '- At least 1 special character';

      toast.error(errorMessage);
      return;
    }

    try {
      // Send signup request to backend
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password
        })
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message);
        // Redirect to subscription page
        window.location.href = '/subscription';
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="login-wrapper font-poppins">
      <Toaster richColors closeButton position="top-center" />
      <div className="background-image"></div>
      <div className="login-content font-poppins">
        <div className="logo-container">
          <Link href="/">
            <Image src="/images/logo.png" alt="YCE Logo" width={100} height={100} />
          </Link>
        </div>
        <div className="login-form-container">
          <h2 className="login-title">Become The Young CEO!</h2>
          <p className="login-subtitle">
            Already Young CEO?{' '}
            <Link href="/login" className="signup-link">Log In</Link>
          </p>
          <form onSubmit={handleSubmit}>
          <input 
              type="name" 
              name="artistname"
              placeholder="Artist Name" 
              className="login-input text-black font-poppins" 
              required 
              value={formData.artistname}
              onChange={handleInputChange}
            />
            <input 
              type="email" 
              name="email"
              placeholder="Enter Your Email" 
              className="login-input text-black font-poppins" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
            <input 
              type="password" 
              name="password"
              placeholder="Create New Password" 
              className="login-input text-black font-poppins" 
              required 
              value={formData.password}
              onChange={handleInputChange}
            />
            <div className="policy-checkbox">
              <input 
                type="checkbox" 
                id="agree-policy" 
                name="agreePolicy"
                className="policy-input" 
                required 
                checked={formData.agreePolicy}
                onChange={handleInputChange}
              />
              <label htmlFor="agree-policy" className="policy-label">
                I agree with the <Link href="/privacy-policy" className="text-blue-500">policy</Link>  of YCE
              </label>
            </div>
            <button type="submit" className="login-button">
              Become The Young CEO Now!!
            </button>
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

