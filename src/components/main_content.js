import React, { useState } from 'react';

import './main_content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import SimpleCarousel from './main_components/carousel_banner';

const Main_content = (props) => {
  
  return (
    <div className="Main_content">
      <div className="containor_box">
        <div className="advertisement_banner">
        
        <SimpleCarousel></SimpleCarousel>
        </div>
        <div className="nav_modal_content">
          <h1>입소 시설</h1>
          <div className="grid_box">

            <div className="content_item">
              <div className="image"><img src="https://caredoc.kr/img/main/icon/ADMISSION_FACILITY.svg" /></div>
              <div className="text_box">
                <h3>요양병원</h3>
                <p>꾸준한 진료 및 치료, 재활이 필요하신 분에게 필요해요<br></br>※ 평가등급을 확인하세요.</p>
              </div>
            </div> 

            <div className="content_item">                
              <div className="image"><img src="https://caredoc.kr/img/main/icon/NURSING_HOSPITAL.svg" /></div>                  
              <div className="text_box">
                <h3>요양원</h3>
                <p>
                  급식과 그 밖에 일상생활에 필요한 편의서비를 제공해요<br></br>※ 노인공동생활가정도 포함됩니다.</p>
              </div>
            </div>

          </div>

          <h1>복지 시설</h1>
          <div className="grid_box">

            <div className="content_item">
            <div className="image"><img src="https://caredoc.kr/img/main/icon/DAY_NIGHT_CARE.svg" /></div>
              <div className="text_box">
                <h3>주야간보호</h3>
                <p>주간 또는 야간 일정시간 어르신을 보호하며 신체활동 및 심신기능을 지원하는 서비스예요</p>
              </div>
            </div>

              <div className="content_item">
            <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_CARE.svg" /></div>
              <div className="text_box">
                <h3>방문요양</h3>
                <p>어르신 가정에 요양보호사가 직접 방문하여 필요한 일상 생활을 지원해요</p>
              </div>
            </div>

            <div className="content_item">
            <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_BATH.svg" /></div>
              <div className="text_box">
                <h3>방문목욕</h3>
                <p>목욕 시설을 갖춘 차량, 혹은 가정 내에서 목욕을 지원하는 서비스예요</p>
              </div>
            </div>   
          </div>

        </div>

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