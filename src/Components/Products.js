import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [product, setProduct] = useState();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProduct(response.data.products);
      })
      .catch((error) => {
        console.error();
      });
  }, []);
  if (!product) return null;

  return (
    <>
      {" "}
      <Link to={"/"}>
        <button className="back">Back</button>
      </Link>
      <div className="all-product">
        {product.map((products) => {
          return (
            <div key={products.id} className="product-cart">
              <h2>{products.title}</h2>
              <div className="product-img">
                {" "}
                <img src={products.thumbnail} className="thumbnail" />
              </div>
              <p>Description{products.description}</p>
              <p className="price">
                <b>Price{products.price} € </b>
              </p>

              <Link to={`/productlink/${products.id}`}>View more....</Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
