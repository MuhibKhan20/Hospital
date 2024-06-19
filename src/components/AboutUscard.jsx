import React from 'react';
import { Link } from 'react-router-dom';

const AboutUscard = () => {
  return (
    <>
        
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
        <div className="card h-100">
          <img src="w.jpg" className="card-img-top" alt="..." />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Advance Machines</h5>
            <p className="card-text">Farooq Hospital integrates advanced machinery, ensuring precision in diagnostics and innovative treatments.</p>
            <Link to="#" className="btn btn-danger mt-auto">Learn More</Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default AboutUscard;
