import FacilityDetailModal from "@components/facilityDetailModal";
import MainSearchForm from "@components/mainSearchForm";
import SearchContentsPagination from "@components/searchContentsPagination";
import SearchedItems from "@components/searchedItems";
import { useSearchQuery } from "@hooks/useSearchQuery";
import useSwitch from "@hooks/useSwitch";
import { Container } from "@styles/common";
import { useCallback, useState } from "react";
import styled from "styled-components";

type DetailDataType = HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData;

const Search = () => {
  const { facility } = useSearchQuery();
  const [isModalOn, turnOn, turnOff] = useSwitch(false);
  const [detailData, setDetailData] = useState<DetailDataType | null>(null);

  const showDetailModal = useCallback(
    (item: DetailDataType) => {
      setDetailData(item);
      turnOn();
    },
    [turnOn],
  );

  return (
    <Container>
      {/* 검색창 및 검색옵션 */}
      <MainSearchForm />
      <SearchContainer>
        <ContentBox>
          {/* 상세정보 모달 */}
          <FacilityDetailModal show={isModalOn} facility={facility} data={detailData} closeFn={turnOff} />

          {/* 검색된 내용 */}
          <SearchedItems facility={facility} showDetailModal={showDetailModal} />

          {/* 페이지 네이션 */}
          <SearchContentsPagination facility={facility} />
        </ContentBox>
      </SearchContainer>
    </Container>
  );
};

export default Search;

export const SearchContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`;

export const ContentBox = styled.div`
  margin: 3rem 0;
`;
