import { useRef } from "react";

import classes from "./NewTodo.module.css";

type Props = {
  onAddTodo: (text: string) => void
}

export default function NewTodo({ onAddTodo }: Props) {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value

    if (enteredText.trim().length === 0) {
      // throw error
      return;
    }

    onAddTodo(enteredText);
  }
  
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
}
