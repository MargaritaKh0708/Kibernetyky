// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IProductCardListItem } from '../product-card/ProductCardList';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

interface IProductCardList {
  data: IProductCardListItem[];
}

//здесь укажем контент которій будет отображаться - реализовать фильтр!

export const TopCategoriesSwiper: React.FC<IProductCardList> = ({ data }) => {
  let topItems: {
    mainImage: string;
    top: boolean;
    name: string;
    id: number;
  }[] = [];

  let uniqueCategory = new Set();
  data.forEach((dataItem) => {
    if (!uniqueCategory.has(dataItem.category.id)) {
      topItems.push(dataItem.category);
      uniqueCategory.add(dataItem.category.id);
    }
  });

  console.log(topItems);

  return (
    <Swiper
      className='container top-categories-swiper'
      breakpoints={{
        1920: {
          width: 1920,
          slidesPerView: 6,
          spaceBetween: 20,
        },
        1366: {
          width: 1366,
          slidesPerView: 5,
          spaceBetween: 20,
        },
        //when window width is >= 1280px
        1280: {
          width: 1280,
          slidesPerView: 5,
          spaceBetween: 10,
        },
        1024: {
          width: 1024,
          slidesPerView: 4,
          spaceBetween: 10,
        },
        812: {
          width: 812,
          slidesPerView: 3,
        },
        540: {
          width: 540,
          slidesPerView: 2,
        },
        320: {
          width: 320,
          slidesPerView: 1,
          // centeredSlides: true,
        },
      }}
      modules={[Pagination, Autoplay]}
      spaceBetween={20}
      pagination={{ clickable: true }}
    >
      {topItems.map((el, index) => (
        <SwiperSlide key={index + 3}>
          <div className='top-card'>
            <span className='top-card__title'>{el.name}</span>
            <div className='top-card__image'>
              <img src={el.mainImage} alt='top-category' />
            </div>
            <a
              href='https://rozetka.com.ua/ua/promo/firstharvests/'
              className='top-card__view-btn'
            >
              <span className='top-card__view-btn-description'>
                Переглянути
              </span>
            </a>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Заменить ключ айди в главного массива
