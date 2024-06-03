import React, {useEffect} from 'react'
import './home.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  
useEffect(()=>{
  Aos.init({duration:2000})
},[])

  return (
  
<section className='home'>
<div className="secContainer container">
  <div className="homeText">
    <h1  data-aos ="fade-up " className="title">
      Unveil the hidden gems of Bosnia & Herzegovina 
    </h1>

    <p data-aos ="fade-up " data-aos-duration ="2500 " className="subTitle">
      You're visiting Bosnia&Herzegovina but don't know where to start? ExploreBosnia is at your service. 
    </p>

  <button  data-aos ="fade-up " data-aos-duration ="3000 " className="btn">
    <a href="#">Explore Now!</a>
  </button>
  </div>

  <div className="homeCard grid">

    <div data-aos ="fade-right " data-aos-duration ="2000 " className="locationDiv">
      <label htmlFor="destination">Destination</label>
      <input type="text" placeholder='eg. Konjic' />
    </div>

    <div data-aos ="fade-right " data-aos-duration ="2500 " className="distDiv">
      <label htmlFor="radius">Radius</label>
      <input type="text" placeholder='eg. 30km' />
    </div>

    <div data-aos ="fade-right " data-aos-duration ="3000 " className="priceDiv">
      <label htmlFor="budget">Budget</label>
      <input type="text" placeholder='eg. 200$' />
    </div>

  <button data-aos ="fade-left" data-aos-duration ="2000 " className='btn search'>Search</button>
  </div>
</div>
</section>
  )
}

export default Home
