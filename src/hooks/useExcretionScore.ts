import { CareGradeTestScore } from 'types/CareGradeTestScore'
import useCareGradeScore from './useCareGradeScore'

const useExcretionScore = (ScoreObj: CareGradeTestScore) => {
  const { physicalPart, recognitionPart, behaviorPart, nursingCarePart, rehabilitationPart } =
    ScoreObj

  const [, convertedScore] = useCareGradeScore(ScoreObj)

  if (physicalPart.changeBodyPosition === 1) {
    if (physicalPart.urineControl === 1) {
      if (physicalPart.cloth <= 1) {
        if (convertedScore.physicalPart === 0) {
          if (recognitionPart.decisionDecline === 0) {
            return convertedScore.behaviorPart <= 15.58 ? 0.3 : 0.7
          } else {
            return 1.2
          }
        } else {
          if (rehabilitationPart.kneeJoint <= 1) {
            return 1.0
          } else {
            return recognitionPart.dateRecognition === 0 ? 1.2 : 2.5
          }
        }
      } else {
        return 2.6
      }
    } else if (physicalPart.urineControl === 2) {
      if (physicalPart.moveAndSitting === 1) {
        return physicalPart.useBathRoom === 1 ? 2.9 : 5.0
      } else {
        return 8.3
      }
    } else if (physicalPart.urineControl === 3) {
      if (behaviorPart.leave === 0) {
        return physicalPart.washFace === 1 ? 5.3 : 10.2
      } else {
        return 15.0
      }
    }
  } else {
    if (physicalPart.eating === 1) {
      return 6.8
    } else {
      if (nursingCarePart.bedsores === 0) {
        return physicalPart.fecalControl <= 2 ? 8.8 : 12.5
      } else {
        return behaviorPart.sadFeeling === 0 ? 12.8 : 18.7
      }
    }
  }
}

export default useExcretionScore
