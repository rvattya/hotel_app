// import axios from 'axios';
// import React, {  useState } from 'react'

// const Addroom = () => {
//   // const [hoteldata, setHoteldata]= useState([]);
//   const [roomdata, setRoomdata]= useState({
//     hotelname: "",
//         roomname: "",
//         roomrate: "",
//         capacity: "",
//         filenames:null,
//         aboutroom: "",
//   });

//   // useEffect(()=>{
//   //   // fatch hotel data ad dropdown
//   //   const fatchhotel= async ()=>{
//   //     try {
//   //       const response= await axios.get('http://localhost:1111/hotels');
//   //       setHoteldata(response.data);


//   //     } catch (error) {
//   //       console.error("Error fetching hotels", error);

        
//   //     }
//   //   }
//   //   fatchhotel();
    
//   // },[]);

//   //handlehotel section to add hotels 
//   // const handlehotelchange= (e)=>{
//   //   cosnt 
//   // }
//   const Addroomdata= async()=>{
//     try {
//       await axios.post("http://localhost:1111//add-room", roomdata);
//       alert("room add successfully");
      
//     } catch (error) {
//       console.error(error);
//       alert("Error found, please try again later");
//     }
//   }

//   return (
//    <>
//     <div className="bg-blue-100 flex items-center justify-center min-h-screen">
//       <div className="container mx-auto px-4">
//         <form className="bg-gray-200 shadow-lg rounded-lg p-6 max-w-3xl mx-auto" onSubmit={Addroomdata}>
//           {/* Form Header */}
//           <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
//             Add Room Details
//           </h2>

//           {/* Hotel Name */}
//           <div className="form-group mb-4">
//             <label className="font-semibold text-gray-600">Room  Name</label>
//             <input type="text" className="form-control" placeholder="Enter Room Name"  />
//           </div>
//           <div className="form-group mb-4">
//             <label className="font-semibold text-gray-600">Hotel Name</label>
//             <input type="text" className="form-control" placeholder="Enter Hotel Name"   />
//           </div>

//           {/* Address and City */}
//           <div className="row mb-4">
//             <div className="col-md-6">
//               <label className="font-semibold text-gray-600">Address</label>
//               <input type="text" className="form-control" placeholder="Enter Address"  />
//             </div>
//             <div className="col-md-6">
//               <label className="font-semibold text-gray-600">City Name</label>
//               <input type="text" className="form-control" placeholder="Enter City Name"  />
//             </div>
//           </div>

//           {/* State and Pin Code */}
//           <div className="row mb-4">
//             <div className="col-md-6">
//               <label className="font-semibold text-gray-600">State Name</label>
//               <input type="text" className="form-control" placeholder="Enter State Name"  />
//             </div>
//             <div className="col-md-6">
//               <label className="font-semibold text-gray-600">Pin Code</label>
//               <input type="text" className="form-control" placeholder="Enter Pin Code"   />
//             </div>
//           </div>

//           {/* Contact and Total Rooms */}
//           <div className="row mb-4">
//             <div className="col-md-6">
//               <label className="font-semibold text-gray-600">Contact Number</label>
//               <input type="text" className="form-control" placeholder="Enter Contact Number"   />
//             </div>
//             <div className="col-md-6">
//               <label className="font-semibold text-gray-600"> Room Capecity</label>
//               <input type="number" className="form-control" placeholder=" 02"  />
//             </div>
//           </div>

//           {/* Facilities */}
//           <div className="mb-4">
//             <label className="font-semibold text-gray-600 block mb-2">Facilities</label>
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
//               {[
//                 "Free Wi-Fi & AC ",
//                 "Furniture",
//                 "Entertainment",
//                 "Food & Drink",
//                 "Safety & Security",
//                 "Exclusive Add-ons",
//               ].map((facility, index) => (
//                 <div key={index}>
//                   <input type="checkbox" id={`facility-${index}`} className="mr-2"   />
//                   <label htmlFor={`facility-${index}`}>{facility}</label>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Hotel Images */}
//           <div className="mb-4">
//             <label className="font-semibold text-gray-600 block mb-2">Upload Hotel Images</label>
//             <div className="row">
//               {[1, 2, 3].map((index) => (
//                 <div className="col-md-4 mb-2" key={index}>
//                   <input type="file" className="form-control-file"  />
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* About Hotel */}
//           <div className="form-group mb-4">
//             <label className="font-semibold text-gray-600">About Hotel</label>
//             <textarea
//               className="form-control"
//               rows="4"
//               placeholder="Write about the hotel"  
//             ></textarea>
//           </div>

//           {/* Submit Button */}
//           <div className="text-center">
//             <button
//               type="submit"
//               className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
//             >
//               Submit Room
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
      
//    </>
//   )
// }

