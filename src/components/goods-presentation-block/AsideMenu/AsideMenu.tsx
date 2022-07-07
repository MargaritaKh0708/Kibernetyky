import React, { useState } from 'react';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { CatalogView } from './CatalogView';

export interface ICatalog {
  goods: ICatalogItem[];
}

export interface ICatalogItem {
  icon: string | JSX.Element;
  goodType: string;
  id: string;
}

export const Catalog: React.FC<ICatalog> = ({ goods }) => {
  // const [openPoint, setOpenPoint] = useState<number>(1); // for showing more categories
  const [catalog, setCatalog] = useState<boolean>(false); // for open or close modal window

  const [detailedInformation, setDetailedInformation] = useState<string>('');

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
        data={renderItemsStatic}
        setOpenCatalog={() => setCatalog(true)}
        changeSize={
          catalog
            ? 'goods-presentation-block__catalog_overflow static-catalog-opacity'
            : 'goods-presentation-block__catalog_overflow'
        }
        showDetailedInformation={setDetailedInformation}
      />
      <ModalWindow
        active={catalog}
        setActive={setCatalog}
        className='catalog-modal'
      >
        <CatalogView
          data={renderItemsModal}
          setOpenCatalog={() => setCatalog(false)}
          changeSize='goods-presentation-block__catalog-menu_height'
          showDetailedInformation={setDetailedInformation}
        />
        <div
          className='catalog-menu__detailed-part'
          style={
            detailedInformation.length > 0
              ? { background: 'white', display: 'block' }
              : { background: 'white', display: 'none' }
          }
        >
          {detailedInformationItem.map((item) => (
            <div key={item.id} className='catalog-menu__detailed-wrapper'>
              <div className='catalog-menu__detailed-item'>
                <span>{item.id}</span>
              </div>
              <div className='catalog-menu__detailed-item'>
                <span>{item.goodType}</span>
              </div>
              <div className='catalog-menu__detailed-item'>
                <span>{item.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </ModalWindow>
    </>
  );
};
