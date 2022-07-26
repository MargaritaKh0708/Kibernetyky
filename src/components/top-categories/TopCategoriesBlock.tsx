import { TopCategoriesSwiper } from './TopCategoriesSwiper';
import { IProductCardListItem } from 'components/product-card/ProductCardList';

interface IProductCardList {
  data: IProductCardListItem[];
}

export const TopCategoriesBlock: React.FC<IProductCardList> = ({ data }) => {
  return (
    <section className='top-categories-block container'>
      <div className='top-categories-block__header'>
        <h2 className='top-categories-block__title title'>Топ категорії</h2>
        <a
          className='top-categories-block__all-view-btn'
          href='https://rozetka.com.ua/ua/?utm_source=cpatrafmag'
        >
          <span>Дивитись усі</span>
          <span className='top-categories-block__all-view-btn-arrow arrow'></span>
        </a>
      </div>
      <TopCategoriesSwiper data={data}></TopCategoriesSwiper>
      <div className='top-categories-block__opacity-block' />
    </section>
  );
};
