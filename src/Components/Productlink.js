import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Products from "./Products";

const Productlink = ({ product }) => {
  let { id } = useParams();
  let location = useLocation();

  const [productlist, setProductlist] = useState();
  // console.log(useParams());
  // console.log("location", location);
  const apicall = () => {
    axios.get(`https://dummyjson.com/products/${id}`).then((data) => {
      setProductlist(data.data);
    });
  };

  useEffect(() => {
    apicall();
  }, []);

  if (!productlist) return null;
  // const   { images, price, thumbnail, title } = productlist;
  return (
    <div key={productlist.title}>
      <div className="productlink">
        <h2>Title:{productlist.title}</h2>
        <p>Description:{productlist.discription}</p>
        <span>
          <b>Price{productlist.price} € </b>
        </span>
      </div>
      {productlist.images.map((image, index) => {
        return (
          
            <div key={image}>
              <img src={image} key={index} alt="product" />
            </div>
          
        );
      })}
    </div>
  );
};

export default Productlink;
