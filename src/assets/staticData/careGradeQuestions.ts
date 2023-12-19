/** 신체기능 질문 목록 */
export const PhysicalQuestions = [
  { category: 'cloth', question: '옷을 벗고 입기가 가능하십니까?' },
  { category: 'washFace', question: '세수하기가 가능하십니까?' },
  { category: 'washTeeth', question: '양치질하기가 가능하십니까?' },
  { category: 'washBody', question: '목욕하기가 가능하십니까?' },
  { category: 'eating', question: '식사하기가 가능하십니까?' },
  { category: 'changeBodyPosition', question: '자세를 변경하기가 가능하십니까?' },
  { category: 'standing', question: '일어나 앉기가 가능하십니까?' },
  { category: 'moveAndSitting', question: '옮겨 앉기가 가능하십니까?' },
  { category: 'comeOutRoom', question: '방 밖으로 나오기가 가능하십니까?' },
  { category: 'useBathRoom', question: '화장실 이용이 가능하십니까?' },
  { category: 'fecalControl', question: '대변 조절이 가능하십니까?' },
  { category: 'urineControl', question: '소변 조절이 가능하십니까?' },
]

/** 신체기능 답변 목록 */
export const PhysicalAnswerList = [
  { answer: '혼자서 가능합니다.', score: 1 },
  { answer: '일부 도움이 필요합니다.', score: 2 },
  { answer: '완전히 도움이 필요합니다.', score: 3 },
]

/** 인지기능 질문 목록 */
export const RecognQuestions = [
  { category: 'shortTermMemoryAngle', question: '단기 기억장애가 있으십니까?' },
  { category: 'dateRecognition', question: '날짜를 인지하지 힘드십니까?' },
  { category: 'placeRecognition', question: '장소를 인지하지 힘드십니까?' },
  { category: 'ageBirthRecognition', question: '나이·생년월일을 인지하지 힘드십니까?' },
  { category: 'InstructionRecognition', question: '지시를 이해하기 힘드십니까?' },
  { category: 'decisionDecline', question: '상황 판단이 힘드십니까?' },
  { category: 'communicationRecognition', question: '의사소통하기가 힘드십니까?' },
]

/** 인지기능 답변 목록 */
export const RecognAnswerList = [
  { answer: '예', score: 1 },
  { answer: '아니오', score: 0 },
]

/** 행동변화 질문 목록 */
export const BehaviorQuestions = [
  { category: 'delusion', question: '망상이 있으십니까?' },
  { category: 'hallucination', question: '환각이나 환청이 있으십니까?' },
  { category: 'sadFeeling', question: '슬픈 상태가 이어지거나 자주 울기도 하십니까?' },
  { category: 'IrregularSleep', question: '불규칙하게 수면하시거나 밤낮 구분이 힘드십니까?' },
  { category: 'refusingHelp', question: '도움 받기를 거부하시거나 저항하십니까?' },
  { category: 'anxiety', question: '주위를 서성거리거나 안절부절못하십니까?' },
  { category: 'lost', question: '길을 잃으시거나 혼자 돌아다니기 힘드십니까?' },
  { category: 'threat', question: '폭언 및 위협행동을 하십니까?' },
  { category: 'leave', question: '밖으로 나가려고 하십니까?' },
  { category: 'destroying', question: '물건을 망가트리거나 부십니까?' },
  { category: 'meaninglessBehavior', question: '의미 없거나 부적절한 행동을 하십니까?' },
  { category: 'hideThings', question: '돈이나 물건을 감추십니까?' },
  { category: 'inappropriateDressing', question: '옷을 부적절하게 입으십니까?' },
  { category: 'impurityFecesAct', question: '대소변으로 불결한 행위를 하십니까?' },
]

/** 행동변화 답변 목록 */
export const BehaviorAnswerList = [
  { answer: '예', score: 1 },
  { answer: '아니오', score: 0 },
]

/** 간호처치 질문 목록 */
export const NursingQuestions = [
  {
    category: 'bronchostomyTube',
    question: '기관지 절개관(기관지를 절개하여 인공기도 확보) 간호가 필요하십니까?',
  },
  {
    category: 'airwayAspiration',
    question: '흡인(카데터 등으로 분비물을 제거하여 기도 유지)이 필요하십니까?',
  },
  {
    category: 'oxygenTherapy',
    question: '산소요법(산소공급장치를 통해 산소 공급)이 필요하십니까?',
  },
  { category: 'bedsores', question: '욕창간호가 필요하십니까?' },
  { category: 'tubeNutrition', question: '경관 영양(관을 통한 영양 공급)이 필요하십니까?' },
  { category: 'cancePain', question: '암성통증(암 진행에 의한 통증)간호가 필요하십니까?' },
  {
    category: 'manageCartheter',
    question: '도뇨관리(인위적으로 방광을 비우거나 관리)가 필요하십니까?',
  },
  { category: 'stoma', question: '장루간호(인공항문 관리)가 필요하십니까?' },
  { category: 'dialysis', question: '투석이 필요하십니까?' },
]

/** 간호처치 답변 목록 */
export const NursingAnswerList = [
  { answer: '예', score: 1 },
  { answer: '아니오', score: 0 },
]

/** 재활 운동 장애 질문 목록 */
export const RehabExerciseQuestions = [
  {
    category: 'rightUpperLimb',
    question: '우측상지(오른쪽 손, 팔, 어깨) 움직이시는데 문제가 없습니까?',
  },
  {
    category: 'rightLowerLimb',
    question: '우측하지(오른쪽 발, 다리) 움직이시는데 문제가 없습니까?',
  },
  {
    category: 'leftUpperLimb',
    question: '좌측상지(왼쪽 손, 팔, 어깨) 움직이시는데 문제가 없습니까?',
  },
  {
    category: 'leftLowerLimb',
    question: '좌측하지(왼쪽 발, 다리) 움직이시는데 문제가 없습니까?',
  },
]

/** 재활 운동 장애 답변 목록 */
export const RehabExerciseAnswers = [
  { answer: '움직이는데 문제가 없습니다.', score: 1 },
  { answer: '움직이는데 약간의 문제가 있습니다.', score: 2 },
  { answer: '움직이는데 많은 문제가 있습니다.', score: 3 },
]

/** 재활 관절 제한 질문 목록 */
export const RehabJointQuestions = [
  { category: 'shoulderJoint', question: '어깨관절' },
  { category: 'elbowJoint', question: '팔꿈치관절' },
  { category: 'wristJoint', question: '손목 및 수지관절' },
  { category: 'hipJoint', question: '고관절' },
  { category: 'kneeJoint', question: '무릎관절' },
  { category: 'ankleJoint', question: '발목관절' },
]

/** 재활 관절 제한 답변 목록 */
export const RehabJointAnswers = [
  { answer: '제한이 없습니다.', score: 1 },
  { answer: '한쪽에 제한이 있습니다.', score: 2 },
  { answer: '양쪽에 제한이 있습니다.', score: 3 },
]
