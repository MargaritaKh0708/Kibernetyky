import {
  deliveryDate,
  deliveryPlaces,
  deliveryMethods,
} from 'components/backend/DataList';

export interface IDeliveryMethod {
  method: string;
  price: number;
  terms: string;
  id: number;
}

export interface IIDeliveryPlace {
  place: string;
  id: number;
}

export interface IDelivery {
  method: IDeliveryMethod[];
  place: IIDeliveryPlace[];
}
export const Delivery: React.FC<IDelivery> = ({ method, place }) => {
  // create a day of delivery
  let date = new Date();
  date.setDate(date.getDate() + 2);
  let deliveryDay = date.getDate();
  let deliveryMounth = date.getMonth() + 1;

  //get time
  let time = date.getHours();

  //stroke
  let deliveryDateStroke = `${
    deliveryDay < 10 ? `0${deliveryDay}` : deliveryDay
  }.${
    deliveryMounth < 9 ? `0${deliveryMounth}` : deliveryMounth
  }.${date.getFullYear()}`;

  const deliveryDate: (term: string) => string = (term) => {
    if (term === '01') {
      if (time < 20) {
        return 'Сьогодні';
      }
      return 'Завтра';
    } else if (term === '02') {
      return 'Завтра';
    }

    return deliveryDateStroke;
  };
  return (
    <div className='delivery extended-card__product-info extended-card__insurence-info'>
      <div className='delivery__wrapper'>
        <h3 className='delivery__title'>Доставка</h3>
        <select className='delivery__place-list'>
          {place.map((item) => (
            <option key={item.id}>{item.place}</option>
          ))}
        </select>
        <ul className='delivery__methods'>
          {method.map((item) => (
            <li className='delivery__method' key={item.id}>
              <span className='delivery__method-name'>{item.method}</span>
              <span className='delivery__method-delivery-term'>
                {deliveryDate(item.terms)}
              </span>
              <span className='delivery__method-delivery-price'>
                {item.price === 0 ? 'Безкоштовно' : `${item.price} ₴`}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
