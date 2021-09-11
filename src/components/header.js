import React, {Component} from 'react';

import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src="img/logo.png" alt="care_home" />        
        <ul>
          <li>깃</li>
        </ul>
    </div>
    );
  }
}


export default Header;