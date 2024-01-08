import styled from 'styled-components'

export const Containor = styled.div`
  width: 100%;
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

  @media ${({ theme }) => theme.device.tablet} {
    flex-direction: column;

    span {
      margin-top: 2rem;
    }

    select {
      flex: 1;
    }
  }
`
export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  margin-top: 3rem;

  span {
    font-size: 1.4rem;
  }

  button[type='submit'] {
    min-width: 14rem;
    font-size: 1.8rem;
    padding: 0.6rem 0;
    margin-left: 2rem;
  }
`
