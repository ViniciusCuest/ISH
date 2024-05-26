import Router from '../routes/index.routes'
import { CartProvider } from '../context/cart.context'

export default function App() {
  return (
    <CartProvider>
      <Router />
    </CartProvider>
  )
}
