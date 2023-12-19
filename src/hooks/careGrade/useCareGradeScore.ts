import { ConvertedScore } from '@assets/staticData/convertedScore'
import { CareGradeTotalScore } from 'types/careGradeTestScore'

const useCareGradeScore = (ScoreObj: CareGradeTotalScore) => {
  const { physicalPart, recognPart, behaviorPart, nursingPart, rehabExercisePart, rehabJointPart } =
    ScoreObj
  const getTotalScore = (obj: object): number =>
    Object.values(obj).reduce((prevValue, currentValue) => prevValue + currentValue)

  const totalScore = {
    physicalPart: getTotalScore(physicalPart),
    recognPart: getTotalScore(recognPart),
    behaviorPart: getTotalScore(behaviorPart),
    nursingPart: getTotalScore(nursingPart),
    rehabPart: getTotalScore(rehabExercisePart) + getTotalScore(rehabJointPart),
  }

  const convertedScore = {
    physicalPart: ConvertedScore.physicalPart[totalScore.physicalPart],
    recognPart: ConvertedScore.recognPart[totalScore.recognPart],
    behaviorPart: ConvertedScore.behaviorPart[totalScore.behaviorPart],
    nursingPart: ConvertedScore.nursingPart[totalScore.nursingPart],
    rehabPart: ConvertedScore.rehabPart[totalScore.rehabPart],
  }

  return [totalScore, convertedScore]
}

export default useCareGradeScore
