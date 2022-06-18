import React from "react";

const BlogsContext = React.createContext({
  Blogs: [],
  onAddBlog: (title, date, text) => {},
  onDeleteBlog: (id) => {},
});

export default BlogsContext;
