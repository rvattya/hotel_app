import React, { useState } from "react";
import "../../Css/Addhotel.css";
import axios from "axios";

const Addhotel = () => {
  const [hoteldata, setHoteldata] = useState({
    hotalname: "",
    hoteladdress: {
      cityname: "",
      statename: "",
      pincode: "",
    },
    hotelcontectnumber: "",
    hotelfacilities: [],
    filename: "",
    abouthotel: "",
    totalrooms: "",
  });
const [files, setFiles]= useState([]);
  // Get token from local storage

const token = localStorage.getItem("token");


  // Handle input change for main fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setHoteldata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle input change for nested hoteladdress fields
  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setHoteldata((prevData) => ({
      ...prevData,
      hoteladdress: {
        ...prevData.hoteladdress,
        [name]: value,
      },
    }));
  };

  // Handle checkbox change for facilities
  const handleFacilitiesChange = (e) => {
    const { value, checked } = e.target;
    setHoteldata((prevData) => ({
      ...prevData,
      hotelfacilities: checked
        ? [...prevData.hotelfacilities, value]
        : prevData.hotelfacilities.filter((facility) => facility !== value),
    }));
  };
  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  // Handle form submission
  const Addhoteldata = async (e) => {
    e.preventDefault(); // Prevent form refresh
    try {
      const formData = new FormData();
      formData.append("hotalname", hoteldata.hotalname);
      formData.append("hoteladdress[cityname]", hoteldata.hoteladdress.cityname);
      formData.append("hoteladdress[statename]", hoteldata.hoteladdress.statename);
      formData.append("hoteladdress[pincode]", hoteldata.hoteladdress.pincode);
      formData.append("hotelcontectnumber", hoteldata.hotelcontectnumber);
      hoteldata.hotelfacilities.forEach((facility) =>
        formData.append("hotelfacilities", facility)
      );
      formData.append("abouthotel", hoteldata.abouthotel);
      formData.append("totalrooms", hoteldata.totalrooms);
      files.forEach((file) => formData.append("images", file));

      // await axios.post("http://localhost:1111/add-hotel", hoteldata);
      await axios.post("http://localhost:1111/add-hotel", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Include the token in the header

        },
      });

      alert("Hotel added successfully!");
      setHoteldata({
        hotalname: "",
        hoteladdress: {
          cityname: "",
          statename: "",
          pincode: "",
        },
        hotelcontectnumber: "",
        hotelfacilities: [],
        filename: "",
        abouthotel: "",
        totalrooms: "",
      });
      setFiles([]);

    } catch (error) {
      console.error(error);
      alert("Error found, please try again later.");
    }
  };

  return (
    <div className="bg-blue-100 flex items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <form
          className="bg-gray-200 shadow-lg rounded-lg p-6 max-w-3xl mx-auto"
          onSubmit={Addhoteldata}
        >
          <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700">
            Add Hotel Details
          </h2>

          {/* Hotel Name */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Hotel Name</label>
            <input
              type="text"
              name="hotalname"
              value={hoteldata.hotalname}
              onChange={handleInputChange}
              placeholder="Enter Hotel Name"
              className="form-control mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>

          {/* Address Details */}
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Address</h3>
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">City Name</label>
            <input
              type="text"
              name="cityname"
              value={hoteldata.hoteladdress.cityname}
              onChange={handleAddressChange}
              placeholder="Enter City Name"
              className="form-control mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">State Name</label>
            <input
              type="text"
              name="statename"
              value={hoteldata.hoteladdress.statename}
              onChange={handleAddressChange}
              placeholder="Enter State Name"
              className="form-control mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Pin Code</label>
            <input
              type="text"
              name="pincode"
              value={hoteldata.hoteladdress.pincode}
              onChange={handleAddressChange}
              placeholder="Enter Pin Code"
              className="form-control mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>

          {/* Contact Number */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Contact Number</label>
            <input
              type="text"
              name="hotelcontectnumber"
              value={hoteldata.hotelcontectnumber}
              onChange={handleInputChange}
              placeholder="Enter Contact Number"
              className="form-control mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>

          {/* Facilities */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Facilities</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
              {[
                "Free Wi-Fi",
                "Swimming Pool",
                "Fitness Center",
                "Spa and Sauna",
                "Conference Room",
                "24/7 Room Service",
              ].map((facility, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`facility-${index}`}
                    value={facility}
                    onChange={handleFacilitiesChange}
                    checked={hoteldata.hotelfacilities.includes(facility)}
                    className="mr-2"
                  />
                  <label htmlFor={`facility-${index}`}>{facility}</label>
                </div>
              ))}
            </div>
          </div>

          {/* Total Rooms */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">Total Rooms</label>
            <input
              type="number"
              name="totalrooms"
              value={hoteldata.totalrooms}
              onChange={handleInputChange}
              placeholder="Enter Total Rooms"
              className="form-control mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
              required
            />
          </div>
           {/* Hotel Images */}
           <div className="mb-4">
            <label className="font-semibold text-gray-600 block mb-2">Upload Hotel Images</label>
            <div className="row">
              {[1, 2, 3].map((index) => (
                <div className="col-md-4 mb-2" key={index}>
                  <input type="file" className="form-control-file"  onChange={handleFileChange}/>
                </div>
              ))}
            </div>
          </div>

          {/* About Hotel */}
          <div className="form-group mb-4">
            <label className="font-semibold text-gray-600">About Hotel</label>
            <textarea
              name="abouthotel"
              value={hoteldata.abouthotel}
              onChange={handleInputChange}
              rows="4"
              placeholder="Write about the hotel"
              className="form-control mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm w-full"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Submit Hotel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Addhotel;


