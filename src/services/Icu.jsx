import React from 'react';
import  Icuservices  from "../components/Icuservices.jsx";


const Icu = () => {
 

  return (
    <>
      <style jsx>{`
        .homemedical_header_image {
          background: linear-gradient(180deg, rgba(40, 76, 170, 0.74) 0%, rgba(3, 5, 29, 0.64) 100%), 
                      url("/icu.jpg") no-repeat center center;
          background-size: cover;
          height: 80vh;
          position: relative;
          z-index: 1;
        }
        .homemedical_header_image::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: -1;
        }
        .z-1 {
          z-index: 1;
        }
        .fw-bold {
          font-weight: bold;
        }
        .text-white {
          color: #fff;
        }
        .fs-1 {
          font-size: 2.5rem;
        }
        .fs-5 {
          font-size: 1.25rem;
        }
        .btn {
          padding: 0.75rem 1.25rem;
        }
        .card {
          border: 1px solid #ddd;
          border-radius: 5px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
        }
        .card-img-top {
          width: 100%;
          height: auto;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        .card-body {
          padding: 15px;
        }
        .card-title {
          font-size: 1.2rem;
          margin-bottom: 0;
        }
        .featured-events-heading-container {
          display: flex;
          justify-content: center;
          margin-bottom: 2px;
        }
        .featured-events-heading {
          display: inline-block;
          position: relative;
        }
        .featured-events-heading::after {
          content: '';
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: -2px; /* Adjusted to 2px margin-bottom */
          width: 100%;
          height: 3px; /* Thickness of the underline */
          background-color: red;
        }
        .paeds-text {
          text-align: justify;
          margin-top: 3rem; /* Top margin for spacing */
          margin-bottom: 3rem; /* Bottom margin for spacing */
          line-height: 1.6;
        } 
       
      `}</style>
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 homemedical_header_image d-flex flex-column align-items-center justify-content-center">
            {/* Text Section */}
            <div className='z-1 text-center d-flex flex-column align-items-center' style={{ marginTop: "8rem" }}>
              <h2 className='fw-bold text-white fs-1' data-aos="fade-up">ICU</h2>
              <p className='text-white fs-5' data-aos="fade-up" style={{ maxWidth: "55rem" }}>
              Our ICU (Intensive Care Unit) provides critical care for severely ill patients.
              </p>
              {/* Buttons Section */}
              <div data-aos="fade-up" className='d-flex flex-column align-items-center flex-sm-row'>
                
              </div>
            </div>
          </div>
        </div>
      </div>
        <Icuservices/>
      {/* Featured Departments Section */}
      
      {/* General Surgery Information */}
     </>

    
  );
};

export default Icu;
