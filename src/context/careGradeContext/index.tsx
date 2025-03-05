import useObjectState from "@hooks/useObjectState";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import {
  PHYSICAL_INIT_STATE,
  BehaviorInitObj,
  NursingInitObj,
  RECOGNITION_INIT_STATE,
  RehabExerciseInitObj,
  RehabJointInitObj,
} from "@constants/careGradeInitData";

interface ContextType {
  states: {
    mode: CareGradeModeType;
    physicalScore: PhysicalScoreObjType;
    recognitionScore: RecognitionScoreObjType;
    behaviorScore: BehaviorScoreObjType;
    nursingScore: NursingScoreObjType;
    rehabExerciseScore: RehabExerciseScoreObjType;
    rehabJointScore: RehabJointScoreObjType;
  };
  setStates: {
    setMode: Dispatch<SetStateAction<CareGradeModeType>>;
    setPhysicalScore: Dispatch<SetStateAction<PhysicalScoreObjType>>;
    setRecognitionScore: Dispatch<SetStateAction<RecognitionScoreObjType>>;
    setBehaviorScore: Dispatch<SetStateAction<BehaviorScoreObjType>>;
    setNursingScore: Dispatch<SetStateAction<NursingScoreObjType>>;
    setRehabExerciseScore: Dispatch<SetStateAction<RehabExerciseScoreObjType>>;
    setRehabJointScore: Dispatch<SetStateAction<RehabJointScoreObjType>>;
  };
  updateFns: {
    updatePhysicalScore: (key: string, value: any) => void;
    updateRecognitionScore: (key: string, value: any) => void;
    updateBehaviorScore: (key: string, value: any) => void;
    updateNursingScore: (key: string, value: any) => void;
    updateRehabExerciseScore: (key: string, value: any) => void;
    updateRehabJointScore: (key: string, value: any) => void;
  };
  resetContext: () => void;
}

const CareGradeContext = createContext<ContextType>({
  states: {
    mode: "home",
    physicalScore: PHYSICAL_INIT_STATE,
    recognitionScore: RECOGNITION_INIT_STATE,
    behaviorScore: BehaviorInitObj,
    nursingScore: NursingInitObj,
    rehabExerciseScore: RehabExerciseInitObj,
    rehabJointScore: RehabJointInitObj,
  },
  setStates: {
    setMode: () => {},
    setPhysicalScore: () => {},
    setRecognitionScore: () => {},
    setBehaviorScore: () => {},
    setNursingScore: () => {},
    setRehabJointScore: () => {},
    setRehabExerciseScore: () => {},
  },
  updateFns: {
    updatePhysicalScore: () => {},
    updateRecognitionScore: () => {},
    updateBehaviorScore: () => {},
    updateNursingScore: () => {},
    updateRehabExerciseScore: () => {},
    updateRehabJointScore: () => {},
  },
  resetContext: () => {},
});

const CareGradeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<CareGradeModeType>("home");
  const [physicalScore, setPhysicalScore, updatePhysicalScore] = useObjectState(PHYSICAL_INIT_STATE);
  const [recognitionScore, setRecognitionScore, updateRecognitionScore] = useObjectState(RECOGNITION_INIT_STATE);
  const [behaviorScore, setBehaviorScore, updateBehaviorScore] = useObjectState(BehaviorInitObj);
  const [nursingScore, setNursingScore, updateNursingScore] = useObjectState(NursingInitObj);
  const [rehabExerciseScore, setRehabExerciseScore, updateRehabExerciseScore] = useObjectState(RehabExerciseInitObj);
  const [rehabJointScore, setRehabJointScore, updateRehabJointScore] = useObjectState(RehabJointInitObj);

  const states = {
    mode,
    physicalScore,
    recognitionScore,
    behaviorScore,
    nursingScore,
    rehabExerciseScore,
    rehabJointScore,
  };

  const setStates = {
    setMode,
    setPhysicalScore,
    setRecognitionScore,
    setBehaviorScore,
    setNursingScore,
    setRehabExerciseScore,
    setRehabJointScore,
  };

  const updateFns = {
    updatePhysicalScore,
    updateRecognitionScore,
    updateBehaviorScore,
    updateNursingScore,
    updateRehabExerciseScore,
    updateRehabJointScore,
  };

  const resetContext = () => {
    setMode("home");
    setPhysicalScore(PHYSICAL_INIT_STATE);
    setRecognitionScore(RECOGNITION_INIT_STATE);
    setBehaviorScore(BehaviorInitObj);
    setNursingScore(NursingInitObj);
    setRehabExerciseScore(RehabExerciseInitObj);
    setRehabJointScore(RehabJointInitObj);
  };

  return (
    <CareGradeContext.Provider value={{ states, setStates, updateFns, resetContext }}>
      {children}
    </CareGradeContext.Provider>
  );
};

export { CareGradeProvider };

export default CareGradeContext;
