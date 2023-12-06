import styled from 'styled-components'
import { Button } from 'react-bootstrap'

export const Containor = styled.div`
  width: 100%;
  button[type='submit'] {
    margin-top: 3rem;
    font-size: 1.8rem;
    padding: 0.6rem 3rem;
    float: right;
  }
`

export const HeaderSearchOptionList = styled.ul`
  li {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 0 1.2rem;
    border-bottom: solid 1px #ebebeb;

    .btn-group {
      display: inline;
    }

    strong {
      width: 10rem;
      margin-right: 1.4rem;
    }

    label,
    select {
      font-size: inherit;
    }

    select {
      flex: 1;
      margin: 0.8rem 0;
      margin-right: 1rem;
    }

    label {
      border-radius: 0.5rem !important;
      margin: 0.8rem 0;
      margin-right: 1rem;
      box-sizing: content-box;
    }
  }
`

export const SearchOptionList = styled.div`
  width: 100%;
  display: flex;
  span {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    padding: 0 1.2rem;

    strong {
      margin-right: 2rem;
    }

    label,
    select {
      font-size: inherit;
      width: 12rem;
    }

    label {
      border-radius: 0.5rem !important;
      margin: 0.8rem 0;
      margin-right: 1rem;
      box-sizing: content-box;
    }
  }
`
