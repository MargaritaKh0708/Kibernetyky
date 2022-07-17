import { HeaderSvgSelector } from '../HeaderSvgSelector';
import { HeaderIconsSelector } from '../HeaderIconsSelector';
import { ICatalogItem } from 'components/goods-presentation-block/AsideMenu/AsideMenu';
import { Dictaphone } from 'elements/Recording/Dictaphone';
import { IProductCardListItem } from 'components/product-card/ProductCardList';
import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { Closer } from 'components/UI/closer/Closer';

// @ts-ignore
import { useSpeechRecognition } from 'react-speech-recognition';

interface ISearchFieldForm {
  goods: IProductCardListItem[];
  data: ICatalogItem[];
}

interface ISearchRequest {
  searchFieldValue: string;
}

interface ICategory {
  mainImage: string;
  coupled: number[];
  name: string;
  top: boolean;
  id: number;
}

export const SearchFieldForm: React.FC<ISearchFieldForm> = ({
  data,
  goods,
}) => {
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const [searchActive, setSearchActive] = useState<boolean>(false); // State for search field open (last req version)
  const [searchFieldValue, setSearchFieldValue] = useState<string>(''); // state for reading value of search field
  const [searchResultsFieldActive, setSearchResultsFieldActive] =
    useState<boolean>(false); // State for search field results close

  const [previousSearchRequest, setPreviousSearchRequest] = useState<
    ISearchRequest[]
  >([]); // state for keepping user requests
  const [searchingGoods, setSearchingGoods] = useState<IProductCardListItem[]>(
    []
  ); // state for keepping user requests (by name search)
  const [searchingCategory, setSearchingCategory] = useState<ICategory[]>([]); // state for keepping user requests (by category search)

  //* speechy used

  useEffect(() => {
    setSearchFieldValue(transcript);
    searchResultsGoods();
  }, [transcript]);

  //?search__onfocus

  // load past user requests from localStorage
  useEffect(() => {
    const previousRequests = JSON.parse(
      localStorage.getItem('searchRequest') || '[]'
    );
    if (previousRequests.length > 0) {
      setPreviousSearchRequest(previousRequests);

      //will done every time searchActive true
    }
  }, [searchResultsFieldActive]);

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
    let filterGoods = goods.filter((good) =>
      good.name.toLowerCase().startsWith(searchFieldValue.toLowerCase())
    );

    if (filterGoods.length === 0) {
      filterGoods = goods.filter((good) =>
        good.category.name
          .toLowerCase()
          .startsWith(searchFieldValue.toLowerCase())
      );
    }

    // Find uniq category for searching
    let categoryForSearch: ICategory[] = [];
    let uniqueCategoryList = new Set();
    filterGoods.forEach((item) => {
      if (!uniqueCategoryList.has(item.category.id)) {
        categoryForSearch.push(item.category);
        uniqueCategoryList.add(item.category.id);
      }
    });

    // Splice array for rander
    setSearchingCategory(categoryForSearch.splice(0, 5));
    setSearchingGoods(filterGoods.splice(0, 5));
  };

  //for click outside of form
  const ref = useRef(null);
  const handleClickOutside = () => {
    setSearchResultsFieldActive(false);
  };
  useOnClickOutside(ref, handleClickOutside);

  //ENTER press
  const handleKeyDown = (event: React.KeyboardEvent<Element>) => {
    if (event.keyCode === 13) {
      closeSearchResultsField();
    }
  };

  // CLOSE SEARCH
  const closeSearchResultsField: () => void = () => {
    setSearchResultsFieldActive(false);
    addRequestToPrevious();
    setSearchFieldValue('');
  };

  return (
    <div className='search'>
      <div className='search-field'>
        <HeaderIconsSelector id='search' />
        <input
          onChange={(e) => setSearchFieldValue(e.target.value)}
          onFocus={() => {
            setSearchActive(true);
          }}
          onInput={() => {
            searchResultsGoods();
          }}
          onClick={() => setSearchResultsFieldActive(true)}
          onKeyDown={handleKeyDown}
          className='search-field__input'
          value={searchFieldValue}
          placeholder='Пошук'
          name='search'
          type='text'
        />
        <Dictaphone
          onClickHandler={() => setSearchResultsFieldActive(true)}
          listening={listening}
          browserSupportsSpeechRecognition={browserSupportsSpeechRecognition}
        />
        <button className='search-field__btn' onClick={closeSearchResultsField}>
          <span> Знайти </span>
        </button>
      </div>
      <div
        ref={ref}
        className={
          searchResultsFieldActive
            ? 'search__results-field'
            : 'search__results-field search_results-field--display'
        }
      >
        <Closer
          closeFunction={closeSearchResultsField}
          arrowBorder='search__closer'
        />
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
              {previousSearchRequest.map((request, index) => (
                <li
                  key={` ${index} ${request.searchFieldValue}`}
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
            <span className='search__onfocus-reset-title'>Очистити список</span>
          </button>
        </div>
        <div
          className={
            searchFieldValue.length === 0
              ? 'search__searching-shape search__shape'
              : 'search__searching-shape search__shape search-active'
          }
        >
          <div
            className={
              searchingGoods.length === 0
                ? 'search__searching-aside-results no-result'
                : 'search__searching-aside-results'
            }
          >
            <ul className='search__searching-aside-category'>
              <li className='search__category-item'>
                {searchingGoods.length === 0
                  ? 'За заданими параметрами не знайдено жодної моделі'
                  : 'Пошук в категоріях'}
              </li>
              {searchingCategory.map((category) => (
                <li key={category.id} className='search__category-item'>
                  {category.name}
                </li>
              ))}
            </ul>
          </div>
          <div className='search__searching-main-result'>
            {searchingGoods.map((good) => (
              <div key={good.id} className='search__main-result-item'>
                <div
                  style={{
                    background: `center / contain no-repeat url(${
                      good.imageCollection.length > 0
                        ? good.imageCollection[0]
                        : good.category.mainImage
                    })`,
                  }}
                  className='search__pic'
                />
                <div className='search__searching-descrip main-info'>
                  <span className='search__searching-descrip-code'>
                    Код товару: {good.id}
                  </span>
                  <span> {good.name}</span>
                </div>
                <div className='search__searching-descrip price-list'>
                  <span className='search__searching-descrip-oldprice'>
                    {good.oldprice}
                  </span>
                  <span>{good.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
