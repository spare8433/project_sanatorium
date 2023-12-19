import {
  PhysicalInitObj,
  BehaviorInitObj,
  NursingInitObj,
  RecognInitObj,
  RehabExerciseInitObj,
  RehabJointInitObj,
} from '@assets/staticData/careGradeInitData'
import {
  BehaviorScoreObjType,
  NursingScoreObjType,
  PhysicalScoreObjType,
  RecognScoreObjType,
  RehabExerciseScoreObjType,
  RehabJointScoreObjType,
} from 'types/careGradeTestScore'

export type ModeType =
  | 'home'
  | 'list'
  | 'physical'
  | 'recogn'
  | 'behavior'
  | 'nursing'
  | 'rehabExercise'
  | 'rehabJoint'
  | 'result'

export interface ContextType {
  states: {
    mode: ModeType
    physicalScore: PhysicalScoreObjType
    recognScore: RecognScoreObjType
    behaviorScore: BehaviorScoreObjType
    nursingScore: NursingScoreObjType
    rehabExerciseScore: RehabExerciseScoreObjType
    rehabJointScore: RehabJointScoreObjType
  }
  setStates: {
    setMode: Dispatch<SetStateAction<ModeType>>
    setPhysicalScore: Dispatch<SetStateAction<PhysicalScoreObjType>>
    setRecognScore: Dispatch<SetStateAction<RecognScoreObjType>>
    setBehaviorScore: Dispatch<SetStateAction<BehaviorScoreObjType>>
    setNursingScore: Dispatch<SetStateAction<NursingScoreObjType>>
    setRehabExerciseScore: Dispatch<SetStateAction<RehabExerciseScoreObjType>>
    setRehabJointScore: Dispatch<SetStateAction<RehabJointScoreObjType>>
  }
  updateFns: {
    updatePhysicalScore: (key: string, value: any) => void
    updateRecognScore: (key: string, value: any) => void
    updateBehaviorScore: (key: string, value: any) => void
    updateNursingScore: (key: string, value: any) => void
    updateRehabExerciseScore: (key: string, value: any) => void
    updateRehabJointScore: (key: string, value: any) => void
  }
  resetContext: () => void
}
