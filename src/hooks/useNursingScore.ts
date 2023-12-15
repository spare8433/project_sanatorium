import { CareGradeTestScore } from 'types/careGradeTestScore'
import useCareGradeScore from './useCareGradeScore'

const useNursingScore = (ScoreObj: CareGradeTestScore) => {
  const { physicalPart, behaviorPart, nursingPart, rehabPart } = ScoreObj

  const [, convertedScore] = useCareGradeScore(ScoreObj)

  if (nursingPart.bedsores === 0) {
    if (convertedScore.nursingPart === 0) {
      if (behaviorPart.IrregularSleep === 0) {
        if (rehabPart.leftUpperLimb === 1) {
          return behaviorPart.lost === 0 ? 6.7 : 8.1
        } else {
          return physicalPart.washTeeth <= 2 ? 7.4 : 11.6
        }
      } else return 9.7
    } else if (convertedScore.nursingPart === 19.84) {
      return 9.6
    } else {
      return 14.6
    }
  } else {
    if (physicalPart.eating <= 2) {
      return physicalPart.washTeeth <= 2 ? 9.6 : 14.7
    } else return 22.5
  }
}

export default useNursingScore
