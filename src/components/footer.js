

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <h2 className="footer-logo">Car Rada</h2>

        <div className="footer-links">
          <a href="mailto:yourname@email.com" target="_blank" rel="noreferrer">
            📧 Email
          </a>
          <a
            href="https://www.linkedin.com/in/your-profile/"
            target="_blank"
            rel="noreferrer"
          >
            💼 LinkedIn
          </a>
        </div>
      </div>

      <p className="footer-copy">
        © {new Date().getFullYear()} Car Rada. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
