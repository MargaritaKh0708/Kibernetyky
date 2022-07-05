import { useState } from 'react';

export interface ICatalog {
  goods: ICatalogItem[];
}

export interface ICatalogItem {
  icon: string | JSX.Element;
  goodType: string;
  id: string;
}

export const Catalog: React.FC<ICatalog> = ({ goods }) => {
  const [openPoint, setOpenPoint] = useState<number>(1);

  let catalogItems: {
    icon: string | JSX.Element;
    goodType: string;
    id: string;
  }[] = [];
  let uniqCategoryItems = new Set();
  goods.forEach((good) => {
    if (!uniqCategoryItems.has(good.goodType)) {
      catalogItems.push(good);
      uniqCategoryItems.add(good.goodType);
    }
  });

  let renderItems: {
    icon: string | JSX.Element;
    goodType: string;
    id: string;
  }[] = [];
  if (catalogItems.length > openPoint * 15) {
    console.log(catalogItems.length);
    renderItems = catalogItems.splice(0, openPoint * 15);
    console.log(renderItems);
  } else renderItems = catalogItems;

  return (
    <div className='goods-presentation-block__catalog'>
      <div className='goods-presentation-block__catalog-menu'>
        <div className='goods-presentation-block__menu__part'>
          {renderItems.map((good) => (
            <div className='goods-presentation-block__menu__item' key={good.id}>
              <div className='goods-presentation-block__menu-category-name'>
                {good.icon}
                <span>{good.goodType}</span>
              </div>
              <span className='arrow'></span>
              {/* тут будет НАВЛИНК */}
            </div>
          ))}
          {/*здесь же внутри этого map формируем окно которое будет появляться при ховере, инфа с массива */}
        </div>
        <span
          onClick={() => setOpenPoint(openPoint === 1 ? 10 : 1)}
          className={
            openPoint > 1
              ? 'arrow catalog-menu__arrow-up'
              : 'arrow catalog-menu__arrow-down'
          }
        ></span>
      </div>
    </div>
  );
};
