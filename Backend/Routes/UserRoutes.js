const express= require('express');
const router= express.Router();
const {signup,login}= require('../Controllers/UserController');
const {createBooking, getAllBookings, getBookingById, cancelBooking}= require('../Controllers/BookingController')
const { getAllHotels, getHotelById, getAllRooms, getRoomById } = require('../Controllers/PropertyController');
const {userAuth}= require('../Middleweres/userAuth');


//for signup routes for user
router.post('/sign-up', signup);
router.post('/login',login);

//create booking by user
router.post('/booking',userAuth, createBooking)
router.get('/bookings',userAuth,getAllBookings)
router.get('/bookings/:id', userAuth,getBookingById)
router.delete('/cancle',userAuth, cancelBooking)



// for showing all hotels 
router.get('/hotels',getAllHotels)
router.get('/rooms',getAllRooms)
router.get('/hotels/:id',userAuth,getHotelById)
router.get('/rooms/:id',userAuth,getRoomById)
router.get('/user-test',userAuth)

module.exports= router
