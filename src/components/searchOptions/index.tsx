import {
  FacilityCategory,
  HosGradeList,
  SntFacCategory,
  WfSFacCategory,
} from '@assets/staticData/facilityType'
import { useContext, FormEventHandler } from 'react'
import { Containor, SearchOptionList } from './style'
import { Button, Form } from 'react-bootstrap'
import { CityList } from '@assets/staticData/cityList'
import SearchOptionContext from '@context/searchOptionContext'
import { useNavigate } from 'react-router-dom'

const SearchOptions = () => {
  const navigate = useNavigate()
  const { states, changeFns, getCurrentQuery } = useContext(SearchOptionContext)
  const { facCtg, city, province, detailCtg, profit, grade } = states
  const { changeFacCtg, changeCity, changeProvince, changeDetailCtg, changeProfit, changeGrade } =
    changeFns

  const submitSearchOption: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    navigate({
      pathname: `/search`,
      search: getCurrentQuery(),
    })
  }

  return (
    <Containor>
      <Form onSubmit={submitSearchOption}>
        <SearchOptionList>
          {/* <li>
          <strong>도</strong>
          <ToggleButtonGroup
            type="radio"
            name="province"
            value={province}
            onChange={changeProvince}
          >
            <ToggleButton variant="outline-primary" id="경기도" type="radio" value="경기도">
              경기도
            </ToggleButton>
          </ToggleButtonGroup>
        </li> */}

          <span>
            <strong>시설 분류</strong>
            <Form.Select onChange={changeFacCtg} value={facCtg}>
              {FacilityCategory.map((ctg) => (
                <option value={ctg}>{ctg}</option>
              ))}
            </Form.Select>
          </span>

          <span>
            <strong>시 · 군</strong>
            <Form.Select onChange={changeCity} value={city}>
              <option value="전체">전체</option>
              {CityList.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </Form.Select>
          </span>

          {facCtg === '요양병원' && (
            <span>
              <strong>등급</strong>
              <Form.Select onChange={changeGrade} value={grade}>
                <option value="전체">전체</option>
                {HosGradeList.map((grd) => (
                  <option value={grd}>{grd}</option>
                ))}
              </Form.Select>
            </span>
          )}

          {/* 요양시설의 상세카테고리  */}
          {facCtg === '요양시설' && (
            <span>
              <strong>상세 카테고리</strong>
              <Form.Select onChange={changeDetailCtg} value={detailCtg}>
                <option value="전체">전체</option>
                {SntFacCategory.map((ctg) => (
                  <option value={ctg}>{ctg}</option>
                ))}
              </Form.Select>
            </span>
          )}

          {/* 재가노인복지시설의 상세카테고리  */}
          {facCtg === '재가노인복지시설' && (
            <span>
              <strong>상세 분류</strong>
              <Form.Select onChange={changeDetailCtg} value={detailCtg}>
                <option value="전체">전체</option>
                {WfSFacCategory.map((ctg) => (
                  <option value={ctg}>{ctg}</option>
                ))}
              </Form.Select>
            </span>
          )}

          {/* 요양병원 제외 재가노인복지시설과 요양시설인경우 추가되는 영리 여부 옵션  */}
          {facCtg !== '요양병원' && (
            <span>
              <strong>영리 여부</strong>
              <Form.Select onChange={changeProfit} value={profit}>
                <option value="전체">전체</option>
                <option value="영리">영리</option>
                <option value="비영리">비영리</option>
              </Form.Select>
            </span>
          )}
        </SearchOptionList>

        <Button variant="primary" type="submit" size="lg">
          검색
        </Button>
      </Form>
    </Containor>
  )
}

export default SearchOptions
