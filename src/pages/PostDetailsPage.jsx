import React, { useState } from "react";
import { useParams } from "react-router";
import useFetch from "../hooks/useFetch";
import PostsList from "../components/PostsList";
import PostItem from "../components/PostItem";

const POST_URL = "http://localhost:8001/posts";

function PostDetailsPage() {
  const { postId } = useParams();
  // const [post,setPost] = useState({})

  // useEffect(()=>{
  //   async function getPost() {

  //   }
  // })

  // return (
  //   <>

  //   </>
  // )

  const { data, error, loading, setData } = useFetch(`${POST_URL}/${postId}`);
  console.log("data", data);
  console.log("data.comments", data.comments);
  console.log("data.reactions.likes", data.reactions);
  console.log("data.title", data.title);
  return (
    <div>
      <p>title: {data.title}</p>
      <p>data: {data.body}</p>
      <p>comments: {data.comments}</p>
      {/* {data.comments.length === 0 ? (
        <p>No comments yet</p>
      ) : (
        <ul>
          comments:
          {data.comments.map((comment) => {
            return <li key={comment.content}>{comment.content}</li>;
          })}
        </ul>
      )} */}
      {/* {data.comments.length !== 0 ? (
              <ul>
                comments:
                {data.comments.map((comment) => {
                  return <li key={comment.content}>{comment.content}</li>;
                })}
              </ul>
            ) : null} */}

      {/* <p>likes: {data.reactions.likes}</p> */}
      <p>created at: {data.createdAt}</p>
      <p>updated at: {data.updatedAt}</p>
      <p>User id: {data.userId}</p>
    </div>
  );
}

export default PostDetailsPage;
