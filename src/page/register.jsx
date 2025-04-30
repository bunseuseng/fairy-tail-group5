import React, { useState, useCallback, useRef, useEffect } from "react";
import axios from "axios";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  const API_URL = "http://62.72.46.248:1337/api/auth/local/register";

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setErrorMsg("");
      setSuccessMsg("");

      // Form validation
      if (!username.trim()) {
        setErrorMsg("Username is required.");
        return;
      }

      if (!validateEmail(email)) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }

      if (password.length < 6) {
        setErrorMsg("Password must be at least 6 characters long.");
        return;
      }

      if (!agreed) {
        setErrorMsg("You must agree to the terms.");
        return;
      }

      setLoading(true);

      try {
        const response = await axios.post(API_URL, {
          username,
          email,
          password,
        });

        // If registration is successful
        setSuccessMsg("Registration successful! Please check your email.");
        setUsername("");
        setEmail("");
        setPassword("");
        setAgreed(false);
        setSubscribed(false);

        console.log("Registered User:", response.data.user);
      } catch (error) {
        // Handling API error
        const errorMessage =
          error.response?.data?.error?.message || error.message || "Registration failed";
        console.error("Registration error:", error);
        setErrorMsg(errorMessage);
      } finally {
        setLoading(false);
      }
    },
    [username, email, password, agreed]
  );

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold">Create Account</h1>
        <p className="text-sm mt-2 text-gray-600">7 days free, cancel anytime</p>

        <form onSubmit={handleSubmit} className="mt-6 text-left space-y-4">
          {errorMsg && <div className="text-red-600 text-sm">{errorMsg}</div>}
          {successMsg && <div className="text-green-600 text-sm">{successMsg}</div>}

          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your username"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              ref={emailRef}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              id="subscribe"
              type="checkbox"
              checked={subscribed}
              onChange={() => setSubscribed(!subscribed)}
              className="mt-1"
            />
            <label htmlFor="subscribe" className="text-sm text-gray-700">
              I’d like to receive updates from Mystic Melody
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              id="agree"
              type="checkbox"
              checked={agreed}
              onChange={() => setAgreed(!agreed)}
              required
              className="mt-1"
            />
            <label htmlFor="agree" className="text-sm text-gray-700">
              By clicking continue, you agree to our{" "}
              <a href="#" className="text-purple-600 underline">Terms of Service</a> and{" "}
              <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
            </label>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-purple-700 text-white py-3 rounded-md font-semibold hover:bg-purple-800 transition disabled:opacity-50 flex justify-center items-center"
          >
            {loading ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16 8 8 0 01-8-8z"
                ></path>
              </svg>
            ) : null}
            {loading ? "Registering..." : "Agree & Continue"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;


// import React, { useState } from 'react';
// import backgroundImageS from "../assets/images/register-bg.png";

// function RegisterPage() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [agreed, setAgreed] = useState(false);
//   const [subscribed, setSubscribed] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState('');
//   const [errorMsg, setErrorMsg] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg('');
//     setSuccessMsg('');

//     if (!agreed) {
//       setErrorMsg("You need to agree to the terms.");
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await fetch("http://62.72.46.248:1337/api/auth/local/register", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           username: email,
//           email,
//           password,
//         }),
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error?.message || "Registration failed");
//       }

//       setSuccessMsg("Registration successful!");
//       console.log("User profile:", data.user);
//       console.log("JWT token:", data.jwt);
//       // You can store the JWT token in localStorage or context for authenticated requests
//     } catch (err) {
//       console.error("Registration error:", err);
//       setErrorMsg(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="flex items-center justify-center min-h-screen bg-gray-100 p-4"
//       style={{
//         backgroundImage: `url(${backgroundImageS})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         backgroundRepeat: 'no-repeat',
//       }}
//     >
//       <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
//         <h1 className="text-3xl font-bold">Create Account</h1>
//         <p className="text-sm mt-2 text-gray-600">7 days free, cancel at any time!</p>

//         <form onSubmit={handleSubmit} className="mt-6 text-left">
//           {errorMsg && (
//             <div className="mb-4 text-red-600 text-sm">{errorMsg}</div>
//           )}
//           {successMsg && (
//             <div className="mb-4 text-green-600 text-sm">{successMsg}</div>
//           )}

//           <div className="mb-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//               Email address
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="mb-4">
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>
//             <input
//               id="password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//               placeholder="Enter your password"
//             />
//           </div>

//           <div className="mb-3 flex items-start gap-2">
//             <input
//               id="subscribe"
//               type="checkbox"
//               checked={subscribed}
//               onChange={() => setSubscribed(!subscribed)}
//               className="mt-1"
//             />
//             <label htmlFor="subscribe" className="text-sm text-gray-700">
//               I’d like to receive updates from Mystic Melody
//             </label>
//           </div>

//           <div className="mb-5 flex items-start gap-2">
//             <input
//               id="agree"
//               type="checkbox"
//               checked={agreed}
//               onChange={() => setAgreed(!agreed)}
//               required
//               className="mt-1"
//             />
//             <label htmlFor="agree" className="text-sm text-gray-700">
//               By clicking continue you agree to the{' '}
//               <a href="#" className="text-purple-600 underline">Terms of Service</a> and{' '}
//               <a href="#" className="text-purple-600 underline">Privacy Policy</a>.
//             </label>
//           </div>

//           <button
//             type="submit"
//             disabled={loading}
//             className="w-full bg-purple-700 text-white py-3 rounded-md font-semibold hover:bg-purple-800 transition disabled:opacity-50"
//           >
//             {loading ? 'Registering...' : 'Agree & Continue'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;