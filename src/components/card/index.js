import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const Card = (props) => {
  const {title, price, image, link} = props;
  return <Link className="item-card" to={link}>
    <img loading="lazy" src={image} alt={title} title={title} />
    <div className="card-title">{title}</div>
    <div className="card-price">{price}</div>
  </Link>
};

export default Card;