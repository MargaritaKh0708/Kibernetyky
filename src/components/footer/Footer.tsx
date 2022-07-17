import { useTranslation } from 'react-i18next';
import { FooterImgSelector } from './FooterImgSelector';

export const Footer: React.FC = () => {
  // lang
  const [t] = useTranslation('common');

  return (
    <footer className='footer'>
      <div className='footer__wrapper container'>
        <div className='footer__main-content-list-item-pic'>
          <FooterImgSelector id='logo' />
        </div>
        <div className='footer__main-content'>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item footer__main-content-list-item_font'>
              {t('footer.about')}
            </li>
            <li className='footer__main-content-list-item'>{t('footer.vacancies')}</li>
            <li className='footer__main-content-list-item'>{t('footer.shops')}</li>
            <li className='footer__main-content-list-item'>
            {t('footer.callBack')}
            </li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item '>{t('footer.interesting')}</li>
            <li className='footer__main-content-list-item'>{t('footer.blog')}</li>
            <li className='footer__main-content-list-item'>{t('footer.promotions')}</li>
            <li className='footer__main-content-list-item'>{t('footer.bonuses')}</li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item'>{t('footer.service')}</li>
            <li className='footer__main-content-list-item'>{t('footer.credits')}</li>
            <li className='footer__main-content-list-item'>{t('footer.insurance')}</li>
            <li className='footer__main-content-list-item'>{t('footer.services')}</li>
            <li className='footer__main-content-list-item'>{t('footer.exchange')}</li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item'>{t('footer.info')}</li>
            <li className='footer__main-content-list-item'>
              {t('footer.deliveryAndPay')}
            </li>
            <li className='footer__main-content-list-item'>
              {t('footer.guarantee')}
            </li>
            <li className='footer__main-content-list-item'>
              {t('footer.rules')}
            </li>
          </ul>
          <ul className='footer__main-content-list'>
            <li className='footer__main-content-list-item '>{t('footer.contacts')}</li>
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
            <ul className='footer__main-content-list visible-part'>
              <li className='footer__main-content-list-item '>
                {t('footer.socials')}
              </li>
              <li className='footer__main-content-list-item footer__main-content-list-item_flex'>
                <FooterImgSelector id='insta' />
                <FooterImgSelector id='tiktok' />
                <FooterImgSelector id='facebook' />
              </li>
            </ul>
          </ul>
          <ul className='footer__main-content-list hidden-part'>
            <li className='footer__main-content-list-item footer__main-content-list-item_font'>
              {t('footer.socials')}
            </li>
            <li className='footer__main-content-list-item footer__main-content-list-item_flex'>
              <FooterImgSelector id='insta' />
              <FooterImgSelector id='tiktok' />
              <FooterImgSelector id='facebook' />
            </li>
          </ul>
        </div>
        <div className='footer__sub-content'>
          <span>{t('footer.rights')}</span>
          <span>{t('footer.design')}</span>
        </div>
      </div>
    </footer>
  );
};
