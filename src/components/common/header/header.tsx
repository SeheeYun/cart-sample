import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <header className="header">
      <button className="header__btn">
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="header__title">
        <p>윤세희</p>
        <p>결제 목록</p>
      </div>
      <button className="header__btn_none">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </header>
  );
}

export default Header;
