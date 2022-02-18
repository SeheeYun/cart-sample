import styles from './item.module.css';
import { Item } from '../../store/store';

type Props = {
  item: Item;
  addCheckedItem: (item: Item) => void;
  deleteCheckedItem: (item: Item) => void;
};

function MenuItem({ item, addCheckedItem, deleteCheckedItem }: Props) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? addCheckedItem(item) : deleteCheckedItem(item);
  };

  return (
    <li className={styles.item}>
      <label className={styles.item_label}>
        <input
          type="checkbox"
          defaultChecked={item.checked}
          onChange={e => {
            onChange(e);
          }}
        />
        <div className={styles.item__text}>
          <p>{item.name}</p>
          {item.price && <p className={styles.item__price}>{item.price}원</p>}
          {item.rate && <p className={styles.item__rate}>{item.rate}%</p>}
        </div>
      </label>
    </li>
  );
}

export default MenuItem;
