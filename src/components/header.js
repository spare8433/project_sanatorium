import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  let history = useHistory();
  function handleKeyPress(e){
    if (e.key === "Enter") {
      history.push({ pathname: `/search?search_text=${e.target.value}` });
    }
  }

  return (
    <div className="Header">
      <div className="logo_box">
        <img src="img/logo.png" alt="care_home" />        
        <ul>
          <li>깃</li>
        </ul>
      </div>            

      <div className="search_box">
        <div className="image"><img src="img/search.png"/></div>
        <input type="text" placeholder="시설 검색" onKeyPress={handleKeyPress}/>
      </div>
  </div>
  );
}



export default Header;