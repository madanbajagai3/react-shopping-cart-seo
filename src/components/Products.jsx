import { useEffect, useState } from "react";
import ProductList from "./ProductList";
import "./Products.css";
import fetchProducts from "../store/fetchProducts";
import { Helmet } from "react-helmet-async";

const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProducts();
        setData(data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Products</title>
        <meta
          name="description"
          content="This is the homepage of shopping cart"
        />
        <meta name="keywords" content="HTML, CSS, JavaScript, e-commerce" />
        <meta name="author" content="Madan Bazgai" />
      </Helmet>
      <div className="products">
        {data.map((product) => (
          <ProductList key={product.id} {...product} />
        ))}
      </div>
    </>
  );
};

export default Products;
