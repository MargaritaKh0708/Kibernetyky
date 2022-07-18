import { BenefitsImgSelector } from './BenefitsImgSelector';
import { useTranslation } from 'react-i18next';

export const BenefitsLine: React.FC = () => {
  //lang
  const [t] = useTranslation('common');
  return (
    <section className='benefits-block container'>
      <h2 className='benefits-block__title title'>{t('benefits.title')}</h2>
      <div className='benefits-block__items'>
        <BenefitsImgSelector id='guarantee' />
        <BenefitsImgSelector id='sertificate' />
        <BenefitsImgSelector id='cashback' />
        <BenefitsImgSelector id='delivery' />
        <BenefitsImgSelector id='consultation' />
        <BenefitsImgSelector id='individual' />
      </div>
    </section>
  );
};
