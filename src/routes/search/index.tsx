import { useCallback, useState } from 'react'
import { getHospitalAPI, getSanatoriumAPI, getWelfareServiceAPI } from '@api/openAPI'
import { useQuery } from '@tanstack/react-query'
import SearchedContents from '@components/searchedContents'
import {
  DetailCtgType,
  FacilityCategory,
  FacilityType,
  HosGradeList,
  HosGradeListType,
  ProfitCategory,
  ProfitType,
  SntFacCategory,
  WfSFacCategory,
} from '@assets/staticData/facilityType'
import { APIResponse } from '@api/type'
import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import MainSearchForm from '@components/mainSearchForm'
import useInput from '@hooks/useInput'
import useCheckQuery from '@hooks/useCheckQuery'
import { Containor, ContentBox, SearchContainor } from './style'
import { FullSearchStatesType, SearchChangeFnsType, SearchQueryType } from 'types/searchState'
import PlaceHolder from '@components/searchedContents/placeHolder'

type DetailDataType = HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData

const Search = () => {
  const querySearchText = useCheckQuery<string>('searchText', '')
  const queryFacCtg = useCheckQuery<FacilityType>('facCtg', '요양시설', FacilityCategory)
  const queryDetailCtg = useCheckQuery<DetailCtgType | '전체'>('detailCtg', '전체', [
    ...SntFacCategory,
    ...WfSFacCategory,
  ])
  const queryProfit = useCheckQuery<ProfitType | '전체'>('profit', '전체', ProfitCategory)
  const queryGrade = useCheckQuery<HosGradeListType | '전체'>('grade', '전체', HosGradeList)
  const queryCity = useCheckQuery<string>('city', '전체')
  const queryPageNum = parseInt(useCheckQuery<string>('p', '1'))

  const [searchText, changeSearchText] = useInput(querySearchText)
  // const [province, changeProvince, setProvince] = useInput('경기도')
  const [facCtg, changeFacCtg] = useInput<FacilityType>(queryFacCtg)
  const [city, changeCity] = useInput<string | '전체'>(queryCity)
  const [detailCtg, changeDetailCtg] = useInput<DetailCtgType | '전체'>(queryDetailCtg)
  const [profit, changeProfit] = useInput<ProfitType | '전체'>(queryProfit)
  const [grade, changeGrade] = useInput<HosGradeListType | '전체'>(queryGrade)
  const [pageNum] = useState(queryPageNum)

  const querys: SearchQueryType = {
    querySearchText,
    queryFacCtg,
    queryDetailCtg,
    queryProfit,
    queryGrade,
    queryCity,
    queryPageNum,
  }

  const states: FullSearchStatesType = {
    searchText,
    facCtg,
    city,
    detailCtg,
    profit,
    grade,
    pageNum,
  }

  const changeFns: SearchChangeFnsType = {
    changeSearchText,
    changeFacCtg,
    changeCity,
    changeDetailCtg,
    changeProfit,
    changeGrade,
  }

  /** 화면에 노출 되는 콘텐츠 갯수 */
  const SHOW_ITEMS_COUNT = 16

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
      }

      // 병원용 API param obj
      const hosParamObj = {
        SIGName: city,
        searchText,
        page,
        notiCount: SHOW_ITEMS_COUNT,
        grade,
      }

      switch (facCtg) {
        case '요양병원':
          return getHospitalAPI(hosParamObj)
        case '요양시설':
          return getSanatoriumAPI(paramObj)
        case '재가노인복지시설':
          return getWelfareServiceAPI(paramObj)
        default:
          throw Error
      }
    },
    [facCtg, city, searchText, SHOW_ITEMS_COUNT, detailCtg, profit, grade],
  )

  const { data, isLoading, error } = useQuery({
    queryKey: ['searchedData', window.location.search, pageNum],
    staleTime: 60 * 1000,
    queryFn: () => fetchAPI(pageNum),
  })

  return (
    <Containor>
      <MainSearchForm states={states} changeFns={changeFns} />
      <SearchContainor>
        <ContentBox>
          {data && <SearchedContents querys={querys} data={data} showItemsCount={SHOW_ITEMS_COUNT} />}
          {isLoading && <PlaceHolder />}
          {error && <>error 발생</>}
        </ContentBox>
      </SearchContainor>
    </Containor>
  )
}

export default Search
