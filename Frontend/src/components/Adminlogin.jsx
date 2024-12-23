import axios from 'axios';
import '../Css/Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Adminlogin = ({onLogin}) => {
    const [adminlogin, setAdminlogin] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    
        const login = async (e) => {
            e.preventDefault();
            try {
                const responce = await axios.post("http://localhost:1111/admin-login", adminlogin);
                console.log(responce);
                if(responce.data.token){
                  localStorage.setItem("token", responce.data.token);
                  onLogin();
                  navigate("/admin-panel");
                }
                else{
                  console.log("errer");
                  
                }
            } catch (error) {
                console.error(error);
                alert("Invalid login credentials");
    
            }
    
        }
    return (
        <>
           <div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
    <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
    <form onSubmit={login} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
        <input type="email"   name="email" id="email" required onChange={(e) => setAdminlogin({ ...adminlogin, [e.target.name]: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700"> Password:</label>
        <input type="password" name="password" id="password" required onChange={(e) => setAdminlogin({ ...adminlogin, [e.target.name]: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"/>
      </div>

      <div>
        <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"> Login </button>
      </div>
    </form>
  </div>
</div>
   </>
    )
}

export default Adminlogin


