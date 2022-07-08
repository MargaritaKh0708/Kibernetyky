import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';
import classNames from 'classnames';
import '../../index.css';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { useState } from 'react';
import { ICatalog } from 'components/goods-presentation-block/AsideMenu/AsideMenu';
import { BurgerMenu } from 'components/burger-menu/BurgerMenu';
import { CallBackForm } from '../burger-menu/CallBackForm';
import { useOpenCatalogContext } from '../goods-presentation-block/AsideMenu/OpenCatalogContext';
import { CatalogModal } from 'components/goods-presentation-block/AsideMenu/CatalogModal';
import { SearchFieldForm } from './search-field/SearchFieldForm';
import { IProductCardListItem } from 'components/product-card/ProductCardList';

interface IHeader extends ICatalog {
  orderProductsCount: number;
  favoriteCount: number;
  maindata: IProductCardListItem[];
}

export const Header: React.FC<IHeader> = ({
  orderProductsCount,
  favoriteCount,
  maindata,
  goods,
}) => {
  const [burgerActive, setBurgerActive] = useState<boolean>(false); // for BURGER open
  // const [searchActive, setSearchActive] = useState<boolean>(false); // for SEARCH field open

  const [contactsModalActive, setContactsModalActive] =
    useState<boolean>(false); // for menu 'CONTACTS' open

  const { open, setOpen } = useOpenCatalogContext(); // for open catalog from 3 pleces - header, burger, presentation-block

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
          <div className='logo'>
            <HeaderSvgSelector id='logo' />
          </div>
          <div className='catalog' onClick={() => setOpen(open ? false : true)}>
            <HeaderSvgSelector id='catalog' />
            <a href='#' className='catalog__href'>
              <span> Каталог </span>
            </a>
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
            <HeaderSvgSelector id='personal' />
            <HeaderSvgSelector id='likes'>
              <span>{favoriteCount}</span>
            </HeaderSvgSelector>
            <HeaderSvgSelector id='compare'>
              <span>0</span>
            </HeaderSvgSelector>
            <HeaderSvgSelector id='basket'>
              <span>({orderProductsCount})</span>
            </HeaderSvgSelector>
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
        <CatalogModal goods={goods} />
      </header>
    </>
  );
};
