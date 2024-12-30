const express= require('express');
const router= express.Router();
const {signup,login,userprofile,editprofile, logout}= require('../Controllers/UserController');
const {createBooking, getAllBookings, getBookingById, cancelBooking}= require('../Controllers/BookingController')
const {getHotelAndRoomDetails, getAllHotels, getHotelById, getAllRooms, getRoomById,getRoomsByHotelId } = require('../Controllers/PropertyController');
const {userAuth}= require('../Middleweres/userAuth');


//for signup routes for user
router.post('/sign-up', signup);
router.post('/login',login);
router.get('/profile',userAuth,userprofile);
router.get('/logout',userAuth,logout);
router.put('/edit-profile',userAuth,editprofile);
router.get('/hotel-room-details',userAuth, getHotelAndRoomDetails);


//create booking by user
router.post('/booking',userAuth, createBooking)
router.get('/bookings',userAuth,getAllBookings)
router.get('/bookings/:id', userAuth,getBookingById)
router.delete('/cancle',userAuth, cancelBooking)



// for showing all hotels 
router.get('/hotels',getAllHotels)
router.get('/rooms',getAllRooms)
router.get('/hotels/:id',userAuth,getHotelById)
router.get('/hotels/:Id/rooms',userAuth,getRoomsByHotelId)

router.get('/rooms/:id',userAuth,getRoomById)
router.get('/user-test',userAuth)

module.exports= router
