import Header from '../components/common/header';
import Footer from '../components/common/footer/footer';
import MenuFooter from '../components/common/footer/menuFooter';

type Props = {
  type: string;
  children: JSX.Element;
};

function BaseContainer({ type, children }: Props) {
  return (
    <div id="App">
      <Header />
      <main className="main">{children}</main>
      {type === 'cart' && <Footer />}
      {type === 'menu' && <MenuFooter />}
    </div>
  );
}

export default BaseContainer;
