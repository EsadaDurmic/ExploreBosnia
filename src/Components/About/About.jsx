import React, {UseEffect} from 'react'
import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const About = () => {

  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]) 

  
  return (
    <div>About</div>
  )
}

export default About

/* aos
treba se dodati  u sva 3  diva singleItem : data-aos ="fade-up " data-aos-duration="2000" 
ali u drugom duration 2500 a u trecem 300

div cardText : data-aos ="fade-right" data-aos-duration="2000"
div cardVideo :  data-aos ="fade-left " data-aos-duration="2000" */
