import React from 'react'
import Navbar from '../Navbar/Navbar';

const LandingHomePage = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='w-100 bg-info d-flex justify-content-center align-items-center text-white fa-5x' id='section1' style={{ height: "100vh" }}>
            Home
          </div>
          <div className='w-100 bg-success d-flex justify-content-center align-items-center text-white fa-5x' id='section2' style={{ height: "100vh" }}>
            About
          </div>
          <div className='w-100 bg-info d-flex justify-content-center align-items-center text-white fa-5x' id='section3' style={{ height: "100vh" }}>
            Job Listing
          </div>
          <div  className='w-100 bg-success d-flex justify-content-center align-items-center text-white fa-5x' id='section4' style={{ height: "100vh" }}>
            Dashboard
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingHomePage;