import { memo } from "react";
import { Button, Modal } from "react-bootstrap";

import HospitalModalContent from "./hospitalModalContent";
import { ModalContainer } from "./modal.style";
import SanatoriumModalContent from "./sanatoriumModalContent";

interface Props {
  closeFn: () => void;
  facility: FacilityType;
  show: boolean;
  data: HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData | null;
}

const DetailInfoModal = ({ facility, closeFn, show, data }: Props) => {
  return (
    <ModalContainer show={show} onHide={closeFn} backdrop="static" keyboard={false} centered={true} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>시설 상세정보</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {facility === "hospital" && <HospitalModalContent data={data as HospitalDetailData} />}
        {facility === "sanatorium" && <SanatoriumModalContent data={data as SanatoriumDetailData} />}
        {facility === "serviceFacility" && <SanatoriumModalContent data={data as ServiceFacilityDetailData} />}
      </Modal.Body>
      <Modal.Footer>
        <div className="d-grid gap-2">
          <Button variant="outline-secondary" size="lg" onClick={closeFn}>
            닫기
          </Button>
        </div>
      </Modal.Footer>
    </ModalContainer>
  );
};

export default memo(DetailInfoModal);
