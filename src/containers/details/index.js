import React, { useState, useEffect } from 'react';
import Loader from "../../components/loader";
import { getApiData } from '../../utils/api';
import { PHONE_LISTING } from '../../vars/paths';

import "./styles.css";

const Details = () => {
  const [phoneDetails, setPhoneDetails] = useState({isLoading: true});
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    getApiData(PHONE_LISTING).then(data => {
      setPhoneDetails(data.find(item => {
        item.link = `/phones/${item.id}`;
        return item.link === window.location.pathname;
      }));
    }).catch(error => {
      console.log(error);
      setIsError(true);
    });
  }, []);

  const Specification = ({item, value}) => {
    if(item === "id" || item === "link") {
      return null;
    }
    if(value === "title") {
      return <h3>{item}</h3>
    }
    if (item === "image") {
      return <img loading="lazy" src={value} alt={value} />
    }
    if (item === "title") {
      return <div className="specifications-wrapper">
        <h1>{value}</h1>
      </div>
    }
    return <div className="specifications-wrapper">
      <div className="specification-name">{item}</div>
      <div className="specification-value">{value}</div>
    </div>
  }

  // unexpected response from api 
  // error happened during api call
  if (isError) {
    return <div>error component</div>
  }

  // initial state
  if (phoneDetails.isLoading) {
    return <Loader />
  }

  if (phoneDetails) {
    return <div className="phone-details-wrapper">
      {Object.keys(phoneDetails).map(item => {
        return <Specification item={item} value={phoneDetails[item]} />
      })}
    </div>
  }

}

export default Details;