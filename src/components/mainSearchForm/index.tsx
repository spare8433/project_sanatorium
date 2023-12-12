import SearchBox from '@components/searchBox'
import SearchOptions from '@components/searchOptions'
import { FullSearchStatesType, SearchChangeFnsType } from 'types/searchState'
import {
  Containor,
  SearchFormBox,
  SearchOptionBox,
  TitleLine,
  TotalSearchContainor,
  WrapSearchBox,
  WrapTitleBox,
} from './style'

interface Props {
  states: FullSearchStatesType
  changeFns: SearchChangeFnsType
}

const MainSearchForm = ({ states, changeFns }: Props) => {
  const { changeSearchText } = changeFns
  return (
    <Containor>
      <TotalSearchContainor>
        <TitleLine>
          <WrapTitleBox>
            <h1>시설찾기</h1>
          </WrapTitleBox>
          <span>조건에 맞는 요양시설을 찾아보세요</span>
        </TitleLine>

        <SearchFormBox>
          <WrapSearchBox>
            <SearchBox states={states} changeSearchText={changeSearchText} />
          </WrapSearchBox>

          <SearchOptionBox>
            <SearchOptions states={states} changeFns={changeFns} />
          </SearchOptionBox>
        </SearchFormBox>
      </TotalSearchContainor>
    </Containor>
  )
}

export default MainSearchForm
