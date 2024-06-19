import React, { useEffect, useState } from 'react';
import { getAllevents } from './apievents'; // Adjust the import path as needed
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Eventsfatchapi = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllevents().then(data => {
      setEvents(data);
    });
  }, []);

  return (
    <div>
      <div style={{ 
        position: 'relative', 
        height: '300px', 
        overflow: 'hidden',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('/2645.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        width: '85%', 
        marginLeft: '7.5%', 
        marginRight: '7.5%', 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <h2 style={{ color: 'white', fontWeight: 'bold', marginRight: '20px', marginLeft: '20px' }}>Events</h2>
        <p style={{ color: 'white', marginRight: '20px', marginLeft: '20px' }}>Explore our upcoming events calendar</p>
      </div>
      <div className="whos-speaking-area speakers pad100 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                  <h2 style={{ color: 'red' }}>Stay updated with the latest news</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb50">
            {events.map((event, index) => (
              <div key={event.id} className={`col-xl-3 col-lg-3 col-md-4 col-sm-12 ${index >= 4 ? 'd-md-none d-lg-block' : ''}`}>
                <div className="speakers xs-mb30 my-3">
                  <div className="spk-img">
                    <img className="img-fluid" src={event.img} alt="event-img" />
                    <ul>
                      <li>
                        <Link to="#">
                          <img src="./logo2.png" alt="Custom Icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="spk-info">
                    <Link to="#"><h3>{event.name}</h3></Link>
                    <p>{event.timing}</p>
                    <p><strong>Branch Location:</strong> {event.branchLocation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eventsfatchapi;
