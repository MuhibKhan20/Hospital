import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Brachescard.css'

const BrachesCard = ({imgSource, hospitalName, linkTo}) => {
    return (
        <>
            <div className="col-sm-12 col-md-4 col-lg-3 mb-4">
                <div className="card h-100">
                    <img src={imgSource} className="card-img-top" alt="..." />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title pb-3">{hospitalName}</h5>

                        <Link to={linkTo} className="btn btn-danger mt-auto">Learn More</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BrachesCard
