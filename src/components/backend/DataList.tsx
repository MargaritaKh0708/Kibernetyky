import { AsideMenuSvgSelector } from '../goods-presentation-block/AsideMenu/AsideMenuSvgSelector';
import { ExtendedProductCardSvgSelector } from 'components/product-card/extended-product-card/ExtendedProductCardSvgSelector';
import { nanoid } from 'nanoid';

//PayWays
import applepay from 'assets/icons/payway/apple.png';
import cash from 'assets/icons/payway/cash.png';
import google from 'assets/icons/payway/google.png';
import master from 'assets/icons/payway/master.png';
import mono from 'assets/icons/payway/mono.png';
import nocash from 'assets/icons/payway/nocath.png';
import privat24 from 'assets/icons/payway/privat24.png';
import privatpart from 'assets/icons/payway/privatpart.png';
import visa from 'assets/icons/payway/visa.png';

//!For main data
import pic from 'assets/main-page/presentation-block-swiper/green/main-picture.png';
import phones from 'assets/main-page/phones.png';
import tablets from 'assets/main-page/tablets.png';
import headphones from 'assets/main-page/headphones.png';
import vr from 'assets/main-page/vr.png';
import tv from 'assets/main-page/vr.png'; // забрать в селектор

//brands logo
import apple from 'assets/icons/brands-icons/apple.png';
import haier from 'assets/icons/brands-icons/haier.png';
import lenovo from 'assets/icons/brands-icons/lenovo.png';
import xiaomi from 'assets/icons/brands-icons/xiaomi.png'; // забрать все картинки в селектор !

//iPhone
import pic0 from 'assets/goods-card/iphone/pic1.jpg';
import pic1 from 'assets/goods-card/iphone/pic2.jpg';
import pic2 from 'assets/goods-card/iphone/pic3.jpg';
import pic3 from 'assets/goods-card/iphone/pic4.jpg';
import pic4 from 'assets/goods-card/iphone/pic5.jpg';
import pic5 from 'assets/goods-card/iphone/pic6.jpg';

//Pic for card article
import item from 'assets/goods-card/article/item1.png';
import item1 from 'assets/goods-card/article/item2.png';
import item2 from 'assets/goods-card/article/item3.png';
import item3 from 'assets/goods-card/article/item4.png';
import item4 from 'assets/goods-card/article/item5.png';
import item5 from 'assets/goods-card/article/item6.png';
import item6 from 'assets/goods-card/article/item7.png';

export const PayWayList = [
  { icon: applepay, name: 'Pay', id: 1331 },
  { icon: google, name: 'Pay', id: 1332 },
  { icon: privat24, name: 'Pay', id: 1333 },
  { icon: visa, name: '', id: 1334 },
  { icon: master, name: '', id: 1335 },
  { icon: mono, name: '', id: 1336 },
  { icon: privatpart, name: '', id: 1337 },
  { icon: nocash, name: 'Безготівковий розрахунок', id: 1338 },
  { icon: cash, name: 'Готівка', id: 1339 },
];

export const deliveryDate = {
  '01': new Date(),
  '02': new Date().setDate(new Date().getDate() + 1),
  '03': new Date().setDate(new Date().getDate() + 2),
};

export const deliveryMethods: {
  method: string;
  price: number;
  terms: string;
  id: number;
}[] = [
  { method: 'Самовивіз із магазинів', price: 0, terms: '01', id: 101 },
  { method: 'Самовивіз з “Нова пошта”', price: 52, terms: '02', id: 102 },
  { method: 'Кур’єром “Нова пошта”', price: 149, terms: '02', id: 103 },
  { method: 'Самовивіз з "Justin"', price: 55, terms: '03', id: 104 },
  { method: 'Самовивіз з “Укрпошта”', price: 35, terms: '03', id: 105 },
  { method: 'Самовивіз з “Meest Express”', price: 48, terms: '02', id: 106 },
  { method: 'Кур’єром “Meest Express”', price: 152, terms: '02', id: 107 },
];

