import "./Head.css";
import "./Resp.css";

function Header() {
  return (
    <div className="header">
      <a className="logo" href="/home">
        Asikh Nursery
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
        <a className="sections" href="/plant">
          Plant care
        </a>
        <a className="sections" href="/about">
          About us
        </a>
        <a className="sections" href="/contact">
          Contact Us
        </a>
      </nav>
    </div>
  );
}

export default Header;
