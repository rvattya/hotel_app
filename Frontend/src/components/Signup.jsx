import React, { useState } from 'react'
import '../Css/Signup.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


const Signup = () => {
  const [signupdata,setSignupdata]= useState({
    name: "",
    email:"",
    phone:"",
    password:"",
    role: ""
  });

  const naviget= useNavigate();

const loginsubmit= async(e)=>{
  e.preventDefault();
  try {
     await axios.post("http://localhost:1111/sign-up",signupdata);
    alert ("Admin ragistration was successful");
    naviget ("/");

  } catch (error) {
    console.error(error);
    alert("error found plz try again latter")
    
    
  }
}
  return (
   <>
    <div className="signup">
      <div className="signup_form">

      
        <form onSubmit={loginsubmit} className='signup_form_field'>


          <div className="input_feild">
            <label htmlFor="username">name:-</label>
            <input type="text" name="name" id="name" onChange={(e) => setSignupdata({ ...signupdata, [e.target.name]: e.target.value })}
 required />
          </div>
          <div className="input_feild">
            <label htmlFor="email">Email:-</label>
            <input type="email" name="email" id="email"   onChange={(e) => setSignupdata({ ...signupdata, [e.target.name]: e.target.value })}
 required/>
          </div>
          <div className="input_feild">
            <label htmlFor="phone">Contact Number:-</label>
            <input type="tel" name="phone" id="phone"  onChange={(e) => setSignupdata({ ...signupdata, [e.target.name]: e.target.value })}
 required/>
          </div>
          <div className="input_feild">
            <label htmlFor="role">Role:-</label>
            <input type="text" name="role" id="role"  value={signupdata.role || "user"} onChange={(e) => setSignupdata({ ...signupdata, [e.target.name]: e.target.value })}
 required/>
          </div>
          
          <div className="input_feild">
            <label htmlFor="password">Password:-</label>
            <input type="password" name="password" id="password" onChange={(e) => setSignupdata({ ...signupdata, [e.target.name]: e.target.value })}
 required />
          </div>

          <div className="input_feild">
            <button type='submit'>Sign-Up</button>
          </div>

        </form>
        <div className="login_box">
          <p>Have an Account <Link to="/">Login</Link></p>
        </div>
        </div>
      </div>
   
   </>
  )
}

export default Signup