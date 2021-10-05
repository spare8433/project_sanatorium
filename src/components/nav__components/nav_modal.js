import React, {Component} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class Nav_modal extends Component {
  constructor(props) {
    super(props);
    this.state={
      lgShow: false      
    }
  }
  setLgShow(pro){
    this.setState({
      lgShow:pro
    })
  }
  Example() {
    return (
      <div className="Nav_modal">
      <div className="content_title">
        <h2> 특정 요양시설을 찾으세요?</h2>
        {/* <a onClick={() => this.setLgShow(true)}>요양시설별 특징</a> */}
        {/* <Modal
          size="lg"
          show={this.state.lgShow}
          onHide={() => this.setLgShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              요양시설 안내
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="nav_modal_content">
              <h1>입소 시설</h1>
              <div className="grid_box">

                <div className="content_item">
                  <div className="image"><img src="https://caredoc.kr/img/main/icon/ADMISSION_FACILITY.svg" /></div>
                  <div className="text_box">
                    <h3>요양병원</h3>
                    <p>꾸준한 진료 및 치료, 재활이 필요하신 분에게 필요해요</p>
                  </div>
                </div> 

                <div className="content_item">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/NURSING_HOSPITAL.svg" /></div>
                  <div className="text_box">
                    <h3>요양원</h3>
                    <p>안정적인 운영 체계로 요양 서비스를 받는 10인 이상의 시설이예요</p>
                  </div>
                </div>

              </div>

              <h1>보호 시설</h1>
              <div className="grid_box">

                <div className="content_item">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_CARE.svg" /></div>
                  <div className="text_box">
                    <h3>주야간보호</h3>
                    <p>주간 또는 야간 일정시간 어르신을 보호하며 신체활동 및 심신기능을 지원하는 서비스예요</p>
                  </div>
                </div> 

              </div>

              <h1>요양 지원 시설</h1>
              <div className="grid_box">

                <div className="content_item">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_BATH.svg" /></div>
                  <div className="text_box">
                    <h3>방문요양</h3>
                    <p>어르신 가정에 요양보호사가 직접 방문하여 필요한 일상 생활을 지원해요</p>
                  </div>
                </div>

                <div className="content_item">
                <div className="image"><img src="https://caredoc.kr/img/main/icon/VISITING_CARE.svg" /></div>
                  <div className="text_box">
                    <h3>방문목욕</h3>
                    <p>목욕 시설을 갖춘 차량, 혹은 가정 내에서 목욕을 지원하는 서비스예요</p>
                  </div>
                </div>  

              </div>
              <div className="d-grid gap-2">
                <Button variant="outline-secondary" size="lg" onClick={()=> this.setLgShow(false)}>닫기</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal> */}
      </div>
      </div>
    );
  }
  render() {
    return (
      <div>
      {this.Example()}
      </div>
    );
  }
}

export default Nav_modal;