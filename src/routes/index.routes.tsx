import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Splash from '../pages/splash';
import Login from '../pages/login';
import Home from '../pages/home';
import Product from '../pages/product';
import Cart from '../pages/cart';
import Payments from '../pages/payments';
import Status from '../pages/status';
import Register from '../pages/register';
import { MenuAside } from '../components/menu-aside';
import { useCart } from '../context/cart.context';
import ProfileSelector from '../pages/profile-selector';
import Success from '../pages/success';

export enum RoutePaths {
  BASE = '/',
  LOGIN = '/login',
  LOADING = '/splash',
  CART = '/cart'
}

const router = createBrowserRouter([
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
    path: '/selector',
    element: <ProfileSelector />
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
    path: '/register/:type',
    element: <Register />
  },
  {
    path: '/success',
    element: <Success />
  }
]);

export default function Router() {
  const { isMenuOpen } = useCart();
  return (
    <>
      <RouterProvider router={router} />
      {isMenuOpen ? <MenuAside /> : null}
    </>
  );
}
