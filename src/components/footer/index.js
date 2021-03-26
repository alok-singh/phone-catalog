import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Footer = (props) => {
  return <div className="footer-wrapper">
    <div className="footer-liks">
      {props.list.map(({link, title}) => {
        return <Link className="footer-item" to={link}>
          <div className="footer-text">{title}</div>
        </Link>
      })}
    </div>
    <div className="copyright-text">{props.copyright}</div>
  </div>
};

export default Footer;