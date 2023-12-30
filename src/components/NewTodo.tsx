import { useContext, useRef } from "react";

import { TodosContext } from "../store/todos-context";

import classes from "./NewTodo.module.css";

export default function NewTodo() {
  const todosCtx = useContext(TodosContext);

  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    todosCtx.addTodo(enteredText);
  }
  
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}
