import styled from 'styled-components'

export const Containor = styled.div`
  width: 100%;
  background-color: #f2f2f2;
`

export const TotalSearchContainor = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 3rem 0 2rem;
`

export const TitleLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  h1,
  span {
    font-size: 2.4rem;
    font-weight: 600;
  }
`

export const WrapTitleBox = styled.div`
  width: 18rem;
  height: 11rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7886e;
  color: white;
  margin-right: 4rem;
`

export const WrapSearchBox = styled.div`
  position: relative;
  transform: translate(0, -50%);
`

export const SearchFormBox = styled.div`
  padding-left: 4rem;
  position: relative;

  button {
    font-size: 1.8rem;
    padding: 0.6rem 3rem;
  }
`

export const SearchOptionBox = styled.div`
  width: 100%;
  position: relative;
  transform: translate(0, -15%);
  display: flex;
`
