import React, { useEffect } from 'react';
import './offers.css';
import { MdAirportShuttle, MdKingBed, MdBathtub, MdLocationOn } from 'react-icons/md';
import { FaWifi } from 'react-icons/fa';
import { BsArrowRightShort } from 'react-icons/bs';
import img from '../../assets/hotel1.jpg';
import img2 from '../../assets/hotel2.jpg';
import img3 from '../../assets/hotel3.jpg';

import Aos from 'aos';
import 'aos/dist/aos.css';

const offers = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Hotel Baškuća',
    location: 'Jekovac 2, Sarajevo',
    price: '200KM',
  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Villa Floris',
    location: 'Fra Ambre Miletića 50, Mostar',
    price: '45KM',
  },
  {
    id: 3,
    imgSrc: img3,
    destTitle: 'Motel Almy',
    location: 'Vranducka bb, Zenica',
    price: '70KM',
  },
];

const Offers = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='offer container section'>
      <div className="secContainer">
        <div data-aos="fade-up" data-aos-duration="2000" className="secIntro">
          <h2 className="secTitle">Special Offers</h2>
          <p>Looking for last minute accomodation? Our partner site, Booking.com, has got you covered. Catch the discount before it's too late!</p>
        </div>
        <div className="mainContent grid">
          {offers.map(({ id, imgSrc, destTitle, location, price }) => (
            <div data-aos="fade-up" data-aos-duration="3000" key={id} className="singleOffer">
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
                  <small>{location}</small>
                </div>
                <button className="btn flex">
                  See details
                  <BsArrowRightShort className="icon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
