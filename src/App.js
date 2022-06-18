import React, { useState } from "react";
import Header from "./Layout/Header";
import LoginPage from "./Components/Login/LoginPage";
import Blogs from "./Components/Blogs/Blogs";
import BlogForm from "./Components/Blogs/BlogForm";
import BlogsProvider from "./Store/BlogsProvider";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  const showLoginHandler = () => {
    setShowLogin(true);
  };

  const hideLoginHandler = () => {
    setShowLogin(false);
  };

  const [showBlogForm, setShowBlogForm] = useState(false);

  const showBlogFormHandler = () => {
    setShowBlogForm(true);
  };

  const hideBlogFormHandler = () => {
    setShowBlogForm(false);
  };

  return (
    <>
      {showLogin && <LoginPage onHideLogin={hideLoginHandler} />}
      <Header onShowLogin={showLoginHandler} />
      <BlogsProvider>
        {showBlogForm && <BlogForm onHideBlogForm={hideBlogFormHandler} />}
        <Blogs
          onShowBlogForm={showBlogFormHandler}
          onHideBlogForm={hideBlogFormHandler}
        />
      </BlogsProvider>
    </>
  );
};

export default App;
