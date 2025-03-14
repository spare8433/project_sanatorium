interface SearchQueryType {
  querySearchText: string;
  queryProvince?: string;
  queryFacCtg: FacilityType;
  queryCity: string;
  queryDetailCtg: DetailFacilityCategory | "전체";
  queryProfit: ProfitType | "전체";
  queryGrade: HospitalGrade | "전체";
  queryPageNum: number;
}

interface FullSearchStatesType extends SearchStatesType {
  pageNum: number;
}
