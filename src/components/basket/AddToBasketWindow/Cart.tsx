import { IProductCardListItem } from "components/product-card/ProductCardList";
import React, { ChangeEvent, useEffect, useState } from 'react';
import { IOrder } from 'components/basket/AddToBasketWindow/AddToBasket';
import { Accordion } from "elements/accordion/Accordion";
import { AccordionItem } from "elements/accordion/AccordionItem";
import { Field, Form, Formik } from "formik";

interface ICart {
    data: IProductCardListItem[];
    setOrderCountHandler: (count: number) => void;
    setFavoriteCountHandler: (count: number) => void;
    setCompareCountHandler: (count: number) => void;
};

interface IProductData {
    id: number;
    name: string; 
    count: number; 
    price: number; 
    oldPrice: number; 
    photo: string;
};

interface IUserInfo {
    firstname: string;
    lastname: string;
    phone: string;
    email: string;
    stateuser: boolean;
    needregister: boolean;
    password: string;
};

interface IDeliveryInfo {
    deliveryperson: string;
    deliveryplace: string;
    deliverymethod: string;
    phoneconfirm: boolean;
    deliveryorgaddress: string;
};

export const Cart: React.FC<ICart> = ({ 
    data, 
    setOrderCountHandler,  
    setFavoriteCountHandler,
    setCompareCountHandler,
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

    let orderProductsData:IProductData[] = [];
    orderProducts.forEach((orderProduct:IOrder) => {
        data.forEach((productFromBase:IProductCardListItem) => {
            if (orderProduct.productId === productFromBase.id) {
                orderProductsData.push({
                    id: orderProduct.productId,
                    name: productFromBase.name,
                    count: orderProduct.count,
                    price: productFromBase.price,
                    oldPrice: productFromBase.oldprice,
                    photo: productFromBase.category.mainImage,
                });
            }
        });
    });

    // calc count of products and total sum in order
    let orderCount = 0;
    let totalSum = 0;
    let deliverySum = 0.1;
    orderProductsData.forEach((orderProductItem:IProductData) => {
        orderCount += orderProductItem.count;
        totalSum += orderProductItem.price;
    });

    let orderCountJsx = orderCount === 1 ? 'товар' : (orderCount >= 2 && orderCount <= 4 ? 'товари' : 'товарів');

    const orderProductsDataRendered = orderProductsData.map(orderProductItem => {
        return (
            <div className='product-form__product' key={orderProductItem.id}>
                <div className='product-form__photo'>
                    <img src={orderProductItem.photo} alt={orderProductItem.name} />
                </div>
                <div className='product-form__details'>
                    <p className='product-form__subtitle'>{orderProductItem.name}</p>
                    <p className='product-form__subtitle--grey'>{orderProductItem.count} x {orderProductItem.price}
                        <span className='grivna-sign'>&#8372;</span>
                    </p>
                    <p className='product-form__title'>
                        {orderProductItem.price * orderProductItem.count}
                        <span className='grivna-sign'>&#8372;</span>
                        <span className='product-form__title--line-through'>{orderProductItem.oldPrice * orderProductItem.count}</span>
                        <span className='grivna-sign'>&#8372;</span>
                    </p>
                </div>
            </div>
        );
    });

    const productFormJsx = (
        <div className='product-form'>
            <div className='product-form__header'>
                <p className='product-form__title'>Ваше замовлення</p>
                <a className='product-form__link'>Змінити</a>
            </div>
            <div className='product-form__products'>{orderProductsDataRendered}</div>
            <div className='product-form__bonuses'>
                <input type='checkbox' name='bonuses' id='bonuses' />
                <label className='product-form__title--check' htmlFor='bonuses'>Використати бонуси</label>
            </div>
            <div className='product-form__promo'>
                <p className='product-form__title'>Промокод</p>
                <a className='product-form__link'>Додати</a>
            </div>
            <div className='product-form__prices'>
                <p className='product-form__title'>Разом</p>
                <div className='product-form__price'>
                    <p className='product-form__subtitle'>{orderCount} {orderCountJsx} на суму</p>
                    <p className='product-form__title'>{totalSum}
                        <span className='grivna-sign'>&#8372;</span>
                    </p>
                </div>
                <div className='product-form__price'>
                    <p className='product-form__subtitle'>Вартість доставки</p>
                    <p className='product-form__title'>{deliverySum}
                        <span className='grivna-sign'>&#8372;</span>
                    </p>
                </div>
                <div className='product-form__price'>
                    <p className='product-form__subtitle'>До сплати</p>
                    <p className='product-form__title'>{totalSum + deliverySum}
                        <span className='grivna-sign'>&#8372;</span>
                    </p>
                </div>
            </div>
            <div className='product-form__confirm'>
                <button type = 'submit' className='product-form__button'>Замовлення підтверджую</button>
            </div>
        </div>
    );

    const newUserJsx = (
        <div key={1}>
            <div className="cart-block__row">
                <div className="cart-block-input">
                    <label htmlFor="firstname" className="cart-block-input__name">Ім'я<span className="cart-block-input__required">*</span></label>
                    <Field id="firstname" name="firstname" className="cart-block-input__field" />
                </div>
                <div className="cart-block-input">
                    <label htmlFor="phone" className="cart-block-input__name">Телефон<span className="cart-block-input__required">*</span></label>
                    <Field id="phone" name="phone" type="tel" className="cart-block-input__field"/>
                </div>
            </div>
            <div className="cart-block__row">
                <div className="cart-block-input">
                    <label htmlFor="lastname" className="cart-block-input__name">Прізвище<span className="cart-block-input__required">*</span></label>
                    <Field id="lastname" name="lastname" className="cart-block-input__field"/>
                </div>
                <div className="cart-block-input">
                    <label htmlFor="email" className="cart-block-input__name">Email</label>
                    <Field id="email" name="email" type="email" className="cart-block-input__field"/>
                </div>
            </div>
            <div className="cart-block__row">
                <label htmlFor="needregister" className="cart-block-input__checkbox-label">Зареєструватись</label>
                <Field id="needregister" name="needregister" type="checkbox" />
            </div>
        </div>
    );

    const returnedUserJsx = (
        <div key={2}>
            <div className="cart-block__row">
                <div className="cart-block-input">
                    <label htmlFor="email" className="cart-block-input__name">Email<span className="cart-block-input__required">*</span></label>
                    <Field id="email" name="email" type="email" className="cart-block-input__field"/>
                </div>
                <div className="cart-block-input">
                    <label htmlFor="password" className="cart-block-input__name">Пароль<span className="cart-block-input__required">*</span></label>
                    <Field id="password" name="password" type="password" className="cart-block-input__field"/>
                </div>
            </div>
            <button type="button" className="cart-block__btn">Вхід</button>
        </div>
    );

    const contactFormJsx = (
        <div>
            <Formik
                initialValues={
                    {firstname: '', lastname: '', phone: '', email: '', stateuser: 'newuser', needregister: false, password: ''}
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log(values);
                }}
            >
                {({values}) => (
                    <Form>
                        <div className="cart-block">
                            <div className="cart-block__row">
                                <label className="cart-block-input__radio-label">
                                    <Field id="stateuser" name="stateuser" value="newuser" type="radio" />
                                    Я новий користувач
                                </label>
                                <label className="cart-block-input__radio-label">
                                    <Field id="stateuser" name="stateuser" value="persistentuser" type="radio" />
                                    Я постійний клієнт
                                </label>
                            </div>
                            {values.stateuser ==='newuser' ? [newUserJsx] : [returnedUserJsx]}
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
    // delivery
    const deliveryPlaces: {place: string, id: number}[] = [
        {place: "Київ", id: 1},
        {place: "Дніпро", id: 2},
        {place: "Львів", id: 3},
        {place: "Запоріжжя", id: 4},
        {place: "Луцьк", id: 5},
        {place: "Суми", id: 6},
        {place: "Одеса", id: 7},
        {place: "Вінниця", id: 8},
    ]; 
    const deliveryMethods: {method: string, price: number, id:number}[] = [
        {method: 'Самовивіз із магазинів', price: 0, id: 1},
        {method: 'Justin', price: 52, id: 2},
        {method: 'Нова пошта', price: 52, id: 3},
        {method: 'Укр пошта', price: 52, id: 4},
        {method: 'Meest', price: 52, id: 5},
        {method: 'Кур\'єр', price: 152, id: 6},
    ];
    const deliveryAddresses:string[] = [
        "Дніпровська набережна 9, ТЦ 'River Mall', 2 поверх",
        "вул. Бульварна, 25",
        "вул. Садова, 77",
        "вул. Володимира Великого, 13",
        "вул. Самохіна, 2",
        "вул. Космонавтів, 9",
        "вул. Саксаганська, 12",
        "вул. Спаська, 24",
    ];

    const onChangeDeliveryPlace: (deliveryplace: string, deliverymethod:string) => void = (deliveryplace, deliverymethod) => {
        console.log(deliveryplace, deliverymethod);
        let _deliveryJsx: React.ReactNode | null = null;
        if (deliverymethod === 'Самовивіз із магазинів') {
            _deliveryJsx = (
                <div className="cart-block__row">
                    <Field className="cart-block-input__field" component="select" id="deliveryorgaddress" name="deliveryorgaddress" key={3}>
                        {
                            deliveryAddresses.map((address, index) => (
                                <option key={index} value={`${deliveryplace}, ${address}`}>{`${deliveryplace}, ${address}`}</option>
                            ))
                        }
                    </Field>
                </div>
            );
        }
        else if (deliverymethod === 'Кур\'єр') {
            _deliveryJsx = (
                <div key={3}>
                    <div className="cart-block__row">
                        <label className="cart-block-input__radio-label">
                            <Field id="couriertype" name="couriertype" value="novaposhta" type="radio" />
                            Нова Пошта
                        </label>
                        <label className="cart-block-input__radio-label">
                            <Field id="couriertype" name="couriertype" value="meest" type="radio" />
                            Meest
                        </label>
                        <label className="cart-block-input__radio-label">
                            <Field id="couriertype" name="couriertype" value="justin" type="radio" />
                            Justin
                        </label>
                    </div>
                    <div className="cart-block__row">
                        <div className="cart-block-input">
                            <label htmlFor="street" className="cart-block-input__name">Вулиця</label>
                            <Field id="street" name="street" className="cart-block-input__field"/>
                        </div>
                        <div className="cart-block-input">
                            <label htmlFor="building" className="cart-block-input__name">Будинок</label>
                            <Field id="building" name="building" className="cart-block-input__field"/>
                        </div>
                    </div>
                    <div className="cart-block__row">
                        <div className="cart-block-input">
                            <label htmlFor="corp" className="cart-block-input__name">Корпус</label>
                            <Field id="corp" name="corp" className="cart-block-input__field"/>
                        </div>
                        <div className="cart-block-input">
                            <label htmlFor="buildentrance" className="cart-block-input__name">Під'їзд</label>
                            <Field id="buildentrance" name="buildentrance" className="cart-block-input__field"/>
                        </div>
                        <div className="cart-block-input">
                            <label htmlFor="room" className="cart-block-input__name">Квартира</label>
                            <Field id="room" name="room" className="cart-block-input__field"/>  
                        </div>
                    </div>
                </div>
            );
        }
        else {
             _deliveryJsx = (
                <div className="cart-block__row">
                     <Field className="cart-block-input__field" component="select" id="deliveryorgaddress" name="deliveryorgaddress" key={3}>
                         {
                             deliveryAddresses.map((address, index) => (
                                 <option key={index} value={`відділення №${index + 1}, ${deliveryplace}, ${address}`}>{`відділення №${index + 1}, ${deliveryplace}, ${address}`}</option>
                             ))
                         }
                     </Field>
                </div>
            );
        }
        setDeliveryJsx(() => _deliveryJsx);
    }; 

    const onChangeDeliveryMethod: (deliverymethod:string, deliveryplace:string) => void = (deliverymethod, deliveryplace) => {
        //console.log(deliverymethod);
        
        onChangeDeliveryPlace(deliveryplace, deliverymethod);
    }; 
    

    const otherPersonDeliver = (
        <div key={1}>
            <div className="cart-block__row">
                <div className="cart-block-input">
                    <label htmlFor="firstname" className="cart-block-input__name">Ім'я<span className="cart-block-input__required">*</span></label>
                    <Field id="firstname" name="firstname" className="cart-block-input__field"/>
                </div>
                <div className="cart-block-input">
                    <label htmlFor="lastname" className="cart-block-input__name">Прізвище<span className="cart-block-input__required">*</span></label>
                    <Field id="lastname" name="lastname" className="cart-block-input__field" />
                </div>
            </div>
            <div className="cart-block__row">
                <div className="cart-block-input">
                    <label htmlFor="phone" className="cart-block-input__name">Телефон<span className="cart-block-input__required">*</span></label>
                    <Field id="phone" name="phone" type="tel" className="cart-block-input__field" />
                </div>
            </div>
        </div>
    );
    const deliveryFormJsx = (
        <div>
            <Formik
                initialValues={
                    {deliveryperson: 'iam', deliveryplace: 'Київ', deliverymethod: '', phoneconfirm: false, deliveryorgaddress: ''}
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log(values);
                }}
            >
                {({values, setFieldValue}) => (
                    <Form>
                        <div className="cart-block">
                            <div className="cart-block__row">
                                <label className="cart-block-input__radio-label">
                                    <Field id="deliveryperson" name="deliveryperson" value="iam" type="radio" />
                                    Я одержувач
                                </label>
                                <label className="cart-block-input__radio-label">
                                    <Field id="deliveryperson" name="deliveryperson" value="other" type="radio" />
                                    Інша людина
                                </label>
                            </div>
                            {values.deliveryperson === 'other' ? [otherPersonDeliver] : false}
                            <div className="cart-block__row">
                                <div className="cart-block-input">
                                    <label htmlFor="deliveryplace" className="cart-block-input__name">Місто доставки</label>
                                    <Field className="cart-block-input__field" as="select" id="deliveryplace" name="deliveryplace" onChange={(e: ChangeEvent<HTMLInputElement>) => { setFieldValue("deliveryplace", e.target.value); onChangeDeliveryPlace(e.target.value, values.deliverymethod) }}>
                                        {
                                            deliveryPlaces.map(placeItem => (
                                                <option key={placeItem.id} value={placeItem.place}>{placeItem.place}</option>
                                            ))
                                        }
                                    </Field>
                                </div>
                            </div>
                            <div className="cart-block__row">
                                <label htmlFor="phoneconfirm" className="cart-block-input__checkbox-label">Передзвоніть мені для уточнення замовлення</label>
                                <Field id="phoneconfirm" name="phoneconfirm" type="checkbox" />
                            </div>
                            <div>
                                {
                                    deliveryMethods.map(methodItem => (
                                        <label key={methodItem.id} className="cart-block-input__radio-block">
                                            <Field id="deliverymethod" name="deliverymethod" type="radio" value={methodItem.method} onChange={(e: ChangeEvent<HTMLInputElement>) => { setFieldValue("deliverymethod", e.target.value); onChangeDeliveryMethod(e.target.value, values.deliveryplace) }} />
                                            {methodItem.method}
                                            <p className="cart-block-input__radio-subtitle">Вартість доставки {methodItem.price > 0 ? methodItem.price : 'Безкоштовно'}</p>
                                            {methodItem.method === values.deliverymethod ? [deliveryJsx] : false}
                                        </label>
                                    ))
                                }
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
    
    const payMethods:{payMethod: string, id: number}[] = [
        {payMethod: 'Оплата при отриманні', id: 1},
        {payMethod: 'Оплата онлайн на сайті', id: 2},
        {payMethod: 'Безготівковий розрахунок (оплата на картку)', id: 3},
        {payMethod: 'Кредит і оплата частинами', id: 4},
        {payMethod: 'Оплата Apple Pay', id: 5},
        {payMethod: 'Оплата Google Pay', id: 6},
    ];
    const bankArray:{name:string, id:number}[] = [
        {name: 'Приват Банк', id: 1},
        {name: 'Альфа Банк', id: 2},
        {name: 'А-банк', id: 3},
        {name: 'ОТП банк', id: 4},
        {name: 'УкрСібБанк', id: 5},
        {name: 'ПУМБ', id: 6},
        {name: 'Монобанк', id: 7},
    ];
    const bankPortionJsx = (
        <div className="cart-block__row" key={5}>
            <div className="cart-block-input">
                <label htmlFor="bankparts" className="cart-block-input__name">Кількість платежів</label>
                <Field id="bankparts" name="bankparts" className="cart-block-input__field"/>
            <p>платежів по</p>
            </div>
        </div>
    );
    const paymentFormJsx = (
        <div>
            <Formik
                initialValues={
                    { paymethod: '', bank: ''}
                }
                onSubmit={(values, { setSubmitting }) => {
                    setSubmitting(false);
                    console.log(values);
                }}
            >
                {({values}) => (
                    <Form>
                        <>
                            {
                                payMethods.map(payMethod => (
                                    <div key={payMethod.id}>
                                        <label className="cart-block-input__radio-block">
                                            <Field id="paymethod" name="paymethod" value={payMethod.payMethod} type="radio" />
                                            {payMethod.payMethod}
                                        </label>
                                        {payMethod.payMethod ===  values.paymethod && values.paymethod === 'Кредит і оплата частинами' ? 
                                        [bankArray.map((bank:{name:string, id:number}) => (
                                            <div key={bank.id}>
                                                <label className="cart-block-input__radio-block--push">
                                                    <Field id="bank" name="bank" value={bank.name} type="radio" />
                                                    {bank.name}
                                                </label>
                                                {values.bank === bank.name ? [bankPortionJsx] : false}
                                            </div>
                                        ))]
                                        : false}
                                    </div>
                                ))
                            }
                        </>
                    </Form>
                )}
            </Formik>
        </div>
    );

    return (
        <div className="container">
            <h2 className='cart-title'>Оформлення замовлення</h2>
            <div className='cart-form'>
                <div className='info-form'>
                    <Accordion>
                        <AccordionItem title="1. Ваші контактні дані" btnStyle="product-form__title">
                            {contactFormJsx}
                        </AccordionItem>
                        <AccordionItem title="2. Доставка" btnStyle="product-form__title">
                            {deliveryFormJsx}
                        </AccordionItem>
                        <AccordionItem title="3. Оплата" btnStyle="product-form__title">
                            {paymentFormJsx}
                        </AccordionItem>
                    </Accordion>
                </div>
                <>{productFormJsx}</>
            </div>
        </div>
    );
};