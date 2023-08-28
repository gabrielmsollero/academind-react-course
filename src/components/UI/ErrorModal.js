import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

function ErrorModal(props) {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.onDismissed}></div>
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
    </div>
  );
}

export default ErrorModal;
