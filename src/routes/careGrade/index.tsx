import { useContext, useEffect } from 'react'
import CareGradeContext from '@context/careGradeContext'
import CareGradeHome from './home'
import CareGradeList from './list'
import CareGradePhysical from './physical'
import CareGradeRecogn from './recogn'
import CareGradeBehavior from './behavior'
import CareGradeNursing from './nursing'
import CareGradeRehabExercise from './rehabExercise'
import CareGradeRehabJoint from './rehabJoint'
import CareGradeResult from './result'

const CareGradePage = () => {
  const { states, resetContext } = useContext(CareGradeContext)
  const { mode } = states

  useEffect(() => {
    // 클린업 함수로 context 초기화
    return () => {
      resetContext()
    }
  }, [])

  return (
    <>
      {mode === 'home' && <CareGradeHome />}
      {mode === 'list' && <CareGradeList />}
      {mode === 'physical' && <CareGradePhysical />}
      {mode === 'recogn' && <CareGradeRecogn />}
      {mode === 'behavior' && <CareGradeBehavior />}
      {mode === 'nursing' && <CareGradeNursing />}
      {mode === 'rehabExercise' && <CareGradeRehabExercise />}
      {mode === 'rehabJoint' && <CareGradeRehabJoint />}
      {mode === 'result' && <CareGradeResult />}
    </>
  )
}

export default CareGradePage
