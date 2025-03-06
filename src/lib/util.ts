interface QueryObj {
  searchText: string;
  facility: FacilityType;
  city: string;
  detailFacility: DetailFacilityCategory | "all";
  profit: ProfitType | "all";
  grade: HospitalGrade | "all";
  pageNum: number;
}

export function getSearchFacilityQuery(queryObj: QueryObj) {
  const { facility, city, searchText, detailFacility, profit, grade, pageNum } = queryObj;
  let searchQuery = `?facility=${facility}&city=${city}&searchText=${searchText}`;
  switch (facility) {
    case "hospital":
      searchQuery += `&grade=${grade}`;
      break;
    case "sanatorium":
    case "serviceFacility":
      searchQuery += `&detailFacility=${detailFacility}&profit=${profit}`;
      break;
    default:
      throw Error;
  }
  searchQuery += `&p=${pageNum}`;
  return searchQuery;
}
