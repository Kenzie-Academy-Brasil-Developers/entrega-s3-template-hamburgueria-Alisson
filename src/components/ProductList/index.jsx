import { ProductCard } from "./ProductCard";
import styles from "./styles.module.scss";

export const ProductList = ({ productList, setCartList, cartList }) => {
   return (
      <ul className={styles.productList}>
         {productList.map((product) => (
            <ProductCard key={product.id} product={product} productList={productList} setCartList={setCartList} cartList={cartList}/>
         ))}
      </ul>
   );
};
