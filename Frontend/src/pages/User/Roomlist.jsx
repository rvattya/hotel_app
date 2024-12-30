import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Roomlist = () => {
  const [roomdata, setroomdata] = useState([]);
  const navigete = useNavigate();

  // Fetch hotel data on component mount
  const token = localStorage.getItem("token");
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get("http://localhost:1111/rooms", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setroomdata(response.data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };
    fetchHotelData();
  }, [token]);

  const booknow = (roomId, hotelId) => {
    // Navigate to the booking page with hotelId and roomId as query parameters
    navigete(`/booking`);
  };

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Room List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomdata.map((room, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={room.filenames[1]}
              alt={room.roomname}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-700">{room.roomname}</h2>
              <h2 className="text-xl font-bold text-gray-700">
                Hotel Name:-{room.hotelname?.hotalname}
              </h2>
              <p className="text-gray-500">{room.location}</p>
              <p className="text-green-600 font-semibold mt-2">
                Price: ₹{room.roomrate}
              </p>
              <p className="text-red-600 font-semibold mt-2">
                Capecity: {room.capacity}
              </p>
              <p className=" font-semibold mt-2">{room.aboutroom}</p>

              <button
                onClick={() => booknow(room._id, room.hotelname._id)}
                className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
              >
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roomlist;
