import React from 'react';

const Gynaecology = () => {
   return (
    <>
      <style jsx>{`
        .gynaecology_header_image {
          background: linear-gradient(180deg, rgba(40, 76, 170, 0.74) 0%, rgba(3, 5, 29, 0.64) 100%), 
          url("/gynaecology.jpg") no-repeat center center;
          background-size: cover;
          height: 80vh;
          position: relative;
          z-index: 1;
        }
        .gynaecology_header_image::after {
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
        .gynaecology-text {
          text-align: justify;
          margin-top: 3rem; /* Top margin for spacing */
          margin-bottom: 3rem; /* Bottom margin for spacing */
          line-height: 1.6;
        }
      `}</style>
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 gynaecology_header_image d-flex flex-column align-items-center justify-content-center">
            {/* Text Section */}
            <div className='z-1 text-center d-flex flex-column align-items-center' style={{ marginTop: "8rem", '@media (min-width: 576px)': { marginTop: "0.25rem" } }}>
              <h1 className='fw-bold text-white fs-1' data-aos="fade-up">Gynaecology Department and obstetrics</h1>
              <p className='text-white fs-5' data-aos="fade-up" style={{ maxWidth: "55rem" }}>
                Welcome to the Gynaecology Department at Our Hospital. We offer a wide range of specialized services aimed at promoting women's health and well-being, delivered with compassion and expertise.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="container mt-5">
        <div className="featured-events-heading-container">
          <h2 className="mb-4 featured-events-heading">Services Offered by Gynaecology Department</h2>
        </div>
        
      </div>

      {/* Gynaecology Information */}
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="gynaecology-text">
              <p>
                Our Gynaecology Department provides comprehensive care for women across all stages of life. We specialize in the diagnosis and treatment of various gynaecological conditions and offer advanced surgical and non-surgical interventions.
              </p>
              <h3 className='mb-4 featured-events-heading'>Procedures performed by the Gynaecology Department:</h3>
              <table class="table table-striped">
<tbody>
<tr>
<td scope="row">Menopause</td>
<td scope="row">Women’s Health Problems</td>
<td scope="row">Urinary Incontinence</td>
</tr>
<tr>
<td scope="col">Ovarian Cysts and Tumors</td>
<td scope="col">Removal of Fibroids</td>
<td scope="col">Infertility, Lysis of Adhesions</td>
</tr>
<tr>
<td scope="row">Endometriosis</td>
<td scope="row">Intraperitonal Hemorrhage</td>
<td scope="row">Polycystic Ovaries</td>
</tr>
<tr>
<td scope="col">Pelvic Infection</td>
<td scope="col">Laparoscopic Sterilization</td>
<td scope="col">Hysterectomy</td>
</tr>
<tr>
<td scope="col">Extrauterine Gravidity</td>
<td scope="col">Ultrasound Scan</td>
<td scope="col">Pelvic Lymph Nodes</td>
</tr>
<tr>
<td scope="col">Minimal Invasive Surgery</td>
<td scope="col">Laparoscopic Sterilization</td>
<td scope="col">General Gynecology</td>
</tr>
<tr>
<td scope="col">General and High-Risk Obstetrics</td>
<td scope="col">Pre-Invasive Lesions of the Cervix</td>
<td scope="col">Infertility</td>
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

export default Gynaecology;
