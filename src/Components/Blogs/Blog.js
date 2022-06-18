import Card from "../UI/Card";
import { CloseButton } from "react-bootstrap";
import { useContext } from "react";
import BlogsContext from "../../Store/blogs-context";
import Classes from "./Blog.module.css"
import AuthContext from "../../Store/auth-context";

const Blog = (props) => {
  //   console.log(props.id);
  const blogsCtx = useContext(BlogsContext);
  const authCtx = useContext(AuthContext)

  const onDeleteBlog = () => {
    blogsCtx.onDeleteBlog(props.id)
  }

  return (
    <Card>
      {authCtx.isLoggedIn && <CloseButton className={Classes.close} onClick={onDeleteBlog}/>}
      <h4>{props.title}</h4>
      <p>{props.date}</p>
      <p>{props.text}</p>
    </Card>
  );
};

export default Blog;
