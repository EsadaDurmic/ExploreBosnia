import React, {UseEffect}  from 'react'
import './blog.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import { BsArrowUpShort } from 'react-icons/bs'
import img from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg'
import img2 from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg'
import img3 from '../../assets/viber_image_2024-05-21_13-27-24-989.jpg'
import img4 from '../../assets/viber_image_2024-05-21_13-27-23-859.jpg'

const Blog = () => {
   useEffect(()=>{
    Aos.init({duration:2000})
  },[])  
  return (
    <div>Blog</div>
  )
}
const Post=[
{
  id:1,
  postImg: img,
  title: 'Mostar',
  desc:'Mostar'
},
{
  id:2,
  postImg: img2,
  title: 'Mostar',
  desc:'Mostar'
},
{
  id:3,
  postImg: img3,
  title: 'Mostar',
  desc:'Mostar'
},
{
  id:4,
  postImg: img4,
  title: 'Mostar',
  desc:'Mostar'
}


]

const Blog = () => {
  return (
    <section className='blogContainer section'>
      <div className="secConatiner">
        <div className="secIntro">
          <h2 className='secTitle'>
            Lorem ipsum dolor sit amet.
          </h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Voluptates fugit veritatis porro soluta assumenda rem.</p>
        </div>
        <div className="mainContainer grid">

          {
            Posts.map( ({id, postImg, title, desc}) =>{
              return (
                <div className="singlePost grid">
                <div className="imgDiv">
                  <img src={postImg}alt={title} />
                </div>
                <div className="postDetails">
                  <h3>
                    {title}
                  </h3>
                  <p>{desc}</p>
                </div>
                <a href="" className="flex">
                  <bsArrowrightshort className="icon">
                    Read more
                  </bsArrowrightshort>
    
                 
                </a>
              </div>

              )
            }
          )
          }
         

        </div>
      </div>

    </section>
  )
}

export default Blog
/* u div h2 secTitle dodati: data-aos ="fade-up " data-aos-duration="2000"

i u <p> dodati: data-aos ="fade-up " data-aos-duration="2500"

u div singlePost grid dodati : data-aos ="fade-up " data-aos-duration="2000" 
i u <h3> (duration =3000) i u <p> (duration =4000) i u <a href> (duration=4500) -2:27video */
export default Blog
