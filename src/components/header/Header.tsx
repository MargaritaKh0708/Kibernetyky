import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';
import classNames from 'classnames';
import '../../index.css';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { useState, Suspense } from 'react';
import React from 'react';
import { ICatalog } from 'components/goods-presentation-block/AsideMenu/AsideMenu';
// import  BurgerMenu  from 'components/burger-menu/BurgerMenu';
import { CallBackForm } from '../burger-menu/CallBackForm';
import { useGlobalContext } from '../goods-presentation-block/AsideMenu/GlobalContext';
import { CatalogModal } from 'components/goods-presentation-block/AsideMenu/CatalogModal';
import { SearchFieldForm } from './search-field/SearchFieldForm';
import { IProductCardListItem } from 'components/product-card/ProductCardList';
import { Login } from 'components/account/Login';
import { Link } from 'react-router-dom';
import { LikesModal } from './likes-modal/LikesModal';

const BurgerMenu = React.lazy(
  () => import('components/burger-menu/BurgerMenu')
);

interface IHeader extends ICatalog {
  maindata: IProductCardListItem[];
  orderProductsCount: number;
  favoriteCount: number;
  compareCount: number;
}

export const Header: React.FC<IHeader> = ({
  orderProductsCount,
  favoriteCount,
  compareCount,
  maindata,
  goods,
}) => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false); // for BURGER open
  const [contactsModalActive, setContactsModalActive] =
    useState<boolean>(false); // for menu 'CONTACTS' open

  const {
    open,
    setOpen,
    likesModalActive,
    setLikesModalActive,
    loginModalActive,
    setLoginModalActive,
  } = useGlobalContext(); // for open catalog from 3 places - header, burger, presentation-block

  return (
    <>
      <header className='header'>
        <div className={classNames('container', 'header__wrapper')}>
          <button
            name='burger'
            type='button'
            className='header__btn header__btn--border'
          >
            <div className='burger' onClick={() => setBurgerActive(true)}>
              <span className='burger__item'></span>
              <span className='burger__item'></span>
              <span className='burger__item'></span>
            </div>
            <Suspense fallback={<div>Загрузка...</div>}>
              <section>
                <BurgerMenu
                  burgerState={burgerActive}
                  setBurgerState={setBurgerActive}
                  setContactsModalState={setContactsModalActive}
                />
              </section>
            </Suspense>
          </button>
          <Link to='/'>
            <div className='logo'>
              <HeaderSvgSelector id='logo' />
            </div>
          </Link>
          <div className='catalog' onClick={() => setOpen(open ? false : true)}>
            <HeaderSvgSelector id='catalog' />
            <span className='catalog__href'> Каталог </span>
          </div>
          <SearchFieldForm data={goods} goods={maindata} />
          <div className='help-army'>
            <a
              className='help-army__href'
              target='_blank'
              rel='noreferrer'
              href='https://bank.gov.ua/ua/news/all/natsionalniy-bank-vidkriv-spetsrahunok-dlya-zboru-koshtiv-na-potrebi-armiyi'
            >
              <span className='help-army__text'> Допомогти </span>
              <HeaderSvgSelector id='zsu' />
            </a>
          </div>
          <nav className='menu-block'>
            <button
              name='personal'
              type='button'
              className='header__btn header__btn--personal'
              onClick={() => setLoginModalActive(true)}
            >
              <HeaderSvgSelector id='personal' />
            </button>
            <button
              name='likes'
              onClick={() => setLikesModalActive(true)}
              type='button'
              className='header__btn header__btn--likes'
            >
              <HeaderSvgSelector id='likes'>
                <span>{favoriteCount}</span>
              </HeaderSvgSelector>
            </button>
            <button
              name='compare'
              type='button'
              className='header__btn header__btn--compare'
            >
              <HeaderSvgSelector id='compare'>
                <span>{compareCount}</span>
              </HeaderSvgSelector>
            </button>
            <Link to='/cart'>
              <button name='basket' type='button' className='header__btn'>
                <HeaderSvgSelector id='basket'>
                  <span>({orderProductsCount})</span>
                </HeaderSvgSelector>
              </button>
            </Link>
            <button
              name='contacts'
              type='button'
              className='header__btn header__btn--border header__btn--contacts'
            >
              <div
                className='menu-block__contacts'
                onClick={() =>
                  setContactsModalActive(contactsModalActive ? false : true)
                }
              >
                <HeaderSvgSelector id='contacts' />
              </div>
            </button>
          </nav>
        </div>
        <ModalWindow
          active={contactsModalActive}
          setActive={setContactsModalActive}
          className='call-back-modal'
        >
          <CallBackForm closeBtnFunction={setContactsModalActive} />
        </ModalWindow>
        <CatalogModal goods={goods} />
        <Login
          viewWindow={loginModalActive}
          closeHandler={setLoginModalActive}
          isLogged={false}
        />
        <LikesModal
          products={maindata}
          favoriteCountQuantity={favoriteCount}
          activeLikesModal={likesModalActive}
          setActiveLikesModal={setLikesModalActive}
        />
      </header>
    </>
  );
};
