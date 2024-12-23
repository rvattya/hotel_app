import axios from "axios";
import React, { useEffect, useState } from "react";

const AllUser = () => {
  // Sample user data
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fatchuser = async () => {
      try {
        const response = await axios.get("http://localhost:1111/all-users");
        setUsers(response.data);

      } catch (error) {
        console.error("user not found", error)

      }
    };
    fatchuser();

  }, []);

  // Handle Edit action
  const handleEdit = async (id) => {
    alert(`Edit user with ID: ${id}`);

    const edituser = window.confirm("are you edit user data");
    if (edituser) {
      try {
        await axios.put(`http://localhost:1111/user/${id}`);
        setUsers(users.filter((user) => user.id !== id));

      } 
      catch (error) {
        console.error(" error user data not edit", error);
      }
    }

  };

// Handle Delete action
const handleDelete = async (id) => {
  const confirmed = window.confirm("Are you sure you want to delete this user?");
  if (confirmed) {
    try {
      await axios.delete(`http://localhost:1111/user/${id}`);
      setUsers(users.filter((user) => user.id !== id)); // Update the UI after deletion
    } catch (error) {
      console.error("Error deleting hotel:", error);
    }
  }
};

return (
  <div className="container mx-auto p-4">
    <h1 className="text-xl font-bold mb-4">All Users</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Profile
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Name
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Mobile Number
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              User Role
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Email
            </th>
            <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className="border-t border-gray-200 hover:bg-gray-50"
            >
              <td className="px-4 py-2">
                <img
                  src={user.profileImage}
                  alt={`${user.name}'s profile`}
                  className="w-10 h-10 rounded-full"
                />
              </td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.name}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.phone}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.role}</td>
              <td className="px-4 py-2 text-sm text-gray-700">{user.email}</td>
              <td className="px-4 py-2 text-sm text-gray-700">
                <button
                  onClick={() => handleEdit(user.id)}
                  className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
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

export default AllUser;
