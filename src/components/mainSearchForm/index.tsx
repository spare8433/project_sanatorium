import SearchBox from '@components/searchBox'
import SearchOptions from '@components/searchOptions'
import styled from 'styled-components'

const Containor = styled.div`
  width: 100%;
  background-color: #f2f2f2;
`

const TotalSearchContainor = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 3rem 0 2rem;
`

const TitleLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;

  h1,
  span {
    font-size: 2.4rem;
    font-weight: 600;
  }
`

const WrapTitleBox = styled.div`
  width: 18rem;
  height: 11rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7886e;
  color: white;
  margin-right: 4rem;
`

const WrapSearchBOx = styled.div`
  position: relative;
  transform: translate(0, -50%);
`

const SearchFormBox = styled.div`
  padding-left: 4rem;
  position: relative;

  button {
    font-size: 1.8rem;
    padding: 0.6rem 3rem;
  }
`

const SearchOptionBox = styled.div`
  width: 100%;
  position: relative;
  transform: translate(0, -15%);
  display: flex;
`

const ButtonLine = styled.div`
  display: flex;
  justify-content: flex-end;
`

const MainSearchForm = () => {
  return (
    <Containor>
      <TotalSearchContainor>
        <TitleLine>
          <WrapTitleBox>
            <h1>시설찾기</h1>
          </WrapTitleBox>
          <span>시설분류를 상세옵션 맞게 검색하세요</span>
        </TitleLine>

        <SearchFormBox>
          <WrapSearchBOx>
            <SearchBox />
          </WrapSearchBOx>

          <SearchOptionBox>
            <SearchOptions />
          </SearchOptionBox>
        </SearchFormBox>
      </TotalSearchContainor>
    </Containor>
  )
}

export default MainSearchForm
