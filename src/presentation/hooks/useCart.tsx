import { useContext, useState } from "react";
import Cart from "../../@types/Cart";
import Product from "../../@types/Product";
import CartContext from "../context/CartContext";

interface CartContextProviderProps {
  children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, setCartState] = useState<Cart>({ items: [] });

  function addToCart(ProdItem: Product) {
    const VerifyExists = cartState.items.some(
      (item) => item.id === ProdItem.id
    );

    if (!VerifyExists) {
      let ListProductsFilter = [];

      ListProductsFilter.push(...cartState.items, { ...ProdItem, quantity: 1 });

      ListProductsFilter.sort(function (a, b) {
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      });

      setCartState({
        items: ListProductsFilter,
      });
    } else {
      removeFromCart(ProdItem);
    }

    return;
  }

  function removeFromCart(ProdItem: Product) {
    const newListProd = cartState.items.filter(
      (prod) => prod.id !== ProdItem.id
    );

    setCartState({ items: newListProd });
  }

  function increment(ProdItem: Product) {
    const ListProductsUpdate = cartState.items.filter(
      (prod) => prod.id !== ProdItem.id
    );

    ListProductsUpdate.push({ ...ProdItem, quantity: ProdItem.quantity + 1 });

    ListProductsUpdate.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });

    setCartState({
      items: ListProductsUpdate,
    });
  }

  function decrement(ProdItem: Product) {
    const newListProd = cartState.items.filter(
      (prod) => prod.id !== ProdItem.id
    );

    if (ProdItem.quantity <= 1) {
      removeFromCart(ProdItem);
      return;
    }

    let ListProductsFilter = [
      ...newListProd,
      { ...ProdItem, quantity: ProdItem.quantity - 1 },
    ];

    ListProductsFilter.sort(function (a, b) {
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });

    setCartState({
      items: ListProductsFilter,
    });
  }

  function resetCart() {
    setCartState({
      items: [],
    });
  }

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
