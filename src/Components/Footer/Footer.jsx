import React, {UseEffect} from 'react'
import './footer.css'

import { ImFacebook } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa";

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className ="Footer">
    <div className="secContainer container grid">
    <div data-aos ="fade-up " data-aos-duration="2000"  className="logoDiv">

      <div data-aos ="fade-up " data-aos-duration="2000"  className="footerLogo">
        <a href="#" className="logo flex">
       <h1 className='flex'><nesto className="icon"/> 
       Explore </h1> 
       </a>
      </div>

      <div data-aos ="fade-up " data-aos-duration="3000"  className="socialsflex">
    <ImFacebook className="icon"/>
    <BsTwitter className="icon"/>
    <FaInstagram className="icon"/>
    </div>

    </div>
    <div data-aos ="fade-up " data-aos-duration="3000"  className="footerlinks">
      <span className="linktitle">
      Information
      </span>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Explore</a>
      </li>
      <li>
        <a href="#">Travel</a>
      </li>
      <li>
        <a href="#">Blog</a>
      </li>
    </div>

    <div data-aos ="fade-up " data-aos-duration="4000"  className="footerlinks">
      <span className="linktitle">
      Helpful links
      </span>
      <li>
        <a href="#">Destination</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
      <li>
        <a href="#">Travel & Condition</a>
      </li>
      <li>
        <a href="#">Privacy</a>
      </li>
    </div>
    
    <div data-aos ="fade-up " data-aos-duration="5000"  className="footerlinks">
      <span className="linktitle">
      Contact us
      </span>
    <span className="phone">+387 555 555</span>
    <span className="email">explorebosnia@gmail.com</span>
    </div>

      </div>
    </div>
  )
}

export default Footer
