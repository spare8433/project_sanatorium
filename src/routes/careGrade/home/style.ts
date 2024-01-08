import styled from 'styled-components'
import { ContentBox } from '../style'

export const HomeContentBox = styled(ContentBox)`
  padding: 2rem 3rem;
  height: 100%;
  line-height: 2.4rem;
  h2 {
    text-align: center;
    margin-bottom: 3rem;
  }
  h3 {
    margin-bottom: 1.6rem;
  }
  p {
    margin-bottom: 4rem;
    font-size: 1.8rem;
  }
  a {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.colors.main};
    font-weight: 600;
  }
`
