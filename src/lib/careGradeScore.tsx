import { CONVERTED_SCORE } from "@constants/convertedScore";

function getTotalCareGradeScore(score: CareGradeResponse): TotalCareGradeScore {
  const {
    physicalResponse,
    recognitionResponse,
    behaviorResponse,
    nursingResponse,
    rehabExerciseResponse,
    rehabJointResponse,
  } = score;

  const getSumScore = (obj: object): number =>
    Object.values(obj).reduce((prevValue, currentValue) => prevValue + currentValue);

  const convertedScore: TotalCareGradeScore = {
    physicalScore: CONVERTED_SCORE.physicalPart[getSumScore(physicalResponse)],
    recognitionScore: CONVERTED_SCORE.recognitionPart[getSumScore(recognitionResponse)],
    behaviorScore: CONVERTED_SCORE.behaviorPart[getSumScore(behaviorResponse)],
    nursingScore: CONVERTED_SCORE.nursingPart[getSumScore(nursingResponse)],
    rehabScore: CONVERTED_SCORE.rehabPart[getSumScore(rehabExerciseResponse) + getSumScore(rehabJointResponse)],
  };

  return convertedScore;
}

function getAssistantScore(score: CareGradeResponse) {
  const { physicalResponse, behaviorResponse, nursingResponse, rehabExerciseResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (totalScore.physicalScore <= 47.64) {
    if (totalScore.physicalScore <= 25.14) {
      return totalScore.physicalScore <= 6.59 ? 1.2 : 2.7;
    } else {
      if (physicalResponse.useBathRoom === 1) {
        if (physicalResponse.washTeeth <= 2) {
          return rehabExerciseResponse.rightLowerLimb === 1 ? 3.6 : 6.0;
        } else return 6.8;
      } else {
        return behaviorResponse.meaninglessBehavior === 0 ? 6.6 : 9.2;
      }
    }
  } else {
    if (physicalResponse.washTeeth <= 2) {
      if (physicalResponse.standing <= 2) {
        return totalScore.behaviorScore <= 28.83 ? 6.4 : 9.3;
      } else return 10.9;
    } else {
      return nursingResponse.bedsores === 0 ? 14.0 : 18.7;
    }
  }
}

function getBehaviorScore(score: CareGradeResponse) {
  const { physicalResponse, behaviorResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (totalScore.behaviorScore <= 34.69) {
    if (totalScore.behaviorScore <= 7.79) {
      return totalScore.physicalScore <= 17.71 ? 0.6 : 0.8;
    } else {
      return totalScore.recognitionScore <= 60.24 ? 0.9 : 1.3;
    }
  } else {
    if (totalScore.recognitionScore <= 39.21) {
      return 1.4;
    } else {
      if (behaviorResponse.leave === 0) {
        return 1.6;
      } else {
        return physicalResponse.washFace <= 2 ? 2.2 : 3.2;
      }
    }
  }
}

function getCleanScore(score: CareGradeResponse) {
  const { physicalResponse, recognitionResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (totalScore.physicalScore <= 34.15) {
    if (totalScore.physicalScore <= 17.72) {
      if (totalScore.physicalScore <= 9.86) {
        return totalScore.physicalScore <= 6.59 ? 1.2 : 3.0;
      } else {
        return totalScore.physicalScore <= 39.21 ? 2.9 : 4.1;
      }
    } else {
      return recognitionResponse.ageBirthRecognition === 0 ? 9.0 : 13.0;
    }
  } else {
    if (physicalResponse.washTeeth <= 2) {
      if (physicalResponse.useBathRoom === 1) return 8.6;
      else {
        return recognitionResponse.dateRecognition === 0 ? 9.0 : 13.0;
      }
    } else {
      if (physicalResponse.useBathRoom === 1) return 11.6;
      else {
        if (totalScore.rehabScore <= 40.16) {
          return totalScore.behaviorScore <= 60.34 ? 15.4 : 19.6;
        } else {
          return 17.2;
        }
      }
    }
  }
}

function getExcretionScore(score: CareGradeResponse) {
  const { physicalResponse, recognitionResponse, behaviorResponse, nursingResponse, rehabJointResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (physicalResponse.changeBodyPosition === 1) {
    if (physicalResponse.urineControl === 1) {
      if (physicalResponse.cloth <= 1) {
        if (totalScore.physicalScore === 0) {
          if (recognitionResponse.decisionDecline === 0) {
            return totalScore.behaviorScore <= 15.58 ? 0.3 : 0.7;
          } else {
            return 1.2;
          }
        } else {
          if (rehabJointResponse.kneeJoint <= 1) {
            return 1.0;
          } else {
            return recognitionResponse.dateRecognition === 0 ? 1.2 : 2.5;
          }
        }
      } else {
        return 2.6;
      }
    } else if (physicalResponse.urineControl === 2) {
      if (physicalResponse.moveAndSitting === 1) {
        return physicalResponse.useBathRoom === 1 ? 2.9 : 5.0;
      } else {
        return 8.3;
      }
    } else {
      /**physicalResponse.urineControl === 3 일때 */
      if (behaviorResponse.leave === 0) {
        return physicalResponse.washFace === 1 ? 5.3 : 10.2;
      } else {
        return 15.0;
      }
    }
  } else {
    if (physicalResponse.eating === 1) {
      return 6.8;
    } else {
      if (nursingResponse.bedsores === 0) {
        return physicalResponse.fecalControl <= 2 ? 8.8 : 12.5;
      } else {
        return behaviorResponse.sadFeeling === 0 ? 12.8 : 18.7;
      }
    }
  }
}

function getMealScore(score: CareGradeResponse) {
  const { physicalResponse, behaviorResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (physicalResponse.eating <= 2) {
    if (physicalResponse.washTeeth <= 2) {
      if (physicalResponse.washTeeth === 1) {
        return totalScore.physicalScore <= 6.59 ? 7.1 : 9.4;
      } else {
        if (physicalResponse.moveAndSitting === 1) {
          return behaviorResponse.leave === 0 ? 11.5 : 14.3;
        } else return 15.1;
      }
    } else {
      if (physicalResponse.useBathRoom <= 2) {
        if (physicalResponse.fecalControl === 1) {
          return 13.9;
        } else {
          return totalScore.physicalScore <= 30.77 ? 17.5 : 21.4;
        }
      } else return 23.4;
    }
  } else {
    return totalScore.rehabScore <= 41.21 ? 31.7 : 37.6;
  }
}

function getNursingScore(score: CareGradeResponse) {
  const { physicalResponse, behaviorResponse, nursingResponse, rehabExerciseResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (nursingResponse.bedsores === 0) {
    if (totalScore.nursingScore === 0) {
      if (behaviorResponse.IrregularSleep === 0) {
        if (rehabExerciseResponse.leftUpperLimb === 1) {
          return behaviorResponse.lost === 0 ? 6.7 : 8.1;
        } else {
          return physicalResponse.washTeeth <= 2 ? 7.4 : 11.6;
        }
      } else return 9.7;
    } else if (totalScore.nursingScore === 19.84) {
      return 9.6;
    } else {
      return 14.6;
    }
  } else {
    if (physicalResponse.eating <= 2) {
      return physicalResponse.washTeeth <= 2 ? 9.6 : 14.7;
    } else return 22.5;
  }
}

function getRehabScore(score: CareGradeResponse) {
  const { physicalResponse, recognitionResponse, behaviorResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (totalScore.rehabScore === 0) {
    return behaviorResponse.lost === 0 ? 2.5 : 3.7;
  } else if (0 < totalScore.rehabScore && totalScore.rehabScore <= 39.46) {
    if (physicalResponse.washFace <= 2) {
      if (physicalResponse.moveAndSitting === 1) {
        if (recognitionResponse.placeRecognition === 0) {
          return physicalResponse.washTeeth === 1 ? 4.0 : 5.7;
        } else {
          return physicalResponse.cloth === 1 ? 3.8 : 2.7;
        }
      } else return 6.3;
    } else {
      return physicalResponse.standing <= 2 ? 2.1 : 4.2;
    }
  } else {
    return behaviorResponse.sadFeeling === 0 ? 4.8 : 6.3;
  }
}

function getSubSupportScore(score: CareGradeResponse) {
  const { physicalResponse, behaviorResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  if (totalScore.physicalScore <= 25.14) {
    return totalScore.physicalScore <= 6.59 ? 12.5 : 16.9;
  } else {
    if (behaviorResponse.leave === 0) {
      if (physicalResponse.urineControl === 1) {
        return 17.6;
      } else {
        if (behaviorResponse.sadFeeling === 0) {
          if (physicalResponse.eating === 1) {
            return 17.3;
          } else {
            return behaviorResponse.IrregularSleep === 0 ? 19.7 : 23.6;
          }
        } else return 23.0;
      }
    } else {
      return totalScore.behaviorScore <= 56.0 ? 21.7 : 28.4;
    }
  }
}

export function getCareGradeFinalScore(score: CareGradeResponse): [number, FinalGrade] {
  const { recognitionResponse, behaviorResponse, nursingResponse, rehabExerciseResponse } = score;
  const totalScore = getTotalCareGradeScore(score);

  const cleanScore = getCleanScore(score);
  const excretionScore = getExcretionScore(score);
  const mealScore = getMealScore(score);
  const assistantScore = getAssistantScore(score);
  const behaviorScore = getBehaviorScore(score);
  const subSupportScore = getSubSupportScore(score);
  const nursingScore = getNursingScore(score);
  const rehabScore = getRehabScore(score);

  const sumTotalScore =
    cleanScore +
    excretionScore +
    mealScore +
    assistantScore +
    behaviorScore +
    subSupportScore +
    nursingScore +
    rehabScore;

  const exceptionNum = Math.exp(
    -27.0 +
      1.37 * recognitionResponse.dateRecognition +
      1.2 * behaviorResponse.IrregularSleep +
      0.89 * behaviorResponse.lost +
      3.29 * behaviorResponse.leave +
      0.51 * behaviorResponse.meaninglessBehavior +
      1.54 * nursingResponse.bedsores +
      1.94 * nursingResponse.manageCartheter +
      0.5 * rehabExerciseResponse.leftUpperLimb +
      0.89 * totalScore.physicalScore +
      0.18 * totalScore.behaviorScore,
  );

  /** 51점 이상 75점미만인 자는 특별 산식을 적용하여 0.5 를 넘는지 여부(0.5 를 넘는 경우 상위 등급의 최저점으로 변경하는 기준이 존재) */
  const isExceptionCriteria = exceptionNum / (exceptionNum + 1) >= 0.5;

  /** 치매 의심 여부 반환 */
  const isSuspectedDementia = totalScore.behaviorScore + totalScore.recognitionScore >= 7;

  let grade: FinalGrade = "등급 외";
  let finalScore = sumTotalScore;

  if (sumTotalScore >= 95) {
    grade = "1등급";
  } else if (sumTotalScore >= 75) {
    grade = "2등급";
  } else if (sumTotalScore >= 60) {
    if (isExceptionCriteria) {
      grade = "2등급";
      finalScore = 75;
    } else grade = "3등급";
  } else if (sumTotalScore >= 51) {
    if (isExceptionCriteria) {
      grade = "3등급";
      finalScore = 60;
    } else grade = "4등급";
  } else if (sumTotalScore >= 45 && isSuspectedDementia) {
    grade = "5등급";
  } else if (sumTotalScore < 45 && isSuspectedDementia) {
    grade = "인지지원 등급";
  }

  return [Math.floor(finalScore * 100) / 100, grade];
}
