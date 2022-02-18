import { useEffect, useState } from 'react';
import BaseContainer from './base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Cart() {
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
        <ul></ul>
      </>
    </BaseContainer>
  );
}

export default Cart;
