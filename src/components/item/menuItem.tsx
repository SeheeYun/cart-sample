import styles from './item.module.css';
import { Item } from '../../store/store';

type Props = {
  item: Item;
  checked: boolean;
  onChecked: (item: Item) => void;
  offChecked: (item: Item) => void;
};

function MenuItem({ item, checked, onChecked, offChecked }: Props) {
  const { name, price, rate } = item;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? onChecked(item) : offChecked(item);
  };

  return (
    <li className={styles.item}>
      <label className={styles.item_label}>
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={e => {
            onChange(e);
          }}
        />
        <div className={styles.item__text}>
          <p>{name}</p>
          {price && <p className={styles.item__price}>{price}원</p>}
          {rate && <p className={styles.item__rate}>{rate}%</p>}
        </div>
      </label>
    </li>
  );
}

export default MenuItem;
