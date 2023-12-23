import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Containor = styled.div`
  width: 100%;
  margin-bottom: 8rem;
`

const BannerBox = styled.div`
  width: 1024px;
  margin: 0 auto;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 4rem;
  font-size: 2rem;
  font-weight: 600;
  box-shadow: 0.25rem 0.25rem 1rem rgb(0 0 0 / 15%);
  border: 1px solid lightgray;
  h2 {
    margin-bottom: 1.6rem;
  }
  p {
    font-size: 1.6rem;
  }
`
const MainButton = styled(Link)`
  width: fit-content;
  padding: 1.2rem 3rem;
  border-radius: 3rem;
  background-color: #e7886e;
  color: white;
  font-weight: 600;
  border: gray 1px;
`

const TextBox = styled.div``

const CareGradeBanner = () => {
  return (
    <Containor>
      <BannerBox>
        <TextBox>
          <h2>장기요양 등급 테스트</h2>
          <p>간단한 테스트를 통해 예상 장기요양등급을 알아보세요 😀</p>
        </TextBox>

        <MainButton to="/caregrade">바로가기</MainButton>
      </BannerBox>
    </Containor>
  )
}

export default CareGradeBanner
