import React from "react";
import classes from "./TodoItem.module.css";

type Props = {
  text: string;
  onClick: () => void
};

export default function TodoItem({ text, onClick }: Props) {
  return <li className={classes.item} onClick={onClick}>{text}</li>;
}
