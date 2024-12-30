const Hotelmodel = require('../Models/HotelAddmodel');
const Roommodel = require('../Models/RoomAddmodel');
const { multipleFileUpload } = require('../Middleweres/multerMiddleware');



const addHotel = async (req, res) => {
    multipleFileUpload(req, res, async (err) => {
        if (err) {
            console.error("Multer error:", err);
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
            filenames: req.files.map(file => file.path), // Uploaded file paths
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
    multipleFileUpload(req, res, async (err) => {
        if (err) {
            console.error("Multer error:", err);
            return res.status(400).json({ message: err.message });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: "Please upload room images." });
        }

        try {
            const room = new Roommodel({
                hotelname: req.body.hotelname,
                roomname: req.body.roomname,
                roomrate: req.body.roomrate,
                capacity: req.body.capacity,
                filenames: req.files.map(file => file.path),
                aboutroom: req.body.aboutroom
            });

            const newRoom = await room.save();
            res.status(201).json({ message: 'Room added successfully', newRoom });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    });
};


const getAllRooms = async (req, res) => {
    try {
        const rooms = await Roommodel.find().populate('hotelname');
        res.status(200).json(rooms);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getRoomsByHotelId = async (req, res) => {
    try {
        // const hotelId = req.params.hotelId;
        const hotelId = req.params.id; // Use req.params.id to get hotel id

        const rooms = await Roommodel.find({ hotalname: hotelId }).populate('hotelname');
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
const editHotelbyid= async (req,res)=>{
    try {
        const hotel= await Hotelmodel.findByIdAndUpdate(req.params.id, req.body,{new:true});

        if(!hotel) {
            return res.status(404).json({message: 'hotel not found'});
        }
        res.status(200).json({message: "hotel Update Successfully",hotel});
    } catch (error) {
res.status(500).json({message: error.message})
        
    }
};

const deleteHotelbyid = async (req, res) => {
    try {
        const hotel = await Hotelmodel.findByIdAndDelete(req.params.id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.status(200).json({ message: 'Hotel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const editRoombyid= async (req,res)=>{
    try {
        const room= await Roommodel.findByIdAndUpdate(req.params.id, req.body, {new:true} );

        if(!room) return res.status(404).json({message: 'Room not found'});
        res.status(200).json({message: "room Update Successfully", room})
    } catch (error) {
res.status(500).json({message: error.message})
        
    }
}
const deleteRoombyid= async (req,res)=>{
    try {
        const room= await Roommodel.findByIdAndDelete(req.params.id);
        if(!room) return res.status(404).json({message: 'Room not found'});

        res.status(200).json({message: "Room Delete Successfully"});
    } catch (error) {
res.status(500).json({message: error.message})
        
    }
}
const getHotelAndRoomDetails = async (req, res) => {
    const { hotelId, roomId } = req.query;
    try {
        const hotel = await Hotelmodel.findById(hotelId);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        const room = await Roommodel.findById(roomId);
        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }
        res.status(200).json({
            hotelName: hotel.hotalname,
            roomName: room.roomname,
            roomRate: room.roomrate,
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
module.exports = {getHotelAndRoomDetails, getRoomsByHotelId,editRoombyid, deleteRoombyid,addHotel, getAllHotels, getHotelById, addRoom, getAllRooms, getRoomById,editHotelbyid, deleteHotelbyid};