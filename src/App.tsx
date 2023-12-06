import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from '@styles/globalStyle'
import Layout from '@components/layout'
import SearchLayout from '@components/layout/searchLayout'
import Home from './routes/home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Test from '@routes/test'
import Search from '@routes/search'
import { SearchOptionProvider } from '@context/searchOptionContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'test',
        element: <Test />,
      },
    ],
  },
  {
    path: '/search',
    element: <SearchLayout></SearchLayout>,
    children: [
      {
        index: true,
        element: <Search />,
      },
    ],
  },
])

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchOptionProvider>
        <ReactQueryDevtools />
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
      </SearchOptionProvider>
    </QueryClientProvider>
  )
}

export default App
