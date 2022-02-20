import styles from './modal.module.css';
import { Item, Items } from '../../store/store';
import MenuItem from '../item/menuItem';

type Props = {
  item: Item;
  items: Items;
  toggleModal: () => void;
  handleChecked: (checked: boolean, item: Item) => void;
  onDoneClick: () => void;
};

function DiscountModal({
  item,
  items,
  toggleModal,
  onDoneClick,
  handleChecked,
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
          {Object.keys(items)
            .filter(key => key[0] === 'i')
            .map(key => (
              <MenuItem
                key={key}
                item={items[key]}
                checked={!item.excluded.includes(key)}
                handleChecked={handleChecked}
              />
            ))}
        </ul>
        <button onClick={onClick}>확인</button>
      </div>
    </div>
  );
}
export default DiscountModal;
