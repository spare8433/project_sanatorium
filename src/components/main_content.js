import React, { useState } from 'react';

import './main_content.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Main_content = (props) => {
  
  return (
    <div className="Main_content">
      <div className="containor_box">

        <div className="containor_title">

          <h2>신규 시설</h2>
          <div>
            <span>더보기</span>
            <div className="image"><img></img></div>
          </div>
        </div>

        {/* 시설정보 그리드 박스 */}
        <div className="containor_content"> 
        
          {/* 시설정보 아이템 */}
          <div className="item">
            <div className="title">케어윌</div>            
            <div className="address">서울특별시 성북구 보문로 50</div>
            <div className="type">요양원</div>                        
            <div className="tag">A 등급, 설립11년</div>            
          </div>

          <div className="item">
            <div className="title">케어윌</div>            
            <div className="address">서울특별시 성북구 보문로 50</div>
            <div className="type">요양원</div>                        
            <div className="tag">A 등급, 설립11년</div>            
          </div>

          <div className="item">
            <div className="title">케어윌</div>            
            <div className="address">서울특별시 성북구 보문로 50</div>
            <div className="type">요양원</div>                        
            <div className="tag">A 등급, 설립11년</div>            
          </div>

          <div className="item">
            <div className="title">케어윌</div>            
            <div className="address">서울특별시 성북구 보문로 50</div>
            <div className="type">요양원</div>                        
            <div className="tag">A 등급, 설립11년</div>            
          </div>
        </div>

      </div>
    </div>
  );
};

export default Main_content;