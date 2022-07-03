import mainPic from 'assets/icons/goods-card-icons/mainPic.png';
import { ProductCardSvgSelector } from './ProductCardSvgSelector';
import { StarRating, IStarRatingProps } from './star-rating/StarRating';
import { useState } from 'react';
import { SelectList } from './select-list/SelectList';
// import { IProductCardListItem} from './ProductCardList';

interface IProductCardProps {
  available: boolean;
  oldprice: number;
  price: number;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  available,
  oldprice,
  price,
}) => {
  const [rating, setRating] = useState<number>(0); // Star rating value
  const [compare, setCompare] = useState<boolean>(false); // Change icon of compare button
  const [favorite, setFavorite] = useState<boolean>(false); // Change icon of like-btn
  const [deal, setDeal] = useState<boolean>(false); // Basket changes

  const [hiddenList, setHiddenList] = useState<boolean>(true); // Hidden part state

  const StarRatingProps: IStarRatingProps = {
    size: 12,
    count: 5,
    color: '#9E9E9E',
    activeColor: '#F9E505',
    isHalf: true,
    onChange: (newRating: number) => {
      setRating(newRating);
    },
  };

  return (
    <>
      <div className='product-card'>
        <div className='product-card__wrapper'>
          <div className='product-card__part'>
            <div className='product-card__promo'>
              <div className='top'>
                <span>Топ продажів</span>
              </div>
              <div className='sale'>
                <span> Акція </span>
              </div>
            </div>
            <div className='product-card__picture'>
              <img src={mainPic} alt='good' />
            </div>
            <div className='product-card__colors-panel'>
              <label className='product-card__colors-panel-item'>
                <input type='checkbox' className='product-card__active-color' />
                <span className='product-card__color'></span>
              </label>
              <label className='product-card__colors-panel-item'>
                <input type='checkbox' className='product-card__active-color' />
                <span className='product-card__color'></span>
              </label>
            </div>
          </div>
          <div className='product-card__part main-info-part'>
            <div className='product-card__info'>
              <div className='product-card__availiable'>
                {available ? (
                  <>
                    <ProductCardSvgSelector id='available' />
                    <span>В наявності</span>
                  </>
                ) : (
                  <>
                    <ProductCardSvgSelector id='none' />
                    <span>Немає в наявності</span>
                  </>
                )}
              </div>
              <div className='product-card__cashback'>
                <ProductCardSvgSelector id='coin' />
                <div className='product-card__cashback-sum'>
                  <span className='product-card__cashback-title'>Кешбек:</span>
                  <span className='product-card__cashback-value'>
                    {Math.round(price * 0.1)}
                  </span>
                  <span className='product-card__currency'>{'₴'}</span>
                </div>
              </div>
            </div>
          </div>
          <span className='product-card__goodname'>
            Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)
          </span>
          <div className='product-card__part clients-mark'>
            <div className='product-card__clients-mark'>
              <div className='product-card__rating'>
                <StarRating {...StarRatingProps} />
                <span className='product-card__rating-value'>{rating}</span>
              </div>
              <div className='product-card__review'>
                <ProductCardSvgSelector id='review' />
              </div>
            </div>
            <div className='product-card__step-to-buy'>
              <label className='product-card__compare'>
                <input
                  onChange={() => setCompare(compare ? false : true)}
                  type='checkbox'
                  className='product-card__compare-input'
                  checked={compare}
                />
                {compare ? <ProductCardSvgSelector id='success' /> : ''}
                <ProductCardSvgSelector id='compare' />
              </label>
              <label className='product-card__likes'>
                <input type='checkbox' className='product-card__likes-input' />
                <div
                  className={favorite ? 'likes likes-color' : 'likes'}
                  onClick={() => setFavorite(favorite ? false : true)}
                >
                  <ProductCardSvgSelector id='likes' />
                </div>
              </label>
            </div>
          </div>
          <div className='product-card__part pay-ways-block'>
            <SelectList
              price={price}
              hiddenList={hiddenList}
              setHiddenList={setHiddenList}
            />
          </div>
          <div className='product-card__part bottom-part'>
            <div className='product-card__price'>
              <div className='product-card__price-value'>
                <span className='product-card__price-old'>{`${oldprice} ₴`}</span>
                <span className='product-card__benefit'>{`-${Math.round(
                  ((oldprice - price) / oldprice) * 100
                )} %`}</span>
              </div>
              <div className='product-card__price-new'>
                <span className='product-card__price-new-value'>{`${price} ₴`}</span>
              </div>
            </div>
            {/* This block is to small card version */}
            <div className='product-card__cashback h-small-version'>
              <ProductCardSvgSelector id='coin' />
              <div className='product-card__cashback-sum h-small-version-cashback'>
                <span className='product-card__cashback-title'>Кешбек:</span>
                <span className='product-card__cashback-value'>
                  {`${Math.round(price * 0.1)}₴`}
                </span>
              </div>
            </div>
            <div className='product-card__step-to-buy h-small-version'>
              <label className='product-card__compare'>
                <input
                  onChange={() => setCompare(compare ? false : true)}
                  type='checkbox'
                  className='product-card__compare-input'
                  checked={compare}
                />
                {compare ? <ProductCardSvgSelector id='success' /> : ''}
                <ProductCardSvgSelector id='compare' />
              </label>
              <label className='product-card__likes'>
                <input type='checkbox' className='product-card__likes-input' />
                <div
                  className={favorite ? 'likes likes-color' : 'likes'}
                  onClick={() => setFavorite(favorite ? false : true)}
                >
                  <ProductCardSvgSelector id='likes' />
                </div>
              </label>
            </div>
            <button
              className={
                deal
                  ? 'product-card__basket-btn in-basket'
                  : 'product-card__basket-btn'
              }
              onClick={() => setDeal(deal ? false : true)}
            >
              <div className='product-card__basket-icon'>
                {deal ? <ProductCardSvgSelector id='success' /> : ''}
                <ProductCardSvgSelector id='basket' />
              </div>
              <span className='product-card__basket-title'>
                {deal ? 'Видалити' : 'У кошик'}
              </span>
            </button>
          </div>
          <div className='product-card__part hide-part'>
            <ul className='product-card__hide-list'>
              <li className='product-card__hide-list-item'>
                <span className='product-card__hide-list-item-value'>
                  Діагональ екрану:
                </span>
                <span className='product-card__hide-list-item-property'>
                  10,3”
                </span>
              </li>
              <li className='product-card__hide-list-item'>
                <span className='product-card__hide-list-item-value'>
                  Розширення екрану:
                </span>
                <span className='product-card__hide-list-item-property'>
                  1920х1200
                </span>
              </li>
              <li className='product-card__hide-list-item'>
                <span className='product-card__hide-list-item-value'>
                  Матриця:
                </span>
                <span className='product-card__hide-list-item-property'>
                  IPS
                </span>
              </li>
              <li className='product-card__hide-list-item'>
                <span className='product-card__hide-list-item-value'>
                  Оперативна пам’ять:
                </span>
                <span className='product-card__hide-list-item-property'>
                  4 ГБ
                </span>
              </li>
              <li className='product-card__hide-list-item'>
                <span className='product-card__hide-list-item-value'>
                  Стандарт захисту:
                </span>
                <span className='product-card__hide-list-item-property'>
                  Без захисту
                </span>
              </li>
              <li className='product-card__hide-list-item'>
                <span className='product-card__hide-list-item-value'>
                  Процесор:
                </span>
                <span className='product-card__hide-list-item-property'>
                  MediaTek Helio P22T
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

//TODO hide-list-item - в массиве считываем {свойство} и {значение} опеределенного блока с кратким и характеристиками и выводим их
