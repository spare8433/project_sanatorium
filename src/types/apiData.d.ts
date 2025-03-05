/** 요양 병원 검색 API 요청인자 */
interface GetHospitalsParam {
  SIGName: string;
  searchText: string;
  notiCount: number;
  page: number;
  grade: string;
}

/** 재가 노인 복지시설 + 요양 시설 검색 API 요청인자 */
interface GetSanatoriumParam {
  SIGName: string;
  searchText: string;
  page: number;
  notiCount: number;
  detailCategory: string;
  profit: string;
}

type GetServiceFacilityParam = GetSanatoriumParam;

/** 리스트 검색 API 함수 반환 타입 */
type APIResponse<T = any> = { dataArr: T[]; totalCount: number };

/** 요양 병원 리스트 검색 API 함수 타입 */
type GetHospitalAPI = (param: GetHospitalsParam) => Promise<APIResponse<HospitalDetailData>>;

/** 요양시설 리스트 검색 API 함수 타입 */
type GetSanatoriumAPI = (param: GetSanatoriumParam) => Promise<APIResponse<SanatoriumDetailData>>;

/** 재가 노인복지시설 리스트 검색 API 함수 타입 */
type GetServiceFacilityAPI = (param: GetServiceFacilityParam) => Promise<APIResponse<ServiceFacilityDetailData>>;

/** 요양 관련 시설 API 결과 객체 공통 헤드 정보 */
interface CommonAPIObjHead {
  head: [
    { list_total_count: number }, // 데이터 총 갯수
    {
      RESULT: {
        /** [INFO | ERROR - 3자리 숫자코드] 형식의 자체 상태코드 */
        CODE: string;
        MESSAGE: string; // 자체 상태 메시지
      };
    },
  ];
}

/** 요양병원 상세 데이터 타입 */
interface HospitalDetailData {
  SIGUN_NM: string; // 시군명
  SIGUN_CD: number; // 시군코드
  INST_NM: string; // 기관명
  DIV_NM: string; // 평가내역
  REFINE_LOTNO_ADDR: string | null; // 지번 주소
  REFINE_ROADNM_ADDR: string | null; // 도로명 주소
  REFINE_ZIP_CD: number | null; // 우편번호
  REFINE_WGS84_LOGT: number | null; // WGS84경도
  REFINE_WGS84_LAT: number | null; // WGS84위도
  GRAD: string; // 평가등급
}

/** 요양시설 상세 데이터 타입 */
interface SanatoriumDetailData {
  NO: number; // 번호
  SIGUNGU_NM: string; // 시군구명
  FACLT_KIND_NM: string; // 시설종류
  FACLT_NM: string; // 시설명
  LNGTR_RECPER_APPONT_INST_YN_NM: string | null; //장기요양지정기관 여부
  ENTRNC_PSN_CAPA: number | null; // 입소정원
  ENTRNC_PSTPSN_SUM: number | null; // 입소현원-계
  ENTRNC_PSTPSN_MALE_CNT: number | null; // 입소현원-남자
  ENTRNC_PSTPSN_FEMALE_CNT: number | null; // 입소현원-여자
  ENTRNC_PSTPSN_GRAD_ISE_CNT: number | null; // 입소현원-등급내(시설급여1~5급)
  ENTRNC_PSTPSN_GRAD_ELSE_CNT: number | null; // 입소현원-등급외
  ENTRNC_PSTPSN_BASE_RECIPNT_CNT: number | null; // 입소현원-기초수급자
  ENTRNC_PSTPSN_GENRL_CNT: number | null; // 입소현원-기초수급자외
  ENFLPSN_PSN_CAPA: number | null; // 종사자정원
  ENFLPSN_PSTPSN_SUM: number | null; // 종사자현원-계
  ENFLPSN_PSTPSN_MALE_CNT: number | null; // 종사자현원-남자
  ENFLPSN_PSTPSN_FEMALE_CNT: number | null; // 종사자현원-여자
  ENFLPSN_PSTPSN_WORK_ACCTO_SUM: null; // 종사자현원-계 (근무별)
  ENFLPSN_PSTPSN_RGLLBR_CNT: number | null; // 종사자현원-정규직
  ENFLPSN_PSTPSN_IRGLLBR_CNT: number | null; // 종사자현원-비정규직
  DETAIL_TELNO: string | null; // 전화번호
  DETAIL_FAXNO: string | null; // FAX번호
  FACLT_INSTL_DETAIL_DE: string | null; // 설치일자
  LOCGOV_INSTL_DIV_NM: string | null; // 설치주체-지자체
  PRVATE_INSTL_DIV_NM: string | null; // 설치주체-민간
  COPRTN_GRP_NM: string | null; // 운영주체-법인(단체)명
  INSTL_MAINBD_DIV_NM: string | null; // 운영주체-구분
  PRFTMK_DIV_NM: string | null; // 영리/비영리
  RM: string | null; // 비고
  REFINE_LOTNO_ADDR: string | null; // 지번 주소
  REFINE_ROADNM_ADDR: string | null; // 도로명 주소
  REFINE_ZIP_CD: number | null; // 우편번호
  REFINE_WGS84_LOGT: number | null; // WGS84경도
  REFINE_WGS84_LAT: number | null; // WGS84위도
}

