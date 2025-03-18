import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <section id="contact" className="formContainer">
      <h1 className="formTitle">CONTACT</h1>
      <form action="https://formspree.io/f/mvgkgwla" method="POST" className="contactForm">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          required
          className="formInput"
        />
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          required
          className="formInput"
        />
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          required
          className="formTextarea"
        ></textarea>
        <button type="submit" className="submitButton">Submit</button>
      </form>
    </section>
  );
}

export default ContactForm;
