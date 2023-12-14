import { ConvertedScore } from '@assets/staticData/convertedScore'
import { CareGradeTestScore } from 'types/CareGradeTestScore'

const useCareGradeScore = (ScoreObj: CareGradeTestScore) => {
  const { physicalPart, recognitionPart, behaviorPart, nursingCarePart, rehabilitationPart } =
    ScoreObj
  const getTotalScore = (obj: object): number =>
    Object.values(obj).reduce((prevValue, currentValue) => prevValue + currentValue)

  const totalScore = {
    physicalPart: getTotalScore(physicalPart),
    recognitionPart: getTotalScore(recognitionPart),
    behaviorPart: getTotalScore(behaviorPart),
    nursingCarePart: getTotalScore(nursingCarePart),
    rehabilitationPart: getTotalScore(rehabilitationPart),
  }

  const convertedScore = {
    physicalPart: ConvertedScore.physicalPart[totalScore.physicalPart],
    recognitionPart: ConvertedScore.rehabilitationPart[totalScore.recognitionPart],
    behaviorPart: ConvertedScore.behaviorPart[totalScore.behaviorPart],
    nursingCarePart: ConvertedScore.nursingCarePart[totalScore.nursingCarePart],
    rehabilitationPart: ConvertedScore.rehabilitationPart[totalScore.rehabilitationPart],
  }

  return [totalScore, convertedScore]
}

export default useCareGradeScore
