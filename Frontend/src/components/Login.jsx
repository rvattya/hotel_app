import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = ({onlogin}) => {
  const [logindata, setLogindata] = useState({
    email: "",
    password: ""
  });

  const userlogin = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post("http://localhost:1111/login", logindata);
      if(responce.data.token){
        localStorage.setItem("token", responce.data.token);
        onlogin();
        window.location.href = '/'; // Redirect to home page with full refresh

      }

    } catch (error) {
      console.error(error);
      alert("Invalid login credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Login</h2>
        <form onSubmit={userlogin} className="space-y-6">
          <div className="flex flex-col">
            <label htmlFor="phone" className="text-sm font-medium text-gray-600 mb-2">Email:</label>
            <input 
              type="email" 
              name="email" 
              id="email" 
              required 
              onChange={(e) => setLogindata({ ...logindata, [e.target.name]: e.target.value })} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="text-sm font-medium text-gray-600 mb-2">Password:</label>
            <input 
              type="password" 
              name="password" 
              id="password" 
              required 
              onChange={(e) => setLogindata({ ...logindata, [e.target.name]: e.target.value })} 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Don’t have an account? <a href="/sign-up" className="text-blue-500 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
