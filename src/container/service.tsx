import BaseContainer from './base';
import { useStore } from '../store/store';
import ItemComponent from '../components/item/item';

function Service() {
  const { items } = useStore();

  return (
    <BaseContainer
      type={'menu'}
      title={'시술 메뉴'}
      text={'서비스를 선택하세요. (다수 선택 가능)'}
    >
      <ul>
        {Object.keys(items).map(key => (
          <ItemComponent
            key={key}
            item={{ ...items[key], id: key, checked: false }}
          />
        ))}
      </ul>
    </BaseContainer>
  );
}

export default Service;
