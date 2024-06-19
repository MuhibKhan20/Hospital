

import React from 'react'

const ProjectCard = ({ imageSource, textContent }) => {
  return (
    <>
      <div className='col-lg-4 col-md-6 my-2'>


        <div className=" border shadow">
          <img className='w-100' src={imageSource} alt="" />
          <h3 className='py-3 text-center'>{textContent}</h3>
        </div>


      </div>
    </>
  )
}

export default ProjectCard
