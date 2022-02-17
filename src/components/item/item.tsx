import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';

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
    <li className={styles.item}>
      <div className={styles.item__text}>
        <p>{name}</p>
        <p>{price}원</p>
      </div>
      <div>
        <button className={styles.item__delete}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={styles.item__counter}>
          <button className={styles.item__decrement}>
            <FontAwesomeIcon icon={faMinus} />
          </button>
          <input
            className={styles.item__count}
            type="text"
            value={count}
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

export default Item;
