

import React, { useState, useEffect } from "react";
import axios from "axios";

const EditHotel = ({ hotelId, onClose, onUpdate, hotels }) => {
  const [hotel, setHotel] = useState({
    hotalname: "",
    hotaladdress: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    hotelcontectnumber: "",
    hotelfacilities: [],
    filename: [],
    abouthotel: "",
    totalrooms: "",
  });
  const token = localStorage.getItem("token");
const styledata={
    

}
  useEffect(() => {
    const fetchHotelDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1111/hotels/${hotelId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setHotel(response.data);
      } catch (error) {
        console.error("Error fetching hotel details:", error);
      }
    };
    fetchHotelDetails();
  }, [hotelId, token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("hotaladdress.")) {
      const addressField = name.split(".")[1];
      setHotel((prevHotel) => ({
        ...prevHotel,
        hotaladdress: {
          ...prevHotel.hotaladdress,
          [addressField]: value,
        },
      }));
    } else if (name === "hotelfacilities") {
      const facilities = value.split(",").map((item) => item.trim());
      setHotel((prevHotel) => ({ ...prevHotel, hotelfacilities: facilities }));
    } else {
      setHotel((prevHotel) => ({ ...prevHotel, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await onUpdate(hotel);
      onClose();
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full left-auto" >
      <div className="bg-white p-6 rounded-lg shadow-md w-96 relative"> {/* Added relative positioning */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Edit Hotel</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Hotel Name
            </label>
            <input
              type="text"
              name="hotalname"
              value={hotel.hotalname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Street</label>
            <input
              type="text"
              name="hotaladdress.street"
              value={hotel.hotaladdress?.street}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">City</label>
            <input
              type="text"
              name="hotaladdress.city"
              value={hotel.hotaladdress?.city}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">State</label>
            <input
              type="text"
              name="hotaladdress.state"
              value={hotel.hotaladdress?.state}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">Pincode</label>
            <input
              type="text"
              name="hotaladdress.pincode"
              value={hotel.hotaladdress?.pincode}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Contact Number
            </label>
            <input
              type="text"
              name="hotelcontectnumber"
              value={hotel.hotelcontectnumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Facilities (comma-separated)
            </label>
            <input
              type="text"
              name="hotelfacilities"
              value={hotel.hotelfacilities.join(", ")}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              About Hotel
            </label>
            <textarea
              name="abouthotel"
              value={hotel.abouthotel}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Total Rooms
            </label>
            <input
              type="text"
              name="totalrooms"
              value={hotel.totalrooms}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditHotel;
