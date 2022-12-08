import { NavLink } from "react-router-dom";
import Product from "../../../@types/Product";
import IconMin from "../../assets/minus.svg";
import IconMax from "../../assets/plus.svg";
import IconTrash from "../../assets/trash.svg";
import { useCart } from "../../hooks/useCart";

import {
  BarAccount,
  BarCheckout,
  Container,
  ImageProd,
  TableCheckout
} from "./styles";

export function CartCheckout() {
  const contextCart = useCart();

  const SomeSubTotalBuy = (prod: Product) => {
    let accountProd = prod.price * prod.quantity || 0;

    return accountProd.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  const SomeTotalBuy = () => {
    let totalPrice = 0;

    for (let index = 0; index < contextCart.cart.items.length; index++) {
      totalPrice +=
        contextCart.cart.items[index].price *
        contextCart.cart.items[index].quantity;
    }

    return totalPrice.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <Container>
      <TableCheckout>
        <thead>
          <tr>
            <th>PRODUTO</th>
            <th></th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contextCart.cart.items.map((prod: Product) => (
            <tr key={prod.id}>
              <td>
                <ImageProd src={prod.image} alt={prod.title} />
              </td>
              <td>
                <ul>
                  <li>{prod.title}</li>
                  <li>
                    {prod.price.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </li>
                </ul>
              </td>
              <td>
                <BarAccount>
                  <button onClick={() => contextCart.decrement(prod)}>
                    <img src={IconMin} />
                  </button>
                  <input type="text" value={prod.quantity} disabled size={5} />
                  <button onClick={() => contextCart.increment(prod)}>
                    <img src={IconMax} />
                  </button>
                </BarAccount>
              </td>
              <td>{SomeSubTotalBuy(prod)}</td>
              <td>
                <button onClick={() => contextCart.removeFromCart(prod)}>
                  <img src={IconTrash} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </TableCheckout>
      <hr />
      <BarCheckout>
        <NavLink
          onClick={() => contextCart.resetCart()}
          to="/sucesso"
          title="Página Inicial"
          end
        >
          <button>FINALIZAR PEDIDO</button>
        </NavLink>
        <div>
          <span>TOTAL</span>
          <p>{SomeTotalBuy()}</p>
        </div>
      </BarCheckout>
    </Container>
  );
}
