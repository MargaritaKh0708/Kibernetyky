import { IProductCardListItem } from '../ProductCardList';

export interface IAboutProductArticle {
  good: IProductCardListItem;
}

export const AboutProductArticle: React.FC<IAboutProductArticle> = ({
  good,
}) => {
  return (
    <div className='article'>
      <div className='article__wrapper'>
        <div className='article__block article__block--row'>
          <div className='article__text-content article__text-content--width'>
            <h3 className='article__title'>
              Опис товару &nbsp; {good.name} {good.model}
            </h3>
            <span className='article__content-title'>
              {good.specifications.article[0].title}
            </span>
            <span className='article__content'>
              {good.specifications.article[0].content}
            </span>
          </div>
          <div className='article__photo-content'>
            {good.specifications.article[0].photo.map((item) => (
              <div
                className='article__photo-content-item'
                key={`${item}+${good.id}`}
              >
                <img src={item} alt={good.name} />
              </div>
            ))}
          </div>
        </div>
        <div className='article__block article__block--column'>
          <span className='article__content-title'>
            {good.specifications.article[1].title}
          </span>
          <div className='article__text-content article__text-content--direction'>
            <span className='article__content article__content--flex'>
              {good.specifications.article[1].content}
            </span>
            <span className='article__sub-content'>
              {good.specifications.article[1].subcontent}
            </span>
          </div>
          <div className='article__photo-content article__photo-content--width'>
            {good.specifications.article[1].photo.map((item) => (
              <div
                className='article__photo-content-item'
                key={`${item}+${good.id}`}
              >
                <img src={item} alt={good.name} />
              </div>
            ))}
          </div>
        </div>
        <div className='article__block article__block--column'>
          <div className='article__text-content article__text-content--align'>
            <span className='article__content-title'>
              {good.specifications.article[2].title}
            </span>
            <span className='article__content article__content--center'>
              {good.specifications.article[2].content}
            </span>
          </div>
          <div className='article__photo-content article__photo-content--width'>
            {good.specifications.article[2].photo.map((item, index) => (
              <div
                className={`article__photo-content-item article__photo-content-item-${index}`}
                key={`${item}+${good.id}`}
              >
                <img src={item} alt={good.name} />
              </div>
            ))}
          </div>
        </div>
        <div className='article__block article__block--row'>
          <div className='article__text-content article__text-content--width article__text-content--align'>
            <span className='article__content-title'>
              {good.specifications.article[3].title}
            </span>
            <span className='article__content article__content--center'>
              {good.specifications.article[3].content}
            </span>
          </div>
          <div className='article__photo-content'>
            {good.specifications.article[3].photo.map((item, index) => (
              <div
                key={`${item}+${good.id}`}
                className='article__photo-content-item'
              >
                <img src={item} alt={good.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
