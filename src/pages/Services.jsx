import React from 'react'
import "../css/Services.css"
import DoctorCard from '../components/DoctorCard.jsx'
import Testimonials from '../components/Testimonials.jsx'

const Services = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 services_header-image position-relative">
            <h2 className='services_header-fs position-absolute top-50 start-50 translate-middle text-white fw-bold text-center'>Our Services</h2>
          </div>
        </div>
      </div>


      <div className="container">

        <div className="row my-md-5 d-flex align-items-center py-4">
        <span className='text-danger fs-4 fw-bold'>Services</span>
          <div className="col-md-6 col-lg-5">
            
            <h2 className='service-custom-fs'>What We Do</h2>
          </div>

          <div className="col-md-6 col-lg-6 d-flex">
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, maiores! Lorem ipsum dolor sit,</p>
          </div>

        </div>

      </div>


         {/* Doctors Cards */}

      <div className="container">
        <div className="row">
          <DoctorCard/>
          <DoctorCard/>
          <DoctorCard/>
          <DoctorCard/>
          <DoctorCard/>
          <DoctorCard/>
        </div>

      </div>


      {/* Creating Banner */}

      <div className="container">
        <div className="row">
          <div className="col-12 services_schedule-meeting p-sm-5 d-flex align-items-center">

            <div className='d-flex align-items-center w-100 row'>


              <div className='col-lg-8'>
                <span className='text-warning fw-bold ms-3'>SCHEDULES</span>
                <h2 className='text-white services_schedule-meeting-fs fw-bold text-center'>Better Care When You Need</h2>

                <p className='text-white ps-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.  Esse nobis consequuntur officiis quam nam perferendis eos saepe, earum laudantium illum?</p>

              </div>

              <div className='col-lg-4 d-flex justify-content-center align-items-center'>
                <button type='button'  className='btn btn-warning'>Schedule meeting</button>
              </div>


              

            </div>

          </div>
        </div>
      </div>

      {/* End Banner */}



      <div className="container">

        <div className="row">

          <div className="col-lg-7">
            <span className='text-danger fw-bold fs-4'>Testimonials</span>
            <h3 className='service-custom-fs'>What People Say</h3>
            <p className='pb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.<br/>Laboriosam, accusamus!
            </p>
            <Testimonials bgColor="#222769" headingColor = "#F7D285" textColor="text-white" padding="p-4" />
          </div>
          <div className="col-lg-5">

          <Testimonials bgColor="white" shadow="shadow" headingColor = "black" textColor="text-black" padding="p-4" />

          <Testimonials bgColor="white" shadow="shadow" headingColor = "black" textColor="text-black" padding="p-4" />


          </div>
        </div>
        
      </div>


    
    </>
  )
}

export default Services
