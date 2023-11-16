import { useState, useCallback } from 'react'
import styled from 'styled-components'
import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import { Pagination } from 'react-bootstrap'
import DetailInfoModal from '@components/detailInfoModal'
import useSwitch from '@hooks/useSwitch'
import { APIResponse } from '@api/type'
import SearchedItems from './searchedItems'

const FacilityGridBox = styled.main`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  margin: 2rem 0 4rem;
  font-size: 1.4rem;
`

const PaginationContainor = styled(Pagination)`
  display: flex;
  justify-content: center;
`

interface Props {
  data: APIResponse<HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData>
  showItemsCount: number
  queryData: {
    facCtg: string
    city: string
    searchText: string
    detailCategory: string
    profit: string
    grade: string
    page: number
  }
}

const SearchedContents = ({ data, showItemsCount, queryData }: Props) => {
  const { facCtg, city, searchText, detailCategory, profit, grade, page } = queryData
  const { totalCount, dataArr } = data
  const [isModalOn, turnOn, turnOff] = useSwitch()
  const [detailData, setDetailData] = useState<
    HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData | null
  >(null)

  const lastIndex = Math.ceil(totalCount / showItemsCount)

  const SHOW_MAX_PAGINATION_COUNT = 8
  /** 화면에 노출 되는 콘텐츠 갯수 */

  const makePageItemHref = useCallback(() => {
    let href = `?facCtg=${facCtg}&city=${city}&searchText=${searchText}`
    switch (facCtg) {
      case '요양병원':
        href += `&grade=${grade}`
        break
      case '요양시설':
      case '재가노인복지시설':
        href += `&detailCategory=${detailCategory}&profit=${profit}`
        break
      default:
        throw Error
    }
    return href
  }, [facCtg, city, searchText, detailCategory, profit, grade])

  const makePrevHref = useCallback(
    () => `${makePageItemHref()}&p=${page - 1}`,
    [makePageItemHref, page],
  )

  const makeNextHref = useCallback(
    () => `${makePageItemHref()}&p=${page + 1}`,
    [makePageItemHref, page],
  )

  const renderPaginationItem = useCallback(() => {
    const result: JSX.Element[] = []
    const sectionNum = Math.ceil(page / SHOW_MAX_PAGINATION_COUNT)
    const startNum = (sectionNum - 1) * SHOW_MAX_PAGINATION_COUNT + 1
    const endNum = sectionNum * SHOW_MAX_PAGINATION_COUNT

    for (let num = startNum; num <= endNum && num <= lastIndex; num++) {
      result.push(
        <Pagination.Item key={num} href={`${makePageItemHref()}&p=${num}`}>
          {num}
        </Pagination.Item>,
      )
    }
    return result
  }, [page])

  const showModal = (
    item: HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData,
  ) => {
    setDetailData(item)
    turnOn()
  }

  return (
    <>
      <DetailInfoModal facCtg={facCtg} show={isModalOn} closeFn={turnOff} data={detailData} />
      <FacilityGridBox>
        <SearchedItems dataArr={dataArr} facCtg={facCtg} showFn={showModal} />
      </FacilityGridBox>
      <PaginationContainor size="lg">
        {page > 1 && <Pagination.Prev href={makePrevHref()} />}
        {renderPaginationItem()}
        {lastIndex > page && <Pagination.Next href={makeNextHref()} />}
      </PaginationContainor>
    </>
  )
}

export default SearchedContents
