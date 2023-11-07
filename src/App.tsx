import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from '@styles/globalStyle'
import Layout from '@components/layoout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout>Hello world!</Layout>,
    children: [],
  },
])

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App
