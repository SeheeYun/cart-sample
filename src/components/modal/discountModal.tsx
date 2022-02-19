import styles from './modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { Item, Items } from '../../store/store';
import MenuItem from '../item/menuItem';

type Props = {
  name: string;
  cartItems: Items;
  toggleModal: () => void;
  addExcepted: (item: Item) => void;
  deleteExcepted: (item: Item) => void;
};

function DiscountModal({
  name,
  cartItems,
  toggleModal,
  addExcepted,
  deleteExcepted,
}: Props) {
  const offChecked = () => {};
  return (
    <div className={styles.modal__bg}>
      <div className={styles.modal}>
        <p>{name}</p>
        <button onClick={toggleModal}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul>
          {Object.keys(cartItems)
            .filter(key => key[0] === 'i')
            .map(key => (
              <MenuItem
                key={key}
                item={cartItems[key]}
                checked={true}
                onChecked={deleteExcepted}
                offChecked={addExcepted}
              />
            ))}
        </ul>
        <button>확인</button>
      </div>
    </div>
  );
}
export default DiscountModal;
