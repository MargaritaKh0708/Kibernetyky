// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

//здесь укажем контент которій будет отображаться - реализовать фильтр!

export interface IVideoReviewSlideItem {
  iframe: JSX.Element; // это будет вытягиваться по запросу (API:)
  title: string;
}

export interface IVideoReviewSwiper {
  data: IVideoReviewSlideItem[];
}

export const VideoReviewSwiper: React.FC<IVideoReviewSwiper> = ({ data }) => {
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
      loop
    >
      {data.map((el, index) => (
        <SwiperSlide key={`video-swiper-slide-${index}`}>
          <div className='video-slide'>
            <div className='video-slide__content'>{el.iframe}</div>
            <span className='video-slide__title'>{el.title}</span>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Заменить ключ айди в главного массива
