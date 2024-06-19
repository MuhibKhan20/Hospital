import React from 'react'
import '../css/Icuservices.css'; //

const Icuservices = () => {
  return (
    <>
      <div className="container mt-5 icu-service-bg-color">
        <div className="row">
          <div className="col-12">
            <div className="container bootstrap snippets bootdey">
              <section id="news" className="white-bg padding-top-bottom">
                <div className="container bootstrap snippets bootdey">
                  <div className="timeline">
                    <div className="date-title">
                      <span>Our ICU Services</span>
                    </div>
                    <div className="row">
                      <div className="col-sm-6 news-item">
                        <div className="news-content">
                          <h2 className="news-title">Continuous Monitoring </h2>
                          <div className="news-media">
                            {/* Insert CBC Analyzer media content if any */}
                          </div>
                          <p>FContinuous Monitoring of Vital Signs and Organ Function</p>
                          <a className="read-more" href="#">Read More</a>
                        </div>
                      </div>
                      <div className="col-sm-6 news-item right">
                        <div className="news-content">
                          <h2 className="news-title">Medical Intervention</h2>
                          <div className="news-media gallery">
                            {/* Insert Chemistry Analyzer media content if any */}
                          </div>
                          <p>pecialized Medical Interventions and Treatments.</p>
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
