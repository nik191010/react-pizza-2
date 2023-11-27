import React from 'react';

import logo from '../assets/img/vector/icon-logo.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrap">
          <a href="#" className="footer__logo">
            <img className="footer__logo-pic" src={logo} alt="Best Pizza" />
            <p className="footer__logo-text">Best Pizza</p>
          </a>
          <div className="footer__copyright">
            Best Pizza
            <br />© Copyright 2023
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
