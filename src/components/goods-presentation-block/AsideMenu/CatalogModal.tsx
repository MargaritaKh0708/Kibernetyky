import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { HeaderSvgSelector } from '../../header/HeaderSvgSelector';
import { useGlobalContext } from './GlobalContext';
import { Closer } from 'components/UI/closer/Closer';
import { CatalogView } from './CatalogView';
import { useEffect } from 'react';
import { ICatalogItem, ICatalog } from './AsideMenu';

export const CatalogModal: React.FC<ICatalog> = ({ goods }) => {
  const {
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
  } = useGlobalContext(); // for open catalog
  // use resizer for getting window size
  useEffect(() => {
    const handleResize: () => void = () => {
      if (window.innerWidth < 1024) setDisplayWidth(true);
      else setDisplayWidth(false);
    };
    window.addEventListener('resize', handleResize);
  });

  console.log(displayWidth);

  // Find uniq category of goods
  let catalogItems: ICatalogItem[] = [];
  let uniqCategoryItems = new Set();

  goods.forEach((good) => {
    if (!uniqCategoryItems.has(good.goodType)) {
      catalogItems.push(good);
      uniqCategoryItems.add(good.goodType);
    }
  });

  // Find more information to show -  need to find id of category which i choose from list
  let detailedInformationItem: ICatalogItem[] = [];
  catalogItems.forEach((item) =>
    detailedInformation === item.id ? detailedInformationItem.push(item) : null
  );
  return (
    <>
      <ModalWindow
        className='catalog-modal'
        setActive={() => {
          setOpen(open ? false : true);
          setDetailedInformation('');
          setHideCategoryList(false);
        }}
        active={open}
      >
        <div className='goods-presentation-block__catalog-title'>
          <div className='goods-presentation-block__name'>
            <HeaderSvgSelector id='catalog' />
            <span> Каталог товарів </span>
          </div>
          <Closer
            closeFunction={() => {
              setOpen(false);
              setDetailedInformation('');
              setHideCategoryList(false);
            }}
            arrowBorder='catalog__arrow'
          />
        </div>
        <div className='goods-presentation-block__catalog-content'>
          <CatalogView
            changeSize='goods-presentation-block__catalog-menu_height'
            showDetailedInformation={setDetailedInformation}
            setHideCategoryList={setHideCategoryList}
            hideCategoryList={hideCategoryList}
            setDisplayWidth={setDisplayWidth}
            readItemName={setLastTargetName}
            displayWidth={displayWidth}
            data={catalogItems}
          />
          <div
            className='catalog-menu__detailed-part'
            style={
              displayWidth
                ? { background: 'white', display: 'none' }
                : detailedInformation.length > 0
                ? { background: 'white', display: 'block' }
                : { background: 'white', display: 'none' }
            }
          >
            <a
              href='#'
              className='catalog-menu__detailed-come-back-btn'
              onClick={() => {
                setHideCategoryList(false);
                setDisplayWidth(true);
              }}
            >
              <span className='catalog-menu__detailed-arrow arrow' />
              <span>{lastTargetName}</span>
            </a>
            <div className='catalog-menu__detailed-wrapper'>
              {detailedInformationItem.map((item) =>
                item.subcategory.map((category, index) => (
                  <div
                    key={item.id + index}
                    className='catalog-menu__detailed-item'
                  >
                    <span className='catalog-menu__detailed-title'>
                      {category.title}
                    </span>
                    {category.value.map((value) => (
                      <span
                        className='catalog-menu__detailed-value'
                        key={value + index}
                      >
                        {value}
                      </span>
                    ))}
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </ModalWindow>
    </>
  );
};

{
  /* <div key={item.id} className='catalog-menu__detailed-wrapper'>
  <div className='catalog-menu__detailed-item'>
    <span>{item.id}</span>
    <span>{item.id}</span>
    <span>{item.id}</span>
  </div>
  <div className='catalog-menu__detailed-item'>
    <span>{item.goodType}</span>
    <span>{item.goodType}</span>
    <span>{item.goodType}</span>
    <span>{item.goodType}</span>
    <span>{item.goodType}</span>
  </div>
  <div className='catalog-menu__detailed-item'>
    <span>{item.icon}</span>
    <span>{item.goodType}</span>
    <span>{item.goodType}</span>
  </div>
</div>; */
}
