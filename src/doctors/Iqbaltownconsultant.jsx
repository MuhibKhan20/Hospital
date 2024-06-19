import React, { useState, useEffect } from 'react';
import { getAllevents } from '../apis/Apievents';

const Iqbaltownconsultant = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const allEvents = await getAllevents();
        setEvents(allEvents.slice(0, 7)); // Get only the first 7 events
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <>
      <style jsx>{`
        .iqbal_header_image {
          background: linear-gradient(180deg, rgba(40, 76, 170, 0.74) 0%, rgba(3, 5, 29, 0.64) 100%), 
          url("/iqbaltownconsultant.jpg") no-repeat center center;
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
      `}</style>
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 iqbal_header_image d-flex flex-column align-items-center justify-content-center">
            {/* Text Section */}
            <div className='z-1 text-center d-flex flex-column align-items-center' style={{ marginTop: "8rem", '@media (min-width: 576px)': { marginTop: "0.25rem" } }}>
              <h1 className='fw-bold text-white fs-1' data-aos="fade-up">Iqbal Town Consultant Branch</h1>
              <p className='text-white fs-5' data-aos="fade-up" style={{ maxWidth: "55rem" }}>
                The Iqbal Town Consultant Branch of Farooq Hospital offers specialized consultation services, supported by a team of highly experienced professionals.
              </p>
              {/* Buttons Section */}
              
            </div>
          </div>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="container mt-5">
        <div className="featured-events-heading-container">
          <h2 className="mb-4 featured-events-heading">Featured Events</h2>
        </div>
        <div className="row">
          {events.map(event => (
            <div key={event.id} className="col-md-3 mb-4 mt-5">
              <div className="card h-100 text-center">
                <img src={event.img} className="card-img-top" alt={event.name} />
                <div className="card-body">
                  <h5 className="card-title">{event.name}</h5>
                  <p className="card-text">{event.timing}</p>
                  <p className="card-text">{event.branchLocation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Iqbaltownconsultant;
