import React, {UseEffect} from 'react'
import './about.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import img1 from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg';
import img2 from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg';
import img3 from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg';

const About = () => {

  
  useEffect(()=>{
    Aos.init({duration:2000})
  },[]) 

  
  return (
 <section className='sectionabout'>
      <div className="secContainer">
        <div className="title">
          WHY HIKING?
        </div>
        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img1} alt="Image 1" />
            <h3>50+ Mountains</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime voluptatibus 
              laudantium error molestiae voluptate veritatis totam cupiditate aperiam fugiat!</p>
          </div>
          <div className="singleItem">
            <img src={img2} alt="Image 2" />
            <h3>100+ Hikings</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime voluptatibus 
              laudantium error molestiae voluptate veritatis totam cupiditate aperiam fugiat!</p>
          </div>
          <div className="singleItem">
            <img src={img3} alt="Image 3" />
            <h3>200+ Customers</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus maxime voluptatibus 
              laudantium error molestiae voluptate veritatis totam cupiditate aperiam fugiat!</p>
          </div>
        </div>
        <div className="Videocard container">
          <div className="cardcontent grid">
            <div className="cardText">
              <h2>Lorem, ipsum dolor sit amet consectetur adipisicing.</h2>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat id veniam harum ipsa architecto, 
                repellat repellendus perferendis minus expedita accusamus.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About

/* aos
treba se dodati  u sva 3  diva singleItem : data-aos ="fade-up " data-aos-duration="2000" 
ali u drugom duration 2500 a u trecem 300

div cardText : data-aos ="fade-right" data-aos-duration="2000"
div cardVideo :  data-aos ="fade-left " data-aos-duration="2000" */
