import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onlogout }) => {
    const navigate = useNavigate();

    useEffect(() => {
        onlogout(); // Call the onlogout function to clear the token and update the state
        navigate("/login"); // Redirect to login page after logout
    }, [onlogout, navigate]);

    return (
        <div>Logging out...</div>
    );
};

export default Logout;
