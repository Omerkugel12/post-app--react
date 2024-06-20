import React from "react";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <>
      <li>
        <div>
          <p>title: {post.title}</p>
          <p>post: {post.body}</p>
          {post.comments.length !== 0 ? (
            <ul>
              comments:
              {post.comments.map((comment) => {
                return <li key={comment.content}>{comment.content}</li>;
              })}
            </ul>
          ) : (
            <p>No comments yet</p>
          )}

          <p>likes: {post.reactions.likes}</p>
          <p>created at: {post.createdAt}</p>
          <p>updated at: {post.updatedAt}</p>
          <Link to={post.id}>
            <button>More details</button>
          </Link>
        </div>
      </li>
    </>
  );
}

export default PostItem;
