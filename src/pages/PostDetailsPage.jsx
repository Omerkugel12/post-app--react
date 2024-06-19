import React from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";

const POST_URL = "http://localhost:8001/posts";

function PostDetailsPage() {
  const postId = useParams();
  const { data, error, loading, setData } = useFetch(`${POST_URL}/${postId}`);
  return <div>PostDetailsPage</div>;
}

export default PostDetailsPage;
