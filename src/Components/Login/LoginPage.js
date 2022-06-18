import React from "react";
import Modal from "../UI/Modal";
import CloseButton from "react-bootstrap/CloseButton";
import Classes from "./Login.module.css"
import LoginForm from "./LoginForm";

const LoginPage = (props) => {
  return (
    <Modal onHide={props.onHideLogin}>
      <CloseButton className={Classes.close} onClick={props.onHideLogin} />
      <LoginForm onHideLogin={props.onHideLogin}/>
    </Modal>
  );
};

export default LoginPage;
