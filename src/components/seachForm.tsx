import { KeyboardEventHandler, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import CityList from '@assets/staticData/cityList'
import styled from 'styled-components'
import { FacilityCategory } from '@assets/staticData/facilityType'

const SearchContainor = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-bottom: 2rem;
`

const SearchInputBox = styled.div`
  font-size: 1.8rem;
  background-color: white;
  height: auto;
  display: flex;
  border-radius: 1rem;
  padding: 1rem 2rem;

  input[type='text'] {
    background-color: white;
    width: 90%;
    margin: 0;
    margin-left: 1.5rem;
    padding: 0%;
    border: none !important;
    outline: none !important;
  }
`

const SelectBox = styled.div`
  width: 100%;
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-between;

  .dropdown {
    width: 30%;
  }
  .dropdown:nth-child(3) .dropdown-menu.show {
    height: 20rem;
    overflow-y: scroll;
  }
  .dropdown-menu.show {
    width: 100% !important;
    margin-top: 0.1rem;
  }
  .dropdown-item {
    width: 100%;
    font-size: 1.4rem !important;
  }
  .btn-primary,
  .btn-primary:focus,
  .btn-primary:active,
  .btn-primary:hover,
  .show > .btn-primary.dropdown-toggle {
    width: 100%;
    background-color: white;
    color: black;
    outline: none;
    border: none;
    font-size: 1.8rem;
    font-weight: 600;
    box-shadow: 0.25rem 0.5rem 0.5rem rgb(30 40 80 / 10%);
  }
`

const SeachForm = () => {
  const navigate = useNavigate()

  let [type, setType] = useState('요양원')
  let [city, setCity] = useState('성남시')
  let [province, setProvince] = useState('경기도')

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      navigate({
        pathname: `/search`,
        search: `?search_text=${e.currentTarget.value}&type=${type}&city=${city}`,
      })
    }
  }

  // 행정구역 도 구분 카테고리
  const provinceCategory = ['경기도']

  return (
    <SearchContainor>
      <SearchInputBox>
        <div className="image">
          <img src="img/search.png" alt="#!" />
        </div>
        <input type="text" placeholder="시설 검색" onKeyDown={handleKeyDown} />
      </SearchInputBox>

      <SelectBox>
        {/* 행정구역 도 구분 카테고리 드롭 다운 버튼 */}
        <DropdownButton id="province" title={province}>
          {provinceCategory.map((pvcCtg) => (
            <Dropdown.Item key={pvcCtg} onClick={() => setProvince(pvcCtg)}>
              {pvcCtg}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        {/* 행정구역 시 구분 카테고리 드롭 다운 버튼 */}
        <DropdownButton id="city" title={city}>
          {Object.entries(CityList).map(([cityNm]) => (
            <Dropdown.Item key={cityNm} onClick={() => setCity(cityNm)}>
              {cityNm}
            </Dropdown.Item>
          ))}
        </DropdownButton>

        {/* 요양시설 카테고리 드롭 다운 버튼 */}
        <DropdownButton id="type" title={type}>
          {FacilityCategory.map((facType) => (
            <Dropdown.Item key={facType} onClick={() => setType(facType)}>
              {facType}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </SelectBox>
    </SearchContainor>
  )
}

export default SeachForm
