import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  max-width: 1024px;
  padding: 0 2rem;
  margin: 0 auto 8rem;
`;

const BannerBox = styled.div`
  margin: 0 auto;
  background-color: white;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.4rem 4rem;
  font-size: 2rem;
  font-weight: 600;
  box-shadow: 0.25rem 0.25rem 1rem rgb(0 0 0 / 15%);
  border: 1px solid lightgray;

  p {
    font-size: 1.6rem;
    margin-top: 1.6rem;

    @media ${({ theme }) => theme.device.tablet} {
      display: none;
    }
  }
`;
const MainButton = styled(Link)`
  text-align: center;
  min-width: 14rem;
  margin-left: 2rem;
  padding: 1.2rem 0;
  border-radius: 3rem;
  background-color: ${({ theme }) => theme.colors.main};

  color: white;
  font-weight: 600;
  border: gray 1px;
`;

const TextBox = styled.div``;

const CareGradeBanner = () => {
  return (
    <Container>
      <BannerBox>
        <TextBox>
          <h2>장기요양 등급 테스트</h2>
          <p>간단한 테스트를 통해 예상 장기요양등급을 알아보세요 😀</p>
        </TextBox>

        <MainButton to="/care-grade">바로가기</MainButton>
      </BannerBox>
    </Container>
  );
};

export default CareGradeBanner;
