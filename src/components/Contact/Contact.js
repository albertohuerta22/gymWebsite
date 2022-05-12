import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import './Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="img-container">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt="wellness"
        ></img>
      </div>
      <div className="form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="email" placeholder="Enter First Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="email" placeholder="Enter Last Name" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      {/* <form className="form">
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
      </form> */}
    </div>
  );
};

export default Contact;
