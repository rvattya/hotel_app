const express = require('express');
const router = express.Router();
const { signup, adminlogin, updateUser, deleteUser, getUserById, getalluser } = require('../Controllers/AdminController');
const { addHotel, getAllHotels, getHotelById, addRoom, getAllRooms, getRoomById } = require('../Controllers/PropertyController');
const { createBooking, getAllBookings, getBookingById, cancelBooking } = require('../Controllers/BookingController');
const {adminAuth}= require('../Middleweres/adminAuth')
const {updateUserRole} = require('../Controllers/UserController')



//for signup routes both admin and user
router.post('/add-user', adminAuth,  signup);
router.post('/admin-login', adminlogin);


// get all user and manage by admin
router.get('/all-users', adminAuth, getalluser)
router.get('/user/:id',adminAuth, getUserById)
router.put('/user/:id',adminAuth, updateUser)
router.delete('/user/:id',adminAuth, deleteUser)

//for hotals and room add 
router.post('/add-hotel',adminAuth, addHotel)
router.get('/all-hotels',adminAuth, getAllHotels)
router.get('/hotels/:id', adminAuth,getHotelById)
router.post('/add-room', adminAuth, addRoom)
router.get('/all-rooms',adminAuth, getAllRooms)
router.get('/rooms/:id',adminAuth, getRoomById)

//admin get booking
router.post('/add-booking',adminAuth, createBooking)
router.get('/all-bookings',adminAuth, getAllBookings)
router.get('/bookings/:id',adminAuth, getBookingById)
router.delete('/cancle', adminAuth,cancelBooking)

//new router
router.post('/update-role',adminAuth, updateUserRole)


module.exports = router
