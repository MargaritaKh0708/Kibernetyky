import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';
import { useState } from 'react';

export const CallBackForm: React.FC = () => {
  const [numberValue, setNumberValue] = useState<string>(); // read the value of entered phone numbers

  // Chekes for numbers

  // const numberChecker:()=>void = () => {
  // const regexPhone:any = /[a-zA-Zа-яёА-ЯЁ]/g;
  //   if (numberValue.match(regexPhone)) {
  //     this.value = this.value.replace(regexPhone, '');
  //     this.classList.add('error');
  //     this.nextElementSibling.innerText = 'Please, enter numbers only';
  //   } else if (phoneField.value.length > 0 && phoneField.value.length < 10) {
  //     phoneField.classList.add('error');
  //     phoneField.nextElementSibling.innerText =
  //       'Upps..Are u sure that it is right phone number?';
  //   } else {
  //     phoneField.classList.remove('error');
  //     phoneField.nextElementSibling.innerText = '';
  //   }
  // }

  console.log(numberValue);
  return (
    <div className='call-back-form'>
      <div className='call-back-form__wrapper'>
        <span className='call-back-form__title'>Контакти</span>
        <div className='call-back-form__contacts'>
          <div className='call-back-form__support'>
            <HeaderSvgSelector id='contacts-b' />
            <ul className='call-back-form__number-list'>
              <li>
                <a href='tel:0800-33-26-96'>+38 050-853-23-83</a>
              </li>
              <li className='call-back-form__number-list-item'>
                Оформити замовлення
              </li>
              <li className='call-back-form__number-list-item'>
                пн-нд, з 9:00 до 18:00
              </li>
            </ul>
          </div>
          <div className='call-back-form__support'>
            <HeaderSvgSelector id='contacts-b' />
            <ul className='call-back-form__number-list'>
              <li>
                <a href='tel:0800-33-26-96'>0800-33-26-96</a>
              </li>
              <li className='call-back-form__number-list-item'>
                Служба підтримки
              </li>
              <li className='call-back-form__number-list-item'>
                пн-нд, з 9:00 до 18:00
              </li>
            </ul>
          </div>
        </div>
        <div className='call-back-form__user-phone'>
          <label className='call-back-form__label'>
            <HeaderSvgSelector
              id='incontacts'
              className='call-back-form__support'
            >
              <span>Передзвоніть мені</span>
            </HeaderSvgSelector>
            <input
              className='call-back-form__input'
              type='tel'
              min={0}
              max={9}
              onChange={(e) => {
                setNumberValue(e.target.value);
              }}
              maxLength={13}
              value={numberValue}
              placeholder='+38 000 00 00 000'
            />
          </label>
        </div>
      </div>
      <button
        type='submit'
        className={
          numberValue?.length === 13
            ? 'call-back-form__submit call-back-form__submit_color'
            : 'call-back-form__submit'
        }
      >
        <span className='call-back-form__number-list-item call-back-form__submit-title'>
          Чекаю дзвінка
        </span>
      </button>
    </div>
  );
};
