import './index.css';
import { Header } from 'components/header/Header';
import { AsideMenuSvgSelector } from 'components/goods-presentation-block/AsideMenu/AsideMenuSvgSelector';
import { nanoid } from 'nanoid';
import { PresentationBlockSvgSelector } from 'components/goods-presentation-block/presentation-swiper/PresentationBlockSvgSelector';
import { BrandsLine } from 'components/popular-brands-line/BrandsLine';
import { TopCategoriesBlock } from 'components/top-categories/TopCategoriesBlock';
import { VideoReviewBlock } from 'components/video-review/VideoReviewBlock';
import { BenefitsLine } from 'components/benefits-line/BenefitsLine';
import { SubscriptionBlock } from 'components/subscription-block/SubscriptionBlock';
import { ShopHistory } from 'components/shop-history/ShopHistory';
import { GoodsPresentationBlock } from 'components/goods-presentation-block/GoodsPresentationBlock';
import { ProductCardList } from 'components/product-card/ProductCardList';
import { useState } from 'react';
import { Footer } from 'components/footer/Footer';

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
import { Route, Routes } from 'react-router';
import { Cart } from 'components/basket/AddToBasketWindow/Cart';
import { AddToCart } from 'components/basket/AddToBasketWindow/AddToBasket';

const data = [
  {
    icon: <AsideMenuSvgSelector id='accessory' />,
    goodType: 'Аксесуари',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='cables' />,
    goodType: 'Зарядні пристрої та кабелі',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: true,
        presentativeSettings: {
          background: <PresentationBlockSvgSelector id='green-bg' />,
          image: pic,
          logotype: <PresentationBlockSvgSelector id='transparent-logo' />,
        },
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='computerTechnique' />,
    goodType: "Комп'ютерна техніка",
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: true,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='computers' />,
    goodType: "Комп'ютерні комплектуючі",
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: true,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='elTransport' />,
    goodType: 'Електротранспорт',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='flash' />,
    goodType: 'Накопичувачі інформації',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: true,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='games' />,
    goodType: 'Ігрові приставки',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='headphones' />,
    goodType: 'Навушники',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='multimedia' />,
    goodType: 'Мультимедіа',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='other' />,
    goodType: 'Інше',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='powerbank' />,
    goodType: 'Power Bank і аксесуари до них',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='tablet' />,
    goodType: 'Планшети та електронні книги',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='tv' />,
    goodType: 'TV, Фото, Видео',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='vr' />,
    goodType: 'VR/Робототехніка/Товари для дітей',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='appliances' />,
    goodType: 'Побутова техніка дрібна',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='warmers' />,
    goodType: 'Обігрівачі/куртки з підігрівом',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='portativ_electronics' />,
    goodType: 'Портативна електроніка',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='software' />,
    goodType: 'Програмне забезпечення',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='smart_house' />,
    goodType: 'Розумний будинок',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='phones' />,
    goodType: 'Смартфони, Телефони',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='sim' />,
    goodType: 'Стартові пакети та скретч карти',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
  {
    icon: <AsideMenuSvgSelector id='services' />,
    goodType: 'Послуги',
    id: nanoid(),
    goodslist: {
      code: nanoid(),
      availability: true,
      oldprice: '1200',
      price: '1000',
      image: '',
      model: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey (ZA5T0095UA)',
      brand: 'Lenovo',
      specifications: {
        setpresentativ: false,
      },
    },
  },
];
const data1 = [
  {
    name: 'Lenovo Tab M10 Plus FHD Wi-Fi 4/128Gb Iron Grey',
    model: 'ZA5T0095UA',
    price: 453,
    oldprice: 1400,
    leader: true,
    available: true,
    novelty: false,
    id: 1,
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
    novelty: false,
    available: true,
    leader: false,
    oldprice: 3000,
    price: 1902,
    id: 2,
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
    available: false,
    leader: false,
    oldprice: 1400,
    novelty: false,
    price: 453,
    id: 3,
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
    available: false,
    novelty: true,
    oldprice: 2091,
    leader: true,
    price: 1900,
    id: 4,
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
    available: true,
    novelty: false,
    oldprice: 1400,
    leader: true,
    price: 453,
    id: 5,
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
    available: true,
    novelty: true,
    oldprice: 4000,
    leader: true,
    price: 1000,
    id: 6,
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
    available: true,
    oldprice: 1400,
    novelty: true,
    leader: true,
    price: 453,
    id: 7,
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
    available: true,
    leader: true,
    novelty: false,
    oldprice: 1400,
    price: 453,

    id: 8,
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
    available: false,
    oldprice: 5643,
    novelty: true,
    leader: false,
    price: 1200,
    id: 9,
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
    available: true,
    leader: true,
    novelty: false,
    oldprice: 2000,
    price: 1400,
    id: 10,
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
    available: true,
    leader: true,
    novelty: true,
    oldprice: 1400,
    price: 453,
    id: 11,
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
    available: true,
    oldprice: 3999,
    novelty: false,
    leader: true,
    price: 1400,
    id: 12,
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
    available: true,
    novelty: true,
    leader: true,
    oldprice: 1400,
    price: 453,
    id: 13,
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
    available: true,
    leader: true,
    novelty: false,
    oldprice: 4932,
    price: 1092,
    id: 14,
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
    available: true,
    oldprice: 9033,
    novelty: true,
    leader: true,
    price: 2999,
    id: 15,
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
    available: true,
    leader: true,
    oldprice: 1400,
    price: 453,
    novelty: false,
    id: 16,
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
    available: true,
    oldprice: 1400,
    leader: true,
    novelty: true,
    price: 453,
    id: 17,
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
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 18,
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
    available: true,
    oldprice: 1400,
    novelty: true,
    leader: true,
    price: 453,
    id: 19,
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
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 20,
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
    available: true,
    novelty: true,
    oldprice: 1400,
    leader: true,
    price: 453,
    id: 21,
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
    available: true,
    novelty: false,
    oldprice: 1400,
    leader: true,
    price: 453,
    id: 22,
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
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 23,
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
    available: true,
    oldprice: 1400,
    leader: true,
    novelty: false,
    price: 453,
    id: 24,
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
    available: true,
    oldprice: 1400,
    novelty: false,
    leader: true,
    price: 453,
    id: 25,
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

function MainPage() {
  const [orderProductsCount, setOrderProductsCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [addToCartActive, setAddToCartActive] = useState<boolean>(false);
  const [currentProductId, setCurrentProductId] = useState(0);
  const [compareCount, setCompareCount] = useState(0);

  return (
    <div className='App'>
      <Header
        goods={data}
        orderProductsCount={orderProductsCount}
        favoriteCount={favoriteCount}
        compareCount={compareCount}
      />
      <AddToCart products={data1} 
        productId = {currentProductId} 
        isActive = {addToCartActive}
        setOrderCountHandler={setOrderProductsCount}
        setCompareCountHandler={setCompareCount}
        setFavoriteCountHandler={setFavoriteCount} 
        viewHandler = {setAddToCartActive}
        setCurrentProductIdHandler = {setCurrentProductId} />
      <GoodsPresentationBlock goods={data} />
      {/* <PresentationSwiper /> */}
      <BrandsLine data={data1} />
      <ProductCardList
        type='leaders'
        data={data1}
        setOrderCountHandler={setOrderProductsCount}
        setFavoriteCountHandler={setFavoriteCount}
        setCompareCountHandler={setCompareCount}
        setAddToCartActiveHandler = {setAddToCartActive}
        setCurrentProductIdHandler = {setCurrentProductId}
        addToCartActive = {addToCartActive}
      />
      <ProductCardList
        type='novelties'
        data={data1}
        setOrderCountHandler={setOrderProductsCount}
        setFavoriteCountHandler={setFavoriteCount}
        setCompareCountHandler={setCompareCount}
        setAddToCartActiveHandler = {setAddToCartActive}
        setCurrentProductIdHandler = {setCurrentProductId}
        addToCartActive = {addToCartActive}
      />
      <TopCategoriesBlock data={data1} />
      <VideoReviewBlock />
      <BenefitsLine />
      <SubscriptionBlock />
      <ShopHistory />
      <Footer />
    </div>
  );
}

function CartPage() {
  const [orderProductsCount, setOrderProductsCount] = useState(0);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const [compareCount, setCompareCount] = useState(0);

  return (
    <div className='App'>
      <Header
        goods={data}
        orderProductsCount={orderProductsCount}
        favoriteCount={favoriteCount}
        compareCount={compareCount}
      />
      <Cart data = {data1}
        setOrderCountHandler = {setOrderProductsCount}
        setFavoriteCountHandler = {setFavoriteCount}
        setCompareCountHandler = {setCompareCount}
      />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<MainPage />}></Route>
      <Route path = '/cart' element = {<CartPage />}></Route>
    </Routes>
  );
}

export default App;
