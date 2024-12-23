import React from 'react';
import logo from '../assets/images/logoimg.png'
import { Link } from 'react-router-dom'
import '../Css/Footer.css'



const Footer = () => {
  return (
    <>
      <div className=" footer-box bg-blue-900 text-white p-8">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {/* First Footer Box */}
          <div>
            <div className="mb-4">
               <Link to="/"> <img src={logo} alt="" className=' h-[60px] w-[220px]' /></Link>
              
            </div>
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur deserunt delectus rem, harum eveniet quo sed, molestiae aspernatur tempore distinctio, adipisci quaerat molestias vel minima facilis illo nihil illum ipsum rerum velit blanditiis perspiciatis veniam! Molestias voluptatem suscipit, neque quaerat repellendus, dolor totam provident vero alias cum amet dolore magnam!
            </p>
          </div>

          {/* Second Footer Box */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Important Links</h2>
            <div className="flex flex-col space-y-2">
              <a href="#" className="text-white no-underline hover:text-yellow-400">
                Terms and Conditions
              </a>
              <a href="#" className="text-white no-underline hover:text-yellow-400">
                Career
              </a>
              <a href="#" className="text-white no-underline hover:text-yellow-400">
                Blogs
              </a>
              <a href="#" className="text-white no-underline hover:text-yellow-400">
                Privacy Policy
              </a>
            </div>
          </div>

          {/* Third Footer Box */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
            <div className="text-white text-sm space-y-2">
              <p>Address: Biaora MP</p>
              <p>Email: care@bookhotelroom.com</p>
              <p>Call: +91 93406 10359</p>
            </div>
          </div>

          {/* Fourth Footer Box */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Subscribe For Updates</h2>
            <div className="flex space-x-2">
              <input
                type="text"
                name="subscribe"
                id="subscribe"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-4 py-2 rounded-lg"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
