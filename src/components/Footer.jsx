import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
  return (
    <>
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
        <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
          <div className='me-5 d-none d-lg-block'>
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link to='https://www.facebook.com/profile.php?id=61554286287394' className='me-4 text-reset custom-link'>
              <MDBIcon fab icon='facebook-f' />
            </Link>
            <Link to='https://www.instagram.com/farooqhospitalallamaiqbaltown/' className='me-4 text-reset custom-link'>
              <MDBIcon fab icon='instagram' />
            </Link>
            <Link to='' className='me-4 text-reset custom-link'>
              <MDBIcon fab icon='linkedin' />
            </Link>
            <Link to='https://www.tiktok.com/@farooqhospitala.i.t?lang=en' className='me-4 text-reset custom-link'>
              <MDBIcon fab icon='tiktok' />
            </Link>
            <Link to='https://www.youtube.com/@FarooqhospitalAIT' className='me-4 text-reset custom-link'>
              <MDBIcon fab icon='youtube' />
            </Link>

          </div>
        </section>

        <section className=''>
          <MDBContainer className='text-center text-md-start mt-5'>
            <MDBRow className='mt-3'>
              <MDBCol sm='6' md='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>
                  <MDBIcon icon='gem' className='me-3' />
                  Farooq Hospital
                </h6>
                <p>
                  Thank you for choosing Farooq Hospital; we are honored to be part of your healthcare journey and are committed to helping you achieve optimal health.
                </p>
              </MDBCol>

              <MDBCol sm='6' md='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Services</h6>
                <p>
                  <Link to='#' className='text-reset custom-link'>
                    Home medical Services
                  </Link>
                </p>
                <p>
                  <Link to='#' className='text-reset custom-link'>
                    Blood Bank
                  </Link>
                </p>
                <p>
                  <Link to='#' className='text-reset custom-link'>
                    Emergency
                  </Link>
                </p>
                <p>
                  <Link to='#' className='text-reset custom-link'>
                    FH Laboratory
                  </Link>
                </p>
              </MDBCol>

              <MDBCol sm='6' md='2' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
                <p>
                  <Link to='#!' className='text-reset custom-link'>
                    Pricing
                  </Link>
                </p>
                <p>
                  <Link to='#!' className='text-reset custom-link'>
                    Settings
                  </Link>
                </p>
                <p>
                  <Link to='#!' className='text-reset custom-link'>
                    Orders
                  </Link>
                </p>
                <p>
                  <Link to='#!' className='text-reset custom-link'>
                    Help
                  </Link>
                </p>
              </MDBCol>

              <MDBCol sm='6' md='3' className='mx-auto mb-4'>
                <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                <p>
                  <MDBIcon icon='home' className='me-2' />
                  New York, NY 10012, US
                </p>
                <p>
                  <MDBIcon icon='envelope' className='me-3' />
                  info@farooqhospitals.com
                </p>
                <p>
                  <MDBIcon icon='phone' className='me-3' /> + 01 234 567 88
                </p>
                <p>
                  <MDBIcon icon='print' className='me-3' /> + 01 234 567 89
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>

        <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          © 2024 Copyright: <strong>Farooq Hospital</strong>

        </div>
      </MDBFooter>
    </>

  );
}

export default Footer;