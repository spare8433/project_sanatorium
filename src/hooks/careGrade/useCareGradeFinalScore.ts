import useAssistantScore from "./useAssistantScore";
import useCleanScore from "./useCleanScore";
import useExcretionScore from "./useExcretionScore";
import useMealScore from "./useMealScore";
import useSubSupportScore from "./useSubSupportScore";
import useBehaviorScore from "./useBehaviorScore";
import useNursingScore from "./useNursingScore";
import useRehabScore from "./useRehabScore";
import useCareGradeScore from "./useCareGradeScore";
import { useCallback } from "react";

const useCareGradeFinalScore = (ScoreObj: CareGradeTotalScore) => {
  const { recognitionPart, behaviorPart, nursingPart, rehabExercisePart } = ScoreObj;
  const [, convertedScore] = useCareGradeScore(ScoreObj);

  const cleanFinalScore = useCleanScore(ScoreObj);
  const excretionFinalScore = useExcretionScore(ScoreObj);
  const mealFinalScore = useMealScore(ScoreObj);
  const assistantFinalScore = useAssistantScore(ScoreObj);
  const behaviorFinalScore = useBehaviorScore(ScoreObj);
  const subSupportFinalScore = useSubSupportScore(ScoreObj);
  const nursingFinalScore = useNursingScore(ScoreObj);
  const rehabFinalScore = useRehabScore(ScoreObj);

  const totalScore =
    cleanFinalScore +
    excretionFinalScore +
    mealFinalScore +
    assistantFinalScore +
    behaviorFinalScore +
    subSupportFinalScore +
    nursingFinalScore +
    rehabFinalScore;

  /** 51점 이상 75점미만인 자는 특별 산식을 적용하여 0.5 를 넘는지 여부를 반환하는 함수
   * (0.5 를 넘는 경우 상위 등급의 최저점으로 변경하는 기준이 존재) */
  const getExceptionCriteria = useCallback(() => {
    const exceptionNum = Math.exp(
      -27.0 +
        1.37 * recognitionPart.dateRecognition +
        1.2 * behaviorPart.IrregularSleep +
        0.89 * behaviorPart.lost +
        3.29 * behaviorPart.leave +
        0.51 * behaviorPart.meaninglessBehavior +
        1.54 * nursingPart.bedsores +
        1.94 * nursingPart.manageCartheter +
        0.5 * rehabExercisePart.leftUpperLimb +
        0.89 * convertedScore.physicalPart +
        0.18 * convertedScore.behaviorPart
    );
    return exceptionNum / (exceptionNum + 1) >= 0.5;
  }, [recognitionPart, behaviorPart, nursingPart, convertedScore]);

  /** 치매 의심 여부 반환 함수 */
  const getSuspectedDementia = useCallback(() => {
    return convertedScore.behaviorPart + convertedScore.recognitionPart >= 7;
  }, [convertedScore.behaviorPart, convertedScore.recognitionPart]);

  let grade: "등급 외" | "1등급" | "2등급" | "3등급" | "4등급" | "5등급" | "인지지원 등급" = "등급 외";
  let finalScore = totalScore;

  if (totalScore >= 95) {
    grade = "1등급";
  } else if (totalScore >= 75) {
    grade = "2등급";
  } else if (totalScore >= 60) {
    if (getExceptionCriteria()) {
      grade = "2등급";
      finalScore = 75;
    } else grade = "3등급";
  } else if (totalScore >= 51) {
    if (getExceptionCriteria()) {
      grade = "3등급";
      finalScore = 60;
    } else grade = "4등급";
  } else if (totalScore >= 45 && getSuspectedDementia()) {
    grade = "5등급";
  } else if (totalScore < 45 && getSuspectedDementia()) {
    grade = "인지지원 등급";
  }

  return [Math.floor(finalScore * 100) / 100, grade];
};

export default useCareGradeFinalScore;
