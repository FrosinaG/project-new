import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserPagination = () => {
  const [userPag, setUserPag] = useState();

  axios.get("https://reqres.in/api/users?page=1").then((response) => {
    setUserPag(response.data);
    // console.log(response.data);
  });
  if (!userPag) return null;
  const { data, id, email, first_name, last_name, avatar } = userPag;
  return (
    <div className="pagcard"key={id}>
      {data.map((items) => {
        // console.log(items);
        return (
          
          <div className="pagcard1" key={items.id}>
          <div className="usep-text">
        
            <h4> Firste Name: {items.first_name}</h4>
            <h4> Last Name: {items.last_name}</h4>
            <h4> Email: {items.email}</h4></div>
            <div className="usep-img">
              <img src={items.avatar} alt={items.first_name} />
            </div></div>
            // <Link to={`/pag/${items.id}`} className="view-pag">
            //         View more about<b>{items.first_name}</b>
            //       </Link>
                  

         
        );
      })}
    </div>
  );
};

export default UserPagination;
