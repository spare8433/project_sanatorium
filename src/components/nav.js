import React, {Component} from 'react';

import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_modal from './nav__components/nav_modal.js';

class Nav extends Component {
  render() {
    return (
      <div className="Nav">
        <div className="search_box">
          <div className="image"><img src="img/search.png"/></div>
          <input type="text" placeholder="시설 검색" />
        </div>

        <div className="content_backboard">
          <div className="content_area">
            <Nav_modal></Nav_modal>
               
            <div className="content_box">
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/ADMISSION_FACILITY.svg" /></div>
                <span> 요양병원 </span>
              </div>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/NURSING_HOSPITAL.svg" /></div>
                <span> 요양원 </span>
              </div>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_CARE.svg" /></div>
                <span> 방문요양 </span>
              </div>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_BATH.svg" /></div>
                <span> 방문목욕 </span>
              </div>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_CARE.svg" /></div>
                <span> 주야간보호 </span>
              </div>          
            </div>
                                                      
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;