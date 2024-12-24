import React, { useEffect, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Admindashboard from '../Admin/Admindashboard';
import Adminsidebar from '../../components/Adminsidebar';
import Adminheader from '../../components/Adminheader';
import Addhotel from '../Admin/Addhotel';
import Addroom from '../Admin/Addroom';
import Allhotels from '../Admin/Allhotels';
import Allrooms from '../Admin/Allrooms';
import Adduser from '../Admin/Adduser';
import Addbooking from '../Admin/Addbooking';
import AllUser from '../Admin/Alluser';
import Allbooking from '../Admin/Allbooking';
import Adminlogin from '../../components/Adminlogin';
import Adminlogout from '../../components/Adminlogout';
import Adminprofile from '../../components/Adminprofile';


const Adminleyout = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Sync isAuthenticated with local storage on component mount
    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsAuthenticated(true);
        }
    }, []);

    // Handle login
    const handleLogin = () => {
        const token = localStorage.getItem("token");

        localStorage.setItem("token",token); // Simulating a token
        setIsAuthenticated(true);
        console.log("Admin access granted successfully");
    };

    // Handle logout
    const handleLogout = () => {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
        console.log("Admin logged out");
    };

    const PrivateRoutes = ({ children }) => {
        const token = localStorage.getItem("token");
        return token ? children : <Navigate to="/admin-login" />;
    };

    return (
        <BrowserRouter>
            <Layout
                isAuthenticated={isAuthenticated}
                onLogout={handleLogout}
                onLogin={handleLogin}
                PrivateRoutes={PrivateRoutes}
            />
            
        </BrowserRouter>
    );
};

const Layout = ({ isAuthenticated, onLogout, onLogin, PrivateRoutes }) => {
    const location = useLocation(); // Now inside the BrowserRouter context

    return (
        <div className="flex">
            {/* Render Admin Sidebar if authenticated */}
            {isAuthenticated && (
                <div className="admin-sidebar w-[18%] h-[100vh] bg-gray-100 overflow-auto">
                    <Adminsidebar />
                </div>
            )}
            <div className="flex-1 w-[80%]">
                {/* Render Admin Header if authenticated and not on login page */}
                {isAuthenticated && location.pathname !== '/admin-login' && (
                    <Adminheader onLogout={onLogout} />
                )}
                <Routes>
                    <Route path="/admin-login" element={<Adminlogin onLogin={onLogin} />} />
                    <Route path="/admin-logout" element={<Adminlogout onLogout={onLogout} />} />
                    {/* Protected Routes for Admin */}
                    <Route path="/admin-panel" element={<PrivateRoutes><Admindashboard /></PrivateRoutes>} />
                    
                    <Route path="/add-hotel" element={<PrivateRoutes><Addhotel /></PrivateRoutes>} />
                    <Route path="/add-room" element={<PrivateRoutes><Addroom /></PrivateRoutes>} />
                    <Route path="/add-user" element={<PrivateRoutes><Adduser /></PrivateRoutes>} />
                    <Route path="/all-hotels" element={<PrivateRoutes><Allhotels /></PrivateRoutes>} />
                    <Route path="/all-rooms" element={<PrivateRoutes><Allrooms /></PrivateRoutes>} />
                    <Route path="/all-users" element={<PrivateRoutes><AllUser /></PrivateRoutes>} />
                    <Route path="/add-bookings" element={<PrivateRoutes><Addbooking /></PrivateRoutes>} />
                    <Route path="/all-booking" element={<PrivateRoutes><Allbooking /></PrivateRoutes>} />
                    <Route path="/admin-profile" element={<PrivateRoutes><Adminprofile /></PrivateRoutes>} />
                </Routes>
            </div>
        </div>
    );
};

export default Adminleyout;
