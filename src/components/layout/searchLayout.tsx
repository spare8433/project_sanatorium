import { Outlet } from 'react-router-dom'
import SearchHeader from '@components/header/searchHeader'
import Footer from '@components/footer'
import styled from 'styled-components'

const Containor = styled.div`
  width: 100%;
`

const SearchLayout = () => {
  return (
    <Containor>
      <SearchHeader />
      <Outlet />
      <Footer />
    </Containor>
  )
}

export default SearchLayout
