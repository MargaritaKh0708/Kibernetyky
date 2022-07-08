import { IProductCardListItem } from '../../product-card/ProductCardList';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { useEffect, useState } from 'react';
import { ProductCardList } from 'components/product-card/ProductCardList';

interface AddToCartType {
  products: IProductCardListItem[]; //array of products
  closeHandler: () => void; // for modal w
  isActive: boolean; // for modal w
  productId: number; //id of good that we want to bye
  setOrderCountHandler?: (count: number) => void;
  setFavoriteCountHanler?: (count: number) => void;
}

export interface IOrder {
  productId: number;
  count: number;
  credit: boolean;
}

export const AddToCart: React.FC<AddToCartType> = ({
  products,
  closeHandler,
  isActive,
  productId,
  setOrderCountHandler,
  setFavoriteCountHanler,
}) => {
  const [orderProducts, setOrderProducts] = useState<IOrder[]>([]); //basket compatible - goods inside
  const [orderProductsCount, setOrderProductsCount] = useState<number>(0); // count of goods inside

  // load orderProducts from localStorage
  useEffect(() => {
    const orderItems = JSON.parse(localStorage.getItem('order') || '[]');
    if (orderItems && Array.isArray(orderItems)) {
      setOrderProducts(orderItems);

      // calc count of products in order
      let count = 0;
      orderItems.forEach((order) => (count += order.count));
      if (count !== orderProductsCount) {
        setOrderProductsCount(count);
      }
    }
    //will done every time orderProductsCount changes
  }, [orderProductsCount, isActive]);

  // save order to localStorage
  const addProductToOrder: (credit: boolean) => void = (credit) => {
    const orderItems = orderProducts.filter(
      (order) => order.productId === productId // compare good id that we choose with that which in basket already
    );
    if (orderItems.length === 0) {
      localStorage.setItem(
        'order',
        JSON.stringify([...orderProducts, { productId, count: 1, credit }])
      );
      setOrderProductsCount((count) => count + 1);
    }
  };

  // find product by id
  const foundProducts = products.filter((product) => product.id === productId);
  const product = foundProducts.length > 0 ? foundProducts[0] : null;

  // return if can't find product
  if (!product) {
    return <p>Товар не знайдено</p>;
  }

  // find coupled products
  const coupledCategories = product.category.coupled;
  const coupledProducts = products.filter((p) =>
    coupledCategories.includes(p.category.id)
  );

  const ProductJsx = (
    <div className='add-to-cart-modal__head-part'>
      <div className='add-to-cart-modal__row'>
        <div className='add-to-cart-modal__img-block'>
          <img src={product.category.mainImage} alt='img'></img>
        </div>
        <div className='add-to-cart-modal__buy-block'>
          <p className='add-to-cart-modal__text'>
            {product.name}
            <span className='add-to-cart-modal__text_bold'>
              &nbsp; додано до кошика
            </span>
          </p>
          <p className='add-to-cart-modal__text'>
            Товарів у кошику: &nbsp;
            <span className='add-to-cart-modal__text_bold'>
              {orderProductsCount}
            </span>
          </p>
          <div className='add-to-cart-modal__footer'>
            <div className='add-to-cart-modal__link'>
              <a href='#'>Перейти до кошику</a>
            </div>
            <div className='add-to-cart-modal__buttons'>
              <button
                className='add-to-cart-modal__credit-btn'
                onClick={() => addProductToOrder(true)}
              >
                Купити в кредит
              </button>
              <button
                className='add-to-cart-modal__buy-btn'
                onClick={() => addProductToOrder(false)}
              >
                Купити
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const CoupledProductsJsx = (
    <ProductCardList
      rowQuantity={1}
      extraStyles='add-to-cart__list'
      setFavoriteCountHandler={setFavoriteCountHanler}
      setOrderCountHandler={setOrderCountHandler}
      data={coupledProducts}
      type='coupled'
    />
  );

  return (
    <ModalWindow
      className='add-to-cart-modal'
      setActive={closeHandler}
      active={isActive}
    >
      <>{[ProductJsx, CoupledProductsJsx]}</>
    </ModalWindow>
  );
};
