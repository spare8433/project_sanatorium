import { Button, Modal } from 'react-bootstrap'
import { ButtonBox, ModalContainor } from '../style'
import { ReactNode, useCallback, useContext } from 'react'
import { GradeCategory, ListContentBox } from './style'
import CareGradeContext from '@context/careGradeContext'
import { ModeType } from '@context/careGradeContext/type'
import { useNavigate } from 'react-router-dom'

const CareGradeList = () => {
  const navigate = useNavigate()
  const { states, setStates } = useContext(CareGradeContext)
  const { physicalScore, recognScore, behaviorScore, nursingScore, rehabExerciseScore, rehabJointScore } = states
  const { setMode } = setStates

  const checkProgress = useCallback((obj: Object) => {
    const arr = Object.values(obj)

    const progress = arr.indexOf(-1) + 1 || arr.length
    return `${progress}/${arr.length}`
  }, [])

  const handleScoreResult = useCallback(() => {
    if (
      Object.values(physicalScore).includes(-1) ||
      Object.values(recognScore).includes(-1) ||
      Object.values(behaviorScore).includes(-1) ||
      Object.values(nursingScore).includes(-1) ||
      Object.values(rehabExerciseScore).includes(-1) ||
      Object.values(rehabJointScore).includes(-1)
    )
      return alert('모든 설문을 마치고 진행해 주세요')

    return setMode('result')
  }, [physicalScore, recognScore, behaviorScore, nursingScore, rehabExerciseScore, rehabJointScore])

  const GradeCatoeryItem = ({ mode, children }: { mode: ModeType; children: ReactNode }) => (
    <GradeCategory onClick={() => setMode(mode)}>
      {children}
      <img src="/img/go.png" />
    </GradeCategory>
  )

  return (
    <ModalContainor show={true} keyboard={false} centered={true} size="xl" scrollable={true}>
      <Modal.Header closeButton onClick={() => confirm('현재 화면에서 나가 홈으로 돌아가시겠습니까?') && navigate('/')}>
        <span className="left"></span>
        <Modal.Title>
          <h1>평가항목 선택</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListContentBox>
          <p>* 모든 설문을 마치고 결과보기 버튼을 눌러주세요</p>
          <GradeCatoeryItem mode="physical">신체기능 영역 &nbsp;&nbsp;{checkProgress(physicalScore)}</GradeCatoeryItem>

          <GradeCatoeryItem mode="recogn">인지기능 영역 &nbsp;&nbsp;{checkProgress(recognScore)}</GradeCatoeryItem>

          <GradeCatoeryItem mode="behavior">행동변화 영역 &nbsp;&nbsp;{checkProgress(behaviorScore)}</GradeCatoeryItem>

          <GradeCatoeryItem mode="nursing">간호처치 영역 &nbsp;&nbsp;{checkProgress(nursingScore)}</GradeCatoeryItem>

          <GradeCatoeryItem mode="rehabExercise">
            재활 운동 영역 &nbsp;&nbsp;{checkProgress(rehabExerciseScore)}
          </GradeCatoeryItem>

          <GradeCatoeryItem mode="rehabJoint">
            재활 관절 영역 &nbsp;&nbsp;{checkProgress(rehabJointScore)}
          </GradeCatoeryItem>
        </ListContentBox>
      </Modal.Body>
      <Modal.Footer>
        <ButtonBox>
          <Button variant="outline-secondary" onClick={() => setMode('home')}>
            뒤로
          </Button>
          <Button className="mainButton" onClick={handleScoreResult}>
            결과보기
          </Button>
        </ButtonBox>
      </Modal.Footer>
    </ModalContainor>
  )
}

export default CareGradeList
