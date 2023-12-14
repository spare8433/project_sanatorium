import { CareGradeTestScore } from 'types/CareGradeTestScore'
import useCareGradeScore from './useCareGradeScore'

const useNurseCareScore = (ScoreObj: CareGradeTestScore) => {
  const { physicalPart, behaviorPart, nursingCarePart, rehabilitationPart } = ScoreObj

  const [, convertedScore] = useCareGradeScore(ScoreObj)

  if (nursingCarePart.bedsores === 0) {
    if (convertedScore.nursingCarePart === 0) {
      if (behaviorPart.IrregularSleep === 0) {
        if (rehabilitationPart.leftUpperLimb === 1) {
          return behaviorPart.lost === 0 ? 6.7 : 8.1
        } else {
          return physicalPart.washTeeth <= 2 ? 7.4 : 11.6
        }
      } else return 9.7
    } else if (convertedScore.nursingCarePart === 19.84) {
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

export default useNurseCareScore
