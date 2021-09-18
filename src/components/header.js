import React, {Component} from 'react';

import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
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
          <input type="text" placeholder="시설 검색" />
        </div>
    </div>
    );
  }
}


export default Header;