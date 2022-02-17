import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <button
        className="header__btn"
        onClick={() => {
          navigate('/');
        }}
      >
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <div className="header__title">
        <p>윤세희</p>
        <p>결제 목록</p>
      </div>
      <button className="header__btn">
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </header>
  );
}

export default Header;
