import { HeaderBox, HeaderContainer, LogoLink, WrapHeaderBox } from "./style";

const SearchHeader = () => {
  return (
    <HeaderContainer>
      <WrapHeaderBox>
        <HeaderBox>
          <LogoLink to={`/`}>
            <img src="img/logo.png" alt="logo" />
          </LogoLink>
        </HeaderBox>
      </WrapHeaderBox>
    </HeaderContainer>
  );
};

export default SearchHeader;
