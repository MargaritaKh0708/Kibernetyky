import { IProductCardListItem } from '../product-card/ProductCardList';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';

interface IProductCardList {
  data: IProductCardListItem[];
}

export const BrandsLine: React.FC<IProductCardList> = ({ data }) => {
  const [seeMoreBrands, setSeeMoreBrands] = useState<boolean>(false);

  // lang
  const [t] = useTranslation('common');

  let brandsList: {
    logo: string; //? JSX.Element только потому что передаем
    id: number;
  }[] = [];
  let uniqueBrandsName = new Set();
  data.forEach((item) => {
    if (!uniqueBrandsName.has(item.brand.id)) {
      brandsList.push(item.brand);
      uniqueBrandsName.add(item.brand.id);
    }
  });

  let randerBrandsList: {
    logo: string;
    id: number;
  }[] = [];
  seeMoreBrands
    ? (randerBrandsList = [...brandsList])
    : (randerBrandsList = brandsList.splice(0, 8));
  console.log('brands', brandsList);

  return (
    <>
      <section className='brand-block container'>
        <h2 className='brand-block__title'> {t('brandsline.title')} </h2>
        <div className='brand-block__logo-list'>
          {randerBrandsList.map((item, index) => (
            <div className='brand-block__logo-btn' key={item.id}>
              <div className='brand-block__logo'>
                <img src={item.logo} alt={`${item.id + index}`} />
              </div>
            </div>
          ))}
          <div className='brand-block__see-all-btn'>
            <button
              name='hide'
              type='button'
              onClick={() => setSeeMoreBrands(seeMoreBrands ? false : true)}
              className='brand-block__see-all-btn'
            >
              {seeMoreBrands ? (
                <span>Сховати</span>
              ) : (
                <span>{t('brandsline.all')}</span>
              )}
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
