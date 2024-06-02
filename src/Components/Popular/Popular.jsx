import React, {useEffect} from 'react'
import './popular.css'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import { BsDot } from "react-icons/bs";

import img from '../../assets/sarajevo-bascarsija.jpg';
import img2 from '../../assets/146.jpg';
import img3 from '../../assets/banjaluka.jpg';
import img4 from '../../assets/japodski.jpg';
import img5 from '../../assets/radimlja.jpg';
import img6 from '../../assets/aladza.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
{
  id:1,
  imgSrc:img,
  destTitle:'Baščaršija',
  location:'Sarajevo',
},
{
  id:2,
  imgSrc:img2,
  destTitle:'Pliva Waterfall',
  location:'Jajce',
},
{
  id:3,
  imgSrc:img3,
  destTitle:'Cathedral of Christ the Savior',
  location:'Banjaluka',
},
{
  id:4,
  imgSrc:img4,
  destTitle:'Japod Islands',
  location:'Bihać',
},
{
  id:5,
  imgSrc:img5,
  destTitle:'Radimlja Necropolis',
  location:'Stolac',
},
{
  id:6,
  imgSrc:img6,
  destTitle:'Aladža Mosque',
  location:'Foča',
},
]
const Popular = () => {

   useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  
  return (
    <section className='popular section container'>
<div className="secContainer">
  <div className="secHeader flex">
    <div data-aos ="fade-right " data-aos-duration ="2500 " className="textDiv">
      <h2 className="secTitle">
        Currently Popular
      </h2>
        <p>
          From historical landmarks to natural wonders, this wonderful country is rich with various must-visit destinations.   
        </p>
    </div>
    <div data-aos ="fade-left " data-aos-duration ="2500 " className="iconsDiv flex">
    <BsArrowLeft className='icon leftIcon' />
    <BsArrowRight className='icon rightIcon'/>
    </div>
  </div>

    <div className="mainContent grid">
     {
      Data.map(({id, imgSrc, destTitle, location, grade})=>{
        return(
          <div  data-aos ="fade-up " className="singleDestination">
            <div className="destImage">

              <img src={imgSrc} alt="Image title" />

              <div className="overlayInfo">
                <h3>{destTitle}</h3>
                <p>
                  {location}
                </p>

                <BsArrowRight className='icon'/>
              </div>
            </div>

            <div className="destFooter">
              <div className="number">
                0{id}
              </div>
              <div className="destText flex">
                <h6>
                  {destTitle}
                </h6>
              </div>
            </div>
          </div>
        )
      })
     }
    </div>
</div>
    </section>
  )
}

export default Popular
