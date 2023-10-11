import { toast } from "react-toastify";
import styles from "./styles.module.scss";

export const ProductCard = ({ product, productList, setCartList, cartList }) => {
    const addCartItem = () => {
        const product = productList.find(p => p.id === Number(event.target.id))
        const productFind = cartList.find(item => item.name === product.name)
        if (productFind !== undefined) {
            toast("Produto já adicionado")
        } else {
            setCartList([...cartList, product])
        }
    }

    return(
        <li className={styles.card}>
            <img src={product.img} alt={product.name} />
            <section>
                <div className={styles.infoDiv}>
                    <h3>{product.name}</h3>
                    <span className={styles.category}>{product.category}</span>
                </div>
                <div className={styles.buyDiv}>
                    <span className={styles.price}>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL"})}</span>
                    <button id={product.id} onClick={addCartItem}>Adicionar</button>
                </div>
            </section>
        </li>
    )
}