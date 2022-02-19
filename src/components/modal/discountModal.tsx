import styles from './modal.module.css';
import { Item, Items } from '../../store/store';
import MenuItem from '../item/menuItem';

type Props = {
  item: Item;
  cartItems: Items;
  toggleModal: () => void;
  addExcluded: (item: Item) => void;
  deleteExcluded: (item: Item) => void;
  onDoneClick: () => void;
};

function DiscountModal({
  item,
  cartItems,
  toggleModal,
  addExcluded,
  deleteExcluded,
  onDoneClick,
}: Props) {
  const onClick = () => {
    onDoneClick();
    toggleModal();
  };

  return (
    <div className={styles.modal__bg}>
      <div className={styles.modal}>
        <p>{item.name}</p>
        <ul>
          {Object.keys(cartItems)
            .filter(key => key[0] === 'i')
            .map(key => (
              <MenuItem
                key={key}
                item={cartItems[key]}
                checked={!item.excluded.includes(key)}
                onChecked={deleteExcluded}
                offChecked={addExcluded}
              />
            ))}
        </ul>
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
}
export default DiscountModal;
