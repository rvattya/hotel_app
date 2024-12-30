import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Editroom = ({roomId,onClose, onUpdate,rooms}) => {
    const [room,setRooms]=useState({
        hotalname: "",
        roomname:"",
        roomrate:"",
        capacity:"",
        filenames: [],
        aboutroom:"",

    });
    const token= localStorage.getItem("token");
    const [hotel,setHotel]=useState([]);
    useEffect(()=>{
        // fatch hotel name
        const fetchhotel=async ()=>{
        try {
                const response= await axios.get('http://localhost:1111/hotels', {headers:{
                    Authorization: `Bearer  ${token}`,
                },});
                setHotel(response.data);
            }
            
        catch (error) {
            console.error("Error fetching hotels", error);

        }   
    }
    fetchhotel();

    }, []);
    //get token 
useEffect(()=>{
    const fatchroomdetails= async ()=>{
        try {
            const response= await axios.get(`http://localhost:1111/rooms/${roomId}`,{headers:{
                Authorization: `Bearer  ${token}`,
            },});
            setRooms(response.data);
            
        } catch (error) {
            console.error(error,"error found")
        }
    }
    fatchroomdetails();
},[token, roomId]);

const handleChange=(e)=>{
    const {name, value}= e.target;
    setRooms((prevroom)=>({...prevroom,[name]: value}));
};

const handleSubmit=async (e)=>{
    e.prevenDefalt();
    try {
        await onUpdate(room);
        onClose();
    } catch (error) {
        console.error("Error updating room:", error);

    }

};

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
        <h2 className="text-xl font-bold mb-4">Edit Hotel</h2>
        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Hotel Name
            </label>
            <select name="hotelname" value={hotel.hotalname}
            className="w-full px-4 py-2 border rounded-lg"
            onChange={handleChange}>
                <option value={hotel.hotalname}>Select Hotel</option>
                {hotel.map((data)=>(
                    <option key={data._id} value={data._id}>
                        {data.hotalname}
                    </option>
                ))}
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Room Name
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
              Room Rate
            </label>
            <input
              type="number"
              name="hotelcontectnumber"
              value={room.roomrate}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              About Room
            </label>
            <textarea
              name="abouthotel"
              value={room.aboutroom}
              className="w-full px-4 py-2 border rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
               Room Capacity
            </label>
            <input
              type="number"
              name="totalrooms"
              value={room.capacity}
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

export default Editroom