import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import useAxios from "../hooks/useFetch";
import PostsList from "../components/PostsList";
import PostItem from "../components/PostItem";
import axios from "axios";

const POST_URL = "http://localhost:8001/posts";

function PostDetailsPage() {
  const { postId } = useParams();
  const { data, error, loading } = useAxios(`${POST_URL}/${postId}`);
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;
  return (
    data && (
      <div>
        <p>title: {data.title}</p>
        <p>data: {data.body}</p>
        <p>comments: {data.comments}</p>
        {data.comments.length === 0 ? (
          <p>No comments yet</p>
        ) : (
          <ul>
            comments:
            {data.comments.map((comment) => {
              return <li key={comment.content}>{comment.content}</li>;
            })}
          </ul>
        )}
        <p>likes: {data.reactions.likes}</p>
        <p>created at: {data.createdAt}</p>
        <p>updated at: {data.updatedAt}</p>
        <p>User id: {data.userId}</p>
      </div>
    )
  );
}

export default PostDetailsPage;
