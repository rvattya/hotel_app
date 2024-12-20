const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
hotelname: { type: mongoose.Schema.Types.ObjectId, ref: 'hotel', required: true },
    roomname: { type: String  },
    roomrate: { type: Number  },
    capacity: { type: Number  },
    filenames: [{ type: String }],
    aboutroom: { type: String },
},{ timestamps: true });

const Room = mongoose.model('Room', roomSchema);

module.exports = Room;