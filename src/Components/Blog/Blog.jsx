import React, { useEffect } from 'react';
import './blog.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { BsArrowRightShort } from 'react-icons/bs';
import img from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg';
import img2 from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg';
import img3 from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg';
import img4 from '../../assets/viber_image_2024-05-21_13-27-23-859.jpg';

const Posts = [
  {
    id: 1,
    postImg: img,
    title: 'Mostar',
    desc: 'Mostar'
  },
  {
    id: 2,
    postImg: img2,
    title: 'Mostar',
    desc: 'Mostar'
  },
  {
    id: 3,
    postImg: img3,
    title: 'Mostar',
    desc: 'Mostar'
  },
  {
    id: 4,
    postImg: img4,
    title: 'Mostar',
    desc: 'Mostar'
  }
];

const Blog = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className='blogContainer section'>
      <div className="secContainer">
        <div className="secIntro" data-aos="fade-up" data-aos-duration="2000">
          <h2 className='secTitle'>
            Lorem ipsum dolor sit amet.
          </h2>
          <p data-aos="fade-up" data-aos-duration="2500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates fugit veritatis porro soluta assumenda rem.</p>
        </div>
        <div className="mainContainer grid">
          {Posts.map(({ id, postImg, title, desc }) => (
            <div key={id} className="singlePost grid" data-aos="fade-up" data-aos-duration="2000">
              <div className="imgDiv">
                <img src={postImg} alt={title} />
              </div>
              <div className="postDetails">
                <h3 data-aos="fade-up" data-aos-duration="3000">{title}</h3>
                <p data-aos="fade-up" data-aos-duration="4000">{desc}</p>
                <a href="#" className="flex" data-aos="fade-up" data-aos-duration="4500">
                  <BsArrowRightShort className="icon" />
                  Read more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
