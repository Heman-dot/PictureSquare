import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

import IMG from './../../assets/canvas.png'

const LandingPage = () => {
  return (
    <>
    <Navbar />
    <div className='h-screen bg-gray-800 flex items-center justify-center'>
      Content
      <img src={IMG} alt="" />
    </div>
    <Footer />
    </>
  )
}

export default LandingPage
