// import React, { useState } from 'react';
// import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
// import Adminsidebar from '../../components/Adminsidebar';
// import Adminheader from '../../components/Adminheader';
// import Admindashboard from '../Admin/Admindashboard';
// import Addhotel from '../Admin/Addhotel';
// import Addroom from '../Admin/Addroom';
// import Allhotels from '../Admin/Allhotels';
// import Allrooms from '../Admin/Allrooms';
// import Signup from '../../components/Signup';
// import Adduser from '../Admin/Adduser';
// import Addbooking from '../Admin/Addbooking';
// import AllUser from '../Admin/Alluser';
// import Allbooking from '../Admin/Allbooking';
// import Adminlogin from '../../components/Adminlogin';

// const Adminleyout = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <BrowserRouter>
//       <div className="flex flex-1">
//         {isAuthenticated && (
//           <div className="admin-sidebar w-[18%] h-[100vh] bg-gray-100 overflow-auto">
//             <Adminsidebar />
//           </div>
//         )}
//         <div className={`flex-1 m-4 ${isAuthenticated ? 'w-[82%]' : 'w-[100%]'}`}>
//           {isAuthenticated && <Adminheader onLogout={handleLogout} />}
//           <Routes>
//             {/* Public Route */}
//             <Route
//               path="admin-login"
//               element={
//                 isAuthenticated ? (
//                   <Navigate to="/admin-panel" replace />
//                 ) : (
//                   <Adminlogin onLogin={handleLogin} />
//                 )
//               }
//             />
//             {/* Protected Routes */}
//             {isAuthenticated ? (
//               <>
//                 <Route path="admin-panel" element={<Admindashboard />} />
//                 <Route path="add-hotel" element={<Addhotel />} />
//                 <Route path="add-room" element={<Addroom />} />
//                 <Route path="add-user" element={<Adduser />} />
//                 <Route path="all-hotels" element={<Allhotels />} />
//                 <Route path="all-rooms" element={<Allrooms />} />
//                 <Route path="all-users" element={<AllUser />} />
//                 <Route path="add-bookings" element={<Addbooking />} />
//                 <Route path="all-booking" element={<Allbooking />} />
//                 <Route path="sign-up" element={<Signup />} />
//                 {/* Default Authenticated Route */}
//                 <Route path="/" element={<Navigate to="admin-panel" replace />} />
//               </>
//             ) : (
//               <Route path="*" element={<Navigate to="/admin-login" replace />} />
//             )}
//           </Routes>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default Adminleyout;

// import React from 'react';
// import { BrowserRouter, Route, Routes  } from 'react-router-dom';
// import Adminsidebar from '../../components/Adminsidebar';
// import Adminheader from '../../components/Adminheader';
// import Admindashboard from '../Admin/Admindashboard';
// import Addhotel from '../Admin/Addhotel';
// import Addroom from '../Admin/Addroom';
// import Allhotels from '../Admin/Allhotels';
// import Allrooms from '../Admin/Allrooms';
// import Signup from '../../components/Signup';
// import Adduser from '../Admin/Adduser';
// import Addbooking from '../Admin/Addbooking';
// import AllUser from '../Admin/Alluser';
// import Allbooking from '../Admin/Allbooking';
// import Adminlogin from '../../components/Adminlogin';

// const Adminleyout = () => {
 
//   return (
//     <BrowserRouter>
    
//     <div className="flex flex-1">
      
//         <div className="admin-sidebar w-[18%] h-[100vh] bg-gray-100 overflow-auto">
//           <Adminsidebar />
//         </div>
      
//       <div className={`flex-1 m-4  'w-[82%]' : 'w-[100%]'}`}>
//          <Adminheader  />
//         <Routes>
          
       
//               <Route path="admin-panel" element={<Admindashboard />} />
//               <Route path="add-hotel" element={<Addhotel />} />
//               <Route path="add-room" element={<Addroom />} />
//               <Route path="add-user" element={<Adduser />} />
//               <Route path="all-hotels" element={<Allhotels />} />
//               <Route path="all-rooms" element={<Allrooms />} />
//               <Route path="all-users" element={<AllUser />} />
//               <Route path="add-bookings" element={<Addbooking />} />
//               <Route path="all-booking" element={<Allbooking />} />
//               <Route path="sign-up" element={<Signup />} />
              
//         </Routes>
//       </div>
//     </div>
//     </BrowserRouter>
//   );
// };

// export default Adminleyout;

