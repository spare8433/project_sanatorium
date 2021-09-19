import React, { useState, useEffect} from 'react';
import axios from 'axios';
import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import qs from "qs";

const Search = ({ location }) => {
  console.log(location);  
  let query =qs.parse(location.search, {ignoreQueryPrefix: true});
  console.log(query);

  let [search_text,setSearch_text] = useState('');  
  let [type,setType] = useState('시설을 선택하세요');  
  let [city,setCity] = useState('도시를 선택하세요');
  let [district,setDistrict] = useState('지역을 선택하세요');

  useEffect(()=> {
    if(query.hasOwnProperty('type')){
      switch(query.type){
        case 'hospital': setType('요양병원');
          break;
        case 'sanatorum': setType('요양원');
          break;
        case 'visit_care': setType('방문요양');
          break;
        case 'visit_bath': setType('방문목욕');
          break;
        case 'day_protection': setType('주야간보호');
          break;
        default : setType('시설을 선택하세요');
          break;           
      }      
    }
    if(query.hasOwnProperty('search_text')){
      
    }
  }, [])

  // apu 호출부분 
  // useEffect(() => { const apiCall = async () => {
  //   let homecare_url = "https://openapi.gg.go.kr/HtygdWelfaclt"
  //   let username = "hoonkk";
  //   const response = await axios.get(`${homecare_url}/${username}`); 
  //   console.log(response.data); 
  // }; 
  //   apiCall(); 
  // }, [])

  


  return (
    <div className="Search">
      <div className="select_box">
        <DropdownButton id="type" title={type} >
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>요양병원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>요양원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>방문요양</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="city" title={city} >
          <Dropdown.Item onClick={(e) => setCity(e.target.textContent)}>성남시</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setCity(e.target.textContent)}>ㅇㅇ시</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setCity(e.target.textContent)}>ㅁㅁ시</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="district" title={district} >
          <Dropdown.Item onClick={(e) => setDistrict(e.target.textContent)}>산성동</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDistrict(e.target.textContent)}>태평동</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setDistrict(e.target.textContent)}>복정동</Dropdown.Item>
        </DropdownButton>
      </div>
    </div>
  );
};

export default Search;