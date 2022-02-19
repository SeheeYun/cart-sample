import Header from '../components/header/header';
import Footer from '../components/footer/footer';
import MenuFooter from '../components/footer/menuFooter';
import MenuHeader from '../components/header/menuHeader';

type Props = {
  type: string;
  title?: string;
  text?: string;
  total?: number;
  children: JSX.Element;
};

function BaseContainer({ type, title, text, total, children }: Props) {
  return (
    <div id="App">
      {type === 'cart' && <Header />}
      {type === 'menu' && <MenuHeader title={title} />}
      <main className="main">{children}</main>
      {type === 'cart' && <Footer total={total} />}
      {type === 'menu' && <MenuFooter text={text} />}
    </div>
  );
}

export default BaseContainer;
