import './App.css'
import Cart from './components/gdgc/Cart'
import Home from './components/gdgc/Home'
//import As3a from './components/as3/As3a'
//import Parent from './components/as5/as5c/Parent'
import Layout from './components/gdgc/Layout'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
function App() {
    const routeObj=createBrowserRouter([
      {
        path: "",
        element: <Layout/>,
        children:
        [
          {
            path: '',
            element: <Home/>,
          },
        ]
      },
    ])
  return (
    <RouterProvider router={routeObj} />
  )
}

export default App