import { IProductCardListItem } from "components/product-card/ProductCardList";
import { useEffect, useState } from 'react';
import { IOrder } from 'components/basket/AddToBasketWindow/AddToBasket';
import { Accordion } from "elements/accordion/Accordion";
import { AccordionItem } from "elements/accordion/AccordionItem";

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

export const Cart: React.FC<ICart> = ({ 
    data, 
    setOrderCountHandler,  
    setFavoriteCountHandler,
    setCompareCountHandler,
}) => {
    const [orderProducts, setOrderProducts] = useState<IOrder[]>([]);

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

    const contactFormJsx = (<div></div>);
    const deliveryFormJsx = (<div></div>);
    const paymentFormJsx = (<div></div>);

    return (
        <div className="container">
            <h2 className='cart-title'>Оформлення замовлення</h2>
            <div className='cart-form'>
                <div className='info-form'>
                    <Accordion>
                        <AccordionItem title="1. Ваші контактні дані" btnStyle="product-form__title">Contacts</AccordionItem>
                        <AccordionItem title="2. Доставка" btnStyle="product-form__title">Delivery</AccordionItem>
                        <AccordionItem title="3. Оплата" btnStyle="product-form__title">Payment</AccordionItem>
                    </Accordion>
                </div>
                <>{productFormJsx}</>
            </div>
        </div>
    );
};