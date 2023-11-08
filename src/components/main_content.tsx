import styled from 'styled-components'
// import './main_content.css'

const MainContentContainor = styled.div`
  width: 1024px;
  margin: 0 auto;

  h1 {
    margin: 3rem 0;
  }
`

const MainContentBox = styled.div`
  h2 {
    margin: 2rem auto;
    color: #e7886e;
    font-family: 'NotoSansKR_m';
  }
`

const ContentGridBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 3rem;
  margin-bottom: 5rem;
`

const ContentItem = styled.div`
  display: flex;
  margin-left: 2rem;
`

const TextBox = styled.div`
  margin: 0 1.5rem;
`

const MainContent = () => {
  return (
    <MainContentContainor>
      <h1>요양시설별 특징</h1>
      <MainContentBox>
        <div className="nav_modal_content">
          <h2>입소 시설</h2>
          <ContentGridBox>
            <ContentItem>
              <img src="/img/hospital.png" alt="" />

              <TextBox>
                <h3>요양병원</h3>
                <p>
                  꾸준한 진료 및 치료, 재활이 필요하신 분에게 필요합니다.
                  <br />※ 평가등급을 확인하세요.
                </p>
              </TextBox>
            </ContentItem>

            <ContentItem>
              <img src="/img/stay-home.png" alt="" />

              <TextBox>
                <h3>요양원</h3>
                <p>
                  급식과 그 밖에 일상생활에 필요한 편의서비스를 제공합니다.
                  <br />※ 노인공동생활가정도 포함됩니다.
                </p>
              </TextBox>
            </ContentItem>
          </ContentGridBox>

          <h2>복지 시설</h2>
          <ContentGridBox>
            <ContentItem>
              <img src="/img/protect-day.png" alt="" />

              <TextBox>
                <h3>주야간보호</h3>
                <p>
                  주간 또는 야간 일정시간 어르신을 보호하며 신체활동 및 심신기능을 지원하는
                  서비스입니다.
                </p>
              </TextBox>
            </ContentItem>

            <ContentItem>
              <img src="/img/support.png" alt="" />

              <TextBox>
                <h3>방문요양</h3>
                <p>어르신 가정에 요양보호사가 직접 방문하여 필요한 일상 생활을 지원합니다.</p>
              </TextBox>
            </ContentItem>

            <ContentItem>
              <img src="/img/bath.png" alt="" />

              <TextBox>
                <h3>방문목욕</h3>
                <p>목욕 시설을 갖춘 차량, 혹은 가정 내에서 목욕을 지원하는 서비스입니다.</p>
              </TextBox>
            </ContentItem>
          </ContentGridBox>
        </div>
      </MainContentBox>
    </MainContentContainor>
  )
}

export default MainContent
