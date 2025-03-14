import CareGradeContext from "@context/careGradeContext";
import { getCareGradeFinalScore } from "@lib/careGradeScore";
import { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import { Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ButtonBox, ContentBox, ModalContainer } from "./style";

const CareGradeResult = () => {
  const navigate = useNavigate();
  const { physicalResponse, recognitionResponse, rehabExerciseResponse, rehabJointResponse, updateMode } =
    useContext(CareGradeContext);

  const [finalScore, grade] = getCareGradeFinalScore({
    physicalResponse,
    recognitionResponse,
    rehabExerciseResponse,
    rehabJointResponse,
  });

  return (
    <ModalContainer show={true} keyboard={false} centered={true} size="xl" scrollable={true}>
      <Modal.Header closeButton onClick={() => confirm("현재 화면에서 나가 홈으로 돌아가시겠습니까?") && navigate("/")}>
        <Modal.Title>
          <h1>테스트 결과</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ResultContentBox>
          <h2>최종 점수 및 등급</h2>
          <ScoreBox>
            <GradeLine>등급: {grade}</GradeLine>
            <ScoreLine>점수: {finalScore}</ScoreLine>
          </ScoreBox>

          <span>주의사항: 이 테스트는 실제 등급과는 일치하지 않을 수 있으므로 참고만 하시길 추천드립니다.</span>

          <a
            href="https://www.longtermcare.or.kr/npbs/e/b/201/npeb201m01.web?menuId=npe0000000080&zoomSize="
            target="_blank"
          >
            국민건강보험 등급판정 기준 및 절차 ↵
          </a>

          <GradeCriteriaTable bordered>
            <thead>
              <tr>
                <th scope="col">장기요양 등급</th>
                <th scope="col">심신의 기능상태</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1등급</td>
                <td>
                  일상생활에서 <b>전적으로</b> 다른 사람의 도움이 필요한 사람이며 장기요양인정 점수가 <b>95점 이상 </b>
                  입니다.
                </td>
              </tr>
              <tr>
                <td>2등급</td>
                <td>
                  일상생활에서 <b>상당 부분</b> 다른 사람의 도움이 필요한 사람이며 장기요양인정 점수가
                  <b> 75점 이상 95점</b> 미만 입니다.
                </td>
              </tr>
              <tr>
                <td>3등급</td>
                <td>
                  일상생활에서 <b>부분적으로</b> 다른 사람의 도움이 필요한 사람이며 장기요양인정 점수가
                  <b> 60점 이상 75점</b> 미만 입니다.
                </td>
              </tr>
              <tr>
                <td>4등급</td>
                <td>
                  일상생활에서 <b>일정 부분</b> 다른 사람의 도움이 필요한 사람이며 장기요양인정 점수가
                  <b> 51점 이상 60점</b> 미만 입니다.
                </td>
              </tr>
              <tr>
                <td>5등급</td>
                <td>
                  <b>치매환자</b>이면서 장기요양인정 점수가 <b>45점 이상 51점</b>미만 입니다.
                </td>
              </tr>
              <tr>
                <td>인지지원등급</td>
                <td>
                  <b>치매환자</b>이면서 장기요양인정 점수가 <b>45점 이상 51점</b>미만 입니다.
                </td>
              </tr>
            </tbody>
          </GradeCriteriaTable>
        </ResultContentBox>
      </Modal.Body>
      <Modal.Footer>
        <ButtonBox>
          <Button variant="outline-secondary" onClick={() => navigate("/")}>
            나가기
          </Button>
          <Button className="mainButton" onClick={() => updateMode("list")}>
            선택 화면으로
          </Button>
        </ButtonBox>
      </Modal.Footer>
    </ModalContainer>
  );
};

export default CareGradeResult;

const ResultContentBox = styled(ContentBox)`
  text-align: center;

  h2 {
    margin-bottom: 3rem;
  }

  a {
    display: block;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.main};
    font-weight: 600;
    margin-bottom: 3rem;
  }

  span {
    width: 100%;
    display: block;
    font-size: 1.4rem;
    color: gray;
    font-weight: 600;
    margin-bottom: 4rem;
  }
`;

const ScoreBox = styled.div`
  min-width: 80%;
  padding: 3rem 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors["background-muted"]};
  margin-bottom: 3rem;
`;

const ResultLine = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
`;
const GradeLine = styled(ResultLine)`
  margin-bottom: 2rem;
`;

const ScoreLine = styled(ResultLine)``;

const GradeCriteriaTable = styled(Table)`
  font-size: 1.4rem;

  th:nth-child(1) {
    width: 20%;
  }

  td {
    vertical-align: middle;
  }
`;
