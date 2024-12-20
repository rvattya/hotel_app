const Bookingmodel= require('../Models/BookingModel');

const createBooking = async (req, res) => {
    const { hotelId, roomId, userId, checkInDate, checkOutDate, noofbookroom, totalAmount } = req.body;
    try {
        const booking = await Bookingmodel.create({ hotelId, roomId, userId, checkInDate, checkOutDate, noofbookroom, totalAmount });
        res.status(201).json({ message: 'Booking created successfully', booking });
    } catch (error) {
        res.status(500).json({ message: error.message });
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