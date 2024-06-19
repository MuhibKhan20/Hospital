import React from 'react';

const Generalsurgery = () => {
   return (
    <>
      <style jsx>{`
        .generalsurgery_header_image {
          background: linear-gradient(180deg, rgba(40, 76, 170, 0.74) 0%, rgba(3, 5, 29, 0.64) 100%), 
          url("/generalsurgery.jpg") no-repeat center center;
          background-size: cover;
          height: 80vh;
          position: relative;
          z-index: 1;
        }
        .generalsurgery_header_image::after {
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
        .card-text {
          margin-top: 0;
        }
        @media (max-width: 576px) {
          .fs-1 {
            font-size: 3rem; /* Increase font size for small devices */
          }
        }
        .featured-events-heading-container {
          text-align: center;
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
          bottom: -10px; /* Adjust this value to position the underline */
          width: 100%;
          height: 3px; /* Adjust this value for the thickness of the underline */
          background-color: red;
        }
        .generalsurgery-text {
          text-align: justify;
          margin-top: 3rem; /* Top margin for spacing */
          margin-bottom: 3rem; /* Bottom margin for spacing */
          line-height: 1.6;
        }
      `}</style>
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 generalsurgery_header_image d-flex flex-column align-items-center justify-content-center">
            {/* Text Section */}
            <div className='z-1 text-center d-flex flex-column align-items-center' style={{ marginTop: "8rem", '@media (min-width: 576px)': { marginTop: "0.25rem" } }}>
              <h1 className='fw-bold text-white fs-1' data-aos="fade-up">General Surgery Department</h1>
              <p className='text-white fs-5' data-aos="fade-up" style={{ maxWidth: "55rem" }}>
                Welcome to the General Surgery Department at Our Hospital. Our department is dedicated to providing comprehensive surgical care across a wide range of specialties, ensuring compassionate treatment and optimal outcomes for all patients.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="container mt-5">
        <div className="featured-events-heading-container">
          <h2 className="mb-4 featured-events-heading">About General Surgery</h2>
        </div>
        
      </div>

      {/* General Surgery Information */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="generalsurgery-text">
              <p>
                The General Surgery Department at Our Hospital offers advanced surgical procedures and treatments for a variety of medical conditions. Our team of experienced surgeons and healthcare professionals strive to deliver high-quality, patient-centered care using state-of-the-art technology and innovative surgical techniques.
              </p>
              <p>
                We are committed to excellence in surgical education, research, and clinical practice to provide the best possible outcomes for our patients.
              </p>
              <h3 className='mb-4 featured-events-heading'>Services provided by the General Surgery Department:</h3>
              <table className="table table-striped">
                <tbody>
                  <tr>
                  <td scope="row">Abdominal Surgery</td>
                    <td scope="row">Breast Surgery</td>
                    <td scope="row">Endocrine Surgery</td>
                  </tr>
                  <tr>
                    <td scope="row">Colorectal Surgery</td>
                    <td scope="row">Hepatobiliary Surgery</td>
                    <td scope="row">Pediatric Surgery</td>
                  </tr>
                  <tr>
                    <td scope="row">Plastic Surgery</td>
                    <td scope="row">Thoracic Surgery</td>
                    <td scope="row">Vascular Surgery</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Generalsurgery;
