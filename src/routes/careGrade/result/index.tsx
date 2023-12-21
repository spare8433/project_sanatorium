import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ButtonBox, ModalContainor } from '../style'
import { useContext } from 'react'
import CareGradeContext from '@context/careGradeContext'
import useCareGradeFinalScore from '@hooks/careGrade/useCareGradeFinalScore'
import { GradeCriteriaTable, GradeLine, ResultContentBox, ScoreBox, ScoreLine } from './style'

const CareGradeResult = () => {
  const navigate = useNavigate()
  const { states, setStates } = useContext(CareGradeContext)
  const { nursingScore, physicalScore, recognScore, behaviorScore, rehabExerciseScore, rehabJointScore } = states
  const { setMode } = setStates

  const [finalScore, grade] = useCareGradeFinalScore({
    physicalPart: physicalScore,
    recognPart: recognScore,
    behaviorPart: behaviorScore,
    nursingPart: nursingScore,
    rehabExercisePart: rehabExerciseScore,
    rehabJointPart: rehabJointScore,
  })

  return (
    <ModalContainor show={true} keyboard={false} centered={true} size="xl" scrollable={true}>
      <Modal.Header closeButton>
        <span className="left"></span>
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
          <Button variant="outline-secondary" onClick={() => navigate('/')}>
            나가기
          </Button>
          <Button className="mainButton" onClick={() => setMode('list')}>
            선택 화면으로
          </Button>
        </ButtonBox>
      </Modal.Footer>
    </ModalContainor>
  )
}

export default CareGradeResult
