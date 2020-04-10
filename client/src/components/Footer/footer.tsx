import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";
import './footer.scss';

const Footer: React.FC = () => {
    return (
        <footer className="footer bg-yellow-500">
        <section className="Footer-container">
          <nav className="Footer-social">
            <a
              href="mailto:info@mmcfb.org?"
              style={{ color: "#0000" }}
            >
              <FontAwesomeIcon icon={faEnvelope} className="fa" />
            </a>
            <a
              href="https://www.facebook.com/Foodbankmercedcounty/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000" }}
            >
              <FontAwesomeIcon icon={faFacebook} className="fa" />
            </a>
            <a
              href="https://www.linkedin.com/company/merced-county-food-bank/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000" }}
            >
              <FontAwesomeIcon icon={faLinkedin} className="fa" />
            </a>
            <a
              href="https://twitter.com/mercedfoodbank?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000" }}
            >
              <FontAwesomeIcon icon={faTwitter} className="fa" />
            </a>
            <a
              href="tel:(209)726-3663"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0000" }}
            >
              <FontAwesomeIcon icon={faPhone} className="fa" />
            </a>
          </nav>
        </section>
        <section className="credits">
          <p className="copyright">
          © 2020 Merced County Food Bank
          </p>
        </section>
      </footer>

        );
    };
    
export default Footer;