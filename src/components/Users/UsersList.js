import Card from '../UI/Card';

import styles from './UsersList.module.css'

function UsersList() {
  return (
    <Card className={styles.users}>
      <ul>
        <li>Testing 123</li>
        <li>Testing 123</li>
      </ul>
    </Card>
  );
}

export default UsersList;