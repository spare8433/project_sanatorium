import { SanatoriumDetailData, WelfareServiceDetailData } from 'types/apiData'
import { Container, Row, Col } from 'react-bootstrap'

interface Props {
  data: SanatoriumDetailData | WelfareServiceDetailData
}

const SanatoriumModalContent = ({ data }: Props) => {
  return (
    <Container>
      <Row>
        <Col className="col_th">시설명</Col>
        <Col lg={9}>{data.FACLT_NM}</Col>
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
      <Row>{/*<Col>지도가 들어가질도</Col>*/}</Row>
    </Container>
  )
}

export default SanatoriumModalContent
