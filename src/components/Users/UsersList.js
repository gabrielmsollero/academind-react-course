import Card from "../UI/Card";

import styles from "./UsersList.module.css";

function UsersList({ users }) {
  return (
    <Card className={styles.users}>
      <ul>
        {users.map((user) => {
          return (
            <li key={user.key}>
              {user.name} ({user.age} years old)
            </li>
          );
        })}
      </ul>
    </Card>
  );
}

export default UsersList;
