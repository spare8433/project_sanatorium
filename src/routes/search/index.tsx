import DetailInfoModal from "@components/detailInfoModal";
import MainSearchForm from "@components/mainSearchForm";
import SearchContentsPagination from "@components/searchContentsPagination";
import SearchedItems from "@components/searchedItems";
import { useSearchQuery } from "@hooks/useSearchQuery";
import useSwitch from "@hooks/useSwitch";
import { Container } from "@styles/common";
import { useState } from "react";

import { ContentBox, SearchContainer } from "./style";

type DetailDataType = HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData;

const Search = () => {
  const { facility } = useSearchQuery();
  const [isModalOn, turnOn, turnOff] = useSwitch(false);
  const [detailData, setDetailData] = useState<DetailDataType | null>(null);

  const showDetailModal = (item: DetailDataType) => {
    setDetailData(item);
    turnOn();
  };

  return (
    <Container>
      {/* 검색창 및 검색옵션 */}
      <MainSearchForm />
      <SearchContainer>
        <ContentBox>
          {/* 상세정보 모달 */}
          <DetailInfoModal show={isModalOn} facility={facility} data={detailData} closeFn={turnOff} />

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
