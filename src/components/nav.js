import React, {useState} from 'react';

import './nav.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav_modal from './nav__components/nav_modal.js';
import {Link} from "react-router-dom";

const Nav = (props) => {
  // let [type,setType] = useState(null);  
  // let [title,setTitle] = useState(null);  

  return (
    <div className="Nav">

      <div className="content_backboard">
        <div className="content_area">
          <Nav_modal></Nav_modal>
              
          <div className="content_box">
            <Link to={`/search?type=요양병원`}>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/ADMISSION_FACILITY.svg" /></div>
                <span> 요양병원 </span>
              </div>
            </Link>            
            
            <Link to={`/search?type=요양원`}>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/NURSING_HOSPITAL.svg" /></div>
                <span> 요양원 </span>
              </div>
            </Link>
                      
            <Link to={`/search?type=방문요양`}>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_CARE.svg" /></div>
                <span> 방문요양 </span>
              </div>
            </Link>
                    
            <Link to={`/search?type=방문목욕`}>
              <div className="icon_box">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_BATH.svg" /></div>
                <span> 방문목욕 </span>
              </div>
            </Link>
            
            <Link to={`/search?type=주야간보호`}> 
            <div className="icon_box">
              <div className="image"><img src="https://caredoc.kr/img/main/icon/DAY_NIGHT_CARE.svg" /></div>
              <span> 주야간보호 </span>
            </div> 
          </Link>
                    
          </div>
                                                    
        </div>
      </div>
    </div>
  );
}

export default Nav;