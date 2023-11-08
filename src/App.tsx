import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from '@styles/globalStyle'
import Layout from '@components/layoout'
import Home from './routes/home'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
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
