import KakaoMap from "@components/kakaoMap";
import { memo } from "react";
import { Col, Container, Row } from "react-bootstrap";

import { MapWrapBox } from "./modal.style";

interface Props {
  data: HospitalDetailData;
}

const HospitalModalContent = ({ data }: Props) => {
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

export default memo(HospitalModalContent);
