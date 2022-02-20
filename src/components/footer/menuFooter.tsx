import { useNavigate } from 'react-router-dom';

type Props = {
  text?: string;
  setLocalStorage: () => void;
};

function MenuFooter({ text, setLocalStorage }: Props) {
  const navigate = useNavigate();

  const onClick = () => {
    setLocalStorage();
    navigate('/');
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
