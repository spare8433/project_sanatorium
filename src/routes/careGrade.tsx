import BehaviorTest from "@components/careGradeTestContents/behaviorTest";
import CareGradeTestList from "@components/careGradeTestContents/list";
import NursingTest from "@components/careGradeTestContents/nursingTest";
import PhysicalTest from "@components/careGradeTestContents/physicalTest";
import RecognitionTest from "@components/careGradeTestContents/recognitionTest";
import RehabExerciseTest from "@components/careGradeTestContents/rehabExerciseTest";
import RehabJointTest from "@components/careGradeTestContents/rehabJointTest";
import CareGradeResult from "@components/careGradeTestContents/result";
import CareGradeTestStart from "@components/careGradeTestContents/start";
import CareGradeContext from "@context/careGradeContext";
import { useContext } from "react";

const CareGradePage = () => {
  const { mode } = useContext(CareGradeContext);

  return (
    <>
      {mode === "home" && <CareGradeTestStart />}
      {mode === "list" && <CareGradeTestList />}
      {mode === "physical" && <PhysicalTest />}
      {mode === "recognition" && <RecognitionTest />}
      {mode === "behavior" && <BehaviorTest />}
      {mode === "nursing" && <NursingTest />}
      {mode === "rehabExercise" && <RehabExerciseTest />}
      {mode === "rehabJoint" && <RehabJointTest />}
      {mode === "result" && <CareGradeResult />}
    </>
  );
};

export default CareGradePage;
