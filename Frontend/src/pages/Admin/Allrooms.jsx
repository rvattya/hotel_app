import axios from "axios";
import React, { useEffect, useState } from "react";
import Editroom from '../Admin/Editroombyid'

const Allrooms = () => {
  const [editingroomId, setEditingroomId] = useState(null); // Track which hotel is being edited
  const [rooms, setRooms] = useState([]);
  
  // const navigate = useNavigate();
  const token = localStorage.getItem("token");


  useEffect(() => {
    const fetchroom = async () => {
      try {
        const response = await axios.get("http://localhost:1111/all-rooms", {
          headers: {
            Authorization: `Bearer ${token}`, // Include token
          },
        });
        setRooms(response.data);
      } catch (error) {
        console.error("error room data not Fatch", error);
      }
    };
    fetchroom();
  }, [token]);

  // Edit Handler
  const handleEdit = (id) => {
    setEditingroomId(id);
    // navigate(`/admin/edit-room/${id}`);
  };
  const handleCloseEditModal= ()=>{
    setEditingroomId(null);
  }
//function to handle room update
const handleroomUpdate= async()=>{
  try {
    await axios.put(`http://localhost:1111/hotels/${updatedRoom._id}`, updatedRoom,{headers: {
      Authorization: `Bearer ${token}`,
    },});
    setRooms(rooms.map((room)=>room._id===updatedRoom._id?updatedRoom:room))
    handleCloseEditModal();

    
  } catch (error) {
          console.error("Error updating hotel:", error);

  }
}
  // Delete Handler
  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this room?");
    if (confirmed) {
      try {
        await axios.delete(`http://localhost:1111/rooms/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Include token
          },
        });
        setRooms(rooms.filter((room) => room._id !== id));
      } catch (error) {
        console.error("Error deleting room:", error);
      }
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
                Room Rate (₹)
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
                key={room._id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-sm text-gray-700">{room.hotelname?.hotalname}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.roomname}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.roomrate}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.capacity}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {room.filenames?.map((file, index) => (
                    <img
                      key={index}
                      src={file}
                      alt={`Room ${index + 1}`}
                      className="w-10 h-10 rounded-md mr-2 inline-block"
                    />
                  ))}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">{room.aboutroom}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <button
                    onClick={() => handleEdit(room._id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(room._id)}
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
      {/* Render the EditHotel component if editingroomId is not null */}
      {editingroomId && (
       <Editroom
         roomId={editingroomId}
         onClose={handleCloseEditModal}
         onUpdate={handleroomUpdate}
         rooms={rooms}
       />
     )}
    </div>
  );
};

export default Allrooms;
