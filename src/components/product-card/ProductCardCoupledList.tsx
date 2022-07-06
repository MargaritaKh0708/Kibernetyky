import { ProductCard } from 'components/product-card/ProductCard';
import { useState, useEffect } from 'react';
import { CardsFilterLine } from './CardsFilterLine';
import { IProductCardList, WindowVariant } from './ProductCardLeadersList';

export const ProductCardCoupledList: React.FC<IProductCardList> = ({
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

  // Finds 'coupled' by category
  const coupled = data.filter((item) =>
    categoryId > 0 ? item.category.id === categoryId : true
  );

  // Add limit to render depend on window size
  let renderItems = [];
  if (coupled.length > n * cardQuantity) {
    renderItems = coupled.slice(0, n * cardQuantity);
    console.log(renderItems);
  } else renderItems = coupled;

  const categoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryId(() => parseInt(event.target.value));
  };

  return (
    <>
      <section className='product-list product-list-novelties container'>
        <h2 className='product-list__title title'>Товари, які купують разом</h2>
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
            />
          ))}
          <div className='product-card-list__opacity-block opacity' />
        </div>
        <button onClick={() => setN(n + 2)} className='product-card-list__btn'>
          <span>Дивитись ще</span>
        </button>
      </section>
    </>
  );
};
