import { Tabs } from 'react-bootstrap'
import styled from 'styled-components'

export const TabMenuContainor = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 2rem;
  margin-bottom: 5rem;
  h1 {
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
`

export const StyledTabs = styled(Tabs)`
  width: 100%;
  font-size: 1.8rem;
  border-bottom: 1px solid #dee2e6;

  .nav-item {
    width: 28%;
    button {
      width: 100%;
      font-weight: 600;
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
    /* border-color: ${({ theme }) => theme.colors.main} !important; */
  }
  .nav-link {
    color: ${({ theme }) => theme.colors.main} !important;
    border-color: none;
    background-color: white !important;
  }
`

export const TabTitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  img {
    aspect-ratio: 1/1;
  }
`

export const TapItem = styled.div`
  min-height: 10rem;
  padding: 2rem;
  background-color: white;
  box-shadow: 0.25rem 0.5rem 1rem rgb(0 0 0 / 15%);
  border-radius: 0.5rem;

  p {
    padding: 1rem 0;
  }
`
