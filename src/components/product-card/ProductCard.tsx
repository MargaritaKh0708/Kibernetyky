import mainPic from 'assets/icons/goods-card-icons/mainPic.png';
import { ProductCardSvgSelector } from './ProductCardSvgSelector';
import { StarRating, IStarRatingProps } from './star-rating/StarRating';
import { useEffect, useState } from 'react';
import { SelectList } from './select-list/SelectList';
import { bankArray } from 'components/backend/DataList';
import { IOrder } from 'components/basket/AddToBasketWindow/AddToBasket';
import { Link } from 'react-router-dom';
import { IProductCardListItem } from 'components/product-card/ProductCardList';

interface IRating {
  productId: number;
  value: number;
}

interface IProductCardProps {
  product: IProductCardListItem; //array of products
  setCurrentProductIdHandler: (productId: number) => void;
  setAddToCartActiveHandler: (state: boolean) => void;
  setFavoriteCountHandler?: (count: number) => void;
  setCompareCountHandler: (count: number) => void;
  setOrderCountHandler?: (count: number) => void;
  addToCartActive: boolean;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  setCurrentProductIdHandler,
  setAddToCartActiveHandler,
  setFavoriteCountHandler,
  setCompareCountHandler,
  setOrderCountHandler,
  addToCartActive,
  product,
}) => {
  const [favorite, setFavorite] = useState<boolean>(false); // Change icon of like-btn
  const [compare, setCompare] = useState<boolean>(false); // Change icon of compare button
  const [deal, setDeal] = useState<boolean>(false); // Basket changes
  const [rating, setRating] = useState<number>(0); // Star rating value

  const [hiddenList, setHiddenList] = useState<boolean>(true); // Hidden part state

  const StarRatingProps: IStarRatingProps = {
    activeColor: '#F9E505',
    color: '#9E9E9E',
    isHalf: true,
    value: rating,
    size: 12,
    count: 5,
    onChange: (newRating: number) => {
      setRatingHandler(newRating);
      setRating(newRating);
    },
  };

  useEffect(() => {
    // get rating data from localStorage
    const ratings = JSON.parse(localStorage.getItem('rating') || '[]');
    ratings.forEach((rating: IRating) => {
      if (rating.productId === product.id) {
        setRating(rating.value);
      }
    });
    console.log('оцінка встановилась', rating);
  }, [rating]);

  // load data from localStorage
  useEffect(() => {
    // get products in cart from localStorage
    const orderProducts = JSON.parse(localStorage.getItem('order') || '[]');
    orderProducts.forEach((order: IOrder) => {
      if (order.productId === product.id) setDeal(true);
    });
    setOrderProductsCount(orderProducts);

    // get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');
    favorites.forEach((favoriteProductId: number) => {
      if (favoriteProductId === product.id) {
        setFavorite(true);
      }
    });
    setFavoriteProductsCount(favorites);

    // get compare data from localStorage
    const compareIdList = JSON.parse(localStorage.getItem('compare') || '[]');
    compareIdList.forEach((compareProductId: number) => {
      if (compareProductId === product.id) {
        setCompare(true);
      }
    });
    setCompareProductsCount(compareIdList);
  }, []);

  const setRatingHandler: (ratingValue: number) => void = (ratingValue) => {
    // get ratings from localStorage
    const ratings = JSON.parse(localStorage.getItem('rating') || '[]');

    const foundRating = ratings.filter(
      (rating: IRating) => rating.productId === product.id
    );

    let ratingsToSave: IRating[] = [];
    if (foundRating.length === 0) {
      ratingsToSave = ratings;
    } else {
      // replace rating value
      const changedRating = ratings.filter(
        (rating: IRating) => rating.productId !== product.id
      );
      ratingsToSave = changedRating;
    }
    // save rating
    localStorage.setItem(
      'rating',
      JSON.stringify([
        ...ratingsToSave,
        { productId: product.id, value: ratingValue },
      ])
    );
    setRating(ratingValue);
  };

  //Buy something
  const addToCartHandler: () => void = () => {
    // get products in cart from localStorage
    const orderProducts = JSON.parse(localStorage.getItem('order') || '[]');

    if (deal) {
      // delete product by productId
      const changedOrderProducts = orderProducts.filter(
        (order: IOrder) => order.productId !== product.id
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
      if (!product.available) {
        return;
      }

      // add product to cart
      const orderItems = orderProducts.filter(
        (order: IOrder) => order.productId === product.id // compare good id that we choose with that which in basket already
      );
      if (orderItems.length === 0) {
        localStorage.setItem(
          'order',
          JSON.stringify([
            ...orderProducts,
            { productId: product.id, count: 1, credit: false },
          ])
        );
        // set count
        setOrderProductsCount([
          ...orderProducts,
          { productId: product.id, count: 1, credit: false },
        ]);

        // set productId for AddToCart component
        setCurrentProductIdHandler(product.id);
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
        (favoriteProductId: number) => favoriteProductId !== product.id
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
        (favoriteProductId: number) => favoriteProductId === product.id
      );
      if (favoriteItems.length === 0) {
        localStorage.setItem(
          'favorite',
          JSON.stringify([...favorites, product.id])
        );
        // set count
        setFavoriteProductsCount([...favorites, product.id]);
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
        (compareProductId: number) => compareProductId !== product.id
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
        (compareProductId: number) => compareProductId === product.id
      );
      if (compareItems.length === 0) {
        localStorage.setItem(
          'compare',
          JSON.stringify([...compareIdList, product.id])
        );
        // set count
        setCompareProductsCount([...compareIdList, product.id]);
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
          <div className='product-card__part head__part'>
            <div className='product-card__promo'>
              {product.leader ? (
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
            <div
              className='product-card__picture'
              style={{
                background: `center / contain no-repeat url(${
                  product.imageCollection.length > 0
                    ? product.imageCollection[0]
                    : product.category.mainImage
                })`,
              }}
            ></div>
            <div className='product-card__colors-panel'>
              {product.specifications.colors.map((color) => (
                <label
                  className='product-card__colors-panel-item'
                  key={product.id + color.colorName}
                >
                  <input
                    type='checkbox'
                    className='product-card__active-color'
                  />
                  <span
                    className='product-card__color'
                    style={{ backgroundColor: `${color.color}` }}
                  ></span>
                </label>
              ))}
            </div>
          </div>
          <div className='product-card__part main-info-part'>
            <div className='product-card__info'>
              <div className='product-card__availiable'>
                {product.available ? (
                  <>
                    <ProductCardSvgSelector id='available' />
                    <span className='product-card__availiable-item'>
                      В наявності
                    </span>
                  </>
                ) : (
                  <>
                    <ProductCardSvgSelector id='none' />
                    <span className='product-card__availiable-item'>
                      Немає в наявності
                    </span>
                  </>
                )}
              </div>
              <div className='product-card__cashback'>
                <ProductCardSvgSelector id='coin' />
                <div className='product-card__cashback-sum'>
                  <span className='product-card__cashback-title'>Кешбек:</span>
                  <span className='product-card__cashback-value'>
                    {Math.round(product.price * 0.1)}
                  </span>
                  <span className='product-card__currency'>{'₴'}</span>
                </div>
              </div>
            </div>
          </div>
          <Link
            className='product-card__goodname-link'
            to={`/product/${product.id}`}
          >
            <span className='product-card__goodname'>
              {product.name} ({product.model})
            </span>
          </Link>
          <div className='product-card__part clients-mark'>
            <div className='product-card__clients-mark'>
              <div className='product-card__rating'>
                <StarRating
                  activeColor='#F9E505'
                  color='#9E9E9E'
                  isHalf={true}
                  value={rating}
                  size={12}
                  count={5}
                  onChange={(newRating: number) => {
                    setRatingHandler(newRating);
                    setRating(newRating);
                    console.log('raiting', newRating);
                  }}
                />
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
              bankArray={bankArray}
              price={product.price}
              hiddenList={hiddenList}
              setHiddenList={setHiddenList}
            />
          </div>
          <div className='product-card__part bottom-part'>
            <div className='product-card__price'>
              <div className='product-card__price-value'>
                <span className='product-card__price-old'>{`${product.oldprice} ₴`}</span>
                <span className='product-card__benefit'>{`-${Math.round(
                  ((product.oldprice - product.price) / product.oldprice) * 100
                )} %`}</span>
              </div>
              <div className='product-card__price-new'>
                <span className='product-card__price-new-value'>{`${product.price} ₴`}</span>
              </div>
            </div>
            {/* This block is to small card version */}
            <div className='product-card__cashback h-small-version'>
              <ProductCardSvgSelector id='coin' />
              <div className='product-card__cashback-sum h-small-version-cashback'>
                <span className='product-card__cashback-title'>Кешбек:</span>
                <span className='product-card__cashback-value'>
                  {`${Math.round(product.price * 0.1)}₴`}
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
        </div>
        <div className='product-card__part hide-part'>
          <ul className='product-card__hide-list'>
            {product.specifications.main.map((specification, index) => (
              <li
                className='product-card__hide-list-item'
                key={product.id + index}
              >
                <span className='product-card__hide-list-item-value'>
                  {specification.description}:&nbsp;
                </span>
                <span className='product-card__hide-list-item-property'>
                  {specification.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
