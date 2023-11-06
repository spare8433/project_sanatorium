import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import CityList from '@assets/staticData/cityList'

const Header = () => {
  let navigate = useNavigate()

  let [type, setType] = useState('요양원')
  let [city, setCity] = useState('성남시')
  let [province, setProvince] = useState('경기도')

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      navigate({
        pathname: `/search`,
        search: `?search_text=${e.target.value}&type=${type}&city=${city}`,
      })
    }
  }

  function show_cityList() {
    let result = []

    // result = Object.keys(cityList).map((row,index) =>
    //   <Dropdown.Item key={'city_'+ index} onClick={(e) => setCity(e.target.textContent)}>{row}</Dropdown.Item>
    // );

    // for (const key in cityList) {
    //   if (Object.hasOwnProperty.call(cityList, key)) {
    //     result.push(<Dropdown.Item onClick={(e) => setCity(e.target.textContent)}>{key}</Dropdown.Item>)
    //   }
    // }
    console.log(Object.entries(CityList))

    for (var [key, value] of Object.entries(CityList)) {
      result.push(
        <Dropdown.Item
          data-value={value}
          onClick={(e) => {
            setCity(e.target.textContent)
          }}
        >
          {key}
        </Dropdown.Item>,
      )
    }
    return result
  }

  return (
    <div className="Header">
      <div className="logo_box">
        <Link to={`/`}>
          <img src="img/logo.png" alt="care_home" />
        </Link>
        <ul>
          <li key={'로그인/회원가입'}>로그인/회원가입</li>
        </ul>
      </div>

      <div className="search_box">
        <div className="image">
          <img src="img/search.png" alt="#!" />
        </div>
        <input type="text" placeholder="시설 검색" onKeyPress={handleKeyPress} />
      </div>

      <div className="select_box">
        <DropdownButton id="type" title={type}>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>요양병원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>요양원</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>방문요양</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>방문목욕</Dropdown.Item>
          <Dropdown.Item onClick={(e) => setType(e.target.textContent)}>주야간보호</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="province" title={province}>
          <Dropdown.Item onClick={(e) => setProvince(e.target.textContent)}>경기도</Dropdown.Item>
        </DropdownButton>

        <DropdownButton id="city" title={city}>
          {show_cityList()}
        </DropdownButton>
      </div>
    </div>
  )
}

export default Header
