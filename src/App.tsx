import './index.css';
import { Header } from 'components/header/Header';

import { ExtendedProductCard } from './components/product-card/extended-product-card/ExtendedProductCard';
import { GlobalContext } from 'components/goods-presentation-block/AsideMenu/GlobalContext';
import { AddToCart } from 'components/basket/AddToBasketWindow/AddToBasket';
import { ProductCardList } from 'components/product-card/ProductCardList';
import { CartPage } from 'components/Pages/CartPage';
import { MainPage } from 'components/Pages/MainPage';
import { Footer } from 'components/footer/Footer';
import { Route, Routes } from 'react-router';
import { useState } from 'react';

import {
  AdditionalServices,
  deliveryMethods,
  deliveryPlaces,
  // MainGoodsData,
  CategoryList,
  PayWayList,
} from 'components/backend/DataList';

import { getData } from 'components/backend/getData';

const MainGoodsData = getData();
// console.log(MainGoodsData);

function App() {
  const [orderProductsCount, setOrderProductsCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  //Catalog
  const [open, setOpen] = useState<boolean>(false); // open or close modal w
  const [detailedInformation, setDetailedInformation] = useState<string>(''); // Show 2nd part of modal window
  const [displayWidth, setDisplayWidth] = useState<boolean>(false); // Watch of display-width to control modal window shape
  const [lastTargetName, setLastTargetName] = useState<string>(''); // Read last target name for come-back BTN
  const [hideCategoryList, setHideCategoryList] = useState<boolean>(false); // Property for hidden category list im mobile version work
  const [likesModalActive, setLikesModalActive] = useState<boolean>(false); // open modal of favorite goods
  const [loginModalActive, setLoginModalActive] = useState<boolean>(false); // for login form
  const [addToCartActive, setAddToCartActive] = useState<boolean>(false); // for add to cart modal
  const [currentProductId, setCurrentProductId] = useState<number>(0); // for reading current product id
  const [buyForCreditActive, setBuyForCreditActive] = useState<boolean>(false); // for activate 'buy by credit' modal
  const [compareCount, setCompareCount] = useState<number>(0); // for comparing

  const similarJsx = (
    <ProductCardList
      setCurrentProductIdHandler={setCurrentProductId}
      setOrderCountHandler={setOrderProductsCount}
      setFavoriteCountHandler={setFavoriteCount}
      setCompareCountHandler={setCompareCount}
      productId={currentProductId}
      data={MainGoodsData}
      type='similar'
      rowQuantity={1}
    />
  );
  const coupledJsx = (
    <ProductCardList
      setCurrentProductIdHandler={setCurrentProductId}
      setOrderCountHandler={setOrderProductsCount}
      setFavoriteCountHandler={setFavoriteCount}
      setCompareCountHandler={setCompareCount}
      productId={currentProductId}
      data={MainGoodsData}
      rowQuantity={1}
      type='coupled'
    />
  );

  return (
    <div className='App'>
      <GlobalContext.Provider
        value={{
          setBuyForCreditActive,
          buyForCreditActive,
          setAddToCartActive,
          addToCartActive,
          setDetailedInformation,
          setLoginModalActive,
          setLikesModalActive,
          detailedInformation,
          setHideCategoryList,
          loginModalActive,
          likesModalActive,
          setLastTargetName,
          hideCategoryList,
          setDisplayWidth,
          lastTargetName,
          displayWidth,
          setOpen,
          open,
        }}
      >
        <Header
          orderProductsCount={orderProductsCount}
          favoriteCount={favoriteCount}
          compareCount={compareCount}
          maindata={MainGoodsData}
          goods={CategoryList}
        />

        <AddToCart
          setCurrentProductIdHandler={setCurrentProductId}
          setFavoriteCountHandler={setFavoriteCount}
          setCompareCountHandler={setCompareCount}
          setOrderCountHandler={setOrderProductsCount}
          viewHandler={setAddToCartActive}
          productId={currentProductId}
          isActive={addToCartActive}
          products={MainGoodsData}
        />
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                setAddToCartActiveHandler={setAddToCartActive}
                setCurrentProductIdHandler={setCurrentProductId}
                setOrderCountHandler={setOrderProductsCount}
                setFavoriteCountHandler={setFavoriteCount}
                setCompareCountHandler={setCompareCount}
                viewHandler={setAddToCartActive}
                productId={currentProductId}
                isActive={addToCartActive}
                oldgoods={CategoryList}
                goods={MainGoodsData}
              />
            }
          ></Route>
          <Route
            path='/cart'
            element={
              <CartPage
                setOrderProductsCount={setOrderProductsCount}
                setCompareCountHandler={setCompareCount}
                setFavoriteCount={setFavoriteCount}
                goods={MainGoodsData}
              />
            }
          ></Route>
          <Route
            path='/product/:productId'
            element={
              <ExtendedProductCard
                setOrderProductsCount={setOrderProductsCount}
                setCurrentProductIdHandler={setCurrentProductId}
                serviseList={AdditionalServices}
                delivery={deliveryMethods}
                payWaysList={PayWayList}
                similarJsx={similarJsx}
                coupledJsx={coupledJsx}
                place={deliveryPlaces}
                goods={MainGoodsData}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
