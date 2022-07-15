import { IProductCardListItem, ProductCardList } from '../ProductCardList';
import { StarRating } from '../star-rating/StarRating';
import { ExtendedProductCardsSwiper } from './ExtendedProductCardSwiper';
import { SubscriptionBlockSvgSelector } from 'components/subscription-block/SubscriptionBlockSvgSelector';
import { ProductCardSvgSelector } from '../ProductCardSvgSelector';
import { ExtendedProductCardSvgSelector } from './ExtendedProductCardSvgSelector';
import { useState } from 'react';
import { AboutProductArticle } from './AboutProductArticle';
import { SpecificationsBlock } from './SpecificationsBlock';
import { ReviewBlock } from './ReviewBlock';
import { Delivery, IDeliveryMethod, IIDeliveryPlace } from './Delivery';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { IOrder } from '../../basket/AddToBasketWindow/AddToBasket';

interface IPayWays {
  payWaysList: IPayWay[];
}

interface IPayWay {
  icon: string;
  name?: string;
  id: number;
}

// Services
export interface IAdditionalServices {
  insurance: IAdditionalServicesItem[];
}
interface IAdditionalServicesItem {
  currency: string;
  duration: string;
  condition: string;
  price: number;
  name: string;
  id: number;
}

export interface IExtendedProductCard {
  setCurrentProductIdHandler: (productId: number) => void;
  setOrderProductsCount: (count: number) => void;
  serviseList: IAdditionalServices;
  goods: IProductCardListItem[];
  similarJsx: React.ReactNode;
  delivery: IDeliveryMethod[];
  coupledJsx: React.ReactNode;
  place: IIDeliveryPlace[];
  payWaysList: IPayWay[];
}

