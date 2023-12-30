type Props = {
  items: string[];
};

export default function Todos({ items }: Props) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
