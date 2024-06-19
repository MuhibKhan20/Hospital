import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'


import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


import Home from './pages/Home.jsx'

import AboutUs from './pages/AboutUs.jsx';
import Boardofdirectores from './pages/Boardofdirectores.jsx';
import History from './pages/History.jsx';
import Ourprojects from './pages/Ourprojects.jsx';
import CorporatePannelList from './pages/CorporatePannelList.jsx';

import Branches from './pages/Branches.jsx';
import Doctorshospital from './Branches/Doctorshospital.jsx';
import Akthersaeed from './Branches/Akthersaeed.jsx';
import Behriainclave from './Branches/Behriainclave.jsx';
import Behriagolfcity from './Branches/Behriagolfcity.jsx';
import Westwood from './Branches/Westwood.jsx';
import Dhabranch from './Branches/Dhabranch.jsx';
import AllamaIqbal from './Branches/AllamaIqbal.jsx';

import Ourdoctors from './pages/Ourdoctors.jsx';
import Dhaconsultant from './doctors/Dhaconsultant.jsx';
import Iqbaltownconsultant from './doctors/Iqbaltownconsultant.jsx';
import Westwoodconsultant from './doctors/Westwoodconsultant.jsx';
import Bahriagolfcosultant from './doctors/Bahriagolfcosultant.jsx';
import Bahriainclaveconsultant from './doctors/Bahriainclaveconsultant.jsx';
import Akhtersaeedconsultant from './doctors/Akhtersaeedconsultant.jsx';
import Doctorshospitalconsultant from './doctors/Doctorshospitalconsultant.jsx';


import Departments from './pages/Departments.jsx';
import Cardiology from './departments/Cardiology.jsx';
import Medicine from './departments/Medicine.jsx';
import Generalsurgery from './departments/Generalsurgery.jsx';
import Gynaecology from './departments/Gynaecology.jsx';
import Paeds from './departments/Paeds.jsx';
import Neurology from './departments/Neurology.jsx';
import Orthopedic from './departments/Orthopedic.jsx';

import Services from './pages/Services.jsx';
import Homemedical from './services/Homemedical.jsx';
import Bloodbank from './services/Bloodbank.jsx';
import Emergency from './services/Emergency.jsx';
import Fhlaboratory from './services/Fhlaboratory.jsx';
import Icu from './services/Icu.jsx';
import Operationtheatre from './services/Operationtheatre.jsx';

import More from './pages/More.jsx';

import Appointment from './Appointment/Appointment.jsx';



function App() {

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '0', left: '0', right: '0', zIndex: '5' }}>
        <Navbar />
      </div>



      <div style={{ position: 'absolute', top: '0', left: '0', right: '0' }}>

        <Routes>
          <Route path="/" element={<Home />} ></Route>

          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/boardofdirectors" element={<Boardofdirectores />} />
          <Route path="/history" element={<History />} />
          <Route path="/ourprojects" element={<Ourprojects />} />
          <Route path="/corporatepannellist" element={<CorporatePannelList />} />

          <Route path="/branches" element={<Branches />} />
          <Route path="/allamaIqbal" element={<AllamaIqbal />} />
          <Route path="/dhabranch" element={<Dhabranch />} />
          <Route path="/westwood" element={<Westwood />} />
          <Route path="/behriagolfcity" element={<Behriagolfcity />} />
          <Route path="/behriainclave" element={<Behriainclave />} />
          <Route path="/akthersaeed" element={<Akthersaeed />} />
          <Route path="/doctorshospital" element={<Doctorshospital />} />

          <Route path="/OurDoctors" element={<Ourdoctors />} />
          <Route path="/dhaconsultant" element={<Dhaconsultant />} />
          <Route path="/iqbaltownconsultant" element={<Iqbaltownconsultant />} />
          <Route path="/westwoodconsultant" element={<Westwoodconsultant />} />
          <Route path="/bahriagolfcosultant" element={<Bahriagolfcosultant />} />
          <Route path="/bahriainclaveconsultant" element={<Bahriainclaveconsultant />} />
          <Route path="/akhtersaeedconsultant" element={<Akhtersaeedconsultant />} />
          <Route path="/doctorshospitalconsultant" element={<Doctorshospitalconsultant />} />

          <Route path="/Departments" element={<Departments />} />
          <Route path="/cardiology" element={<Cardiology />} />
          <Route path="/medicine" element={<Medicine />} />
          <Route path="/generalsurgery" element={<Generalsurgery />} />
          <Route path="/gynaecology" element={<Gynaecology />} />
          <Route path="/paeds" element={<Paeds />} />
          <Route path="/neurology" element={<Neurology />} />
          <Route path="/orthopedic" element={<Orthopedic />} />

          <Route path="/services" element={<Services />} />
          <Route path="/bloodbank" element={<Bloodbank />} />
          <Route path="/fhlaboratory" element={<Fhlaboratory />} />
          <Route path="/icu" element={<Icu />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/homemedical" element={<Homemedical />} />
          <Route path="/operationtheatre" element={<Operationtheatre />} />

          <Route path="/more" element={<More />} />

          <Route path="/appointment" element={<Appointment />} />

          


        </Routes>
        <Footer />

      </div>
    </div>
  )
}

export default App
