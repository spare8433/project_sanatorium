import { NursingAnswerList, NursingQuestions } from '@assets/staticData/careGradeQuestions'
import CareGradeContext from '@context/careGradeContext'
import useInput from '@hooks/useInput'
import {
  AnswerRadioItem,
  AnwserList,
  ButtonBox,
  ModalContainor,
  ProgressLine,
  QuestionBox,
} from '@routes/careGrade/style'
import { useCallback, useContext, useMemo, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

const CareGradeNursing = () => {
  const { states, setStates, updateFns } = useContext(CareGradeContext)
  const { nursingScore } = states
  const { setMode } = setStates
  const { updateNursingScore } = updateFns

  const scoreValueArr = useMemo(() => Object.values(nursingScore), [nursingScore])
  const scoreKeyArr = useMemo(() => Object.keys(nursingScore), [nursingScore])

  const [current, setCurrent] = useState(scoreValueArr.indexOf(-1) + 1 || scoreValueArr.length)
  const [answerScore, changeAnswerScore, setAnswerScore] = useInput(scoreValueArr[current - 1])

  /** 다음 버튼 클릭 이벤트 함수 */
  const handleNextQuestion = useCallback(() => {
    // 최대면 리스트로 넘어가거나 다음 항목으로 넘어감
    if (current >= scoreValueArr.length) {
      if (confirm('재활 운동 항목으로 넘어가시겠습니까? 취소시 평가항목 선택 화면으로 돌아갑니다.'))
        setMode('rehabExercise')
      else {
        setMode('list')
      }
    } else {
      updateNursingScore(scoreKeyArr[current - 1], answerScore)
      setCurrent((prev) => prev + 1)
      setAnswerScore(scoreValueArr[current])
    }
  }, [current, scoreValueArr, scoreKeyArr, answerScore])

  /** 이전 버튼 클릭 이벤트 함수 */
  const handlePrevQuestion = useCallback(() => {
    // 최저면 리스트 화면
    if (current <= 1) {
      if (confirm('평가항목 선택 화면으로 돌아가시겠습니까?')) {
        setMode('list')
      }
    } else {
      setCurrent((prev) => prev - 1)
      setAnswerScore(scoreValueArr[current - 2])
    }
  }, [current, scoreValueArr])

  const AnswerItems = () => {
    return NursingAnswerList.map(({ answer, score }, key) => (
      <AnswerRadioItem className={answerScore == score ? 'checked' : ''} key={`${answer}_${key}`}>
        <label>
          <input type="radio" value={score} name="radioGroup" onChange={changeAnswerScore} />
          {answer}
        </label>
      </AnswerRadioItem>
    ))
  }

  return (
    <ModalContainor show={true} keyboard={false} centered={true} size="xl" scrollable={true}>
      <Modal.Header closeButton>
        <span className="left"></span>
        <Modal.Title>
          <h1>간호처치 영역 테스트</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QuestionBox>
          <ProgressLine>{`${current}/${scoreValueArr.length}`}</ProgressLine>
          <h2>{NursingQuestions[current - 1].question}</h2>
          <AnwserList>
            <AnswerItems />
          </AnwserList>
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
    </ModalContainor>
  )
}

export default CareGradeNursing
