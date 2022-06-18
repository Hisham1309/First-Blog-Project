import React, { useContext } from "react";
import Card from "../UI/Card";
import Classes from "./Blogs.module.css";
import { Button } from "react-bootstrap";
import AuthContext from "../../Store/auth-context";
import Blog from "./Blog";
import BlogsContext from "../../Store/blogs-context";

const Blogs = (props) => {
  const blogsCtx = useContext(BlogsContext);
  const authCtx = useContext(AuthContext);

  const blogList = blogsCtx.Blogs.map((blog) => (
    <li key={blog.id}>
      <Blog id={blog.id} title={blog.title} date={blog.date} text={blog.text} onDeleteBlog={blogsCtx.onDeleteBlog}/>
    </li>
  ));

  return (
    <Card className={Classes.Blogs}>
      {authCtx.isLoggedIn && (
        <>
          <Button className={Classes.Button} onClick={props.onShowBlogForm} >
            Add Blog
          </Button>{" "}
          <hr />
        </>
      )}
      <ul>{blogList}</ul>
    </Card>
  );
};

export default Blogs;
