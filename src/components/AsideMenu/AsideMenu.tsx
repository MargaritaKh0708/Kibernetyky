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
  const [open, setOpen] = useState<string>('aside-menu__part');
  return (
    <div className='catalog'>
      <div className='catalog-menu'>
        <div className={open}>
          {goods.map((good) => (
            <div className='catalog-menu-item' key={good.id}>
              {good.icon}
              <span>{good.goodType}</span> {/* тут будет НАВЛИНК */}
            </div>
          ))}
          {/*здесь же внутри этого map формируем окно которое будет появляться при ховере, инфа с массива */}
        </div>
      </div>
      <button
        style={{ width: '20px', height: '20px' }}
        className='showcase'
        onClick={() =>
          setOpen(
            open === 'catalog-menu__part'
              ? 'catalog-menu__all'
              : 'catalog-menu__part'
          )
        }
      ></button>
    </div>
  );
};
