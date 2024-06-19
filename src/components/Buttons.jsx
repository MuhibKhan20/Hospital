import React from 'react';
import '../css/Buttons.css'; // Import the CSS file

const Buttons = () => {
  return (

    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', color: 'black' }}>
        <div style={{ marginTop: '200px' }}>
          <h1 style={{ color: 'black' }}><strong>Compassionate Primary And Urgent Care For Pets</strong></h1>
        </div>
        <div style={{ margin: '20px 0' }}>
          <p style={{ color: 'black' }}>Membership plans starting at $8/month with access to exceptional care, stress-free environments, 24/7 telemedicine, transparent pricing and more.</p>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', marginTop: '20px' }}>
          <div style={{ margin: '0 10px' }}>
            <button type="button" className="btn btn-danger button-hover-effect">Appointment</button>
          </div>
          <div style={{ margin: '0 10px' }}>
            <button type="button" className="btn btn-secondary button-hover-effect">
              <i className="fa-solid fa-phone" style={{ marginRight: '5px' }}></i>Secondary
            </button>
          </div>
        </div>
      </div>
    </>




  );
}

export default Buttons;
