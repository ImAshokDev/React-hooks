import axios from "axios";
import React, { useEffect, useState } from "react";

export default function useEffectFetch3() {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(1);
  const [idFromBtnClick, setIdFromBtnClick] = useState(1);

  function getData() {
    setIdFromBtnClick(id);
  }

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idFromBtnClick}`)
      .then((res) => {
        console.log("res...2", res.data);
        setPost(res.data);
      })
      .catch((err) => {
        console.log("errrr", err);
      });
  }, [idFromBtnClick]);

  return (
    <div>
      <h1>Data Fetching 2</h1>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={getData}>
        Get Data
      </button>
      {post && <p>{post.title}</p>}
    </div>
  );
}
