import React, { useState } from "react";

const Allbooking = () => {
  // Sample Booking Data
  const [bookings, setBookings] = useState([
    {
      id: 1,
      userId: "USR001",
      hotelId: "HTL123",
      roomId: "RM101",
      checkInDate: "2024-12-20",
      checkOutDate: "2024-12-25",
      totalAmount: "5000",
      noofbookroom: "2",
    },
    {
      id: 2,
      userId: "USR002",
      hotelId: "HTL456",
      roomId: "RM202",
      checkInDate: "2024-12-22",
      checkOutDate: "2024-12-28",
      totalAmount: "7500",
      noofbookroom: "3",
    },
    {
      id: 3,
      userId: "USR003",
      hotelId: "HTL789",
      roomId: "RM303",
      checkInDate: "2024-12-24",
      checkOutDate: "2024-12-27",
      totalAmount: "4000",
      noofbookroom: "1",
    },
  ]);

  

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Bookings</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                User ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Hotel ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Room ID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Check-In Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Check-Out Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Total Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                No. of Rooms
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking.id}
                className="border-t border-gray-200 hover:bg-gray-50"
              >
                <td className="px-4 py-2 text-sm text-gray-700">{booking.userId}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{booking.hotelId}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{booking.roomId}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{booking.checkInDate}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{booking.checkOutDate}</td>
                <td className="px-4 py-2 text-sm text-gray-700">₹{booking.totalAmount}</td>
                <td className="px-4 py-2 text-sm text-gray-700">{booking.noofbookroom}</td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  <button
                    onClick={() => handleEdit(booking.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded-md text-sm mr-2 hover:bg-blue-600"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleCancel(booking.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600"
                  >
                    Cancel
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

export default Allbooking;
