import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Css/Header.css';
import logo from '../assets/images/logoimg.png';
import axios from 'axios';

const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const fetchUserProfile = async () => {
            try {
                if (token) {
                    const response = await axios.get(`http://localhost:1111/profile`, {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setIsLoggedIn(true);
                    setUserName(response.data.name); // Assuming your user object has a 'name' property
                } else {
                    setIsLoggedIn(false);
                    setUserName('');
                }
            } catch (error) {
                console.error("Error fetching user profile:", error);
                setIsLoggedIn(false);
                setUserName('');
            }
        };
        fetchUserProfile();
    }, []);

    const handleLogout = async () => {
        try {
            await axios.get('http://localhost:1111/logout', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            localStorage.removeItem('token');
            setIsLoggedIn(false);
            setUserName('');
            window.location.href = '/login'; // Force full page reload and redirect to login
            // navigate('/login');
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest("#dropdownMenu")) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <>
            <div className="bg-blue-900 text-white">
                {/* Top Header Section */}
                <div className="flex justify-between items-center px-4 py-2 bg-red-800">
                    <div className="text-sm space-x-4">
                        <span>Mail: care@bookhotelroom.com</span>
                        <span>||</span>
                        <span>+91 93406 10359</span>
                    </div>
                    <div>
                        <button className='bg-red-800 text-white-500'>Add Your Property +</button>
                    </div>
                </div>

                {/* Main Header Section */}
                <div className="container mx-auto flex justify-between items-center py-4 px-1">
                    {/* Logo Section */}
                    <div>
                        <Link to="/"> <img src={logo} alt="Logo" className='h-[60px] w-[220px]' /></Link>
                    </div>

                    {/* Menu Section */}
                    <div className="flex space-x-11 font-serif text-xl">
                        <Link to="/" className="hover:text-yellow-400 text-white no-underline">Home</Link>
                        <Link to="/about" className="hover:text-yellow-400 text-white no-underline">About</Link>
                        <Link to="/hotels" className="hover:text-yellow-400 text-white no-underline">Hotels</Link>
                        <Link to="/rooms" className="hover:text-yellow-400 text-white no-underline">Rooms</Link>
                        <Link to="/contact" className="hover:text-yellow-400 text-white no-underline">Contact</Link>
                    </div>

                    {/* Login / Dashboard Section */}
                    <div>
                        {isLoggedIn ? (
                            <div className="relative">
                                {/* Dashboard Button */}
                                <button
                                    id="dropdownMenu"
                                    onClick={toggleDropdown}
                                    className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-xl"
                                >
                                    Hello {userName}
                                </button>

                                {/* Dropdown Menu */}
                                {dropdownOpen && (
                                    <div className=" absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg">
                                        <Link
                                            to="/profile"
                                            className=" no-underline block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Edit Profile
                                        </Link>
                                        <Link
                                            to="/mybooking"
                                            className=" no-underline block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            My Bookings
                                        </Link>
                                        <Link
                                            to="/payments"
                                            className="no-underline block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Payments
                                        </Link>
                                        <Link
                                            to="/profile"
                                            className=" no-underline block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Live Chat
                                        </Link>
                                        <Link
                                            to="/support"
                                            className=" no-underline block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                           Support
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className=" no-underline w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                                        >
                                            Logout
                                        </button>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 text-xl no-underline"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;

