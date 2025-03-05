import { useCallback, useState } from "react";
import { getHospitalAPI, getSanatoriumAPI, getWelfareServiceAPI } from "@api/openAPI";
import { useQuery } from "@tanstack/react-query";
import SearchedContents from "@components/searchedContents";
import MainSearchForm from "@components/mainSearchForm";
import useInput from "@hooks/useInput";
import useCheckQuery from "@hooks/useCheckQuery";
import { Containor, ContentBox, SearchContainor } from "./style";

import PlaceHolder from "@components/searchedContents/placeHolder";
import {
  FACILITY_CATEGORIES,
  HOSPITAL_GRADES,
  PROFIT_CATEGORIES,
  SANATORIUM_CATEGORIES,
  SERVICE_FACILITY_CATEGORIES,
} from "@constants/facility";

type DetailDataType = HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData;

const Search = () => {
  const querySearchText = useCheckQuery<string>("searchText", "");
  const queryFacCtg = useCheckQuery<FacilityType>("facCtg", "요양시설", FACILITY_CATEGORIES);
  const queryDetailCtg = useCheckQuery<DetailFacilityCategory | "전체">("detailCtg", "전체", [
    ...SANATORIUM_CATEGORIES,
    ...SERVICE_FACILITY_CATEGORIES,
  ]);
  const queryProfit = useCheckQuery<ProfitType | "전체">("profit", "전체", PROFIT_CATEGORIES);
  const queryGrade = useCheckQuery<HospitalGrade | "전체">("grade", "전체", HOSPITAL_GRADES);
  const queryCity = useCheckQuery<string>("city", "전체");
  const queryPageNum = parseInt(useCheckQuery<string>("p", "1"));

  const [searchText, changeSearchText] = useInput(querySearchText);
  // const [province, changeProvince, setProvince] = useInput('경기도')
  const [facCtg, changeFacCtg] = useInput<FacilityType>(queryFacCtg);
  const [city, changeCity] = useInput<string | "전체">(queryCity);
  const [detailCtg, changeDetailCtg] = useInput<DetailFacilityCategory | "전체">(queryDetailCtg);
  const [profit, changeProfit] = useInput<ProfitType | "전체">(queryProfit);
  const [grade, changeGrade] = useInput<HospitalGrade | "전체">(queryGrade);
  const [pageNum] = useState(queryPageNum);

  const querys: SearchQueryType = {
    querySearchText,
    queryFacCtg,
    queryDetailCtg,
    queryProfit,
    queryGrade,
    queryCity,
    queryPageNum,
  };

  const states: FullSearchStatesType = {
    searchText,
    facCtg,
    city,
    detailCtg,
    profit,
    grade,
    pageNum,
  };

  const changeFns: SearchChangeFnsType = {
    changeSearchText,
    changeFacCtg,
    changeCity,
    changeDetailCtg,
    changeProfit,
    changeGrade,
  };

  /** 화면에 노출 되는 콘텐츠 갯수 */
  const SHOW_ITEMS_COUNT = 12;

  const fetchAPI = useCallback(
    (page: number): Promise<APIResponse<DetailDataType>> => {
      // 재가 노인 복지시설 + 요양시설 API param obj
      const paramObj = {
        SIGName: city,
        searchText,
        page,
        notiCount: SHOW_ITEMS_COUNT,
        detailCategory: detailCtg,
        profit,
      };

      // 병원용 API param obj
      const hosParamObj = {
        SIGName: city,
        searchText,
        page,
        notiCount: SHOW_ITEMS_COUNT,
        grade,
      };

      switch (facCtg) {
        case "요양병원":
          return getHospitalAPI(hosParamObj);
        case "요양시설":
          return getSanatoriumAPI(paramObj);
        case "재가노인복지시설":
          return getWelfareServiceAPI(paramObj);
        default:
          throw Error;
      }
    },
    [facCtg, city, searchText, SHOW_ITEMS_COUNT, detailCtg, profit, grade]
  );

  const { data, isLoading, error } = useQuery({
    queryKey: ["searchedData", window.location.search, pageNum],
    staleTime: 60 * 1000,
    queryFn: () => fetchAPI(pageNum),
  });

  return (
    <Containor>
      <MainSearchForm states={states} changeFns={changeFns} />
      <SearchContainor>
        <ContentBox>
          {data && <SearchedContents querys={querys} data={data} showItemsCount={SHOW_ITEMS_COUNT} />}
          {isLoading && <PlaceHolder showCount={SHOW_ITEMS_COUNT} />}
          {error && <>error 발생</>}
        </ContentBox>
      </SearchContainor>
    </Containor>
  );
};

export default Search;
