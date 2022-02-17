type Props = {
  item: ItemComponent;
};

export type ItemComponent = {
  count: number;
  name: string;
  price: number;
};

function Item({ item }: Props) {
  const { count, name, price } = item;
  return (
    <li>
      {count}
      {name}
      {price}
    </li>
  );
}

export default Item;
