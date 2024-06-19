import React from 'react';
import { apinews } from '../apis/Apinews';
import { Link } from 'react-router-dom';
import Events from '../components/Events.jsx';
const More = () => {
  return (
    <>
      <div style={{ position: 'relative', height: '600px', overflow: 'hidden' }}>
        <div style={{
          margin: "0",
          padding: "0",
          backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(0, 0, 255, 0.5)), url('/2645.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundAttachment: "fixed",
          height: "600px",
          width: "100%", // Ensure the background image takes the full width
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center"
        }}>
          <h2 style={{ color: 'white', fontSize: '3rem', marginBottom: '1rem', fontWeight: 'bold' }}>News</h2>
          <p style={{ color: 'white', fontSize: '1.2rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
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
            {apinews.map((apinews, index) => (
              <div key={apinews.id} className={`col-xl-3 col-lg-3 col-md-4 col-sm-12 ${index >= 4 ? 'd-md-none d-lg-block' : ''}`}>
                <div className="speakers xs-mb30 my-3">
                  <div className="spk-img">
                    <img className="img-fluid" src={apinews.img} alt="trainer-img" />
                    <ul>
                      <li>
                        <Link to="#">
                          <img src="./logo2.png" alt="Custom Icon" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="spk-info">
                    <Link to="#"><h3>{apinews.name}</h3></Link>
                    <p>{apinews.position}</p>
                    <p><strong>Timing:</strong> {apinews.timing}</p>
                    <p><strong>Branch Location:</strong> {apinews.branchLocation}</p>
                  </div>
                </div>
              </div>
              
            ))}
          </div>
        </div>
      </div>
      <Events/>
    </>
  );
};

    

export default More;
