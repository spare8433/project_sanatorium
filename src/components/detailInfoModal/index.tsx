import { Modal, Button } from 'react-bootstrap'
import HospitalModalContent from './hospitalModalContent'
import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import SanatoriumModalContent from './sanatoriumModalContent'
import styled from 'styled-components'

export const ModalContainor = styled(Modal)`
  .modal-content {
    border-radius: 1rem;
  }
  .modal-header {
    background-color: #e7886e;
    color: #fff;
    font-size: 1.8rem;
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px);
  }
  .modal-body {
    font-size: 1.8rem;
    padding: 2rem 3rem;
  }
  .col,
  .col-lg-9 {
    padding-bottom: calc(var(--bs-gutter-x) * 0.5);
    padding-top: calc(var(--bs-gutter-x) * 0.5);
    border: 1px solid #dee2e6;
  }
  .col_th {
    font-weight: 600;
  }
  .btn-outline-secondary {
    width: 100%;
    margin: 2rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`

interface Props {
  closeFn: () => void
  facCtg: string
  show: boolean
  data: HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData | null
}

const DetailInfoModal = ({ closeFn, show, facCtg, data }: Props) => {
  const renderModalContent = () => {
    switch (facCtg) {
      case '요양병원':
        return <HospitalModalContent data={data as HospitalDetailData} />
      case '요양시설':
        return <SanatoriumModalContent data={data as SanatoriumDetailData} />
      case '재가노인복지시설':
        return <SanatoriumModalContent data={data as WelfareServiceDetailData} />
    }
  }

  return (
    <ModalContainor
      show={show}
      onHide={closeFn}
      backdrop="static"
      keyboard={false}
      centered={true}
      size="lg"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>시설 상세정보</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderModalContent()}</Modal.Body>
      <Modal.Footer>
        <div className="d-grid gap-2">
          <Button variant="outline-secondary" size="lg" onClick={closeFn}>
            닫기
          </Button>
        </div>
      </Modal.Footer>
    </ModalContainor>
  )
}

export default DetailInfoModal
