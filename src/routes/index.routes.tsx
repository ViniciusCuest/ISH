import { createBrowserRouter } from 'react-router-dom'
import Splash from '../pages/splash'
import Login from '../pages/login'
import Home from '../pages/home'
import Product from '../pages/product'

export enum RoutePaths {
  BASE = '/',
  LOGIN = '/login',
  LOADING = '/splash'
}

export const router = createBrowserRouter([
  {
    path: RoutePaths.BASE,
    element: <Splash />
  },
  {
    path: RoutePaths.LOGIN,
    element: <Login />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/product/:id',
    element: <Product />
  }
])
