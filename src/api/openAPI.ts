import axios, { AxiosResponse } from 'axios'
import { GetSanatoriumAPI, GetHospitalAPI, GetWelfareServiceAPI } from './type'

import {
  HospitalAPIObj,
  HospitalDetailData,
  WelfareServiceAPIObj,
  WelfareServiceDetailData,
  SanatoriumDetailData,
  SanatoriumAPIObj,
} from 'types/apiData'

const API_URL = 'https://openapi.gg.go.kr/'
const BASIC_QUERRY = `?KEY=${import.meta.env.VITE_API_KEY}&type=json`
const MAX_API_CONTENTS_COUNT = 1000
const axiosInstance = (url: string) => axios.create({ baseURL: `${API_URL}${url}` })

/** 요양병원 리스트 검색 API 함수 (기본 버전 old) */
// export const getHospitalAPI: GetSanatoriumAPI = (param) => {
//   const { SIGName, searchText, page, grade } = param
//   const query = `${BASIC_QUERRY}&SIGUN_NM=${SIGName}&pIndex=${1}`
//   return axiosInstance('Hosptlevaltnrcper').get(query)
// }

/** 요양병원 리스트 검색 API 함수 (재귀함수 버전) */
export const getHospitalAPI: GetHospitalAPI = async (param) => {
  const { SIGName, searchText, page, notiCount, grade } = param // param
  const result: HospitalDetailData[] = []
  // api 요청을 할 재귀 함수
  const recursiveReq = async (index: number = 1) => {
    const query = `${BASIC_QUERRY}&pIndex=${index}&pSize=1000`

    // 실제 axios 인스턴스 실행 부분
    await axiosInstance('Hosptlevaltnrcper')
      .get<any, AxiosResponse<HospitalAPIObj>>(query)
      .then(async (data) => {
        const [head, hosDataObj] = data.data.Hosptlevaltnrcper
        // api 요청시 가져올 수 있는 전체 데이터 갯수 데이터
        const { list_total_count } = head.head[0]

        // 검색 옵션에 맞게 추린 데이터 result 배열에 추가
        result.push(
          // 검색 옵션에 맞는 데이터 추출
          ...hosDataObj.row.filter((data) => {
            // 검색어 반영
            if (
              ![data.INST_NM, data.REFINE_LOTNO_ADDR, data.REFINE_ROADNM_ADDR].some(
                (field) => field?.includes(searchText),
              )
            )
              return false

            if (SIGName !== '전체' && SIGName !== data.SIGUN_NM) return false
            if (grade !== '전체' && grade !== data.GRAD) return false

            return true
          }),
        )

        // 전체 데이터 갯수 데이터가 시작인덱스 보다 크면 가져올 데이터가 있는 것으로 판단 test 함수 다시 호출
        if (index * MAX_API_CONTENTS_COUNT < list_total_count) await recursiveReq(++index)
      })
  }
  await recursiveReq()

  return {
    dataArr: result.slice((page - 1) * notiCount, page * notiCount),
    totalCount: result.length,
  }
}

/** 요양시설 리스트 검색 API 함수 (기본 버전 old)  */
// export const getSanatoriumAPI: GetSanatoriumAPI = ({ SIGName }) => {
//   const query = `${BASIC_QUERRY}&SIGUNGU_NM=${SIGName}&pIndex=${1}`
//   return axiosInstance('OldpsnMedcareWelfac').get(query)
// }

