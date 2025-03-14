import {
  HOSPITAL_GRADE_TYPE,
  PROFIT_CATEGORY_TYPE,
  SANATORIUM_CATEGORY_TYPE,
  SERVICE_FACILITY_TYPE,
} from "@constants/facility";
import axios from "axios";

const API_URL = "https://openapi.gg.go.kr/";
const BASIC_QUERY = `?KEY=${import.meta.env.VITE_API_KEY}&type=json`;
const MAX_API_CONTENTS_COUNT = 1000;
const axiosInstance = (url: string) => axios.create({ baseURL: `${API_URL}${url}` });

/** 요양병원 리스트 검색 API 함수 (재귀함수 버전) */
export const getHospitalAPI: GetHospitalAPI = async (param) => {
  const { city, searchText, pageNum, notiCount, grade } = param; // param
  const result: HospitalDetailData[] = [];

  // api 요청을 할 재귀 함수
  const recursiveReq = async (index: number = 1) => {
    const query = `${BASIC_QUERY}&pIndex=${index}&pSize=1000`;

    // 실제 axios 인스턴스 실행 부분
    await axiosInstance("Hosptlevaltnrcper")
      .get<HospitalAPIObj>(query)
      .then(async (data) => {
        const [head, hosDataObj] = data.data.Hosptlevaltnrcper;
        // api 요청시 가져올 수 있는 전체 데이터 갯수 데이터
        const { list_total_count } = head.head[0];

        // 검색 옵션에 맞게 추린 데이터 result 배열에 추가
        result.push(
          // 검색 옵션에 맞는 데이터 추출
          ...hosDataObj.row.filter((data) => {
            const { INST_NM, REFINE_LOTNO_ADDR, REFINE_ROADNM_ADDR, SIGUN_NM, GRAD } = data;

            // 필터링
            if (
              (city === "all" || SIGUN_NM.includes(city)) &&
              (grade === "all" || HOSPITAL_GRADE_TYPE[grade] === GRAD) &&
              (searchText === "" ||
                [INST_NM, REFINE_LOTNO_ADDR, REFINE_ROADNM_ADDR].some((field) => field?.includes(searchText)))
            )
              return true;
          }),
        );

        // 전체 데이터 갯수 데이터가 시작인덱스 보다 크면 가져올 데이터가 있는 것으로 판단 test 함수 다시 호출
        if (index * MAX_API_CONTENTS_COUNT < list_total_count) await recursiveReq(++index);
      });
  };
  await recursiveReq();

  return {
    dataArr: result.slice((pageNum - 1) * notiCount, pageNum * notiCount),
    totalCount: result.length,
  };
};

/** 요양시설 리스트 검색 API 함수 (재귀함수 버전) */
export const getSanatoriumAPI: GetSanatoriumAPI = async (param) => {
  const { city, searchText, pageNum, notiCount, facilityCategory, profit } = param; // param
  const result: SanatoriumDetailData[] = [];

  // api 요청을 할 재귀 함수
  const recursiveReq = async (index: number = 1) => {
    const query = `${BASIC_QUERY}&pIndex=${index}&pSize=1000`;

    // 실제 axios 인스턴스 실행 부분
    await axiosInstance("OldpsnMedcareWelfac")
      .get<SanatoriumAPIObj>(query)
      .then(async (data) => {
        const [head, sntDataObj] = data.data.OldpsnMedcareWelfac;
        // api 요청시 가져올 수 있는 전체 데이터 갯수 데이터
        const { list_total_count } = head.head[0];

        // 검색 옵션에 맞게 추린 데이터 result 배열에 추가
        result.push(
          // 검색 옵션에 맞는 데이터 추출
          ...sntDataObj.row.filter((data) => {
            const {
              FACLT_NM,
              REFINE_LOTNO_ADDR,
              REFINE_ROADNM_ADDR,
              SIGUNGU_NM,
              FACLT_KIND_NM,
              PRFTMK_DIV_NM,
              COPRTN_GRP_NM,
            } = data;

            // 필터링
            if (
              (city === "all" || SIGUNGU_NM.includes(city)) &&
              (facilityCategory === "all" || FACLT_KIND_NM.includes(SANATORIUM_CATEGORY_TYPE[facilityCategory])) &&
              (profit === "all" || PROFIT_CATEGORY_TYPE[profit] === PRFTMK_DIV_NM) &&
              (searchText === "" ||
                [FACLT_NM, REFINE_LOTNO_ADDR, REFINE_ROADNM_ADDR, COPRTN_GRP_NM].some(
                  (field) => field?.includes(searchText),
                ))
            )
              return true;
          }),
        );

        // 전체 데이터 갯수 데이터가 시작인덱스 보다 크면 가져올 데이터가 있는 것으로 판단 test 함수 다시 호출
        if (index * MAX_API_CONTENTS_COUNT < list_total_count) await recursiveReq(++index);
      });
  };
  await recursiveReq();

  return {
    dataArr: result.slice((pageNum - 1) * notiCount, pageNum * notiCount),
    totalCount: result.length,
  };
};

/** 재가 노인복지시설 리스트 검색 API 함수 (재귀함수 버전) */
export const getServiceFacilityAPI: GetServiceFacilityAPI = async (param) => {
  const { city, searchText, pageNum, notiCount, facilityCategory, profit } = param; // param
  const result: ServiceFacilityDetailData[] = [];

  // api 요청을 할 재귀 함수
  const recursiveReq = async (index: number = 1) => {
    const query = `${BASIC_QUERY}&pIndex=${index}&pSize=1000`;

    // 실제 axios 인스턴스 실행 부분
    await axiosInstance("HtygdWelfaclt")
      .get<ServiceFacilityAPIObj>(query)
      .then(async (data) => {
        const [head, wfsDataObj] = data.data.HtygdWelfaclt;
        // api 요청시 가져올 수 있는 전체 데이터 갯수 데이터
        const { list_total_count } = head.head[0];

        // 검색 옵션에 맞게 추린 데이터 result 배열에 추가
        result.push(
          // 검색 옵션에 맞는 데이터 추출
          ...wfsDataObj.row.filter((data) => {
            const {
              FACLT_NM,
              REFINE_LOTNO_ADDR,
              REFINE_ROADNM_ADDR,
              SIGUNGU_NM,
              FACLT_KIND_NM,
              PRFTMK_DIV_NM,
              COPRTN_GRP_NM,
            } = data;

            // 필터링
            if (
              (city === "all" || SIGUNGU_NM.includes(city)) &&
              (facilityCategory === "all" || FACLT_KIND_NM.includes(SERVICE_FACILITY_TYPE[facilityCategory])) &&
              (profit === "all" || PROFIT_CATEGORY_TYPE[profit] === PRFTMK_DIV_NM) &&
              (searchText === "" ||
                [FACLT_NM, REFINE_LOTNO_ADDR, REFINE_ROADNM_ADDR, COPRTN_GRP_NM].some(
                  (field) => field?.includes(searchText),
                ))
            )
              return true;
          }),
        );

        // 전체 데이터 갯수 데이터가 시작인덱스 보다 크면 가져올 데이터가 있는 것으로 판단 test 함수 다시 호출
        if (index * MAX_API_CONTENTS_COUNT < list_total_count) await recursiveReq(++index);
      });
  };
  await recursiveReq();

  return {
    dataArr: result.slice((pageNum - 1) * notiCount, pageNum * notiCount),
    totalCount: result.length,
  };
};
