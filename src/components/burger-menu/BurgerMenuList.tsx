import { FooterImgSelector } from 'components/footer/FooterImgSelector';
import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';

export const BurgerMenuList: React.FC = () => {
  return (
    <div className='burger__list'>
      <ul className='burger__list-items'>
        <li className='burger__list-item'>
          <HeaderSvgSelector id='personal-b' className='burger-icon' />
          <span>Вхід</span>
          <span>Реєстрація</span>
        </li>
        <li className='burger__list-item'>
          <HeaderSvgSelector id='catalog-b' className='burger-icon' />
          <span>Каталог товарів</span>
        </li>
        <li className='burger__list-item'>
          <HeaderSvgSelector id='basket-b' className='burger-icon' />
          <span>Кошик</span>
        </li>
        <li className='burger__list-item'>
          <HeaderSvgSelector id='likes-b' className='burger-icon' />
          <span>Обране</span>
        </li>
        <li className='burger__list-item'>
          <HeaderSvgSelector id='compare-b' className='burger-icon' />
          <span>Порівняння</span>
        </li>
        <li className='burger__list-item-epmty'></li>
        <li className='burger__list-item burger__list-item_flex'>
          <HeaderSvgSelector id='language' className='burger-icon'>
            <span> Мова </span>
          </HeaderSvgSelector>
          <span className='burger__list-item_language-ua'>
            укр <span className='burger__list-item_language-eng'> eng </span>
          </span>
        </li>
        <li className='burger__list-item burger__list-item_flex'>
          <HeaderSvgSelector id='city' className='burger-icon'>
            <span> Місто </span>
          </HeaderSvgSelector>
          <span className='arrow' />
        </li>
        <li className='burger__list-item-epmty '></li>
        <li className='burger__list-item '>
          <HeaderSvgSelector id='contacts-b' className='burger-icon' />
          <a href='tel:0800-33-26-96'> +38 050-853-23-83</a>
        </li>
        <li className='burger__list-item burger__list-item_flex'>
          <HeaderSvgSelector id='incontacts' className='burger-icon'>
            <span>Передзвоніть мені</span>
          </HeaderSvgSelector>
          <span className='arrow' />
        </li>
        <li className='burger__list-item-epmty'></li>
        <li className='burger__list-item'>Акції</li>
        <li className='burger__list-item'>Кібер-бонуси</li>
        <li className='burger__list-item'>Наші магазини</li>
        <li className='burger__list-item'>Кредити</li>
        <li className='burger__list-item'>Оплата і доставка</li>
        <li className='burger__list-item-epmty'></li>
        <li className='burger__list-item'>Ще</li>
        <li className='burger__list-item'>Про нас</li>
        <li className='burger__list-item'>Вакансії</li>
        <li className='burger__list-item'>Кібер-обмін</li>
        <li className='burger__list-item'>Кібер-послуги</li>
        <li className='burger__list-item'>Страхування</li>
        <li className='burger__list-item'>Гарантія. Обмін і повернення</li>
        <li className='footer__main-content-list-item '>Ми в соц. мережах</li>
        <li className='footer__main-content-list-item footer__main-content-list-item_flex'>
          <FooterImgSelector id='insta' />
          <FooterImgSelector id='tiktok' />
          <FooterImgSelector id='facebook' />
        </li>
      </ul>
    </div>
  );
};
