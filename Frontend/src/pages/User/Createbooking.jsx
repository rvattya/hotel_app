import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Createbooking = () => {
    const [formData, setFormData] = useState({
        userId: "",
        hotelName: "",
        roomName: "",
        checkInDate: "",
        checkOutDate: "",
        totalAmount: "",
        noofbookroom: "",
        roomRate: 0,
    });
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const hotelId = searchParams.get("hotelId");
    const roomId = searchParams.get("roomId");
    const token = localStorage.getItem("token");

    useEffect(() => {
        const fetchDetails = async () => {
            if (token && hotelId && roomId) {
                try {
                    const decodedToken = localStorage.getItem("token");
                    const response = await axios.get(
                        `http://localhost:1111/hotel-room-details?hotelId=${hotelId}&roomId=${roomId}`
                    );
                    const { hotelName, roomName, roomRate } = response.data;
                    setFormData((prevData) => ({
                        ...prevData,
                        userId: decodedToken.email, // Assuming your token has email
                        hotelName: hotelName,
                        roomName: roomName,
                        roomRate: roomRate,
                    }));
                } catch (error) {
                    console.error("Error fetching hotel/room details:", error);
                    alert("Failed to fetch hotel/room details.");
                }
            }
        };
        fetchDetails();
    }, [token, hotelId, roomId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:1111/booking",
                {
                    ...formData,
                    hotelId: hotelId,
                    roomId: roomId,
                },
                {

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (response.status === 200 || response.status === 201) {
                alert("Booking Successful!");
                setFormData({
                    userId: "",
                    hotelName: "",
                    roomName: "",
                    checkInDate: "",
                    checkOutDate: "",
                    totalAmount: "",
                    noofbookroom: "",
                    roomRate: 0,
                });
                navigate("/bookings");
            } else {
                alert("Booking Failed. Please try again.");
            }
        } catch (error) {
            console.error("Error booking:", error);
            alert("An error occurred while booking.");
        }
    };

    return (
        <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">Booking Form</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        User Email
                    </label>
                    <input
                        type="text"
                        name="userId"
                        value={formData.userId}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Hotel Name
                    </label>
                    <input
                        type="text"
                        name="hotelName"
                        value={formData.hotelName}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Room Name
                    </label>
                    <input
                        type="text"
                        name="roomName"
                        value={formData.roomName}
                        readOnly
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Check-In Date
                    </label>
                    <input
                        type="date"
                        name="checkInDate"
                        value={formData.checkInDate}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Check-Out Date
                    </label>
                    <input
                        type="date"
                        name="checkOutDate"
                        value={formData.checkOutDate}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Total Amount
                    </label>
                    <input
                        type="number"
                        name="totalAmount"
                        value={formData.totalAmount}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Number of Rooms
                    </label>
                    <input
                        type="number"
                        name="noofbookroom"
                        value={formData.noofbookroom}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                    Book Now
                </button>
            </form>
        </div>
    );
};

export default Createbooking;
