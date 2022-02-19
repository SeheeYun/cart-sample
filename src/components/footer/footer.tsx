type Props = {
  total?: number;
};

function Footer({ total = 0 }: Props) {
  return (
    <footer className="footer">
      <div className="footer__text">
        <p>합계</p>
        <p>{total.toLocaleString()}원</p>
      </div>
      <button className="footer__btn">다음</button>
    </footer>
  );
}

export default Footer;
