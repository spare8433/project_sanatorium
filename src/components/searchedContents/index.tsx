import { useState, useCallback, useContext } from 'react'
import styled from 'styled-components'
import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import { Pagination } from 'react-bootstrap'
import DetailInfoModal from '@components/detailInfoModal'
import useSwitch from '@hooks/useSwitch'
import { APIResponse } from '@api/type'
import SearchedItems from './searchedItems'
import SearchOptionContext from '@context/searchOptionContext'

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
  facCtg: string
}

const SearchedContents = ({ data, facCtg, showItemsCount }: Props) => {
  const { states, getPaginationQuery } = useContext(SearchOptionContext)
  const { p } = states

  const { totalCount, dataArr } = data
  const [isModalOn, turnOn, turnOff] = useSwitch(false)
  const [detailData, setDetailData] = useState<
    HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData | null
  >(null)

  const lastIndex = Math.ceil(totalCount / showItemsCount)

  const SHOW_MAX_PAGINATION_COUNT = 8
  /** 화면에 노출 되는 콘텐츠 갯수 */

  const renderPaginationItem = useCallback(() => {
    const result: JSX.Element[] = []
    const sectionNum = Math.ceil(p / SHOW_MAX_PAGINATION_COUNT)
    const startNum = (sectionNum - 1) * SHOW_MAX_PAGINATION_COUNT + 1
    const endNum = sectionNum * SHOW_MAX_PAGINATION_COUNT

    for (let num = startNum; num <= endNum && num <= lastIndex; num++) {
      result.push(
        <Pagination.Item key={num} href={getPaginationQuery(num)}>
          {num}
        </Pagination.Item>,
      )
    }
    return result
  }, [p])

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
        {p > 1 && <Pagination.Prev href={getPaginationQuery(p - 1)} />}
        {renderPaginationItem()}
        {lastIndex > p && <Pagination.Next href={getPaginationQuery(p + 1)} />}
      </PaginationContainor>
    </>
  )
}

export default SearchedContents
