import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/Adminsidebar.css'
import logo from '../assets/images/LOGO.png'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { MdDashboardCustomize } from "react-icons/md";
import { LiaHotelSolid } from "react-icons/lia";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FaChartLine } from "react-icons/fa";

const Adminsidebar = () => {
  const [opensubmenu, setOpensubmenu] = useState([]);

  const openmenu = (menu) => {
    if (opensubmenu.includes(menu)) {
      setOpensubmenu(opensubmenu.filter(item => item !== menu));

    }
    else {
      setOpensubmenu([...opensubmenu, menu]);
    }

  };
  return (
    <>
      <div className='admin-sidebar-comp ' >
        <Link to='/admin-panel'>
          <div className="logo  py-3 px-4 ">
            <img src={logo} alt="Logo" className='w-[220px] h-[70px] ' />
          </div>
        </Link>
        <div className="admin-sidebar-taps flex ">

          <Link to='/admin-panel'> <Button className='sidebar-taps-btn w-100 '> <span className='mr-3  w-[25px] h-[20px] flex items-center justify-center rounded-md'><MdDashboardCustomize />
          </span>Dashboard</Button>
          </Link>


          <Button onClick={() => openmenu("Hotels")} className='sidebar-taps-btn w-100 '> <span className='mr-3  w-[25px] h-[20px] flex items-center justify-center rounded-md'><LiaHotelSolid />

          </span>Hotels</Button>
          {/* {create sub menu} */}
          {opensubmenu.includes("Hotels") && (
            <div className="submenu flex  ">
              <Link to="/all-hotels" className="submenu-item">Hotel List</Link>
              <Link to="/add-hotel" className="submenu-item">Add Hotel</Link>
              <Link to="/all-hotels" className="submenu-item">Manage Hotels</Link>
              <Link to="/hotels/reviews" className="submenu-item">Hotel Reviews</Link>
            </div>

          )}


          <Button onClick={() => openmenu("rooms")} className='sidebar-taps-btn w-100 '> <span className='mr-3  w-[25px] h-[20px] flex items-center justify-center rounded-md'><MdOutlineBedroomChild />

          </span>Rooms</Button>
          {/* {create sub menu} */}
          {opensubmenu.includes("rooms") && (
            <div className="submenu flex  ">
              <Link to="/all-rooms" className="submenu-item">Room List</Link>
              <Link to="/add-room" className="submenu-item">Add Room</Link>
              <Link to="/all-rooms" className="submenu-item">Booked Rooms</Link>
              <Link to="/rooms/reviews" className="submenu-item">Room Reviews</Link>
            </div>

          )}

          <Button onClick={() => openmenu("booking")} className='sidebar-taps-btn w-100 '> <span className='mr-3  w-[25px] h-[20px] flex items-center justify-center rounded-md'><FaChartLine />


          </span>Booking</Button>
          {/* {create sub menu} */}
          {opensubmenu.includes("booking") && (
            <div className="submenu flex  ">
              <Link to="/all-booking" className="submenu-item">booking List</Link>
              <Link to="/add-bookings" className="submenu-item">Add booking</Link>
              <Link to="/all-booking" className="submenu-item">Manage Booking</Link>
            </div>

          )}

          <Button onClick={() => openmenu("user")} className='sidebar-taps-btn w-100 '> <span className='mr-3  w-[25px] h-[20px] flex items-center justify-center rounded-md'><FaUsers />

          </span> All Users</Button>
          {opensubmenu.includes("user") && (
            <div className="submenu flex  ">
              <Link to="/all-users" className="submenu-item">All Users</Link>
              <Link to="/add-user" className="submenu-item">Add User</Link>
              <Link to="/all-users" className="submenu-item">Manage User</Link>
            </div>

          )}

          <Button className='sidebar-taps-btn w-100 '> <span className='mr-3  w-[25px] h-[20px] flex items-center justify-center rounded-md'><IoMdSettings />

          </span>Setting</Button>


        </div>




      </div>


    </>
  )
}

export default Adminsidebar