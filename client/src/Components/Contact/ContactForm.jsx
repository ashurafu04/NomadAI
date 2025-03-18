import React from 'react';
import './ContactForm.css';

function ContactForm() {
  return (
    <div className="contact-form">
      <h1 className="form-heading">Contact Us</h1>
      <p className="form-subheading">Have a question or need assistance? Send us a message, and we'll get back to you soon !</p>
      <form action="https://formspree.io/f/mvgkgwla" method="POST">
        <label htmlFor="email">Your email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
          aria-label="Email" 
        />
        <label htmlFor="message">Your message:</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Write your message here" 
          required 
          aria-label="Message" 
        ></textarea>
        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
}

export default ContactForm;


/*import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [status, setStatus] = useState("");

  return (
    <div className="contact-form">
      <h2 className="form-heading">Get in Touch</h2>
      <p className="form-subheading">We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.</p>
      {status && <p className="form-status">{status}</p>}
      <form action="https://formspree.io/f/mvgkgwla" method="POST">
        <label htmlFor="email">Your email:</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          placeholder="Enter your email" 
          required 
          aria-label="Email" 
        />
        <label htmlFor="message">Your message:</label>
        <textarea 
          id="message" 
          name="message" 
          placeholder="Write your message here" 
          required 
          aria-label="Message" 
        ></textarea>
        <button type="submit">Contact Us</button>
      </form>
    </div>
  );
}

export default ContactForm;*/
