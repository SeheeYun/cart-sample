import { useEffect } from 'react';
import BaseContainer from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import ServiceItem from '../components/item/serviceItem';
import DiscountItem from '../components/item/discountItem';

function Cart() {
  const { cartItems, resetChecked } = useStore();

  const total = Object.keys(cartItems)
    .filter(key => cartItems[key].total)
    .map(key => cartItems[key].total)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    resetChecked();
  }, []);

  return (
    <BaseContainer type={'cart'} total={total}>
      <>
        <div className="main__btns">
          <button>
            <Link to="/service">
              <FontAwesomeIcon icon={faCirclePlus} /> 시술
            </Link>
          </button>
          <button>
            <Link to="/discount">
              <FontAwesomeIcon icon={faCirclePlus} /> 할인
            </Link>
          </button>
        </div>
        <ul>
          {Object.keys(cartItems)
            .filter(key => key[0] === 'i')
            .map(key => (
              <ServiceItem key={key} item={cartItems[key]} />
            ))}
          {Object.keys(cartItems)
            .filter(key => key[0] === 'd')
            .map(key => (
              <DiscountItem key={key} item={cartItems[key]} />
            ))}
        </ul>
      </>
    </BaseContainer>
  );
}

export default Cart;
