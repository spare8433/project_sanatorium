import { useState } from "react";

import Tab from "react-bootstrap/Tab";
import { PolicyKeywordsType, POLICY_KEYWORDS, POLICY_CONTENTS } from "@constants/policyContents";
import ExternalLink from "../externalLink";
import { StyledTabs, TabMenuContainor, TabTitleLine, TapItem } from "./style";

const TabMenu = () => {
  const [key, setKey] = useState<PolicyKeywordsType>("노인정책");
  const mainLink = "https://www.mohw.go.kr/menu.es";

  const setTabcontent = (type: PolicyKeywordsType) => {
    return POLICY_CONTENTS[type].map((item) => (
      <TapItem key={item.id}>
        <ExternalLink href={`${mainLink}?mid=${item.id}`}>
          <TabTitleLine>
            <h4>{item.title}</h4>
            <img src="img/go.png" alt=""></img>
          </TabTitleLine>
        </ExternalLink>
        <p>{item.explain}</p>
      </TapItem>
    ));
  };

  return (
    <TabMenuContainor>
      <h1>관련 정책</h1>
      <StyledTabs activeKey={key} onSelect={(k) => setKey(k as PolicyKeywordsType)} className="mb-3">
        {POLICY_KEYWORDS.map((keyword) => (
          <Tab key={keyword} eventKey={keyword} title={keyword}>
            {key === keyword && setTabcontent(keyword)}
          </Tab>
        ))}
      </StyledTabs>
    </TabMenuContainor>
  );
};

export default TabMenu;
