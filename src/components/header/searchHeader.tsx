import { HeaderBox, HeaderContainor, LogoLink, WrapHeaderBox } from './style'

const SearchHeader = () => {
  return (
    <HeaderContainor>
      <WrapHeaderBox>
        <HeaderBox>
          <LogoLink to={`/`}>
            <img src="img/logo.png" alt="logo" />
          </LogoLink>
        </HeaderBox>
      </WrapHeaderBox>
    </HeaderContainor>
  )
}

export default SearchHeader