export const ExtendedProductCard: React.FC<IExtendedProductCard> = ({
  setCurrentProductIdHandler,
  setOrderProductsCount,
  serviseList,
  payWaysList,
  coupledJsx,
  similarJsx,
  delivery,
  place,
  goods,
}) => {
  const [chooseItemColorCorps, setChooseItemColorCorps] = useState<string>(); // for color of item that shoosed
  const [chooseItemColorRam, setChooseItemColorRam] = useState<number>(); // for color of item that shoosed
  const [seeMoreInsurence, setSeeMoreInsurence] = useState<boolean>(false); // for more information of insurence list
  const [productColor, setProductColor] = useState<string>(''); // for color panel
  const [chooseItemColorMemSize, setChooseItemColorMemSize] =
    useState<string>(); // for color of item that shoosed

  //* get current product id from url
  const { productId } = useParams();
  let goodsById = goods.filter(
    (good) => good.id === parseInt(productId || '0')
  );
  let good: IProductCardListItem = {} as IProductCardListItem; // чтобы не требовало все поля этого типа
  if (goodsById.length > 0) {
    good = goodsById[0];
    setCurrentProductIdHandler(parseInt(productId || '0'));
  } else {
    setCurrentProductIdHandler(0);
    return <p>Товар відсутній</p>;
  }

  //*get raiting

  const ratings = JSON.parse(localStorage.getItem('rating') || '[]');
  const foundRating = ratings.filter(
    (rating: { productId: number; value: number }) =>
      rating.productId === good.id
  );
  const rating: { productId: number; value: number } | null =
    foundRating.length > 0 ? foundRating[0] : null;

  //* For insurence list lenght
  let renderServiseList: IAdditionalServicesItem[] = [];
  // To see more
  seeMoreInsurence
    ? (renderServiseList = serviseList.insurance)
    : (renderServiseList = serviseList.insurance.slice(0, 2));

  //*Buy something
  const addToCartHandler: () => void = () => {
    // get products in cart from localStorage
    const orderProducts = JSON.parse(localStorage.getItem('order') || '[]');
    // return if product is not available
    if (!good.available) {
      return;
    }
    // add product to cart
    const orderItems = orderProducts.filter(
      (order: IOrder) => order.productId === good.id // compare good id that we choose with that which in basket already
    );
    if (orderItems.length === 0) {
      localStorage.setItem(
        'order',
        JSON.stringify([
          ...orderProducts,
          { productId: good.id, count: 1, credit: false },
        ])
      );
      // set count
      setOrderCount([
        ...orderProducts,
        { productId: good.id, count: 1, credit: false },
      ]);
    }
  };

  // set count of products in cart
  const setOrderCount: (orderProducts: IOrder[]) => void = (orderProducts) => {
    // calc count of products in order
    let count = 0;
    orderProducts.forEach((order) => (count += order.count));
    setOrderProductsCount(count);
  };

  return (
    <section className='extended-card main-content '>
      <div className='extended-card__wrapper container'>
        <div className='extended-card__header'>
          <div className='extended-card__path'>
            <Link to='/'>
              <span className='extended-card__path-item'>Головна</span>
            </Link>
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
                <StarRating
                  count={5}
                  activeColor={'#F9E505'}
                  value={rating ? rating.value : 0}
                />
                <span className='product-card__rating-value'>
                  {rating === null ? 'Оцініть першим' : rating.value}
                </span>
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
                {good.specifications.main.map((specification) => (
                  <li
                    key={`${specification.description}+${good.id}`}
                    className='extended-card__main-characteristic-item
                '
                  >
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
              <div className='extended-card__color extended-card__product-info-part'>
                <span
                  className={
                    productColor.length > 0
                      ? 'extended-card__color-name'
                      : 'extended-card__color-name hiden-info'
                  }
                >
                  Колір: <span>{productColor}</span>
                </span>
                <div className='extended-card__color-panel'>
                  {good.specifications.colors.map((color, index) => (
                    <label
                      key={good.id + index}
                      className={
                        productColor === color.colorName
                          ? 'extended-card__color-border active-color'
                          : 'extended-card__color-border'
                      }
                    >
                      <span
                        className='extended-card__color-bg'
                        style={{ backgroundColor: `${color.color}` }}
                      />
                      <input
                        className='extended-card__product-input'
                        type='radio'
                        name='color'
                        value={color.colorName}
                        onChange={(e) => setProductColor(e.target.value)}
                      />
                    </label>
                  ))}
                </div>
              </div>
              <div className='extended-card__brand extended-card__product-info-part'>
                <span className='extended-card__brand-title'>Назва бренду</span>
                <div className='extended-card__brand-info'>
                  <div
                    className='extended-card__brand-logo'
                    style={{
                      background: `center / contain no-repeat url(${good.brand.logo})`,
                    }}
                  />
                  <span className='extended-card__brand-name'>
                    {good.brand.name}
                  </span>
                </div>
              </div>
            </div>
            <div className='extended-card__product-info'>
              <div
                className={
                  good.specifications.ram.length > 0
                    ? 'extended-card__memory-size-group extended-card__product-info-part'
                    : 'extended-card__memory-size-group extended-card__product-info-part hidden-info'
                }
              >
                <span>Об'єм оперативної пам'яті</span>
                <div className='extended-card__memory-size-value'>
                  {good.specifications.ram.map((ramsize) => (
                    <label
                      key={`${ramsize}+${good.id}`}
                      className='extended-card__memory-panel'
                      style={
                        chooseItemColorRam === ramsize
                          ? { background: '#F9E505' }
                          : { background: 'initial' }
                      }
                    >
                      <span>{ramsize}</span>
                      <input
                        className='extended-card__product-input'
                        type='radio'
                        name='memory-size'
                        value={ramsize}
                        onChange={() => setChooseItemColorRam(ramsize)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className='extended-card__product-info'>
              <div
                className={
                  good.specifications.memorySize.length > 0
                    ? 'extended-card__product-info-part'
                    : 'extended-card__product-info-part hidden-info'
                }
              >
                <>
                  <span>Пам’ять</span>
                  <div className='extended-card__memory-block'>
                    {good.specifications.memorySize.map((memorysize) => (
                      <label
                        key={`${memorysize}+${good.id}`}
                        className='extended-card__memory-panel'
                        style={
                          chooseItemColorMemSize === memorysize
                            ? { background: '#F9E505' }
                            : { background: 'initial' }
                        }
                      >
                        <span>{memorysize}</span>
                        <input
                          className='extended-card__product-input'
                          type='radio'
                          name='memory'
                          value={memorysize}
                          onChange={() => setChooseItemColorMemSize(memorysize)}
                        />
                      </label>
                    ))}
                  </div>
                </>
              </div>
              <div
                className={
                  good.specifications.corps.length > 0
                    ? 'extended-card__product-info-part'
                    : 'extended-card__product-info-part hidden-info'
                }
              >
                <span>Вибрати матеріал</span>
                <div className='extended-card__material-block'>
                  {good.specifications.corps.map((corpsItem) => (
                    <label
                      key={`${corpsItem}+${good.id}`}
                      className='extended-card__material'
                      style={
                        chooseItemColorCorps === corpsItem
                          ? { background: '#F9E505' }
                          : { background: 'initial' }
                      }
                    >
                      <span>{corpsItem}</span>
                      <input
                        className='extended-card__product-input'
                        type='radio'
                        name='material'
                        value={corpsItem}
                        onChange={() => setChooseItemColorCorps(corpsItem)}
                      />
                    </label>
                  ))}
                </div>
              </div>
            </div>
            <div className='extended-card__product-info extended-card__product-info-column'>
              <div className='extended-card__available'>
                {good.available ? (
                  <span
                    style={{
                      backgroundColor: 'rgba(5,178,99,0.2)',
                    }}
                    className='extended-card__available-btn'
                  >
                    <ProductCardSvgSelector id='available' />
                    <span
                      style={{
                        color: '#05B263',
                      }}
                    >
                      В наявності
                    </span>
                  </span>
                ) : (
                  <span
                    style={{
                      backgroundColor: 'rgba(245,69,3,0.2)',
                    }}
                    className='extended-card__available-btn'
                  >
                    <ProductCardSvgSelector id='none' />
                    <span
                      style={{
                        color: '#F54503',
                      }}
                    >
                      Немає в наявності
                    </span>
                  </span>
                )}
              </div>
              <div className='extended-card__buy-block'>
                <div className='extended-card__buy-way'>
                  <div className='extended-card__prices'>
                    <span className='extended-card__price'>
                      {good.price}&nbsp;₴
                    </span>
                    <span className='extended-card__old-price'>
                      {good.oldprice} &nbsp;₴
                    </span>
                    <span className='extended-card__benefit'>
                      -
                      {Math.round(
                        ((good.oldprice - good.price) / good.oldprice) * 100
                      )}
                      &nbsp;%
                    </span>
                  </div>
                  <span className='extended-card__cashback'>
                    {Math.round(good.price * 0.1)} бонусних ₴
                  </span>
                  <button
                    className='add-to-cart-modal__buy-btn'
                    onClick={() => addToCartHandler()}
                  >
                    Купити
                  </button>
                </div>
                <div className='extended-card__buy-way'>
                  <span className='extended-card__credit-price'>
                    Від &nbsp;{Math.round(good.price / 36)} &nbsp;₴ / міс
                  </span>
                  <button className='add-to-cart-modal__credit-btn'>
                    Купити в кредит
                  </button>
                </div>
              </div>
              <div className='extended-card__price-bnts-list'>
                <button type='button' className='extended-card__price-bnt'>
                  <ProductCardSvgSelector id='basket' />
                  <span> Купити в 1 клік</span>
                </button>
                <button type='button' className='extended-card__price-bnt'>
                  <ExtendedProductCardSvgSelector id='pricewatch' />
                  <span> Слідкувати за ціною</span>
                </button>
                <button type='button' className='extended-card__price-bnt'>
                  <ProductCardSvgSelector id='compare' />
                  <span>Порівняти</span>
                </button>
                <button type='button' className='extended-card__price-bnt'>
                  <ProductCardSvgSelector id='likes' />
                  <span>Додати в обране</span>
                </button>
              </div>
            </div>
            <div className='extended-card__product-info extended-card__product-info--border'>
              <span className='extended-card__product-info-title'>
                Акції та знижки
              </span>
              <div className='extended-card__sales-bnts-list'>
                <button type='button' className='extended-card__sales-bnt'>
                  <ExtendedProductCardSvgSelector id='sale'>
                    <span className='extended-card__sales-btn-sub-title'>
                      Акція
                    </span>
                  </ExtendedProductCardSvgSelector>
                  <span className='extended-card__sales-btn-title'>Акція</span>
                  <span> Суперціна</span>
                </button>
                <button type='button' className='extended-card__sales-bnt'>
                  <ProductCardSvgSelector id='privat'>
                    <span className='extended-card__sales-btn-sub-title'>
                      x21 міс
                    </span>
                  </ProductCardSvgSelector>
                  <span className='extended-card__sales-btn-title'>
                    Оплата частинами
                  </span>
                  <span> 22 платежі </span>
                </button>
                <button type='button' className='extended-card__sales-bnt'>
                  <ExtendedProductCardSvgSelector id='percent'>
                    <span className='extended-card__sales-btn-sub-title'>
                      x24 міс
                    </span>
                  </ExtendedProductCardSvgSelector>
                  <span className='extended-card__sales-btn-title'>Кредит</span>
                  <span>25 місяців, аванс 0%</span>
                </button>
                <button type='button' className='extended-card__sales-bnt'>
                  <ExtendedProductCardSvgSelector id='delivery'>
                    <span className='extended-card__sales-btn-sub-title'>
                      0 ₴
                    </span>
                  </ExtendedProductCardSvgSelector>
                  <span className='extended-card__sales-btn-title'>
                    Швидка доставка
                  </span>
                  <span>Безкоштовно</span>
                </button>
              </div>
            </div>
            <div className='extended-card__product-info extended-card__insurence-info'>
              <span>Додаткові послуги</span>
              <span className='extended-card__insurence-info-sub'>
                Послуги страхування
              </span>
              <div
                className={
                  seeMoreInsurence
                    ? 'extended-card__insurence-group extended-card__insurence-group--transition'
                    : 'extended-card__insurence-group'
                }
              >
                {renderServiseList.map((item) => (
                  <div className='extended-card__insurence-list' key={item.id}>
                    <label className='extended-card__insurence-item'>
                      <input
                        type='checkbox'
                        className='form-checkbox extended-card__insurence-input '
                        value={item.id}
                      />
                      <span className='checkbox-fake' />
                      <span className='extended-card__insurence-title'>
                        {item.name}
                      </span>
                      <ExtendedProductCardSvgSelector id='info' />
                    </label>
                    <span className='extended-card__insurence-price'>
                      {item.price} {item.currency}
                    </span>
                  </div>
                ))}
                <button
                  type='button'
                  onClick={() =>
                    setSeeMoreInsurence(seeMoreInsurence ? false : true)
                  }
                  className='extended-card__see-all'
                >
                  {seeMoreInsurence ? (
                    <span>Дивитись менше</span>
                  ) : (
                    <span>Переглянути всі</span>
                  )}
                </button>
              </div>
            </div>
            <Delivery method={delivery} place={place} />
            <div className='extended-card__product-info extended-card__product-info-column'>
              <span>Оплата</span>
              <div className='extended-card__payway-list'>
                {payWaysList.map((item) => (
                  <button key={item.id} className='extended-card__payway-btn'>
                    <div className='extended-card__payway-icon'>
                      <img src={item.icon} alt='img' />
                    </div>
                    <span>{item.name}</span>
                  </button>
                ))}
              </div>
            </div>
            <div
              className='extended-card__product-info
            extended-card__product-info-column'
            >
              <span>Гарантія</span>
              <div className='extended-card__payway-list'>
                <button className='extended-card__payway-btn'>
                  <ExtendedProductCardSvgSelector id='garanty' />
                  <span className='extended-card__garanty-title'>
                    Гарантія &nbsp;
                    <span className='extended-card__garanty-title--bold'>
                      12 місяців
                    </span>
                  </span>
                </button>
                <button className='extended-card__payway-btn'>
                  <ExtendedProductCardSvgSelector id='change' />
                  <span className='extended-card__garanty-title'>
                    Обмін/повернення впродовж 14 днів
                  </span>
                </button>
              </div>
              <button className='extended-card__see-all'>
                <span> Дізнатись більше</span>
              </button>
            </div>
          </div>
        </div>
        {coupledJsx}
        <AboutProductArticle good={good} />
        <div className='extended-card__discription-part'>
          <SpecificationsBlock good={good} />
          <ReviewBlock />
        </div>
      </div>
      {similarJsx}
    </section>
  );
};
