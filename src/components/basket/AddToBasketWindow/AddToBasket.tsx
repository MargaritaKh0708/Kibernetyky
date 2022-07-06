import {
  IProductCardListItem,
  ProductCardList,
} from 'components/product-card/ProductCardList';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { useEffect, useState } from 'react';

interface AddToCartType {
  products: IProductCardListItem[]; //array of products
  closeHandler: () => void; // for modal w
  isActive: boolean; // for modal w
  productId: string; //id of good that we want to bye
}

export interface IOrder {
  productId: string;
  count: number;
  credit: boolean;
}

export const AddToCart: React.FC<AddToCartType> = ({
  products,
  closeHandler,
  isActive,
  productId,
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
      (order) => order.productId === productId // compare good id that we choose with thts which in basket already
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
    <div className='container'>
      <div className='row'>
        <div className='img-block'>
          <img src={product.category.mainImage} alt='img'></img>
        </div>
        <div className='buy-block'>
          <p className='buy-block__text'>
            {product.name}
            <span className='buy-block__text--bold'> додано до кошика</span>
          </p>
          <p className='buy-block__text'>
            Товарів у кошику:
            <span className='buy-block__text--bold'>{orderProductsCount}</span>
          </p>
          <div className='buy-block__footer'>
            <div className='buy-block__link'>
              <a href='#'>Перейти до кошику</a>
            </div>
            <div className='buy-block__buttons'>
              <button
                className='buy-block__credit-btn'
                onClick={() => addProductToOrder(true)}
              >
                Купити в кредит
              </button>
              <button
                className='buy-block__buy-btn'
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
    <ProductCardList type='coupled' data={coupledProducts} />
  );

  return (
    <ModalWindow
      active={isActive}
      setActive={closeHandler}
      className='add-to-basket-modal'
    >
      <>{[ProductJsx, CoupledProductsJsx]}</>
    </ModalWindow>
  );
};
