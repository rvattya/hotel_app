import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FaBars } from "react-icons/fa"
import { FaUserAlt } from "react-icons/fa"
import { MdCircleNotifications } from "react-icons/md"
import { MdMessage } from "react-icons/md"

const Adminheader = () => {
  const [open, setOpen] = useState(null);

  const openProfile = (click) => {
    setOpen(open === click ? null : click);
  };

  return (
    <>
      {/* Header Section */}
      <div className="admin-header w-full h-[60px] bg-gray-800 text-white shadow-md">
        <div className="admin-header-section flex justify-between items-center px-4 h-full">
          {/* Left Section */}
          <div className="left-side flex items-center gap-6">
            {/* Sidebar Button */}
            <div className="sidebar-btn cursor-pointer hover:text-purple-400 transition duration-300">
              <FaBars size={24} />
            </div>

            {/* Search Bar */}
            <div className="search-bar relative">
              <input
                className="w-[250px] h-[35px] pl-4 pr-10 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                type="search"
                placeholder="Search here..."
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="right-side flex items-center gap-6">
            {/* Icons Section */}
            <div className="icon-section flex items-center gap-6">
              <span className="relative cursor-pointer hover:text-purple-400 transition duration-300">
                <MdCircleNotifications size={24} />
                {/* Notification Dot */}
                <span className="absolute top-[-4px] right-[-4px] w-2 h-2 bg-red-500 rounded-full"></span>
              </span>
              <span className="cursor-pointer hover:text-purple-400 transition duration-300">
                <MdMessage size={24} />
              </span>
            </div>

            {/* Profile Section */}
            <div className="profile-section relative">
              <button
                onClick={() => openProfile("profile")}
                className="flex items-center gap-2 cursor-pointer hover:text-purple-400 transition duration-300"
              >
                <FaUserAlt size={20} />
              </button>

              {/* Dropdown Menu */}
              {open === "profile" && (
                <div className="submenu absolute right-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md z-10">
                  <Link to="/admin-profile" className="submenu-item block px-4 py-2 hover:bg-gray-200">
                    Profile
                  </Link>
                  <Link to="/edit-profile" className="submenu-item block px-4 py-2 hover:bg-gray-200">
                    Edit Profile
                  </Link>
                  <hr className="border-gray-300" />
                  <Link to="/settings" className="submenu-item block px-4 py-2 hover:bg-gray-200" >
                    Settings
                  </Link>
                  <Link to="/admin-logout" onClick={() => {localStorage.removeItem("token");setOpen(null);}} className="submenu-item block px-4 py-2 text-red-500 hover:bg-gray-200" >
                    Log Out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Adminheader;

