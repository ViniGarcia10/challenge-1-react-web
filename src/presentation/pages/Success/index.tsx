import { CartSuccess } from "../../components/CartSuccess";
import { Header } from "../../components/Header";

import { Container } from "./styles";

export function Success() {
  return (
    <Container>
      <Header />
      <CartSuccess />
    </Container>
  );
}
