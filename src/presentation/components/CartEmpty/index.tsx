import { NavLink } from "react-router-dom";
import { Container } from "./styles";

import EmptyImg from "../../assets/empty-cart.png";

export function CartEmpty() {
  return (
    <Container>
      <h1>Parece que não há nada por aqui :(</h1>
      <img src={EmptyImg} alt="Carrinho Vázio" />
      <hr />
      <NavLink to="/" title="Página Inicial" end>
        <button>VOLTAR</button>
      </NavLink>
    </Container>
  );
}
