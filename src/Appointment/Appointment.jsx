import React from 'react';
import './Appointment.css';

const Appointment = () => {
  return (
    <>
      <div className="container1">
        {/* This is a division tag for body container */}
        <div className="body-header1 mt-5">
          {/* This is a division tag for body header */}
          <h1>Appointment Request Form</h1>
          <p>Make your appointments more easier</p>
        </div>
        <form action="index.html" method="post">
          <fieldset>
            <legend><span className="number1">1</span>Your basic details</legend>
            <label htmlFor="name1">Name*:</label>
            <input
              type="text"
              className="name1"
              name="user_name"
              placeholder="Write your Full Name"
              required
              pattern="[a-zA-Z0-9]+"
            />

            <label htmlFor="mail1">Email*:</label>
            <input
              type="email"
              className="mail1"
              name="user_email"
              placeholder="abc@xyz.com"
              required
            />

            <label htmlFor="tel1">Contact Number:</label>
            <input
              type="tel"
              className="tel1"
              placeholder="+123"
              name="user_num"
            />


          </fieldset>


          <fieldset>
            <legend><span className="number2">2</span>Appointment Details</legend>
            <label htmlFor="appointment_for1">Branch Details:</label>
            <select className="appointment-for1" name="appointment_for" required>
              <option value="" disabled selected>Select a branch...</option>
              <option value="coffee">Iqbal Town Branch</option>
              <option value="meeting">DHA Branch</option>
              <option value="Business">West Wood Branch</option>
              <option value="lunch">Behria Gold Branch</option>
              <option value="skype">Behria Inlave Branch</option>
              <option value="movie">Akhter Seed Trust Hospital</option>
              <option value="couple_date">Doctors Hospital</option>
            </select>



            <label htmlFor="appointment_description1">Appointment Description:</label>
            <textarea
              className="appointment-description1"
              name="appointment_description"
              placeholder="Scheduling an appointment for a routine medical check-up."
            />

            <label htmlFor="date1">Date*:</label>
            <input
              type="date"
              className="date1"
              name="date"
              required
            />

            <br />
            <label htmlFor="time1">Time*:</label>
            <input
              type="time"
              className="time1"
              name="time"
              required
            />


          </fieldset>
          <button type="submit" className="submit-button1">Request For Appointment</button>
        </form>
      </div>
    </>
  );
};

export default Appointment;
