const Hotelmodel = require('../Models/HotelAddmodel');
const Roommodel = require('../Models/RoomAddmodel');
const { multiplefile } = require('../Middleweres/multerMiddleware');


const addHotel = async (req, res) => {
    multiplefile(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: err.message }); // Return error message if there's an issue
        }
    
    // If no files are uploaded, return an error
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ message: "Please upload hotel images." });
    }

    try {
        const hotel = new Hotelmodel({
            hotalname: req.body.hotalname, // Hotel name
            hotaladdress: req.body.hotaladdress, // Address array with street, city, state, and pincode
            hotelcontectnumber: req.body.hotelcontectnumber, // Contact number
            hotelfacilities: req.body.hotelfacilities, // Array of facilities
            filename: req.files ? req.files.map(file => file.path) : [], // Uploaded file paths
            abouthotel: req.body.abouthotel, // About the hotel
            totalrooms: req.body.totalrooms
        });

        const newHotel = await hotel.save();
        res.status(201).json({ message: 'Hotel added successfully', newHotel });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }});
}

const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotelmodel.find();
        res.status(200).json(hotels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getHotelById = async (req, res) => {
    try {
        const hotel = await Hotelmodel.findById(req.params.id);
        if (!hotel) return res.status(404).json({ message: 'Hotel not found' });
        res.status(200).json(hotel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addRoom = async (req, res) => {
    multiplefile(req, res, async (err) => {

        {
            if (err) {
                return res.status(400).json({ message: err.message }); // Return error message if there's an issue
            }
        }
        // If no files are uploaded, return an error
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "Please upload room images." });
        }

        try {
            const room = new Roommodel({
                hotelname: req.body.hotelname, // Hotel ID (this should be sent in the body)
                roomname: req.body.roomname,
                roomrate: req.body.roomrate,
                capacity: req.body.capacity,
                filenames: req.files.map(file => file.path), // Store the paths of the uploaded files
                aboutroom: req.body.aboutroom
            })
            // const room = new Roommodel(req.body);
            const newRoom = await room.save();
            res.status(201).json({ message: 'Room added successfully', newRoom });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }});
};

const getAllRooms = async (req, res) => {
    try {
        const rooms = await Roommodel.find();
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getRoomById = async (req, res) => {
    try {
        const room = await Roommodel.findById(req.params.id);
        if (!room) return res.status(404).json({ message: 'Room not found' });
        res.status(200).json(room);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { addHotel, getAllHotels, getHotelById, addRoom, getAllRooms, getRoomById };