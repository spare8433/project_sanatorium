import useCareGradeScore from "./useCareGradeScore";

const useBehaviorScore = (ScoreObj: CareGradeTotalScore) => {
  const { physicalPart, behaviorPart } = ScoreObj;

  const [, convertedScore] = useCareGradeScore(ScoreObj);

  if (convertedScore.behaviorPart <= 34.69) {
    if (convertedScore.behaviorPart <= 7.79) {
      return convertedScore.physicalPart <= 17.71 ? 0.6 : 0.8;
    } else {
      return convertedScore.recognitionPart <= 60.24 ? 0.9 : 1.3;
    }
  } else {
    if (convertedScore.recognitionPart <= 39.21) {
      return 1.4;
    } else {
      if (behaviorPart.leave === 0) {
        return 1.6;
      } else {
        return physicalPart.washFace <= 2 ? 2.2 : 3.2;
      }
    }
  }
};

export default useBehaviorScore;
