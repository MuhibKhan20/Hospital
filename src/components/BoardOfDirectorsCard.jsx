

import React from 'react'

const BoardOfDirectorsCard = ({ bgColor, shadow, headingColor, textColor, padding, imgSource, name, designation, textContent }) => {
    return (

        <>
            <div className={`w-100 ${shadow} ${padding} my-4`} style={{ backgroundColor: bgColor }}>

                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center'>
                            <div style={{ width: "250px" }}>
                                <img className='rounded w-100' src={imgSource} alt="manager image" />
                            </div>

                            <div className='ps-3'>
                                <h3 className={`${textColor} fs-5`}>{name}</h3>
                                <p className='text-secondary mb-0'>{designation}</p>
                            </div>
                        </div>

                    </div>
                </div>

                <h2 className='fs-2 fw-bold py-3' style={{ color: headingColor }}>Introduction</h2>

                <p className={`${textColor}`}>{textContent}</p>

            </div>
        </>

    )
}

export default BoardOfDirectorsCard
