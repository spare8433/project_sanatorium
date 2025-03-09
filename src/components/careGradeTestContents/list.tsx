import CareGradeContext from "@context/careGradeContext";
import { ReactNode, useCallback, useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ButtonBox, ContentBox, ModalContainer } from "./style";

const CareGradeTestList = () => {
  const navigate = useNavigate();
  const {
    physicalResponse,
    recognitionResponse,
    behaviorResponse,
    nursingResponse,
    rehabExerciseResponse,
    rehabJointResponse,
    updateMode,
  } = useContext(CareGradeContext);

  const checkProgress = useCallback((obj: object) => {
    const arr = Object.values(obj);
    const progress = arr.indexOf(-1) + 1 || arr.length;
    return `${progress}/${arr.length}`;
  }, []);

  const handleResponseResult = useCallback(() => {
    if (
      Object.values(physicalResponse).includes(-1) ||
      Object.values(recognitionResponse).includes(-1) ||
      Object.values(behaviorResponse).includes(-1) ||
      Object.values(nursingResponse).includes(-1) ||
      Object.values(rehabExerciseResponse).includes(-1) ||
      Object.values(rehabJointResponse).includes(-1)
    )
      return alert("모든 설문을 마치고 진행해 주세요");

    return updateMode("result");
  }, [
    physicalResponse,
    recognitionResponse,
    behaviorResponse,
    nursingResponse,
    rehabExerciseResponse,
    rehabJointResponse,
    updateMode,
  ]);

  const GradeCategoryItem = ({ mode, children }: { mode: CareGradeModeType; children: ReactNode }) => (
    <GradeCategory onClick={() => updateMode(mode)}>
      {children}
      <img src="/img/go.png" alt="go" />
    </GradeCategory>
  );

  return (
    <ModalContainer show={true} keyboard={false} centered={true} size="xl" scrollable={true}>
      <Modal.Header closeButton onClick={() => confirm("현재 화면에서 나가 홈으로 돌아가시겠습니까?") && navigate("/")}>
        <Modal.Title>
          <h1>평가항목 선택</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListContentBox>
          <p>* 모든 설문을 마치고 결과보기 버튼을 눌러주세요</p>
          <GradeCategoryItem mode="physical">
            신체기능 영역 &nbsp;&nbsp;{checkProgress(physicalResponse)}
          </GradeCategoryItem>

          <GradeCategoryItem mode="recognition">
            인지기능 영역 &nbsp;&nbsp;{checkProgress(recognitionResponse)}
          </GradeCategoryItem>

          <GradeCategoryItem mode="behavior">
            행동변화 영역 &nbsp;&nbsp;{checkProgress(behaviorResponse)}
          </GradeCategoryItem>

          <GradeCategoryItem mode="nursing">
            간호처치 영역 &nbsp;&nbsp;{checkProgress(nursingResponse)}
          </GradeCategoryItem>

          <GradeCategoryItem mode="rehabExercise">
            재활 운동 영역 &nbsp;&nbsp;{checkProgress(rehabExerciseResponse)}
          </GradeCategoryItem>

          <GradeCategoryItem mode="rehabJoint">
            재활 관절 영역 &nbsp;&nbsp;{checkProgress(rehabJointResponse)}
          </GradeCategoryItem>
        </ListContentBox>
      </Modal.Body>
      <Modal.Footer>
        <ButtonBox>
          <Button variant="outline-secondary" onClick={() => updateMode("home")}>
            뒤로
          </Button>
          <Button className="mainButton" onClick={handleResponseResult}>
            결과보기
          </Button>
        </ButtonBox>
      </Modal.Footer>
    </ModalContainer>
  );
};

export default CareGradeTestList;

const ListContentBox = styled(ContentBox)`
  p {
    font-size: 1.6rem !important;
    margin-bottom: 2rem;
  }
`;

const GradeCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 2.8rem 3.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors["background-muted"]};
  margin-bottom: 2.2rem;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`;
