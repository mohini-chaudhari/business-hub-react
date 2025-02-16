import React, { lazy } from "react"
import { useRoutes } from "react-router-dom"

const HomePage = lazy(()  => import('../pages/HomePage'))

const Routes = () => {
  // const navigate = useNavigate()

  const routes = useRoutes([
    {
      path: '/',
      element: <HomePage/>,
    }
  ])
  return routes
}

export default Routes