import React from 'react';

import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <img
        src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="wellness"
      ></img>

      <form className="form">
        <label for="fname">First Name: </label>
        <input type="text"></input>
        <label for="lname">Last Name: </label>
        <input type="text"></input>
        <label for="email">Email: </label>
        <input type="text"></input>
        <label for="phone">Phone: </label>
        <input type="text"></input>
        <label for="subject">Subject: </label>

        <select name="subject">
          <option value="">Select your option</option>
          <option value="membership">Membersip</option>
          <option value="billing">Billing</option>
          <option value="visit">Visit</option>
          <option value="general">General</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
