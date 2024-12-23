import axios from "axios";
import React, { useEffect, useState } from "react";

const Roomlist = () => {
  const [roomdata, setroomdata] = useState([]);

  // Fetch hotel data on component mount
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get("http://localhost:1111/rooms");
        setroomdata(response.data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };
    fetchHotelData();
  }, []);

  return (
    <div className="bg-gray-100 p-6 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Room List
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomdata.map((roomdata, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 transition-transform transform hover:scale-105"
          >
            <img
              src={roomdata.filenames[1]}
              alt={roomdata.roomname}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold text-gray-700">{roomdata.roomname}</h2>
              <h2 className="text-xl font-bold text-gray-700">Hotel Name:-{roomdata.hotelname?.hotalname }</h2>
              <p className="text-gray-500">{roomdata.location}</p>
              <p className="text-green-600 font-semibold mt-2">
                Price: ₹{roomdata.roomrate}
              </p>
              <p className="text-red-600 font-semibold mt-2">
                Capecity: {roomdata.capacity}
              </p>
              <p className=" font-semibold mt-2">
                 {roomdata.aboutroom}
              </p>
              
              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
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
