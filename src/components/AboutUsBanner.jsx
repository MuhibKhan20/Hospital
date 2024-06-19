import React from 'react';

const AboutUsBanner = () => {
  return (
    <>
      <div className="about-us-banner ">
        <div className="content">
          <div className="title">
            <h1><strong>About Us</strong></h1>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <p>

                  Farooq Hospital empathizes with patients and their families, prioritizing their needs over individual solutions. We provide a comforting environment where you can achieve your health goals. Learn more about our programs in the Visitor and Patient Guidelines.
                </p>
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

export default AboutUsBanner;
