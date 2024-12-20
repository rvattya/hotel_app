import axios from 'axios';
import '../Css/Login.css'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [logindata, setLogindata] = useState({
        phone: "",
        password: ""
    });
    const naviget = useNavigate();
    
        const adminlogin = async (e) => {
            e.preventDefault();
            try {
                const responce = await axios.post("http://localhost:1111/login", logindata);
                localStorage.setItem("token", responce.data.token);
                naviget("/admin");
            } catch (error) {
                console.error(error);z
                alert("Invalid login credentials");
    
            }
    
        }

    

    

    return (
        <>
            <div className="login">

                <div className="login_form">
                    <form onSubmit={adminlogin} className='login_form_field' >

                        <div className="input_field">
                            <label htmlFor="email">Contact Number:-</label>
                            

                            <input type="email" name="email" id="email" required onChange={(e) => setLogindata({ ...logindata, [e.target.name]: e.target.value })}
                            />
                        </div>

                        <div className="input_field">
                            <label htmlFor="password">Password:-</label>
                            <input type="password" name="password" id="password" required onChange={(e) => setLogindata({ ...logindata, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div className="input_field">
                            <button type='submit'>Login</button>
                        </div>

                    </form>
                    <div className="signup_field">
                        <p> Don`t have Account <span><a href="/sign-up">Sign Up</a></span></p>
                    </div>


                </div>


            </div>

        </>
    )
}

export default Login