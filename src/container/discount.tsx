import BaseContainer from './base';
import { useStore } from '../store/store';
import MenuItem from '../components/item/menuItem';

function Discount() {
  const { discounts, addCheckedItem, deleteCheckedItem } = useStore();

  return (
    <BaseContainer
      type={'menu'}
      title={'할인 메뉴'}
      text={'할인을 선택하세요. (여러개 선택 가능)'}
    >
      <ul>
        {Object.keys(discounts).map(key => (
          <MenuItem
            key={key}
            item={{ ...discounts[key], id: key, checked: false }}
            addCheckedItem={addCheckedItem}
            deleteCheckedItem={deleteCheckedItem}
          />
        ))}
      </ul>
    </BaseContainer>
  );
}

export default Discount;
