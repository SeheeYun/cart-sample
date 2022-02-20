import styles from './item.module.css';
import { Item } from '../../store/store';

type Props = {
  item: Item;
  checked: boolean;
  handleChecked: (checked: boolean, item: Item) => void;
};

function MenuItem({ item, checked, handleChecked }: Props) {
  const { name, price, rate } = item;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChecked(e.target.checked, item);
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
          {price && (
            <p className={styles.item__price}>{price.toLocaleString()}원</p>
          )}
          {rate && <p className={styles.item__rate}>{rate}%</p>}
        </div>
      </label>
    </li>
  );
}

export default MenuItem;
