import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../../components/Login'
import Home from '../User/Home'
import Contact from '../User/Contact'
import About from '../User/About'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Hotellist from '../User/Hotellist'
import Roomlist from '../User/Roomlist'
import Signup from '../../components/Signup'
import Adminlogin from '../../components/Adminlogin'


const Userleyout = () => {
    return (
        <>


            <Header />
            

                <Routes>
                    <Route path="admin-login" element={<Adminlogin />} />

                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/hotels" element={<Hotellist />} />
                    <Route path="/rooms" element={<Roomlist />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />

                </Routes>
            
            <Footer />


        </>
    )
}

export default Userleyout
