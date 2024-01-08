import styled from 'styled-components'

export const Containor = styled.div`
  width: 100%;
`

export const SearchContainor = styled.div`
  max-width: 1024px;
  margin: 0 auto;

  .modal-content {
    border-radius: 1rem;
  }
  .modal-header {
    background-color: ${({ theme }) => theme.colors.main};
    color: #fff;
    font-size: 1.8rem;
    font-family: 'NotoSansKR_r';
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px);
  }
  .modal-body {
    font-size: 1.8rem;
    font-family: 'NotoSansKR_r';
    padding-top: 2rem;
  }
  .btn-outline-secondary {
    width: 100%;
    margin: 2rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`

export const ContentBox = styled.div``
