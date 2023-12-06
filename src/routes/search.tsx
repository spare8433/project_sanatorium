import { useCallback, useContext } from 'react'
import { getHospitalAPI, getSanatoriumAPI, getWelfareServiceAPI } from '@api/openAPI'
import { useQuery } from '@tanstack/react-query'
import styled from 'styled-components'
import SearchedContents from '@components/searchedContents'
import { FacilityCategory } from '@assets/staticData/facilityType'
import { APIResponse } from '@api/type'
import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import MainSearchForm from '@components/mainSearchForm'
import { useLocation } from 'react-router-dom'
import SearchOptionContext from '@context/searchOptionContext'

const Containor = styled.div`
  width: 100%;
`

const SearchContainor = styled.div`
  width: 1024px;
  margin: 0 auto;

  .modal-content {
    border-radius: 1rem;
  }
  .modal-header {
    background-color: #e7886e;
    color: #fff;
    font-size: 1.8rem;
    font-family: 'NotoSansKR_r';
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px);
  }
  .modal-body {
    font-size: 1.8rem;
    font-family: 'NotoSansKR_r';
    padding-top: 2rem;
  }
  .btn-outline-secondary {
    width: 100%;
    margin: 2rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`

const ContentBox = styled.div``

const Search = () => {
  // const { states } = useContext(SearchOptionContext)
  // const { searchText, facCtg, city, province, detailCtg, profit, grade, p } = states
  /** 화면에 노출 되는 콘텐츠 갯수 */
  const SHOW_ITEMS_COUNT = 16

  const location = useLocation()

  let getParameter = useCallback(
    (key: string) => new URLSearchParams(location.search).get(key),
    [location.search],
  )

  const searchText = getParameter('searchText') ?? '' // 검색 내용
  // const province = getParameter('province') ?? '전체' // 행정구역 도
  const city = getParameter('city') ?? '전체' // 행정구역 시
  const page = parseInt(getParameter('p') ?? '1')

  let _facCtg = getParameter('facCtg') ?? '요양시설'
  const facCtg = FacilityCategory.includes(_facCtg) ? _facCtg : '요양시설' // 시설 분류

  const grade = getParameter('grade') ?? '전체' // 요양 병원 등급

  // 요양시설 + 재가노인복지시설 에 사용되는 검색 옵션
  const detailCategory = getParameter('detailCtg') ?? '전체' // 상세 시설 분류
  const profit = getParameter('profit') ?? '전체' // 영리

  const fetchAPI = useCallback(
    (
      page: number,
    ): Promise<
      APIResponse<HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData>
    > => {
      // 재가 노인 복지시설 + 요양시설 API param obj
      const paramObj = {
        SIGName: city,
        searchText,
        page,
        notiCount: SHOW_ITEMS_COUNT,
        detailCategory,
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

      console.log('비동기 요청함수 들어옴')

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
    [facCtg, city, searchText, page, SHOW_ITEMS_COUNT, detailCategory, profit, grade],
  )

  const { data, isLoading, error } = useQuery({
    queryKey: ['searchedData', location.search, page],
    staleTime: 60 * 1000,
    queryFn: () => fetchAPI(page),
  })

  return (
    <Containor>
      <MainSearchForm />
      <SearchContainor>
        <ContentBox>
          {data && (
            <SearchedContents facCtg={facCtg} data={data} showItemsCount={SHOW_ITEMS_COUNT} />
          )}
          {isLoading && <>loding 중</>}
          {error && <>error 발생</>}
        </ContentBox>
      </SearchContainor>
    </Containor>
  )
}

export default Search
