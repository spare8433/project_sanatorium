import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterContainor = styled.footer`
  width: 100%;
  height: 18rem;
  padding: 3rem 0 5rem;
  border-top: 0.1rem solid #ebebeb;
`

const FooterBox = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

const LogoLink = styled(Link)`
  height: fit-content;
`

const OtherInfoBox = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const MyProfileInfoBox = styled.ul`
  li {
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }
`

const CopyrightText = styled.h4``

const Footer = () => {
  return (
    <FooterContainor>
      <FooterBox>
        <LogoLink to="/">
          <img src="/img/logo.png" alt="logo" />
        </LogoLink>

        <OtherInfoBox>
          <MyProfileInfoBox>
            <li>email : byeongchan66@google.com</li>
            <li>
              gitHub: <Link to="https://github.com/spare8433">https://github.com/spare8433</Link>
            </li>
            <li>
              blog : <Link to="https://spare8433.tistory.com">https://spare8433.tistory.com</Link>
            </li>
          </MyProfileInfoBox>
          <CopyrightText>Copyright © 2023 spare8433 All Rights Reserved.</CopyrightText>
        </OtherInfoBox>
      </FooterBox>
    </FooterContainor>
  )
}

export default Footer
