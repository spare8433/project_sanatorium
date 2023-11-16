import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from '@styles/globalStyle'
import Layout from '@components/layoout'
import Home from './routes/home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Test from '@routes/test'
import Search from '@routes/search'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'search',
        element: <Search />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
])

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <GlobalStyles />
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App
