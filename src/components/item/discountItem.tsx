import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Item } from '../../store/store';

type Props = {
  item: Item;
  deleteCartItem: (item: Item) => void;
};

function DiscountItem({ item, deleteCartItem }: Props) {
  const onDelete = () => {
    deleteCartItem(item);
  };

  return (
    <li className={styles.item}>
      <div className={styles.item__text}>
        <p>{item.name}</p>
        <p className={styles.item__rate}>{item.rate}%</p>
      </div>
      <div>
        <button className={styles.item__delete} onClick={onDelete}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button className={styles.item__edit}>수정</button>
      </div>
    </li>
  );
}

export default DiscountItem;