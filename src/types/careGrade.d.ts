interface ConvertedScore {
  physicalPart: { [index: number]: number };
  recognitionPart: { [index: number]: number };
  behaviorPart: { [index: number]: number };
  nursingPart: { [index: number]: number };
  rehabPart: { [index: number]: number };
}

type CareGradeModeType =
  | "home"
  | "list"
  | "physical"
  | "recognition"
  | "behavior"
  | "nursing"
  | "rehabExercise"
  | "rehabJoint"
  | "result";

interface PhysicalResponse {
  /** 옷 벗고 입기 */
  cloth: number;
  /** 세수하기 */
  washFace: number;
  /** 양치질하기 */
  washTeeth: number;
  /** 목욕하기 */
  washBody: number;
  /** 식사하기 */
  eating: number;
  /** 체위변경하기 */
  changeBodyPosition: number;
  /** 일어나 앉기 */
  standing: number;
  /** 옮겨 앉기 */
  moveAndSitting: number;
  /** 방 밖으로 나오기 */
  comeOutRoom: number;
  /** 화장실 사용하기 */
  useBathRoom: number;
  /** 대변 조절 */
  fecalControl: number;
  /** 소변 조절 */
  urineControl: number;
}

interface RecognitionResponse {
  /** 단기 기억장애 */
  shortTermMemoryAngle: number;
  /** 날짜불인지 */
  dateRecognition: number;
  /** 장소불인지 */
  placeRecognition: number;
  /** 나이 생년월일 불인지 */
  ageBirthRecognition: number;
  /** 지시 불인지 */
  InstructionRecognition: number;
  /** 상황 판단력 감퇴 */
  decisionDecline: number;
  /** 의사소통 전달 장애 */
  communicationRecognition: number;
}

interface BehaviorResponse {
  /** 망상 */
  delusion: number;
  /** 환각, 환청 */
  hallucination: number;
  /** 슬픈 상태, 울기도 함 */
  sadFeeling: number;
  /** 불규칙수면 주야혼돈 */
  IrregularSleep: number;
  /** 도움에 저항 */
  refusingHelp: number;
  /** 서성거림 안절부절못함 */
  anxiety: number;
  /** 길을 잃음 */
  lost: number;
  /** 폭언, 위협행동 */
  threat: number;
  /** 밖으로 나가려함 */
  leave: number;
  /** 물건 망가트리기 */
  destroying: number;
  /** 의미 없거나 부적절한 행동 */
  meaninglessBehavior: number;
  /** 돈 물건 감추기 */
  hideThings: number;
  /** 부적절한 옷 입기 */
  inappropriateDressing: number;
  /** 대소변 불결행위 */
  impurityFecesAct: number;
}

interface NursingResponse {
  /** 기관지 절개관 간호 */
  bronchostomyTube: number;
  /** 흡인 */
  airwayAspiration: number;
  /** 산소요법 */
  oxygenTherapy: number;
  /** 욕창간호 */
  bedsores: number;
  /** 경관 영양 */
  tubeNutrition: number;
  /** 암성통증간호 */
  cancePain: number;
  /** 도뇨관리 */
  manageCartheter: number;
  /** 장루간호 */
  stoma: number;
  /** 투석간호 */
  dialysis: number;
}

interface RehabExerciseResponse {
  /** 우측상지 */
  rightUpperLimb: number;
  /** 우측하지 */
  rightLowerLimb: number;
  /** 좌측상지 */
  leftUpperLimb: number;
  /** 좌측하지 */
  leftLowerLimb: number;
}

interface RehabJointResponse {
  /** 어깨관절 */
  shoulderJoint: number;
  /** 팔꿈치관절 */
  elbowJoint: number;
  /** 손목 및 수지관절 */
  wristJoint: number;
  /** 고관절 */
  hipJoint: number;
  /** 무릎관절 */
  kneeJoint: number;
  /** 발목관절 */
  ankleJoint: number;
}

interface CareGradeResponse {
  /** 신체기능 영역 점수 (완전자립: 1, 부분 도움: 2, 완전 도움: 3) */
  physicalResponse: PhysicalResponse;

  /** 인지기능 영역 점수 (예: 1, 아니오: 0) */
  recognitionResponse: RecognitionResponse;

  /** 행동변화 영역 점수 (예: 1, 아니오: 0) */
  behaviorResponse: BehaviorResponse;

  /** 간호처치 영역 점수 (있다: 1, 없다: 0) */
  nursingResponse: NursingResponse;

  /** 재활 운동 장애 영역 점수 (운동장애없음: 1, 불운동장애: 2, 완전운동장애: 3) */
  rehabExerciseResponse: RehabExerciseResponse;

  /** 재활 관절 제한 영역 점수 (제한없음: 1, 한쪽관절제한: 2, 양관절제한: 3) */
  rehabJointResponse: RehabJointResponse;
}

interface TotalCareGradeScore {
  /** 신체기능 영역 통합 점수 */
  physicalScore: number;

  /** 인지기능 영역 통합 점수 */
  recognitionScore: number;

  /** 행동변화 영역 통합 점수 */
  behaviorScore: number;

  /** 간호처치 영역 통합 점수 */
  nursingScore: number;

  /** 재활 운동 장애 영역 통합 점수 */
  rehabScore: number;
}

type FinalGrade = "등급 외" | "1등급" | "2등급" | "3등급" | "4등급" | "5등급" | "인지지원 등급";
