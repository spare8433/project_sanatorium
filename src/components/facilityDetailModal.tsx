import KakaoMap from "@components/kakaoMap";
import { memo } from "react";
import { Button, Modal } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

interface Props {
  closeFn: () => void;
  facility: FacilityType;
  show: boolean;
  data: HospitalDetailData | SanatoriumDetailData | ServiceFacilityDetailData | null;
}

const FacilityDetailModal = ({ facility, closeFn, show, data }: Props) => {
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

export default memo(FacilityDetailModal);

const HospitalModalContent = ({ data }: { data: HospitalDetailData }) => {
  return (
    <Container className="search_modal">
      <Row>
        <Col className="col_th">시설명</Col>
        <Col lg={9}>
          <h4>{data.INST_NM}</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col_th">시설종류</Col>
        <Col lg={9}>{data.DIV_NM}</Col>
      </Row>
      <Row>
        <Col className="col_th">평가등급</Col>
        <Col lg={9}>{data.GRAD}</Col>
      </Row>
      <Row>
        <Col className="col_th">도로명주소</Col>
        <Col lg={9}>{data.REFINE_ROADNM_ADDR}</Col>
      </Row>
      <Row>
        <Col className="col_th">지번주소</Col>
        <Col lg={9}>{data.REFINE_LOTNO_ADDR}</Col>
      </Row>
      <Row>
        <Col className="col_th">우편번호</Col>
        <Col lg={9}>{data.REFINE_ZIP_CD}</Col>
      </Row>
      <Row>
        <MapWrapBox id="map">
          {data.REFINE_WGS84_LAT && data.REFINE_WGS84_LOGT && (
            <KakaoMap lat={data.REFINE_WGS84_LAT} logt={data.REFINE_WGS84_LOGT} />
          )}
        </MapWrapBox>
      </Row>
    </Container>
  );
};

const SanatoriumModalContent = ({ data }: { data: SanatoriumDetailData | ServiceFacilityDetailData }) => {
  return (
    <Container>
      <Row>
        <Col className="col_th">시설명</Col>
        <Col lg={9}>
          <h4>{data.FACLT_NM}</h4>
        </Col>
      </Row>
      <Row>
        <Col className="col_th">시설종류</Col>
        <Col lg={9}>{data.FACLT_KIND_NM}</Col>
      </Row>
      <Row>
        <Col className="col_th">도로명주소</Col>
        <Col lg={9}>{data.REFINE_ROADNM_ADDR}</Col>
      </Row>
      <Row>
        <Col className="col_th">지번주소</Col>
        <Col lg={9}>{data.REFINE_LOTNO_ADDR}</Col>
      </Row>
      <Row>
        <Col className="col_th">전화번호</Col>
        <Col lg={9}>{data.DETAIL_TELNO}</Col>
      </Row>
      <Row>
        <Col className="col_th">우편번호</Col>
        <Col lg={9}>{data.REFINE_ZIP_CD}</Col>
      </Row>
      <Row>
        <Col className="col_th">FAX번호</Col>
        <Col lg={9}>{data.DETAIL_FAXNO}</Col>
      </Row>
      <Row>
        <Col className="col_th">설치일자</Col>
        <Col lg={9}>{data.FACLT_INSTL_DETAIL_DE}</Col>
      </Row>
      <Row>
        <Col className="col_th">입소정원</Col>
        <Col>{data.ENTRNC_PSN_CAPA}</Col>
        <Col className="col_th">종사자정원</Col>
        <Col>{data.ENFLPSN_PSN_CAPA}</Col>
      </Row>
      <Row>
        <Col className="col_th">운영</Col>
        <Col>{data.INSTL_MAINBD_DIV_NM}</Col>
        <Col className="col_th">영리/비영리</Col>
        <Col>{data.PRFTMK_DIV_NM}</Col>
      </Row>
      <Row>
        <MapWrapBox id="map">
          {data.REFINE_WGS84_LAT && data.REFINE_WGS84_LOGT && (
            <KakaoMap lat={data.REFINE_WGS84_LAT} logt={data.REFINE_WGS84_LOGT} />
          )}
        </MapWrapBox>
      </Row>
    </Container>
  );
};

const ModalContainer = styled(Modal)`
  .modal-content {
    border-radius: 1rem;
  }
  .modal-header {
    background-color: ${({ theme }) => theme.colors.main};
    color: #fff;
    font-size: 1.8rem;
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px);
  }
  .modal-body {
    font-size: 1.8rem;
    padding-top: 2rem;
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
`;

const MapWrapBox = styled.div`
  height: 30rem;
  margin-top: 1rem;
  padding: 0;
  box-shadow: 0 0 1rem rgb(0 0 0 / 25%);
`;
