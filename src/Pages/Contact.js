import React from "react";

const Contact = () => {
  return (
    <>
      <div className="cntct-main">
        <div className="address">
          Chintamani Market, BSNL Golember,
          Hajipur, Vaishali - 844101
        </div>
        <div className="map-img">
          <iframe className="map-img-link" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.052304211842!2d85.21827447485396!3d25.702692211041995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5d357ce073cb%3A0x9242b343fba15103!2sEngineer%20SK%20Singh%20Research%20and%20Outreach%20Center%2C%20ATMABODH!5e0!3m2!1sen!2sin!4v1736231243643!5m2!1sen!2sin" title="Google Maps showing our office location" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
