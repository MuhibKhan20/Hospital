import React from 'react';
import '../css/Nabar.css'; // Ensure the correct filename
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Button from './Button.jsx';

const Navbar = () => {
  return (

    <>
      <div className='container mt-3 '>
        <div className='Navbar-container bg-white rounded'>
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <img src="./logo.png" alt="Farooq Hospital Logo" className="logo-image" />
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link px-3" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link px-3" to="/AboutUs">
                      About Us
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/boardofdirectors">Board of Directors</Link></li>
                      <li><Link className="dropdown-item" to="/history">History</Link></li>
                      <li><Link className="dropdown-item" to="/ourprojects">Our Projects</Link></li>
                      <li><Link className="dropdown-item" to="/corporatepannellist">Corporate Panel List</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link px-3" to="branches">
                      Branches
                    </Link>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/allamaIqbal">Iqbal Town Branch</Link></li>
                      <li><Link className="dropdown-item" to="/westwood">West Wood Branch</Link></li>
                      <li><Link className="dropdown-item" to="/dhabranch">DHA Branch</Link></li>
                      <li><Link className="dropdown-item" to="/behriagolfcity">Behria Golf City</Link></li>
                      <li><Link className="dropdown-item" to="/behriainclave">Behria Inclave </Link></li>
                      <li><Link className="dropdown-item" to="/akthersaeed">Akther saeed Trust Hospital</Link></li>
                      <li><Link className="dropdown-item" to="/doctorshospital">Doctors Hospital</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/ourdoctors">
                        Our Doctors
                      </Link>
                    </li>
                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/iqbaltownconsultant">Consultants -Iqbal Town Branch</Link></li>
                      <li><Link className="dropdown-item" to="/westwoodconsultant">Consultants -West Wood Branch</Link></li>
                      <li><Link className="dropdown-item" to="/dhaconsultant">Consultants -DHA Branch</Link></li>
                      <li><Link className="dropdown-item" to="/bahriagolfcosultant">Consultants -Bahria Golf City</Link></li>
                      <li><Link className="dropdown-item" to="/Bahriainclaveconsultant">Consultants -Bahria Inclave</Link></li>
                      <li><Link className="dropdown-item" to="/akhtersaeedconsultant">Consultants -Akhter Saeed</Link></li>
                      <li><Link className="dropdown-item" to="/doctorshospitalconsultant">Consultants -Doctors Hospital</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/departments">
                        Departments
                      </Link>
                    </li>

                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/cardiology">Cardiology</Link></li>
                      <li><Link className="dropdown-item" to="/medicine">Medicine</Link></li>
                      <li><Link className="dropdown-item" to="/generalsurgery">General Surgery</Link></li>
                      <li><Link className="dropdown-item" to="/gynaecology">Gynecology & Obstetrics</Link></li>
                      <li><Link className="dropdown-item" to="/paeds">Paeds</Link></li>
                      <li><Link className="dropdown-item" to="/neurology">Neurology</Link></li>
                      <li><Link className="dropdown-item" to="/orthopedic">Orthopedic</Link></li>
                      <li><Link className="dropdown-item" to="/departments">View all</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/services">
                        Services
                      </Link>
                    </li>

                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="/homemedical">Home Medical Services</Link></li>
                      <li><Link className="dropdown-item" to="/bloodbank">Blood Bank</Link></li>
                      <li><Link className="dropdown-item" to="/emergency">Emergency</Link></li>
                      <li><Link className="dropdown-item" to="/fhlaboratory">FH Laboratory</Link></li>
                      <li><Link className="dropdown-item" to="/icu">I.C.U</Link></li>
                      <li><Link className="dropdown-item" to="/operationtheatre">Operation theatre</Link></li>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <li className="nav-item">
                      <Link className="nav-link px-3" to="/more">
                        More
                      </Link>
                    </li>

                    <ul className="dropdown-menu">
                      <li><Link className="dropdown-item" to="#">News & Events</Link></li>
                      <li><Link className="dropdown-item" to="#">Lab Reports</Link></li>
                      <li><Link className="dropdown-item" to="#">FH DHA Online Reports</Link></li>
                      <li><Link className="dropdown-item" to="#">Appointment</Link></li>
                      <li><Link className="dropdown-item" to="#">Privacy Policy</Link></li>
                    </ul>
                  </li>
                </ul>
                <Link to="/appointment" className='me-2'>
                  <Button />
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;