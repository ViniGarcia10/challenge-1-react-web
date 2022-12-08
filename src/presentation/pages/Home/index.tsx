import { useEffect, useState } from "react";
import Product from "../../../@types/Product";
import MovieHttpService from "../../../infrastructure/services/MovieService";
import { CardProduct } from "../../components/CardProduct";
import { Header } from "../../components/Header";
import { Spinner } from "../../components/Spinner";

import { Container, ListProductsStyle } from "./styles";

export function Home() {
  const [Loading, setLoading] = useState(true);
  const [ListProducts, setListProducts] = useState<Product[]>([]);

  async function getProducts() {
    setLoading(true);

    try {
      const response = await MovieHttpService.list();
      setListProducts(response.data);
    } catch (error) {
      alert("Ops! Houve algum problema, tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Container>
      <Header />
      {(Loading && <Spinner />) || (
        <ListProductsStyle>
          {ListProducts.map((item) => (
            <CardProduct
              key={item.id}
              image={item.image}
              quantity={item.quantity}
              id={item.id}
              price={item.price}
              title={item.title}
            />
          ))}
        </ListProductsStyle>
      )}
    </Container>
  );
}
