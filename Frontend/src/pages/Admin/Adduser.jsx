import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {
  const [signupdata, setSignupdata] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "user", // Set default role to "user"
  });
  const [profile, setProfile] = useState(null); // Store the selected file

  const token = localStorage.getItem("token");

  const loginsubmit = async (e) => {
    e.preventDefault();

    // Create FormData object
    const formData = new FormData();
    formData.append("name", signupdata.name);
    formData.append("email", signupdata.email);
    formData.append("phone", signupdata.phone);
    formData.append("password", signupdata.password);
    formData.append("role", signupdata.role);
    if (profile) {
        formData.append("profileImage", profile); // Append the file
    }


    try {
      await axios.post("http://localhost:1111/sign-up", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data", // Set content type
        },
      });
      alert("User registration was successful");
    } catch (error) {
      console.error(error);
      alert("Error found, please try again later");
    }
  };

  const handleFileChange = (e) => {
    setProfile(e.target.files[0]); // Store the selected file
  };

  return (
    <>
      <div className="signup-box">
        <div className="flex justify-center items-center h-screen bg-gray-100 ">
          <div className="w-full max-w-md bg-white shadow-md rounded-lg m-3 p-3">
            <form onSubmit={loginsubmit} className="space-y-4">
              <div className="">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  onChange={(e) => setSignupdata({ ...signupdata, name: e.target.value })}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setSignupdata({ ...signupdata, email: e.target.value })}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Contact Number</label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  onChange={(e) => setSignupdata({ ...signupdata, phone: e.target.value })}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="">
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">Role</label>
                <input
                  type="text"
                  name="role"
                  id="role"
                  value={signupdata.role}
                  onChange={(e) => setSignupdata({ ...signupdata, role: e.target.value })}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setSignupdata({ ...signupdata, password: e.target.value })}
                  required
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="">
                <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700">Profile Image</label>
                <input
                  type="file"
                  name="profileImage"
                  id="profileImage"
                  onChange={handleFileChange} // Use handleFileChange
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="">
                <button
                  type="submit"
                  className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Add User
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddUser;
