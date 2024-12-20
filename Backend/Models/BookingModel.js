
// Booking Model
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    userId: { type: String, required: true },
    hotelId: { type: String, required: true },
    roomId: { type: String, required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    noofbookroom: { type: Number, required: true },
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;