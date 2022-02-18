import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Item, useStore } from '../../store/store';

type Props = {
  item: Item;
};

function ItemComponent({ item }: Props) {
  const { addCheckedItem, deleteCheckedItem } = useStore();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.checked ? addCheckedItem(item) : deleteCheckedItem(item);
  };

  return (
    <li className={styles.item}>
      <label>
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

export default ItemComponent;
