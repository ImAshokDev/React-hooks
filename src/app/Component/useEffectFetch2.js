import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useEffectFetch2() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("res...2", res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("errrr", err);
      });
  }, [id]);

  return (
    <div>
      <h1>Data Fetching 2</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      {post && <p>{post.title}</p>}
    </div>
  );
}
