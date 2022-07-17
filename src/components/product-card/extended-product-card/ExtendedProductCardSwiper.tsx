import { useEffect } from 'react';
import { Navigation, Mousewheel, FreeMode, Thumbs } from 'swiper';
import { Swiper, SwiperOptions } from 'swiper';

import { IProductCardListItem } from '../ProductCardList';

interface IExtendedProductCardsSwiper {
  good: IProductCardListItem;
}

export const ExtendedProductCardsSwiper: React.FC<
  IExtendedProductCardsSwiper
> = ({ good }) => {
  useEffect(() => {
    const sliderThumbsParams: SwiperOptions = {
      direction: 'vertical',
      modules: [FreeMode, Navigation, Mousewheel],
      slidesPerView: 3,
      spaceBetween: 24,
      mousewheel: true,
      navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
      },
      freeMode: true,
      breakpoints: {
        0: {
          direction: 'horizontal',
        },
        768: {
          direction: 'vertical',
        },
      },
    };
    const sliderThumbs = new Swiper(
      '.slider__thumbs .swiper-container',
      sliderThumbsParams
    );
    // Инициализация слайдера изображений
    const sliderImages = new Swiper('.slider__images .swiper-container', {
      modules: [Thumbs, Mousewheel, FreeMode, Navigation],
      direction: 'vertical',
      initialSlide: 3,
      slidesPerView: 1,
      spaceBetween: 32,
      mousewheel: true,
      navigation: {
        nextEl: '.slider__next',
        prevEl: '.slider__prev',
      },
      grabCursor: true,
      thumbs: {
        swiper: sliderThumbs,
      },
      breakpoints: {
        0: {
          direction: 'horizontal',
        },
        768: {
          direction: 'vertical',
        },
      },
    });
  });

  return (
    <section className='slider'>
      <div className='slider__container'>
        <div className='slider__flex'>
          <div className='slider__col'>
            <div className='slider__prev'>
              <span className='arrow' />
            </div>
            <div className='slider__thumbs'>
              <div className='swiper-container'>
                <div className='swiper-wrapper'>
                  {good.imageCollection.map((img) => (
                    <div key={img} className='swiper-slide'>
                      <div className='slider__image'>
                        <img src={img} alt='img' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className='slider__next'>
              <span className='arrow' />
            </div>
            <div className='slider__images'>
              <div className='swiper-container'>
                <div className='swiper-wrapper'>
                  {good.imageCollection.map((img) => (
                    <div key={img} className='swiper-slide'>
                      <div className='slider__image'>
                        <img src={img} alt='img' />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
