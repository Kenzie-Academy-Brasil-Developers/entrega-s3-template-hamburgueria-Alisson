import { useEffect, useState } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";
import { api } from "../../Services/api";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);
   const [open, setOpen] = useState(false);
   const saveList = JSON.parse(localStorage.getItem("@cart"))
   const getProducts = async () => {
      try {
         const { data } = await api.get("/products")
         setProductList(data)
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      getProducts()
      if (saveList !== null) {
         setCartList(saveList)
      }
   }, [])

   useEffect(() => {
      localStorage.setItem("@cart", JSON.stringify(cartList))
   }, [cartList])


   return (
      <>
         <Header setOpen={setOpen} productList={productList} setProductList={setProductList} getProducts={getProducts} cartList={cartList}/>
       <main>
            <ProductList productList={productList} setCartList={setCartList} cartList={cartList}/>
            <CartModal cartList={cartList} open={open} setOpen={setOpen} setCartList={setCartList}/>
       </main>
      </>
   );
};
