import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainor = styled.header`
  box-sizing: border-box;
  background-color: white;
  position: relative;
`

export const BackGround = styled.div`
  content: '';
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`

export const WrapHeaderBox = styled.div`
  width: 100%;
  position: relative;
  z-index: 1001;
  border-bottom: solid 0.1px #ebebeb;
  background-color: inherit;
`

export const HeaderBox = styled.div`
  width: 1024px;
  height: 9rem;
  margin: 0 auto;
  padding: 2rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchOptionContainor = styled.div<{ $isOn: boolean }>`
  width: 100%;
  background-color: white;
  position: absolute;
  z-index: 1000;
  height: ${({ $isOn }) => ($isOn ? '340px' : '0')};
  overflow: hidden;
  transition: height 0.15s ease-in;
`

export const SearchOptionBox = styled.div`
  width: 1024px;
  padding-left: 18rem;
  margin: 0.5rem auto 0;
  transition: inherit;
`

export const LogoLink = styled(Link)`
  height: fit-content;
  margin-right: 2rem;
`

export const SearchFormBox = styled.div`
  flex: 1;
`
