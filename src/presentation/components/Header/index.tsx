import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

import CartImage from "../../assets/cart.svg";

import { Cart, HeaderContainer } from "./styles";

export function Header() {
  const contextCart = useCart();

  return (
    <HeaderContainer>
      <NavLink to="/" title="Página Inicial">
        <h1>We Movie</h1>
      </NavLink>

      <NavLink to="/carrinho" title="Carrinho">
        <Cart>
          <ul>
            <li>Meu Carrinho</li>
            <li>
              {contextCart.cart.items.length >= 99
                ? "+99"
                : contextCart.cart.items.length}{" "}
              itens
            </li>
          </ul>
          <img src={CartImage} alt="" />
        </Cart>
      </NavLink>
    </HeaderContainer>
  );
}
