import React from "react";
import WhatsappLogo from "../images/WhatsappLogo.png";

const Contact = () => {
  return (
    <>
      <div className="cntct-main">
        <div className="img-cntct">
          <img
            className="cntct-img"
            src={"./images/Media.jpeg"}
            alt="description"
          />
        </div>

        <div className="img-cntct-L">
          <img
            className="cntct-img-L"
            src={"./images/flowers.jfif"}
            alt="description"
          />
        </div>

        <div className="head-whts">
          <nav>
            {/* Other nav links */}
            <a
              href="https://wa.me/9191358xxxxx?text=Hello!%20I'm%20interested%20in%20your%20products."
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-link"
            >
              <img
                src={WhatsappLogo}
                alt="WhatsApp"
                className="whatsapp-logo"
              />
              <span>+91 91358xxxxx</span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Contact;
