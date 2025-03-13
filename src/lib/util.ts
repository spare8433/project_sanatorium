interface BasicQuery {
  searchText: string;
  facility: FacilityType;
  city: CityName | "all";
  pageNum: number;
}

interface HospitalQuery extends BasicQuery {
  grade: HospitalGrade | "all";
}
interface SanatoriumQuery extends BasicQuery {
  facilityCategory: SanatoriumFacilityCategory | "all";
  profit: ProfitType | "all";
}
interface ServiceFacilityQuery extends BasicQuery {
  facilityCategory: ServiceFacilityCategory | "all";
  profit: ProfitType | "all";
}

export function getHospitalQuery(query: HospitalQuery) {
  const { facility, city, searchText, pageNum, grade } = query;
  return `?facility=${facility}&city=${city}&searchText=${searchText}&pageNum=${pageNum}&grade=${grade}`;
}

export function getSanatoriumQuery(query: SanatoriumQuery) {
  const { facility, city, searchText, pageNum, facilityCategory, profit } = query;
  return `?facility=${facility}&city=${city}&searchText=${searchText}&pageNum=${pageNum}&sanatoriumCategory=${facilityCategory}&profit=${profit}`;
}

export function getServiceFacilityQuery(query: ServiceFacilityQuery) {
  const { facility, city, searchText, pageNum, facilityCategory, profit } = query;
  return `?facility=${facility}&city=${city}&searchText=${searchText}&pageNum=${pageNum}&serviceFacilityCategory=${facilityCategory}&profit=${profit}`;
}
