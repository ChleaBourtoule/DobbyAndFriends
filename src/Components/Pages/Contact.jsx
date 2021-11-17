import React from 'react';
import Hedwige from '../../assets/hedwige.png';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="form-container">
        <div>
          <h1 className="">SEND US AN OWL NOW !</h1>
        </div>

        <div className="image-form">
          <div className="image">
            <img src={Hedwige} alt="" />
          </div>
          <form
            className="form-contact"
            name="myForm"
            action=""
            onSubmit=""
            method="post"
          >
            <h3 htmlFor="firstname">First Name</h3>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Your first name..."
              required
            />

            <h3 htmlFor="lastname">Last Name</h3>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Your last name..."
              required
            />

            <h3 htmlFor="email">Email Address</h3>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="firstname.lastname@gmail.com"
              required
            />

            <h3 htmlFor="message">Message</h3>
            <textarea
              id="message"
              name="message"
              placeholder="Write something..."
            />

            <button
              type="submit"
              className="btn-contact cursor"
              id="submit"
              value="Submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
