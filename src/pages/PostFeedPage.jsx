import React from "react";
import useFetch from "/src/hooks/useFetch";
import PostsList from "../components/PostsList";

const POST_URL = "http://localhost:8001/posts/";

function PostFeedPage() {
  const { data, error, loading, setData } = useFetch(POST_URL);
  //   console.log(data);
  return (
    <div>
      <h1>Posts</h1>
      <PostsList data={data} />
    </div>
  );
}

export default PostFeedPage;
