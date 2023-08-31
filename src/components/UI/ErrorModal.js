import ReactDOM from "react-dom";

import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onDismissed}></div>;
}

function ModalOverlay(props) {
  return (
    <Card className={styles.modal}>
      <header className={styles.header}>
        <h2>Something went wrong!</h2>
      </header>
      <div className={styles.content}>
        <p>{props.msg}</p>
      </div>
      <footer class={styles.actions}>
        <Button onClick={props.onDismissed}>Okay</Button>
      </footer>
    </Card>
  );
}

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onDismissed} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay msg={props.msg} onDismissed={props.onDismissed} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