export const deliveryPlaces: { place: string; id: number }[] = [
  { place: 'Київ', id: 1022 },
  { place: 'Херсон', id: 1023 },
  { place: 'Миколаїв', id: 1024 },
  { place: 'Харків', id: 1025 },
  { place: 'Львів', id: 1026 },
  { place: 'Черкаси', id: 1027 },
  { place: 'Луцьк', id: 1028 },
  { place: 'Івано-Франківськ', id: 1029 },
  { place: 'Запоріжжя', id: 1031 },
  { place: 'Луцьк', id: 1032 },
  { place: 'Суми', id: 1033 },
  { place: 'Одеса', id: 1034 },
  { place: 'Вінниця', id: 1035 },
];
export const AdditionalServices = {
  insurance: [
    {
      currency: '₴',
      duration: '12 міс.',
      condition:
        '*СТРАХУВАННЯ - безкоштовний ремонт пристрою або компенсація у негарантійних випадках у період дії Договору страхування (механічні пошкодження, потрапляння рідини та ін.). *ДОДАТКОВІ ГАРАНТІЇ - безкоштовний ремонт пристрою або компенсація при гарантійних поломках починаючи з 366 дня від дати придбання. Більш детально про товар дізнайтесь клікнувши на його назву, за номером 0800300100 або у продавців у магазинах Кібернетики !!! Оформлення даного товару можливе лише у роздрібні магазини Кібернетики',
      name: 'Страхування “Кібернетики Захист” 12 міс.',
      price: 7350,
      id: 351287,
    },
    {
      currency: '₴',
      duration: '12 міс.',
      condition:
        '*СТРАХУВАННЯ - безкоштовний ремонт пристрою або компенсація у негарантійних випадках у період дії Договору страхування (механічні пошкодження, потрапляння рідини та ін.). *ДОДАТКОВІ ГАРАНТІЇ - безкоштовний ремонт пристрою або компенсація при гарантійних поломках починаючи з 366 дня від дати придбання. Більш детально про товар дізнайтесь клікнувши на його назву, за номером 0800300100 або у продавців у магазинах Кібернетики !!! Оформлення даного товару можливе лише у роздрібні магазини Кібернетики',
      name: 'Кібернетики “Додаткова гарантія” 1 рік',
      price: 4900,
      id: 351945,
    },
    {
      currency: '₴',
      duration: '12 міс.',
      condition:
        '*СТРАХУВАННЯ - безкоштовний ремонт пристрою або компенсація у негарантійних випадках у період дії Договору страхування (механічні пошкодження, потрапляння рідини та ін.). *ДОДАТКОВІ ГАРАНТІЇ - безкоштовний ремонт пристрою або компенсація при гарантійних поломках починаючи з 366 дня від дати придбання. Більш детально про товар дізнайтесь клікнувши на його назву, за номером 0800300100 або у продавців у магазинах Кібернетики !!! Оформлення даного товару можливе лише у роздрібні магазини Кібернетики',
      name: 'Страхування “Кібернетики захист екрану” 12 міс.',
      price: 5880,
      id: 351289,
    },
    {
      currency: '₴',
      duration: '6 міс.',
      condition:
        '*СТРАХУВАННЯ - безкоштовний ремонт пристрою або компенсація у негарантійних випадках у період дії Договору страхування (механічні пошкодження, потрапляння рідини та ін.). *ДОДАТКОВІ ГАРАНТІЇ - безкоштовний ремонт пристрою або компенсація при гарантійних поломках починаючи з 366 дня від дати придбання. Більш детально про товар дізнайтесь клікнувши на його назву, за номером 0800300100 або у продавців у магазинах Кібернетики !!! Оформлення даного товару можливе лише у роздрібні магазини Кібернетики',
      name: 'Кібернетики “Додаткова захист” 6 міс.',
      price: 4900,
      id: 351237,
    },
    {
      currency: '₴',
      duration: '24 міс.',
      condition:
        '*СТРАХУВАННЯ - безкоштовний ремонт пристрою або компенсація у негарантійних випадках у період дії Договору страхування (механічні пошкодження, потрапляння рідини та ін.). *ДОДАТКОВІ ГАРАНТІЇ - безкоштовний ремонт пристрою або компенсація при гарантійних поломках починаючи з 366 дня від дати придбання. Більш детально про товар дізнайтесь клікнувши на його назву, за номером 0800300100 або у продавців у магазинах Кібернетики !!! Оформлення даного товару можливе лише у роздрібні магазини Кібернетики',
      name: 'Кібернетики “Додаткова гарантія” 2 роки',
      price: 7350,
      id: 359487,
    },
    {
      currency: '₴',
      duration: '6 міс.',
      condition:
        '*СТРАХУВАННЯ - безкоштовний ремонт пристрою або компенсація у негарантійних випадках у період дії Договору страхування (механічні пошкодження, потрапляння рідини та ін.). *ДОДАТКОВІ ГАРАНТІЇ - безкоштовний ремонт пристрою або компенсація при гарантійних поломках починаючи з 366 дня від дати придбання. Більш детально про товар дізнайтесь клікнувши на його назву, за номером 0800300100 або у продавців у магазинах Кібернетики !!! Оформлення даного товару можливе лише у роздрібні магазини Кібернетики',
      name: 'Страхування “Кібернетики захист екрану” 6 міс.',
      price: 3920,
      id: 351307,
    },
    {
      currency: '₴',
      duration: '36 міс.',
      condition:
        '*СТРАХУВАННЯ - безкоштовний ремонт пристрою або компенсація у негарантійних випадках у період дії Договору страхування (механічні пошкодження, потрапляння рідини та ін.). *ДОДАТКОВІ ГАРАНТІЇ - безкоштовний ремонт пристрою або компенсація при гарантійних поломках починаючи з 366 дня від дати придбання. Більш детально про товар дізнайтесь клікнувши на його назву, за номером 0800300100 або у продавців у магазинах Кібернетики !!! Оформлення даного товару можливе лише у роздрібні магазини Кібернетики',
      name: 'Кібернетики “Додаткова гарантія” 3 роки',
      price: 9800,
      id: 921287,
    },
  ],
};

