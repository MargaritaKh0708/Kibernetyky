import { SubscriptionBlockSvgSelector } from './SubscriptionBlockSvgSelector';
import { Formik, Field, Form } from 'formik';

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
          <Formik
            initialValues={{ tel: '', email: '' }}
            validate={(values) => {
              const errors: { tel?: string; email?: string } = {};
              if (!values.tel) {
                errors.tel = "Телефон є обов'язковим";
              } else if (
                !/^\+38[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{3}$/i.test(values.tel)
              ) {
                errors.tel = 'Невірний номер телефону';
              }
              if (!values.email) {
                errors.tel = "Телефон є обов'язковим";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
              ) {
                errors.email = 'Неправильна ел. адреса';
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setSubmitting(false);
            }}
          >
            {({ values, errors, touched }) => (
              <Form>
                <div className='subscription-block__form-fields'>
                  <div>
                    <Field
                      type='tel'
                      className='subscription-block__phone-field'
                      placeholder='Номер телeфону'
                      name='tel'
                      id='tel'
                    />
                    {touched.tel && errors.tel ? (
                      <div className='login-block-input__error'>
                        {errors.tel}
                      </div>
                    ) : null}
                  </div>
                  <div>
                    <Field
                      type='email'
                      className='subscription-block__email-field'
                      placeholder='Email'
                      name='email'
                      id='email'
                    />
                    {touched.email && errors.email ? (
                      <div className='login-block-input__error'>
                        {errors.email}
                      </div>
                    ) : null}
                  </div>
                  <button type='submit'>
                    <span>Підписатися</span>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
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
