import axios from "axios";
import React, { useEffect, useState } from "react";

const Allhotels = () => {
  const [hotels, setHotels] = useState([]);

  // Fetch data from the API
  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get("http://localhost:1111/all-hotels");
        setHotels(response.data); 
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotelData();
  }, []);

  // Edit Handler
  const handleEdit = async (id) => {
    alert(`Edit hotel with ID: ${id}`);
    const edithotel= window.confirm("are you edit hotel data");
    if(edithotel){
      try {
        await axios.put(`http://localhost:1111/hotels/${id}`);
        setHotels(hotels.filter((hotel)=> hotel.id !== id));
        
      } catch (error) {
        console.error(" error hotel data noty edit",error);  
      }
    }

  };

  // Delete Handler
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this hotel?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:1111/hotels/${id}`);
        setHotels(hotels.filter((hotel) => hotel.id !== id)); // Update the UI after deletion
      } catch (error) {
        console.error("Error deleting hotel:", error);
      }
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Hotels</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Hotel Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                City
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Contact Number
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Facilities
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Images
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                About Hotel
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Total Rooms
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {hotels.map((hotel) => (
              <tr
                key={hotel.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hotelname}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hoteladdress.city}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hotelcontectnumber}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {hotel.hotelfacilities.join(", ")}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {hotel.hotelImages.map((file, index) => (
                    <img
                      key={index}
                      src={file}
                      alt={`Hotel ${index + 1}`}
                      className="w-10 h-10 rounded-md mr-2 inline-block"
                    />
                  ))}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.abouthotel}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.totalrooms}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <button
                    onClick={() => handleEdit(hotel.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(hotel.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Allhotels;

