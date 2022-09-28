import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import userData from "../hooks/useContextuser";

const Search = () => {
  const [searchlist, setSearchlist] = useState("");
  const url = "https://dummyjson.com/users";
  const { data } = userData(url);
  console.log(searchlist);

  // const searchuser = (users) => {
  //   return users.filter(
  //     (item) =>
  //       item.firstName.toLowerCase().includes(searchlist) ||
  //       item.lastName.toLowerCase().includes(searchlist) ||
  //       item.email.toLowerCase().includes(searchlist)
  //   );
  // };

  return (
    <>
      <div className="search">
        {" "}
        <input
          type="text"
          className="search-in"
          placeholder="Search...."
          onChange={(e) => setSearchlist(e.target.value)}
        />
      </div>
      <div className="user-search1">
        {/* <Users users={users} className="user-search" />{" "} */}
      </div>
    </>
  );
};

export default Search;
