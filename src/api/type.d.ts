import { HospitalDetailData, SanatoriumDetailData } from 'types/apiData'
// import { AxiosAPIwithParam } from 'types/axiosAPI'

/** 요양 병원 검색 API 요청인자 */
export type HosParamObj = {
  SIGName: string
  searchText: string
  notiCount: number
  page: number
  grade: string
}

/** 재가 노인 복지시설 + 요양 시설 검색 API 요청인자 */
export type ParamObj = {
  SIGName: string
  searchText: string
  page: number
  notiCount: number
  detailCategory: string
  profit: string
}

// old 버전 타입
// export type GetHospitalAPI = AxiosAPI withParam<HosParamObj, HospitalAPIObj>
// export type GetSanatoriumAPI = AxiosAPIwithParam<ParamObj, SanatoriumAPIObj>
// export type GetWelfareServiceAPI = AxiosAPIwithParam<ParamObj, WelfareServiceAPIObj>

/** 리스트 검색 API 함수 반환 타입 */
export type APIResponse<T = any> = { dataArr: T[]; totalCount: number }

/** 요양 병원 리스트 검색 API 함수 타입 */
export type GetHospitalAPI = (param: HosParamObj) => Promise<APIResponse<HospitalDetailData>>

/** 요양시설 리스트 검색 API 함수 타입 */
export type GetSanatoriumAPI = (param: ParamObj) => Promise<APIResponse<SanatoriumDetailData>>

/** 재가 노인복지시설 리스트 검색 API 함수 타입 */
export type GetWelfareServiceAPI = (
  param: ParamObj,
) => Promise<APIResponse<WelfareServiceDetailData>>
