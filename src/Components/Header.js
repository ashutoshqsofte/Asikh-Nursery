import "./Head.css";
import "./Resp.css";

function Header() {
  return (
    <div className="header">
      <a className="logo-text" href="/home">
        Asikh Nursery
      </a>

      <a
        className="whatsapp-logo-link"
        href="https://wa.me/<your_phone_number>?text=Hello, I would like to know more about Asikh Nursery."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="whatsapp-logo-h"
        />
      </a>

      <input type="checkbox" id="menu-toggle" className="menu-checkbox" />

      <label htmlFor="menu-toggle" className="menu-icon">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </label>

      <nav className="nav-links">
        <a className="sections" href="/home">
          Home
        </a>
        <a className="sections" href="/about">
          About us
        </a>
        <a className="sections" href="/plant">
          Plant care
        </a>
        <a className="sections" href="/our-services">
          Our Services
        </a>
        <a className="sections" href="/order">
          Order Now
        </a>
        <a className="sections" href="/contact">
          Contact Us
        </a>
      </nav>
    </div>
  );
}

export default Header;
