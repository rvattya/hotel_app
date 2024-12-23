import React from 'react'
import {Link} from 'react-router-dom'
import '../Css/Header.css'
import logo from '../assets/images/logoimg.png'

const Header = () => {
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
                    <div className="">
                        <Link to="/"> <img src={logo} alt="" className=' h-[60px] w-[220px]' /></Link>
                    </div>

                    {/* Menu Section */}
                    <div className=" flex space-x-11 font-serif text-xl  ">
                        <Link to="/" className="hover:text-yellow-400 text-white no-underline ">Home</Link>
                        <Link to="/about" className="hover:text-yellow-400 text-white no-underline ">About</Link>
                        <Link to="/hotels" className="hover:text-yellow-400 text-white no-underline ">Hotels</Link>
                        <Link to="/rooms" className="hover:text-yellow-400 text-white no-underline">Rooms</Link>
                        <Link to="/contact" className="hover:text-yellow-400 text-white no-underline">Contact</Link>
                    </div>
                    {/* Login Section */}
                    <div>
                        <Link to="/login" className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg hover:bg-yellow-500 text-xl no-underline"> Login </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
