import React, { useState, useContext } from "react";
import Modal from "../UI/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import BlogsContext from "../../Store/blogs-context";

const BlogForm = (props) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState(new Date());
  const [text, setText] = useState("");

  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };

  const dateInputHandler = (event) => {
    setDate(new Date(event.target.value).toLocaleDateString());
  };
  const textInputHandler = (event) => {
    setText(event.target.value);
  };

  const BlogsCtx = useContext(BlogsContext)

  const submitHandler = (event) => {
    event.preventDefault();
    BlogsCtx.onAddBlog(title, date, text)
    props.onHideBlogForm();
  };

  return (
    <Modal onHide={props.onHideBlogForm}>
      <Form onSubmit={submitHandler}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={titleInputHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="date"
            placeholder="Date"
            onChange={dateInputHandler}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Text</Form.Label>
          <Form.Control as="textarea" rows={5} onChange={textInputHandler} />
        </Form.Group>

        <Button variant="outline-primary" type="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default BlogForm;
