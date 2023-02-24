import { useContext, useEffect } from "react";
import { ProductList } from "../../components/ProductList";
import { CartContext } from "../../context/CartContext";
import { StylesShop } from "./style";
import { Header } from "../../components/Header";
import { Cart } from "../../components/Cart";
import { api } from "../../services/api";

interface iProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  product: iProduct;
}

export const ShopPage = () => {
  const { products, filterProducts, cartModal, setProducts } =
    useContext(CartContext);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const token = localStorage.getItem("@token") || "";
        const { data } = await api.get<iProduct[]>("/products", {
          headers: {
            Authorization: `Bearer ${JSON.parse(token)}`,
          },
        });
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <StylesShop>
      {cartModal && <Cart />}
      <Header />
      <main className="container">
        <ul>
          {products &&
            filterProducts?.map((product, index) => (
              <ProductList
                key={index}
                img={product.img}
                name={product.name}
                price={product.price}
                category={product.category}
                product={product}
                id={product.id}
              />
            ))}
        </ul>
      </main>
    </StylesShop>
  );
};
