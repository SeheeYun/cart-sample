import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Item } from '../../store/store';

type Props = {
  item: Item;
  deleteCartItem: (item: Item) => void;
};

function ServiceItem({ item, deleteCartItem }: Props) {
  const onClick = () => {
    deleteCartItem(item);
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__text}>
        <p>{item.name}</p>
        {item.price && <p className={styles.item__price}>{item.price}원</p>}
        {item.rate && <p className={styles.item__rate}>{item.rate}%</p>}
      </div>
      <div>
        <button className={styles.item__delete} onClick={onClick}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={styles.item__counter}>
          <button className={styles.item__decrement}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            className={styles.item__count}
            type="text"
            value={item.count}
            readOnly
          />
          <button className={styles.item__increment}>
            <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default ServiceItem;