/** 재가 노인복지시설 상세 데이터 타입 */
interface ServiceFacilityDetailData {
  SIGUNGU_NM: string; // 시군구명
  FACLT_KIND_NM: string; // 시설종류
  FACLT_NM: string; // 시설명
  LNGTR_RECPER_APPONT_INST_YN_NM: string | null; //장기요양지정기관 여부
  ENTRNC_PSN_CAPA: number | null; // 입소정원
  ENTRNC_PSTPSN_SUM: number | null; // 입소현원-계
  ENTRNC_PSTPSN_MALE_CNT: number | null; // 입소현원-남자
  ENTRNC_PSTPSN_FEMALE_CNT: number | null; // 입소현원-여자
  ENTRNC_PSTPSN_GRAD_ISE_CNT: number | null; // 입소현원-등급내(1~5급)
  ENTRNC_PSTPSN_GRAD_ELSE_CNT: number | null; // 입소현원-등급외
  FYR_USE_PSNNUM_SUM: number | null; // 연간이용이원-계
  FYR_USE_PSNNUM_MALE_CNT: number | null; // 연간이용이원-남자
  FYR_USE_PSNNUM_FEMALE_CNT: number | null; // 연간이용이원-남자
  ENFLPSN_PSN_CAPA: number | null; // 종사자정원
  ENFLPSN_PSTPSN_SUM: number | null; // 종사자현원-계
  ENFLPSN_PSTPSN_MALE_CNT: number | null; // 종사자현원-남자
  ENFLPSN_PSTPSN_FEMALE_CNT: number | null; // 종사자현원-여자
  ENFLPSN_PSTPSN_RGLLBR_CNT: number | null; // 종사자현원-정규직
  ENFLPSN_PSTPSN_IRGLLBR_CNT: number | null; // 종사자현원-비정규직
  DETAIL_TELNO: string | null; // 전화번호
  DETAIL_FAXNO: string | null; // FAX번호
  FACLT_INSTL_DETAIL_DE: string | null; // 설치일자
  LOCGOV_INSTL_DIV_NM: string | null; // 설치주체-지자체
  PRVATE_INSTL_DIV_NM: string | null; // 설치주체-민간
  COPRTN_GRP_NM: string | null; // 운영주체-법인(단체)명
  INSTL_MAINBD_DIV_NM: string | null; // 운영주체-구분
  PRFTMK_DIV_NM: string | null; // 영리/비영리
  RM: string | null; // 비고
  REFINE_LOTNO_ADDR: string | null; // 지번 주소
  REFINE_ROADNM_ADDR: string | null; // 도로명 주소
  REFINE_ZIP_CD: number | null; // 우편번호
  REFINE_WGS84_LOGT: number | null; // WGS84경도
  REFINE_WGS84_LAT: number | null; // WGS84위도
}

/** 요양병원 API 결과 객체 */
interface HospitalAPIObj {
  Hosptlevaltnrcper: [CommonAPIObjHead, { row: HospitalDetailData[] }];
}

/** 요양시설 API 결과 객체 */
interface SanatoriumAPIObj {
  OldpsnMedcareWelfac: [CommonAPIObjHead, { row: SanatoriumDetailData[] }];
}

/** 재가 노인복지시설 API 결과 객체 */
interface WelfareServiceAPIObj {
  HtygdWelfaclt: [CommonAPIObjHead, { row: ServiceFacilityDetailData[] }];
}
