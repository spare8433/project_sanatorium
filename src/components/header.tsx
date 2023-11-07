import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainor = styled.header`
  width: 100%;
  padding: 2rem 0;
  margin-bottom: 2rem;
`

const LogoLink = styled(Link)`
  height: fit-content;
`

const Header = () => {
  return (
    <HeaderContainor>
      <LogoLink to={`/`}>
        <img src="img/logo.png" alt="logo" />
      </LogoLink>
    </HeaderContainor>
  )
}

export default Header
