import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import {Link} from "react-router-dom";

import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


const Header = () => {
   
  let history = useHistory();

  let [type,setType] = useState('요양원');  
  let [city,setCity] = useState('성남시');
  let [province,setProvince] = useState('경기도');

  function handleKeyPress(e){
    if (e.key === "Enter") {
      history.push({ search:`?search_text=${e.target.value}&type=${type}&city=${city}`,pathname: `/search` });
    }
  }

  // 경기데이터드림 OpenAPI에서 사용하고 있는 시군별 시군코드
  let cityList = {
    가평군 : 41820,    고양시 : 41280,    과천시 : 41290,    광명시 : 41210,    
    광주시 : 41610,    구리시 : 41310,    군포시 : 41410,    김포시 : 41570,
    남양주시 : 41360,  동두천시 : 41250,  부천시 : 41190,    성남시 : 41130,
    수원시 : 41110,    시흥시 : 41390,    안산시 : 41270,    안성시 : 41550,
    안양시 : 41170,    양주시 : 41630,    양평군 : 41830,    여주시 : 41670,
    연천군 : 41800,    오산시 : 41370,    용인시 : 41460,    의왕시 : 41430,
    의정부시 : 41150,    이천시 : 41500,    파주시 : 41480,    평택시 : 41220,
    포천시 : 41650,    하남시 : 41450,    화성시 : 41590}

  function show_cityList() {
    let result =[];

    // result = Object.keys(cityList).map((row,index) => 
    //   <Dropdown.Item key={'city_'+ index} onClick={(e) => setCity(e.target.textContent)}>{row}</Dropdown.Item>       
    // );

    // for (const key in cityList) {
    //   if (Object.hasOwnProperty.call(cityList, key)) {
    //     result.push(<Dropdown.Item onClick={(e) => setCity(e.target.textContent)}>{key}</Dropdown.Item>)        
    //   }
    // }
    console.log(Object.entries(cityList))

    for (var [key,value] of Object.entries(cityList)){      
      result.push(<Dropdown.Item data-value={value} onClick={(e) => {setCity(e.target.textContent);}}>{key}</Dropdown.Item>)        
    }
    return result
  }

  return (
    <div className="Header">
      <div className="logo_box">
        <Link to={`/`}><img src="img/logo.png" alt="care_home" /></Link>         
        <ul>
          <li key={'로그인/회원가입'}>로그인/회원가입</li>
        </ul>
      </div>     

      <div className="search_box">
        <div className="image"><img src="img/search.png" alt='#!'/></div>
        <input type="text" placeholder="시설 검색" onKeyPress={handleKeyPress}/>
      </div>

      <div className="select_box">
        
        <DropdownButton id="type" title={type} >
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>요양병원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>요양원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>방문요양</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>방문목욕</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>주야간보호</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="province" title={province} >
          <Dropdown.Item onClick={(e) => setProvince(e.target.textContent)}>경기도</Dropdown.Item>          
        </DropdownButton>

        <DropdownButton id="city" title={city} >
          {show_cityList()}         
        </DropdownButton>

        
      </div>

    </div>
  );
}



export default Header;