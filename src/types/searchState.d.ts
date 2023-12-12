import {
  DetailCtgType,
  FacilityType,
  HosGradeListType,
  ProfitType,
} from '@assets/staticData/facilityType'

export interface SearchStatesType {
  searchText: string
  province?: string
  facCtg: FacilityType
  city: string
  detailCtg: DetailCtgType | '전체'
  profit: ProfitType | '전체'
  grade: HosGradeListType | '전체'
}

export interface SearchQueryType {
  querySearchText: string
  queryProvince?: string
  queryFacCtg: FacilityType
  queryCity: string
  queryDetailCtg: DetailCtgType | '전체'
  queryProfit: ProfitType | '전체'
  queryGrade: HosGradeListType | '전체'
  queryPageNum: number
}

export interface FullSearchStatesType extends SearchStatesType {
  pageNum: number
}

export interface SearchChangeFnsType {
  changeSearchText: (e: React.ChangeEvent<any>) => void
  changeFacCtg: (e: React.ChangeEvent<any>) => void
  changeCity: (e: React.ChangeEvent<any>) => void
  changeDetailCtg: (e: React.ChangeEvent<any>) => void
  changeProfit: (e: React.ChangeEvent<any>) => void
  changeGrade: (e: React.ChangeEvent<any>) => void
}
