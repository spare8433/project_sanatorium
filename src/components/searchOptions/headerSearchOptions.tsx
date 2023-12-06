import {
  FacilityCategory,
  HosGradeList,
  SntFacCategory,
  WfSFacCategory,
} from '@assets/staticData/facilityType'
import { useContext, FormEventHandler } from 'react'
import { Containor, HeaderSearchOptionList } from './style'
import { Button, Form, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { CityList } from '@assets/staticData/cityList'
import SearchOptionContext from '@context/searchOptionContext'
import { useNavigate } from 'react-router-dom'

interface Props {
  turnOff: () => void
}

const SearchOptions = ({ turnOff }: Props) => {
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
    turnOff()
  }

  return (
    <Containor>
      <Form onSubmit={submitSearchOption}>
        <HeaderSearchOptionList>
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

          <li>
            <strong>시 · 군</strong>
            <Form.Select onChange={changeCity} value={city}>
              <option value="전체">전체</option>
              {CityList.map((city) => (
                <option value={city}>{city}</option>
              ))}
            </Form.Select>
          </li>

          <li>
            <strong>시설 분류</strong>
            <ToggleButtonGroup
              type="radio"
              name="facility-category"
              value={facCtg}
              onChange={(v, e) => changeFacCtg(e)}
            >
              {FacilityCategory.map((ctg) => (
                <ToggleButton variant="outline-primary" id={ctg} type="radio" value={ctg}>
                  {ctg}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </li>

          {facCtg === '요양병원' && (
            <li>
              <strong>등급</strong>
              <ToggleButtonGroup
                type="radio"
                name="grade"
                value={grade}
                onChange={(v, e) => changeGrade(e)}
              >
                <ToggleButton variant="outline-primary" id="등급-전체" type="radio" value="전체">
                  전체
                </ToggleButton>
                {HosGradeList.map((grd) => (
                  <ToggleButton variant="outline-primary" id={grd} type="radio" value={grd}>
                    {grd}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </li>
          )}

          {/* 요양시설의 상세카테고리  */}
          {facCtg === '요양시설' && (
            <li>
              <strong>상세 카테고리</strong>
              <ToggleButtonGroup
                type="radio"
                name="detail-category"
                value={detailCtg}
                onChange={(v, e) => changeDetailCtg(e)}
              >
                <ToggleButton
                  variant="outline-primary"
                  id="요양시설-전체"
                  type="radio"
                  value="전체"
                >
                  전체
                </ToggleButton>
                {SntFacCategory.map((ctg) => (
                  <ToggleButton variant="outline-primary" id={ctg} type="radio" value={ctg}>
                    {ctg}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </li>
          )}

          {/* 재가노인복지시설의 상세카테고리  */}
          {facCtg === '재가노인복지시설' && (
            <li>
              <strong>상세 카테고리</strong>
              <ToggleButtonGroup
                type="radio"
                name="detail-category"
                value={detailCtg}
                onChange={(v, e) => changeDetailCtg(e)}
              >
                <ToggleButton
                  variant="outline-primary"
                  id="재가노인복지시설-전체"
                  type="radio"
                  value="전체"
                >
                  전체
                </ToggleButton>
                {WfSFacCategory.map((ctg) => (
                  <ToggleButton variant="outline-primary" id={ctg} type="radio" value={ctg}>
                    {ctg}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </li>
          )}

          {/* 요양병원 제외 재가노인복지시설과 요양시설인경우 추가되는 영리 여부 옵션  */}
          {facCtg !== '요양병원' && (
            <li>
              <strong>영리 여부</strong>
              <ToggleButtonGroup
                type="radio"
                name="profit"
                value={profit}
                onChange={(v, e) => changeProfit(e)}
              >
                <ToggleButton
                  variant="outline-primary"
                  id="요양병원-전체"
                  type="radio"
                  value="전체"
                >
                  전체
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="영리" type="radio" value="영리">
                  영리
                </ToggleButton>
                <ToggleButton variant="outline-primary" id="비영리" type="radio" value="비영리">
                  비영리
                </ToggleButton>
              </ToggleButtonGroup>
            </li>
          )}
        </HeaderSearchOptionList>

        <Button variant="primary" type="submit" size="lg">
          검색
        </Button>
      </Form>
    </Containor>
  )
}

export default SearchOptions
