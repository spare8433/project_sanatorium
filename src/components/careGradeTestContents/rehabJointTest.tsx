import {
  AnswerList,
  AnswerRadioItem,
  ButtonBox,
  ModalContainer,
  ProgressLine,
  QuestionBox,
} from "@components/careGradeTestContents/style";
import { REHAB_JOINT_ANSWERS, REHAB_JOINT_QUESTIONS } from "@constants/careGradeQuestions";
import CareGradeContext from "@context/careGradeContext";
import { useCallback, useContext, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const RehabJointTest = () => {
  const navigate = useNavigate();
  const { rehabJointResponse, updateMode, updateRehabJointResponse } = useContext(CareGradeContext);
  const [current, setCurrent] = useState(0);
  const [answerScore, setAnswerScore] = useState(-1);

  const scoreKeyArr = REHAB_JOINT_QUESTIONS.map(({ category }) => category);

  /** 다음 버튼 클릭 이벤트 함수 */
  const handleNextQuestion = useCallback(() => {
    if (current >= scoreKeyArr.length - 1)
      return confirm("신체기능 영역 테스트를 완료하여 목록으로 돌아갑니다.") && updateMode("list");

    setCurrent((prev) => prev + 1);
    setAnswerScore(rehabJointResponse[scoreKeyArr[current + 1]]);
  }, [current, scoreKeyArr, updateMode, rehabJointResponse]);

  /** 이전 버튼 클릭 이벤트 함수 */
  const handlePrevQuestion = useCallback(() => {
    if (current <= 0) return confirm("평가항목 선택 화면으로 돌아가시겠습니까?") && updateMode("list");

    setCurrent((prev) => prev - 1);
    setAnswerScore(rehabJointResponse[scoreKeyArr[current - 1]]);
  }, [current, rehabJointResponse, scoreKeyArr, setAnswerScore, updateMode]);

  const AnswerItems = () => {
    return REHAB_JOINT_ANSWERS.map(({ answer, score }, key) => (
      <AnswerRadioItem className={answerScore == score ? "checked" : ""} key={`${answer}_${key}`}>
        <label>
          <input
            type="radio"
            checked={answerScore === score}
            name="responseGroup"
            onChange={() => {
              setAnswerScore(score);
              updateRehabJointResponse(scoreKeyArr[current], score);
            }}
          />
          {answer}
        </label>
      </AnswerRadioItem>
    ));
  };

  return (
    <ModalContainer show={true} keyboard={false} centered={true} size="xl" scrollable={true}>
      <Modal.Header closeButton onClick={() => confirm("현재 화면에서 나가 홈으로 돌아가시겠습니까?") && navigate("/")}>
        <span className="left" />
        <Modal.Title>
          <h1>재활 관절 영역 테스트</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuestionBox>
          <ProgressLine>{`${current + 1}/${scoreKeyArr.length}`}</ProgressLine>
          <h2>{REHAB_JOINT_QUESTIONS[current].question}</h2>
          <AnswerList>
            <AnswerItems />
          </AnswerList>
        </QuestionBox>
      </Modal.Body>
      <Modal.Footer>
        <ButtonBox>
          <Button variant="outline-secondary" onClick={handlePrevQuestion}>
            이전
          </Button>
          <Button className="mainButton" onClick={handleNextQuestion}>
            다음
          </Button>
        </ButtonBox>
      </Modal.Footer>
    </ModalContainer>
  );
};

export default RehabJointTest;
