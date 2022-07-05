import { SubscriptionBlockSvgSelector } from './SubscriptionBlockSvgSelector';

export const SubscriptionBlock: React.FC = () => {
  return (
    <div className='subscription-block'>
      <div className='subscription-block__wrapper container'>
        <div className='subscription-block__description-part'>
          <h2 className='subscription-block__title title'>
            Будьте в курсі вигодних пропозицій!
          </h2>
          <span className='subscription-block__call-to-action'>
            Підпишіться на наші новини, дізнавайтеся першими про акційні
            пропозиція та придбайте товари раніше за всіх.
          </span>
        </div>
        <div className='subscription-block__logo-part'>
          <SubscriptionBlockSvgSelector id='logo' />
        </div>
        <div className='subscription-block__form-part'>
          <div className='subscription-block__form-fields'>
            <input
              type='tel'
              className='subscription-block__phone-field'
              placeholder='Номер телeфону'
            />
            <input
              type='email'
              className='subscription-block__email-field'
              placeholder='Email'
            />
            <button type='submit'>
              <span>Підписатися</span>
            </button>
          </div>
          <a
            className='subscription-block__confidential-policy-href'
            href='https://www.youtube.com/channel/UCVlYt9-6GLSwysPNCJ7C8lw'
          >
            <span>
              Підписка - Ваша згода з
              <span className='subscription-block__confidential-policy-href_underline'>
                &nbsp;політикою Конфіценціальності.
              </span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
