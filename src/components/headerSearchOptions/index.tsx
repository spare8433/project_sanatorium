import { FacilityCategory, HosGradeList, SntFacCategory, WfSFacCategory } from '@assets/staticData/facilityType'
import { FormEventHandler } from 'react'
import { ButtonBox, Containor, HeaderSearchOptionList } from './style'
import {
  Button,
  Form,
  ToggleButton,
  ToggleButtonGroup,
  ToggleButtonGroupProps,
  ToggleButtonProps,
} from 'react-bootstrap'
import { CityList } from '@assets/staticData/cityList'
import { useNavigate } from 'react-router-dom'
import useSearchQuery from '@hooks/useSearchQuery'
import { SearchChangeFnsType, SearchStatesType } from 'types/searchState'

interface Props {
  turnOff: () => void
  states: SearchStatesType
  changeFns: SearchChangeFnsType
}

const SearchRadioButton = (props: ToggleButtonProps) => (
  <ToggleButton {...props} variant="outline-primary" type="radio" />
)

const SearchRadioButtonGroup = (props: ToggleButtonGroupProps<any>) => (
  <ToggleButtonGroup {...props} type="radio" name={props.name ?? 'defaultName'} />
)

const HeaderSearchOptions = ({ turnOff, states, changeFns }: Props) => {
  const navigate = useNavigate()
  const { facCtg, city, detailCtg, profit, grade } = states
  const getSearchQuery = useSearchQuery()
  const { changeFacCtg, changeCity, changeDetailCtg, changeProfit, changeGrade } = changeFns

  const submitSearchOption: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    navigate({
      pathname: `/search`,
      search: getSearchQuery(states),
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
                <option key={`cityList-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
          </li>

          <li>
            <strong>시설 분류</strong>
            <SearchRadioButtonGroup name="facility-category" value={facCtg} onChange={(_v, e) => changeFacCtg(e)}>
              {FacilityCategory.map((ctg) => (
                <SearchRadioButton key={`facilityCategory-${ctg}`} id={ctg} value={ctg}>
                  {ctg}
                </SearchRadioButton>
              ))}
            </SearchRadioButtonGroup>
          </li>

          {facCtg === '요양병원' && (
            <li>
              <strong>등급</strong>
              <SearchRadioButtonGroup name="grade" value={grade} onChange={(_v, e) => changeGrade(e)}>
                <SearchRadioButton id="등급-전체" value="전체">
                  전체
                </SearchRadioButton>
                {HosGradeList.map((grd) => (
                  <SearchRadioButton key={`hosGradeList-${grd}`} id={grd} value={grd}>
                    {grd}
                  </SearchRadioButton>
                ))}
              </SearchRadioButtonGroup>
            </li>
          )}

          {/* 요양시설의 상세카테고리  */}
          {facCtg === '요양시설' && (
            <li>
              <strong>상세 카테고리</strong>
              <SearchRadioButtonGroup name="detail-category" value={detailCtg} onChange={(_v, e) => changeDetailCtg(e)}>
                <SearchRadioButton id="요양시설-전체" value="전체">
                  전체
                </SearchRadioButton>
                {SntFacCategory.map((ctg) => (
                  <SearchRadioButton key={`sntFacCategory-${ctg}`} id={ctg} value={ctg}>
                    {ctg}
                  </SearchRadioButton>
                ))}
              </SearchRadioButtonGroup>
            </li>
          )}

          {/* 재가노인복지시설의 상세카테고리  */}
          {facCtg === '재가노인복지시설' && (
            <li>
              <strong>상세 카테고리</strong>
              <ToggleButtonGroup name="detail-category" value={detailCtg} onChange={(_v, e) => changeDetailCtg(e)}>
                <SearchRadioButton id="재가노인복지시설-전체" value="전체">
                  전체
                </SearchRadioButton>
                {WfSFacCategory.map((ctg) => (
                  <SearchRadioButton key={`WfSFacCategory-${ctg}`} id={ctg} value={ctg}>
                    {ctg}
                  </SearchRadioButton>
                ))}
              </ToggleButtonGroup>
            </li>
          )}

          {/* 요양병원 제외 재가노인복지시설과 요양시설인경우 추가되는 영리 여부 옵션  */}
          {facCtg !== '요양병원' && (
            <li>
              <strong>영리 여부</strong>
              <ToggleButtonGroup name="profit" value={profit} onChange={(_v, e) => changeProfit(e)}>
                <SearchRadioButton id="요양병원-전체" value="전체">
                  전체
                </SearchRadioButton>
                <SearchRadioButton id="영리" value="영리">
                  영리
                </SearchRadioButton>
                <SearchRadioButton id="비영리" value="비영리">
                  비영리
                </SearchRadioButton>
              </ToggleButtonGroup>
            </li>
          )}
        </HeaderSearchOptionList>

        <ButtonBox>
          <Button variant="primary" type="submit" size="lg">
            검색
          </Button>
        </ButtonBox>
      </Form>
    </Containor>
  )
}

export default HeaderSearchOptions
