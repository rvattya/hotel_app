import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Adminlogout = ({ onLogout }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLogout = async () => {
      try {
        // Send a POST request to the logout endpoint
        const response = await axios.post('http://localhost:1111/admin-logout', {}, { withCredentials: true });

        // Check if logout was successful (status code 200)
        if (response.status === 200) {
          console.log("logout Successfu");
          
          onLogout(); // Clear authentication state
          console.log("logout admin");
          
          navigate('/admin-login'); // Redirect to login page
        } else {
          console.error('Logout failed:', response.data.message || 'Unknown error');
        }
      } catch (error) {
        console.error('Error during logout:', error.message);
      }
    };

    fetchLogout();
  }, [navigate, onLogout]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Logging you out...</h2>
    </div>
  );
};

export default Adminlogout;
