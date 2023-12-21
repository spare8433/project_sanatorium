import { CareGradeTotalScore } from 'types/careGradeTestScore'
import useCareGradeScore from './useCareGradeScore'

const useMealScore = (ScoreObj: CareGradeTotalScore) => {
  const { physicalPart, behaviorPart } = ScoreObj

  const [, convertedScore] = useCareGradeScore(ScoreObj)

  if (physicalPart.eating <= 2) {
    if (physicalPart.washTeeth <= 2) {
      if (physicalPart.washTeeth === 1) {
        return convertedScore.physicalPart <= 6.59 ? 7.1 : 9.4
      } else {
        if (physicalPart.moveAndSitting === 1) {
          return behaviorPart.leave === 0 ? 11.5 : 14.3
        } else return 15.1
      }
    } else {
      if (physicalPart.useBathRoom <= 2) {
        if (physicalPart.fecalControl === 1) {
          return 13.9
        } else {
          return convertedScore.physicalPart <= 30.77 ? 17.5 : 21.4
        }
      } else return 23.4
    }
  } else {
    return convertedScore.rehabPart <= 41.21 ? 31.7 : 37.6
  }
}

export default useMealScore
