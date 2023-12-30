import Todo from "../models/todo";

type Props = {
  items: Todo[];
};

export default function Todos({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
}
