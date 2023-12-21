import { Modal } from 'react-bootstrap'
import styled from 'styled-components'

export const ModalContainor = styled(Modal)`
  .modal-dialog {
    margin: 0 auto;
    padding: 2rem 0;
    height: 100vh;
    width: 800px !important;
  }
  .modal-content {
    height: 100%;
    border: none !important;
    .modal-body {
      padding: 2rem 2rem;

      &::-webkit-scrollbar {
        width: 8px;
        height: 8px;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 3.5px;
        background-color: #e1e5e9;
      }
      &::-webkit-scrollbar-thumb:active {
        background-color: #ced4da;
      }
      &::-webkit-scrollbar-track {
      }
    }
    .modal-footer {
      padding: 1.6rem 2rem;
      box-sizing: border-box;
    }
    .modal-header {
      justify-content: space-between;
      padding: 1.6rem 2rem;
      background-color: #e7886e;
      color: white;

      .btn-close {
        margin: 0;
      }
    }
  }
`

export const ContentBox = styled.div`
  padding: 2rem 3rem;
  height: 100%;
`

export const QuestionBox = styled(ContentBox)`
  text-align: center;

  h2 {
    margin-bottom: 5rem;
  }
`

export const ProgressLine = styled.div`
  font-size: 2.4rem;
  margin-bottom: 3rem;
`

export const AnwserList = styled.ul`
  text-align: center;
  width: 70%;
  margin: 0 auto;
`

export const AnswerRadioItem = styled.li`
  border-radius: 1rem;
  margin-bottom: 2.4rem;
  box-shadow: 0.25rem 0.5rem 0.5rem rgb(0 0 0 / 10%);
  background-color: #f2f2f2;

  &.checked,
  &:hover {
    background-color: lightgray;
  }

  label {
    width: 100%;
    padding: 1.8rem 3rem;
    font-size: 1.6rem;
    font-weight: 600;
    cursor: pointer;

    input[type='radio'] {
      display: none;
    }
  }
`

export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  button {
    width: 18rem;
    height: 5rem;
    font-size: 1.6rem;
  }

  .mainButton {
    background-color: #e7886e;
    color: white;
    border-color: #e7886e;
    margin-left: 8rem;
  }
`
