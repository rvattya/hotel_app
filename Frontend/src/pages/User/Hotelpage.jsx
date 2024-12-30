import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const HotelPage = () => {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [rooms, setRooms] = useState([]); // State for all rooms
  const [filteredRooms, setFilteredRooms] = useState([]); // State for filtered rooms
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [booking, setBookings]=useState(null);

  const token = localStorage.getItem("token");
 const  navigate= useNavigate()
  useEffect(() => {
    const fetchHotelAndRooms = async () => {
      try {

        // Fetch hotel details
        const hotelResponse = await axios.get(`http://localhost:1111/hotels/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const hotelData = hotelResponse.data;
        setHotel(hotelData);

        // Fetch all rooms
        const roomsResponse = await axios.get(
          `http://localhost:1111/rooms`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const allRooms = roomsResponse.data;
        console.log(allRooms);


        const filtered = allRooms.filter((room) => {
          return String(room.hotelname) === hotelData._id;

        });

        setFilteredRooms(filtered);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch hotel or room details, Login First");
        setLoading(false);
      }
    };

    fetchHotelAndRooms();
  }, [id]);
  const booknow=async()=>{
    try {
      const bookingresponse= await axios.post ('http://localhost:1111/booking',{Headers:{Authorization: `Bearer ${localStorage.getItem("token")}`,},});
      setBookings(bookingresponse.data);
      navigate('/creatbooking');
    } catch (error) {
      
    }

  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-gray-500">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-lg font-semibold text-red-500">{error} <span><Link to='/login' className="no-underline text-black"> Login </Link>
        </span></p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {hotel ? (
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={hotel.filename[0] || "https://via.placeholder.com/800x400"}
            alt={hotel.hotalname}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-800">{hotel.hotalname}</h1>
            <p className="mt-4 text-gray-600">{hotel.abouthotel}</p>
            <div className="mt-4">
              <p className="text-gray-700 font-semibold">
                Contact Number: {hotel.hotelcontectnumber}
              </p>
              <p className="text-gray-700 font-semibold">
                Total Rooms: {hotel.totalrooms}
              </p>
            </div>
            <h2 className="text-xl font-bold text-gray-800 mt-6">Rooms</h2>
            
            <button 
            onClick={booknow}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Book Now
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-gray-500">No hotel details found.</p>
      )}
    </div>
  );
};

export default HotelPage;
