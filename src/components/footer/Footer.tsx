import { FooterImgSelector } from './FooterImgSelector';

export const Footer: React.FC = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper container'>
        <div className='footer__main-content-list-item-pic'>
          <FooterImgSelector id='logo' />
        </div>
        <div className='footer__main-content'>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item footer__main-content-list-item_font'>
              Про нас
            </li>
            <li className='footer__main-content-list-item'>Вакансії</li>
            <li className='footer__main-content-list-item'>Наші магазини</li>
            <li className='footer__main-content-list-item'>
              Зворотній зв’язок
            </li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item '>Цікаве</li>
            <li className='footer__main-content-list-item'>Блог</li>
            <li className='footer__main-content-list-item'>Акції</li>
            <li className='footer__main-content-list-item'>Кибер-бонусы</li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item'>Сервіс</li>
            <li className='footer__main-content-list-item'>Кредитування</li>
            <li className='footer__main-content-list-item'>Страхування</li>
            <li className='footer__main-content-list-item'>Кібер-послуги</li>
            <li className='footer__main-content-list-item'>Кібер-обмін</li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item'>Інформація</li>
            <li className='footer__main-content-list-item'>
              Оплата і доставка
            </li>
            <li className='footer__main-content-list-item'>
              Гарантія. Обмін та повернення
            </li>
            <li className='footer__main-content-list-item'>
              Умови користування сайтом
            </li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item '>Контакти</li>
            <li className='footer__main-content-list-item footer__main-content-list-item_flex'>
              <FooterImgSelector id='viber' />
              <FooterImgSelector id='telegram' />
            </li>
            <li className='footer__main-content-list-item'>
              <a href='tel:0800-33-26-96'> 0800-33-26-96</a>
            </li>
            <li className='footer__main-content-list-item'>
              <a href='tel:0800-33-26-96'> +38 050-853-23-83</a>
            </li>
            <li className='footer__main-content-list visible-part'>
              <span className='footer__main-content-list-item '>
                Ми в соц. мережах
              </span>
              <div className='footer__main-content-list-item footer__main-content-list-item_flex'>
                <FooterImgSelector id='insta' />
                <FooterImgSelector id='tiktok' />
                <FooterImgSelector id='facebook' />
              </div>
            </li>
          </ul>
          <ul className='footer__main-content-list hidden-part'>
            <li className='footer__main-content-list-item footer__main-content-list-item_font'>
              Ми в соц. мережах
            </li>
            <li className='footer__main-content-list-item footer__main-content-list-item_flex'>
              <FooterImgSelector id='insta' />
              <FooterImgSelector id='tiktok' />
              <FooterImgSelector id='facebook' />
            </li>
          </ul>
        </div>
        <div className='footer__sub-content'>
          <span>© 2022 Кібернетіки. Усі права захищені</span>
          <span>Дизайн Bonum Studio</span>
        </div>
      </div>
    </footer>
  );
};
