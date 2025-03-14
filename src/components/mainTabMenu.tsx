import ExternalLink from "@components/externalLink";
import { POLICY_CONTENTS, POLICY_KEYWORDS, PolicyKeywordsType } from "@constants/policyContents";
import { useState } from "react";
import { Tabs } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import styled from "styled-components";

const TabContent = ({ type }: { type: PolicyKeywordsType }) =>
  POLICY_CONTENTS[type].map((item) => (
    <TapItem key={item.id}>
      <ExternalLink href={`https://www.mohw.go.kr/menu.es?mid=${item.id}`}>
        <TabTitleLine>
          <h4>{item.title}</h4>
          <img src="img/go.png" alt="" />
        </TabTitleLine>
      </ExternalLink>
      <p>{item.explain}</p>
    </TapItem>
  ));

const TabMenu = () => {
  const [key, setKey] = useState<PolicyKeywordsType>("노인정책");

  return (
    <TabMenuContainer>
      <h2>관련 정책</h2>
      <StyledTabs activeKey={key} onSelect={(k) => setKey(k as PolicyKeywordsType)} className="mb-3">
        {POLICY_KEYWORDS.map((keyword) => (
          <Tab key={keyword} eventKey={keyword} title={<h3>{keyword}</h3>}>
            {key === keyword && <TabContent type={keyword} />}
          </Tab>
        ))}
      </StyledTabs>
    </TabMenuContainer>
  );
};

export default TabMenu;

const TabMenuContainer = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 5rem;

  h2 {
    margin: 3rem 0;
  }

  .tab-content > .active,
  .tab-content > .tap-pane {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    @media ${({ theme }) => theme.device.tablet} {
      grid-template-columns: 1fr;
    }
  }
`;

const StyledTabs = styled(Tabs)`
  width: 100%;
  font-size: 1.8rem;
  border-bottom: 1px solid #dee2e6;
  display: flex;

  .nav-item {
    width: 28%;
    button {
      width: 100%;
      font-weight: bold;
    }

    &:nth-child(1),
    &:nth-child(2) {
      width: 22%;
    }
  }

  .nav-link {
    color: #495057;
    border: none;
    outline: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    padding: 1.5rem 0;

    button {
      border: none;
      outline: none;
    }
  }
  .nav-link.active {
    border-bottom: 0.3rem solid ${({ theme }) => theme.colors.main};
  }
  .nav-link {
    color: ${({ theme }) => theme.colors.main} !important;
    border-color: none;
    background-color: white !important;
  }
`;

const TabTitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    aspect-ratio: 1/1;
  }
`;

const TapItem = styled.div`
  min-height: 10rem;
  padding: 2rem;
  background-color: white;
  box-shadow: 0.25rem 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 0.5rem;

  p {
    padding: 1rem 0;
  }
`;
