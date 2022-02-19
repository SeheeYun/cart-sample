import BaseContainer from './base';
import { useStore } from '../store/store';
import MenuItem from '../components/item/menuItem';

function Service() {
  const { items, addCheckedItem, deleteCheckedItem } = useStore();

  return (
    <BaseContainer
      type={'menu'}
      title={'시술 메뉴'}
      text={'서비스를 선택하세요. (다수 선택 가능)'}
    >
      <ul>
        {Object.keys(items).map(key => (
          <MenuItem
            key={key}
            item={{
              ...items[key],
              id: key,
            }}
            checked={false}
            onChecked={addCheckedItem}
            offChecked={deleteCheckedItem}
          />
        ))}
      </ul>
    </BaseContainer>
  );
}

export default Service;
