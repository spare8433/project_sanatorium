import React, { useState, useEffect, useCallback} from 'react';
import {Container,Row,Col,Modal,Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import axios from 'axios';
import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import qs from "qs";

require("dotenv").config();

const Search = ({location}) => {
  let [ ,setSearch_text] = useState('');  
  //let [type,setType] = useState('');  
  //let [city,setCity] = useState('');
  
  //let [search_data,setSearchData] = useState('');
  let [search_item,setSearchItem] = useState('');

  let query =qs.parse(location.search, {ignoreQueryPrefix: true});

  let [start,setStart] = useState(1);
  //let [current,setCurrent] = useState(1);
  let [last,setLast] = useState(0);

  let [pageCount,setPageCount] = useState(5);               
  let [pagenationCode,setPagenationCode] = useState('');
  let [json_title,setJson_title] = useState(0);
  let [modalCode,setModalCode] = useState('');
  //let [json_array,setJson_array] = useState([])
  
  const postedItemCount = 16; //화면에 뜨는 갯수

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const makePagenation = useCallback((_current,_pageCount,_start,_last) => {
    let previous = '?';
    var result = []; 

    console.log(_current,_pageCount,_start,_last);
    if(query?.type) 
      previous += `type=${query.type}`;
    if(query?.city) 
      previous += `&city=${query.city}`;    
    if(query?.search_text) 
      previous += `&search_text=${query.search_text}`;    

    if(_current > 1){
      result.push(<Link to={{
        pathname: '/search',
        search: `${previous}&p=${Number(_current)-1}`    
      }}><a href='#!'>&lt;</a></Link>);
    }

    for(var i = _start; i <= _pageCount;i++){                  
      result.push(<Link to={{
        pathname: '/search',
        search: `${previous}&p=${i}`
      }}><a href='#!'>{i}</a></Link>);        
    }

    if(_current < _last){
      result.push(<Link to={{
        pathname: '/search',
        search: `${previous}&p=${Number(_current)+1}`
      }}><a href='#!'>&gt;</a></Link>);
    }
    setPagenationCode(result);
  },[query])

  //apu 호출부분 
  useEffect(() => { const apiCall = async () => {
    console.log(process.env.REACT_APP_API_KEY);    
    let API_url = '';        
    let _json_title = json_title;

    let newCurrent = query.p ?? 1;
    let pagenation_start = start;
    let pagenation_last = last;
    let newPageCount = pageCount === 1 ? 5 : pageCount;
    
    let _search_text ="";
    let _type ="";
    let _city ="";

    if(query.hasOwnProperty('search_text')){
      _search_text = query.search_text;
      setSearch_text(_search_text); 
    }        
    if(query.hasOwnProperty('type')){
      _type = query.type;
      //setType(_type);
    }          
    if(query.hasOwnProperty('city')){
      _city = query.city;
      //setCity(_city);
    }
      
    console.log(newCurrent,newPageCount,pagenation_start,pagenation_last);
    //setCurrent(newCurrent);  
        
    //console.log(type(API_info));
    console.log(query.type);
    if(query.hasOwnProperty('type')){
      
      let detail_address = '';
      let queryKey =`KEY=${process.env.REACT_APP_API_KEY}`
      let queryType = '&Type=json'
      let queryPageSize='';
      let querySiName =''

      switch(_type){
        case '요양병원':
          detail_address = 'Hosptlevaltnrcper?'
          querySiName = `&SIGUNGU_NM=${_city}`
          queryPageSize= '&pSize=212';                    
          _json_title = 0;                  
          break;
        case '요양원':
          detail_address = 'OldpsnMedcareWelfac?'
          querySiName = `&SIGUNGU_NM=${_city}`           
          queryPageSize='&pSize=1000';
          _json_title = 1;          
          break;
        case '방문요양':
        case '방문목욕':
        case '주야간보호':
          detail_address = 'HtygdWelfaclt?'
          querySiName = `&SIGUNGU_NM=${_city}`           
          queryPageSize='&pSize=554';
          _json_title = 2;          
          break;
        default : 
          break;           
      }
      setJson_title(_json_title);
      API_url = 'https://openapi.gg.go.kr/' + detail_address + queryKey + queryType + querySiName + queryPageSize;
    }

    console.log(API_url);

    await axios.get(`${API_url}`).then(function (response) {
      // response
      let json_data = "";   
      if(_json_title === 0){
        json_data = JSON.stringify(response.data.Hosptlevaltnrcper[1].row);  
      }else if(_json_title === 1){
        json_data = JSON.stringify(response.data.OldpsnMedcareWelfac[1].row);         
      }else if(_json_title === 2){
        json_data = JSON.stringify(response.data.HtygdWelfaclt[1].row); 
      }else{
      }      
      console.log(json_data)
      let json_array = JSON.parse(json_data);
      //setJson_array(json_array);   


      var searchedData = [];
      var result = [];
      
      let slice_start = (newCurrent-1)*16;
      let slice_end =  newCurrent*16;

      //console.log(_search_text);
      if(_json_title === 0){
        searchedData = json_array.filter( row => row.INST_NM.search(_search_text) !== -1 );      
        result = searchedData.slice(slice_start, slice_end).map( (row,index) =>                 
          <div key={'searched_faclt_'+index} className="item" onClick={()=>{compose_modal(row,_json_title);handleShow();}}>
            <div className="title">{row.INST_NM}</div>
            <div className="address">{row.REFINE_ROADNM_ADDR}</div>
            <div className="type">{row.DIV_NM}</div>
            <div className="tag">{row.GRAD}</div>
          </div>
        ); 
      }else{
        searchedData = json_array.filter(row => row.FACLT_NM.search(_search_text) !== -1 );              
        result = searchedData.slice(slice_start, slice_end).map( (row,index) =>
          <div key={'searched_faclt_'+index} className="item" onClick={()=>{compose_modal(row,_json_title);handleShow();}}>
            <div className="title">{row.FACLT_NM}</div>
            <div className="address">{row.REFINE_ROADNM_ADDR}</div>
            <div className="type">{row.FACLT_KIND_NM}</div>
            <div className="tag">{row.FACLT_INSTL_DETAIL_DE}</div>
          </div>
        );                      
      }    
      
      setSearchItem(result);
      //console.log(searchedData.length);
      console.log(searchedData.length);
      console.log(postedItemCount);
      // 16개 이하일대 
      if(searchedData.length < postedItemCount){
        pagenation_last = 1;
        newPageCount =1;
        setLast(pagenation_last);
      }else{
        if ((searchedData.length) % postedItemCount > 0){
          pagenation_last = parseInt((searchedData.length) / postedItemCount + 1);
          setLast(pagenation_last);
        }else{
          pagenation_last =parseInt((searchedData.length) / postedItemCount);
          setLast(pagenation_last);
        }        
      }
      setPageCount(newPageCount);

      //console.log(newPageCount);      
      
      console.log(newCurrent,newPageCount,pagenation_start,pagenation_last);

      if(newCurrent > newPageCount){
        if(newPageCount+5 <= last){
          newPageCount +=5;
        }else{                       
          newPageCount = pagenation_last;
        }
        pagenation_start += 5;     
        
      }else if(newCurrent < start){                                  
          pagenation_start -= 5;
          newPageCount = pagenation_start * 5;                                    
      }
      setPageCount(newPageCount);

      setStart(pagenation_start);

      makePagenation(newCurrent,newPageCount,pagenation_start,pagenation_last);
     
      
      //console.log(result);
    }).catch(function (error) {
        // 오류발생시 실행
    }).then(function() {
        // 항상 실행       
    });
    
  }; 
    apiCall(); 
  }, [json_title, last, location, makePagenation, pageCount, query, start])
  


  // function makePagenation(_current,_pageCount,_start,_last) {
  //   let previous = '?';
  //   var result = []; 

  //   console.log(_current,_pageCount,_start,_last);
  //   if(query?.type) 
  //     previous += `type=${query.type}`;
  //   if(query?.city) 
  //     previous += `&city=${query.city}`;    
  //   if(query?.search_text) 
  //     previous += `&search_text=${query.search_text}`;    

  //   if(_current > 1){
  //     result.push(<Link to={{
  //       pathname: '/search',
  //       search: `${previous}&p=${Number(_current)-1}`    
  //     }}><a href='#!'>&lt;</a></Link>);
  //   }

  //   for(var i = _start; i <= _pageCount;i++){                  
  //     result.push(<Link to={{
  //       pathname: '/search',
  //       search: `${previous}&p=${i}`
  //     }}><a href='#!'>{i}</a></Link>);        
  //   }

  //   if(_current < _last){
  //     result.push(<Link to={{
  //       pathname: '/search',
  //       search: `${previous}&p=${Number(_current)+1}`
  //     }}><a href='#!'>&gt;</a></Link>);
  //   }
  //   setPagenationCode(result);
  // }

  function compose_modal(tar,_json_title) { 
    console.log(tar);
    var result=[];  
         
    if(_json_title === 0){
      result =
        <Container className="search_modal">
          <Row>
            <Col className="col_th">시설명</Col>
            <Col lg={9}>{tar.INST_NM}</Col>        
          </Row>
          <Row>
            <Col className="col_th">시설종류</Col>
            <Col lg={9}>{tar.DIV_NM}</Col>        
          </Row>
          <Row>
            <Col className="col_th">평가등급</Col>
            <Col lg={9}>{tar.GRAD}</Col>        
          </Row>
          <Row>
            <Col className="col_th">도로명주소</Col>
            <Col lg={9}>{tar.REFINE_ROADNM_ADDR}</Col>        
          </Row>
          <Row>
            <Col className="col_th">지번주소</Col>
            <Col lg={9}>{tar.REFINE_LOTNO_ADDR}</Col>        
          </Row>
          <Row>
            <Col className="col_th">우편번호</Col>
            <Col lg={9}>{tar.REFINE_ZIP_CD}</Col>        
          </Row>         
          <Row>
            {/*<Col>지도가 들어가질도</Col>*/}
          </Row>
        </Container>               
      setModalCode(result);
    }else{            
      result =
        <Container className="search_modal">
          <Row>
            <Col className="col_th">시설명</Col>
            <Col lg={9}>{tar.FACLT_NM}</Col>        
          </Row>
          <Row>
            <Col className="col_th">시설종류</Col>
            <Col lg={9}>{tar.FACLT_KIND_NM}</Col>        
          </Row>
          <Row>
            <Col className="col_th">도로명주소</Col>
            <Col lg={9}>{tar.REFINE_ROADNM_ADDR}</Col>        
          </Row>
          <Row>
            <Col className="col_th">지번주소</Col>
            <Col lg={9}>{tar.REFINE_LOTNO_ADDR}</Col>        
          </Row>
          <Row>
            <Col className="col_th">전화번호</Col>
            <Col lg={9}>{tar.DETAIL_TELNO}</Col>        
          </Row>
          <Row>
            <Col className="col_th">우편번호</Col>
            <Col lg={9}>{tar.REFINE_ZIP_CD}</Col>        
          </Row>
          <Row>
            <Col className="col_th">FAX번호</Col>
            <Col lg={9}>{tar.DETAIL_FAXNO}</Col>        
          </Row>          
          <Row>
            <Col className="col_th">설치일자</Col>
            <Col lg={9}>{tar.FACLT_INSTL_DETAIL_DE}</Col>        
          </Row>
          <Row>
            <Col className="col_th">입소정원</Col>
            <Col>{tar.ENTRNC_PSN_CAPA}</Col>   
            <Col className="col_th">종사자정원</Col>
            <Col>{tar.ENFLPSN_PSN_CAPA}</Col>      
          </Row>
          <Row>
            <Col className="col_th">운영</Col>
            <Col>{tar.INSTL_MAINBD_DIV_NM}</Col>
            <Col className="col_th">영리/비영리</Col>
            <Col>{tar.PRFTMK_DIV_NM}</Col>             
          </Row>
          <Row>
            {/*<Col>지도가 들어가질도</Col>*/}
          </Row>
        </Container>               
      setModalCode(result);
    }
  }

  return (
    <div className="Search">      
      <div className="Main_content">
        <div className="containor_box">
          <div className="containor_content"> 
            {!!search_item.length && search_item}
          </div>
          <div className="pagination">
            {!!pagenationCode.length && pagenationCode}
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>시설 상세정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {modalCode}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-grid gap-2">
              <Button variant="outline-secondary" size="lg" onClick={handleClose}>닫기</Button>
          </div>         
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Search;