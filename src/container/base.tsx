import Header from '../components/common/header';
import Footer from '../components/common/footer/footer';
import { useEffect } from 'react';

type Props = {
  type: string;
  children: JSX.Element;
};

function BaseContainer({ type, children }: Props) {
  return (
    <div id="App">
      <Header />
      <main className="main">{children}</main>
      <Footer />
    </div>
  );
}

export default BaseContainer;
