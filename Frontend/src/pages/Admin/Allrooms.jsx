import React, { useState } from "react";

const Allrooms = () => {
  // Sample room data
  const [rooms, setRooms] = useState([
    {
      id: 1,
      hotelName: "Grand Palace",
      roomName: "Deluxe Suite",
      roomRate: 150,
      capacity: 2,
      filenames: ["https://via.placeholder.com/40"],
      aboutRoom: "A luxurious room with modern amenities.",
    },
    {
      id: 2,
      hotelName: "Sunrise Resort",
      roomName: "Ocean View Room",
      roomRate: 200,
      capacity: 4,
      filenames: ["https://via.placeholder.com/40"],
      aboutRoom: "A spacious room with stunning ocean views.",
    },
  ]);

  // Edit Handler
  const handleEdit = (id) => {
    alert(`Edit room with ID: ${id}`);
    // Add your edit logic here (e.g., open a modal or navigate to an edit form)
  };

  // Delete Handler
  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this room?");
    if (confirmed) {
      setRooms(rooms.filter((room) => room.id !== id));
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Rooms Management</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Hotel Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Room Name
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Room Rate ($)
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Capacity
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Images
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                About Room
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {rooms.map((room) => (
              <tr
                key={room.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-sm text-gray-700">{room.hotelName}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.roomName}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.roomRate}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.capacity}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {room.filenames.map((file, index) => (
                    <img
                      key={index}
                      src={file}
                      alt={`Room ${index + 1}`}
                      className="w-10 h-10 rounded-md mr-2 inline-block"
                    />
                  ))}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.aboutRoom}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <button
                    onClick={() => handleEdit(room.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(room.id)}
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

export default Allrooms;
