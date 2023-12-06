import HeaderSearchBox from '@components/searchBox/headerSearchBox'
import useSwitch from '@hooks/useSwitch'
import HeaderSearchOptions from '@components/searchOptions/headerSearchOptions'
import {
  BackGround,
  HeaderBox,
  HeaderContainor,
  LogoLink,
  SearchFormBox,
  SearchOptionBox,
  SearchOptionContainor,
  WrapHeaderBox,
} from './style'

const Header = () => {
  const [isOnSearchOptions, turnOnSearchOptions, turnOffSearchOptions] = useSwitch(false)

  return (
    <HeaderContainor>
      <WrapHeaderBox>
        <HeaderBox>
          <LogoLink to={`/`}>
            <img src="img/logo.png" alt="logo" />
          </LogoLink>

          <SearchFormBox>
            <HeaderSearchBox turnOn={turnOnSearchOptions} turnOff={turnOffSearchOptions} />
          </SearchFormBox>
        </HeaderBox>
      </WrapHeaderBox>

      <SearchOptionContainor $isOn={isOnSearchOptions}>
        <SearchOptionBox>
          <HeaderSearchOptions turnOff={turnOffSearchOptions} />
        </SearchOptionBox>
      </SearchOptionContainor>

      {isOnSearchOptions && <BackGround onClick={turnOffSearchOptions} />}
    </HeaderContainor>
  )
}

export default Header
