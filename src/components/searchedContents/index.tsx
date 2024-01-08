import { useState } from 'react'
import styled, { css } from 'styled-components'
import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import { Pagination } from 'react-bootstrap'
import DetailInfoModal from '@components/detailInfoModal'
import useSwitch from '@hooks/useSwitch'
import { APIResponse } from '@api/type'
import SearchedItems from './searchedItems'
import usePaginationQuery from '@hooks/usePaginationQuery'
import { SearchQueryType } from 'types/searchState'
import PaginationItems from './paginationItems'

const Cotanior = styled.div`
  margin: 3rem 0;
`

const FacilityGridBox = styled.main`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin: 2rem 2rem 8rem;
  font-size: 1.4rem;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const PaginationContainor = styled(Pagination)`
  display: flex;
  justify-content: center;

  .page-link {
    color: ${({ theme }) => theme.colors.main};
  }

  .active > .page-link,
  .page-link.active {
    color: white;
    ${({ theme }) => css`
      background-color: ${theme.colors.main};
      border-color: ${theme.colors.main};
    `};
  }
`

type DetailDataType = HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData

interface Props {
  data: APIResponse<HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData>
  showItemsCount: number
  querys: SearchQueryType
}

const SearchedContents = ({ data, showItemsCount, querys }: Props) => {
  const getPaginationQuery = usePaginationQuery()
  const { totalCount, dataArr } = data
  const { queryFacCtg, queryPageNum } = querys
  const [isModalOn, turnOn, turnOff] = useSwitch(false)
  const [detailData, setDetailData] = useState<DetailDataType | null>(null)

  /** 화면에 노출 되는 콘텐츠 갯수 */
  const SHOW_MAX_PAGINATION_COUNT = 8
  const lastIndex = Math.ceil(totalCount / showItemsCount)

  const showModal = (item: DetailDataType) => {
    setDetailData(item)
    turnOn()
  }

  return (
    <Cotanior>
      <DetailInfoModal queryFacCtg={queryFacCtg} show={isModalOn} closeFn={turnOff} data={detailData} />
      <FacilityGridBox>
        <SearchedItems queryFacCtg={queryFacCtg} dataArr={dataArr} showFn={showModal} />
      </FacilityGridBox>
      <PaginationContainor size="lg">
        {queryPageNum > 1 && (
          <Pagination.Prev href={getPaginationQuery({ ...querys, queryPageNum: queryPageNum - 1 })} />
        )}
        <PaginationItems
          pageNum={queryPageNum}
          lastIndex={lastIndex}
          showMaxItemsCount={SHOW_MAX_PAGINATION_COUNT}
          querys={querys}
        />
        {lastIndex > queryPageNum && (
          <Pagination.Next href={getPaginationQuery({ ...querys, queryPageNum: queryPageNum + 1 })} />
        )}
      </PaginationContainor>
    </Cotanior>
  )
}

export default SearchedContents
