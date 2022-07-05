import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';

export const CallBackForm: React.FC = () => {
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
              <li>Оформити замовлення</li>
              <li>пн-нд, з 9:00 до 18:00</li>
            </ul>
          </div>
          <div className='call-back-form__support'>
            <HeaderSvgSelector id='contacts-b' />
            <ul className='call-back-form__number-list'>
              <li>
                <a href='tel:0800-33-26-96'>0800-33-26-96</a>
              </li>
              <li>Служба підтримки</li>
              <li>пн-нд, з 9:00 до 18:00</li>
            </ul>
          </div>
        </div>
        <div className='call-back-form__user-phone'>
          <label className='call-back-form__label'>
            <HeaderSvgSelector id='incontacts' />
            <span>Передзвоніть мені</span>
            <input
              className='call-back-form__input'
              type='tel'
              placeholder='+38 000 00 00 000'
              value='+38 0'
            />
          </label>
        </div>
      </div>
      <button type='submit' className='call-back-form__submit'>
        <span>Чекаю дзвінка</span>
      </button>
    </div>
  );
};
