/**
 * 요양 관련 시설 종류 (type)
 */
export type FacilityType = '요양병원' | '요양시설' | '재가노인복지시설'

/**
 * 요양시설 카테고리 (type)
 */
export type WelfareServiceFacCtgType =
  | '방문요양'
  | '방문목욕'
  | '주야간보호'
  | '단기보호'
  | '방문간호'
  | '복지용구'
  | '재가노인지원서비스'

/**
 * 재가노인복지시설 카테고리 (type)
 */
export type SanatoriumFacCtgType = '노인요양공동생활가정' | '노인요양시설'

/**
 * 요양병원 등급 종류 (type)
 */
export type HosGradeListType = '1등급' | '2등급' | '3등급' | '4등급' | '5등급' | '등급제외'

export type DetailCtgType = WelfareServiceFacCtgType | SanatoriumFacCtgType
export type ProfitType = '영리' | '비영리'

export const ProfitCategory = ['영리', '비영리']

/**
 * 요양 관련 시설 카테고리
 */
export const FacilityCategory = ['요양병원', '요양시설', '재가노인복지시설']

/**
 * 요양시설 카테고리
 */
export const WfSFacCategory = [
  '방문요양',
  '방문목욕',
  '주야간보호',
  '단기보호',
  '방문간호',
  '복지용구',
  '재가노인지원서비스',
]

/**
 * 재가노인복지시설 카테고리
 */
export const SntFacCategory = ['노인요양공동생활가정', '노인요양시설']

/**
 * 요양병원 등급 종류
 */
export const HosGradeList = ['1등급', '2등급', '3등급', '4등급', '5등급', '등급제외']
