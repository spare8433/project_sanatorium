import { CONVERTED_SCORE } from "@constants/convertedScore";

const useCareGradeScore = (ScoreObj: CareGradeTotalScore) => {
  const { physicalPart, recognitionPart, behaviorPart, nursingPart, rehabExercisePart, rehabJointPart } = ScoreObj;
  const getTotalScore = (obj: object): number =>
    Object.values(obj).reduce((prevValue, currentValue) => prevValue + currentValue);

  const totalScore = {
    physicalPart: getTotalScore(physicalPart),
    recognitionPart: getTotalScore(recognitionPart),
    behaviorPart: getTotalScore(behaviorPart),
    nursingPart: getTotalScore(nursingPart),
    rehabPart: getTotalScore(rehabExercisePart) + getTotalScore(rehabJointPart),
  };

  const convertedScore = {
    physicalPart: CONVERTED_SCORE.physicalPart[totalScore.physicalPart],
    recognitionPart: CONVERTED_SCORE.recognitionPart[totalScore.recognitionPart],
    behaviorPart: CONVERTED_SCORE.behaviorPart[totalScore.behaviorPart],
    nursingPart: CONVERTED_SCORE.nursingPart[totalScore.nursingPart],
    rehabPart: CONVERTED_SCORE.rehabPart[totalScore.rehabPart],
  };

  return [totalScore, convertedScore];
};

export default useCareGradeScore;
