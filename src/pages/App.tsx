import { RouterProvider } from 'react-router'
import { router } from '../routes/index.routes'
import { CartProvider } from '../context/cart.context'

export default function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}
