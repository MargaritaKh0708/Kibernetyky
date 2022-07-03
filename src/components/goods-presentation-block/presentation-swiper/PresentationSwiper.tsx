// import Swiper core and required modules
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PresentationSwiperCard } from 'components/goods-presentation-block/presentation-swiper/PresentationSwiperCard';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
// Picture imports
import blue from 'assets/main-page/presentation-block-swiper/blue/background.png';
import green from 'assets/main-page/presentation-block-swiper/green/background.png';
import yellow from 'assets/main-page/presentation-block-swiper/yellow/background.png';
import bluePicture from 'assets/main-page/presentation-block-swiper/blue/main-picture.png';
import greenPicture from 'assets/main-page/presentation-block-swiper/green/main-picture.png';
import yellowPicture from 'assets/main-page/presentation-block-swiper/yellow/main-picture.png';

const data = [
  {
    background: `${green}`,
    cardcolor: 'green',
    svgId: 'transparent-logo',
    mainPicture: `${greenPicture}`,
    setpresentativ: true,
  },
  {
    background: `${yellow}`,
    cardcolor: 'yellow',
    svgId: 'transparent-logo',
    mainPicture: `${yellowPicture}`,
    setpresentativ: false,
  },
  {
    background: `${blue}`,
    cardcolor: 'blue',
    svgId: 'blue-logo',
    mainPicture: `${bluePicture}`,
    setpresentativ: false,
  },
  {
    background: `${yellow}`,
    cardcolor: 'yellow',
    svgId: 'transparent-logo',
    mainPicture: `${yellowPicture}`,
    setpresentativ: true,
  },
  {
    background: `${blue}`,
    cardcolor: 'blue',
    svgId: 'blue-logo',
    mainPicture: `${bluePicture}`,
    setpresentativ: true,
  },
];

//здесь укажем контент которій будет отображаться - реализовать фильтр!

export const PresentationSwiper: React.FC = () => {
  let presentativItems: {
    background: string;
    cardcolor: string;
    svgId: string;
    mainPicture: string;
    setpresentativ: boolean;
  }[] = [];

  data.forEach((dataItem) => {
    if (dataItem.setpresentativ) {
      presentativItems.push(dataItem);
      console.log(presentativItems);
    }
  });

  return (
    <Swiper
      className='container'
      breakpoints={{
        1920: {
          width: 1920,
          slidesPerView: 6,
          spaceBetween: 8,
        },
        1366: {
          width: 1366,
          slidesPerView: 5,
          spaceBetween: 8,
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
          spaceBetween: 10,
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
      spaceBetween={8}
      loop={true}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
        stopOnLastSlide: false,
        reverseDirection: true,
      }}
    >
      {presentativItems.map((el, index) => (
        <SwiperSlide key={index + 3}>
          <PresentationSwiperCard
            cardcolor={el.cardcolor}
            background={el.background}
            svgId={el.svgId}
            mainPicture={el.mainPicture}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

// Заменить ключ айди в главного массива
