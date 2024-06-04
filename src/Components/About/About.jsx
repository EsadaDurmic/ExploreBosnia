import React, { useEffect } from 'react';
import './about.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img1 from '../../assets/viber_image_2024-05-21_13-27-09-269.jpg';
import img2 from '../../assets/viber_image_2024-05-21_13-27-13-224.jpg';
import img3 from '../../assets/viber_image_2024-05-21_13-27-14-795.jpg';

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='sectionabout'>
      <div className="secContainer">
        <div className="title" data-aos="fade-up" data-aos-duration="2000">
          ABOUT US
        </div>

        <div className="Videocard container">
          <div className="cardcontent grid">
            <div className="cardText" data-aos="fade-right" data-aos-duration="2000">
              <h2>Welcome to ExploreBosnia, your ultimate guide to discovering the hidden gems of Bosnia and Herzegovina.</h2>
              <p>Our mission is to showcase the rich cultural heritage, stunning landscapes, and vibrant local experiences that make this country a unique travel destination. Our website offers comprehensive guides, travel tips, and personalized recommendations to help you plan your perfect trip. From must-see attractions and hidden spots to local events and practical advice, ExploreBosnia is your go-to resource for all things Bosnia and Herzegovina. Experience the beauty, diversity, and charm of Bosnia and Herzegovina - let's explore together!</p>
            </div>
          </div>
        </div>
        <div className="mainContent container grid">
          <div className="singleItem" data-aos="fade-up" data-aos-duration="2000">
            <img src={img1} alt="Image 1" />
            <h3>1000+ Satisfied Users</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime voluptatibus 
              laudantium error molestiae voluptate veritatis totam cupiditate aperiam fugiat!</p>
          </div>
          <div className="singleItem" data-aos="fade-up" data-aos-duration="2500">
            <img src={img2} alt="Image 2" />
            <h3>50+ Destinations</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime voluptatibus 
              laudantium error molestiae voluptate veritatis totam cupiditate aperiam fugiat!</p>
          </div>
          <div className="singleItem" data-aos="fade-up" data-aos-duration="3000">
            <img src={img3} alt="Image 3" />
            <h3>Unique Traditional Experiences</h3>
           
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
