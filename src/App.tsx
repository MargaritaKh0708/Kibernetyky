import './index.css';
import { Header } from 'components/header/Header';
import { AsideMenuSvgSelector } from 'components/goods-presentation-block/AsideMenu/AsideMenuSvgSelector';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Footer } from 'components/footer/Footer';
import { OpenCatalogContext } from 'components/goods-presentation-block/AsideMenu/OpenCatalogContext';
import { Route, Routes } from 'react-router';
import { CartPage } from 'components/Pages/CartPage';
import { ProductCardSvgSelector } from 'components/product-card/extended-product-card/ExtendedProductCardSvgSelector';

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

import pic0 from 'assets/goods-card/iphone/pic1.jpg';
import pic1 from 'assets/goods-card/iphone/pic2.jpg';
import pic2 from 'assets/goods-card/iphone/pic3.jpg';
import pic3 from 'assets/goods-card/iphone/pic4.jpg';
import pic4 from 'assets/goods-card/iphone/pic5.jpg';
import pic5 from 'assets/goods-card/iphone/pic6.jpg';

import { MainPage } from 'components/Pages/MainPage';
import { ExtendedProductCard } from './components/product-card/extended-product-card/ExtendedProductCard';

const data = [
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
const data1 = [
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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
    specifications: [
      {
        icon: <ProductCardSvgSelector id='screen' />,
        description: 'Діагональ екрану',
        value: '6.7”',
      },
      {
        icon: <ProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'Apple A15 Bionic',
      },
      {
        icon: <ProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '6 ядер',
      },
      {
        icon: <ProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      },
    ],
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

function App() {
  const [orderProductsCount, setOrderProductsCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);

  //Catalog
  const [open, setOpen] = useState<boolean>(false); // open or close modal w
  const [detailedInformation, setDetailedInformation] = useState<string>(''); // Show 2nd part of modal window
  const [displayWidth, setDisplayWidth] = useState<boolean>(false); // Watch of display-width to control modal window shape
  const [lastTargetName, setLastTargetName] = useState<string>(''); // Read last target name for come-back BTN
  const [hideCategoryList, setHideCategoryList] = useState<boolean>(false); // Property for hidden category list im mobile version work
  const [addToCartActive, setAddToCartActive] = useState<boolean>(false);
  const [currentProductId, setCurrentProductId] = useState<number>(0);
  const [compareCount, setCompareCount] = useState<number>(0);

  return (
    <div className='App'>
      <OpenCatalogContext.Provider
        value={{
          setDetailedInformation,
          detailedInformation,
          setHideCategoryList,
          setLastTargetName,
          hideCategoryList,
          setDisplayWidth,
          lastTargetName,
          displayWidth,
          setOpen,
          open,
        }}
      >
        <Header
          orderProductsCount={orderProductsCount}
          favoriteCount={favoriteCount}
          compareCount={compareCount}
          maindata={data1}
          goods={data}
        />
        <Routes>
          <Route
            path='/'
            element={
              <MainPage
                setAddToCartActiveHandler={setAddToCartActive}
                setCurrentProductIdHandler={setCurrentProductId}
                setOrderCountHandler={setOrderProductsCount}
                setFavoriteCountHandler={setFavoriteCount}
                setCompareCountHandler={setCompareCount}
                viewHandler={setAddToCartActive}
                productId={currentProductId}
                isActive={addToCartActive}
                oldgoods={data}
                goods={data1}
              />
            }
          ></Route>
          <Route
            path='/cart'
            element={
              <CartPage
                setOrderProductsCount={setOrderProductsCount}
                setFavoriteCount={setFavoriteCount}
                setCompareCountHandler={setCompareCount}
                goods={data1}
              />
            }
          ></Route>
          <Route
            path='/product'
            element={<ExtendedProductCard good={data1[0]} />}
          ></Route>
        </Routes>
        <Footer />
      </OpenCatalogContext.Provider>
    </div>
  );
}

export default App;
