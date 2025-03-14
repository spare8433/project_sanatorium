import { Form, FormControlProps } from "react-bootstrap";
import styled, { css } from "styled-components";

const SearchFacilityInput = (props: FormControlProps) => {
  return (
    <SearchInputBox>
      <div className="image">
        <img src="img/search.png" alt="search-icon" />
      </div>
      <Form.Control type="search" placeholder="시설 검색" id="search-text" aria-describedby="search-text" {...props} />
    </SearchInputBox>
  );
};

export default SearchFacilityInput;

export const SearchInputBox = styled.div`
  background-color: white;
  height: auto;
  display: flex;
  align-items: center;
  border-radius: 5rem;
  padding: 1rem 2rem;
  border: 1px solid #d7d7da;
  transition:
    box-shadow 0.5s,
    color 0.5s,
    border-color 0.5s;

  &:hover {
    ${({ theme }) => css`
      border: solid 1px ${theme.colors.main};
      color: ${theme.colors.main};
      box-shadow: 0px 0px 6px ${theme.colors.main};
    `};
  }

  .image {
    display: flex;
  }

  input[type="search"] {
    flex: 1;
    background-color: white;
    margin: 0;
    margin-left: 1.5rem;
    font-size: 1.6rem;
    padding: 0;
    border: none !important;
    outline: none !important;
  }
`;
