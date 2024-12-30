import React, { useState, useEffect } from "react";

const Mybooking = () => {
  const [bookings, setBookings] = useState([]);

  // Dummy data for bookings
  useEffect(() => {
    const dummyBookings = [
      {
        userId: "U001",
        hotelId: "H001",
        roomId: "R001",
        checkInDate: "2024-12-31",
        checkOutDate: "2025-01-05",
        totalAmount: 5000,
        noOfBookRoom: 2,
      },
      {
        userId: "U002",
        hotelId: "H002",
        roomId: "R002",
        checkInDate: "2024-12-30",
        checkOutDate: "2025-01-04",
        totalAmount: 7000,
        noOfBookRoom: 3,
      },
    ];
    setBookings(dummyBookings);
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold text-gray-800 mb-4">Booking Details</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Hotel ID</th>
              <th className="px-4 py-2 border">Room ID</th>
              <th className="px-4 py-2 border">Check-In Date</th>
              <th className="px-4 py-2 border">Check-Out Date</th>
              <th className="px-4 py-2 border">Total Amount</th>
              <th className="px-4 py-2 border">No. of Rooms</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="text-center">
                <td className="px-4 py-2 border">{booking.userId}</td>
                <td className="px-4 py-2 border">{booking.hotelId}</td>
                <td className="px-4 py-2 border">{booking.roomId}</td>
                <td className="px-4 py-2 border">{booking.checkInDate}</td>
                <td className="px-4 py-2 border">{booking.checkOutDate}</td>
                <td className="px-4 py-2 border">{booking.totalAmount}</td>
                <td className="px-4 py-2 border">{booking.noOfBookRoom}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Mybooking;
