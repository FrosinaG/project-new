import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

const Pagination = ({id}) => {

  const [userPage, setUserPage] = useState([]);
  const [pages, setPages] = useState(1);
  const url = `https://reqres.in/api/users?page=${pages}`;
  const { data } = useFetch(url);

  const page = Array.from({ length: data?.total_pages }, (_, i) => i + 1);

  useEffect(() => {
    if (data) setUserPage(data);
  }, [data]);
  if (!userPage || !data) return null;

  return (
    <div className="pagcard" key={id}>
      {data.data.map((page) => {
        const { id, email, first_name, last_name, avatar } = page;
        return (
          <div className="pagcard1" key={id}>
            <div className="usep-text">
              <h4> First Name: {first_name}</h4>
              <h4> Last Name: {last_name}</h4>
              <h4> Email: {email}</h4>
            </div>
            <div className="usep-img">
              <img src={avatar} alt={first_name} />
            </div>{" "}
          </div>
        );
      })}

      {page.map((item) => {
        console.log(item);
        return (
          <div className="page-number">
            <button className="btn" onClick={() => setPages(item)}>
              {item}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
