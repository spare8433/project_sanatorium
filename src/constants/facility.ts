export const PROFIT_CATEGORIES = ["profit", "nonProfit"] as const;
export const PROFIT_CATEGORY_TYPE = { profit: "영리", nonProfit: "비영리" } as const;
/**
/**
 * 요양 관련 시설 카테고리
 */
export const FACILITY_CATEGORIES = ["hospital", "sanatorium", "serviceFacility"] as const;
export const FACILITY_CATEGORY_TYPE = {
  hospital: "요양병원",
  sanatorium: "요양시설",
  serviceFacility: "재가노인복지시설",
} as const;
/**
 * 요양시설 카테고리
 */
export const SERVICE_FACILITY_CATEGORIES = [
  "visitCare",
  "visitBath",
  "allDayProtection",
  "shortProtection",
  "visitNursing",
  "welfareEquipment",
  "homeSeniorSupport",
] as const;
export const SERVICE_FACILITY_TYPE = {
  visitCare: "방문요양",
  visitBath: "방문목욕",
  allDayProtection: "주야간보호",
  shortProtection: "단기보호",
  visitNursing: "방문간호",
  welfareEquipment: "복지용구",
  homeSeniorSupport: "재가노인지원서비스",
} as const;

/**
 * 재가노인복지시설 카테고리
 */
export const SANATORIUM_CATEGORIES = ["seniorCoLiving", "seniorCareFacility"] as const;
export const SANATORIUM_CATEGORY_TYPE = {
  seniorCoLiving: "노인요양공동생활가정",
  seniorCareFacility: "노인요양시설",
};

/**
 * 요양병원 등급 종류
 */
export const HOSPITAL_GRADES = ["1", "2", "3", "4", "5", "none"] as const;

export const HOSPITAL_GRADE_TYPE = {
  "1": "1등급",
  "2": "2등급",
  "3": "3등급",
  "4": "4등급",
  "5": "5등급",
  none: "등급제외",
} as const;
