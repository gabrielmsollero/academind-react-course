import { useContext } from "react";
import TodoItem from "./TodoItem";

import { TodosContext } from "../store/todos-context";

import classes from "./Todos.module.css";

export default function Todos() {
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <TodoItem key={item.id} text={item.text} onClick={todosCtx.removeTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
}
