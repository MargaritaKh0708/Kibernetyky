import { GoodsPresentationBlock } from 'components/goods-presentation-block/GoodsPresentationBlock';
import { BrandsLine } from 'components/popular-brands-line/BrandsLine';
import { ProductCardList } from 'components/product-card/ProductCardList';
import { TopCategoriesBlock } from 'components/top-categories/TopCategoriesBlock';
import { BenefitsLine } from 'components/benefits-line/BenefitsLine';
import { SubscriptionBlock } from 'components/subscription-block/SubscriptionBlock';
import { ShopHistory } from 'components/shop-history/ShopHistory';
import { ICatalogItem } from 'components/goods-presentation-block/AsideMenu/AsideMenu';
import { IProductCardListItem } from 'components/product-card/ProductCardList';
import { AddToCart } from 'components/basket/AddToBasketWindow/AddToBasket';
import { VideoReviewBlock } from 'components/video-review/VideoReviewBlock';

export interface IMainPage {
  setOrderCountHandler: (value: number) => void;
  setFavoriteCountHandler: (value: number) => void;
  setCurrentProductIdHandler: (value: number) => void;
  setAddToCartActiveHandler: (value: boolean) => void;
  setCompareCountHandler: (value: number) => void;
  viewHandler: (value: boolean) => void;
  goods: IProductCardListItem[];
  oldgoods: ICatalogItem[];
  isActive: boolean;
  productId: number;
}

export const MainPage: React.FC<IMainPage> = ({
  setCurrentProductIdHandler,
  setFavoriteCountHandler,
  setCompareCountHandler,
  setOrderCountHandler,
  viewHandler,
  productId,
  isActive,
  oldgoods,
  goods,
}) => {
  return (
    <div className='main-page-content main-content'>
      {/* <AddToCart
        setCurrentProductIdHandler={setCurrentProductIdHandler}
        setFavoriteCountHandler={setFavoriteCountHandler}
        setCompareCountHandler={setCompareCountHandler}
        setOrderCountHandler={setOrderCountHandler}
        viewHandler={viewHandler}
        productId={productId}
        isActive={isActive}
        products={goods}
      /> */}
      <GoodsPresentationBlock goods={oldgoods} />
      <BrandsLine data={goods} />
      <ProductCardList
        productId={productId}
        rowQuantity={2}
        setCurrentProductIdHandler={setCurrentProductIdHandler}
        setFavoriteCountHandler={setFavoriteCountHandler}
        setCompareCountHandler={setCompareCountHandler}
        setOrderCountHandler={setOrderCountHandler}
        type='leaders'
        data={goods}
      />
      <ProductCardList
        rowQuantity={2}
        productId={productId}
        setCurrentProductIdHandler={setCurrentProductIdHandler}
        setFavoriteCountHandler={setFavoriteCountHandler}
        setCompareCountHandler={setCompareCountHandler}
        setOrderCountHandler={setOrderCountHandler}
        type='novelties'
        data={goods}
      />
      <TopCategoriesBlock data={goods} />
      <VideoReviewBlock />
      <BenefitsLine />
      <SubscriptionBlock />
      <ShopHistory />
    </div>
  );
};
