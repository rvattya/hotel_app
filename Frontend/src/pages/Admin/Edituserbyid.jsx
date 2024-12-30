import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Edituserbyid = ({}) => {
    



  return (
    <>
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full left-auto" >
      <div className="bg-white p-6 rounded-lg shadow-md w-96 relative"> {/* Added relative positioning */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">Edit User </h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              User Name
            </label>
            <input
              type="text"
              name="hotelcontectnumber"
              value={room.roomname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
           
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              User Contact Number
            </label>
            <input
              type="text"
              name="hotelcontectnumber"
              value={room.roomname}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              User Email ID
            </label>
            <input
              type="number"
              name="hotelcontectnumber"
              value={room.roomrate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
    </>
  )
}

export default Edituserbyid