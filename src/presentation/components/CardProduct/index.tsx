import Product from "../../../@types/Product";
import IcoCart from "../../assets/shopping-cart.svg";
import { useCart } from "../../hooks/useCart";

import { BtnAddToCart, Container, Description } from "./styles";

export function CardProduct(Product: Product) {
  const contextCart = useCart();

  const accountItemsInTheCart = () => {
    const account =
      contextCart.cart.items.filter((item) => item.id === Product.id).length ||
      0;

    return account;
  };

  return (
    <Container>
      <Description>
        <img src={Product.image} alt={Product.title} />
        <span>{Product.title}</span>
        <p>
          {Product.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </Description>
      <BtnAddToCart
        onClick={() => contextCart.addToCart(Product)}
        status={accountItemsInTheCart() > 0 ? "#039B00" : "#009EDD"}
      >
        <div>
          <img src={IcoCart} height={15} width={15} />
          <span>{accountItemsInTheCart()}</span>
        </div>
        {accountItemsInTheCart() > 0
          ? "ITEM ADICIONADO"
          : "ADICIONAR AO CARRINHO"}
      </BtnAddToCart>
    </Container>
  );
}
