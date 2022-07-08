import { GoodsPresentationBlock } from 'components/goods-presentation-block/GoodsPresentationBlock';
import { BrandsLine } from 'components/popular-brands-line/BrandsLine';
import { ProductCardList } from 'components/product-card/ProductCardList';
import { TopCategoriesBlock } from 'components/top-categories/TopCategoriesBlock';
import { BenefitsLine } from 'components/benefits-line/BenefitsLine';
import { SubscriptionBlock } from 'components/subscription-block/SubscriptionBlock';
import { ShopHistory } from 'components/shop-history/ShopHistory';
import { ICatalogItem } from 'components/goods-presentation-block/AsideMenu/AsideMenu';
import { IProductCardListItem } from 'components/product-card/ProductCardList';

export interface IMainPage {
  setOrderProductsCount: (value: number) => void;
  setFavoriteCount: (value: number) => void;
  goods: IProductCardListItem[];
  oldgoods: ICatalogItem[];
}

export const MainPage: React.FC<IMainPage> = ({
  setOrderProductsCount,
  setFavoriteCount,
  oldgoods,
  goods,
}) => {
  return (
    <div className='main-page-content main-content'>
      <GoodsPresentationBlock goods={oldgoods} />
      <BrandsLine data={goods} />
      <ProductCardList
        setOrderCountHandler={setOrderProductsCount}
        setFavoriteCountHandler={setFavoriteCount}
        rowQuantity={2}
        type='leaders'
        data={goods}
      />
      <ProductCardList
        setFavoriteCountHandler={setFavoriteCount}
        setOrderCountHandler={setOrderProductsCount}
        rowQuantity={2}
        type='novelties'
        data={goods}
      />
      <TopCategoriesBlock data={goods} />
      {/* <VideoReviewBlock /> */}
      <BenefitsLine />
      <SubscriptionBlock />
      <ShopHistory />
    </div>
  );
};
