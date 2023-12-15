import { ConvertedScore } from '@assets/staticData/convertedScore'
import { CareGradeTestScore } from 'types/careGradeTestScore'

const useCareGradeScore = (ScoreObj: CareGradeTestScore) => {
  const { physicalPart, recognPart, behaviorPart, nursingPart, rehabPart } = ScoreObj
  const getTotalScore = (obj: object): number =>
    Object.values(obj).reduce((prevValue, currentValue) => prevValue + currentValue)

  const totalScore = {
    physicalPart: getTotalScore(physicalPart),
    recognPart: getTotalScore(recognPart),
    behaviorPart: getTotalScore(behaviorPart),
    nursingPart: getTotalScore(nursingPart),
    rehabPart: getTotalScore(rehabPart),
  }

  const convertedScore = {
    physicalPart: ConvertedScore.physicalPart[totalScore.physicalPart],
    recognPart: ConvertedScore.rehabPart[totalScore.recognPart],
    behaviorPart: ConvertedScore.behaviorPart[totalScore.behaviorPart],
    nursingPart: ConvertedScore.nursingPart[totalScore.nursingPart],
    rehabPart: ConvertedScore.rehabPart[totalScore.rehabPart],
  }

  return [totalScore, convertedScore]
}

export default useCareGradeScore
