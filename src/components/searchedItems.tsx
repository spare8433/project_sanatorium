import { getHospitalAPI, getSanatoriumAPI, getServiceFacilityAPI } from "@api/openAPI";
import { useSearchQuery } from "@hooks/useSearchQuery";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { Placeholder } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  facility: FacilityType;
  showDetailModal: (item: HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData) => void;
}

/** 화면에 노출 되는 콘텐츠 갯수 */
const SHOW_ITEMS_COUNT = 12;

const SearchedItems = ({ facility, showDetailModal }: Props) => {
  return (
    <>
      {facility === "hospital" && <HospitalItems showDetailModal={showDetailModal} />}
      {facility === "sanatorium" && <SanatoriumItems showDetailModal={showDetailModal} />}
      {facility === "serviceFacility" && <ServiceFacilityItems showDetailModal={showDetailModal} />}
    </>
  );
};

export default memo(SearchedItems);

const ItemsPlaceHolder = () => (
  <PlaceholderContainer>
    {[...Array(SHOW_ITEMS_COUNT)].map((_, i) => (
      <Placeholder animation="glow" as="span" key={i} size="sm" />
    ))}
  </PlaceholderContainer>
);

type ItemProps = Pick<Props, "showDetailModal">;

const HospitalItems = ({ showDetailModal }: ItemProps) => {
  const { searchText, facility, city, profit, grade, pageNum } = useSearchQuery();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["searchedData", searchText, facility, city, profit, grade, pageNum],
    staleTime: 60 * 1000,
    queryFn: () => getHospitalAPI({ city, searchText, pageNum, grade, notiCount: SHOW_ITEMS_COUNT }),
  });

  if (isLoading || !isSuccess) return <ItemsPlaceHolder />;
  if (isError) return <p>정상적으로 데이터를 불러오지 못했습니다.</p>;
  if (data.totalCount === 0) return <p>검색한 정보가 존재하지 않습니다.</p>;

  return (
    <FacilityGridBox>
      {data.dataArr.map((item, index) => (
        <ItemContainer key={`${item.INST_NM}_${index}`} onClick={() => showDetailModal(item)}>
          <h4>{item.INST_NM}</h4>
          <li>
            <b>분류</b> {item.DIV_NM}
          </li>
          <li>
            <b>주소</b> {item.REFINE_ROADNM_ADDR}
          </li>
          <li>
            <b>등급</b> {item.GRAD}
          </li>
        </ItemContainer>
      ))}
    </FacilityGridBox>
  );
};

const SanatoriumItems = ({ showDetailModal }: ItemProps) => {
  const { searchText, facility, sanatoriumCategory, city, profit, grade, pageNum } = useSearchQuery();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["searchedData", searchText, facility, sanatoriumCategory, city, profit, grade, pageNum],
    staleTime: 60 * 1000,
    queryFn: () =>
      getSanatoriumAPI({
        city,
        searchText,
        pageNum,
        profit,
        facilityCategory: sanatoriumCategory,
        notiCount: SHOW_ITEMS_COUNT,
      }),
  });

  if (isLoading || !isSuccess) return <ItemsPlaceHolder />;
  if (isError) return <p>정상적으로 데이터를 불러오지 못했습니다.</p>;
  if (data.totalCount === 0) return <p>검색한 정보가 존재하지 않습니다.</p>;

  return (
    <FacilityGridBox>
      {data.dataArr.map((item, index) => (
        <ItemContainer key={`${item.FACLT_NM}_${index}`} onClick={() => showDetailModal(item)}>
          <h4>{item.FACLT_NM}</h4>
          <li>
            <b>분류</b> {item.FACLT_KIND_NM}
          </li>
          <li>
            <b>주소</b> {item.REFINE_ROADNM_ADDR}
          </li>
          <li>
            <b>설립일자</b> {item.FACLT_INSTL_DETAIL_DE}
          </li>
        </ItemContainer>
      ))}
    </FacilityGridBox>
  );
};

const ServiceFacilityItems = ({ showDetailModal }: ItemProps) => {
  const { searchText, facility, serviceFacilityCategory, city, profit, grade, pageNum } = useSearchQuery();

  const { data, isLoading, isError, isSuccess } = useQuery({
    queryKey: ["searchedData", searchText, facility, serviceFacilityCategory, city, profit, grade, pageNum],
    staleTime: 60 * 1000,
    queryFn: () =>
      getServiceFacilityAPI({
        city,
        searchText,
        pageNum,
        profit,
        facilityCategory: serviceFacilityCategory,
        notiCount: SHOW_ITEMS_COUNT,
      }),
  });

  if (isLoading || !isSuccess) return <ItemsPlaceHolder />;
  if (isError) return <p>정상적으로 데이터를 불러오지 못했습니다.</p>;
  if (data.totalCount === 0) return <p>검색한 정보가 존재하지 않습니다.</p>;

  return (
    <FacilityGridBox>
      {data.dataArr.map((item, index) => (
        <ItemContainer key={`${item.FACLT_NM}_${index}`} onClick={() => showDetailModal(item)}>
          <h4>{item.FACLT_NM}</h4>
          <li>
            <b>분류</b> {item.FACLT_KIND_NM}
          </li>
          <li>
            <b>주소</b> {item.REFINE_ROADNM_ADDR}
          </li>
          <li>
            <b>설립일자</b> {item.FACLT_INSTL_DETAIL_DE}
          </li>
        </ItemContainer>
      ))}
    </FacilityGridBox>
  );
};

const ItemContainer = styled.ul`
  background-color: white;
  border-radius: 1rem;
  border: 1px solid #fff;
  box-shadow: 0.25rem 0.25rem 1rem rgb(0 0 0 / 25%);
  padding: 1.5rem 1.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  h4 {
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const FacilityGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1.5rem;
  margin: 2rem 2rem 8rem;
  font-size: 1.4rem;

  @media ${({ theme }) => theme.device.tablet} {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PlaceholderContainer = styled(FacilityGridBox)`
  span {
    background-color: ${({ theme }) => theme.colors["background-muted"]};
    height: 15rem;
    border-radius: 1rem;
  }
`;
