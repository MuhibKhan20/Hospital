import React from 'react'
import "../css/History.css";

const History = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12 history_header_image position-relative">
            <h2 className='services_header-fs position-absolute top-50 start-50 translate-middle text-white fw-bold text-center'>History</h2>
          </div>
        </div>
      </div>


      <div className="container">
        <div className="row my-3 shadow">
          <div className="col-lg-6" >
            <h2 className='fs-1 fw-bold' >History of Farooq Hospital</h2>
            <p>
              <span className='fw-bold'>Farooq Group of Companies</span> is a group which is by the grace of ALLAH a well reputed well known and progressive having multi directional businesses. Under the health sector of the company different projects are being run with a highly professional and ethical spirit.<br />
              Talking about <span className='fw-bold'>Farooq Hospitals</span> it’s important to know that in 1985 a 35 bedded hospital was established by Dr. Farooq Saeed Khan at main boulevard <span className='fw-bold'>Allama Iqbal town Lahore</span>  and it was his dedication, honesty, professionalism, and commitment which attracted the community and people trusted him for their health problems. <br />

              In 1993 the board of directors made a decision to work aggressively to meet the mission and for this purpose, they decided to establish Medical schools, Nursing schools, Dental colleges, and pharmacy colleges. In addition to this decisions were taken to establish a chain of hospitals including the extension of <span className='fw-bold'>Farooq Hospital Allama Iqbal Town, Lahore.</span> 

            </p>
          </div>
          <div className="col-lg-6">
            <img className='w-100' src="History-of-Farooq-Hospital.jpg" alt="History of Farooq Hospital image" />
          </div>
        </div>



        <div className="row shadow">
          <div className="col-md-6">
            <img className='w-100' src="farooq-hospital-iqbal-town.jpg" alt="" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <p>In accordance with the mission and strategic plans following projects have been completed.
              <br />
              In 1995, an extension of Farooq Hospital was done.</p>
          </div>

        </div>

        <div className="row my-3 shadow">
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
            <p>The most important decision was to address the poor community for which a 100% Charity based hospital was planned.
              <br />

              In 2000, Akhtar Saeed Trust Hospital started it’s working and now it’s a 300 bedded 100% Charity based teaching hospital.</p>
          </div>

          <div className="col-md-6 order-1 order-md-2">
            <img className='w-100' src="nursing-school.jpg" alt="Nursing School" />
          </div>
        </div>


        <div className="row shadow">
          <div className="col-md-6">
            <img className='w-100' src="pharmacy-1.jpg" alt="" />
          </div>
          <div className="col-6 d-flex align-items-center">
            <p>
            In 2008, Akhtar Saeed Medical College was started with the aim to produce good doctors.
            </p>
          </div>
        </div>

        <div className="row my-3 shadow">
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
            <p>In 2009, College of Pharmaceuticals was established.</p>
          </div>

          <div className="col-md-6 order-1 order-md-2">
            <img className='w-100' src="Akhtar-Saeed-Medical-Dental-College.jpg" alt="" />
          </div>
        </div>

        <div className="row shadow">
          <div className="col-md-6">
            <img className='w-100' src="fh-1.jpg" alt="" />
          </div>
          <div className="col-md-6 d-flex align-items-center">
            <p>
            In 2012 rightly according to the mission and strategic plan a state of the art and equipped with most modern high end facilities , Farooq Hospital west wood was established. It is a 220 bedded hospital out of which 120 beds are dedicated for the poor patients and community services.
            </p>
          </div>
        </div>

        <div className="row my-3 shadow">
          <div className="col-md-6 d-flex align-items-center order-2 order-md-1">
            <p>
            In 2013, Akhtar Saeed Nursing School started its working.
            <br/>
            In 2015, Akhtar Saeed Dental College started its working.
            </p>
          </div>

          <div className="col-md-6 order-1 order-md-2">
            <img className='w-100' src="Akhtar-Saeed-Medical-Dental-College.jpg" alt="" />
          </div>
        </div>


      </div>
    </>
  )
}

export default History
