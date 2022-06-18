import ReactDom from "react-dom";
import styles from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onHide}></div>;
};

const ModalOverlay = (props) => {
  // console.log(props.children)

  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {

  
  return (
    <>
      {ReactDom.createPortal(<Backdrop onHide={props.onHide}/>, portalElement)}
      {ReactDom.createPortal(
        <ModalOverlay >{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;