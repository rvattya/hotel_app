import React from 'react';
import Adminleyout from './pages/Leyouts/Adminleyout';
import Userleyout from './pages/Leyouts/Userleyout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Create an axios instance with credentials

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route for user-facing pages */}
        <Route path="/*" element={<Userleyout />} />
        {/* Route for admin-facing pages */}
        <Route path="/admin/*" element={<Adminleyout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;