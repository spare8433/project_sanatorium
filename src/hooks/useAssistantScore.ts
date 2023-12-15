import { CareGradeTestScore } from 'types/careGradeTestScore'
import useCareGradeScore from './useCareGradeScore'

const useAssistantScore = (ScoreObj: CareGradeTestScore) => {
  const { physicalPart, behaviorPart, nursingPart, rehabPart } = ScoreObj

  const [, convertedScore] = useCareGradeScore(ScoreObj)

  if (convertedScore.physicalPart <= 47.64) {
    if (convertedScore.physicalPart <= 25.14) {
      return convertedScore.physicalPart <= 6.59 ? 1.2 : 2.7
    } else {
      if (physicalPart.useBathRoom === 1) {
        if (physicalPart.washTeeth <= 2) {
          return rehabPart.rightLowerLimb === 1 ? 3.6 : 6.0
        } else return 6.8
      } else {
        return behaviorPart.meaninglessBehavior === 0 ? 6.6 : 9.2
      }
    }
  } else {
    if (physicalPart.washTeeth <= 2) {
      if (physicalPart.standing <= 2) {
        return convertedScore.behaviorPart <= 28.83 ? 6.4 : 9.3
      } else return 10.9
    } else {
      return nursingPart.bedsores === 0 ? 14.0 : 18.7
    }
  }
}

export default useAssistantScore
