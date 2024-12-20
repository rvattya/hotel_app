const mongoose= require('mongoose');
const Schema= mongoose.Schema;
const hotelSchema= new Schema({
    hotalname: { type: String },
    hotaladdress: [
        {
            streetAddress: { type: String, required: true },
            city: { type: String, required: true },
            state: { type: String, required: true },
            pincode: { type: String, required: true }
        }
    ],
    hotelcontectnumber: { type: Number },
    hotelfacilities: [{ type: String }],
    filename: [{ type: String }],
    abouthotel: { type: String },
    totalrooms: { type: Number }
})
const hotel= mongoose.model("hotel", hotelSchema);
module.exports= hotel;


