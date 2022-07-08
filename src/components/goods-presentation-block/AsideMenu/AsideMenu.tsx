import React, { useEffect, useState } from 'react';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { CatalogView } from './CatalogView';
import { useOpenCatalogContext } from './OpenCatalogContext';
import { HeaderSvgSelector } from '../../header/HeaderSvgSelector';
import { Closer } from 'components/UI/closer/Closer';

export interface ICatalog {
  goods: ICatalogItem[];
}

export interface ICatalogItem {
  icon: string | JSX.Element;
  goodType: string;
  id: string;
}

export const Catalog: React.FC<ICatalog> = ({ goods }) => {
  const [detailedInformation, setDetailedInformation] = useState<string>(''); // Show 2nd part of modal window
  const [displayWidth, setDisplayWidth] = useState<boolean>(false); // Watch of display-width to control modal window shape
  const [lastTargetName, setLastTargetName] = useState<string>(''); // Read last target name for come-back BTN
  const [hideCategoryList, setHideCategoryList] = useState<boolean>(false); // Property for hidden category list im mobile version work

  const { open, setOpen } = useOpenCatalogContext(); // for open catalog

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

  //Static render items - for main page
  let renderItemsStatic: ICatalogItem[] = [];
  if (catalogItems.length > 15) {
    renderItemsStatic = catalogItems.splice(0, 15);
  } else renderItemsStatic = catalogItems;

  // All categories for modal window list
  let renderItemsModal: ICatalogItem[] = [
    ...renderItemsStatic,
    ...catalogItems,
  ];

  // Find more information to show -  need to find id of category which i choose from list
  let detailedInformationItem: ICatalogItem[] = [];
  renderItemsModal.forEach((item) =>
    detailedInformation === item.id ? detailedInformationItem.push(item) : null
  );

  return (
    <>
      <CatalogView
        showDetailedInformation={setDetailedInformation}
        setHideCategoryList={setHideCategoryList}
        hideCategoryList={hideCategoryList}
        readItemName={setLastTargetName}
        changeView='static-catalog-hide'
        setDisplayWidth={() => false}
        data={renderItemsStatic}
        changeSize={
          open
            ? 'goods-presentation-block__catalog_overflow static-catalog-opacity'
            : 'goods-presentation-block__catalog_overflow'
        }
      />
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
            data={renderItemsModal}
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
            {detailedInformationItem.map((item) => (
              <div key={item.id} className='catalog-menu__detailed-wrapper'>
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
              </div>
            ))}
          </div>
        </div>
      </ModalWindow>
    </>
  );
};