/** 요양시설 리스트 검색 API 함수 (재귀함수 버전) */
export const getSanatoriumAPI: GetSanatoriumAPI = async (param) => {
  const { SIGName, searchText, page, notiCount, detailCategory, profit } = param // param
  const result: SanatoriumDetailData[] = []

  // api 요청을 할 재귀 함수
  const recursiveReq = async (index: number = 1) => {
    const query = `${BASIC_QUERRY}&pIndex=${index}&pSize=1000`

    // 실제 axios 인스턴스 실행 부분
    await axiosInstance('OldpsnMedcareWelfac')
      .get<any, AxiosResponse<SanatoriumAPIObj>>(query)
      .then(async (data) => {
        const [head, sntDataObj] = data.data.OldpsnMedcareWelfac
        // api 요청시 가져올 수 있는 전체 데이터 갯수 데이터
        const { list_total_count } = head.head[0]

        // 검색 옵션에 맞게 추린 데이터 result 배열에 추가
        result.push(
          // 검색 옵션에 맞는 데이터 추출
          ...sntDataObj.row.filter((data) => {
            // 검색어 반영
            if (
              ![
                data.FACLT_NM,
                data.REFINE_LOTNO_ADDR,
                data.REFINE_ROADNM_ADDR,
                data.COPRTN_GRP_NM,
              ].some((field) => field?.includes(searchText))
            )
              return false

            if (SIGName !== '전체' && SIGName !== data.SIGUNGU_NM) return false
            if (detailCategory !== '전체' && !data.FACLT_KIND_NM.includes(detailCategory))
              return false
            if (profit !== '전체' && profit !== data.PRFTMK_DIV_NM) return false

            return true
          }),
        )

        // 전체 데이터 갯수 데이터가 시작인덱스 보다 크면 가져올 데이터가 있는 것으로 판단 test 함수 다시 호출
        if (index * MAX_API_CONTENTS_COUNT < list_total_count) await recursiveReq(++index)
      })
  }
  await recursiveReq()

  return {
    dataArr: result.slice((page - 1) * notiCount, page * notiCount),
    totalCount: result.length,
  }
}

/** 재가 노인복지시설 리스트 검색 API 함수 (기본 버전 old) */
// export const getWelfareServiceAPI: GetWelfareServiceAPI = ({ SIGName }) => {
//   const query = `${BASIC_QUERRY}&SIGUNGU_NM=${SIGName}&pIndex=${pIndex}`
//   return axiosInstance('HtygdWelfaclt').get(query)
// }

/** 재가 노인복지시설 리스트 검색 API 함수 (재귀함수 버전) */
export const getWelfareServiceAPI: GetWelfareServiceAPI = async (param) => {
  const { SIGName, searchText, page, notiCount, detailCategory, profit } = param // param
  const result: WelfareServiceDetailData[] = []

  // api 요청을 할 재귀 함수
  const recursiveReq = async (index: number = 1) => {
    const query = `${BASIC_QUERRY}&pIndex=${index}&pSize=1000`

    // 실제 axios 인스턴스 실행 부분
    await axiosInstance('HtygdWelfaclt')
      .get<any, AxiosResponse<WelfareServiceAPIObj>>(query)
      .then(async (data) => {
        const [head, wfsDataObj] = data.data.HtygdWelfaclt
        // api 요청시 가져올 수 있는 전체 데이터 갯수 데이터
        const { list_total_count } = head.head[0]

        // 검색 옵션에 맞게 추린 데이터 result 배열에 추가
        result.push(
          // 검색 옵션에 맞는 데이터 추출
          ...wfsDataObj.row.filter((data) => {
            // 검색어 반영
            if (
              ![
                data.FACLT_NM,
                data.REFINE_LOTNO_ADDR,
                data.REFINE_ROADNM_ADDR,
                data.COPRTN_GRP_NM,
              ].some((field) => field?.includes(searchText))
            )
              return false

            if (SIGName !== '전체' && SIGName !== data.SIGUNGU_NM) return false
            if (detailCategory !== '전체' && !data.FACLT_KIND_NM.includes(detailCategory))
              return false
            if (profit !== '전체' && profit !== data.PRFTMK_DIV_NM) return false

            return true
          }),
        )

        // 전체 데이터 갯수 데이터가 시작인덱스 보다 크면 가져올 데이터가 있는 것으로 판단 test 함수 다시 호출
        if (index * MAX_API_CONTENTS_COUNT < list_total_count) await recursiveReq(++index)
      })
  }
  await recursiveReq()

  return {
    dataArr: result.slice((page - 1) * notiCount, page * notiCount),
    totalCount: result.length,
  }
}
