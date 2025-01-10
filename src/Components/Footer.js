import './Footer.css';

function Footer () {
  return (
    <>
      <footer className="footer">
      <div className="footer-links">
        <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        <a href="/terms-of-use" className="footer-link">Terms of Use</a>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
      <div className="footer-copyright">
        © 2025 XYZ Company. All rights reserved.
      </div>
    </footer>
    </>
  );
};

export default Footer;
