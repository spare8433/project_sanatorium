import { KeyboardEventHandler, memo } from "react";
import { SearchContainor, SearchFormBox, SearchInputBox } from "./style";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import useSearchQuery from "@hooks/useSearchQuery";

interface Props {
  turnOn: () => void;
  turnOff: () => void;
  states: SearchStatesType;
  changeSearchText: (e: React.ChangeEvent) => void;
}

const HeaderSearchBox = ({ turnOn, turnOff, states, changeSearchText }: Props) => {
  const navigate = useNavigate();
  const getSearchQuery = useSearchQuery();
  const { searchText } = states;

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      navigate({
        pathname: `/search`,
        search: getSearchQuery(states),
      });
      turnOff();
    }
  };

  return (
    <SearchContainor>
      <SearchFormBox>
        <Form>
          {/* 검색창 */}
          <SearchInputBox>
            <div className="image">
              <img src="img/search.png" alt="search-icon" />
            </div>
            <input
              type="search"
              placeholder="시설 검색"
              value={searchText}
              onChange={changeSearchText}
              onClick={turnOn}
              onKeyDown={handleKeyDown}
            />
          </SearchInputBox>
        </Form>
      </SearchFormBox>
    </SearchContainor>
  );
};

export default memo(HeaderSearchBox);
