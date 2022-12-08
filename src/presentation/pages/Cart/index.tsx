import { CartCheckout } from "../../components/CartCheckout";
import { CartEmpty } from "../../components/CartEmpty";
import { Header } from "../../components/Header";
import { useCart } from "../../hooks/useCart";

import { Container } from "./styles";

export function Cart() {
  const contextCart = useCart();
  return (
    <Container>
      <Header />
      {!!!contextCart.cart.items.length ? <CartEmpty /> : <CartCheckout />}
    </Container>
  );
}
