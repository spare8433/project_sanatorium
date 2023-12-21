import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ShortCutListContainor = styled.div`
  width: 100%;
  padding: 3rem 6rem;
  background-color: #e7886e;
  margin-bottom: 4rem;
`

export const ShortCutListBox = styled.div`
  width: 1024px;
  margin: 0 auto;

  h4 {
    color: #fff;
    margin-bottom: 1rem;
  }
`

export const ShortCutItemList = styled.div`
  background-color: #f3f3f3;
  padding: 2rem 2rem;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 12rem;
  grid-auto-flow: row;
`

export const ShortCutItemLink = styled(Link)`
  width: 14rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  font-size: 1.8rem;
  transition: background-color 0.2 ease-in-out;
  border-radius: 1rem;
  padding: 1rem;

  &:hover {
    background-color: #ebebeb;
  }

  span {
    font-weight: 600;
    text-align: center;
  }

  img {
    width: 6.4rem;
    margin-bottom: 0.5rem;
  }
`

export const TextBox = styled.div`
  width: 40rem;
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  margin: 0 1rem;

  h3 {
    margin-bottom: 1rem;
  }
`
