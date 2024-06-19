

import React from 'react'

const Testimonials = ({ bgColor, shadow, headingColor, textColor, padding }) => {
    return (
        <>
            <div className={`w-100 ${shadow} ${padding} my-4`} style={{ backgroundColor: bgColor }}>

                <div className="row">
                    <div className="col d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center'>
                            <div>
                                <img className='rounded' src="manager.jpg" alt="manager image" />
                            </div>

                            <div className='ps-3'>
                                <h3 className={`${textColor} fs-5`}>John William</h3>
                                <p className='text-secondary mb-0'>Manager at Furniti</p>
                            </div>
                        </div>

                        <div>
                            <i className="fa-solid fa-star fs-5" style={{ color: "#F0AD4E" }}></i>
                            <i className="fa-solid fa-star fs-5" style={{ color: "#F0AD4E" }}></i>
                            <i className="fa-solid fa-star fs-5" style={{ color: "#F0AD4E" }}></i>
                            <i className="fa-solid fa-star fs-5" style={{ color: "#F0AD4E" }}></i>
                            <i className="fa-solid fa-star fs-5" style={{ color: "#F0AD4E" }}></i>
                        </div>

                    </div>
                </div>

                <h2 className='fs-2 fw-bold py-3' style={{ color: headingColor }}>What others thought of</h2>

                <p className={`${textColor}`}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias perspiciatis mollitia, quis maiores minima, incidunt quod quam in tempore, similique laborum cupiditate. Distinctio eum necessitatibus, incidunt earum eius temporibus eos?</p>

            </div>
        </>
    )
}

export default Testimonials
