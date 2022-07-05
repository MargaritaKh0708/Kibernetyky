import { ModalWindow, IModalWindow } from 'elements/ModalWindow/ModalWindow';
import { BurgerMenuList } from './BurgerMenuList';
import { HeaderSvgSelector } from '../header/HeaderSvgSelector';

export const BurgerMenu: React.FC<IModalWindow> = ({ active, setActive }) => {
  return (
    <>
      <ModalWindow
        active={active}
        setActive={setActive}
        className='burger-modal'
      >
        <div className='burger__list-header'>
          <HeaderSvgSelector id='logo' />
          <div className='burger__closer' onClick={() => setActive(false)}>
            <span className='burger__arrow-btn burger__arrow-btn_left '></span>
            <span className='burger__arrow-btn'></span>
          </div>
        </div>
        <BurgerMenuList></BurgerMenuList>
      </ModalWindow>
    </>
  );
};
