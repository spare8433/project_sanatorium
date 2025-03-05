import { FormEventHandler } from "react";
import { ButtonBox, Containor, SearchOptionList } from "./style";
import { Button, Form } from "react-bootstrap";
import { CITY_NAMES } from "@constants/city";
import useSearchQuery from "@hooks/useSearchQuery";
import {
  FACILITY_CATEGORIES,
  HOSPITAL_GRADES,
  SANATORIUM_CATEGORIES,
  SERVICE_FACILITY_CATEGORIES,
} from "@constants/facility";

interface Props {
  states: FullSearchStatesType;
  changeFns: SearchChangeFnsType;
}

const SearchOptions = ({ states, changeFns }: Props) => {
  const getSearchQuery = useSearchQuery();
  const { facCtg, city, detailCtg, profit, grade } = states;
  const { changeFacCtg, changeCity, changeDetailCtg, changeProfit, changeGrade } = changeFns;

  const submitSearchOption: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    location.href = getSearchQuery(states);
  };

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
              {FACILITY_CATEGORIES.map((ctg) => (
                <option key={`facilityCategory-${ctg}`} value={ctg}>
                  {ctg}
                </option>
              ))}
            </Form.Select>
          </span>

          <span>
            <strong>시 · 군</strong>
            <Form.Select onChange={changeCity} value={city}>
              <option value="전체">전체</option>
              {CITY_NAMES.map((city) => (
                <option key={`cityList-${city}`} value={city}>
                  {city}
                </option>
              ))}
            </Form.Select>
          </span>

          {facCtg === "요양병원" && (
            <span>
              <strong>등급</strong>
              <Form.Select onChange={changeGrade} value={grade}>
                <option value="전체">전체</option>
                {HOSPITAL_GRADES.map((grd) => (
                  <option key={`hosGradeList-${grd}`} value={grd}>
                    {grd}
                  </option>
                ))}
              </Form.Select>
            </span>
          )}

          {/* 요양시설의 상세카테고리  */}
          {facCtg === "요양시설" && (
            <span>
              <strong>상세 카테고리</strong>
              <Form.Select onChange={changeDetailCtg} value={detailCtg}>
                <option value="전체">전체</option>
                {SANATORIUM_CATEGORIES.map((ctg) => (
                  <option key={`sntFacCategory-${ctg}`} value={ctg}>
                    {ctg}
                  </option>
                ))}
              </Form.Select>
            </span>
          )}

          {/* 재가노인복지시설의 상세카테고리  */}
          {facCtg === "재가노인복지시설" && (
            <span>
              <strong>상세 분류</strong>
              <Form.Select onChange={changeDetailCtg} value={detailCtg}>
                <option value="전체">전체</option>
                {SERVICE_FACILITY_CATEGORIES.map((ctg) => (
                  <option key={`SERVICE_FACILITY_CATEGORIES-${ctg}`} value={ctg}>
                    {ctg}
                  </option>
                ))}
              </Form.Select>
            </span>
          )}

          {/* 요양병원 제외 재가노인복지시설과 요양시설인경우 추가되는 영리 여부 옵션  */}
          {facCtg !== "요양병원" && (
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

        <ButtonBox>
          <span> * 화면에 시설 정보를 클릭시 상세정보를 확인 할 수 있습니다.</span>
          <Button variant="primary" type="submit" size="lg">
            검색
          </Button>
        </ButtonBox>
      </Form>
    </Containor>
  );
};

export default SearchOptions;
