import styled from 'styled-components'

export const Containor = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.back_white};
`

export const TotalSearchContainor = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 2rem 2rem;
`

export const TitleLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  @media ${({ theme }) => theme.device.tablet} {
    justify-content: center;
    margin-bottom: 2rem;
  }
`

export const WrapTitleBox = styled.div`
  width: 18rem;
  height: 11rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main};
  color: white;
  margin-right: 4rem;

  @media ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`

export const WrapSearchBox = styled.div`
  position: relative;
  transform: translate(0, -50%);

  @media ${({ theme }) => theme.device.tablet} {
    transform: none;
  }
`

export const SearchFormBox = styled.div`
  padding-left: 4rem;
  position: relative;

  button {
    font-size: 1.8rem;
    padding: 0.6rem 3rem;
  }

  @media ${({ theme }) => theme.device.tablet} {
    padding-left: 0;
  }
`

export const SearchOptionBox = styled.div`
  width: 100%;
  position: relative;
  transform: translate(0, -15%);
  display: flex;

  @media ${({ theme }) => theme.device.tablet} {
    transform: none;
  }
`
