import React from "react";
import Todo from "../models/todo";
import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";

type Props = {
  items: Todo[];
  onRemoveTodo: (id: string) => void;
};

export default function Todos({ items, onRemoveTodo }: Props) {
  return (
    <ul className={classes.todos}>
      {items.map((item) => (
        <TodoItem key={item.id} text={item.text} onClick={onRemoveTodo.bind(null, item.id)}/>
      ))}
    </ul>
  );
}
