import { NavLink } from "react-router-dom";
import { Container } from "./styles";

import SuccessImg from "../../assets/success.png";

export function CartSuccess() {
  return (
    <Container>
      <h1>Compra realizada com successo!</h1>
      <img src={SuccessImg} alt="Carrinho Vázio" />
      <hr />
      <NavLink to="/" title="Página Inicial" end>
        <button>VOLTAR</button>
      </NavLink>
    </Container>
  );
}
