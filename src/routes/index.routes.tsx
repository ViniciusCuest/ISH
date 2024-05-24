import { createBrowserRouter } from 'react-router-dom'
import Splash from '../pages/splash'
import Login from '../pages/login'
import Home from '../pages/home'
import Product from '../pages/product'
import Cart from '../pages/cart'
import Payments from '../pages/payments'
import Status from '../pages/status'
import Register from '../pages/register'

export enum RoutePaths {
  BASE = '/',
  LOGIN = '/login',
  LOADING = '/splash',
  CART = '/cart'
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
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/payments',
    element: <Payments />
  },
  {
    path: '/status',
    element: <Status />
  },
  {
    path: '/register',
    element: <Register/>
  }
])
