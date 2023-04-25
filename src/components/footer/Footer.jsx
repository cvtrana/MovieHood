import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Copyright © [2023] [MovieHood]. All rights reserved. <br/>
          Contact Us: [cvtranaofficial2911@gmail.com] 
          
        </div>
        <div className="socialIcons">
          <span className="icon">
            <a href="https://www.linkedin.com/in/nikhil-rana-74799b229/"><FaFacebookF /></a>
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com/in/nikhil-rana-74799b229/"><FaInstagram /></a>
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com/in/nikhil-rana-74799b229/"><FaTwitter/></a>
            
          </span>
          <span className="icon">
            <a href="https://www.linkedin.com/in/nikhil-rana-74799b229/">< FaLinkedin/></a>
            
          </span>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
