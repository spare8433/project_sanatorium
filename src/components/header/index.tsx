import SearchFacilityInput from "@components/searchFacilityInput";
import { CITY_CODE, CITY_NAMES } from "@constants/city";
import {
  FACILITY_CATEGORIES,
  FACILITY_CATEGORY_TYPE,
  HOSPITAL_GRADE_TYPE,
  HOSPITAL_GRADES,
  PROFIT_CATEGORIES,
  PROFIT_CATEGORY_TYPE,
  SANATORIUM_CATEGORIES,
  SANATORIUM_CATEGORY_TYPE,
  SERVICE_FACILITY_CATEGORIES,
  SERVICE_FACILITY_TYPE,
} from "@constants/facility";
import useInput from "@hooks/useInput";
import useSwitch from "@hooks/useSwitch";
import { getSearchFacilityQuery } from "@lib/util";
import { Button, Form, ToggleButton, ToggleButtonGroup, ToggleButtonProps } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { ButtonBox, HeaderSearchOptionList } from "./style";
import {
  BackGround,
  HeaderBox,
  HeaderContainer,
  LogoLink,
  SearchInputBox,
  SearchOptionBox,
  SearchOptionContainer,
  WrapHeaderBox,
} from "./style";

const Header = () => {
  const navigate = useNavigate();
  const [searchText, changeSearchText] = useInput("");
  const [facility, changeFacility] = useInput<FacilityType>("hospital");
  const [city, changeCity] = useInput<CityName | "all">("all");
  const [detailFacility, changeDetailFacility, setDetailFacility] = useInput<DetailFacilityCategory | "all">("all");
  const [profit, changeProfit] = useInput<ProfitType | "all">("all");
  const [grade, changeGrade] = useInput<HospitalGrade | "all">("all");

  const [isSearchOptionsOn, turnOnSearchOptions, turnOffSearchOptions] = useSwitch(false);

  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    turnOffSearchOptions();
    navigate({
      pathname: "/search",
      search: getSearchFacilityQuery({ searchText, facility, city, detailFacility, profit, grade, pageNum: 1 }),
    });
  };

  return (
    <>
      <HeaderContainer>
        <Form onSubmit={onSubmit}>
          <WrapHeaderBox>
            <HeaderBox>
              <LogoLink to={`/`}>
                <img src="img/logo.png" alt="logo" />
              </LogoLink>

              <SearchInputBox>
                <SearchFacilityInput value={searchText} onChange={changeSearchText} onClick={turnOnSearchOptions} />
              </SearchInputBox>
            </HeaderBox>
          </WrapHeaderBox>

          <SearchOptionContainer $isOn={isSearchOptionsOn}>
            <SearchOptionBox>
              <HeaderSearchOptionList>
                <li>
                  <strong>시 · 군</strong>
                  <Form.Select onChange={(e) => changeCity(e)} value={city}>
                    <option value="all">전체</option>
                    {CITY_NAMES.map((city) => (
                      <option key={`cityList-${city}`} value={CITY_CODE[city]}>
                        {city}
                      </option>
                    ))}
                  </Form.Select>
                </li>

                <li>
                  <strong>시설 분류</strong>
                  <ToggleButtonGroup
                    type="radio"
                    name="facility-category"
                    value={facility}
                    onChange={(_v, e) => {
                      changeFacility(e);
                      setDetailFacility("all");
                    }}
                  >
                    {FACILITY_CATEGORIES.map((ctg) => (
                      <SearchRadioButton key={`facilityCategory-${ctg}`} id={`facilityCategory-${ctg}`} value={ctg}>
                        {FACILITY_CATEGORY_TYPE[ctg]}
                      </SearchRadioButton>
                    ))}
                  </ToggleButtonGroup>
                </li>

                {facility === "hospital" && (
                  <li>
                    <strong>등급</strong>
                    <ToggleButtonGroup type="radio" name="grade" value={grade} onChange={(_v, e) => changeGrade(e)}>
                      <SearchRadioButton id="hospitalGrade-all" value="all">
                        전체
                      </SearchRadioButton>
                      {HOSPITAL_GRADES.map((grade) => (
                        <SearchRadioButton key={`hospitalGrade-${grade}`} id={`hospitalGrade-${grade}`} value={grade}>
                          {HOSPITAL_GRADE_TYPE[grade]}
                        </SearchRadioButton>
                      ))}
                    </ToggleButtonGroup>
                  </li>
                )}

                {facility === "sanatorium" && (
                  <li>
                    <strong>상세 카테고리</strong>
                    <ToggleButtonGroup
                      type="radio"
                      name="sanatorium-detail"
                      value={detailFacility}
                      onChange={(_v, e) => changeDetailFacility(e)}
                    >
                      {/* 요양시설 상세 카테고리 */}

                      <SearchRadioButton id="sanatorium-all" value="all">
                        전체
                      </SearchRadioButton>
                      {SANATORIUM_CATEGORIES.map((ctg) => (
                        <SearchRadioButton key={`sanatorium-${ctg}`} id={`sanatorium-${ctg}`} value={ctg}>
                          {SANATORIUM_CATEGORY_TYPE[ctg]}
                        </SearchRadioButton>
                      ))}
                    </ToggleButtonGroup>
                  </li>
                )}

                {facility === "serviceFacility" && (
                  <li>
                    <strong>상세 카테고리</strong>
                    <ToggleButtonGroup
                      type="radio"
                      name="serviceFacility-detail"
                      value={detailFacility}
                      onChange={(_v, e) => changeDetailFacility(e)}
                    >
                      <SearchRadioButton id="serviceFacility-all" value="all">
                        전체
                      </SearchRadioButton>
                      {SERVICE_FACILITY_CATEGORIES.map((ctg) => (
                        <SearchRadioButton key={`serviceFacility-${ctg}`} id={`serviceFacility-${ctg}`} value={ctg}>
                          {SERVICE_FACILITY_TYPE[ctg]}
                        </SearchRadioButton>
                      ))}
                    </ToggleButtonGroup>
                  </li>
                )}

                {facility !== "hospital" && (
                  <li>
                    <strong>영리 여부</strong>
                    <ToggleButtonGroup name="profit" value={profit} onChange={(_v, e) => changeProfit(e)}>
                      <SearchRadioButton id="profit-all" value="all">
                        전체
                      </SearchRadioButton>
                      {PROFIT_CATEGORIES.map((ctg) => (
                        <SearchRadioButton key={`profit-${ctg}`} id={`profit-${ctg}`} value={ctg}>
                          {PROFIT_CATEGORY_TYPE[ctg]}
                        </SearchRadioButton>
                      ))}
                    </ToggleButtonGroup>
                  </li>
                )}
              </HeaderSearchOptionList>

              <ButtonBox>
                <Button variant="primary" type="submit" size="lg">
                  검색
                </Button>
              </ButtonBox>
            </SearchOptionBox>
          </SearchOptionContainer>
        </Form>
      </HeaderContainer>
      {isSearchOptionsOn && <BackGround onClick={turnOffSearchOptions} />}
    </>
  );
};

const SearchRadioButton = (props: ToggleButtonProps) => (
  <ToggleButton {...props} variant="outline-primary" type="radio" />
);

export default Header;
