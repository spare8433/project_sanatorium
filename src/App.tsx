import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyles from '@styles/globalStyle'
import Layout from '@components/layout'
import SearchLayout from '@components/layout/searchLayout'
import Home from './routes/home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Search from '@routes/search'
import { CareGradeProvider } from '@context/careGradeContext'
import TestPage from '@routes/testPage'
import CareGradePage from '@routes/careGrade'
import { ThemeProvider } from 'styled-components'
import theme from '@styles/theme'

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
        path: '/test',
        element: <TestPage />,
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
  {
    path: '/caregrade',
    element: <CareGradePage />,
  },
])

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CareGradeProvider>
        <ThemeProvider theme={theme}>
          <ReactQueryDevtools />
          <GlobalStyles />
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </CareGradeProvider>
    </QueryClientProvider>
  )
}

export default App
