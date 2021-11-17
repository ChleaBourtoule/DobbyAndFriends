import React, { useState } from 'react';
import Hedwige from '../../assets/hedwige.png';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(`off`);
  const [name, setName] = useState('');
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
              className="cursor"
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Your first name..."
              required
              onChange={(e) => setName(e.target.value)}
            />

            <h3 htmlFor="lastname">Last Name</h3>
            <input
              className="cursor"
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Your last name..."
              required
            />

            <h3 htmlFor="email">Email Address</h3>
            <input
              className="cursor"
              type="email"
              name="email"
              id="email"
              placeholder="firstname.lastname@gmail.com"
              required
            />

            <h3 htmlFor="message">Message</h3>
            <textarea
              className="cursor"
              id="message"
              name="message"
              placeholder="Write something..."
            />

            <button
              type="button"
              className="btn-contact cursor"
              id="submit"
              value="Submit"
              onClick={() => setMessage(`active`)}
            >
              Send
            </button>
          </form>
        </div>
        <div className={message}>
          <p>Message sent. Thank you {name} for the feedback!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
