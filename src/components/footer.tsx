import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterContainer = styled.footer`
  width: 100%;
  border-top: 0.1rem solid #ebebeb;
`;

const FooterBox = styled.div`
  height: 18rem;
  margin: 0 auto;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  padding: 3rem 2rem 4rem;
`;

const LogoLink = styled(Link)`
  height: fit-content;
`;

const OtherInfoBox = styled.div`
  text-align: right;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const MyProfileInfoBox = styled.ul`
  li {
    font-size: 1.4rem;
    margin-bottom: 0.3rem;
  }
  a {
    text-decoration: underline;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
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
        </OtherInfoBox>
      </FooterBox>
    </FooterContainer>
  );
};

export default Footer;
