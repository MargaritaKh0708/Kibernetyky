import { PresentationBlockSvgSelector } from 'components/goods-presentation-block/presentation-swiper/PresentationBlockSvgSelector';
import { DetailsBtn } from 'elements/buttons/DetailsBtn';

interface IPresentationSwiperCard {
  background?: string;
  mainPicture: string;
  cardcolor: string;
  svgId: string;
}

export const PresentationSwiperCard: React.FC<IPresentationSwiperCard> = ({
  mainPicture,
  background,
  cardcolor,
  svgId,
}) => {
  return (
    <div
      className='swiper-card'
      style={{ backgroundImage: `url(${background}` }}
    >
      <PresentationBlockSvgSelector id={svgId} />
      <div>
        <DetailsBtn
          margin={'0 auto'}
          path='https://swiperjs.com/react#swiper-slide-props'
          cardcolor={cardcolor === 'blue' ? '' : cardcolor}
        >
          Техніка за суперціною!
        </DetailsBtn>

        {cardcolor === 'blue' ? (
          <DetailsBtn
            margin={'7px auto 0 auto'}
            path='https://swiperjs.com/react#swiper-slide-props'
          >
            iPhone від 18 499 грн
          </DetailsBtn>
        ) : (
          ''
        )}
      </div>
      <div className='swiper-card__img'>
        <img src={mainPicture} alt='slider-card' />
      </div>
      <DetailsBtn path='https://swiperjs.com/react#swiper-slide-props'>
        Детальніше
      </DetailsBtn>
    </div>
  );
};
