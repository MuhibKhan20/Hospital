import React from 'react';
import Buttons from '../components/Buttons.jsx';
import Carts1 from '../components/Carts1.jsx';
import Card2 from '../components/Card2.jsx';
import DoctorCard from '../components/DoctorCard.jsx';
import "../css/Home.css"


const Home = () => {
  return (

    <>

    <div className="container-fluid position-relative">

      <div className="row">
        <div className="col-12 home_header_image d-flex flex-column align-items-center justify-content-center">

          {/* text  Section */}

          <div className='z-1 text-center d-flex flex-column align-items-center' style={{maxWidth : "70rem"}}>
            <h2 className='fw-bold text-white custom-fs' data-aos="fade-up" >Compassionate Primary And Urgent Care For Pets</h2>
            
            <p className='text-white fs-5' data-aos="fade-up" style={{maxWidth: "55rem"}}>Membership plans starting at $8/month with access to exceptional care, stress-free environments, 24/7 telemedicine, transparent pricing and more.</p>

              {/* buttons Section */}

            <div data-aos="fade-up" className='d-flex flex-column align-items-center flex-sm-row'>
              <button type="button" class="btn btn-lg btn-danger me-3 my-2">Appointment</button>
              <button type="button" class="btn btn-lg btn-outline-light my-2">(+021)345-1234567</button>
            </div>

            {/* Our Card Section  and hiding card on middle Screen*/}

            <div className="container position-absolute  top-100 start-50 translate-middle  d-md-block d-none">
              <div className="row d-flex justify-content-between">
                <Carts1 />
                <Carts1 />
                <Carts1 />
              </div>
            </div>

            {/* Card Section End */}



          </div>
        
        </div>
      </div>
    </div>

    {/* ///////////////////////////////////////////////// */}


    {/* Our Card Section  and hiding card on middle Screen*/}

    <div className="container mt-3 d-block d-md-none">
      <div className="row d-flex flex-column justify-content-between">
        <Carts1 />
        <Carts1 />
        <Carts1 />
      </div>
    </div>

    {/* Card Section End */}


    {/* //////////////////////////////////////////////////// */}


        {/* Our About Section */}

    <div className="container position-relative about-section-margin" >
      <div className="row">

        <div className="col-md-6 bg-white">
          <div>
            <img data-aos="fade-up" className='w-100' src="dog-pet.jpg" alt="pet image" />
          </div>
        </div>

        <div className="col-md-6 p-3">
          <div className='px-lg-5'>
            <span className='text-danger fs-4' data-aos="fade-up"><strong>About</strong></span>

            <h2 className='service-custom-fs' data-aos="fade-up">We’re Different</h2>

            <p className='py-3 text-secondary' data-aos="fade-up">Lorem ipsum dolor sit amet consectetur adipisicing elit. A eveniet non asperiores labore, voluptatibus omnis error fugit, molestiae dolorum fugiat id, accusamus adipisci eaque reprehenderit. Aliquam temporibus vitae quam voluptate pariatur nam dolores consectetur, 
            </p>


            <button type="button" className='btn btn-lg btn-outline-danger'>Learn more</button>
          </div>
        </div>
      </div>

      {/* Easy Apointment cards are hidden */}

      {/* ////////////////////////////////////////////////////// */}

      {/* <div className="container d-none d-lg-block">
        <div className="row w-100 d-flex justify-content-between position-absolute" style={{top : "60%"}}>
          <Card2/>
          <Card2/>
          <Card2/>
          <Card2/>
        </div>
      </div> */}

      {/* ////////////////////////////////////////////////////// */}

    </div>

    {/* End About Section */}

    <div className="container">
        <div className="row w-100 py-5">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>


    {/* Services Section Start */}

    <div className="container mt-3 mt-sm-3 p-3" data-aos="fade-up">

      <div className="row my-md-5 d-flex align-items-center">
      <span className='text-danger fs-4 fw-bold'>Services</span>
        <div className="col-md-4">
          
          <h2 className='service-custom-fs'>What We Do</h2>
        </div>

        <div className="col-md-5 d-flex">
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, maiores! Lorem ipsum dolor sit,</p>
        </div>

        <div className="col-md-3">
          
         <button className='btn btn-outline-danger' type="button">View All</button>
        </div>


      </div>
    </div>

    {/* Doctors Cards */}
    <div className="container" data-aos="fade-up">
      <div className="row">
        <DoctorCard/>
        <DoctorCard/>
        <DoctorCard/>
      </div>
    </div>

    {/* services Section End */}





    

    </>




  );
};

export default Home;
