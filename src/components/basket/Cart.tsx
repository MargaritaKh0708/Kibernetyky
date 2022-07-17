import { IProductCardListItem } from 'components/product-card/ProductCardList';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { IOrder } from 'components/basket/AddToBasketWindow/AddToBasket';
import { Accordion } from '../UI/accordion/Accordion';
import { AccordionItem } from '../UI/accordion/AccordionItem';
import { Field, Form, Formik } from 'formik';
import {
  deliveryMethods,
  deliveryPlaces,
  bankArray,
} from '../backend/DataList';

interface ICart {
  data: IProductCardListItem[];
  setOrderCountHandler: (count: number) => void;
  setFavoriteCountHandler: (count: number) => void;
  setCompareCountHandler: (count: number) => void;
}

interface IProductData {
  id: number;
  name: string;
  count: number;
  price: number;
  oldPrice: number;
  photo: string;
}

interface IUserInfo {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  stateuser: boolean;
  needregister: boolean;
  password: string;
}

interface IDeliveryInfo {
  deliveryperson: string;
  deliveryplace: string;
  deliverymethod: string;
  phoneconfirm: boolean;
  deliveryorgaddress: string;
}

export const Cart: React.FC<ICart> = ({
  setCompareCountHandler,
  setFavoriteCountHandler,
  setOrderCountHandler,
  data,
}) => {
  const [orderProducts, setOrderProducts] = useState<IOrder[]>([]);
  const [deliveryJsx, setDeliveryJsx] = useState<React.ReactNode | null>(null);

  // load data from localStorage
  useEffect(() => {
    // get products in cart from localStorage
    const orderProducts = JSON.parse(localStorage.getItem('order') || '[]');
    setOrderProducts(orderProducts);
    setOrderProductsCount(orderProducts);

    // get favorites from localStorage
    const favorites = JSON.parse(localStorage.getItem('favorite') || '[]');
    setFavoriteProductsCount(favorites);

    // get compare data from localStorage
    const compareIdList = JSON.parse(localStorage.getItem('compare') || '[]');
    setCompareProductsCount(compareIdList);
  }, []);

  // set count of products in cart
  const setOrderProductsCount: (orderProducts: IOrder[]) => void = (
    orderProducts
  ) => {
    // calc count of products in order
    let count = 0;
    orderProducts.forEach((order) => (count += order.count));
    if (setOrderCountHandler) {
      setOrderCountHandler(count);
    }
  };

  // set count of favorite products
  const setFavoriteProductsCount: (favorites: number[]) => void = (
    favorites
  ) => {
    // calc count of favorites products
    if (setFavoriteCountHandler) {
      setFavoriteCountHandler(favorites.length);
    }
  };

  // set count of favorite products
  const setCompareProductsCount: (compareIdList: number[]) => void = (
    compareIdList
  ) => {
    // set count of favorites products
    if (setCompareCountHandler) {
      setCompareCountHandler(compareIdList.length);
    }
  };

  let orderProductsData: IProductData[] = [];
  orderProducts.forEach((orderProduct: IOrder) => {
    data.forEach((productFromBase: IProductCardListItem) => {
      if (orderProduct.productId === productFromBase.id) {
        orderProductsData.push({
          id: orderProduct.productId,
          name: productFromBase.name,
          count: orderProduct.count,
          price: productFromBase.price,
          oldPrice: productFromBase.oldprice,
          photo:
            productFromBase.imageCollection.length > 0
              ? productFromBase.imageCollection[0]
              : productFromBase.category.mainImage,
        });
      }
    });
  });

  // calc count of products and total sum in order
  let orderCount = 0;
  let totalSum = 0;
  let deliverySum = 0.1;
  orderProductsData.forEach((orderProductItem: IProductData) => {
    orderCount += orderProductItem.count;
    totalSum += orderProductItem.price;
  });

  let orderCountJsx =
    orderCount === 1
      ? 'товар'
      : orderCount >= 2 && orderCount <= 4
      ? 'товари'
      : 'товарів';

  const orderProductsDataRendered = orderProductsData.map(
    (orderProductItem) => {
      return (
        <div className='product-form__product' key={orderProductItem.id}>
          <div
            className='product-form__photo'
            // style={{
            //   background: `center / contain no-repeat url(${orderProductItem.imageCollection[0]})`,
            // }}
          >
            <img src={orderProductItem.photo} alt={orderProductItem.name} />
          </div>
          <div className='product-form__details'>
            <p className='product-form__subtitle'>{orderProductItem.name}</p>
            <p className='product-form__subtitle--grey'>
              {orderProductItem.count} x {orderProductItem.price}
              <span className='grivna-sign'>₴</span>
            </p>
            <p className='product-form__title'>
              {orderProductItem.price * orderProductItem.count}
              <span className='grivna-sign'>₴</span>
              <span className='product-form__title--line-through'>
                {orderProductItem.oldPrice * orderProductItem.count}
              </span>
              <span className='grivna-sign'>₴</span>
            </p>
          </div>
        </div>
      );
    }
  );

  const productFormJsx = (
    <div className='product-form'>
      <div className='product-form__header'>
        <span className='product-form__title'>Ваше замовлення</span>
        <a className='product-form__link'>Змінити</a>
      </div>
      <div className='product-form__products'>{orderProductsDataRendered}</div>
      <div className='product-form__bonuses'>
        <label className='product-form__title--check' htmlFor='bonuses'>
          <span>Використати бонуси</span>
          <input
            type='checkbox'
            name='bonuses'
            id='bonuses'
            className='product-form__checkbox form-checkbox'
          />
          <span className='checkbox-fake' />
        </label>
      </div>
      <div className='product-form__promo'>
        <span className='product-form__title'>Промокод</span>
        <a className='product-form__link'>Додати</a>
      </div>
      <div className='product-form__prices'>
        <span className='product-form__title'>Разом</span>
        <div className='product-form__price'>
          <span className='product-form__subtitle'>
            &nbsp;{orderCount}&nbsp; {orderCountJsx} &nbsp;на суму
          </span>
          <span className='product-form__title'>
            &nbsp;{totalSum}&nbsp;
            <span className='grivna-sign'>₴</span>
          </span>
        </div>
        <div className='product-form__price'>
          <span className='product-form__subtitle'>Вартість доставки</span>
          <span className='product-form__title'>
            &nbsp;{`${deliverySum}`}&nbsp;
            <span className='grivna-sign'>₴</span>
          </span>
        </div>
        <div className='product-form__price'>
          <span className='product-form__subtitle'>До сплати</span>
          <span className='product-form__title'>
            &nbsp;{totalSum + deliverySum}&nbsp;
            <span className='grivna-sign'>₴</span>
          </span>
        </div>
      </div>
      <div className='product-form__confirm'>
        <button name='accept' type='submit' className='product-form__button'>
          Замовлення підтверджую
        </button>
      </div>
    </div>
  );

  const newUserJsx = (
    <div key={1}>
      <div className='cart-block__row'>
        <div className='cart-block-input'>
          <label htmlFor='firstname' className='cart-block-input__name'>
            Ім'я<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='firstname'
            name='firstname'
            className='cart-block-input__field'
          />
        </div>
        <div className='cart-block-input'>
          <label htmlFor='phone' className='cart-block-input__name'>
            Телефон<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='phone'
            name='phone'
            type='tel'
            className='cart-block-input__field'
          />
        </div>
      </div>
      <div className='cart-block__row'>
        <div className='cart-block-input'>
          <label htmlFor='lastname' className='cart-block-input__name'>
            Прізвище<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='lastname'
            name='lastname'
            className='cart-block-input__field'
          />
        </div>
        <div className='cart-block-input'>
          <label htmlFor='email' className='cart-block-input__name'>
            Email
          </label>
          <Field
            id='email'
            name='email'
            type='email'
            className='cart-block-input__field'
          />
        </div>
      </div>
      <div className='cart-block__row'>
        <label
          htmlFor='needregister'
          className='cart-block-input__checkbox-label'
        >
          <span>Зареєструватись</span>
          <Field
            id='needregister'
            name='needregister'
            type='checkbox'
            className='form-checkbox product-form__checkbox'
          />
          <span className='checkbox-fake' />
        </label>
      </div>
    </div>
  );

  const returnedUserJsx = (
    <div key={2}>
      <div className='cart-block__row'>
        <div className='cart-block-input'>
          <label htmlFor='email' className='cart-block-input__name'>
            Email<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='email'
            name='email'
            type='email'
            className='cart-block-input__field'
          />
        </div>
        <div className='cart-block-input'>
          <label htmlFor='password' className='cart-block-input__name'>
            Пароль<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='password'
            name='password'
            type='password'
            className='cart-block-input__field'
          />
        </div>
      </div>
      <button name='enter' type='button' className='cart-block__btn'>
        Вхід
      </button>
    </div>
  );

  const contactFormJsx = (
    <div>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          phone: '',
          email: '',
          stateuser: 'newuser',
          needregister: false,
          password: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
      >
        {({ values }) => (
          <Form>
            <div className='cart-block'>
              <div className='cart-block__row'>
                <label className='cart-block-input__radio-label'>
                  <Field
                    id='stateuser'
                    name='stateuser'
                    value='newuser'
                    type='radio'
                    className='radio-field'
                  />
                  <span className='radio__fake' />
                  <span> Я новий користувач</span>
                </label>
                <label className='cart-block-input__radio-label'>
                  <Field
                    id='stateuser'
                    name='stateuser'
                    value='persistentuser'
                    type='radio'
                    className='radio-field'
                  />
                  <span className='radio__fake' />
                  <span> Я постійний клієнт</span>
                </label>
              </div>
              {values.stateuser === 'newuser'
                ? [newUserJsx]
                : [returnedUserJsx]}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
  // delivery

  const deliveryAddresses: string[] = [
    "Дніпровська набережна 9, ТЦ 'River Mall', 2 поверх",
    'вул. Бульварна, 25',
    'вул. Садова, 77',
    'вул. Володимира Великого, 13',
    'вул. Самохіна, 2',
    'вул. Космонавтів, 9',
    'вул. Саксаганська, 12',
    'вул. Спаська, 24',
  ];

  const onChangeDeliveryPlace: (
    deliveryplace: string,
    deliverymethod: string
  ) => void = (deliveryplace, deliverymethod) => {
    console.log(deliveryplace, deliverymethod);
    let _deliveryJsx: React.ReactNode | null = null;
    if (deliverymethod === 'Самовивіз із магазинів') {
      _deliveryJsx = (
        <div className='cart-block__row'>
          <Field
            className='cart-block-input__field'
            component='select'
            id='deliveryorgaddress'
            name='deliveryorgaddress'
            key={3}
          >
            {deliveryAddresses.map((address, index) => (
              <option
                key={index}
                value={`${deliveryplace}, ${address}`}
              >{`${deliveryplace}, ${address}`}</option>
            ))}
          </Field>
        </div>
      );
    } else if (deliverymethod === "Кур'єр") {
      _deliveryJsx = (
        <div key={3}>
          <div className='cart-block__row'>
            <label className='cart-block-input__radio-label'>
              <Field
                id='couriertype'
                name='couriertype'
                value='novaposhta'
                type='radio'
                className='radio-field'
              />
              <span className='radio__fake' />
              <span> Нова Пошта</span>
            </label>
            <label className='cart-block-input__radio-label'>
              <Field
                id='couriertype'
                name='couriertype'
                value='meest'
                type='radio'
                className='radio-field'
              />
              <span className='radio__fake' />
              <span> Meest</span>
            </label>
            <label className='cart-block-input__radio-label'>
              <Field
                id='couriertype'
                name='couriertype'
                value='justin'
                type='radio'
                className='radio-field'
              />
              <span className='radio__fake' />
              <span>Justin</span>
            </label>
          </div>
          <div className='cart-block__row'>
            <div className='cart-block-input'>
              <label htmlFor='street' className='cart-block-input__name'>
                Вулиця
              </label>
              <Field
                id='street'
                name='street'
                className='cart-block-input__field'
              />
            </div>
            <div className='cart-block-input'>
              <label htmlFor='building' className='cart-block-input__name'>
                Будинок
              </label>
              <Field
                id='building'
                name='building'
                className='cart-block-input__field'
              />
            </div>
          </div>
          <div className='cart-block__row'>
            <div className='cart-block-input'>
              <label htmlFor='corp' className='cart-block-input__name'>
                Корпус
              </label>
              <Field
                id='corp'
                name='corp'
                className='cart-block-input__field'
              />
            </div>
            <div className='cart-block-input'>
              <label htmlFor='buildentrance' className='cart-block-input__name'>
                Під'їзд
              </label>
              <Field
                id='buildentrance'
                name='buildentrance'
                className='cart-block-input__field'
              />
            </div>
            <div className='cart-block-input'>
              <label htmlFor='room' className='cart-block-input__name'>
                Квартира
              </label>
              <Field
                id='room'
                name='room'
                className='cart-block-input__field'
              />
            </div>
          </div>
        </div>
      );
    } else {
      _deliveryJsx = (
        <div className='cart-block__row'>
          <Field
            className='cart-block-input__field'
            component='select'
            id='deliveryorgaddress'
            name='deliveryorgaddress'
            key={3}
          >
            {deliveryAddresses.map((address, index) => (
              <option
                key={index}
                value={`відділення №${index + 1}, ${deliveryplace}, ${address}`}
              >{`відділення №${
                index + 1
              }, ${deliveryplace}, ${address}`}</option>
            ))}
          </Field>
        </div>
      );
    }
    setDeliveryJsx(() => _deliveryJsx);
  };

  const onChangeDeliveryMethod: (
    deliverymethod: string,
    deliveryplace: string
  ) => void = (deliverymethod, deliveryplace) => {
    //console.log(deliverymethod);

    onChangeDeliveryPlace(deliveryplace, deliverymethod);
  };

  const otherPersonDeliver = (
    <div key={1}>
      <div className='cart-block__row'>
        <div className='cart-block-input'>
          <label htmlFor='firstname' className='cart-block-input__name'>
            Ім'я<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='firstname'
            name='firstname'
            className='cart-block-input__field'
          />
        </div>
        <div className='cart-block-input'>
          <label htmlFor='lastname' className='cart-block-input__name'>
            Прізвище<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='lastname'
            name='lastname'
            className='cart-block-input__field'
          />
        </div>
      </div>
      <div className='cart-block__row'>
        <div className='cart-block-input'>
          <label htmlFor='phone' className='cart-block-input__name'>
            Телефон<span className='cart-block-input__required'>*</span>
          </label>
          <Field
            id='phone'
            name='phone'
            type='tel'
            className='cart-block-input__field'
          />
        </div>
      </div>
    </div>
  );
  const deliveryFormJsx = (
    <div>
      <Formik
        initialValues={{
          deliveryperson: 'iam',
          deliveryplace: 'Київ',
          deliverymethod: '',
          phoneconfirm: false,
          deliveryorgaddress: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form>
            <div className='cart-block'>
              <div className='cart-block__row'>
                <label className='cart-block-input__radio-label'>
                  <Field
                    id='deliveryperson'
                    name='deliveryperson'
                    value='iam'
                    type='radio'
                    className='radio-field'
                  />
                  <span className='radio__fake' />
                  <span> Я одержувач</span>
                </label>
                <label className='cart-block-input__radio-label'>
                  <Field
                    id='deliveryperson'
                    name='deliveryperson'
                    value='other'
                    type='radio'
                    className='radio-field'
                  />
                  <span className='radio__fake' />
                  <span> Інша людина</span>
                </label>
              </div>
              {values.deliveryperson === 'other' ? [otherPersonDeliver] : false}
              <div className='cart-block__row'>
                <div className='cart-block-input'>
                  <label
                    htmlFor='deliveryplace'
                    className='cart-block-input__name'
                  >
                    Місто доставки
                  </label>
                  <Field
                    className='cart-block-input__field'
                    as='select'
                    id='deliveryplace'
                    name='deliveryplace'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => {
                      setFieldValue('deliveryplace', e.target.value);
                      onChangeDeliveryPlace(
                        e.target.value,
                        values.deliverymethod
                      );
                    }}
                  >
                    {deliveryPlaces.map((placeItem) => (
                      <option key={placeItem.id} value={placeItem.place}>
                        {placeItem.place}
                      </option>
                    ))}
                  </Field>
                </div>
              </div>
              <div className='cart-block__row'>
                <label
                  htmlFor='phoneconfirm'
                  className='cart-block-input__checkbox-label'
                >
                  <span>Передзвоніть мені для уточнення замовлення</span>
                  <Field
                    id='phoneconfirm'
                    name='phoneconfirm'
                    type='checkbox'
                    className='product-form__checkbox form-checkbox'
                  />
                  <span className='checkbox-fake' />
                </label>
              </div>
              <div>
                {deliveryMethods.map((methodItem) => (
                  <label
                    key={methodItem.id}
                    className='cart-block-input__radio-block'
                  >
                    <Field
                      id='deliverymethod'
                      name='deliverymethod'
                      type='radio'
                      className='radio-field'
                      value={methodItem.method}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setFieldValue('deliverymethod', e.target.value);
                        onChangeDeliveryMethod(
                          e.target.value,
                          values.deliveryplace
                        );
                      }}
                    />
                    <span className='radio__fake' />
                    <div className='cart-block-input__radio-descrip'>
                      {' '}
                      {methodItem.method}
                      <p className='cart-block-input__radio-subtitle'>
                        <span> Вартість доставки</span> &nbsp;
                        {methodItem.price > 0
                          ? `${methodItem.price} ₴`
                          : 'Безкоштовно'}
                      </p>
                      {methodItem.method === values.deliverymethod
                        ? [deliveryJsx]
                        : false}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );

  const payMethods: { payMethod: string; id: number }[] = [
    { payMethod: 'Оплата при отриманні', id: 1 },
    { payMethod: 'Оплата онлайн на сайті', id: 2 },
    { payMethod: 'Безготівковий розрахунок (оплата на картку)', id: 3 },
    { payMethod: 'Кредит і оплата частинами', id: 4 },
    { payMethod: 'Оплата Apple Pay', id: 5 },
    { payMethod: 'Оплата Google Pay', id: 6 },
  ];

  const bankPortionJsx = (
    <div className='cart-block__row' key={5}>
      <div className='cart-block-input'>
        <label htmlFor='bankparts' className='cart-block-input__name'>
          Кількість платежів
        </label>
        <Field
          id='bankparts'
          name='bankparts'
          className='cart-block-input__field'
        />
        <p>платежів по</p>
      </div>
    </div>
  );
  const paymentFormJsx = (
    <div>
      <Formik
        initialValues={{ paymethod: '', bank: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form>
            <>
              {payMethods.map((payMethod) => (
                <div key={payMethod.id} className='cart-block-input__paymethod'>
                  <label className='cart-block-input__radio-block'>
                    <Field
                      id='paymethod'
                      name='paymethod'
                      value={payMethod.payMethod}
                      type='radio'
                      className='radio-field'
                    />
                    <span className='radio__fake' />
                    {payMethod.payMethod}
                  </label>
                  {payMethod.payMethod === values.paymethod &&
                  values.paymethod === 'Кредит і оплата частинами'
                    ? [
                        bankArray.map((bank: { name: string; id: number }) => (
                          <div
                            key={bank.id}
                            className='cart-block-input__paymethod'
                          >
                            <label className='cart-block-input__radio-block--push'>
                              <Field
                                id='bank'
                                name='bank'
                                value={bank.name}
                                type='radio'
                                className='radio-field'
                              />
                              <span className='radio__fake' />
                              {bank.name}
                            </label>
                            {values.bank === bank.name
                              ? [bankPortionJsx]
                              : false}
                          </div>
                        )),
                      ]
                    : false}
                </div>
              ))}
            </>
          </Form>
        )}
      </Formik>
    </div>
  );
  return (
    <div className='container'>
      <h2 className='cart-title'>Оформлення замовлення</h2>
      <div className='cart-form'>
        <div className='info-form'>
          <Accordion>
            <AccordionItem
              title='1. Ваші контактні дані'
              btnStyle='product-form__title'
            >
              {contactFormJsx}
            </AccordionItem>
            <AccordionItem title='2. Доставка' btnStyle='product-form__title'>
              {deliveryFormJsx}
            </AccordionItem>
            <AccordionItem title='3. Оплата' btnStyle='product-form__title'>
              {paymentFormJsx}
            </AccordionItem>
          </Accordion>
        </div>
        <>{productFormJsx}</>
      </div>
    </div>
  );
};
