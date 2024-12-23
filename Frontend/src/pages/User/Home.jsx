import Carousel from 'better-react-carousel'
import React from 'react'
import '../../Css/Home.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import reviews from '../../components/Reviews'
import Carousels from '../../components/Carouselimg'


const Home = () => {

    return (
        <>
            <div className="main_container">
                <div className="hero_box">
                
                    
               
                    <div className="hero_box_first">
                        
                        <h1>Find Your Perfect Stay or Book Your Dream Getaway Today</h1>
                        <input type="text" placeholder="Search for hotels, locations, or deals..."
                        className="w-full max-w-lg px-4 py-2 text-black rounded-md focus:outline-none focus:ring focus:ring-blue-300"/>
                        <p>Discover amazing hotels, resorts, and more in stunning destinations around the world.</p>
                        <button className='services_btn1'>Explore now</button>

                    </div>
                   


                </div>
                <div className="about_section">
                    <div className="about_section_box1">
                        <img src="https://www.kayak.com/news/wp-content/uploads/sites/19/2023/08/THEME_HOTEL_SIGN_FIVE_STARS_FACADE_BUILDING_GettyImages-1320779330-3.jpg" alt="" />

                    </div>
                    <div className="about_section_box2">
                        <h1>Why Choose Us</h1>
                        <p>
                            <li> 24/7 Customer Support</li>
                            <li>Secure Payment Options</li>
                            <li> Exclusive Deals </li>
                            <li>  Free Cancellations</li>
                            <li>Chatbot: For 24/7 assistance with bookings or queries.</li>
                            <li> Currency Converter: Tool to convert room rates into different currencies. </li>
                            <li> Multi-language Support: Dropdown to switch languages dynamically. </li>
                            <li> Saved Searches: Allow users to save their searches or favorite hotels for quick access. </li>
                        </p>

                        <div className="review_box">


                        </div>

                    </div>

                </div>
                <div className="coustomer_section">
                    <div className="services_heading">
                        <p style={{ color: "white" }}>Your Trusted Hotels</p>
                    </div>
                    <div className="carousels">


                        <Carousel cols={5} rows={1} gap={10} loop className='Carousel'>
                            {Carousels.map((carousel) => (
                                <Carousel.Item>
                                    <img src={carousel.image} alt="images" />
                                </Carousel.Item>

                            ))}


                        </Carousel>
                    </div>

                </div>

               
                <div className="bg-gray-100 py-12">
            <h2 className="text-center text-3xl font-semibold text-gray-800 mb-8">Customer Reviews</h2>
            <Carousel cols={3} rows={1} gap={10} loop>
                {reviews.map((review, index) => (
                    <Carousel.Item key={index}>
                        <div className="bg-white shadow-lg rounded-lg p-6 text-center">
                            <span className="text-4xl text-yellow-500 mb-4 inline-block">
                                <FontAwesomeIcon icon={faGoogle} />
                            </span>
                            <p className="text-gray-600 italic mb-4">"{review.reviewText}"</p>
                            <img 
                                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-300"
                                src={review.image} 
                                alt={review.name} 
                            />
                            <h3 className="text-lg font-bold text-gray-700">{review.name}</h3>
                            <p className="text-sm text-gray-500">{review.title}</p>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>


            </div>
        </>
    )
}

export default Home

