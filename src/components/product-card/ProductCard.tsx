//import mainPic from 'assets/icons/goods-card-icons/mainPic.png';
import { ProductCardSvgSelector } from './ProductCardSvgSelector';
import { StarRating, IStarRatingProps } from './star-rating/StarRating';
import { useEffect, useState } from 'react';
import { SelectList } from './select-list/SelectList';
import {
  AddToCart,
  IOrder,
} from 'components/basket/AddToBasketWindow/AddToBasket';
import { IProductCardListItem } from 'components/product-card/ProductCardList';
import { Link } from 'react-router-dom';

interface IRating {
  productId: number;
  value: number;
}

interface IProductCardProps {
  products: IProductCardListItem[]; //array of products
  available: boolean;
  productId: number; //id of good that we want to bye
  leaders: boolean;
  oldprice: number;
  goodName: string;
  goodModel: string;
  mainPic: string;
  price: number;
  setOrderCountHandler?: (count: number) => void;
  setFavoriteCountHandler?: (count: number) => void;
  setCompareCountHandler: (count: number) => void;
  setAddToCartActiveHandler: (state: boolean) => void;
  setCurrentProductIdHandler: (productId: number) => void;
  addToCartActive: Boolean;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  setOrderCountHandler,
  setCompareCountHandler,
  setFavoriteCountHandler,
  addToCartActive,
  setAddToCartActiveHandler,
  setCurrentProductIdHandler,
  goodModel,
  available,
  productId,
  goodName,
  products,
  oldprice,
  leaders,
  price,
  mainPic,
}) => {
  const [rating, setRating] = useState<number>(0); // Star rating value
  const [compare, setCompare] = useState<boolean>(false); // Change icon of compare button
  const [favorite, setFavorite] = useState<boolean>(false); // Change icon of like-btn
  const [deal, setDeal] = useState<boolean>(false); // Basket changes

  //const [viewCart, setViewCart] = useState<boolean>(false); // for pre-basket card

  const [hiddenList, setHiddenList] = useState<boolean>(true); // Hidden part state

  const StarRatingProps: IStarRatingProps = {
    size: 12,
    count: 5,
    color: '#9E9E9E',
    activeColor: '#F9E505',
    isHalf: true,
    value: rating,
    onChange: (newRating: number) => {
      setRatingHandler(newRating);
    },
  };

  // load data from localStorage
  useEffect(() => {
    // get products in cart from localStorage
    const orderProducts = JSON.parse(localStorage.getItem('order') || '[]');
    orderProducts.forEach((order: IOrder) => {
      if (order.productId === productId) setDeal(true);
    });
    setOrderProductsCount(orderProducts);

    // get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');
    favorites.forEach((favoriteProductId: number) => {
      if (favoriteProductId === productId) {
        setFavorite(true);
      }
    });
    setFavoriteProductsCount(favorites);

    // get compare data from localStorage
    const compareIdList = JSON.parse(localStorage.getItem('compare') || '[]');
    compareIdList.forEach((compareProductId: number) => {
      if (compareProductId === productId) {
        setCompare(true);
      }
    });
    setCompareProductsCount(compareIdList);

    // get rating data from localStorage
    const ratings = JSON.parse(localStorage.getItem('rating') || '[]');
    ratings.forEach((rating: IRating) => {
      if (rating.productId === productId) {
        setRating(rating.value);
      }
    });
  }, []);

  const setRatingHandler: (ratingValue: number) => void = (ratingValue) => {
    // get ratings from localStorage
    const ratings = JSON.parse(localStorage.getItem('rating') || '[]');

    const foundRating = ratings.filter(
      (rating: IRating) => rating.productId === productId
    );

    let ratingsToSave: IRating[] = [];
    if (foundRating.length === 0) {
      ratingsToSave = ratings;
    } else {
      // replace rating value
      const changedRating = ratings.filter(
        (rating: IRating) => rating.productId !== productId
      );
      ratingsToSave = changedRating;
    }
    // save rating
    localStorage.setItem(
      'rating',
      JSON.stringify([...ratingsToSave, { productId, value: ratingValue }])
    );
    setRating(ratingValue);
  };

  //
  const addToCartHandler: () => void = () => {
    // get products in cart from localStorage
    const orderProducts = JSON.parse(localStorage.getItem('order') || '[]');

    if (deal) {
      // delete product by productId
      const changedOrderProducts = orderProducts.filter(
        (order: IOrder) => order.productId !== productId
      );
      // write to localStorage if product was deleted
      if (orderProducts.length !== changedOrderProducts.length) {
        localStorage.setItem('order', JSON.stringify(changedOrderProducts));
        // set count
        setOrderProductsCount(changedOrderProducts);
      }
      // change icon
      setDeal(false);
    } else {
      // return if product is not available
      if (!available) {
        return;
      }

      // add product to cart
      const orderItems = orderProducts.filter(
        (order: IOrder) => order.productId === productId // compare good id that we choose with that which in basket already
      );
      if (orderItems.length === 0) {
        localStorage.setItem(
          'order',
          JSON.stringify([
            ...orderProducts,
            { productId, count: 1, credit: false },
          ])
        );
        // set count
        setOrderProductsCount([
          ...orderProducts,
          { productId, count: 1, credit: false },
        ]);

        // set productId for AddToCart component
        setCurrentProductIdHandler(productId);
        // toggle view of AddToCart component
        setAddToCartActiveHandler(addToCartActive ? false : true);
        //setViewCart(viewCart ? false : true);
        // change icon
        setDeal(true);
      }
    }
  };

  // set count of products in cart
  const setOrderProductsCount: (orderProducts: IOrder[]) => void = (
    orderProducts
  ) => {
    // calc count of products in order
    let count = 0;
    orderProducts.forEach((order) => (count += order.count));
    if (setOrderCountHandler) {
      setOrderCountHandler(count);
    }
  };

  const setFavoriteHandler: () => void = () => {
    // get fovorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');

    if (favorite) {
      // delete favorite by productId
      const changedFavorites = favorites.filter(
        (favoriteProductId: number) => favoriteProductId !== productId
      );
      // write to localStorage if product was deleted
      if (favorites.length !== changedFavorites.length) {
        localStorage.setItem('favorite', JSON.stringify(changedFavorites));
        // set count
        setFavoriteProductsCount(changedFavorites);
      }
    } else {
      // add favorite product to localStorage
      const favoriteItems = favorites.filter(
        (favoriteProductId: number) => favoriteProductId === productId
      );
      if (favoriteItems.length === 0) {
        localStorage.setItem(
          'favorite',
          JSON.stringify([...favorites, productId])
        );
        // set count
        setFavoriteProductsCount([...favorites, productId]);
      }
    }
    setFavorite(favorite ? false : true);
  };

  // set count of favorite products
  const setFavoriteProductsCount: (favorites: number[]) => void = (
    favorites
  ) => {
    // set count of favorites products
    if (setFavoriteCountHandler) {
      setFavoriteCountHandler(favorites.length);
    }
  };

  const setCompareHandler: () => void = () => {
    // get compare data from localStorage
    const compareIdList = JSON.parse(localStorage.getItem('compare') || '[]');

    if (compare) {
      // delete compare by productId
      const changedCompareIdList = compareIdList.filter(
        (compareProductId: number) => compareProductId !== productId
      );
      // write to localStorage if product was deleted
      if (compareIdList.length !== changedCompareIdList.length) {
        localStorage.setItem('compare', JSON.stringify(changedCompareIdList));
        // set count
        setCompareProductsCount(changedCompareIdList);
      }
    } else {
      // add compare product to localStorage
      const compareItems = compareIdList.filter(
        (compareProductId: number) => compareProductId === productId
      );
      if (compareItems.length === 0) {
        localStorage.setItem(
          'compare',
          JSON.stringify([...compareIdList, productId])
        );
        // set count
        setCompareProductsCount([...compareIdList, productId]);
      }
    }
    setCompare(compare ? false : true);
  };

  // set count of compare products
  const setCompareProductsCount: (compareIdList: number[]) => void = (
    compareIdList
  ) => {
    // set count of compare products
    setCompareCountHandler(compareIdList.length);
    return undefined;
  };

  return (
    <>
      <div className='product-card'>
        <div className='product-card__wrapper'>
          <div className='product-card__part'>
            <div className='product-card__promo'>
              {leaders ? (
                <div className='top'>
                  <span>Топ продажів</span>
                </div>
              ) : (
                ''
              )}
              {
                <div className='sale'>
                  <span> Акція </span>
                </div>
              }
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
          <Link to={`/product/${productId}`}>
            <span className='product-card__goodname'>
              {goodName} ({goodModel})
            </span>
          </Link>
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
                  onChange={() => setCompareHandler()}
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
                  onClick={() => setFavoriteHandler()}
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
                  onChange={() => setCompareHandler()}
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
                  onClick={() => setFavoriteHandler()}
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
              onClick={() => {
                addToCartHandler();
              }}
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
