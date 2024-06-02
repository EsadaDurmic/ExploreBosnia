import React, {UseEffect}  from 'react'
import './blog.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Blog = () => {
   useEffect(()=>{
    Aos.init({duration:2000})
  },[])  
  return (
    <div>Blog</div>
  )
}
/* u div h2 secTitle dodati: data-aos ="fade-up " data-aos-duration="2000"

i u <p> dodati: data-aos ="fade-up " data-aos-duration="2500"

u div singlePost grid dodati : data-aos ="fade-up " data-aos-duration="2000" 
i u <h3> (duration =3000) i u <p> (duration =4000) i u <a href> (duration=4500) -2:27video */
export default Blog
