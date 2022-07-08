import { Cart } from 'components/basket/Cart';
import { IProductCardListItem } from 'components/product-card/ProductCardList';

export interface ICartPage {
  setOrderProductsCount: (value: number) => void;
  setFavoriteCount: (value: number) => void;
  goods: IProductCardListItem[];
}

export const CartPage: React.FC<ICartPage> = ({
  setOrderProductsCount,
  setFavoriteCount,
  goods,
}) => {
  return (
    <div className='cart-page-content main-content'>
      <Cart
        setOrderCountHandler={setOrderProductsCount}
        setFavoriteCountHandler={setFavoriteCount}
        data={goods}
      />
    </div>
  );
};
