import React, { useState} from 'react';

import './search.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Search = (props) => {
  let [type,setTitle] = useState('시설을 선택하세요');  
  let [city,setCity] = useState('도시를 선택하세요');
  let [district,setDistrict] = useState('지역을 선택하세요');


  return (
    <div className="Search">
      <div className="select_box">
        <DropdownButton id="type" title={type} >
          <Dropdown.Item onClick={(e) => setTitle(e.target.textContent)}>요양병원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setTitle(e.target.textContent)}>요양원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setTitle(e.target.textContent)}>방문요양</Dropdown.Item>
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