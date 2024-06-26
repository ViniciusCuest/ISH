import { createContext, useContext, useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type ProductProps = {
  id: string;
  title: string;
  ownerName: string;
  fullQuantity: number;
  unitValue: number;
  selectedQuantity: string;
  img: string;
};

type CartContextProps = {
  cart: ProductProps[];
  isMenuOpen: boolean;
  handleMenuDisplay: () => void;
  handleRemoveProduct: (productId: string) => void;
  handleAddProduct: (product: ProductProps) => void;
  handleClearCart: () => void;
};

export const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<ProductProps[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuDisplay = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleRemoveProduct = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleAddProduct = (product: ProductProps) => {
    const alreadyInCart = cart.find((item) => item.id === product.id)?.selectedQuantity;
    if (alreadyInCart) {
      setCart((prev) => [
        ...prev.filter((item) => item.id !== product.id),
        {
          ...product,
          selectedQuantity: String(parseFloat(product.selectedQuantity) + parseFloat(alreadyInCart))
        }
      ]);
      return;
    }

    setCart((prev) => [...prev, product]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isMenuOpen,
        handleMenuDisplay,
        handleRemoveProduct,
        handleAddProduct,
        handleClearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  return context;
}
