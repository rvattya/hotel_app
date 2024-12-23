import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Adminprofile = () => {
  const [adminData, setAdminData] = useState(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const response = await axios.get('http://localhost:1111/admin-profile');

        if (response.ok) {
          const data = await response.json();
          setAdminData(data);
        } else {
          console.error('Failed to fetch admin data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };

    fetchAdminData();
  }, []);

  if (!adminData) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Admin Profile</h1>
      <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
        <p><strong>Name:</strong> {adminData.name}</p>
        <p><strong>Email:</strong> {adminData.email}</p>
        <p><strong>Role:</strong> {adminData.role}</p>
        {/* Add more fields as necessary */}
      </div>
    </div>
  );
};

export default Adminprofile;
