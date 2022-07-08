import { SearchFieldForm } from './SearchFieldForm';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { ICatalogItem } from 'components/goods-presentation-block/AsideMenu/AsideMenu';

export interface ISearchModal {
  setActiveModal: (value: boolean) => void;
  goods: ICatalogItem[];
  activeModal: boolean;
}

export const SearchModal: React.FC<ISearchModal> = ({
  setActiveModal,
  activeModal,
  goods,
}) => {
  return (
    <>
      <ModalWindow
        setActive={setActiveModal}
        active={activeModal}
        className='search-modal'
      ></ModalWindow>
    </>
  );
};
