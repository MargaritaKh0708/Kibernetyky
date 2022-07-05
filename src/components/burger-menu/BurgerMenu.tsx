import { ModalWindow, IModalWindow } from 'elements/ModalWindow/ModalWindow';
import { BurgerMenuList } from './BurgerMenuList';
import { useState } from 'react';
import { HeaderSvgSelector } from '../header/HeaderSvgSelector';
import { CallBackForm } from './CallBackForm';

interface IBurgerMenu {
  burgerState: boolean;
  setBurgerState: (value: boolean) => void;
  setContactsModalState: (value: boolean) => void;
}

export const BurgerMenu: React.FC<IBurgerMenu> = ({
  burgerState,
  setBurgerState,
  setContactsModalState,
}) => {
  return (
    <>
      <ModalWindow
        active={burgerState}
        setActive={setBurgerState}
        className='burger-modal'
      >
        <div className='burger__list-header'>
          <HeaderSvgSelector id='logo' />
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
