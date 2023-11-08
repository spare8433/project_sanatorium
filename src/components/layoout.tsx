import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header'
import Footer from './footer'
import styled from 'styled-components'
import SeachForm from './seachForm'

const Containor = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`

const Layout = () => {
  return (
    <Containor>
      <Header />
      <SeachForm />
      <Outlet />
      <Footer />
    </Containor>
  )
}

export default Layout
