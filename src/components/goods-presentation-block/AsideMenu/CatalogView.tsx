import { ICatalogItem } from './AsideMenu';
import { useOpenCatalogContext } from './OpenCatalogContext';

interface ICatalogView {
  showDetailedInformation: (value: string) => void;
  setHideCategoryList: (value: boolean) => void;
  setDisplayWidth: (value: boolean) => void;
  readItemName: (value: string) => void;
  hideCategoryList: boolean;
  displayWidth?: boolean;
  data: ICatalogItem[];
  changeSize?: string;
  changeView?: string;
}

export const CatalogView: React.FC<ICatalogView> = ({
  showDetailedInformation,
  setHideCategoryList,
  hideCategoryList,
  setDisplayWidth,
  readItemName,
  displayWidth,
  changeSize,
  changeView,
  data,
}) => {
  const { setOpen } = useOpenCatalogContext(); // for open CATALOG

  const catalogView = (
    <div
      onClick={() => setOpen(true)}
      className={
        displayWidth
          ? `goods-presentation-block__catalog ${changeView || ''}`
          : hideCategoryList
          ? 'goods-presentation-block__catalog-hidden'
          : `goods-presentation-block__catalog ${changeView || ''}`
      }
    >
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
              onMouseEnter={() => {
                setDisplayWidth(false); // show 2d part of window
                showDetailedInformation(item.id); //read id for render item information
                readItemName(item.goodType); // read its name for come-back btn
                displayWidth
                  ? setHideCategoryList(true)
                  : setHideCategoryList(false);
              }}
            >
              <div className='goods-presentation-block__menu-category-name'>
                {item.icon}
                <span>{item.goodType}</span>
              </div>
              <span className='arrow'></span>
            </div>
          ))}
        </div>
        <span className='arrow catalog-menu__arrow-down'></span>
      </div>
    </div>
  );

  return catalogView;
};
