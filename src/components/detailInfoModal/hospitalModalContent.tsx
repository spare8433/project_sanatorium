import { HospitalDetailData } from 'types/apiData'
import { Container, Row, Col } from 'react-bootstrap'
import { memo } from 'react'

interface Props {
  data: HospitalDetailData
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
      <Row>{/*<Col>지도가 들어가질도</Col>*/}</Row>
    </Container>
  )
}

export default memo(HospitalModalContent)
