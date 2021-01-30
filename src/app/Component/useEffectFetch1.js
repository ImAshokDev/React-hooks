import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useEffectFetch1() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        // console.log("res...", res.data);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log("errrr", err);
      });
  }, []);

  return (
    <div>
      <h1>Data Fetching 1</h1>
      {posts &&
        posts.map((post, index) => {
          console.log(post);
          return <li key={post.id}>{post.title}</li>;
        })}
    </div>
  );
}
