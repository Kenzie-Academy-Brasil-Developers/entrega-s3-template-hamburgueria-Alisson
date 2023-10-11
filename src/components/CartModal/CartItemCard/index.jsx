import { MdDelete } from "react-icons/md";
import styles from "./styles.module.scss";

export const CartItemCard = ({ product, cartList, setCartList }) => {
   const removeItem = () => {
      const newCartList = cartList.filter(item => item.id !== product.id)
      setCartList(newCartList)
   }

   return (
      <li className={styles.li}>
         <div>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
         </div>
         <button onClick={() => removeItem()} className={styles.button} aria-label="delete" title="Remover item">
            <MdDelete size={21} className={styles.icon}/>
         </button>
      </li>
   );
};