// import React, { useState } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import Adminsidebar from '../../components/Adminsidebar';
// import Adminheader from '../../components/Adminheader';
// import Admindashboard from '../Admin/Admindashboard';
// import Addhotel from '../Admin/Addhotel';
// import Addroom from '../Admin/Addroom';
// import Allhotels from '../Admin/Allhotels';
// import Allrooms from '../Admin/Allrooms';
// import Signup from '../../components/Signup';
// import Adduser from '../Admin/Adduser';
// import Addbooking from '../Admin/Addbooking';
// import AllUser from '../Admin/Alluser';
// import Allbooking from '../Admin/Allbooking';
// import Adminlogin from '../../components/Adminlogin';

// const Adminleyout = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   const handleLogout = () => {
//     setIsAuthenticated(false);
//   };

//   return (
//     <div className="flex flex-1">
//       {isAuthenticated && (
//         <div className="admin-sidebar w-[18%] h-[100vh] bg-gray-100 overflow-auto">
//           <Adminsidebar />
//         </div>
//       )}
//       <div className={`flex-1 m-4 ${isAuthenticated ? 'w-[82%]' : 'w-[100%]'}`}>
//         {isAuthenticated && <Adminheader onLogout={handleLogout} />}
//         <Routes>
//           {/* Admin Login Route */}
//           <Route
//             path="admin-login"
//             element={
//               isAuthenticated ? (
//                 <Navigate to="/admin/admin-panel" replace />
//               ) : (
//                 <Adminlogin onLogin={handleLogin} />
//               )
//             }
//           />
          
//           {/* Protected Routes */}
//           {isAuthenticated ? (
//             <>
//               <Route path="admin-panel" element={<Admindashboard />} />
//               <Route path="add-hotel" element={<Addhotel />} />
//               <Route path="add-room" element={<Addroom />} />
//               <Route path="add-user" element={<Adduser />} />
//               <Route path="all-hotels" element={<Allhotels />} />
//               <Route path="all-rooms" element={<Allrooms />} />
//               <Route path="all-users" element={<AllUser />} />
//               <Route path="add-bookings" element={<Addbooking />} />
//               <Route path="all-booking" element={<Allbooking />} />
//               <Route path="sign-up" element={<Signup />} />
//               {/* Redirect the default route to admin-panel */}
//               <Route path="/" element={<Navigate to="admin-panel" replace />} />
//             </>
//           ) : (
//             <Route path="*" element={<Navigate to="/admin/admin-login" replace />} />
//           )}
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Adminleyout;

import React, { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Adminsidebar from '../../components/Adminsidebar';
import Adminheader from '../../components/Adminheader';
import Admindashboard from '../Admin/Admindashboard';
import Addhotel from '../Admin/Addhotel';
import Addroom from '../Admin/Addroom';
import Allhotels from '../Admin/Allhotels';
import Allrooms from '../Admin/Allrooms';
import Signup from '../../components/Signup';
import Adduser from '../Admin/Adduser';
import Addbooking from '../Admin/Addbooking';
import AllUser from '../Admin/Alluser';
import Allbooking from '../Admin/Allbooking';
import Adminlogin from '../../components/Adminlogin';

const Adminlayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <div className="flex flex-1">
      {/* Sidebar only visible when authenticated */}
      {isAuthenticated && (
        <div className="admin-sidebar w-[18%] h-[100vh] bg-gray-100 overflow-auto">
          <Adminsidebar />
        </div>
      )}

      <div className={`flex-1 m-4 ${isAuthenticated ? 'w-[82%]' : 'w-[100%]'}`}>
        {/* Header only visible when authenticated */}
        {isAuthenticated && <Adminheader onLogout={handleLogout} />}

        <Routes>
          {/* Admin Login Route */}
          <Route
            path="admin-login"
            element={
              isAuthenticated ? (
                <Navigate to="/admin/admin-panel" replace />
              ) : (
                <Adminlogin onLogin={handleLogin} />
              )
            }
          />

          {/* Protected Routes */}
          {isAuthenticated ? (
            <>
              <Route path="admin-panel" element={<Admindashboard />} />
              <Route path="add-hotel" element={<Addhotel />} />
              <Route path="add-room" element={<Addroom />} />
              <Route path="add-user" element={<Adduser />} />
              <Route path="all-hotels" element={<Allhotels />} />
              <Route path="all-rooms" element={<Allrooms />} />
              <Route path="all-users" element={<AllUser />} />
              <Route path="add-bookings" element={<Addbooking />} />
              <Route path="all-booking" element={<Allbooking />} />
              <Route path="sign-up" element={<Signup />} />
              <Route path="/" element={<Navigate to="/admin/admin-panel" replace />} />
            </>
          ) : (
            // Redirect unauthenticated users to the login page
            <Route path="/" element={<Navigate to="/admin/admin-login" replace />} />
          )}
        </Routes>
      </div>
    </div>
  );
};

export default Adminlayout;