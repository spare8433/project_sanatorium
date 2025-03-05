import useCareGradeScore from "./useCareGradeScore";

const useRehabScore = (ScoreObj: CareGradeTotalScore) => {
  const { physicalPart, recognitionPart, behaviorPart } = ScoreObj;

  const [, convertedScore] = useCareGradeScore(ScoreObj);

  if (convertedScore.rehabPart === 0) {
    return behaviorPart.lost === 0 ? 2.5 : 3.7;
  } else if (0 < convertedScore.rehabPart && convertedScore.rehabPart <= 39.46) {
    if (physicalPart.washFace <= 2) {
      if (physicalPart.moveAndSitting === 1) {
        if (recognitionPart.placeRecognition === 0) {
          return physicalPart.washTeeth === 1 ? 4.0 : 5.7;
        } else {
          return physicalPart.cloth === 1 ? 3.8 : 2.7;
        }
      } else return 6.3;
    } else {
      return physicalPart.standing <= 2 ? 2.1 : 4.2;
    }
  } else {
    return behaviorPart.sadFeeling === 0 ? 4.8 : 6.3;
  }
};

export default useRehabScore;
