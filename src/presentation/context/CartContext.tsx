import { createContext } from "react";
import Cart from "../../@types/Cart";
import Product from "../../@types/Product";

interface ContextData {
  cart: Cart;
  addToCart: (Product: Product) => void;
  removeFromCart: (Product: Product) => void;
  increment: (Product: Product) => void;
  decrement: (Product: Product) => void;
  resetCart: () => void;
}

const CartContext = createContext<ContextData>({} as ContextData);

export default CartContext;
