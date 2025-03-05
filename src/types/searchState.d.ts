interface SearchStatesType {
  searchText: string;
  province?: string;
  facCtg: FacilityType;
  city: string;
  detailCtg: DetailFacilityCategory | "전체";
  profit: ProfitType | "전체";
  grade: HospitalGrade | "전체";
}

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

interface SearchChangeFnsType {
  changeSearchText: (e: React.ChangeEvent<any>) => void;
  changeFacCtg: (e: React.ChangeEvent<any>) => void;
  changeCity: (e: React.ChangeEvent<any>) => void;
  changeDetailCtg: (e: React.ChangeEvent<any>) => void;
  changeProfit: (e: React.ChangeEvent<any>) => void;
  changeGrade: (e: React.ChangeEvent<any>) => void;
}
