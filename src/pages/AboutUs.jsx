import React from 'react';
import AboutUsBanner from '../components/AboutUsBanner.jsx';
import AboutUscard from '../components/AboutUscard.jsx';
import "../css/AboutUs.css"
import Card2 from '../components/Card2.jsx';

const AboutUs = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className='col-12 about_header_image d-flex align-items-center justify-content-center'>
            <h2 className='fs-1 fw-bold text-white'>About Us</h2>
          </div>
        </div>
      </div>

      <div className="container position-relative about-section-margin" >
        <div className="row">

          <div className="col-md-6 bg-white">
            <div>
              <img data-aos="fade-up" className='w-100' src="small-about-us-image.jpg" alt="pet image" />
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

      </div>


      <div className="container">
        <div className="row w-100 py-5">
          <Card2 />
          <Card2 />
          <Card2 />
          <Card2 />
        </div>
      </div>




      <div className='container'>
        <div className="row">

          <AboutUscard />
          <AboutUscard />
          <AboutUscard />
          <AboutUscard />
          <AboutUscard />
          <AboutUscard />


        </div>
      </div>
    </>
  );
}

export default AboutUs;
