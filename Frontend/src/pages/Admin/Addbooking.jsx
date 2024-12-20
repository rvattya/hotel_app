import React, { useState } from 'react'

const Addbooking = () => {
  const [bookingData, setBookingData] = useState({
    userId: "",
    hotelId: "",
    roomId: "",
    checkInDate: "",
    checkOutDate: "",
    totalAmount: "",
    noofbookroom: "",
  });

  
  return (
   <>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Book a Room</h2>
        <form  className="space-y-4">
          {/* User ID */}
          <div className="flex flex-col">
            <label htmlFor="userId" className="text-sm font-medium text-gray-700">
              User ID:
            </label>
            <input
              type="text"
              id="userId"
              name="userId"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookingData.userId}
              onChange={(e) =>
                setBookingData({ ...bookingData, userId: e.target.value })
              }
              required
            />
          </div>
          {/* Hotel ID */}
          <div className="flex flex-col">
            <label htmlFor="hotelId" className="text-sm font-medium text-gray-700">
              Hotel ID:
            </label>
            <input
              type="text"
              id="hotelId"
              name="hotelId"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookingData.hotelId}
              onChange={(e) =>
                setBookingData({ ...bookingData, hotelId: e.target.value })
              }
              required
            />
          </div>
          {/* Room ID */}
          <div className="flex flex-col">
            <label htmlFor="roomId" className="text-sm font-medium text-gray-700">
              Room ID:
            </label>
            <input
              type="text"
              id="roomId"
              name="roomId"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookingData.roomId}
              onChange={(e) =>
                setBookingData({ ...bookingData, roomId: e.target.value })
              }
              required
            />
          </div>
          {/* Check-in Date */}
          <div className="flex flex-col">
            <label
              htmlFor="checkInDate"
              className="text-sm font-medium text-gray-700"
            >
              Check-in Date:
            </label>
            <input
              type="date"
              id="checkInDate"
              name="checkInDate"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookingData.checkInDate}
              onChange={(e) =>
                setBookingData({ ...bookingData, checkInDate: e.target.value })
              }
              required
            />
          </div>
          {/* Check-out Date */}
          <div className="flex flex-col">
            <label
              htmlFor="checkOutDate"
              className="text-sm font-medium text-gray-700"
            >
              Check-out Date:
            </label>
            <input
              type="date"
              id="checkOutDate"
              name="checkOutDate"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookingData.checkOutDate}
              onChange={(e) =>
                setBookingData({ ...bookingData, checkOutDate: e.target.value })
              }
              required
            />
          </div>
          {/* Total Amount */}
          <div className="flex flex-col">
            <label
              htmlFor="totalAmount"
              className="text-sm font-medium text-gray-700"
            >
              Total Amount:
            </label>
            <input
              type="number"
              id="totalAmount"
              name="totalAmount"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookingData.totalAmount}
              onChange={(e) =>
                setBookingData({ ...bookingData, totalAmount: e.target.value })
              }
              required
            />
          </div>
          {/* Number of Rooms */}
          <div className="flex flex-col">
            <label
              htmlFor="noofbookroom"
              className="text-sm font-medium text-gray-700"
            >
              Number of Rooms:
            </label>
            <input
              type="number"
              id="noofbookroom"
              name="noofbookroom"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={bookingData.noofbookroom}
              onChange={(e) =>
                setBookingData({ ...bookingData, noofbookroom: e.target.value })
              }
              required
            />
          </div>
          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Submit Booking
            </button>
          </div>
        </form>
      </div>
    </div>
   
   </>
  )
}

export default Addbooking