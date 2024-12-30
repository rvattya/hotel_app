const Bookingmodel= require('../Models/BookingModel');

const createBooking = async (req, res) => {
    try {
        const {  checkInDate, checkOutDate, totalAmount, noofbookroom, hotelId, roomId, userId } = req.body;

        // Fetch user, hotel, and room details
        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const hotel = await HotelModel.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        const room = await RoomModel.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        const newBooking = new Booking({
            userId: user.email, // Store user email
            hotelId: hotel.hotalname, // Store hotel name
            roomId: room.roomname, // Store room name
            checkInDate,
            checkOutDate,
            totalAmount,
            noofbookroom,
        });

        const savedBooking = await newBooking.save();
        res.status(201).json({ message: 'Booking created successfully', booking: savedBooking });
    } catch (error) {
        console.error('Error creating booking:', error);
        res.status(500).json({ message: 'Failed to create booking', error: error.message });
    }
};


const getAllBookings = async (req, res) => {
    try {
        const bookings = await Bookingmodel.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getBookingById = async (req, res) => {
    try {
        const booking = await Bookingmodel.findById(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const cancelBooking = async (req, res) => {
    try {
        const booking = await Bookingmodel.findByIdAndDelete(req.params.id);
        if (!booking) return res.status(404).json({ message: 'Booking not found' });
        res.status(200).json({ message: 'Booking cancelled successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createBooking, getAllBookings, getBookingById, cancelBooking };