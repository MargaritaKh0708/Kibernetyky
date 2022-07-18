import { FooterImgSelector } from 'components/footer/FooterImgSelector';
import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';
import { useGlobalContext } from '../goods-presentation-block/AsideMenu/GlobalContext';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface IBurgerMenuList {
  contactsModalState: (value: boolean) => void;
}

export const BurgerMenuList: React.FC<IBurgerMenuList> = ({
  contactsModalState,
}) => {
  const { setOpen, setLikesModalActive, setLoginModalActive } =
    useGlobalContext();
  //lang
  const [t, i18n] = useTranslation('common');
  return (
    <div className='burger__list'>
      <ul className='burger__list-items'>
        <li
          className='burger__list-item'
          onClick={() => setLoginModalActive(true)}
        >
          <HeaderSvgSelector id='personal-b' className='burger-icon' />
          <span>{t('burgerMenu.signIn')}</span>
          <span className='burger-icon--border' />
          <span>{t('burgerMenu.register')}</span>
        </li>
        <li className='burger__list-item' onClick={() => setOpen(true)}>
          <HeaderSvgSelector id='catalog-b' className='burger-icon' />
          <span>{t('burgerMenu.catalog')}</span>
        </li>

        <li className='burger__list-item'>
          <HeaderSvgSelector id='basket-b' className='burger-icon' />
          <Link to='/cart'>
            <span>{t('burgerMenu.cart')}</span>
          </Link>
        </li>

        <li
          className='burger__list-item'
          onClick={() => setLikesModalActive(true)}
        >
          <HeaderSvgSelector id='likes-b' className='burger-icon' />
          <span>{t('burgerMenu.favorites')}</span>
        </li>
        <li className='burger__list-item'>
          <HeaderSvgSelector id='compare-b' className='burger-icon' />
          <span>{t('burgerMenu.compare')}</span>
        </li>
        <li className='burger__list-item-epmty'></li>
        <li className='burger__list-item burger__list-item_flex'>
          <HeaderSvgSelector id='language' className='burger-icon'>
            <span> {t('burgerMenu.language')} </span>
          </HeaderSvgSelector>
          <div className='burger__list-item--language'>
            <span
              className='burger__list-item_language-ua'
              onClick={() => i18n.changeLanguage('ua')}
            >
              {t('burgerMenu.ukrLan')}
            </span>
            <span
              className='burger__list-item_language-eng'
              onClick={() => i18n.changeLanguage('en')}
            >
              eng
            </span>
          </div>
        </li>
        <li className='burger__list-item burger__list-item_flex'>
          <HeaderSvgSelector id='city' className='burger-icon'>
            <span> {t('burgerMenu.city')}</span>
          </HeaderSvgSelector>
          <span className='arrow' />
        </li>
        <li className='burger__list-item-epmty '></li>
        <li className='burger__list-item '>
          <HeaderSvgSelector id='contacts-b' className='burger-icon' />
          <a href='tel:0800-33-26-96'> +38 050-853-23-83</a>
        </li>
        <li
          className='burger__list-item burger__list-item_flex'
          onClick={() => contactsModalState(true)}
        >
          <HeaderSvgSelector id='incontacts' className='burger-icon'>
            <span>{t('burgerMenu.callBack')}</span>
          </HeaderSvgSelector>
          <span className='arrow' />
        </li>
        <li className='burger__list-item-epmty'></li>
        <li className='burger__list-item'>{t('burgerMenu.actions')}</li>
        <li className='burger__list-item'>{t('burgerMenu.bonuses')}</li>
        <li className='burger__list-item'>{t('burgerMenu.shops')}</li>
        <li className='burger__list-item'>{t('burgerMenu.credits')}</li>
        <li className='burger__list-item'>{t('burgerMenu.deliveryAndPay')}</li>
        <li className='burger__list-item-epmty'></li>
        <li className='burger__list-item burger__list-item--color'>
          {t('burgerMenu.more')}
        </li>
        <li className='burger__list-item'>{t('burgerMenu.about')}</li>
        <li className='burger__list-item'>{t('burgerMenu.vacancies')}</li>
        <li className='burger__list-item'>{t('burgerMenu.exchange')}</li>
        <li className='burger__list-item'>{t('burgerMenu.service')}</li>
        <li className='burger__list-item'>{t('burgerMenu.insurance')}</li>
        <li className='burger__list-item'>{t('burgerMenu.guarantee')}</li>
        <li className='footer__main-content-list-item  burger__list-item--color'>
          {t('burgerMenu.social')}
        </li>
        <li className='footer__main-content-list-item footer__main-content-list-item_flex'>
          <FooterImgSelector id='insta' />
          <FooterImgSelector id='tiktok' />
          <FooterImgSelector id='facebook' />
        </li>
      </ul>
    </div>
  );
};
