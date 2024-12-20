// import React, { useState } from 'react'
// // import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
// import './App.css'
// // import Adminleyout from './pages/Leyouts/Adminleyout'
// import Userleyout from './pages/Leyouts/Userleyout'



// export default function App() {
 

//   return (
    
//       <Userleyout/>
//       // <Adminleyout/>

    
    
    
  
//   );
// }

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Adminleyout from './pages/Leyouts/Adminleyout';
import Userleyout from './pages/Leyouts/Userleyout'; 

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Admin Layout */}
        <Route path="/admin/*" element={<Adminleyout />} />
        
        {/* User Layout */}
        <Route path="/*" element={<Userleyout />} />
      </Routes>
    </BrowserRouter>
  );
}








