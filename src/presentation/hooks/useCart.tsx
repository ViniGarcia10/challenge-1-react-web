import { useContext, useState } from "react";
import Cart from "../../@types/Cart";
import CartContext from "../context/CartContext";

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, setCartState] = useState<Cart>({ items: [] });

  function addToCart() {}

  function removeFromCart() {}

  function increment() {}

  function decrement() {}

  function resetCart() {}

  return (
    <CartContext.Provider
      value={{
        cart: cartState,
        addToCart,
        removeFromCart,
        decrement,
        increment,
        resetCart,
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
