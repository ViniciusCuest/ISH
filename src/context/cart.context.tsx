import { createContext, useContext, useEffect, useState } from 'react'

type Props = {
  children: React.ReactNode
}

type ProductProps = {
  id: string
  title: string
  ownerName: string
  fullQuantity: number
  unitValue: number
  selectedQuantity: string
}

type CartContextProps = {
  cart: ProductProps[]
  handleRemoveProduct: (productId: string) => void
  handleAddProduct: (product: ProductProps) => void
}

export const CartContext = createContext({} as CartContextProps)

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<ProductProps[]>([])

  const handleRemoveProduct = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId))
  }

  const handleAddProduct = (product: ProductProps) => {
    const alreadyInCart = cart.find((item) => item.id === product.id)?.selectedQuantity
    if (alreadyInCart) {
      setCart((prev) => [
        ...prev.filter((item) => item.id !== product.id),
        {
          ...product,
          selectedQuantity: String(parseFloat(product.selectedQuantity) + parseFloat(alreadyInCart))
        }
      ])
      return
    }

    setCart((prev) => [...prev, product])
  }

  useEffect(() => {
    console.log('CART: ', cart)
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        handleRemoveProduct,
        handleAddProduct
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  return context
}
