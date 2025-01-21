// import React from "react";

// const Contact = () => {
//   return (
//     <>
//       <div className="cntct-main">
//         <div className="address">
//           Chintamani Market, BSNL Golember,
//           Hajipur, Vaishali - 844101
//         </div>

        
//         <div className="map-img">
//           <iframe className="map-img-link" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.052304211842!2d85.21827447485396!3d25.702692211041995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d357ce073cb%3A0x9242b343fba15103!2sEngineer%20SK%20Singh%20Research%20and%20Outreach%20Center%2C%20ATMABODH!5e0!3m2!1sen!2sin!4v1736231243643!5m2!1sen!2sin" title="Google Maps showing our office location" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    // Assuming successful form submission
    setFormStatus("Thank you for contacting us! We will get back to you shortly.");

    // Reset the form
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="cntct-main">
        <div className="address">
          Chintamani Market, BSNL Golember, Hajipur, Vaishali - 844101
        </div>

        <div className="contact-form-container">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>

          {formStatus && <p>{formStatus}</p>}
        </div>

        {/* <div className="map-img">
          <iframe
            className="map-img-link"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.052304211842!2d85.21827447485396!3d25.702692211041995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d357ce073cb%3A0x9242b343fba15103!2sEngineer%20SK%20Singh%20Research%20and%20Outreach%20Center%2C%20ATMABODH!5e0!3m2!1sen!2sin!4v1736231243643!5m2!1sen!2sin"
            title="Google Maps showing our office location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
    </>
  );
};

export default Contact;
