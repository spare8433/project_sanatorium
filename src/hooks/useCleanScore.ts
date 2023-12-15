import { CareGradeTestScore } from 'types/careGradeTestScore'
import useCareGradeScore from './useCareGradeScore'

const useCleanScore = (ScoreObj: CareGradeTestScore) => {
  const { physicalPart, recognPart } = ScoreObj

  const [, convertedScore] = useCareGradeScore(ScoreObj)

  if (convertedScore.physicalPart <= 34.15) {
    if (convertedScore.physicalPart <= 17.72) {
      if (convertedScore.physicalPart <= 9.86) {
        return convertedScore.physicalPart <= 6.59 ? 1.2 : 3.0
      } else {
        return convertedScore.physicalPart <= 39.21 ? 2.9 : 4.1
      }
    } else {
      return recognPart.ageBirthRecognition === 0 ? 9.0 : 13.0
    }
  } else {
    if (physicalPart.washTeeth <= 2) {
      if (physicalPart.useBathRoom === 1) return 8.6
      else {
        return recognPart.dateRecognition === 0 ? 9.0 : 13.0
      }
    } else {
      if (physicalPart.useBathRoom === 1) return 11.6
      else {
        if (convertedScore.rehabPart <= 40.16) {
          convertedScore.behaviorPart <= 60.34 ? 15.4 : 19.6
        } else {
          return 17.2
        }
      }
    }
  }
}

export default useCleanScore
