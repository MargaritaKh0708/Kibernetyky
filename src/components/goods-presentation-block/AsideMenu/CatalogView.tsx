import { ICatalogItem } from './AsideMenu';

interface ICatalogView {
  showDetailedInformation: (value: string) => void;
  setOpenCatalog: () => void;
  data: ICatalogItem[];
  changeSize?: string;
}

export const CatalogView: React.FC<ICatalogView> = ({
  showDetailedInformation,
  setOpenCatalog,
  changeSize,
  data,
}) => {
  // const handler = (e:React.MouseEvent<HTMLSpanElement>) => {

  // }

  const catalogView = (
    <div className='goods-presentation-block__catalog '>
      <div
        className={`goods-presentation-block__catalog-menu ${
          changeSize || ''
        } `}
      >
        <div className='goods-presentation-block__menu__part'>
          {data.map((item) => (
            <div
              className='goods-presentation-block__menu__item'
              key={item.id}
              onMouseOver={() => showDetailedInformation(item.id)}
            >
              <div className='goods-presentation-block__menu-category-name'>
                {item.icon}
                <span>{item.goodType}</span>
              </div>
              <span className='arrow'></span>
            </div>
          ))}
        </div>
        <span
          onClick={() => {
            setOpenCatalog();
          }}
          className='arrow catalog-menu__arrow-down'
        ></span>
      </div>
    </div>
  );

  return catalogView;
};
