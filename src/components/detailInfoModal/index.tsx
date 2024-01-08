import { Modal, Button } from 'react-bootstrap'
import HospitalModalContent from './hospitalModalContent'
import { HospitalDetailData, SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import SanatoriumModalContent from './sanatoriumModalContent'
import { memo } from 'react'
import { ModalContainor } from './modal.style'

interface Props {
  closeFn: () => void
  queryFacCtg: string | null
  show: boolean
  data: HospitalDetailData | SanatoriumDetailData | WelfareServiceDetailData | null
}

const DetailInfoModal = ({ closeFn, show, data, queryFacCtg }: Props) => {
  const renderModalContent = () => {
    switch (queryFacCtg) {
      case '요양병원':
        return <HospitalModalContent data={data as HospitalDetailData} />
      case '요양시설':
        return <SanatoriumModalContent data={data as SanatoriumDetailData} />
      case '재가노인복지시설':
        return <SanatoriumModalContent data={data as WelfareServiceDetailData} />
      default:
        return <>데이터가 없습니다</>
    }
  }

  return (
    <ModalContainor show={show} onHide={closeFn} backdrop="static" keyboard={false} centered={true} size="lg">
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

export default memo(DetailInfoModal)
