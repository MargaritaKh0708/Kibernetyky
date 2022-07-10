import { IProductCardListItem } from '../ProductCardList';
import { StarRating } from '../star-rating/StarRating';
import { ExtendedProductCardsSwiper } from './ExtendedProductCardSwiper';
import { SubscriptionBlockSvgSelector } from 'components/subscription-block/SubscriptionBlockSvgSelector';
import Dictaphone from 'elements/Recording/Dictaphone';

export interface IExtendedProductCard {
  good: IProductCardListItem;
}

export const ExtendedProductCard: React.FC<IExtendedProductCard> = ({
  good,
}) => {
  return (
    <section className='extended-card main-content container'>
      <div className='extended-card__header'>
        <div className='extended-card__path'>
          <span className='extended-card__path-item'>Головна</span>
          <span className='extended-card__path-circle'></span>
          <span className='extended-card__path-item'>Каталог</span>
          <span className='extended-card__path-circle'></span>
          <span className='extended-card__path-item'>{good.name}</span>
        </div>
        <div className='extended-card__header-content'>
          <h3 className='extended-card__title'>
            {good.name}&nbsp;({good.model})
          </h3>
          <div className='extended-card__clients-mark'>
            <span className='extended-card__clients-mark-title'>
              Оцінка користувачів
            </span>
            <div className='extended-card__rating'>
              <StarRating count={5} activeColor={'#F9E505'} />
              <span className='product-card__rating-value'>{'raiting'}</span>
            </div>

            <span>
              Код:<span className='extended-card__code'>{good.id}</span>
            </span>
          </div>
        </div>
        <div className='extended-card__menu'>
          <ul className='extended-card__menu-line'>
            <li className='extended-card__menu-item'>Про товар</li>
            <li className='extended-card__menu-item'>Характеристики</li>
            <li className='extended-card__menu-item'>Відгуки</li>
            <li className='extended-card__menu-item'>Відео</li>
            <li className='extended-card__menu-item'>Фото</li>
            <li className='extended-card__menu-item'>Разом дешевше</li>
            <li className='extended-card__menu-item'>Гарантія</li>
            <li className='extended-card__menu-item'>Доставка</li>
            <li className='extended-card__menu-item'>Оплата</li>
          </ul>
        </div>
      </div>
      <div className='extended-card__main-part'>
        <div className='extended-card__main-part-block'>
          <div className='extended-card__slider'>
            <ExtendedProductCardsSwiper good={good} />
          </div>
          <div className='extended-card__main-characteristic'>
            <span className='extended-card__main-characteristic-title'>
              Основні характеристики
            </span>
            <ul className='extended-card__main-characteristic-list'>
              {good.specifications.map((specification) => (
                <li className='extended-card__main-characteristic-item'>
                  {specification.icon}
                  <div className='extended-card__text-part'>
                    <span>{specification.description}</span>
                    <span>{specification.value}</span>
                  </div>
                </li>
              ))}
            </ul>
            <span className='extended-card__main-characteristic-all'>
              Усі характеристики
            </span>
          </div>
        </div>
        <div className='extended-card__main-part-block'>
          <div className='extended-card__sale-banner'>
            <div className='extended-card__sale-banner-logo'>
              <SubscriptionBlockSvgSelector id='logo' />
            </div>
            <div className='extended-card__sale-banner-text'>
              <span>Встигніть купити товар зі знижкою 7%</span>
              <span>Акція діє до 28.02.2022</span>
            </div>
            <button className='extended-card__sale-banner-btn' type='button'>
              <span>Дізнатися більше</span>
            </button>
          </div>
          <div className='extended-card__product-info'>
            <div className='extended-card__color'>
              <span className='extended-card__color-name'>
                Колір: <span>{'value'}</span>
              </span>
              <div className='extended-card__color-panel'>
                <label className='extended-card__color-border'>
                  <span className='extended-card__color-bg' />
                  <input
                    className='extended-card__product-input'
                    type='radio'
                    name='color'
                  />
                </label>
              </div>
            </div>
            <div className='extended-card__brand'>
              <span className='extended-card__brand-title'>Назва бренду</span>
              <div className='extended-card__brand-info'>
                <div className='extended-card__brand-logo'>
                  <img src={good.brand.logo} alt='brand' />
                </div>
                <span className='extended-card__brand-name'>
                  {good.brand.name}
                </span>
              </div>
            </div>
          </div>
          <div className='extended-card__product-info'>
            <div className='extended-card__memory-size-group'>
              <span>Об'єм оперативної пам'яті</span>
              <div className='extended-card__memory-size-value'>
                <label className='extended-card__memory-panel'>
                  <span>{3}</span>
                  <input
                    className='extended-card__product-input'
                    type='radio'
                    name='memory-size'
                    value={3}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className='extended-card__product-info'>
            <div className='extended-card__product-info-part '>
              <span>Пам’ять</span>
              <label className='extended-card__memory-panel'>
                <span>{'128 ГБ'}</span>
                <input
                  className='extended-card__product-input'
                  type='radio'
                  name='memory'
                  value={'128 ГБ'}
                />
              </label>
            </div>
            <div className='extended-card__product-info-part'>
              <span>Выбрати матеріал</span>
              <label className='extended-card__material'>
                <span>{'Метал'}</span>
                <input
                  className='extended-card__product-input'
                  type='radio'
                  name='material'
                  value={'Метал'}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
