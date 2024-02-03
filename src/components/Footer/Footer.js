import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h3>About Us</h3>
          <p>Your Magazine's brief description. Something interesting about your platform.</p>
        </div>
        <div className="footer__section">
          <h3>Contact</h3>
          <p>Email: contact@yourmagazine.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>
        <div className="footer__section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Icons or links to social media */}
            <a href="your_facebook_link" className="icon-link">Facebook</a>
            <a href="your_twitter_link" className="icon-link">Twitter</a>
            <a href="your_instagram_link" className="icon-link">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>© 2024 Your Magazine. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;