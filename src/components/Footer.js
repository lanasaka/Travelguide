import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'

const Footer = () => {

  const handleSubscribe = (e) => {
    e.preventDefault();
 
  };

  return (
    <footer className="footer">
      <div className="social-icons">
     
        <a href="https://facebook.com">
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a href="https://twitter.com">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="https://instagram.com">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
      <form className="subscribe-form" onSubmit={handleSubscribe}>
    
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
  );
};

export default Footer;
