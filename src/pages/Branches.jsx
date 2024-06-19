import React from 'react';
import "../css/Branches.css";
import { cardbranch } from '../apis/cardbranchapi.js';
import { Link } from 'react-router-dom';
import BrachesCard from '../components/BrachesCard.jsx';

const Branches = () => {
  return (
    <>
      <div className="container-fluid position-relative">
        <div className="row">
          <div className="col-12 branches_header_image d-flex flex-column align-items-center justify-content-center">
            <h1 className='fs-1 fw-bold text-white' >Branches</h1>
            <p className='text-white fs-5' data-aos="fade-up" style={{ maxWidth: "55rem" }}>
            Farooq Hospital branches offer comprehensive medical services tailored to local communities, ensuring accessible healthcare with a commitment to excellence and patient-centric care.
              </p>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row mt-3">
          <BrachesCard 
          imgSource="farooq-hospital-iqbal-town.jpg"  
          hospitalName="Farooq Hospital Iqbal Town "
          linkTo = "/allamaIqbal"
          />

          <BrachesCard 
          imgSource="farooq-hospital-west-wood-branch.jpg"  
          hospitalName="Farooq Hospital West Wood Branch "
          linkTo = "/westwood" />

          <BrachesCard 
          imgSource="farooq-hospital-west-wood-branch.jpg"  
          hospitalName="Farooq Hospital DHA"
          linkTo = "/dhabranch" />
          <BrachesCard 
          imgSource="farooq-hospital-west-wood-branch.jpg"  
          hospitalName="Farooq Hospital Behria Golf City"
          linkTo = "/behriagolfcity" />
          <BrachesCard 
          imgSource="farooq-hospital-west-wood-branch.jpg"  
          hospitalName="Farooq Hospital Behria Inclave"
          linkTo = "/behriainclave" />

          <BrachesCard 
          imgSource="farooq-hospital-west-wood-branch.jpg"  
          hospitalName="Akhtar Saeed Trust Hospital"
          linkTo = "/akthersaeed" />

          <BrachesCard 
          imgSource="farooq-hospital-west-wood-branch.jpg"  
          hospitalName="Doctors Hospital" 
             linkTo = "/doctorshospital"/>

  


        </div>
      </div>
      
    </>
  );
};

export default Branches;