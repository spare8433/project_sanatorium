import useCareGradeScore from "./useCareGradeScore";

const useSubSupportScore = (ScoreObj: CareGradeTotalScore) => {
  const { physicalPart, behaviorPart } = ScoreObj;

  const [, convertedScore] = useCareGradeScore(ScoreObj);

  if (convertedScore.physicalPart <= 25.14) {
    return convertedScore.physicalPart <= 6.59 ? 12.5 : 16.9;
  } else {
    if (behaviorPart.leave === 0) {
      if (physicalPart.urineControl === 1) {
        return 17.6;
      } else {
        if (behaviorPart.sadFeeling === 0) {
          if (physicalPart.eating === 1) {
            return 17.3;
          } else {
            return behaviorPart.IrregularSleep === 0 ? 19.7 : 23.6;
          }
        } else return 23.0;
      }
    } else {
      return convertedScore.behaviorPart <= 56.0 ? 21.7 : 28.4;
    }
  }
};

export default useSubSupportScore;
