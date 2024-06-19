import React from 'react';

const Ourdoctorsbanner = () => {
  return (
    <>
      <div style={{
        margin: "0",
        padding: "0",
        backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('/ourdoctors.jpg')`, // Added linear gradient for blue background shade
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundAttachment: "fixed",
        height: "600px",
        color: "#fff", // Set text color to white
      }}>
        <div>
          <div className="about-us-banner">
            <div className="content">
              <div className="title">
                <h1 style={{ fontSize: "40px" }}><strong>Our Doctors</strong></h1> {/* Increased font size */}
              </div>
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10 col-lg-8">
                    <p style={{ fontSize: "20px" }}> {/* Increased font size */}
                      Meet Our Doctors: Get acquainted with our dedicated team of healthcare professionals, each committed to delivering expert care and personalized attention to every patient.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          .about-us-banner {
            display: flex;
            justify-content: center;
            padding: 20px;
          }
          .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-top: 200px;
          }
          .title h1 {
            margin-bottom: 20px;
          }
          .container {
            width: 100%;
          }
          .row {
            width: 100%;
          }
          .col-12 {
            padding: 0 15px;
          }
          .about-us-banner p {
            margin: 20px 0;
            font-size: 18px;
          }

          @media (max-width: 768px) {
            .content {
              margin-top: 50px;
            }
            .about-us-banner p {
              font-size: 16px;
              margin: 20px 15px;
            }
          }

          @media (max-width: 576px) {
            .content {
              margin-top: 150px;
            }
            .about-us-banner p {
              font-size: 14px;
              margin: 20px 10px;
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Ourdoctorsbanner;
