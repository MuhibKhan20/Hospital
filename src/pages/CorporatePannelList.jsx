

// import '../css/CorporatePannelList.css'

import React from 'react'

const CorporatePannelList = () => {
    return (
        <>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 history_header_image position-relative">
                        <h2 className='services_header-fs position-absolute top-50 start-50 translate-middle text-white fw-bold text-center'>Corporate Pannel List</h2>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col my-3 my-sm-5">
                        <table className='table table-striped border text-center'>
                            <tbody>
                                <tr>
                                    <th scope="row">Adamjee Ins. Co. Ltd.</th>
                                    <th scope="row">Alfalah Ins. Co. Ltd.</th>
                                    <th scope="row">Nespak Ltd.</th>
                                </tr>
                                <tr>
                                    <th scope="col">Alico Ins. Co. Ltd.</th>
                                    <th scope="col">Pak Qatar Family Takaful Ins. Co. Ltd.</th>
                                    <th scope="col">Takaful Pakistan Ins. Ltd.</th>
                                </tr>
                                <tr>
                                    <th scope="row">East West Ins. Co. Ltd.</th>
                                    <th scope="row">Century Ins. Co. Ltd.</th>
                                    <th scope="row">Atlas Ins. Co. Ltd.</th>
                                </tr>
                                <tr>
                                    <th scope="col">Jubilee Ins. Co. Ltd.</th>
                                    <th scope="col">Asia Care Ins. Co. Ltd.</th>
                                    <th scope="col">IGI Ins. Co. Ltd.</th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CorporatePannelList
