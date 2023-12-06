import styled from 'styled-components'

export const SearchContainor = styled.div``

export const SearchFormBox = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
`

export const SearchInputBox = styled.div`
  flex: 1;
  font-size: 1.8rem;
  background-color: white;
  height: auto;
  display: flex;
  border-radius: 5rem;
  padding: 1rem 2rem;
  border: 1px solid #d7d7da;
  transition:
    box-shadow 0.5s,
    color 0.5s,
    border-color 0.5s;

  &:hover {
    border: solid 1px #e7886e;
    color: #e7886e !important;
    box-shadow: 0px 0px 6px #e7886e;
  }

  input[type='search'] {
    background-color: white;
    width: 90%;
    margin: 0;
    margin-left: 1.5rem;
    padding: 0%;
    border: none !important;
    outline: none !important;
  }
`

export const OptionLine = styled.span``
