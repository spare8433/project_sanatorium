import useObjectState from '@hooks/useObjectState'
import { createContext, useState } from 'react'
import {
  PhysicalInitObj,
  BehaviorInitObj,
  NursingInitObj,
  RecognInitObj,
  RehabExerciseInitObj,
  RehabJointInitObj,
} from '@assets/staticData/careGradeInitData'
import { ContextType, ModeType } from './type'

const CareGradeContext = createContext<ContextType>({
  states: {
    mode: 'home',
    physicalScore: PhysicalInitObj,
    recognScore: RecognInitObj,
    behaviorScore: BehaviorInitObj,
    nursingScore: NursingInitObj,
    rehabExerciseScore: RehabExerciseInitObj,
    rehabJointScore: RehabJointInitObj,
  },
  setStates: {
    setMode: () => {},
    setPhysicalScore: () => {},
    setRecognScore: () => {},
    setBehaviorScore: () => {},
    setNursingScore: () => {},
    setRehabJointScore: () => {},
    setRehabExerciseScore: () => {},
  },
  updateFns: {
    updatePhysicalScore: () => {},
    updateRecognScore: () => {},
    updateBehaviorScore: () => {},
    updateNursingScore: () => {},
    updateRehabExerciseScore: () => {},
    updateRehabJointScore: () => {},
  },
  resetContext: () => {},
})

const CareGradeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<ModeType>('home')
  const [physicalScore, setPhysicalScore, updatePhysicalScore] = useObjectState(PhysicalInitObj)
  const [recognScore, setRecognScore, updateRecognScore] = useObjectState(RecognInitObj)
  const [behaviorScore, setBehaviorScore, updateBehaviorScore] = useObjectState(BehaviorInitObj)
  const [nursingScore, setNursingScore, updateNursingScore] = useObjectState(NursingInitObj)
  const [rehabExerciseScore, setRehabExerciseScore, updateRehabExerciseScore] =
    useObjectState(RehabExerciseInitObj)
  const [rehabJointScore, setRehabJointScore, updateRehabJointScore] =
    useObjectState(RehabJointInitObj)

  const states = {
    mode,
    physicalScore,
    recognScore,
    behaviorScore,
    nursingScore,
    rehabExerciseScore,
    rehabJointScore,
  }

  const setStates = {
    setMode,
    setPhysicalScore,
    setRecognScore,
    setBehaviorScore,
    setNursingScore,
    setRehabExerciseScore,
    setRehabJointScore,
  }

  const updateFns = {
    updatePhysicalScore,
    updateRecognScore,
    updateBehaviorScore,
    updateNursingScore,
    updateRehabExerciseScore,
    updateRehabJointScore,
  }

  const resetContext = () => {
    setMode('home')
    setPhysicalScore(PhysicalInitObj)
    setRecognScore(RecognInitObj)
    setBehaviorScore(BehaviorInitObj)
    setNursingScore(NursingInitObj)
    setRehabExerciseScore(RehabExerciseInitObj)
    setRehabJointScore(RehabJointInitObj)
  }

  return (
    <CareGradeContext.Provider value={{ states, setStates, updateFns, resetContext }}>
      {children}
    </CareGradeContext.Provider>
  )
}

export { CareGradeProvider }

export default CareGradeContext
