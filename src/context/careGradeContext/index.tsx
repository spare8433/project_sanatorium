import {
  BehaviorInitObj,
  NursingInitObj,
  PHYSICAL_INIT_STATE,
  RECOGNITION_INIT_STATE,
  RehabExerciseInitObj,
  RehabJointInitObj,
} from "@constants/careGradeInitData";
import useObjectState from "@hooks/useObjectState";
import { createContext, useState } from "react";

interface ContextType extends CareGradeResponse {
  mode: CareGradeModeType;
  updateMode: (mode: CareGradeModeType) => void;
  updatePhysicalResponse: (key: keyof PhysicalResponse, value: number) => void;
  updateRecognitionResponse: (key: keyof RecognitionResponse, value: number) => void;
  updateBehaviorResponse: (key: keyof BehaviorResponse, value: number) => void;
  updateNursingResponse: (key: keyof NursingResponse, value: number) => void;
  updateRehabExerciseResponse: (key: keyof RehabExerciseResponse, value: number) => void;
  updateRehabJointResponse: (key: keyof RehabJointResponse, value: number) => void;
}

const CareGradeContext = createContext<ContextType>({
  mode: "home",
  physicalResponse: PHYSICAL_INIT_STATE,
  recognitionResponse: RECOGNITION_INIT_STATE,
  behaviorResponse: BehaviorInitObj,
  nursingResponse: NursingInitObj,
  rehabExerciseResponse: RehabExerciseInitObj,
  rehabJointResponse: RehabJointInitObj,
  updateMode: () => {},
  updatePhysicalResponse: () => {},
  updateRecognitionResponse: () => {},
  updateBehaviorResponse: () => {},
  updateNursingResponse: () => {},
  updateRehabExerciseResponse: () => {},
  updateRehabJointResponse: () => {},
});

const CareGradeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState<CareGradeModeType>("home");
  const [physicalResponse, updatePhysicalResponse] = useObjectState<PhysicalResponse>(PHYSICAL_INIT_STATE);
  const [recognitionResponse, updateRecognitionResponse] = useObjectState<RecognitionResponse>(RECOGNITION_INIT_STATE);
  const [behaviorResponse, updateBehaviorResponse] = useObjectState(BehaviorInitObj);
  const [nursingResponse, updateNursingResponse] = useObjectState(NursingInitObj);
  const [rehabExerciseResponse, updateRehabExerciseResponse] = useObjectState(RehabExerciseInitObj);
  const [rehabJointResponse, updateRehabJointResponse] = useObjectState(RehabJointInitObj);

  const updateMode = (mode: CareGradeModeType) => setMode(mode);

  return (
    <CareGradeContext.Provider
      value={{
        mode,
        physicalResponse,
        recognitionResponse,
        behaviorResponse,
        nursingResponse,
        rehabExerciseResponse,
        rehabJointResponse,
        updateMode,
        updatePhysicalResponse,
        updateRecognitionResponse,
        updateBehaviorResponse,
        updateNursingResponse,
        updateRehabExerciseResponse,
        updateRehabJointResponse,
      }}
    >
      {children}
    </CareGradeContext.Provider>
  );
};

export { CareGradeProvider };

export default CareGradeContext;
