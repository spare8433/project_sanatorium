import { Form, FormControlProps } from "react-bootstrap";

import { SearchInputBox } from "./style";

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
