import { PresentationSwiper } from './presentation-swiper/PresentationSwiper';
import { AsideMenu, ICatalog } from './AsideMenu/AsideMenu';

export const GoodsPresentationBlock: React.FC<ICatalog> = ({ goods }) => {
  return (
    <section className='goods-presentation-block container'>
      <div className='goods-presentation-block__wrapper'>
        <AsideMenu goods={goods} />
        <PresentationSwiper />
      </div>
    </section>
  );
};
