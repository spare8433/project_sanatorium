import styled from 'styled-components'
import { ContentBox } from '../style'

export const ListContentBox = styled(ContentBox)`
  p {
    font-size: 1.6rem !important;
    margin-bottom: 2rem;
  }
`
export const GradeCategory = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.6rem;
  font-weight: 600;
  padding: 2.8rem 3.6rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.back_white};
  margin-bottom: 2.2rem;
  cursor: pointer;

  &:hover {
    background-color: #ebebeb;
  }
`
