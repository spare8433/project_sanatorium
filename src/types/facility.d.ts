/**
 * 요양 관련 시설 종류 (type)
 * hospital: 요양병원
 * sanatorium: 요양원
 * serviceFacility: 노인 복지 시설
 */
type FacilityType = "hospital" | "serviceFacility" | "sanatorium";

/**
 * 요양시설 카테고리 (type)
 * visitCare: 방문요양
 * visitBath: 방문목욕
 * allDayProtection: 주야간보호
 * shortProtection: 단기보호
 * visitNursing: 방문간호
 * welfareEquipment: 복지용구
 * homeSeniorSupport: 재가노인지원서비스
 */
type ServiceFacilityCategory =
  | "visitCare"
  | "visitBath"
  | "allDayProtection"
  | "shortProtection"
  | "visitNursing"
  | "welfareEquipment"
  | "homeSeniorSupport";

/**
 * 재가노인복지시설 카테고리 (type)
 * seniorCoLiving: 노인요양공동생활가정
 * seniorCareFacility: 노인요양시설
 */
type SanatoriumFacilityCategory = "seniorCoLiving" | "seniorCareFacility";

/**
 * 요양병원 등급 종류 (type)
 */
type HospitalGrade = "1" | "2" | "3" | "4" | "5" | "none";

type DetailFacilityCategory = ServiceFacilityCategory | SanatoriumFacilityCategory;
type ProfitType = "profit" | "nonProfit";

type CityName =
  | "가평군"
  | "고양시"
  | "과천시"
  | "광명시"
  | "광주시"
  | "구리시"
  | "군포시"
  | "김포시"
  | "남양주시"
  | "동두천시"
  | "부천시"
  | "성남시"
  | "수원시"
  | "시흥시"
  | "안산시"
  | "안성시"
  | "안양시"
  | "양주시"
  | "양평군"
  | "여주시"
  | "연천군"
  | "오산시"
  | "용인시"
  | "의왕시"
  | "의정부시"
  | "이천시"
  | "파주시"
  | "평택시"
  | "포천시"
  | "하남시"
  | "화성시";
