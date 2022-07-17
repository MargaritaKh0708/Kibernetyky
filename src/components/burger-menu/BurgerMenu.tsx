import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { BurgerMenuList } from './BurgerMenuList';
import { HeaderSvgSelector } from '../header/HeaderSvgSelector';
import { Link } from 'react-router-dom';

interface IBurgerMenu {
  setContactsModalState: (value: boolean) => void;
  setBurgerState: (value: boolean) => void;
  burgerState: boolean;
}

const BurgerMenu: React.FC<IBurgerMenu> = ({
  setContactsModalState,
  setBurgerState,
  burgerState,
}) => {
  return (
    <>
      <ModalWindow
        active={burgerState}
        setActive={setBurgerState}
        className='burger-modal'
      >
        <div className='burger__list-header'>
          <Link to='/'>
            <HeaderSvgSelector id='logo' />
          </Link>
          <div className='burger__closer' onClick={() => setBurgerState(false)}>
            <span className='burger__arrow-btn burger__arrow-btn_left '></span>
            <span className='burger__arrow-btn'></span>
          </div>
        </div>
        <BurgerMenuList
          contactsModalState={setContactsModalState}
        ></BurgerMenuList>
      </ModalWindow>
    </>
  );
};

export default BurgerMenu;
