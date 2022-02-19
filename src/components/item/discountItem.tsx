import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Item, Items } from '../../store/store';
import { useEffect, useState } from 'react';
import DiscountModal from '../modal/discountModal';

type Props = {
  item: Item;
  cartItems: Items;
  deleteCartItem: (item: Item) => void;
  setItemTotal: (id: string, total: number) => void;
};

function DiscountItem({
  item,
  cartItems,
  deleteCartItem,
  setItemTotal,
}: Props) {
  const { name, rate, id } = item;
  const [excepted, setExcepted] = useState<Items>({});
  const [isModal, setIsModal] = useState(false);

  const total =
    Object.keys(cartItems)
      .filter(key => key[0] === 'i' && !excepted[key])
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

  const addExcepted = (item: Item) => {
    setExcepted(items => {
      const updated = { ...items };
      updated[item.id] = item;
      return updated;
    });
  };
  const deleteExcepted = (item: Item) => {
    setExcepted(items => {
      const updated = { ...items };
      delete updated[item.id];
      return updated;
    });
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
          name={name}
          cartItems={cartItems}
          toggleModal={toggleModal}
          addExcepted={addExcepted}
          deleteExcepted={deleteExcepted}
        />
      )}
    </li>
  );
}

export default DiscountItem;
