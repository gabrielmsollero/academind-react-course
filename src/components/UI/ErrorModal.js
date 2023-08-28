import Button from "./Button";
import Card from "./Card";

import styles from "./ErrorModal.module.css";

function ErrorModal() {
  return (
    <div>
      <div className={styles.backdrop}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>Testing</h2>
        </header>
        <div className={styles.content}>
          <p>Testinggg</p>
        </div>
        <footer class={styles.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
