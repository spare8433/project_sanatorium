import Layout from "@components/layout";
import SearchLayout from "@components/layout/searchLayout";
import { CareGradeProvider } from "@context/careGradeContext";
import CareGradePage from "@routes/careGrade";
import Search from "@routes/search";
import GlobalStyles from "@styles/globalStyle";
import theme from "@styles/theme";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/search",
    element: <SearchLayout />,
    children: [
      {
        index: true,
        element: <Search />,
      },
    ],
  },
  {
    path: "/care-grade",
    element: (
      <CareGradeProvider>
        <CareGradePage />
      </CareGradeProvider>
    ),
  },
]);

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <ReactQueryDevtools />
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
