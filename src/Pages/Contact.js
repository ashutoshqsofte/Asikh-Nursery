import React, { useRef } from 'react';

const Contact = () => {
  const fullNameRef = useRef(null);
  const mobileRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = () => {
    const fullName = fullNameRef.current.value;
    const mobile = mobileRef.current.value;
    const message = messageRef.current.value;

    if (!fullName || !mobile || !message) {
      alert('Please fill in all fields.');
      return;
    }

    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      `Full Name: ${fullName}\nMobile: ${mobile}\nMessage: ${message}`
    )}`;
    window.open(whatsappLink, '_blank');

    fullNameRef.current.value = ' ';
    mobileRef.current.value = ' ';
    messageRef.current.value = ' ';

    alert('Your message has been sent successfully!');
  };

  return (
    <div className="cntct-main">
      <div className="address">
        Chintamani Market, BSNL Golember,
        Hajipur, Vaishali - 844101
      </div>

      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.052304211842!2d85.21827447485396!3d25.702692211041995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d357ce073cb%3A0x9242b343fba15103!2sEngineer%20SK%20Singh%20Research%20and%20Outreach%20Center%2C%20ATMABODH!5e0!3m2!1sen!2sin!4v1736231243643!5m2!1sen!2sin"
          title="Google Maps showing our office location"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>

        <form id="contact-form">
          <h2>Contact Us</h2>
          <label htmlFor="fullName">Full Name:</label>
          <input type="text" id="fullName" placeholder="Enter your full name" ref={fullNameRef} required />

          <label htmlFor="mobile">Mobile Number:</label>
          <input type="tel" id="mobile" placeholder="Enter your mobile number" ref={mobileRef} required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" placeholder="Enter your message" rows="5" ref={messageRef} required></textarea>

          <button type="button" onClick={handleSubmit}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
