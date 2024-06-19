import React, { useState, useEffect } from 'react';
import { getAllDepartments } from '../apis/Apisdepartments';
import { Link } from 'react-router-dom';
const AllamaIqbal = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const allDepartments = await getAllDepartments();
        setDepartments(allDepartments.slice(0, 4)); // Get only the first 4 departments
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  return (
    <>
      <style jsx>{`
        .iqbal_header_image {
          background: linear-gradient(180deg, rgba(40, 76, 170, 0.74) 0%, rgba(3, 5, 29, 0.64) 100%), 
          url("/iqbaltown.jpg") no-repeat center center;
          background-size: cover;
          height: 80vh;
          position: relative;
          z-index: 1;
        }
        .iqbal_header_image::after {
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
      `}</style>
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 iqbal_header_image d-flex flex-column align-items-center justify-content-center">
            {/* Text Section */}
            <div className='z-1 text-center d-flex flex-column align-items-center' style={{ marginTop: "8rem", '@media (min-width: 576px)': { marginTop: "0.25rem" } }} >'
              <h2 className='fw-bold text-white fs-1' data-aos="fade-up">Iqbal Town Branch</h2>
              <p className='text-white fs-5' data-aos="fade-up" style={{ maxWidth: "55rem" }}>
                The Iqbal Town Branch of Farooq Hospital is renowned for its comprehensive medical facilities and expert healthcare professionals, ensuring top-notch care for patients in the heart of the city.
              </p>
              {/* Buttons Section */}
              <div data-aos="fade-up" className='d-flex flex-column align-items-center flex-sm-row'>
                <Link to="/appointment"> <button type="button" className="btn btn-lg btn-danger me-3 my-2">Appointment</button> </Link>
                <button type="button" className="btn btn-lg btn-outline-light my-2">(+021)345-1234567</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Departments Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">Featured Departments</h2>
        <div className="row">
          {departments.map(department => (
            <div key={department.id} className="col-md-3 mb-4">
              <div className="card h-100 text-center">
                <img src={department.img} className="card-img-top" alt={department.name} />
                <div className="card-body">
                  <h5 className="card-title">{department.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllamaIqbal;
