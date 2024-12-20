import React from 'react'
import '../Css/Footer.css'

const Footer = () => {
  return (
   <>

<div className="footer_container">

<div className="first_footer_box">
  <div className="logo_img">
    <a href="/"> Book Hotel Room </a>

  </div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur deserunt delectus rem, harum eveniet quo sed, molestiae aspernatur tempore distinctio, adipisci quaerat molestias vel minima facilis illo nihil illum ipsum rerum velit blanditiis perspiciatis veniam! Molestias voluptatem suscipit, neque quaerat repellendus, dolor totam provident vero alias cum amet dolore magnam!</p>


</div>

<div className="second_footer_box">
  <h2>Important Links</h2>
  <div className="second_footer_box_links">

    <a href=""><p>Turms and Conditions</p></a>
    <a href=""><p>Career</p></a>
    <a href=""><p>Blogs</p></a>
    <a href=""><p>Privecy Policy</p></a>
  </div>


</div>

<div className="third_footer_box">
  <div className="third_footer_box_content">
    <h2>Get in Teach</h2>
    <p>Address:-Biaora MP</p>
    <p>Mail:- care@bookhotelroom.com</p>
    <p>Call:- +91 93406 10359</p>

  </div>


</div>
<div className="forth_footer_box">
  <h2>Subscribe For Updates</h2>
  <div className="forth_footer_box_subscribe">
    <input type="text" name="subscribe" id="subscribe" />
    <button type='submit'>Subscribe Now</button>
  </div>
</div>

</div>
   </>
  )
}

export default Footer