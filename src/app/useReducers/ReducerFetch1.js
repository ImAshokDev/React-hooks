import axios from "axios";
import React, { useEffect, useState } from "react";

function ReducerFetch1() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [post, setPost] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((res) => {
        setLoading(false);
        setPost(res.data);
        setError("");
      })
      .catch((err) => {
        setError("Something went wrong!");
        setLoading(false);
        setPost({});
      });
  }, []);

  return (
    <div>
      {loading ? <p>Loading...</p> : null}
      {error ? <p>{error}</p> : null}
      {post ? <p>{post.title}</p> : null}
    </div>
  );
}

export default ReducerFetch1;
