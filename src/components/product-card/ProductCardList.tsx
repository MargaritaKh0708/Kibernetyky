import { ProductCard } from 'components/product-card/ProductCard';
import { useState, useEffect } from 'react';
import { CardsFilterLine } from './CardsFilterLine';

//*NOTES
//? coupled - category id , that connect with goods of current category. Array, cause its can be a few
//* novelty - is good mark as a 'new'
//? leader - is good is a leader of sales

export interface IProductCardListItem {
  name: string;
  model: string;
  available: boolean;
  novelty: boolean;
  category: {
    mainImage: string;
    coupled: number[];
    top: boolean;
    name: string;
    id: number;
  };
  oldprice: number;
  leader: boolean;
  price: number;
  id: number;
  brand: {
    name: string;
    logo: string;
    country: string;
    id: number;
  };
}

export interface IProductCardList {
  data: IProductCardListItem[];
  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
  setOrderCountHandler?: (count: number) => void;
  setFavoriteCountHandler?: (count: number) => void;
  setCompareCountHandler: (count: number) => void;
  setAddToCartActiveHandler: (state: boolean) => void;
  setCurrentProductIdHandler: (productId: number) => void;
  addToCartActive: boolean;
}

export enum WindowVariant {
  mobile = 375,
  mobileHorizontal = 812,
  iPad = 1024,
  hd = 1280,
  iPadHorizontal = 1366,
  fullHd = 1920,
  TwoK = 2560,
}

export const ProductCardList: React.FC<IProductCardList> = ({
  data,
  type,
  setOrderCountHandler,
  setFavoriteCountHandler,
  setCompareCountHandler,
  setAddToCartActiveHandler,
  setCurrentProductIdHandler,
  addToCartActive,
}) => {
  const [n, setN] = useState<number>(2); // state on numbers of row
  const [cardQuantity, setCardQuantity] = useState<number>(6); // state on numbers of column
  const [categoryId, setCategoryId] = useState<number>(0); // state on category of good

  //! ADAPTIVE

  useEffect(() => {
    const handleResize: () => void = () => {
      if (window.innerWidth >= WindowVariant.fullHd) setCardQuantity(6);
      else if (
        window.innerWidth < WindowVariant.fullHd &&
        window.innerWidth >= WindowVariant.hd
      )
        setCardQuantity(5);
      else if (
        window.innerWidth < WindowVariant.hd &&
        window.innerWidth >= WindowVariant.iPad
      )
        setCardQuantity(4);
      else if (
        window.innerWidth < WindowVariant.iPad &&
        window.innerWidth >= WindowVariant.mobileHorizontal
      )
        setCardQuantity(3);
      else if (
        window.innerWidth < WindowVariant.mobileHorizontal &&
        window.innerWidth >= WindowVariant.mobile
      )
        setCardQuantity(2);
    };
    window.addEventListener('resize', handleResize);
  });

  // find products by type
  let list: IProductCardListItem[] = [];
  if (type === 'leaders') {
    // Finds 'leaders' in big data
    list = data.filter((item) =>
      categoryId > 0
        ? item.leader && item.category.id === categoryId
        : item.leader
    );
  } else if (type === 'novelties') {
    // Finds 'novelties' in big data
    list = data.filter((item) =>
      categoryId > 0
        ? item.novelty && item.category.id === categoryId
        : item.novelty
    );
  } else if (type === 'coupled') {
    // Finds 'coupled' by category
    list = data.filter((item) =>
      categoryId > 0 ? item.category.id === categoryId : true
    );
  }

  // choose title by type
  const title =
    type === 'leaders'
      ? 'Лідери продажу'
      : type === 'novelties'
      ? 'Новинки'
      : 'Товари, які купують разом';

  // Add limit to render depend on window size
  let renderItems = [];
  if (list.length > n * cardQuantity) {
    renderItems = list.slice(0, n * cardQuantity);
    console.log(renderItems);
  } else renderItems = list;

  const categoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryId(() => parseInt(event.target.value));
  };

  return (
    <>
      <section className='product-list product-list-leaders container'>
        <h2 className='product-list__title title'>{title}</h2>
        <CardsFilterLine data={data} handler={categoryChange} />
        <div
          className={n > 2 ? 'product-card-list h-height' : 'product-card-list'}
        >
          {renderItems.map((item) => (
            <ProductCard
              available={item.available}
              oldprice={item.oldprice}
              goodModel={item.model}
              leaders={item.leader}
              goodName={item.name}
              productId={item.id}
              price={item.price}
              products={data}
              key={item.id}
              setOrderCountHandler={setOrderCountHandler}
              setFavoriteCountHandler={setFavoriteCountHandler}
              setCompareCountHandler={setCompareCountHandler}
              setAddToCartActiveHandler={setAddToCartActiveHandler}
              setCurrentProductIdHandler={setCurrentProductIdHandler}
              addToCartActive={addToCartActive}
            />
          ))}
          <div className='product-card-list__opacity-block opacity' />
        </div>
        <button onClick={() => setN(n + 2)} className='product-card-list__btn'>
          <span>Дивитись ще</span>
        </button>
        {/* <AddToCart products={data}/> */}
      </section>
    </>
  );
};
