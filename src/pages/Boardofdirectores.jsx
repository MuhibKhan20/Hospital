import React from 'react'
import "../css/BoardOfDirectors.css";
import BoardOfDirectorsCard from '../components/BoardOfDirectorsCard.jsx';

const Boardofdirectores = () => {
  return (
    <>
      <div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-12 board-of-directors_header-image position-relative">
              <h2 className='position-absolute top-50 start-50 translate-middle text-white fw-bold text-center'>Board of Directors</h2>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-12">
              <BoardOfDirectorsCard bgColor="#222769" headingColor="#F7D285" textColor="text-white" padding="p-4"
                imgSource="farooq.jpg"
                name="Dr. Farooq Saeed Khan"
                designation="Chairman “Farooq Group of Companies”"

                textContent={<> <span className='fw-bold'>Dr. Farooq Saeed Khan</span> graduated in 1983 from Allama Iqbal Medical College, Lahore. After getting extensive training in medicine and surgery from Services Hospital, Mayo Hospital, and General Hospital, Lahore established <span className='fw-bold'>Farooq Hospital, Allama Iqbal Town Branch</span> in 1986. Later on, he did his DMRD in 1989. He added another milestone after building a 300 bedded Akhtar Saeed Trust Teaching Hospital in 2000. This hospital provides medical/surgical facilities to the poor masses of the community.
                  <br />

                  He started <span className='fw-bold'>Akhtar Saeed Medical & Dental College</span> in 2008 keeping in view to provide state of the art medical education and produce graduates with highest academics, cognitive and psychomotor skills. This medical college is rated as one of the best in terms of faculty and a beautiful campus. In 2012, he developed a new 220 bedded state of the art hospital named <span className='fw-bold'>Farooq Hospital West Wood Branch, Lahore.</span>
                </>}
              />
            </div>

            <BoardOfDirectorsCard bgColor="white" shadow="shadow" headingColor="black" textColor="text-black" padding="p-4"
              imgSource="fariha.jpg"
              name="Prof. Dr. Fariha Farooq"
              designation="Co-chairperson A.M.D.C"

              textContent={<>
                Prof. Dr. Fariha Farooq is working as a Professor of Obstetrician & Gynaecology at Akhtar Saeed Medical & Dental College Pvt. Ltd.<br />
                Consultant Obstetrician & Gynaecologist at Farooq Hospital Lahore.
              </>}

            />

            <BoardOfDirectorsCard bgColor="white" shadow="shadow" headingColor="black" textColor="text-black" padding="p-4"
              imgSource="ayaz.jpg"
              name="Dr. Sabir Ayyaz Malik "
              designation="Chief Executive Officer "

              textContent={<>
                <span className='fw-bold'>Dr. Sabir Ayyaz Malik</span> graduated from Punjab Medical College Faisalabad in session 1991-1992. Soon after completing the house job, he joined Farooq Teaching Hospital in 1994 as Medical Officer. He has a long time association with the organization and has a definite role in policymaking and other issues.
                <br />
                He is currently working as Chief Executive Officer.
              </>}

            />

            <BoardOfDirectorsCard bgColor="white" shadow="shadow" headingColor="black" textColor="text-black" padding="p-4"
              imgSource="Omair-Farooq.jpg"
              name="Dr. Omair Farooq "
              designation='Director "Farooq Hospital West Wood" '

              textContent={<>
                <span className='fw-bold'>Dr. Omair Farooq</span> graduated from Allama Iqbal Medical College, Lahore in 2017 and was declared the Best graduate of Allama Iqbal Medical College and University of health sciences for the year 2017 amongst more than 30 medical colleges of Punjab. <span className='fw-bold'>
                  He has the record for the maximum number of medals in MBBS which is 27, including 25 Gold and 2 Silver Medals.</span>  He then went on to complete his <span className='fw-bold'>MRCP(UK)</span> in February 2020 from <span className='fw-bold'>Royal Infirmary Hospital</span> Glassgow making him the youngest Internal medicine physician in Pakistan at the age of 26 only. He has served in Royal Bournemouth and Christchurch hospitals Bournemouth UK.<br />

                Currently, he is Senior Registrar Department of Medicine Akhtar Saeed Medical and Dental College and is also Medical Director Farooq hospitals and Director Akhtar Saeed medical and dental college, Lahore.
              </>}

            />


          </div>
        </div>

      </div>
    </>
  )
}

export default Boardofdirectores
