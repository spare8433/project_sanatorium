import { Button, Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { ButtonBox, ModalContainor } from '../style'
import { useContext } from 'react'
import CareGradeContext from '@context/careGradeContext'
import { HomeContentBox } from './style'

const CareGradeHome = () => {
  const navigate = useNavigate()
  const { setStates } = useContext(CareGradeContext)
  const { setMode } = setStates

  return (
    <ModalContainor show={true} keyboard={false} centered={true} size="xl" scrollable={true}>
      <Modal.Header closeButton>
        <span className="left"></span>
        <Modal.Title>
          <h1>장기요양등급 테스트</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <HomeContentBox>
          <h2>테스트 들어가기 앞서</h2>
          <p>
            이 장기요양등급 테스트는 정부에서 고시한 장기요양등급판정기준에 관한 고시자료를 근거로 제작했습니다.
            <br />
            <br />
            다만 실제 평가 과정에서는 여러 판단 근거들을 토대로 점수를 산정하고 어르신의 증세가 본인이 느끼거나 보호자가
            알고 있는 것과 다를 수 있기 때문에 실제 등급과는 일치하지 않을 수 있습니다. 따라서{' '}
            <b>참고용으로만 활용 하시기를 추천드립니다.</b>
          </p>
          <br />
          <h3>등급판정 기준</h3>
          <p>
            등급판정 기준 등급판정은 "건강이 매우 안좋다", "큰 병에 걸렸다." 등과 같은 주관적인 개념이 아닌 "심신의
            기능상태에 따라 일상생활에서 도움(장기요양)이 얼마나 필요한가?"를 지표화한 장기요양인정점수를 기준으로
            합니다. 장기요양인정 점수를 기준으로 1 ~ 5 등급으로 등급판정을 합니다.
          </p>
          <br />
          <h3>참고</h3>
          <a href="https://www.nhis.or.kr/lm/lmxsrv/law/lawFullContent.do?SEQ=104&SEQ_HISTORY=">
            장기요양등급판정기준 참고
          </a>
          <br />
        </HomeContentBox>
      </Modal.Body>
      <Modal.Footer>
        <ButtonBox>
          <Button variant="outline-secondary" onClick={() => navigate('/')}>
            나가기
          </Button>

          <Button className="mainButton" onClick={() => setMode('list')}>
            시작하기
          </Button>
        </ButtonBox>
      </Modal.Footer>
    </ModalContainor>
  )
}

export default CareGradeHome
