import HeaderSearchBox from "@components/searchBox/headerSearchBox";
import useSwitch from "@hooks/useSwitch";
import HeaderSearchOptions from "@components/headerSearchOptions";
import {
  BackGround,
  HeaderBox,
  HeaderContainor,
  LogoLink,
  SearchFormBox,
  SearchOptionBox,
  SearchOptionContainor,
  WrapHeaderBox,
} from "./style";
import useInput from "@hooks/useInput";

const Header = () => {
  const [searchText, changeSearchText] = useInput("");
  // const [province, changeProvince, setProvince] = useInput('경기도')
  const [facCtg, changeFacCtg] = useInput<FacilityType>("요양병원");
  const [city, changeCity] = useInput("전체");
  const [detailCtg, changeDetailCtg] = useInput<DetailFacilityCategory | "전체">("전체");
  const [profit, changeProfit] = useInput<ProfitType | "전체">("전체");
  const [grade, changeGrade] = useInput<HospitalGrade | "전체">("전체");

  const [isOnSearchOptions, turnOnSearchOptions, turnOffSearchOptions] = useSwitch(false);

  const states: SearchStatesType = {
    searchText,
    facCtg,
    city,
    detailCtg,
    profit,
    grade,
  };

  const changeFns: SearchChangeFnsType = {
    changeSearchText,
    changeFacCtg,
    changeCity,
    changeDetailCtg,
    changeProfit,
    changeGrade,
  };

  return (
    <HeaderContainor>
      <WrapHeaderBox>
        <HeaderBox>
          <LogoLink to={`/`}>
            <img src="img/logo.png" alt="logo" />
          </LogoLink>

          <SearchFormBox>
            <HeaderSearchBox
              turnOn={turnOnSearchOptions}
              turnOff={turnOffSearchOptions}
              states={states}
              changeSearchText={changeSearchText}
            />
          </SearchFormBox>
        </HeaderBox>
      </WrapHeaderBox>

      <SearchOptionContainor $isOn={isOnSearchOptions}>
        <SearchOptionBox>
          <HeaderSearchOptions turnOff={turnOffSearchOptions} states={states} changeFns={changeFns} />
        </SearchOptionBox>
      </SearchOptionContainor>

      {isOnSearchOptions && <BackGround onClick={turnOffSearchOptions} />}
    </HeaderContainor>
  );
};

export default Header;
