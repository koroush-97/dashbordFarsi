import React , {useEffect , useState}from "react";
import "./productes.css";
import AddNewProduct from "../AddNewProduct/AddNewProduct";
import ProductsTable from "../ProductsTable/ProductsTable";

export default function Productes() {
  const [allproducts, setAllproducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);



  const getAllProducts = () => {
    fetch("http://localhost:8000/api/products/")
      .then((res) => res.json())
      .then((products) => {
        console.log("محصولات به‌روزرسانی شده:", products);
        setAllproducts(products);
      });
  };
  


  return (
    <>
      <AddNewProduct getAllProducts={getAllProducts} />
      <ProductsTable allproducts={allproducts} getAllProducts={getAllProducts} />
    </>
  );
}
