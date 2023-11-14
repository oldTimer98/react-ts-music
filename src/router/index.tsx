import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
const Discover = lazy(() => import('@/views/discover'))
const routes: Array<RouteObject> = [
  {
    path: '/',
    element: <Discover />
  }
]

export default routes
