import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import { toast } from "react-toastify";
import styles from "./styles.module.scss";

export const Header = ({ setOpen, productList, setProductList, getProducts, cartList }) => {
   const [value, setValue] = useState("");
   const findProducts = () => {
      event.preventDefault()
      const findedProducts = productList.filter(product => product.name.includes(value))
      if (findedProducts.length > 0) {
         setProductList(findedProducts) 
         setValue("")
      } else {
         toast("Nenhum produto encontrado")
         if (productList.length < 6) {
            getProducts()
            setValue("")
         }
      }
   }

   return (
      <header className={styles.header}>
         <img src={Logo} alt="Logo Kenzie Burguer" />
         <div>
            <button>
               <MdShoppingCart size={22} className={styles.cart} onClick={() => setOpen(true)}/>
             <span>{cartList.length}</span>
            </button>
            <form>
               <input
               type="text"
               value={value}
               placeholder="Digitar Pesquisa"
               onChange={(e) => setValue(e.target.value)}
            />
               <button type="submit" onClick={() => findProducts()}>
                  <MdSearch size={14} />
                </button>
            </form>
         </div>
      </header>
   );
};
