import { Closer } from 'components/UI/closer/Closer';
import { ModalWindow } from 'elements/ModalWindow/ModalWindow';
import { Form, Formik, Field } from 'formik';
import { useState } from 'react';
import { LoginSvgSelector } from './LoginSvgSelector';
import { FooterImgSelector } from '../footer/FooterImgSelector';
import google from 'assets/icons/payway/google.webp';

interface ILogin {
  viewWindow: boolean;
  closeHandler: (state: boolean) => void;
  isLogged: boolean;
}
export const Login: React.FC<ILogin> = ({
  viewWindow,
  closeHandler,
  isLogged,
}) => {
  const [login, setLogin] = useState<string>('');
  const [registerView, setRegisterView] = useState(false);
  const [forgotPassView, setForgotPassView] = useState(false);
  const [inputType, setInputType] = useState('password');

  const isEmail: (login: string) => boolean = (login) => {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(login);
  };
  const isTel: (login: string) => boolean = (login) => {
    return /^\+38[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{3}$/i.test(login);
  };

  const loginFormJsx = (
    <Formik
      initialValues={{ login: '', remember: false }}
      validate={(values) => {
        const errors: { login?: string; remember?: boolean } = {};
        if (!values.login) {
          errors.login = "Логін є обов'язковим";
        } else if (values.login.length > 30) {
          errors.login = 'Не більше 30 символів';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.login) &&
          !/^\+38[0-9]{3}[0-9]{2}[0-9]{2}[0-9]{3}$/i.test(values.login)
        ) {
          errors.login = 'Невірний номер телефону або ел. адреса';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        setLogin(values.login);
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form className='login-block__form'>
          <div className='login-block__row'>
            <div className='login-block-input'>
              <label htmlFor='login' className='login-block-input__name'>
                Номер телефону або ел. пошта
              </label>
              <Field
                id='login'
                name='login'
                className='login-block-input__field'
                placeholder='+38 000 00 00 000'
              />
              {touched.login && errors.login ? (
                <div className='login-block-input__error'>{errors.login}</div>
              ) : null}
            </div>
          </div>
          <div className='login-block__row'>
            <button
              name='continue'
              type='submit'
              className='login-block__submit-btn'
            >
              Продовжити
            </button>
          </div>
          <div className='login-block__row login-block__row--color'>
            <Field
              id='remember'
              name='remember'
              type='checkbox'
              className='login-block__another-device form-checkbox'
            />
            <span className='checkbox-fake' />
            <label
              htmlFor='remember'
              className='login-block-input__checkbox-label'
            >
              Не запам'ятовуйте мене (чужий комп'ютер)
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );

  const loginEmailFormJsx = (
    <Formik
      initialValues={{ password: '', remember: false }}
      validate={(values) => {
        const errors: { password?: string; remember?: boolean } = {};
        if (!values.password) {
          errors.password = "Пароль є обов'язковим";
        } else if (values.password.length > 30) {
          errors.password = 'Не більше 30 символів';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div className='login-block__row' onClick={() => setLogin('')}>
            <p className='login-block__text--bold'>{login}</p>
            <span className='del-sign'>x</span>
          </div>
          <div className='login-block__row'>
            <div className='login-block-input'>
              <label htmlFor='password' className='login-block-input__name'>
                Пароль
              </label>
              <div className='login-block-input-block'>
                <Field
                  id='password'
                  name='password'
                  className='login-block-input-block__field'
                  type={inputType}
                />
                <div
                  className='login-block-input-block__show-pass'
                  onClick={() => {
                    setInputType(inputType === 'text' ? 'password' : 'text');
                  }}
                >
                  {inputType === 'text' ? (
                    <LoginSvgSelector id='eye-open' />
                  ) : (
                    <LoginSvgSelector id='eye-close' />
                  )}
                </div>
              </div>
              {touched.password && errors.password ? (
                <div className='login-block-input__error'>
                  {errors.password}
                </div>
              ) : null}
            </div>
          </div>
          <div className='login-block__row--right'>
            <a
              href=''
              className='login-block__link'
              onClick={(e) => {
                e.preventDefault();
                setForgotPassView(true);
              }}
            >
              Забули пароль?
            </a>
          </div>
          <div className='login-block__row'>
            <button
              name='continue'
              type='submit'
              className='login-block__submit-btn'
            >
              Продовжити
            </button>
          </div>
          <div className='login-block__row login-block__row--color'>
            <Field
              id='remember'
              name='remember'
              type='checkbox'
              className='login-block__another-device form-checkbox'
            />
            <span className='checkbox-fake' />
            <label
              htmlFor='remember'
              className='login-block-input__checkbox-label'
            >
              Не запам'ятовуйте мене (чужий комп'ютер)
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );

  const loginPhoneFormJsx = (
    <Formik
      initialValues={{
        password: '',
        remember: false,
        loginmethod: 'pass',
        code: '',
      }}
      validate={(values) => {
        const errors: { password?: string; remember?: boolean; code?: string } =
          {};
        if (!values.password) {
          errors.password = "Пароль є обов'язковим";
        } else if (values.password.length > 30) {
          errors.password = 'Не більше 30 символів';
        }
        if (!values.code) {
          errors.code = "Код є обов'язковим";
        } else if (values.code.length > 4) {
          errors.code = 'Не більше 4 символів';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false); // cause we have no server
        //setLogin(values.login);
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div className='login-block__row' onClick={() => setLogin('')}>
            <p className='login-block__text--bold'>{login}</p>
            <span className='del-sign'>x</span>
          </div>
          <div className='login-block__row--center mr-bottom-15'>
            <div className='radio-btn'>
              <Field
                id='loginmethod'
                name='loginmethod'
                value='pass'
                className='radio-btn__field'
                type='radio'
              />
              <label htmlFor='loginmethod' className='radio-btn__name'>
                <span>Увійти за паролем</span>
              </label>
            </div>
            <div className='radio-btn'>
              <Field
                id='loginmethod1'
                name='loginmethod'
                value='sms'
                className='radio-btn__field'
                type='radio'
              />
              <label htmlFor='loginmethod1' className='radio-btn__name'>
                <span> Увійти по смс</span>
              </label>
            </div>
          </div>
          {values.loginmethod === 'pass' ? (
            <div>
              <div className='login-block__row'>
                <div className='login-block-input'>
                  <label htmlFor='password' className='login-block-input__name'>
                    <span>Пароль</span>
                  </label>
                  <div className='login-block-input-block'>
                    <Field
                      id='password'
                      name='password'
                      className='login-block-input-block__field'
                      type={inputType}
                    />
                    <div
                      className='login-block-input-block__show-pass'
                      onClick={() => {
                        setInputType(
                          inputType === 'text' ? 'password' : 'text'
                        );
                      }}
                    >
                      {inputType === 'text' ? (
                        <LoginSvgSelector id='eye-open' />
                      ) : (
                        <LoginSvgSelector id='eye-close' />
                      )}
                    </div>
                  </div>
                  {touched.password && errors.password ? (
                    <div className='login-block-input__error'>
                      {errors.password}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className='login-block__row--right'>
                <a
                  href=''
                  className='login-block__link'
                  onClick={(e) => {
                    e.preventDefault();
                    setForgotPassView(true);
                  }}
                >
                  Забули пароль?
                </a>
              </div>
            </div>
          ) : (
            <div>
              <div className='login-block__row'>
                <span className='login-block__text12'>
                  <span>
                    Ми надіслали одноразовий код для підтвердження входу:
                  </span>
                </span>
              </div>
              <div className='login-block-input'>
                <label htmlFor='code' className='login-block-input__name'>
                  Код з СМС
                </label>
                <Field
                  id='code'
                  name='code'
                  className='login-block-input__field'
                  placeholder='XXXX'
                />
                {touched.code && errors.code ? (
                  <div className='login-block-input__error'>{errors.code}</div>
                ) : null}
              </div>
              <div className='login-block__row--right'>
                <a
                  href=''
                  className='login-block__link'
                  onClick={(e) => {
                    e.preventDefault();
                    setForgotPassView(true);
                  }}
                >
                  Забули пароль?
                </a>
              </div>
            </div>
          )}
          <div className='login-block__row'>
            <button
              name='enter'
              type='submit'
              className='login-block__submit-btn'
            >
              <span>Увійти</span>
            </button>
          </div>
          <div className='login-block__row login-block__row--color'>
            <Field
              id='remember'
              name='remember'
              type='checkbox'
              className='login-block__another-device form-checkbox'
            />
            <span className='checkbox-fake' />
            <label
              htmlFor='remember'
              className='login-block-input__checkbox-label'
            >
              Не запам'ятовуйте мене (чужий комп'ютер)
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );

  const forgotPasswordPhoneFormJsx = (
    <Formik
      initialValues={{ remember: false, code: '' }}
      validate={(values) => {
        const errors: { remember?: boolean; code?: string } = {};
        if (!values.code) {
          errors.code = "Код є обов'язковим";
        } else if (values.code.length > 4) {
          errors.code = 'Не більше 4 символів';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        //setLogin(values.login);
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div>
            <div className='login-block__row'>
              <p className='login-block__text12'>
                Введіть тимчасовий код з sms/viber, надісланий на вказаний
                номер:
              </p>
            </div>
            <div className='login-block-input'>
              <label htmlFor='code' className='login-block-input__name'>
                Код
              </label>
              <Field
                id='code'
                name='code'
                className='login-block-input__field'
                placeholder='XXXX'
              />
              {touched.code && errors.code ? (
                <div className='login-block-input__error'>{errors.code}</div>
              ) : null}
            </div>
            <div className='login-block__row--right'>
              <a
                href=''
                className='login-block__link'
                onClick={(e) => {
                  e.preventDefault();
                  setForgotPassView(false);
                }}
              >
                Згадали пароль?
              </a>
            </div>
          </div>
          <div className='login-block__row'>
            <button
              name='enter'
              type='submit'
              className='login-block__submit-btn'
            >
              <span>Увійти</span>
            </button>
          </div>
          <div className='login-block__row'>
            <label
              htmlFor='remember'
              className='login-block-input__checkbox-label'
            >
              Не запам'ятовуйте мене (чужий комп'ютер)
            </label>
            <Field id='remember' name='remember' type='checkbox' />
          </div>
        </Form>
      )}
    </Formik>
  );

  const forgotPasswordEmailFormJsx = (
    <Formik
      initialValues={{ email: '', remember: false }}
      validate={(values) => {
        const errors: { email?: string; remember?: boolean } = {};
        if (!values.email) {
          errors.email = "Email є обов'язковим";
        } else if (!isEmail(values.email)) {
          errors.email = 'Не правильний email';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        //setLogin(values.login);
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <div className='login-block__row'>
            <p className='login-block__text'>
              Надіслати пароль на електронну пошту:
            </p>
          </div>
          <div className='login-block__row'>
            <div className='login-block-input'>
              <label htmlFor='email' className='login-block-input__name'>
                <span>Email</span>
              </label>
              <Field
                id='email'
                name='email'
                className='login-block-input__field'
              />
              {touched.email && errors.email ? (
                <div className='login-block-input__error'>{errors.email}</div>
              ) : null}
            </div>
          </div>
          <div className='login-block__row--right'>
            <a
              href=''
              className='login-block__link'
              onClick={(e) => {
                e.preventDefault();
                setForgotPassView(false);
              }}
            >
              Згадали пароль?
            </a>
          </div>
          <div className='login-block__row'>
            <button
              name='send'
              type='submit'
              className='login-block__submit-btn'
            >
              Надіслати
            </button>
          </div>
          <div className='login-block__row login-block__row--color'>
            <Field
              id='remember'
              name='remember'
              type='checkbox'
              className='login-block__another-device form-checkbox'
            />
            <span className='checkbox-fake' />
            <label
              htmlFor='remember'
              className='login-block-input__checkbox-label'
            >
              Не запам'ятовуйте мене (чужий комп'ютер)
            </label>
          </div>
        </Form>
      )}
    </Formik>
  );

  const forgotPasswordJsx = (
    <div className='login-block'>
      <div className='login-block__row--space-between'>
        <p className='login-block__title'>Відновлення паролю</p>
        <Closer
          closeFunction={() => {
            closeHandler(false);
          }}
          arrowBorder='contacts-closer__color'
        />
      </div>
      {forgotPassView
        ? isEmail(login)
          ? forgotPasswordEmailFormJsx
          : forgotPasswordPhoneFormJsx
        : null}
      <span className='login-block__separator' />
      <div className='login-block__row--center'>
        <p className='login-block__text'>Або увійти за допомогою</p>
      </div>
      <div className='login-block__row--center login-block__social-btn'>
        <button name='facebook' type='button' className='social-button '>
          <FooterImgSelector id='facebook' style='social-button__image' />
          <span>Facebook</span>
        </button>
        <button name='google' type='button' className='social-button'>
          <img src={google} className='social-button__image' />
          <span>Google</span>
        </button>
      </div>
      <div className='login-block__row--center'>
        <p className='login-block__subtext'>
          Ще немає аккаунта?
          <a
            className='login-block__link mr-right-10'
            href=''
            onClick={(e) => {
              e.preventDefault();
              setRegisterView(true);
            }}
          >
            Зареєструватись
          </a>
        </p>
      </div>
    </div>
  );

  const loginJsx = (
    <div className='login-block'>
      <div className='login-block__row--space-between'>
        <p className='login-block__title'>Особистий кабінет</p>
        <Closer
          closeFunction={() => {
            closeHandler(false);
          }}
          arrowBorder='contacts-closer__color'
        />
      </div>
      <div className='login-block__row'>
        <p className='login-block__text'>
          Увійти за номером телефону або електронною поштою:
        </p>
      </div>
      {login
        ? isEmail(login)
          ? loginEmailFormJsx
          : loginPhoneFormJsx
        : loginFormJsx}
      <span className='login-block__separator' />
      <div className='login-block__row--center'>
        <p className='login-block__text'>Або увійти за допомогою</p>
      </div>
      <div className='login-block__row--center login-block__social-btn'>
        <button name='facebook' type='button' className='social-button'>
          <FooterImgSelector id='facebook' style='social-button__image' />
          <span>Facebook</span>
        </button>
        <button name='google' type='button' className='social-button'>
          <img src={google} className='social-button__image' />
          <span>Google</span>
        </button>
      </div>
      <div className='login-block__row--center'>
        <p className='login-block__subtext'>
          Ще немає аккаунта?
          <span
            className='login-block__link mr-right-10'
            onClick={(e) => {
              e.preventDefault();
              setRegisterView(true);
              // closeHandler(false); //TODO
            }}
          >
            Зареєструватись
          </span>
        </p>
      </div>
    </div>
  );

  const registerFormJsx = (
    <Formik
      initialValues={{ name: '', phone: '', email: '', password: '' }}
      validate={(values) => {
        const errors: {
          name?: string;
          phone?: string;
          email?: string;
          password?: string;
        } = {};
        if (!values.name) {
          errors.name = "Ім'я є обов'язковим";
        } else if (values.name.length > 30) {
          errors.name = 'Не більше 30 символів';
        }
        if (!values.phone) {
          errors.phone = "Телефон є обов'язковим";
        } else if (!isTel(values.phone)) {
          errors.phone = 'Невірний номер телефону';
        }
        if (!values.email) {
          errors.email = "Email є обов'язковим";
        } else if (!isEmail(values.email)) {
          errors.email = 'Невірна адреса ел. пошти';
        }
        if (!values.password) {
          errors.password = "Пароль є обов'язковим";
        } else if (values.password.length > 30) {
          errors.password = 'Не більше 30 символів';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
        //setLogin(values.login);
        console.log(values);
      }}
    >
      {({ values, errors, touched }) => (
        <div className='login-block'>
          <div className='login-block__row--space-between'>
            <p className='login-block__title'>Реєстрація</p>
            <Closer
              closeFunction={() => {
                closeHandler(false);
              }}
              arrowBorder='contacts-closer__color'
            />
          </div>
          <Form>
            <div className='login-block__row'>
              <div className='login-block-input'>
                <label htmlFor='name' className='login-block-input__name'>
                  Ваше ім'я
                </label>
                <Field
                  id='name'
                  name='name'
                  className='login-block-input__field'
                />
                {touched.name && errors.name ? (
                  <div className='login-block-input__error'>{errors.name}</div>
                ) : null}
              </div>
            </div>
            <div className='login-block__row'>
              <div className='login-block-input'>
                <label htmlFor='phone' className='login-block-input__name'>
                  Номер телефону
                </label>
                <Field
                  id='phone'
                  name='phone'
                  className='login-block-input__field'
                  placeholder='+38 000 00 00 000'
                />
                {touched.phone && errors.phone ? (
                  <div className='login-block-input__error'>{errors.phone}</div>
                ) : null}
              </div>
            </div>
            <div className='login-block__row'>
              <div className='login-block-input'>
                <label htmlFor='email' className='login-block-input__name'>
                  Email
                </label>
                <Field
                  id='email'
                  name='email'
                  className='login-block-input__field'
                />
                {touched.email && errors.email ? (
                  <div className='login-block-input__error'>{errors.email}</div>
                ) : null}
              </div>
            </div>
            <div className='login-block-input'>
              <label htmlFor='password' className='login-block-input__name'>
                Пароль
              </label>
              <div className='login-block-input-block'>
                <Field
                  id='password'
                  name='password'
                  className='login-block-input-block__field'
                  type={inputType}
                />
                <div
                  className='login-block-input-block__show-pass'
                  onClick={() => {
                    setInputType(inputType === 'text' ? 'password' : 'text');
                  }}
                >
                  {inputType === 'text' ? (
                    <LoginSvgSelector id='eye-open' />
                  ) : (
                    <LoginSvgSelector id='eye-close' />
                  )}
                </div>
              </div>
              {touched.password && errors.password ? (
                <div className='login-block-input__error'>
                  {errors.password}
                </div>
              ) : null}
            </div>
            <div className='login-block__row'>
              <button
                name='register'
                type='submit'
                className='login-block__submit-btn'
              >
                Зареєструватись
              </button>
            </div>
          </Form>
          <div className='login-block__row--center'>
            <p className='login-block__text'>
              Або зареєструватись за допомогою
            </p>
          </div>
          <div className='login-block__row--center login-block__social-btn'>
            <button name='facebook' type='button' className='social-button'>
              <FooterImgSelector id='facebook' style='social-button__image' />
              <span>Facebook</span>
            </button>
            <button name='google' type='button' className='social-button'>
              <img src={google} id='google' className='social-button__image' />
              <span>Google</span>
            </button>
          </div>
          <div className='login-block__row--center'>
            <p className='login-block__subtext'>
              Вже є аккаунт?
              <a
                href=''
                className='login-block__link mr-right-10'
                onClick={(e) => {
                  e.preventDefault();
                  setRegisterView(false);
                }}
              >
                Увійти
              </a>
            </p>
          </div>
        </div>
      )}
    </Formik>
  );

  return (
    <ModalWindow
      active={viewWindow}
      setActive={closeHandler}
      className='login-modal '
    >
      {registerView
        ? registerFormJsx
        : forgotPassView
        ? forgotPasswordJsx
        : loginJsx}
    </ModalWindow>
  );
};
