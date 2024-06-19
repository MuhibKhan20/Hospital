import React from 'react'
import '../css/Operationservices.css';

const Icuservices = () => {
  return (
    <>
      <div className="container mt-5 operation-service-bg-color">
        <div className="row">
          <div className="col-12">
            <div className="container bootstrap snippets bootdey">
              <section id="news" className="white-bg padding-top-bottom">
                <div className="container bootstrap snippets bootdey">
                  <div className="timeline">
                    <div className="date-title">
                      <span>Our Operation Theatres</span>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 news-item">
                        <div className="news-content">
                          <h2 className="news-title">Experienced Surgical Team </h2>
                          <div className="news-media">
                            {/* Insert CBC Analyzer media content if any */}
                          </div>
                          <p>Our experienced surgical team ensures the highest standards of care.</p>
                          <a className="read-more" href="#">Read More</a>
                        </div>
                      </div>
                      <div className="col-sm-6 news-item right">
                        <div className="news-content">
                          <h2 className="news-title">State of the Art Equipment</h2>
                          <div className="news-media gallery">
                            {/* Insert Chemistry Analyzer media content if any */}
                          </div>
                          <p>Equipped with the latest technology for precise, safe surgical procedures.</p>
                          <a className="read-more" href="#">Read More</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Icuservices
