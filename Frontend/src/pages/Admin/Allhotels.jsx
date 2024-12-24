import axios from "axios";
import React, { useEffect, useState } from "react";
import EditHotel from "../Admin/Edithotelbyid"; // Import the new component

const Allhotels = () => {
  const [hotels, setHotels] = useState([]);
  const [editingHotelId, setEditingHotelId] = useState(null); // Track which hotel is being edited
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchHotelData = async () => {
      try {
        const response = await axios.get("http://localhost:1111/all-hotels", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHotels(response.data);
        console.log("API Response:", response.data);
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    fetchHotelData();
  }, [token]);

  // Edit Handler
  const handleEdit = (id) => {
    setEditingHotelId(id); // Set the ID of the hotel being edited
  };

  // Function to handle closing the edit modal
  const handleCloseEditModal = () => {
    setEditingHotelId(null);
  };

  // Function to handle hotel update
  const handleHotelUpdate = async (updatedHotel) => {
    try {
      await axios.put(`http://localhost:1111/hotels/${updatedHotel._id}`, updatedHotel, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Update the hotels state with the updated hotel
      setHotels(
        hotels.map((hotel) =>
          hotel._id === updatedHotel._id ? updatedHotel : hotel
        )
      );
      handleCloseEditModal(); // Close the modal after successful update
    } catch (error) {
      console.error("Error updating hotel:", error);
    }
  };

  // Delete Handler
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this hotel?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:1111/hotels/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHotels(hotels.filter((hotel) => hotel._id !== id)); // Update the UI after deletion
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
                key={hotel._id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hotalname}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {hotel.hotaladdress?.city}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hotelcontectnumber}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {hotel.hotelfacilities.join(", ")}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {hotel.filename.map((file, index) => (
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
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600"
                    onClick={() => handleEdit(hotel._id)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                    onClick={() => handleDelete(hotel._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Render the EditHotel component if editingHotelId is not null */}
      {editingHotelId && (
        <EditHotel
          hotelId={editingHotelId}
          onClose={handleCloseEditModal}
          onUpdate={handleHotelUpdate}
          hotels={hotels}
        />
      )}
    </div>
  );
};

export default Allhotels;


