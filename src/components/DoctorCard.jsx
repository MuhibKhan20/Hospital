

import React from 'react'

const DoctorCard = () => {
  return (
    <>
      <div className="col-lg-4 col-md-6">

        <div className='m-2'>
          <img className='w-100' src="doctor.jpg" alt="Doctor image" />

          <div className='d-flex justify-content-center' style={{ marginTop: "-50px" }}>

            <div className=' text-center p-3 shadow bg-body doctor-card-width'>

              <h3 className='fw-bold fs-4'>Routine Wellness</h3>
              <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, ipsa?</p>

              <button type="button" className='btn btn-danger text-sm'> Learn more</button>

            </div>

          </div>

        </div>


      </div>
    </>

  )
}

export default DoctorCard
