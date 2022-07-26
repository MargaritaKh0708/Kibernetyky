import { HeaderSvgSelector } from 'components/header/HeaderSvgSelector';
import { Closer } from 'components/UI/closer/Closer';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

interface ICallBackForm {
  closeBtnFunction: (value: boolean) => void;
}

export const CallBackForm: React.FC<ICallBackForm> = ({ closeBtnFunction }) => {
  const [phoneValue, setPhoneValue] = useState<string>(''); // read the value of entered phone numbers
  const [userMsg, setUserMsg] = useState<boolean>(false); // set msg for user
  const [changeContent, setChangeContent] = useState<boolean>(false); // change content for user

  // lang
  const [t] = useTranslation('common');

  // Chekes for numbers
  useEffect(() => {
    numberChecker();
  });
  const numberChecker: () => void = () => {
    const regexPhone = /[a-zA-Zа-яёА-ЯЁ]/g;
    if (phoneValue?.match(regexPhone)) {
      setPhoneValue(phoneValue.replace(regexPhone, ''));
    }
  };

  //Clean user msg after 3 min
  useEffect(() => {
    setTimeout(() => {
      setUserMsg(false);
      setChangeContent(false);
    }, 180000);
  });

  // Change modal content

  const changeContentHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    setTimeout(() => setChangeContent(true), 3000);
  };

  // Part of other contenf of modal window
  const ThanksMsgWindow = (
    <div
      className={
        changeContent
          ? 'call-back-form__thanks-msg'
          : 'call-back-form__thanks-msg h-hidden'
      }
    >
      <span>{t('contacts.connect')}</span>
      <button
        name='okay'
        onClick={(e) => {
          closeBtnFunction(false);
        }}
        type='button'
        className='call-back-form__submit call-back-form__submit_color'
      >
        <span className='call-back-form__number-list-item call-back-form__submit-title call-back-form__submit-title_color'>
          {t('contacts.ok')}
        </span>
      </button>
    </div>
  );

  return (
    <div className='call-back-form'>
      <div
        className={
          changeContent
            ? `call-back-form__wrapper h-hidden`
            : `call-back-form__wrapper`
        }
      >
        <div className='call-back-form__head-part'>
          <span className='call-back-form__title'>{t('contacts.title')}</span>
          <Closer
            closeFunction={() => {
              closeBtnFunction(false);
              setPhoneValue('');
            }}
            arrowBorder='contacts-closer__color'
          />
        </div>
        <div className='call-back-form__contacts'>
          <div className='call-back-form__support'>
            <HeaderSvgSelector id='contacts-b' />
            <ul className='call-back-form__number-list'>
              <li>
                <a href='tel:0800-33-26-96'>+38 050-853-23-83</a>
              </li>
              <li className='call-back-form__number-list-item'>
                {t('contacts.formOrder')}
              </li>
              <li className='call-back-form__number-list-item'>
                {t('contacts.schedule')}
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
                {t('contacts.support')}
              </li>
              <li className='call-back-form__number-list-item'>
                {t('contacts.schedule')}
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
              <span>{t('contacts.callBack')}</span>
            </HeaderSvgSelector>
            <input
              className='call-back-form__input'
              type='tel'
              min={0}
              max={9}
              onChange={(e) => {
                setPhoneValue(e.target.value);
                numberChecker();
              }}
              maxLength={13}
              value={phoneValue}
              placeholder='+38 000 00 00 000'
            />
            {userMsg ? (
              <span className='call-back-form__user-msg'>
                {t('contacts.repeat')}
                <span>&nbsp;{t('contacts.threeMin')}</span>
              </span>
            ) : (
              ''
            )}
          </label>
        </div>
      </div>
      <button
        name='call'
        onClick={(e) => {
          setUserMsg(true);
          setPhoneValue('');
          changeContentHandler(e);
        }}
        disabled={phoneValue.length === 13 ? false : true}
        type='submit'
        className={
          changeContent
            ? 'h-hidden'
            : phoneValue?.length === 13
            ? 'call-back-form__submit call-back-form__submit_color'
            : 'call-back-form__submit'
        }
      >
        <span
          className={
            phoneValue?.length === 13
              ? 'call-back-form__number-list-item call-back-form__submit-title call-back-form__submit-title_color'
              : 'call-back-form__number-list-item call-back-form__submit-title'
          }
        >
          {t('contacts.waitForCall')}
        </span>
      </button>
      {ThanksMsgWindow}
    </div>
  );
};
