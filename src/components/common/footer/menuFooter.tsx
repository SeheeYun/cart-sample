import { useNavigate } from 'react-router-dom';
import { useStore } from '../../../store/store';

type Props = {
  text?: string;
};

function MenuFooter({ text }: Props) {
  const navigate = useNavigate();
  const { addCartItems } = useStore();

  const onClick = () => {
    navigate('/');
    addCartItems();
  };

  return (
    <footer className="footer">
      <div className="footer__text">
        <p>{text}</p>
      </div>
      <button className="footer__btn" onClick={onClick}>
        다음
      </button>
    </footer>
  );
}

export default MenuFooter;
