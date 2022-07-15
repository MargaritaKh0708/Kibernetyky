import { CatalogView } from './CatalogView';
import { useGlobalContext } from './GlobalContext';

export interface ICatalog {
  goods: ICatalogItem[];
}

export interface ICatalogItem {
  icon: string | JSX.Element;
  subcategory: { title: string; value: string[] }[];
  goodType: string;
  id: string;
}

export const AsideMenu: React.FC<ICatalog> = ({ goods }) => {
  const {
    setDetailedInformation,
    setHideCategoryList,
    hideCategoryList,
    setLastTargetName,
    open,
  } = useGlobalContext(); // for open catalog

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
    </>
  );
};
