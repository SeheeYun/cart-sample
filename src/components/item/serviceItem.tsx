import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Item } from '../../store/store';

type Props = {
  item: Item;
  deleteCartItem: (item: Item) => void;
  increase: (item: Item) => void;
  decrease: (item: Item) => void;
};

function ServiceItem({ item, deleteCartItem, increase, decrease }: Props) {
  const { name, total, count } = item;
  const onDelete = () => {
    deleteCartItem(item);
  };

  const onIncrease = () => {
    increase(item);
  };
  const onDecrease = () => {
    decrease(item);
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__text}>
        <p>{name}</p>
        <p className={styles.item__price}>{total}원</p>
      </div>
      <div>
        <button className={styles.item__delete} onClick={onDelete}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={styles.item__counter}>
          <button className={styles.item__decrement} onClick={onDecrease}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            className={styles.item__count}
            type="text"
            value={count}
            readOnly
          />
          <button className={styles.item__increment} onClick={onIncrease}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ServiceItem;
