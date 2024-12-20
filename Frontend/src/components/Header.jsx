import React from 'react'
import '../Css/Header.css'

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="first_container">

                    <div className="first_box">
                        <p>Mail:- care@bookhotelroom.com</p> ||
                        <p>+91 93406 10359</p>

                    </div>
                    <div className="second_box">
                        <div className="icone">

                        </div>

                    </div>
                </div>

                <div className="second_container">
                    <div className="logo_img">
                        <a href="/"> Book Hotel Room </a>

                    </div>
                    <div className="menu_box">
                        <div className="menus">
                            <a href="/">Home</a >
                            <a href="/about">About</a >
                            <a href="/hotels">Hotels</a >
                            <a href="/rooms">Rooms</a >
                            <a href="/contact">Contact</a >
                        </div>

                    </div>
                    <div className="search_box">
                        <form>
                            <div className="search_form">
                                <input type="search" name="search" id="search" />
                                <button type='submit'>Search</button>
                            </div>
                        </form>

                    </div>
                    <div className="login_box">
                        <div className="login_signup">
                            <a href="/login">Login</a >

                        </div>

                    </div>
                </div>

            
            </div>

        </>
    )
}

export default Header