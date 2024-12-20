import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AddUser = () => {
  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const navigate = useNavigate();

  const adminsubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:1111/signup", signupdata);
      alert("Admin registration was successful");
      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Error found, please try again later");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold text-center mb-6">Add User</h2>

          <form onSubmit={adminsubmit} className="flex flex-col space-y-4" >

            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700" >Name:</label>
              <input type="text" name="name" id="name" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) =>setSignupdata({ ...signupdata,[e.target.name]: e.target.value, }) } required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email"className="text-sm font-medium text-gray-700" > Email: </label>
              <input type="email" name="email"id="email" className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) =>setSignupdata({...signupdata,[e.target.name]: e.target.value, })}required />
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700">Contact Number:</label>
              <input type="tel" name="phone" id="phone"  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) =>setSignupdata({...signupdata,[e.target.name]: e.target.value,})}required/>
            </div>

            <div className="flex flex-col">
              <label htmlFor="password"className="text-sm font-medium text-gray-700">Password:</label>
              <input type="password"name="password"id="password"className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={(e) =>setSignupdata({...signupdata,[e.target.name]: e.target.value,})}required/>
            </div>

            <div className="flex justify-center">
              <button type="submit"className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600  transition duration-300">Add User</button>
            </div>
          </form>

        </div>
      </div>
    </>
  );
};

export default AddUser;
