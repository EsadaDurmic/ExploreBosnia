import React,{UseEffect}  from 'react';
import './offers.css';
import { MdAirportShuttle, MdKingBed, MdBathtub, MdLocationOn } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import image from '../../assets/viber_image_2024-05-21_13-27-23-859.jpg';

import Aos from 'aos'
import 'aos/dist/aos.css'

const offers = [
  {
    id: 1,
    imgSrc: image,
    destTitle: 'Sarajevo',
    location: 'Sarajevo',
    price: '150KM',
  },
  {
    id: 2,
    imgSrc: image,
    destTitle: 'Sarajevo',
    location: 'Sarajevo',
    price: '150KM',
  },
  {
    id: 3,
    imgSrc: image,
    destTitle: 'Sarajevo',
    location: 'Sarajevo',
    price: '150KM',
  },
];

const Offers = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div data-aos ="fade-up " data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offer</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, officia dignissimos. Doloremque possimus rerum exercitationem!</p>
        </div>
        <div className="mainContent grid">
          {offers.map(({ id, imgSrc, destTitle, location, price }) => {
            return (
              <div  data-aos ="fade-up " data-aos-duration="3000" key={id} className="singleOffer">
                <div className="destImage">
                  <img src={imgSrc} alt={destTitle} />
                  <span className="discount">30% Off</span>
                </div>
                <div className="offerBody">
                  <div className="price flex">
                    <h4>{price}</h4>
                    <span className="status">For Rent</span>
                  </div>
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon" />
                      <small>2 beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon" />
                      <small>2 baths</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon" />
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon" />
                      <small>Shuttle</small>
                    </div>
                  </div>
                  <div className="location flex">
                    <MdLocationOn className="icon" />
                    <small>Lorem ipsum dolor sit amet. {location}</small>
                  </div>
                  <button className="btn flex">
                    See details
                    <BsArrowRightShort className="icon" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Offers;
