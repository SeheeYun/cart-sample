import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Item, useStore } from '../../store/store';
import { useEffect, useState } from 'react';
import DiscountModal from '../modal/discountModal';

type Props = {
  item: Item;
};

function DiscountItem({ item }: Props) {
  const { cartItems, deleteCartItem, setItemTotal, setExcludedItems } =
    useStore();
  const [isModal, setIsModal] = useState(false);
  const [excluded, setExcluded] = useState<string[]>([]);
  const { name, rate, id } = item;

  const total =
    Object.keys(cartItems)
      .filter(key => key[0] === 'i' && !item.excluded.includes(key))
      .map(key => {
        return cartItems[key].price * cartItems[key].count * rate;
      })
      .reduce((a, b) => a + b, 0) * -1;

  const onDelete = () => {
    deleteCartItem(item);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const addExcluded = (item: Item) => {
    setExcluded(keys => [...keys, item.id]);
  };
  const deleteExcluded = (item: Item) => {
    setExcluded(keys => keys.filter(key => key !== item.id));
  };

  const onDoneClick = () => {
    setExcludedItems(id, excluded);
  };

  useEffect(() => {
    setItemTotal(id, total);
  }, [total]);

  return (
    <li className={styles.item}>
      <div className={styles.item__text}>
        <p>{name}</p>
        <p></p>
        <p className={styles.item__rate}>
          {total}원 ({rate}%)
        </p>
      </div>
      <div>
        <button className={styles.item__delete} onClick={onDelete}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <button className={styles.item__edit} onClick={toggleModal}>
          수정
        </button>
      </div>
      {isModal && (
        <DiscountModal
          item={item}
          cartItems={cartItems}
          toggleModal={toggleModal}
          addExcluded={addExcluded}
          deleteExcluded={deleteExcluded}
          onDoneClick={onDoneClick}
        />
      )}
    </li>
  );
}

export default DiscountItem;
