import React from 'react'
import "../css/OurProjects.css"
import ProjectCard from '../components/ProjectCard.jsx'

const Ourprojects = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 projects_header_image position-relative">
            <h2 className='services_header-fs position-absolute top-50 start-50 translate-middle text-white fw-bold text-center'>Our Projects</h2>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row my-3">
          <ProjectCard
            imageSource="farooq-hospital-iqbal-town.jpg"
            textContent="Farooq Hospital Iqbal Town" />


          <ProjectCard
            imageSource="farooq-hospital-west-wood-branch.jpg"
            textContent="Farooq Hospital West Wood " />

          <ProjectCard
            imageSource="trust-hospital.jpg"
            textContent="Akhtar Saeed Trust Hospital " />

          <ProjectCard
            imageSource="Akhtar-Saeed-Medical-Dental-College.jpg"
            textContent="Akhtar Saeed Medical & Dental College" />

          <ProjectCard
            imageSource="pharmacy-1.jpg"
            textContent="Akhtar Saeed College of Pharmaceutical Sciences" />

          <ProjectCard
            imageSource="nursing-school.jpg"
            textContent="Akhtar Saeed School of Nursing " />

          <ProjectCard
            imageSource="Farooq-Hospital-Laboratories.jpg"
            textContent="Farooq Hospital Laboratories " />

          <ProjectCard
            imageSource="Med-Shop-Pharmacy.jpg"
            textContent="MED Shop Pharmacy " />

          <ProjectCard
            imageSource="avenue-mall.jpg"
            textContent="Avenue Mall (Mall of Defence)" />

          <ProjectCard
            imageSource="acps.jpeg"
            textContent="ACPS, Rawalpindi Campus" />

          <ProjectCard
            imageSource="farooq-hospital-dha.jpg"
            textContent="Farooq Hospital DHA" />





        </div>
      </div>

    </>
  )
}

export default Ourprojects
