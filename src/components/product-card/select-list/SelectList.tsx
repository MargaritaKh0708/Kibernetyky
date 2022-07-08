import React from 'react';
import { ProductCardSvgSelector } from '../ProductCardSvgSelector';
import { useState, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

interface ISelectListProps {
  hiddenList: boolean;
  setHiddenList: (value: boolean) => void;
  price: number;
}

export const SelectList: React.FC<ISelectListProps> = ({
  hiddenList,
  setHiddenList,
  price,
}) => {
  const [mainValue, setMainValue] = useState<string>(
    `Розстрочка ${Math.round(price / 7)} грн - 7 міс`
  );
  
  const ref = useRef(null);
  const isRadioSelected = (value: string): boolean => mainValue === value;

  const Handler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMainValue(e.target.value);
    setHiddenList(true);
  };

  const handleClickOutside = () => {
    setHiddenList(true);
  }

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
          <label className='select__discription'>
            <ProductCardSvgSelector id='zero-percent' />
            <ul className='select__item-description'>
              <li className='select__item-title'>Супер розстрочка!</li>
              <li className='select__item-value'>7 143 грн. х7 місяців</li>
            </ul>
            <input
              checked={isRadioSelected(
                `Розстрочка ${Math.round(price / 7)} грн - 7 міс`
              )}
              onChange={Handler}
              id='selectName0'
              className='select__item-input'
              type='radio'
              value={`Розстрочка ${Math.round(price / 7)} грн - 7 міс`}
              name='selectName'
            />
          </label>
          <label className='select__discription'>
            <ProductCardSvgSelector id='privat' />
            <ul className='select__item-description'>
              <li className='select__item-title'>ПриватБанк</li>
              <li className='select__item-value'>5 000 грн. х10 місяців</li>
            </ul>
            <input
              onChange={Handler}
              checked={isRadioSelected('5 000 грн. х10 місяців')}
              id='selectName1'
              className='select__item-input'
              type='radio'
              value='5 000 грн. х10 місяців'
              name='selectName'
            />
          </label>
          <label className='select__discription'>
            <ProductCardSvgSelector id='mono' />
            <ul className='select__item-description'>
              <li className='select__item-title'>Monobank</li>
              <li className='select__item-value'>7 143 грн. х7 місяців</li>
            </ul>
            <input
              onChange={Handler}
              checked={isRadioSelected('7 143 грн. х7 місяців')}
              id='selectName2'
              className='select__item-input'
              type='radio'
              value='7 143 грн. х7 місяців'
              name='selectName'
            />
          </label>
        </div>
      </div>
    </>
  );
};
//TODO - месяц - переменная, сумма - переменная, value - подтягивает динамично
