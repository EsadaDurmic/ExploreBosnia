import React from 'react'
import './app.css'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbarr/Navbarr'
import Blog from './Components/Blog/Blog'
import Footer from './Components/Footer/Footer'
import Popular from './Components/Popular/Popular'
import Offers from './Components/Offers/Offers'

const App = () => {
  return (
   <>
   <Navbar/>
   <Home/>
   <Popular/>
   <Offers/>
   <About/>
   <Blog/>
   <Footer/>
   </>
  )
}

export default App