import GlobalStyles from '@styles/globalStyle'

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
    children: []
  },
]);

function App() {
  return (
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  )
}

export default App;
