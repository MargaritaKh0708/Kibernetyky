import { IProductCardListItem } from 'components/backend/getData';
import { Closer } from 'components/UI/closer/Closer';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { useGlobalContext } from '../../goods-presentation-block/AsideMenu/GlobalContext';

interface ICreditBuyModalItem {
  icon: string;
  name: string;
  id: number;
  credit_programs: { term: number; percent: number }[];
}

interface ICreditBuyModal {
  bankList: ICreditBuyModalItem[];
  good: IProductCardListItem;
}

export const CreditBuyModal: React.FC<ICreditBuyModal> = ({
  bankList,
  good,
}) => {
  const { buyForCreditActive, setBuyForCreditActive } = useGlobalContext();

  //* Find list of terms of each bank

  const creditTerms: (index: number) => number[] = (index) => {
    const term = bankList[index].credit_programs.map((item) => {
      let termsArrayItem: number;
      termsArrayItem = item.term;
      return termsArrayItem;
    });
    return term;
  };

  console.log(Math.max(...creditTerms(1)));

  //
  return (
    <ModalWindow
      active={buyForCreditActive}
      setActive={setBuyForCreditActive}
      className='credit-list-modal'
    >
      <div className='credit-modal'>
        <Closer
          closeFunction={() => setBuyForCreditActive(false)}
          arrowBorder='add-to-cart-arrow'
        />
        <div className='credit-modal__wrapper'>
          {bankList.map((bank, index) => (
            <div className='credit-modal__item' key={bank.id}>
              <div className='credit-modal__main-info'>
                <div
                  className='credit-modal__item-icon'
                  style={{
                    background: `center / contain no-repeat url(${bank.icon})`,
                  }}
                ></div>
                <div className='credit-modal__item-description'>
                  <span className='credit-modal__item-proposition'>
                    {index % 2 === 0
                      ? `Оплата частинами від ${bank.name}`
                      : `Вигідна пропозиція від ${bank.name}`}
                  </span>
                  <span className='credit-modal__item-price'>
                    від &nbsp;
                    {Math.round(good.price / Math.max(...creditTerms(index)))}₴
                    / місяць
                  </span>
                  <span className='credit-modal__item-terms'>
                    {Math.min(...creditTerms(index)) ===
                    Math.max(...creditTerms(index))
                      ? `${Math.max(...creditTerms(index))}  платежів`
                      : `${Math.min(...creditTerms(index))} - ${Math.max(
                          ...creditTerms(index)
                        )} платежів`}
                  </span>
                </div>
              </div>
              <div className='credit-modal__select'>
                <select name='credit' className='credit-modal__select-list'>
                  {creditTerms(index).map((term, index) => (
                    <option key={term + index}>
                      {term}
                      {term <= 3 ? 'платежі' : 'платежів'}
                    </option>
                  ))}
                </select>
              </div>
              <div className='credit-modal__choose-block'>
                <span className='credit-modal__choose-price'>
                  {Math.round(good.price / Math.max(...creditTerms(index)))} ₴ /
                  <span className='credit-modal__choose-price--font'>
                    місяць
                  </span>
                </span>
                <button name='choose' className='credit-modal__choose-btn'>
                  <span>Обрати</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModalWindow>
  );
};
