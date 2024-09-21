import React from 'react';
import './Footer.css'; // Import file CSS nếu có

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h3 className="footer-logo">
          <span className="dot purple"></span>
          <span className="dot pink"></span>
          DataWarehouse
        </h3>
        <address className="footer-address">
          Warehouse Society, 234 Bahagia <br />
          Ave Street PRBW 29281 <br />
          <a href="mailto:info@warehouse.project">info@warehouse.project</a> <br />
          1-232-3434 (Main)
        </address>
      </div>
      <div className="footer-center">
        <div>
          <h4>About</h4>
          <ul>
            <li>Profile</li>
            <li>Features</li>
            <li>Careers</li>
            <li>DW News</li>
          </ul>
        </div>
        <div>
          <h4>Help</h4>
          <ul>
            <li>Support</li>
            <li>Sign Up</li>
            <li>Guide</li>
            <li>Reports</li>
            <li>Q & A</li>
          </ul>
        </div>
      </div>
      <div className="footer-right">
        <h4>Social Media</h4>
        <ul className="social-icons">
          <li><a href="#"><i className="youtube-icon"></i></a></li>
          <li><a href="#"><i className="instagram-icon"></i></a></li>
          <li><a href="#"><i className="github-icon"></i></a></li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>© Datawarehouse™, 2020. All rights reserved. Company Registration Number: 21479524.</p>
      </div>
    </footer>
  );
};

export default Footer;
