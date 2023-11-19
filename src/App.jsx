import { createBrowserRouter, RouterProvider } from "react-router-dom"

//layout
import MainLayout from "./layout/MainLayout"
//pages
import Home from "./pages/Home"
import About from "./pages/About"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import Chekout from "./pages/Chekout"
import Loading from "./components/Loading"
import Orders from "./pages/Orders"
import Materials from "./components/Materials"
import Material from "./pages/Material"
import Login from "./pages/Login"
import Error from "./pages/Error"

//firebase 
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./firebase/firebaseConfig";
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { userSetting } from "./redux/features/basketSlice"

import ProtectedRoutes from "./components/ProtectedRoutes"

function App() {
  const routes = createBrowserRouter([
    {
      children: [
        {
          path: '/',
          element: <ProtectedRoutes><MainLayout /></ProtectedRoutes>,
          errorElement: <Error />,
          children: [
            {
              index: true,
              element: <Home />
            },
            {
              path: '/about',
              element: <About />
            },
            {
              path: "/products",
              element: <Products />
            },
            {
              path: "/cart",
              element: <Cart />
            },
            {
              path: "/chekout",
              element: <Chekout />
            },
            {
              path: "/orders",
              element: <Orders />
            },
            {
              path: "/materials",
              element: <Materials />
            },
            {
              path: "/material/:id",
              element: <Material />
            }
          ]
        },
        {
          path: "/login",
          element: <Login />
        }
      ]
    }
  ])

  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (info) => {
      dispatch(userSetting(info));
    })
  }, [])

  return (
    <div className="font-inter">
      <RouterProvider router={routes} />
    </div>
  )
}

export default App