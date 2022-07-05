// import pictures

import cashback from '../../assets/icons/benefits-icons/cashback.png';
import consultation from '../../assets/icons/benefits-icons/consultation.png';
import delivery from '../../assets/icons/benefits-icons/delivery.png';
import guarantee from '../../assets/icons/benefits-icons/guarantee.png';
import individual from '../../assets/icons/benefits-icons/individual.png';
import sertificate from '../../assets/icons/benefits-icons/sertificate.png';

interface IBenefitsImgSelector {
  id: string;
}

export const BenefitsImgSelector: React.FC<IBenefitsImgSelector> = ({ id }) => {
  switch (id) {
    case 'cashback':
      return (
        <div className='benefits-block__item'>
          <div className='benefits-block__icon'>
            <img src={cashback} alt='cashback' />
          </div>
          <span className='benefits-block__item-title'>
            Гарантований кешбек
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
            Професійна консультація
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
            Зручні способи доставки і оплати
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
            Офіційна гарантія від виробника
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
            Індивідуальний підхід до кожного клієнта
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
            Сертифікований товар
          </span>
        </div>
      );
    default:
      return <img src={sertificate} alt='default'></img>;
  }
};