export const CategoryList = [
  {
    icon: <AsideMenuSvgSelector id='accessory' />,
    goodType: 'Аксесуари',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='cables' />,
    goodType: 'Зарядні пристрої та кабелі',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='computerTechnique' />,
    goodType: "Комп'ютерна техніка",
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='computers' />,
    goodType: "Комп'ютерні комплектуючі",
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='elTransport' />,
    goodType: 'Електротранспорт',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='flash' />,
    goodType: 'Накопичувачі інформації',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='games' />,
    goodType: 'Ігрові приставки',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='headphones' />,
    goodType: 'Навушники',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='multimedia' />,
    goodType: 'Мультимедіа',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='other' />,
    goodType: 'Інше',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='powerbank' />,
    goodType: 'Power Bank і аксесуари до них',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='tablet' />,
    goodType: 'Планшети та електронні книги',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='tv' />,
    goodType: 'TV, Фото, Видео',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='vr' />,
    goodType: 'VR/Робототехніка/Товари для дітей',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='appliances' />,
    goodType: 'Побутова техніка дрібна',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='warmers' />,
    goodType: 'Обігрівачі/куртки з підігрівом',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='portativ_electronics' />,
    goodType: 'Портативна електроніка',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='software' />,
    goodType: 'Програмне забезпечення',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='smart_house' />,
    goodType: 'Розумний будинок',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='phones' />,
    goodType: 'Смартфони, Телефони',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='sim' />,
    goodType: 'Стартові пакети та скретч карти',
    id: nanoid(),
  },
  {
    icon: <AsideMenuSvgSelector id='services' />,
    goodType: 'Послуги',
    id: nanoid(),
  },
];

