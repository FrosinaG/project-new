import axios from "axios";
import React, { useState, useEffect } from "react";


const Posts = () => {
  const [postlist, setPosts] = useState();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/posts")
      .then((response) => {
        setPosts(response.data);
        // console.log(response.data);
      })
      .catch((error) => {
        console.error();
      });
  }, []);
  if (!postlist) return null;
  // console.log(postlist);
  const { id, posts, title, body } = postlist;
  return (
    <div>
      {posts.map((data) => {
        // console.log(data);
        return (
          <div key={data.id}>
            <div key={id} className="postlist">
              <h2>{data.title}</h2>
              <p>{data.body}</p>
            </div>
          </div>
        );
      })}
    
    </div>
  );
};

export default Posts;
