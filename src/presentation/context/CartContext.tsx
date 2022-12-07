import { createContext } from "react";
import Cart from "../../@types/Cart";

interface ContextData {
  cart: Cart;
  addToCart: () => void;
  removeFromCart: () => void;
  increment: () => void;
  decrement: () => void;
  resetCart: () => void;
}

const CartContext = createContext<ContextData>({} as ContextData);

export default CartContext;
