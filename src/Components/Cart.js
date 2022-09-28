import axios from "axios";
import React, { useState, useEffect } from "react";

const Cart = () => {
  const [cartlist, setCartlist] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/carts")
      .then((responses) => {
        setCartlist(responses.data.carts);
        console.log(cartlist);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!cartlist) return null;
  return(
    <div className="card">
      {cartlist.map((card)=>{
        return(
          <div key={card.id} className="cardd">
            <h1>{card.id}</h1>
            {
              card.products.map((products)=>{
                return(
                <div key={products.id} className="card1">
                  <p><b>Title:</b>{products.title}</p>
                  <p><b>Price:</b>{products.price}</p>
                </div>
                )
              })
            }
          </div>
        )
      })}
    </div>
  )
       
};

export default Cart;
