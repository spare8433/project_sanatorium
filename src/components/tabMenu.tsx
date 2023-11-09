import { useState } from 'react'

import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  PolicyKeywordsType,
  PolicyKeywords,
  PolicyContents,
} from '@assets/staticData/policyContents'

const TabMenuContainor = styled.div`
  width: 1024px;
  margin: 0 auto;
  margin-bottom: 5rem;
  h1 {
    margin: 3rem 0;
  }

  .tab-content > .active,
  .tab-content > .tap-pane {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }
`

const TabTitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const StyledTabs = styled(Tabs)`
  .nav-item {
    width: 25%;

    button {
      width: 100%;
      font-weight: 600;
    }
  }

  width: 100%;
  font-size: 1.8rem;

  border-bottom: 1px solid #dee2e6;

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
    border-bottom: 0.3rem solid #e7886e;
    /* border-color: #e7886e !important; */
  }
  .nav-link {
    color: #e7886e !important;
    border-color: none;
    background-color: #f3f3f3 !important;
  }
`

const TapItem = styled.div`
  height: 10rem;
  padding: 1rem 1rem 1.5rem;
  background-color: white;
  box-shadow: 0.25rem 0.5rem 0.5rem rgb(30 40 80 / 10%);

  p {
    padding: 1rem 0;
  }
`

const TabMenu = () => {
  const [key, setKey] = useState<PolicyKeywordsType>('노인정책')
  const mainLink = 'https://www.mohw.go.kr/menu.es'

  const setTabcontent = (type: PolicyKeywordsType) => {
    return PolicyContents[type].map((item) => (
      <TapItem key={item.id}>
        <Link to={{ pathname: mainLink, search: `?mid${item.id}` }}>
          <TabTitleLine>
            <h4>{item.tab_item_title}</h4>
            <img src="img/go.png" alt=""></img>
          </TabTitleLine>
        </Link>
        <p>{item.tab_item_content}</p>
      </TapItem>
    ))
  }

  return (
    <TabMenuContainor>
      <h1>관련 정책</h1>
      <StyledTabs
        activeKey={key}
        onSelect={(k) => setKey(k as PolicyKeywordsType)}
        className="mb-3"
      >
        {PolicyKeywords.map((keyword) => (
          <Tab key={keyword} eventKey={keyword} title={keyword}>
            {key === keyword && setTabcontent(keyword)}
          </Tab>
        ))}
      </StyledTabs>
    </TabMenuContainor>
  )
}

export default TabMenu
