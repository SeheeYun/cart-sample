import { useEffect } from 'react';
import BaseContainer from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useStore } from '../store/store';
import ServiceItem from '../components/item/serviceItem';

function Cart() {
  const { cartItems, deleteCartItem, resetChecked, increase, decrease } =
    useStore();

  useEffect(() => {
    resetChecked();
  }, []);

  return (
    <BaseContainer type={'cart'}>
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
          {Object.keys(cartItems).map(key => (
            <ServiceItem
              key={key}
              item={{ ...cartItems[key], id: key, checked: false }}
              deleteCartItem={deleteCartItem}
              increase={increase}
              decrease={decrease}
            />
          ))}
        </ul>
      </>
    </BaseContainer>
  );
}

export default Cart;
