import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PostFeedPage from "./pages/PostFeedPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import CreatePostPage from "./pages/CreatePostPage";
import UserProfilePage from "./pages/UserProfilePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="posts">
          <Route index element={<PostFeedPage />} />
          <Route path=":postId" element={<PostDetailsPage />} />
          <Route path="create" element={<CreatePostPage />} />
        </Route>
        {/* <Route path="/user" element={<UserProfilePage />} /> */}
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
