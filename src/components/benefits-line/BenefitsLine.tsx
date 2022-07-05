import { BenefitsImgSelector } from './BenefitsImgSelector';

export const BenefitsLine: React.FC = () => {
  return (
    <section className='benefits-block container'>
      <h2 className='benefits-block__title title'>Переваги</h2>
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
