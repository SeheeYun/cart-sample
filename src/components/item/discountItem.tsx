import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './item.module.css';
import { Item, Items } from '../../store/store';
import { useEffect, useState } from 'react';
import DiscountModal from '../modal/discountModal';

type Props = {
  item: Item;
  items: Items;
  deleteDiscount: (item: Item) => void;
  setExcludedItems: (id: string, arr: string[]) => void;
  setDicountTotal: (id: string, total: number) => void;
};

function DiscountItem({
  item,
  items,
  deleteDiscount,
  setExcludedItems,
  setDicountTotal,
}: Props) {
  const [isModal, setIsModal] = useState(false);
  const [excluded, setExcluded] = useState<string[]>([]);
  const { name, rate, id } = item;

  const total =
    Object.keys(items)
      .filter(key => !item.excluded.includes(key))
      .map(key => {
        return items[key].price * items[key].count * rate;
      })
      .reduce((a, b) => a + b, 0) * -1;

  const onDelete = () => {
    deleteDiscount(item);
  };

  const onDoneClick = () => {
    setExcludedItems(id, excluded);
  };

  const toggleModal = () => {
    setIsModal(!isModal);
  };

  const handleChecked = (checked: boolean, item: Item) => {
    checked
      ? setExcluded(keys => keys.filter(key => key !== item.id))
      : setExcluded(keys => [...keys, item.id]);
  };

  useEffect(() => {
    setDicountTotal(id, total);
  }, [total]);

  return (
    <li className={styles.item}>
      <div className={styles.item__text}>
        <p>{name}</p>
        <p></p>
        <p className={styles.item__rate}>
          {total.toLocaleString()}원 ({rate}%)
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
          items={items}
          toggleModal={toggleModal}
          handleChecked={handleChecked}
          onDoneClick={onDoneClick}
        />
      )}
    </li>
  );
}

export default DiscountItem;
