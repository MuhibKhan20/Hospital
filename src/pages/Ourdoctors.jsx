import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../css/Ourdoctors.css';
import { speakers } from '../apis/Api';
import Ourdoctorsbanner from '../components/Ourdoctorsbanner.jsx';

const Ourdoctors = () => {
  return (
    <>
      <Ourdoctorsbanner />
      <div className="whos-speaking-area speakers pad100 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text mb50">
                <h2 style={{ color: 'red' }}>All Doctors</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row mb50">
            {speakers.map((speaker, index) => (
              <div key={speaker.id} className={`col-xl-3 col-lg-3 col-md-4 col-sm-12 ${index >= 4 ? 'd-md-none d-lg-block' : ''}`}>
                <div className="speakers xs-mb30 my-3">
                  <div className="spk-img">
                    <img className="img-fluid" src={speaker.img} alt="trainer-img" />
                    <ul>
                      <li>
                        <Link to="#">
                          <img src="./logo2.png" alt="Custom Icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="spk-info">
                    <Link to="#"><h3>{speaker.name}</h3></Link>
                    <p>{speaker.position}</p>
                    <p><strong>Timing:</strong> {speaker.timing}</p>
                    <p><strong>Branch Location:</strong> {speaker.branchLocation}</p>
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

export default Ourdoctors;
