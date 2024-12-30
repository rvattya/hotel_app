// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';


// const Signup = () => {
//   const [signupdata, setSignupdata] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     role: "user",

//   });
//   const [profile, setProfile] = useState();
//   const naviget = useNavigate();

//   const handleChange =  (e) => {
//     const { name, value } = e.target;
//     setSignupdata((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));

//   };

//   //file
//   const handleFile=(e)=>{
//     setProfile(e.target.files[0]);
//   };

//   const loginsubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("name", signupdata.name);
//     formData.append("email", signupdata.email);
//     formData.append("phone", signupdata.phone);
//     formData.append("password", signupdata.password);
//     formData.append("role", signupdata.role);
//     if (profile) {
//       formData.append("profileImage", profile); // Append the file
//     }

//     try {
//       await axios.post("http://localhost:1111/sign-up", formData);
//       alert("User registration was successful");
//       naviget("/");
//     } catch (error) {
//       console.error(error);
//       alert("Error found, please try again later");
//     }
//   };

//   return (
//     <>
//       <div className="signup-box">


//         <div className="flex justify-center items-center h-screen bg-gray-100 ">
//           <div className="w-full max-w-md bg-white shadow-md rounded-lg m-3 p-3">
//             <form onSubmit={loginsubmit} className="space-y-4">
//               <div className="">
//                 <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   id="name"
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div className="">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
//                 <input
//                   type="email"
//                   name="email"
//                   id="email"
//                   required onChange={handleChange}
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div className="">
//                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   id="phone"
//                   onChange={handleChange}
//                   required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div className="">
//                 <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
//                 <input
//                   type="text"
//                   name="role"
//                   id="role"
//                   value={signupdata.role || "user"}
//                   onChange={handleChange} required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div className="">
//                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
//                 <input
//                   type="password"
//                   name="password"
//                   id="password"
//                   onChange={handleChange} required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div className="">
//                 <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Profile Image</label>
//                 <input
//                   type="file"
//                   name="profileImage"
//                   id="profileImage"
//                   onChange={handleFile} required
//                   className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//                 />
//               </div>

//               <div className="">
//                 <button
//                   type="submit"
//                   className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                   Sign-Up
//                 </button>
//               </div>
//             </form>

//             <div className="mt-4 text-center">
//               <p className="text-sm text-gray-600">Have an account? <Link to="/login" className="text-indigo-500 hover:underline">Login</Link></p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signup;
import React, { useState } from "react";
 import axios from "axios";
 import { useNavigate } from "react-router-dom";
 
 const Signup = () => {
   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");
   const [password, setPassword] = useState("");
   const [profileImage, setProfileImage] = useState(null);
   const [error, setError] = useState("");
   const navigate = useNavigate();
 
   const handleSubmit = async (e) => {
     e.preventDefault();
     const formData = new FormData();
     formData.append("name", name);
     formData.append("email", email);
     formData.append("phone", phone);
     formData.append("password", password);
     formData.append("profileImage", profileImage);
 
     try {
       const response = await axios.post(
         "http://localhost:1111/sign-up",
         formData,
         {
           headers: {
             "Content-Type": "multipart/form-data",
           },
         }
       );
       // Store the token in local storage
       localStorage.setItem("token", response.data.token);
       navigate("/");
     } catch (error) {
       setError(error.response?.data?.message || "Signup failed");
     }
   };
 
   const handleFileChange = (e) => {
     setProfileImage(e.target.files[0]);
   };
 
   return (
     <div className="flex justify-center items-center h-screen bg-gray-100">
       <div className="bg-white p-8 rounded shadow-md w-96">
         <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
         {error && <p className="text-red-500 mb-4">{error}</p>}
         <form onSubmit={handleSubmit}>
           <div className="mb-4">
             <label
               htmlFor="name"
               className="block text-gray-700 text-sm font-bold mb-2"
             >
               Name
             </label>
             <input
               type="text"
               id="name"
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               value={name}
               onChange={(e) => setName(e.target.value)}
               required
             />
           </div>
           <div className="mb-4">
             <label
               htmlFor="email"
               className="block text-gray-700 text-sm font-bold mb-2"
             >
               Email
             </label>
             <input
               type="email"
               id="email"
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               required
             />
           </div>
           <div className="mb-4">
             <label
               htmlFor="phone"
               className="block text-gray-700 text-sm font-bold mb-2"
             >
               Phone
             </label>
             <input
               type="tel"
               id="phone"
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               value={phone}
               onChange={(e) => setPhone(e.target.value)}
               required
             />
           </div>
           <div className="mb-4">
             <label
               htmlFor="password"
               className="block text-gray-700 text-sm font-bold mb-2"
             >
               Password
             </label>
             <input
               type="password"
               id="password"
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               required
             />
           </div>
           <div className="mb-4">
             <label
               htmlFor="profileImage"
               className="block text-gray-700 text-sm font-bold mb-2"
             >
               Profile Image
             </label>
             <input
               type="file"
               id="profileImage"
               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               onChange={handleFileChange}
             />
           </div>
           <div className="flex items-center justify-between">
             <button
               type="submit"
               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
             >
               Sign Up
             </button>
           </div>
         </form>
       </div>
     </div>
   );
 };
 
 export default Signup;