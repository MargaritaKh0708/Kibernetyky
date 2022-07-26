// import pictures

import cashback from '../../assets/icons/benefits-icons/cashback.webp';
import consultation from '../../assets/icons/benefits-icons/consultation.webp';
import delivery from '../../assets/icons/benefits-icons/delivery.webp';
import guarantee from '../../assets/icons/benefits-icons/guarantee.webp';
import individual from '../../assets/icons/benefits-icons/individual.webp';
import sertificate from '../../assets/icons/benefits-icons/sertificate.webp';
import { useTranslation } from 'react-i18next';

interface IBenefitsImgSelector {
  id: string;
}

export const BenefitsImgSelector: React.FC<IBenefitsImgSelector> = ({ id }) => {
  //lang
  const [t] = useTranslation('common');

  switch (id) {
    case 'cashback':
      return (
        <div className='benefits-block__item'>
          <div className='benefits-block__icon'>
            <img src={cashback} alt='cashback' />
          </div>
          <span className='benefits-block__item-title'>
            {t('benefits.cashback')}
          </span>
        </div>
      );
    case 'consultation':
      return (
        <div className='benefits-block__item'>
          <div className='benefits-block__icon'>
            <img src={consultation} alt='consultation' />
          </div>
          <span className='benefits-block__item-title'>
            {t('benefits.consultation')}
          </span>
        </div>
      );
    case 'delivery':
      return (
        <div className='benefits-block__item'>
          <div className='benefits-block__icon'>
            <img src={delivery} alt='delivery' />
          </div>
          <span className='benefits-block__item-title'>
            {t('benefits.delivery')}
          </span>
        </div>
      );
    case 'guarantee':
      return (
        <div className='benefits-block__item'>
          <div className='benefits-block__icon'>
            <img src={guarantee} alt='guarantee' />
          </div>
          <span className='benefits-block__item-title'>
            {t('benefits.guarantee')}
          </span>
        </div>
      );
    case 'individual':
      return (
        <div className='benefits-block__item'>
          <div className='benefits-block__icon'>
            <img src={individual} alt='individual' />
          </div>
          <span className='benefits-block__item-title'>
            {t('benefits.individual')}
          </span>
        </div>
      );
    case 'sertificate':
      return (
        <div className='benefits-block__item'>
          <div className='benefits-block__icon'>
            <img src={sertificate} alt='sertificate' />
          </div>
          <span className='benefits-block__item-title'>
            {t('benefits.certificate')}
          </span>
        </div>
      );
    default:
      return <img src={sertificate} alt='default'></img>;
  }
};
