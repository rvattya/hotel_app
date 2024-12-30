import React, { useEffect, useState } from 'react'
import {Navigate, Route, Routes } from 'react-router-dom'
import Login from '../../components/Login'
import Home from '../User/Home'
import Contact from '../User/Contact'
import About from '../User/About'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hotellist from '../User/Hotellist'
import Roomlist from '../User/Roomlist'
import Signup from '../../components/Signup'
import Page404 from '../User/Page404'
import Logout from '../User/Logout'
import Userprofile from '../User/Userprofile'
import Userdashboard from '../User/Userdashboard'
import Createbooking from '../User/Createbooking'
// import Singlebooking from '../User/Singlebooking'
import Hotelpage from '../User/Hotelpage'
import Roompage from '../User/Roompage'
import { faL } from '@fortawesome/free-solid-svg-icons'
import Payments from '../User/Payments'
import SupportPage from '../User/SupportPage'
import Mybooking from '../User/Mybooking'


const Userleyout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //syne isAuthenticated with local storage
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    //login
    const onlogin = () => {
        const token = localStorage.getItem("token");
        localStorage.setItem("token", token);
        setIsAuthenticated(true);
        console.log("user login Sucessfully");

    };

    //logout
    const onlogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        console.log("user logout succesfully");

    };
    const PrivateRoute = ({ children }) => {
        const token = localStorage.getItem("token");
        return token ? children : <Navigate to="/sign-up" />;

    };
    

    return (
        <>

            <Header onlogout={onlogout} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/hotels" element={<Hotellist />} />
                <Route path="/rooms" element={<Roomlist />} />
                <Route path="/login" element={<Login onlogin={onlogin} />} />
                <Route path="/sign-up" element={<Signup />} />

                {/* all routes are protected  */}
                 {/* Protected routes */}
                 <Route path="/logout" element={<PrivateRoute><Logout onlogout={onlogout} /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Userprofile /></PrivateRoute>} />
                <Route path="/user-dashboard" element={<PrivateRoute><Userdashboard /></PrivateRoute>} />
                <Route path="/booking" element={<PrivateRoute><Createbooking /></PrivateRoute>} />
                {/* <Route path="/booking/:id" element={<PrivateRoute><Singlebooking /></PrivateRoute>} /> */}
                <Route path="/payments" element={<PrivateRoute><Payments /></PrivateRoute>} />
                <Route path="/support" element={<PrivateRoute><SupportPage /></PrivateRoute>} />
                <Route path="/mybooking" element={<PrivateRoute><Mybooking/></PrivateRoute>} />
                <Route path="/hotels/:id" element={<Hotelpage />} />
                <Route path="/rooms/:id" element={<Roompage />} />
                <Route path="/*" element={<Page404 />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Userleyout;