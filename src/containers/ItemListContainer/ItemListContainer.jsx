import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import Api from "../../services/Api";
import { useParams } from "react-router-dom"; 

const ItemListContainer = ({ greeting, title, pag }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  
  const getProductsByCat = async (id) => {
    try {
      const result = await Api.get(`category/${id}`);
      const products = result.data;
      const prods = products.filter(p => p.category === id);
      console.log(prods);
      setProducts(prods);
    } catch { console.log("error"); } 
    finally { setLoading(false); }
  };

  const getProducts = async (id) => {
    try {
      const result = await Api.get();
      const products = result.data;
      console.log(products);
      setProducts(products);
    } catch { console.log("error"); } 
    finally { setLoading(false); }
  };

  useEffect(()=>{
    if (id) {
      getProductsByCat(id)
    } else {
      getProducts()
    }

  },[id])

   return (
    <>
      <div>
        <h1>{greeting}</h1>
        <h2>{title} {pag}</h2>      
      </div>
      {<>{loading ? <h4>Espera mientras cargamos tu informacion...</h4> : <ItemList products={products} />}</>}
    </>
  );
};
  
export default ItemListContainer;
