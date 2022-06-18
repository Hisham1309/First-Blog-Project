import React, { useReducer } from "react";
import BlogsContext from "./blogs-context";

const defaultBlogsState = [
  {
    id: 1,
    title: "Title",
    date: new Date("2022-05-23").toLocaleDateString(),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Title 1",
    date: new Date("2021-06-18").toLocaleDateString(),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Title 2",
    date: new Date("2020-05-1").toLocaleDateString(),
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const blogsReducer = (state, action) => {
  if (action.type === "ADD") {
    const addedBlog = {
      id: Math.random(),
      title: action.title,
      date: action.date,
      text: action.text,
    };

    let newBlogs = [...state, addedBlog];

    return newBlogs

  } else if (action.type === "DELETE"){

    return state.filter((blog) => blog.id !== action.id);
  }
};

const BlogsProvider = (props) => {
  const [blogsState, dispatchBlogs] = useReducer(
    blogsReducer,
    defaultBlogsState
  );


  return (
    <BlogsContext.Provider
      value={{
        Blogs: blogsState,
        onAddBlog: (title, date, text) => {
          dispatchBlogs({type:"ADD", title:title, date:date, text:text});
        },
        onDeleteBlog: (id) => {
          dispatchBlogs({type:"DELETE", id:id});
        },
      }}
    >
      {props.children}
    </BlogsContext.Provider>
  );
};

export default BlogsProvider;