export const MainGoodsData = [
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    imageCollection: [pic0, pic1, pic2, pic3, pic4, pic5],
    model: 'ZA5T0095UA',
    oldprice: 1400,
    price: 453,
    leader: true,
    available: true,
    novelty: false,
    id: 199001,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      coupled: [113],
      name: 'Планшеты',
      mainImage: tablets,
      top: true,
      id: 2,
    },
    brand: {
      country: 'China',
      name: 'Lenovo',
      logo: lenovo,
      id: 145,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    novelty: false,
    available: true,
    leader: false,
    oldprice: 3000,
    price: 1902,
    id: 199002,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      coupled: [113],
      name: 'Телефони',
      id: 1,
      mainImage: phones,
      top: true,
    },
    brand: {
      name: 'Apple',
      logo: apple,
      country: 'USA',
      id: 35,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: false,
    leader: false,
    oldprice: 1400,
    novelty: false,
    price: 453,
    id: 199003,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      coupled: [113],
      name: 'Телефони',
      id: 1,
      mainImage: phones,
      top: false,
    },
    brand: {
      name: 'Haier',
      logo: haier,
      country: 'China',
      id: 77,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: false,
    novelty: true,
    oldprice: 2091,
    leader: true,
    price: 1900,
    id: 199004,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Планшети',
      coupled: [113],
      id: 2,
      mainImage: tablets,
      top: false,
    },
    brand: {
      name: 'Sony',
      logo: pic,
      country: 'Japan',
      id: 11,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    novelty: false,
    oldprice: 1400,
    leader: true,
    price: 453,
    id: 199005,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Ноутбуки',
      coupled: [113],
      mainImage: tv,
      top: false,
      id: 3,
    },
    brand: {
      name: 'DJI',
      logo: pic,
      country: 'China',
      id: 18,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    novelty: true,
    oldprice: 4000,
    leader: true,
    price: 1000,
    id: 199006,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Телефони',
      coupled: [113],
      mainImage: phones,
      top: true,
      id: 1,
    },
    brand: {
      name: 'Sony',
      logo: pic,
      country: 'Japan',
      id: 11,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    novelty: true,
    leader: true,
    price: 453,
    id: 199007,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Планшети та електронні книги',
      mainImage: tablets,
      coupled: [113],
      top: true,
      id: 11,
    },
    brand: {
      name: 'JBL',
      logo: pic,
      country: 'USA',
      id: 98,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    leader: true,
    novelty: false,
    oldprice: 1400,
    price: 453,

    id: 199008,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Ноутбуки',
      coupled: [113],
      mainImage: tv,
      top: true,
      id: 56,
    },
    brand: {
      name: 'JBL',
      logo: pic,
      country: 'USA',
      id: 98,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: false,
    oldprice: 5643,
    novelty: true,
    leader: false,
    price: 1200,
    id: 199009,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Телефони',
      mainImage: phones,
      coupled: [113],
      top: true,
      id: 1,
    },
    brand: {
      name: 'Sony',
      logo: pic,
      country: 'Japan',
      id: 11,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    leader: true,
    novelty: false,
    oldprice: 2000,
    price: 1400,
    id: 199010,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'VR / Робототехніка/ Товари для дітей',
      mainImage: pic,
      coupled: [5, 113],
      top: true,
      id: 3,
    },
    brand: {
      name: 'Haier',
      logo: haier,
      country: 'China',
      id: 77,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    leader: true,
    novelty: true,
    oldprice: 1400,
    price: 453,
    id: 199011,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Планшети та електронні книги',
      mainImage: tablets,
      coupled: [113],
      top: true,
      id: 11,
    },
    brand: {
      name: 'Apple',
      logo: apple,
      country: 'USA',
      id: 35,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 3999,
    novelty: false,
    leader: true,
    price: 1400,
    id: 199012,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Телефони',
      mainImage: phones,
      coupled: [113],
      top: true,
      id: 1,
    },
    brand: {
      name: 'Apple',
      logo: apple,
      country: 'USA',
      id: 35,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    novelty: true,
    leader: true,
    oldprice: 1400,
    price: 453,
    id: 199013,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Телефони',
      mainImage: phones,
      coupled: [113],
      top: true,
      id: 1,
    },
    brand: {
      name: 'Haier',
      logo: haier,
      country: 'China',
      id: 77,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    leader: true,
    novelty: false,
    oldprice: 4932,
    price: 1092,
    id: 199014,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Планшети',
      mainImage: tablets,
      coupled: [113],
      top: false,
      id: 2,
    },
    brand: {
      name: 'Apple',
      logo: apple,
      country: 'USA',
      id: 35,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 9033,
    novelty: true,
    leader: true,
    price: 2999,
    id: 199015,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'VR / Робототехніка / Товари для дітей',
      mainImage: pic,
      coupled: [4, 113],
      top: true,
      id: 3,
    },
    brand: {
      name: 'Apple',
      logo: apple,
      country: 'USA',
      id: 35,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    leader: true,
    oldprice: 1400,
    price: 453,
    novelty: false,
    id: 199016,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Телефони',
      coupled: [113],
      mainImage: phones,
      top: true,
      id: 1,
    },
    brand: {
      name: 'DJL',
      logo: pic,
      country: 'USA',
      id: 34,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    leader: true,
    novelty: true,
    price: 453,
    id: 199017,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'VR / Робототехніка / Товари для дітей',
      mainImage: pic,
      coupled: [4],
      top: true,
      id: 3,
    },
    brand: {
      name: 'DJI',
      logo: pic,
      country: 'China',
      id: 18,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 199018,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Планшети',
      mainImage: tablets,
      coupled: [113],
      top: false,
      id: 2,
    },
    brand: {
      name: 'xiaomi',
      logo: xiaomi,
      country: 'USA',
      mainImage: pic,
      top: true,
      id: 757,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    novelty: true,
    leader: true,
    price: 453,
    id: 199019,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Телефони',
      mainImage: phones,
      coupled: [113],
      top: true,
      id: 1,
    },
    brand: {
      name: 'Haier',
      logo: haier,
      country: 'China',
      id: 77,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 199020,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Побутова техніка',
      coupled: [3],
      mainImage: vr,
      top: true,
      id: 4,
    },
    brand: {
      name: 'DJL',
      logo: pic,
      country: 'USA',
      id: 34,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    novelty: true,
    oldprice: 1400,
    leader: true,
    price: 453,
    id: 199021,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Ноутбуки',
      coupled: [113],
      mainImage: tv,
      top: true,
      id: 4,
    },
    brand: {
      name: 'DJL',
      logo: pic,
      country: 'USA',
      id: 34,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    novelty: false,
    oldprice: 1400,
    leader: true,
    price: 453,
    id: 199022,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Планшети',
      mainImage: tablets,
      coupled: [113],
      top: false,
      id: 2,
    },
    brand: {
      name: 'Haier',
      logo: haier,
      country: 'China',
      id: 77,
    },
  },
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 199023,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Телефони',
      coupled: [113],
      mainImage: phones,
      top: true,
      id: 1,
    },
    brand: {
      name: 'DJL',
      logo: pic,
      country: 'USA',
      id: 34,
    },
  },

  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    leader: true,
    novelty: false,
    price: 453,
    id: 199024,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Навушники',
      coupled: [1],
      mainImage: headphones,
      top: true,
      id: 113,
    },
    brand: {
      name: 'Lenovo',
      logo: lenovo,
      country: 'China',
      mainImage: pic,
      top: true,
      id: 145,
    },
  },

  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    imageCollection: [],
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 199025,
    specifications: {
      main: [
        {
          icon: <ExtendedProductCardSvgSelector id='screen' />,
          description: 'Діагональ екрану',
          value: '6.7”',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='camera' />,
          description: 'Основна камера',
          value: '12 Мп + 12 Мп + 12 Мп',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
          description: 'Фронтальна камера. Мп',
          value: 'A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='cpu' />,
          description: 'Процесор',
          value: 'Apple A15 Bionic',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='core' />,
          description: 'Кількість ядер',
          value: '6 ядер',
        },
        {
          icon: <ExtendedProductCardSvgSelector id='batery' />,
          description: 'Місткість батареї',
          value: '4352 мАч',
        },
      ],
      detailed: [
        {
          title: "Стандарт зв'язку",
          value: ['2G (GPRS/EDGE)', '3G (WCDMA/UMTS/HSPA)', '4G (LTE)', '5G'],
        },
        {
          title: 'Діагональ екрану',
          value: ['6.7'],
        },
        {
          title: 'Роздільна здатність дисплея',
          value: ['2778x1284'],
        },
        {
          title: 'Тип матриці',
          value: ['OLED (Super Retina XDR)'],
        },
        {
          title: 'Частота оновлення екрану',
          value: ['120 Гц'],
        },
        {
          title: 'Кількість точок торкання',
          value: ['10'],
        },
        {
          title: 'Матеріал екрану',
          value: ['Ceramic Shield'],
        },
        {
          title: 'Кількість СІМ-карт',
          value: ['2'],
        },
        {
          title: 'Розміри СІМ-картки',
          value: ['Nano-SIM'],
        },
        {
          title: "Вбудована пам'ять",
          value: ['256 ГБ'],
        },
      ],
      article: [
        {
          title: 'Приготуйтеся до епохи Pro',
          content:
            "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
          subcontent: '',
          photo: [item],
        },
        {
          title: 'Високий стиль. Висока надійність',
          content:
            'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
          subcontent:
            'Стандарт захисту від пилу та вологи IP68 дозволяє пережити екстрені ситуації без наслідків.',
          photo: [item1, item2],
        },
        {
          title: 'Мистецтво мобільної фотографії',
          content:
            'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
          subcontent: '',
          photo: [item3, item4, item5],
        },
        {
          title: 'Дивовижні селфи з камерою TrueDepth',
          content:
            'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
          subcontent: '',
          photo: [item6],
        },
      ],
      colors: [
        {
          color: '#255149',
          colorName: 'Green',
        },
        {
          color: '#909090',
          colorName: 'Grey',
        },
        {
          color: '#AFCEEB',
          colorName: 'Light Blue',
        },
        {
          color: '#000',
          colorName: 'Black',
        },
        {
          color: '#111',
          colorName: 'White',
        },
      ],
      ram: [3, 4, 6, 8, 10, 12, 16],
      memorySize: ['128ГБ', '256ГБ', '512ГБ', '1ТБ'],
      corps: ['Метал', 'Пластик'],
    },
    category: {
      name: 'Планшети',
      mainImage: tablets,
      coupled: [113],
      top: false,
      id: 2,
    },
    brand: {
      name: 'Lenovo',
      logo: lenovo,
      country: 'China',
      id: 145,
    },
  },
];
