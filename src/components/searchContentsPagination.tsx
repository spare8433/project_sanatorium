import { getHospitalAPI, getSanatoriumAPI, getServiceFacilityAPI } from "@api/openAPI";
import { useSearchQuery } from "@hooks/useSearchQuery";
import { getHospitalQuery, getSanatoriumQuery, getServiceFacilityQuery } from "@lib/util";
import { useQuery } from "@tanstack/react-query";
import { JSX } from "react";
import { Pagination, Placeholder } from "react-bootstrap";
import styled, { css } from "styled-components";

interface Props {
  facility: FacilityType;
}

/** 화면에 노출 되는 콘텐츠 갯수 */
const SHOW_ITEMS_COUNT = 12;

const SearchContentsPagination = ({ facility }: Props) => {
  return (
    <>
      {facility === "hospital" && <HospitalItems />}
      {facility === "sanatorium" && <SanatoriumItems />}
      {facility === "serviceFacility" && <ServiceFacilityItems />}
    </>
  );
};

export default SearchContentsPagination;

const PaginationPlaceHolder = () => (
  <PlaceholderContainer>
    <Placeholder xs={6} size="lg" />
  </PlaceholderContainer>
);

const HospitalItems = () => {
  const { searchText, facility, city, grade, pageNum } = useSearchQuery();

  const { data, isSuccess } = useQuery({
    queryKey: ["searchedData", searchText, facility, city, grade, pageNum],
    staleTime: 60 * 1000,
    queryFn: () => getHospitalAPI({ city, searchText, pageNum, grade, notiCount: SHOW_ITEMS_COUNT }),
  });

  if (!isSuccess) return <PaginationPlaceHolder />;

  const sectionNum = Math.ceil(pageNum / SHOW_ITEMS_COUNT);
  const startNum = (sectionNum - 1) * SHOW_ITEMS_COUNT + 1;
  const endNum = sectionNum * SHOW_ITEMS_COUNT;
  const finEndNum = Math.ceil(data.totalCount / SHOW_ITEMS_COUNT);

  const query = { searchText, facility, city, grade };
  const result: JSX.Element[] = [];

  for (let num = startNum; num <= endNum && num <= finEndNum; num++) {
    result.push(
      <Pagination.Item key={num} href={getHospitalQuery({ ...query, pageNum: num })} active={num === pageNum}>
        {num}
      </Pagination.Item>,
    );
  }

  return (
    <PaginationContainer>
      {pageNum > 1 && <Pagination.Prev href={getHospitalQuery({ ...query, pageNum: pageNum - 1 })} />}
      {result}
      {finEndNum > pageNum && <Pagination.Next href={getHospitalQuery({ ...query, pageNum: pageNum + 1 })} />}
    </PaginationContainer>
  );
};

const SanatoriumItems = () => {
  const { searchText, facility, sanatoriumCategory, city, profit, pageNum } = useSearchQuery();

  const { data, isSuccess } = useQuery({
    queryKey: ["searchedData", searchText, facility, sanatoriumCategory, city, profit, pageNum],
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

  if (!isSuccess) return <PaginationPlaceHolder />;

  const sectionNum = Math.ceil(pageNum / SHOW_ITEMS_COUNT);
  const startNum = (sectionNum - 1) * SHOW_ITEMS_COUNT + 1;
  const endNum = sectionNum * SHOW_ITEMS_COUNT;
  const finEndNum = Math.ceil(data.totalCount / SHOW_ITEMS_COUNT);

  const result: JSX.Element[] = [];
  const query = { searchText, facility, city, profit, facilityCategory: sanatoriumCategory };

  for (let num = startNum; num <= endNum && num <= finEndNum; num++) {
    result.push(
      <Pagination.Item key={num} href={getSanatoriumQuery({ ...query, pageNum: num })} active={num === pageNum}>
        {num}
      </Pagination.Item>,
    );
  }

  return (
    <PaginationContainer>
      {pageNum > 1 && <Pagination.Prev href={getSanatoriumQuery({ ...query, pageNum: pageNum - 1 })} />}
      {result}
      {finEndNum > pageNum && <Pagination.Next href={getSanatoriumQuery({ ...query, pageNum: pageNum + 1 })} />}
    </PaginationContainer>
  );
};

const ServiceFacilityItems = () => {
  const { searchText, facility, serviceFacilityCategory, city, profit, pageNum } = useSearchQuery();

  const { data, isSuccess } = useQuery({
    queryKey: ["searchedData", searchText, facility, serviceFacilityCategory, city, profit, pageNum],
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

  if (!isSuccess) return <PaginationPlaceHolder />;

  const sectionNum = Math.ceil(pageNum / SHOW_ITEMS_COUNT);
  const startNum = (sectionNum - 1) * SHOW_ITEMS_COUNT + 1;
  const endNum = sectionNum * SHOW_ITEMS_COUNT;
  const finEndNum = Math.ceil(data.totalCount / SHOW_ITEMS_COUNT);

  const result: JSX.Element[] = [];
  const query = { searchText, facility, city, profit, facilityCategory: serviceFacilityCategory };

  for (let num = startNum; num <= endNum && num <= finEndNum; num++) {
    result.push(
      <Pagination.Item key={num} href={getServiceFacilityQuery({ ...query, pageNum: num })} active={num === pageNum}>
        {num}
      </Pagination.Item>,
    );
  }

  return (
    <PaginationContainer>
      {pageNum > 1 && <Pagination.Prev href={getServiceFacilityQuery({ ...query, pageNum: pageNum - 1 })} />}
      {result}
      {finEndNum > pageNum && <Pagination.Next href={getServiceFacilityQuery({ ...query, pageNum: pageNum + 1 })} />}
    </PaginationContainer>
  );
};

const PaginationContainer = styled(Pagination)`
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
`;

const PlaceholderContainer = styled.div`
  text-align: center;

  span {
    background-color: ${({ theme }) => theme.colors["background-muted"]};
    height: 3rem;
    border-radius: 1rem;
  }
`;
