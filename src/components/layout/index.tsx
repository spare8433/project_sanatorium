import { Outlet } from 'react-router-dom'
import Header from '@components/header'
import Footer from '@components/footer'
import styled from 'styled-components'

const Containor = styled.div`
  width: 100%;
`

const Layout = () => {
  return (
    <Containor>
      <Header />
      <Outlet />
      <Footer />
    </Containor>
  )
}

export default Layout
