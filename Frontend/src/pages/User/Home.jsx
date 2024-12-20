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

                        <p>Discover amazing hotels, resorts, and more in stunning destinations around the world.</p>
                        <button className='services_btn1'>Explore now</button>

                    </div>
                    {/*<div className="hero_box_second">
            <img src="https://vattyastech.com/wp-content/uploads/2024/11/Body-7.png" alt="" />
          </div> */}


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

                <div className="review_section">
                    <Carousel cols={3} rows={1} gap={10} loop >
                        {reviews.map((review, index) => (
                            <Carousel.Item key={index}>
                                <div className="review_section_box">
                                    <span><FontAwesomeIcon icon={faGoogle} /></span>
                                    <p>{review.reviewText}</p>
                                    <img src={review.image} alt={review.name} />
                                    <h2>{review.name}</h2>
                                    <p>{review.title}</p>
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