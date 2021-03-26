import React, { useState, useEffect } from 'react';
import Loader from "../../components/loader";
import Card from "../../components/card";

import { getApiData } from '../../utils/api';
import { PHONE_LISTING } from '../../vars/paths';

import "./styles.css";

const Listing = () => {
  const [phoneList, setPhoneList] = useState([]);
  const [isError, setIsError] = useState(false);
  
  useEffect(() => {
    getApiData(PHONE_LISTING).then(data => {
      setPhoneList(data.map(item => {
        item.link = `/phones/${item.id}`;
        return item;
      }));
    }).catch(error => {
      console.log(error);
      setIsError(true);
    });
  }, []);

  // unexpected response from api 
  // error happened during api call
  if(!phoneList || !Array.isArray(phoneList) || isError) {
    return <div>error component</div>
  }

  // initial state
  if(phoneList && Array.isArray(phoneList) && phoneList.length === 0) {
    return <Loader />
  }

  if(phoneList && phoneList.length) {
    return <div className="phone-cards-wrapper">
      {phoneList.map(item => <Card key={item.id} {...item} />)}
    </div>
  }

}

export default Listing;