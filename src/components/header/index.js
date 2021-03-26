import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Header = (props) => {
  return <div className="header-wrapper">
    {props.list.map(({link, title}) => {
      return <Link className="header-item" to={link} key={link}>
        <div className="header-text">{title}</div>
      </Link>
    })}
  </div>
};

export default Header;