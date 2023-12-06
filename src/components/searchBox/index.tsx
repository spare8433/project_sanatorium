import { useContext, KeyboardEventHandler } from 'react'
import { SearchContainor, SearchFormBox, SearchInputBox } from './style'
import { useNavigate } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import SearchOptionContext from '@context/searchOptionContext'

const SearchBox = () => {
  const navigate = useNavigate()
  const { states, changeFns, getCurrentQuery } = useContext(SearchOptionContext)
  const { changeSearchText } = changeFns
  const { searchText } = states

  const handleKeyDown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      navigate({
        pathname: `/search`,
        search: getCurrentQuery(),
      })
    }
  }

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
              onKeyDown={handleKeyDown}
            />
          </SearchInputBox>
        </Form>
      </SearchFormBox>
    </SearchContainor>
  )
}

export default SearchBox
