import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ShortCutListContainor = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 3rem 2rem;
  background-color: #e7886e;
`

const ShortCutListBox = styled.div`
  width: 100%;

  h4 {
    color: #fff;
    font-weight: 500;
    margin-bottom: 1rem;
  }
`

const ShortCutItemList = styled.div`
  background-color: #f3f3f3;
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 10rem;
  grid-auto-flow: row;
`

const ShortCutItemLink = styled(Link)`
  width: 12rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: 1.8rem;

  span {
    font-weight: 500;
  }

  img {
    width: 6.4rem;
    margin-bottom: 0.5rem;
  }
`

const ShortCutList = () => {
  return (
    <ShortCutListContainor>
      <ShortCutListBox>
        <h4> 특정 요양시설을 찾으세요?</h4>

        <ShortCutItemList>
          <ShortCutItemLink to={`/search?type=요양병원`}>
            <img src="/img/hospital.png" alt="nursing-hospital" />
            <span>요양병원</span>
          </ShortCutItemLink>

          <ShortCutItemLink to={`/search?type=요양원`}>
            <img src="/img/stay-home.png" alt="sanatorium " />
            <span>요양원</span>
          </ShortCutItemLink>

          <ShortCutItemLink to={`/search?type=방문요양`}>
            <img src="/img/support.png" alt="visiting-care" />
            <span>방문요양</span>
          </ShortCutItemLink>

          <ShortCutItemLink to={`/search?type=방문목욕`}>
            <img src="/img/bath.png" alt="visiting-bath" />
            <span>방문목욕</span>
          </ShortCutItemLink>

          <ShortCutItemLink to={`/search?type=주야간보호`}>
            <img src="/img/protect-day.png" alt="all-day-protection" />
            <span>주야간보호</span>
          </ShortCutItemLink>
        </ShortCutItemList>
      </ShortCutListBox>
    </ShortCutListContainor>
  )
}

export default ShortCutList
