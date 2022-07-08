import { HeaderSvgSelector } from '../HeaderSvgSelector';
import { HeaderIconsSelector } from '../HeaderIconsSelector';
import { ICatalogItem } from 'components/goods-presentation-block/AsideMenu/AsideMenu';
import Dictaphone from 'elements/Recording/Dictaphone';
import React, { useState, useEffect } from 'react';
import { GoodsPresentationBlock } from 'components/goods-presentation-block/GoodsPresentationBlock';
import { IProductCardListItem } from 'components/product-card/ProductCardList';

// export interface ISearchFieldForm {
//   goods: IProductCardListItem[];
// }

// interface ISearchFieldForm {
//   data:ISearchFieldFormItem[];
// }

// export interface ISearchFieldFormItem extends ICatalogItem {
//  goodslist: {
//       code: string
//       oldprice: number,
//       price: number,
//       image: string,
//       model: string,
//       brand: string
// }}

interface ISearchFieldForm {
  goods: IProductCardListItem[];
  data: ICatalogItem[];
}

interface ISearchRequest {
  searchFieldValue: string;
}

export const SearchFieldForm: React.FC<ISearchFieldForm> = ({
  data,
  goods,
}) => {
  const [searchActive, setSearchActive] = useState<boolean>(false); // State for search field open
  const [searchFieldValue, setSearchFieldValue] = useState<string>(''); // state for reading value of search field
  // const [searchStarting, setSearchStarting] = useState<boolean>(false); // for changing shape of searching field

  const [previousSearchRequest, setPreviousSearchRequest] = useState<
    ISearchRequest[]
  >([]); // state for keepping user requests
  const [searchingGoods, setSearchingGoods] = useState<IProductCardListItem[]>(
    []
  ); // state for keepping user requests (by name search)
  const [searchingCategory, setSearchingCategory] = useState<
    IProductCardListItem[]
  >([]); // state for keepping user requests (by category search)

  //!search__onfocus

  // load past user requests from localStorage
  useEffect(() => {
    const previousRequests = JSON.parse(
      localStorage.getItem('searchRequest') || '[]'
    );
    if (previousRequests.length > 0) {
      setPreviousSearchRequest(previousRequests);

      //will done every time searchActive true
    }
  }, [searchActive]);

  // save user requests to localStorage
  const addRequestToPrevious: () => void = () => {
    localStorage.setItem(
      'searchRequest',
      JSON.stringify([...previousSearchRequest, { searchFieldValue }])
    );
  };

  // delete user requests from local storage

  const deleteSearchRequest: () => void = () => {
    localStorage.removeItem('searchRequest');
  };

  //!search__oninput

  const searchResultsGoods: () => void = () => {
    let filterGoods = goods.filter(
      (good) => good.name.toLowerCase().includes(searchFieldValue.toLowerCase()) // тут должны быть популярные
    );
    let filterCategory = goods.filter((good) =>
      good.category.name.toLowerCase().includes(searchFieldValue.toLowerCase())
    );
    setSearchingCategory(filterCategory);
    setSearchingGoods(filterGoods);
  };
  console.log(searchingCategory);
  return (
    <div className='search'>
      <div className='search-field'>
        <HeaderIconsSelector id='search' />
        <input
          onChange={(e) => setSearchFieldValue(e.target.value)}
          onFocus={() => setSearchActive(true)}
          onInput={() => searchResultsGoods()}
          className='search-field__input'
          value={searchFieldValue}
          placeholder='Пошук'
          name='search'
          type='text'
        />
        <Dictaphone />
        <button
          className='search-field__btn'
          onClick={() => {
            addRequestToPrevious();
          }}
        >
          <span> Знайти </span>
        </button>
      </div>
      <div
        className={
          searchFieldValue.length > 0
            ? 'search__shape search__onfocus-shape'
            : searchActive
            ? 'search__shape search__onfocus-shape search-active'
            : 'search__shape search__onfocus-shape'
        }
      >
        <span className='search__onfocus-title'>Історія пошуку</span>
        <div className='search__onfocus-history'>
          <ul className='search__onfocus-history-list'>
            <li
              className={
                previousSearchRequest.length > 0
                  ? 'search__onfocus-history-item hidden'
                  : 'search__onfocus-history-item'
              }
            >
              <HeaderSvgSelector id='clock' />
              <span> Ви ще нічого не шукали </span>
            </li>
            {previousSearchRequest.map((request) => (
              <li
                key={`client ${request.searchFieldValue}`}
                className='search__onfocus-history-item'
              >
                <HeaderSvgSelector id='clock' />
                <span>{request.searchFieldValue}</span>
              </li>
            ))}
          </ul>
        </div>
        <button
          className='search__onfocus-reset-btn'
          type='reset'
          onClick={() => {
            deleteSearchRequest();
            setPreviousSearchRequest([]);
          }}
        >
          <span className='search__onfocus-reset-title'> Очистити список</span>
        </button>
      </div>
      <div
        className={
          searchFieldValue.length === 0
            ? 'search__searching-shape search__shape'
            : 'search__searching-shape search__shape search-active'
        }
      >
        <div className='search__searching-aside-results'>
          <ul className='search__searching-aside-random-proposition'>
            <li className='search__random-item'>Можливо Ви шукали</li>
          </ul>
          <ul className='search__searching-aside-category'>
            <li className='search__category-item'>Пошук в категоріях</li>
            {searchingCategory.map((category) => (
              <li key={category.id} className='search__category-item'>
                {category.category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className='search__searching-main-result'>
          {searchingGoods.map((good) => (
            <div key={good.id} className='search__main-result-item'>
              <img
                className='search__pic'
                src={good.category.mainImage}
                alt='img'
              />
              <div className='search__searching-good-descrip'>
                <span> Код товару: {good.id}</span>
                <span> {good.name}</span>
              </div>
              <div className='search__searching-price-descrip'>
                <span>{good.oldprice}</span>
                <span>{good.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
