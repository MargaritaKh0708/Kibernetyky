import { ProductCard } from 'components/product-card/ProductCard';
import { useState, useEffect } from 'react';
import { CardsFilterLine } from './CardsFilterLine';

export interface IProductCardListItem {
  available: boolean;
  novelty: boolean;
  category: {
    mainImage: string;
    top: boolean;
    name: string;
    id: number;
  };
  oldprice: number;
  leader: boolean;
  price: number;
  id: string;
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

export const ProductCardLeadearsList: React.FC<IProductCardList> = ({
  data,
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

  // Finds 'leaders' in big data
  const leaders = data.filter((item) =>
    categoryId > 0
      ? item.leader && item.category.id === categoryId
      : item.leader
  );

  // Add limit to render depend on window size
  let renderItems = [];
  if (leaders.length > n * cardQuantity) {
    renderItems = leaders.slice(0, n * cardQuantity);
    console.log(renderItems);
  } else renderItems = leaders;

  const categoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryId(() => parseInt(event.target.value));
  };

  return (
    <>
      <section className='product-list product-list-leaders container'>
        <h2 className='product-list__title title'>Лідери продажу </h2>
        <CardsFilterLine data={data} handler={categoryChange} />
        <div
          className={n > 2 ? 'product-card-list h-height' : 'product-card-list'}
        >
          {renderItems.map((item) => (
            <ProductCard
              available={item.available}
              oldprice={item.oldprice}
              price={item.price}
              key={item.id}
            />
          ))}
          <div className='product-card-list__opacity-block' />
        </div>
        <button onClick={() => setN(n + 2)} className='product-card-list__btn'>
          <span>Дивитись ще</span>
        </button>
      </section>
    </>
  );
};

//! oldprice price avail - тянутся с массива !! add props
