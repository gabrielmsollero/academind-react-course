import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

import styles from './AddUser.module.css'

function AddUser() {
  return (
    <div>  
      <ErrorModal/>
      <Card className={styles.input}>
        <p>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            id="name"
            value={null}
            onChange={null}
          />
        </p>
        <p>
          <label htmlFor="age">Age (Years)</label>
          <input
            type="number"
            min="0"
            id="age"
            value={null}
            onChange={null}
          />
        </p>
        <Button>Add User</Button>
      </Card>
    </div>
  );
}

export default AddUser;
