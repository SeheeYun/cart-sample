import styles from './modal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function DiscountModal() {
  return (
    <div className={styles.modal__bg}>
      <div className={styles.modal}>
        <p>시술명</p>
        <button>
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <ul>
          <li>sadd</li>
        </ul>
        <button>확인</button>
      </div>
    </div>
  );
}
export default DiscountModal;
