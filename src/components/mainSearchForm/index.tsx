import SearchFacilityInput from "@components/searchFacilityInput";
import { CITY_NAMES } from "@constants/city";
import {
  FACILITY_CATEGORIES,
  FACILITY_CATEGORY_TYPE,
  HOSPITAL_GRADE_TYPE,
  HOSPITAL_GRADES,
  SANATORIUM_CATEGORIES,
  SANATORIUM_CATEGORY_TYPE,
  SERVICE_FACILITY_CATEGORIES,
  SERVICE_FACILITY_TYPE,
} from "@constants/facility";
import useInput from "@hooks/useInput";
import { useSearchQuery } from "@hooks/useSearchQuery";
import { getHospitalQuery, getSanatoriumQuery, getServiceFacilityQuery } from "@lib/util";
import { Container } from "@styles/common";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import {
  ButtonBox,
  SearchFormBox,
  SearchFormContainer,
  SearchOptionBox,
  SearchOptionList,
  TitleLine,
  TotalSearchContainer,
  WrapSearchBox,
  WrapTitleBox,
} from "./style";

const MainSearchForm = () => {
  const {
    searchText: querySearchText,
    facility: queryFacility,
    sanatoriumCategory: querySanatoriumCategory,
    serviceFacilityCategory: queryServiceFacilityCategory,
    city: queryCity,
    profit: queryProfit,
    grade: queryGrade,
    pageNum: queryPageNum,
  } = useSearchQuery();

  const navigate = useNavigate();

  const [searchText, changeSearchText] = useInput(querySearchText);
  const [facility, changeFacility] = useInput<FacilityType>(queryFacility);
  const [city, changeCity] = useInput<CityName | "all">(queryCity);

  const [sanatoriumCategory, changeSanatoriumCategory] = useInput<SanatoriumFacilityCategory | "all">(
    querySanatoriumCategory,
  );
  const [serviceFacilityCategory, changeServiceFacilityCategory] = useInput<ServiceFacilityCategory | "all">(
    queryServiceFacilityCategory,
  );
  const [profit, changeProfit] = useInput<ProfitType | "all">(queryProfit);
  const [grade, changeGrade] = useInput<HospitalGrade | "all">(queryGrade);
  const [pageNum] = useState(queryPageNum ?? 1);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const basicQuery = { searchText, facility, city, pageNum };

    const searchQuery = {
      hospital: getHospitalQuery({ grade, ...basicQuery }),
      sanatorium: getSanatoriumQuery({ profit, facilityCategory: sanatoriumCategory, ...basicQuery }),
      serviceFacility: getServiceFacilityQuery({ profit, facilityCategory: serviceFacilityCategory, ...basicQuery }),
    };

    return navigate({ pathname: "/search", search: searchQuery[facility] });
  };

  return (
    <SearchFormContainer>
      <Form onSubmit={onSubmit}>
        <TotalSearchContainer>
          <TitleLine>
            <WrapTitleBox>
              <h1>시설찾기</h1>
            </WrapTitleBox>
            <h1>조건에 맞는 요양시설을 찾아보세요</h1>
          </TitleLine>

          <SearchFormBox>
            <WrapSearchBox>
              <SearchFacilityInput value={searchText} onChange={changeSearchText} />
            </WrapSearchBox>
            <SearchOptionBox>
              <Container>
                <SearchOptionList>
                  <span>
                    <strong>시설 분류</strong>
                    <Form.Select onChange={changeFacility} value={facility}>
                      {FACILITY_CATEGORIES.map((ctg) => (
                        <option key={`facilityCategory-${ctg}`} value={ctg}>
                          {FACILITY_CATEGORY_TYPE[ctg]}
                        </option>
                      ))}
                    </Form.Select>
                  </span>

                  <span>
                    <strong>시 · 군</strong>
                    <Form.Select onChange={changeCity} value={city}>
                      <option value="all">전체</option>
                      {CITY_NAMES.map((city) => (
                        <option key={`cityList-${city}`} value={city}>
                          {city}
                        </option>
                      ))}
                    </Form.Select>
                  </span>

                  {facility === "hospital" && (
                    <span>
                      <strong>등급</strong>
                      <Form.Select onChange={changeGrade} value={grade}>
                        <option value="all">전체</option>
                        {HOSPITAL_GRADES.map((grd) => (
                          <option key={`hospitalGrade-${grd}`} value={grd}>
                            {HOSPITAL_GRADE_TYPE[grd]}
                          </option>
                        ))}
                      </Form.Select>
                    </span>
                  )}

                  {/* 요양시설의 상세카테고리  */}
                  {facility === "sanatorium" && (
                    <span>
                      <strong>상세 분류</strong>
                      <Form.Select onChange={changeSanatoriumCategory} value={sanatoriumCategory}>
                        <option value="all">전체</option>
                        {SANATORIUM_CATEGORIES.map((ctg) => (
                          <option key={`sanatorium-${ctg}`} value={ctg}>
                            {SANATORIUM_CATEGORY_TYPE[ctg]}
                          </option>
                        ))}
                      </Form.Select>
                    </span>
                  )}

                  {/* 재가노인복지시설의 상세카테고리  */}
                  {facility === "serviceFacility" && (
                    <span>
                      <strong>상세 분류</strong>
                      <Form.Select onChange={changeServiceFacilityCategory} value={serviceFacilityCategory}>
                        <option value="all">전체</option>
                        {SERVICE_FACILITY_CATEGORIES.map((ctg) => (
                          <option key={`serviceFacility-${ctg}`} value={ctg}>
                            {SERVICE_FACILITY_TYPE[ctg]}
                          </option>
                        ))}
                      </Form.Select>
                    </span>
                  )}

                  {/* 요양병원 제외 재가노인복지시설과 요양시설인경우 추가되는 영리 여부 옵션  */}
                  {facility !== "hospital" && (
                    <span>
                      <strong>영리 여부</strong>
                      <Form.Select onChange={changeProfit} value={profit}>
                        <option value="all">전체</option>
                        <option value="profit">영리</option>
                        <option value="nonProfit">비영리</option>
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
              </Container>
            </SearchOptionBox>
          </SearchFormBox>
        </TotalSearchContainer>
      </Form>
    </SearchFormContainer>
  );
};

export default MainSearchForm;
