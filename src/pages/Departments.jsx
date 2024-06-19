import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Ourdoctors.css';
import Ourdoctorsbanner from '../components/Ourdoctorsbanner.jsx';
import { getAllDepartments } from '../apis/Apisdepartments'; // Import getAllDepartments function

const OurDepartments = () => {
  const [departments, setDepartments] = useState([]); // State to store departments

  useEffect(() => {
    // Fetch departments when the component mounts
    getAllDepartments().then((data) => {
      setDepartments(data);
    });
  }, []); // Empty dependency array to run effect only once

  return (
    <>
      <div style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
        <div style={{
          margin: "0",
          padding: "0",
          backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('/departments.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          height: "600px",
          width: "100%" // Ensure the background image takes the full width
        }}></div>
        <h2 className='services_header-fs position-absolute top-50 start-50 translate-middle text-white fw-bold' style={{ 
          left: '100%', 
          transform: 'translateX(-50%)', 
          marginLeft: '20px', 
          marginRight: '20px',
          '@media (max-width: 768px)': { // Media query for small devices
            marginLeft: '40px', // Adjust left margin for small devices
            marginRight: '40px' // Adjust right margin for small devices
          }
        }}>Our Departments</h2>
      </div>
      
      <div className="whos-speaking-area speakers pad100 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2 style={{ color: 'red' }}>All Departments</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb50">
            {departments.map((department, index) => (
              <div key={department.id} className={`col-xl-3 col-lg-3 col-md-4 col-sm-12 ${index >= 4 ? 'd-md-none d-lg-block' : ''}`}>
                <div className="speakers xs-mb30 my-3">
                  <div className="spk-img">
                    <img className="img-fluid" src={department.img} alt="department-img" />
                    <ul>
                      <li>
                        <Link to="#">
                          <img src="./logo2.png" alt="Custom Icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="spk-info">
                    <Link to="#"><h3>{department.name}</h3></Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurDepartments;
