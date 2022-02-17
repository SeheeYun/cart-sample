import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPlus } from '@fortawesome/free-solid-svg-icons';
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
        <p>시술명</p>
        <p>20,000원</p>
      </div>
      <div>
        <button className={styles.item__delete}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <div className={styles.item__counter}>
          <button className={styles.item__decrement}>
            <FontAwesomeIcon icon={faPlus} />
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