// export default Addroom

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const AddRoom = () => {
//   const [hotelList, setHotelList] = useState([]); // Store the list of hotels
//   const [roomData, setRoomData] = useState({
//     hotelname: "",
//     roomname: "",
//     roomrate: "",
//     capacity: "",
//     filenames: "",
//     aboutroom: "",
//   });

//   useEffect(() => {
//     // Fetch all hotels for the dropdown
//     const fetchHotels = async () => {
//       try {
//         const response = await axios.get('http://localhost:1111/hotels');
//         setHotelList(response.data);
//       } catch (error) {
//         console.error("Error fetching hotels", error);
//       }
//     };
//     fetchHotels();
//   }, []);

//   // Handle hotel selection
//   const handleHotelChange = (e) => {
//     const selectedHotelId = e.target.value;
//     const selectedHotel = hotelList.find(hotel => hotel._id === selectedHotelId);

//     setRoomData({
//       ...roomData,
//       hotelname: selectedHotelId,
//       aboutroom: selectedHotel ? selectedHotel.abouthotel : "",
//     });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append('hotelname', roomData.hotelname);
//     formData.append('roomname', roomData.roomname);
//     formData.append('roomrate', roomData.roomrate);
//     formData.append('capacity', roomData.capacity);
//     formData.append('aboutroom', roomData.aboutroom);

//     if (roomData.filenames) {
//       Array.from(roomData.filenames).forEach(file => {
//         formData.append('filenames', file);
//       });
//     }

//     try {
//       const response = await axios.post('http://localhost:1111/add-room', roomData);
//       setRoomData(response.data);
//       alert('Room added successfully');
//     } catch (error) {
//       console.error('Error adding room:', error);
//       alert('Error adding room');
//     }
//   };

//   return (
//     <div className="container">
//       <h2>Add Room</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Select Hotel</label>
//           <select value={roomData.hotelname} onChange={handleHotelChange}>
//             <option value="">Select a hotel</option>
//             {hotelList.map(hotel => (
//               <option key={hotel._id} value={hotel._id}>
//                 {hotel.hotalname}
//               </option>
//             ))}
//           </select>
//         </div>

//         <div>
//           <label>Room Name</label>
//           <input
//             type="text"
//             value={roomData.roomname}
//             onChange={(e) => setRoomData({ ...roomData, roomname: e.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <label>Room Rate</label>
//           <input
//             type="number"
//             value={roomData.roomrate}
//             onChange={(e) => setRoomData({ ...roomData, roomrate: e.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <label>Room Capacity</label>
//           <input
//             type="number"
//             value={roomData.capacity}
//             onChange={(e) => setRoomData({ ...roomData, capacity: e.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <label>About Room</label>
//           <textarea
//             value={roomData.aboutroom}
//             onChange={(e) => setRoomData({ ...roomData, aboutroom: e.target.value })}
//             required
//           />
//         </div>

//         <div>
//           <label>Upload Room Images</label>
//           <input
//             type="file"
//             multiple
//             onChange={(e) => setRoomData({ ...roomData, filenames: e.target.files })}
//           />
//         </div>

//         <button type="submit">Add Room</button>
//       </form>
//     </div>
//   );
// };

// export default AddRoom;
import axios from 'axios';
import React, { useState } from 'react';

const Addroom = () => {
  const [roomData, setRoomData] = useState({
    hotelname: "",
    roomname: "",
    roomrate: "",
    capacity: "",
    filenames: null, // Updated for file uploads
    aboutroom: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomData({ ...roomData, [name]: value });
  };

  // Handle file uploads
  const handleFileChange = (e) => {
    setRoomData({ ...roomData, filenames: e.target.files });
  };

  // Submit form data
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate required fields
    if (!roomData.hotelname || !roomData.roomname || !roomData.roomrate || !roomData.capacity) {
      alert("Please fill in all required fields.");
      return;
    }

    // Prepare FormData for submission
    const formData = new FormData();
    formData.append('hotelname', roomData.hotelname);
    formData.append('roomname', roomData.roomname);
    formData.append('roomrate', roomData.roomrate);
    formData.append('capacity', roomData.capacity);
    formData.append('aboutroom', roomData.aboutroom);

    if (roomData.filenames) {
      Array.from(roomData.filenames).forEach((file) => {
        formData.append('filenames', file);
      });
    }

    try {
      await axios.post("http://localhost:1111/add-room", formData);
      alert("Room added successfully!");
      // Clear form after submission
      setRoomData({
        hotelname: "",
        roomname: "",
        roomrate: "",
        capacity: "",
        filenames: null,
        aboutroom: "",
      });
    } catch (error) {
      console.error("Error adding room:", error);
      alert("Error adding room. Please try again later.");
    }
  };

  return (
    <div className="bg-blue-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <form
          className="bg-gray-200 shadow-lg rounded-lg p-6 max-w-3xl mx-auto"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Add Room Details
          </h2>

          {/* Hotel Name */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Hotel Name</label>
            <input
              type="text"
              name="hotelname"
              value={roomData.hotelname}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Hotel Name"
              required
            />
          </div>

          {/* Room Name */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Room Name</label>
            <input
              type="text"
              name="roomname"
              value={roomData.roomname}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Room Name"
              required
            />
          </div>

          {/* Room Rate */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Room Rate</label>
            <input
              type="number"
              name="roomrate"
              value={roomData.roomrate}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Room Rate"
              required
            />
          </div>

          {/* Room Capacity */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Room Capacity</label>
            <input
              type="number"
              name="capacity"
              value={roomData.capacity}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Room Capacity"
              required
            />
          </div>

          {/* About Room */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">About Room</label>
            <textarea
              name="aboutroom"
              value={roomData.aboutroom}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
              placeholder="Write about the room"
            ></textarea>
          </div>

          {/* Upload Room Images */}
          <div className="mb-4">
            <label className="font-semibold text-gray-600 block mb-2">
              Upload Room Images
            </label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="form-control-file"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Submit Room
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addroom;
