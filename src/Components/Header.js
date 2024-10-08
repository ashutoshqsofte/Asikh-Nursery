import "./Head.css";

function Header() {
  return (
    <div className="head">
      <a className="logo" href="/home">
        Asikh Nursery
      </a>
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
    </div>
  );
}

export default Header;
