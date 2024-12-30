import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Addroom = () => {
  const [hoteldata, setHoteldata] = useState([]);
  const [roomdata, setRoomdata] = useState({
    hotelname: "",
    roomname: "",
    roomrate: "",
    capacity: "",
    filenames: null,
    aboutroom: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);

const token= localStorage.getItem("token")
  useEffect(() => {
    // Fetch hotel data for dropdown
    const fetchhotel = async () => {
      try {
        const response = await axios.get('http://localhost:1111/hotels', {
          headers: {
            Authorization: `Bearer ${token}`, // Include token
          },
        });
        setHoteldata(response.data);
      } catch (error) {
        console.error("Error fetching hotels", error);
      }
    };
    fetchhotel();
  }, []);

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRoomdata({ ...roomdata, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
   setSelectedFiles(Array.from(e.target.files));
  };

  const Addroomdata = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const formData = new FormData();
      formData.append('hotelname', roomdata.hotelname);
      formData.append('roomname', roomdata.roomname);
      formData.append('roomrate', roomdata.roomrate);
      formData.append('capacity', roomdata.capacity);
      formData.append('aboutroom', roomdata.aboutroom);

      // Append each file to the FormData
      selectedFiles.forEach((file) => {
        formData.append('filenames', file);
      });


      await axios.post("http://localhost:1111/add-room", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Include token
          'Content-Type': 'multipart/form-data', // Set content type for file upload
        },
      });
      alert("Room added successfully");
      // Reset form after successful submission
      setRoomdata({
        hotelname: "",
        roomname: "",
        roomrate: "",
        capacity: "",
        filenames: null,
        aboutroom: "",
      });
      setSelectedFiles([]);
    } catch (error) {
      console.error(error);
      alert("Error found, please try again later");
    }
  };

  return (
    <div className="bg-blue-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <form className="bg-gray-200 shadow-lg rounded-lg p-6 max-w-3xl mx-auto" onSubmit={Addroomdata}>
          {/* Form Header */}
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Add Room Details
          </h2>

          {/* Hotel Name */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Hotel Name</label>
            <select
              name="hotelname"
              value={roomdata.hotelname}
              onChange={handleInputChange}
              className="form-control"
              required
            >
              <option value="">Select Hotel</option>
              {hoteldata.map((hotel) => (
                <option key={hotel._id} value={hotel._id}>
                  {hotel.hotalname}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Room Name</label>
            <input
              type="text"
              name="roomname"
              value={roomdata.roomname}
              onChange={handleInputChange}
              className="form-control"
              placeholder="Enter Room Name"
              required
            />
          </div>

          {/* Room Rate and Capacity */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="font-semibold text-gray-600">Room Rate</label>
              <input
                type="number"
                name="roomrate"
                value={roomdata.roomrate}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Room Rate"
                required
              />
            </div>
            <div className="col-md-6">
              <label className="font-semibold text-gray-600">Room Capacity</label>
              <input
                type="number"
                name="capacity"
                value={roomdata.capacity}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter Room Capacity"
                required
              />
            </div>
          </div>

          {/* Room Images */}
          <div className="mb-4">
            <label className="font-semibold text-gray-600 block mb-2">Upload Room Images</label>
            <div className="row">
              <div className="col-md-12 mb-2">
                <input
                  type="file"
                  className="form-control-file"
                  multiple
                  onChange={handleFileChange}
                  required
                />
              </div>
            </div>
          </div>

          {/* About Room */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">About Room</label>
            <textarea
              name="aboutroom"
              value={roomdata.aboutroom}
              onChange={handleInputChange}
              className="form-control"
              rows="4"
              placeholder="Write about the room"
              required
            ></textarea>
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
