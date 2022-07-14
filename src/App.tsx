import './index.css';
import { Header } from 'components/header/Header';

import { ExtendedProductCard } from './components/product-card/extended-product-card/ExtendedProductCard';
import { OpenCatalogContext } from 'components/goods-presentation-block/AsideMenu/OpenCatalogContext';
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
  MainGoodsData,
  CategoryList,
  PayWayList,
} from 'components/backend/DataList';

function App() {
  const [orderProductsCount, setOrderProductsCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  //Catalog
  const [open, setOpen] = useState<boolean>(false); // open or close modal w
  const [detailedInformation, setDetailedInformation] = useState<string>(''); // Show 2nd part of modal window
  const [displayWidth, setDisplayWidth] = useState<boolean>(false); // Watch of display-width to control modal window shape
  const [lastTargetName, setLastTargetName] = useState<string>(''); // Read last target name for come-back BTN
  const [hideCategoryList, setHideCategoryList] = useState<boolean>(false); // Property for hidden category list im mobile version work
  const [addToCartActive, setAddToCartActive] = useState<boolean>(false);
  const [currentProductId, setCurrentProductId] = useState<number>(0);
  const [compareCount, setCompareCount] = useState<number>(0);

  const similarJsx = (
    <ProductCardList
      setCurrentProductIdHandler={setCurrentProductId}
      setAddToCartActiveHandler={setAddToCartActive}
      setOrderCountHandler={setOrderProductsCount}
      setFavoriteCountHandler={setFavoriteCount}
      setCompareCountHandler={setCompareCount}
      addToCartActive={addToCartActive}
      productId={currentProductId}
      data={MainGoodsData}
      type='similar'
      rowQuantity={1}
    />
  );
  const coupledJsx = (
    <ProductCardList
      setCurrentProductIdHandler={setCurrentProductId}
      setAddToCartActiveHandler={setAddToCartActive}
      setOrderCountHandler={setOrderProductsCount}
      setFavoriteCountHandler={setFavoriteCount}
      setCompareCountHandler={setCompareCount}
      addToCartActive={addToCartActive}
      productId={currentProductId}
      rowQuantity={1}
      type='coupled'
      data={MainGoodsData}
    />
  );

  return (
    <div className='App'>
      <OpenCatalogContext.Provider
        value={{
          setDetailedInformation,
          detailedInformation,
          setHideCategoryList,
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
          goods={CategoryList}
          maindata={MainGoodsData}
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
                coupledJsx={coupledJsx}
                setCurrentProductIdHandler={setCurrentProductId}
                serviseList={AdditionalServices}
                delivery={deliveryMethods}
                payWaysList={PayWayList}
                similarJsx={similarJsx}
                place={deliveryPlaces}
                goods={MainGoodsData}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </OpenCatalogContext.Provider>
    </div>
  );
}

export default App;
