import BaseContainer from './base';
import { useStore } from '../store/store';
import ItemComponent from '../components/item/item';

function Discount() {
  const { discounts } = useStore();

  return (
    <BaseContainer
      type={'menu'}
      title={'할인 메뉴'}
      text={'할인을 선택하세요. (여러개 선택 가능)'}
    >
      <ul>
        {Object.keys(discounts).map(key => (
          <ItemComponent
            key={key}
            item={{ ...discounts[key], id: key, checked: false }}
          />
        ))}
      </ul>
    </BaseContainer>
  );
}

export default Discount;
