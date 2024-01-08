import { Modal } from 'react-bootstrap'
import styled from 'styled-components'

export const ModalContainor = styled(Modal)`
  .modal-content {
    border-radius: 1rem;
  }
  .modal-header {
    background-color: ${({ theme }) => theme.colors.main};
    color: #fff;
    font-size: 1.8rem;
    border-top-left-radius: calc(1rem - 1px);
    border-top-right-radius: calc(1rem - 1px);
  }
  .modal-body {
    font-size: 1.8rem;
    padding-top: 2rem;
  }
  .col,
  .col-lg-9 {
    padding-bottom: calc(var(--bs-gutter-x) * 0.5);
    padding-top: calc(var(--bs-gutter-x) * 0.5);
    border: 1px solid #dee2e6;
  }
  .col_th {
    font-weight: 600;
  }
  .btn-outline-secondary {
    width: 100%;
    margin: 2rem 0 1rem;
    font-size: 1.4rem;
    font-weight: 600;
  }
`

export const MapWrapBox = styled.div`
  height: 30rem;
  margin-top: 1rem;
  padding: 0;
  box-shadow: 0 0 1rem rgb(0 0 0 / 25%);
`
