import Dictaphone from 'elements/Recording/Dictaphone';
import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';
import { HeaderIconsSelector } from 'components/header/HeaderIconsSelector';
import classNames from 'classnames';
import '../../index.css';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { useState } from 'react';
import { ICatalog } from 'components/goods-presentation-block/AsideMenu/AsideMenu';
import { BurgerMenu } from 'components/burger-menu/BurgerMenu';
import { CallBackForm } from '../burger-menu/CallBackForm';
import { Link } from 'react-router-dom';
import { Login } from 'components/account/Login';

interface IHeader extends ICatalog {
  orderProductsCount: number;
  favoriteCount: number;
  compareCount: number;
}

export const Header: React.FC<IHeader> = ({
  goods,
  orderProductsCount,
  favoriteCount,
  compareCount,
}) => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false);
  // const [catalog, setCatalog] = useState<boolean>(false);

  const [contactsModalActive, setContactsModalActive] =
    useState<boolean>(false);
  
  const [loginModalActive, setLoginModalActive] = useState<boolean>(false);

  return (
    <>
      <header className='header'>
        <div className={classNames('container', 'header__wrapper')}>
          <div className='burger' onClick={() => setBurgerActive(true)}>
            <span className='burger__item'></span>
            <span className='burger__item'></span>
            <span className='burger__item'></span>
          </div>
          <BurgerMenu
            burgerState={burgerActive}
            setBurgerState={setBurgerActive}
            setContactsModalState={setContactsModalActive}
          />
          <Link to="/">
            <div className='logo'>
              <HeaderSvgSelector id='logo' />
            </div>
          </Link>
          <div className='catalog'>
            {/* {' //onClick={() => setCatalog(true)} '} */}
            <HeaderSvgSelector id='catalog' />
            <a href='#' className='catalog__href'>
              <span> Каталог </span>
            </a>
          </div>
          {/* <ModalWindow active={catalog} setActive={setCatalog}>
            <Catalog goods={goods} />
          </ModalWindow> */}
          <div className='search-field'>
            <HeaderIconsSelector id='search' />
            <input
              type='text'
              placeholder='Пошук'
              name='search'
              className='search-field__input'
            />
            <Dictaphone />
            <button className='search-field__btn'>
              <span> Знайти </span>
            </button>
          </div>
          <div>
            {/* <NavLink to='' className='language__ua'>
              {" "}
              (//TODO -- не забыть вставить ссылку или шо?)
              <span> укр </span>
            </NavLink> */}
            {/* <NavLink to='' className='catalog__href'>
              {" "}
              (//TODO -- не забыть вставить ссылку или шо?)
              <span> рус </span>
            </NavLink> */}
          </div>
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
            <div onClick={() => setLoginModalActive(true) }>
              <HeaderSvgSelector id='personal'/>
            </div>
            <HeaderSvgSelector id='likes'>
              <span>{favoriteCount}</span>
            </HeaderSvgSelector>
            <HeaderSvgSelector id='compare'>
              <span>{compareCount}</span>
            </HeaderSvgSelector>
            <Link to="/cart">
              <HeaderSvgSelector id='basket'>
                <span>({orderProductsCount})</span>
              </HeaderSvgSelector>
            </Link>
            <div
              className='menu-block__contacts'
              onClick={() =>
                setContactsModalActive(contactsModalActive ? false : true)
              }
            >
              <HeaderSvgSelector id='contacts' />
            </div>
          </nav>
        </div>
        <ModalWindow
          active={contactsModalActive}
          setActive={setContactsModalActive}
          className='call-back-modal'
        >
          <CallBackForm closeBtnFunction={setContactsModalActive} />
        </ModalWindow>
        <Login viewWindow={loginModalActive} closeHandler={setLoginModalActive} isLogged={false}/>
      </header>
    </>
  );
};
