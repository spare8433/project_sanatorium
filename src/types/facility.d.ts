/**
 * 요양 관련 시설 종류 (type)
 */
type FacilityType = "hospital" | "serviceFacility" | "sanatorium";

/**
 * 요양시설 카테고리 (type)
 */
type ServiceFacilityCategory =
  | "방문요양"
  | "방문목욕"
  | "주야간보호"
  | "단기보호"
  | "방문간호"
  | "복지용구"
  | "재가노인지원서비스";

/**
 * 재가노인복지시설 카테고리 (type)
 */
type SanatoriumFacilityCategory = "노인요양공동생활가정" | "노인요양시설";

/**
 * 요양병원 등급 종류 (type)
 */
type HospitalGrade = "1등급" | "2등급" | "3등급" | "4등급" | "5등급" | "등급제외";

type DetailFacilityCategory = ServiceFacilityCategory | SanatoriumFacilityCategory;
type ProfitType = "영리" | "비영리";
