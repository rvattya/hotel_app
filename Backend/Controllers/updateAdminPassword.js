const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const UserModel = require('../Models/UserModel'); // Adjust the path

const updateAdminPassword = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect("mongodb://localhost:27017/hotelapp").then(()=>{console.log("database is connected")
        }).catch(()=>{console.log("somthing not file got error")
        });
        console.log('MongoDB connected successfully');

        const admin = await UserModel.findOne({ email: "admin.rahul@gmail.com" });
        if (!admin) {
            console.log("Admin not found");
            return;
        }

        const salt = await bcrypt.genSalt(10);
        admin.password = await bcrypt.hash("123456", salt);
        await admin.save();

        console.log("Admin password updated successfully");
    } catch (error) {
        console.error("Error updating admin password:", error.message);
    } finally {
        mongoose.connection.close(); // Close the connection after operation
    }
};

updateAdminPassword();
