import { ProductCard } from 'components/product-card/ProductCard';
import { useState, useEffect } from 'react';
import { CardsFilterLine } from './CardsFilterLine';

//*NOTES
//? coupled - category id , that connect with goods of current category. Array, cause its can be a few
//* novelty - is good mark as a 'new'
//? leader - is good is a leader of sales

export interface IProductCardListItem {
  imageCollection: string[];
  available: boolean;
  novelty: boolean;
  model: string;
  name: string;
  specifications: {
    main: {
      icon: string | JSX.Element;
      description: string;
      value: string;
    }[];
    detailed: {
      title: string;
      value: string[];
    }[];
    article: {
      title: string;
      content: string;
      subcontent: string;
      photo: string[];
    }[];
    colors: {
      color: string;
      colorName: string;
    }[];
    ram: number[];
    memorySize: string[];
    corps: string[];
  };
  category: {
    mainImage: string;
    coupled: number[];
    name: string;
    top: boolean;
    id: number;
  };
  oldprice: number;
  leader: boolean;
  price: number;
  id: number;
  brand: {
    country: string;
    name: string;
    logo: string;
    id: number;
  };
}

export interface IProductCardList {
  handler?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setCurrentProductIdHandler: (productId: number) => void;
  setFavoriteCountHandler?: (count: number) => void;
  setCompareCountHandler: (count: number) => void;
  setOrderCountHandler?: (count: number) => void;
  data: IProductCardListItem[];
  rowQuantity: number;
  productId: number;
  type: string;
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
  setCurrentProductIdHandler,
  setFavoriteCountHandler,
  setCompareCountHandler,
  setOrderCountHandler,
  rowQuantity,
  productId,
  data,
  type,
}) => {
  const [cardQuantity, setCardQuantity] = useState<number>(0); // state on numbers of column
  const [categoryId, setCategoryId] = useState<number>(0); // state on category of good
  const [n, setN] = useState<number>(rowQuantity); // state on numbers of row

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
    handleResize();
    console.log(cardQuantity);
    window.addEventListener('resize', handleResize);
  });

  // find products by type
  let list: IProductCardListItem[] = [];
  let coupledProducts: IProductCardListItem[] = [];
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
  } else if (type === 'similar') {
    // Finds 'similar' in big data
    list = data.filter((item) =>
      categoryId > 0 ? item.category.id === categoryId : item.category.id
    );
  } else if (type === 'coupled') {
    // find product by id
    const foundProducts = data.filter((product) => product.id === productId);
    const product = foundProducts.length > 0 ? foundProducts[0] : null;

    // find coupled products

    if (product) {
      const coupledCategories = product.category.coupled;
      coupledProducts = data.filter((p) =>
        coupledCategories.includes(p.category.id)
      );
    } else {
      return <></>;
    }
    // Finds 'coupled' by category
    list = coupledProducts.filter((item) =>
      categoryId > 0 ? item.category.id === categoryId : true
    );
  }
  // choose title by type
  const title =
    type === 'leaders'
      ? 'Лідери продажу'
      : type === 'novelties'
      ? 'Новинки'
      : type === 'similar'
      ? 'Також, Вас можуть зацікавити:'
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
        <CardsFilterLine
          data={
            type === 'similar'
              ? list
              : type === 'coupled'
              ? coupledProducts
              : data
          }
          handler={categoryChange}
        />
        <div
          className={
            n > 2
              ? 'product-card-list h-height'
              : rowQuantity === 1
              ? 'product-card-list-row'
              : 'product-card-list'
          }
        >
          {renderItems.map((item) => (
            <ProductCard
              key={item.id}
              setCurrentProductIdHandler={setCurrentProductIdHandler}
              setFavoriteCountHandler={setFavoriteCountHandler}
              setCompareCountHandler={setCompareCountHandler}
              setOrderCountHandler={setOrderCountHandler}
              rowQuantity={rowQuantity}
              product={item}
            />
          ))}
          <div
            className={
              rowQuantity === 1
                ? 'hidden'
                : 'product-card-list__opacity-block opacity'
            }
          />
        </div>
        <button
          name='see-more'
          onClick={() => {
            setN(n + 2);
            console.log(n);
            console.log(cardQuantity);
          }}
          className='product-card-list__btn'
        >
          <span>Дивитись ще</span>
        </button>
      </section>
    </>
  );
};
