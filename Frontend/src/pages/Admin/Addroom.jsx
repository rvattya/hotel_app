import axios from 'axios';
import React, {  useState } from 'react'

const Addroom = () => {
  // const [hoteldata, setHoteldata]= useState([]);
  const [roomdata, setRoomdata]= useState({
    hotelname: "",
        roomname: "",
        roomrate: "",
        capacity: "",
        filenames:null,
        aboutroom: "",
  });

  useEffect(()=>{
    // fatch hotel data ad dropdown
    const fatchhotel= async ()=>{
      try {
        const response= await axios.get('http://localhost:1111/hotels');
        setHoteldata(response.data);


      } catch (error) {
        console.error("Error fetching hotels", error);

        
      }
    }
    fatchhotel();
    
  },[]);

  // handlehotel section to add hotels 
  const handlehotelchange= (e)=>{
    cosnt 
  }
  const Addroomdata= async()=>{
    try {
      await axios.post("http://localhost:1111//add-room", roomdata);
      alert("room add successfully");
      
    } catch (error) {
      console.error(error);
      alert("Error found, please try again later");
    }
  }

  return (
   <>
    <div className="bg-blue-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <form className="bg-gray-200 shadow-lg rounded-lg p-6 max-w-3xl mx-auto" onSubmit={Addroomdata}>
          {/* Form Header */}
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Add Room Details
          </h2>

          {/* Hotel Name */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Room  Name</label>
            <input type="text" className="form-control" placeholder="Enter Room Name"  />
          </div>
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Hotel Name</label>
            <input type="text" className="form-control" placeholder="Enter Hotel Name"   />
          </div>

          {/* Address and City */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="font-semibold text-gray-600">Address</label>
              <input type="text" className="form-control" placeholder="Enter Address"  />
            </div>
            <div className="col-md-6">
              <label className="font-semibold text-gray-600">City Name</label>
              <input type="text" className="form-control" placeholder="Enter City Name"  />
            </div>
          </div>

          {/* State and Pin Code */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="font-semibold text-gray-600">State Name</label>
              <input type="text" className="form-control" placeholder="Enter State Name"  />
            </div>
            <div className="col-md-6">
              <label className="font-semibold text-gray-600">Pin Code</label>
              <input type="text" className="form-control" placeholder="Enter Pin Code"   />
            </div>
          </div>

          {/* Contact and Total Rooms */}
          <div className="row mb-4">
            <div className="col-md-6">
              <label className="font-semibold text-gray-600">Contact Number</label>
              <input type="text" className="form-control" placeholder="Enter Contact Number"   />
            </div>
            <div className="col-md-6">
              <label className="font-semibold text-gray-600"> Room Capecity</label>
              <input type="number" className="form-control" placeholder=" 02"  />
            </div>
          </div>

          {/* Facilities */}
          <div className="mb-4">
            <label className="font-semibold text-gray-600 block mb-2">Facilities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "Free Wi-Fi & AC ",
                "Furniture",
                "Entertainment",
                "Food & Drink",
                "Safety & Security",
                "Exclusive Add-ons",
              ].map((facility, index) => (
                <div key={index}>
                  <input type="checkbox" id={`facility-${index}`} className="mr-2"   />
                  <label htmlFor={`facility-${index}`}>{facility}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Hotel Images */}
          <div className="mb-4">
            <label className="font-semibold text-gray-600 block mb-2">Upload Hotel Images</label>
            <div className="row">
              {[1, 2, 3].map((index) => (
                <div className="col-md-4 mb-2" key={index}>
                  <input type="file" className="form-control-file"  />
                </div>
              ))}
            </div>
          </div>

          {/* About Hotel */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">About Hotel</label>
            <textarea
              className="form-control"
              rows="4"
              placeholder="Write about the hotel"  
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Submit Room
            </button>
          </div>
        </form>
      </div>
    </div>
      
   </>
  )
}

export default Addroom

