import React, { useState } from "react";

const Allhotels = () => {
  // Sample hotel data
  const [hotels, setHotels] = useState([
    {
      id: 1,
      hotelName: "Grand Palace",
      hotelAddress: { city: "New York" },
      hotelContactNumber: 1234567890,
      hotelFacilities: ["Free WiFi", "Swimming Pool", "Spa"],
      filename: ["https://via.placeholder.com/40"],
      aboutHotel: "A luxury hotel in the heart of the city.",
      totalRooms: 100,
    },
    {
      id: 2,
      hotelName: "Sunrise Resort",
      hotelAddress: { city: "Los Angeles" },
      hotelContactNumber: 9876543210,
      hotelFacilities: ["Beach Access", "Bar", "Gym"],
      filename: ["https://via.placeholder.com/40"],
      aboutHotel: "A serene resort with stunning ocean views.",
      totalRooms: 50,
    },
  ]);

  // Edit Handler
  const handleEdit = (id) => {
    alert(`Edit hotel with ID: ${id}`);
    // Add your edit logic here (e.g., open a modal to edit hotel details)
  };

  // Delete Handler
  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this hotel?");
    if (confirmed) {
      setHotels(hotels.filter((hotel) => hotel.id !== id));
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
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hotelName}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hotelAddress.city}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.hotelContactNumber}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {hotel.hotelFacilities.join(", ")}
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
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.aboutHotel}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{hotel.totalRooms}</td>
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
