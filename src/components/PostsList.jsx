import React from "react";
import PostItem from "./PostItem";

function PostsList({ data }) {
  return (
    <>
      <ul className="post-list">
        {data.map((post) => {
          return <PostItem key={post.id} post={post} />;
        })}
      </ul>
    </>
  );
}

export default PostsList;
