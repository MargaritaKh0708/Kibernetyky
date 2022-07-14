import { ProductCardSvgSelector } from '../ProductCardSvgSelector';
import React, { useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { bankArray } from '../../backend/DataList';

interface IBank {
  icon: string;
  name: string;
  id: number;
  credit_programs: { term: number; percent: number }[];
}
interface ISelectListProps {
  setHiddenList: (value: boolean) => void;
  hiddenList: boolean;
  price: number;
  bankArray: IBank[];
}

export const SelectList: React.FC<ISelectListProps> = ({
  setHiddenList,
  hiddenList,
  bankArray,
  price,
}) => {
  const [randerBankArray, setRanderBankArray] = useState<IBank[]>([]);
  const [mainValue, setMainValue] = useState<string>(
    `Розстрочка ${Math.round(price / 7)} грн - 7 міс`
  );

  // for bank sort
  const compareBank: (a: IBank, b: IBank) => number = (a, b) => {
    if (a.credit_programs.length > b.credit_programs.length) return -1;
    else if (a.credit_programs.length < b.credit_programs.length) return 1;
    else return 0;
  };

  //for bank program sort
  const compareCreditProgram: (
    a: { term: number; percent: number },
    b: { term: number; percent: number }
  ) => number = (a, b) => {
    if (a.term > b.term) return -1;
    else if (a.term < b.term) return 1;
    else return 0;
  };

  useEffect(() => {
    let sortBankArray: IBank[] = [...bankArray];
    sortBankArray.sort(compareBank);
    setRanderBankArray(sortBankArray.splice(0, 3));
  }, []);

  const ref = useRef(null);
  const isRadioSelected = (value: string): boolean => mainValue === value;
  const Handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMainValue(e.target.value);
    setHiddenList(true);
  };

  //for click outside of form
  const handleClickOutside = () => {
    setHiddenList(true);
  };
  useOnClickOutside(ref, handleClickOutside);

  return (
    <>
      <div className={hiddenList ? 'select' : 'select active-select'} ref={ref}>
        <button
          className='select__btn'
          onClick={() => setHiddenList(hiddenList ? false : true)}
        >
          <span className='select__input'>{mainValue}</span>
          {hiddenList ? (
            <ProductCardSvgSelector id='arrow-down' />
          ) : (
            <ProductCardSvgSelector id='arrow-up' />
          )}
        </button>
        <div
          className={
            hiddenList ? 'select__hidden-list' : 'select__hidden-list active'
          }
        >
          {randerBankArray.map((bank, index) => (
            <label className='select__discription' key={bank.id}>
              <div className='select__icon'>
                <img src={bank.icon} alt='bank-icon' />
              </div>
              <ul className='select__item-description'>
                <li className='select__item-title'>
                  {index === 0
                    ? `Супер розстрочка від ${bank.name}!`
                    : `${bank.name}`}
                </li>
                <li className='select__item-value'>
                  <span>{`${Math.round(
                    price /
                      bank.credit_programs.sort(compareCreditProgram)[0].term
                  )}грн на ${
                    bank.credit_programs.sort(compareCreditProgram)[0].term
                  } міс.`}</span>
                </li>
              </ul>
              <input
                checked={isRadioSelected(
                  `Розстрочка ${Math.round(
                    price /
                      bank.credit_programs.sort(compareCreditProgram)[0].term
                  )} грн -  ${
                    bank.credit_programs.sort(compareCreditProgram)[0].term
                  } міс`
                )}
                onChange={Handler}
                id={`selectName${index}`}
                className='select__item-input'
                type='radio'
                value={`Розстрочка ${Math.round(
                  price /
                    bank.credit_programs.sort(compareCreditProgram)[0].term
                )} грн -  ${
                  bank.credit_programs.sort(compareCreditProgram)[0].term
                } міс`}
                name='selectName'
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
};
//TODO - месяц - переменная, сумма - переменная, value - подтягивает динамично
