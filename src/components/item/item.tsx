import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';

type Props = {
  item: ItemComponent;
  addCheckedItem: (item: ItemComponent) => void;
  deleteCheckedItem: (item: ItemComponent) => void;
};

export type ItemComponent = {
  id: string;
  checked: boolean;
  count: number;
  name: string;
  price: number;
};

function Item({ item, addCheckedItem, deleteCheckedItem }: Props) {
  const { count, name, price, checked } = item;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? addCheckedItem(item) : deleteCheckedItem(item);
  };

  return (
    <li className={styles.item}>
      <label>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={e => {
            onChange(e);
          }}
        />
        <div className={styles.item__text}>
          <p>{name}</p>
          <p>{price}원</p>
        </div>
      </label>
    </li>
  );
}

export default Item;
