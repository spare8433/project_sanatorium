import styled from 'styled-components'
import { ContentBox } from '../style'
import { Table } from 'react-bootstrap'

export const ResultContentBox = styled(ContentBox)`
  text-align: center;
  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; */

  h2 {
    margin-bottom: 3rem;
  }

  a {
    display: block;
    font-size: 1.8rem;
    color: #e7886e;
    font-weight: 600;
    margin-bottom: 3rem;
  }

  span {
    width: 100%;
    display: block;
    font-size: 1.4rem;
    color: gray;
    font-weight: 600;
    margin-bottom: 4rem;
  }
`

export const ScoreBox = styled.div`
  min-width: 80%;
  padding: 3rem 4rem;
  border-radius: 1rem;
  background-color: #f2f2f2;
  margin-bottom: 3rem;
`

const ResultLine = styled.div`
  font-size: 2.8rem;
  font-weight: 600;
`
export const GradeLine = styled(ResultLine)`
  margin-bottom: 2rem;
`

export const ScoreLine = styled(ResultLine)``

export const GradeCriteriaTable = styled(Table)`
  font-size: 1.4rem;

  th:nth-child(1) {
    width: 20%;
  }

  td {
    vertical-align: middle;
  }
`
