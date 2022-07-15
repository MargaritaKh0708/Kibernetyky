import { ExtendedProductCardSvgSelector } from '../product-card/extended-product-card/ExtendedProductCardSvgSelector';
import apple from 'assets/icons/brands-icons/apple.png';
import haier from 'assets/icons/brands-icons/haier.png';
import lenovo from 'assets/icons/brands-icons/lenovo.png';
import xiaomi from 'assets/icons/brands-icons/xiaomi.png'; // забрать все картинки в селектор !

const source = {
  data: [
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/272004130.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272004145.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272004155.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272004166.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272004175.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272004184.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272004197.jpg',
      ],
      title:
        'Быстрая зарядка для iphone комплект кабель Type-C Lighting Блок питания 20W 11 / 12 pro max / 13 fast charger',
      price: 694,
      old_price: 1083,
      id: 341628757,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/272237846.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272237848.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272237850.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272237856.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272237862.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272237866.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272237871.jpg',
      ],
      title:
        'Быстрая зарядка для iphone 11/12 комплект кабель Typ-C Lighting Блок питание 20W PAVLYSH (PZ-24)',
      price: 695,
      old_price: 1008,
      id: 296578448,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/259585966.jpg',
        'https://content.rozetka.com.ua/goods/images/original/259585973.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/259585980.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/259585983.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259585985.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/259585987.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/259585989.jpg',
      ],
      title:
        'Комплект быстрой зарядки для Apple iPhone, Сетевое зарядное устройство 18W USB-C Power Adapter (Type-C), Кабель зарядки USB-C to Lightning',
      price: 798,
      old_price: 899,
      id: 288956798,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/270443772.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270443785.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270443798.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270443811.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270443827.jpg',
      ],
      title:
        'Беспроводная зарядка для apple iPhone 12 MagSafe Charger Foxconn White (A03896) + Подарок Кабель для Apple Lightning',
      price: 970,
      old_price: 1940,
      id: 307411063,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/271260522.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271260555.png',
        'https://content.rozetka.com.ua/goods/images/original/271260563.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271260568.png',
        'https://content1.rozetka.com.ua/goods/images/original/271260585.png',
        'https://content1.rozetka.com.ua/goods/images/original/271260594.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271260599.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271260604.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271260611.png',
        'https://content1.rozetka.com.ua/goods/images/original/271260615.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271260618.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271260619.jpg',
      ],
      title:
        'Зарядная станция 32А 22кВт Тype 2 кабель 5 м Wi-Fi Bluetooth 230/400В Wallbox Commander 2 (CMX2-0-2-4-8-002)',
      price: 48979,
      old_price: 57627,
      id: 340278623,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/260087813.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/260087822.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/260087835.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/260087845.jpg',
        'https://content.rozetka.com.ua/goods/images/original/260087856.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/260087863.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/260087872.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/260087883.jpg',
      ],
      title:
        'Сетевое зарядное устройство BASEUS Type-C to Type-C cable Super Si Quick Charger 1Type-C, 3A/25W адаптер с кабелем Type-C 1м и быстрой зарядкой Black (TZCCSUP-L01)',
      price: 649,
      old_price: 0,
      id: 338347336,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/270446402.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270446416.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270446424.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270446432.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270446440.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270446447.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270446454.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270446459.jpg',
      ],
      title:
        'Сетевое зарядное устройство USB-C блок питания 20W Power Adapter для Apple iPhone/iPad + Кабель зарядки USB-C to Lightning',
      price: 777,
      old_price: 1000,
      id: 332349124,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/177865846.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/177865847.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/177865848.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/177865849.jpg',
        'https://content.rozetka.com.ua/goods/images/original/177865851.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/177865854.jpg',
      ],
      title:
        'Сетевое зарядное устройство Foxconn для Iphone 11/12 Pro Max 20W + Кабель USB-C to Lightining 1 м White',
      price: 848,
      old_price: 1099,
      id: 271165271,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/258693236.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258693241.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258693243.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258693246.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258693248.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258693252.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258693254.jpg',
      ],
      title:
        'Комплект быстрой зарядки для Apple iPhone, Сетевое зарядное устройство 20W USB-C Power Adapter (Type-C), Кабель зарядки USB-C to Lightning',
      price: 799,
      old_price: 999,
      id: 288956793,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/195257199.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/195257212.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/195257223.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/195257231.jpg',
      ],
      title:
        'Комплект зарядки для Apple iPhone, Сетевое зарядное устройство 5W USB Power Adapter , Кабель зарядки USB to Lightning',
      price: 249,
      old_price: 399,
      id: 310924068,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/270483273.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270483281.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270483287.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270483298.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270483310.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270483318.jpg',
      ],
      title:
        'Кабель для iPhone Lightning to USB кабель зарядки для iPad IOS 1m и блок питания зарядный Комплект White PAVLYSH (PZ-05)',
      price: 369,
      old_price: 535,
      id: 252881881,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/260746437.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/260746442.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/260746447.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/260746455.jpg',
        'https://content.rozetka.com.ua/goods/images/original/260746474.jpg',
        'https://content.rozetka.com.ua/goods/images/original/260746478.jpg',
        'https://content.rozetka.com.ua/goods/images/original/260746484.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/260746507.jpg',
      ],
      title:
        'Сетевое зарядное устройство BASEUS Type-C to Type-C Cable GaN2 Fast Charger 1C |1Type-C, QC/PD, 100W, 5A| с кабелем Type-C 1.5м. и быстрой зарядкой Black (TZCCGAN-L01)',
      price: 2049,
      old_price: 0,
      id: 338704654,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/272004177.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272004189.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272004200.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272004209.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272004218.jpg',
      ],
      title:
        'Зарядное устройство для iPhone 11/12 Pro Max 18W с Кабелем USB-C to Lightining Foxconn 1м Белый',
      price: 594,
      old_price: 861,
      id: 341707378,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/267656521.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267656529.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267656536.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267656543.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267656550.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267656558.jpg',
      ],
      title:
        'Зарядное устройство для телефона USB 2.1А блок питания зарядка для смартфона + кабель 1м Type-C Kingyou KC88E White',
      price: 289,
      old_price: 400,
      id: 342500296,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/183796789.jpg',
        'https://content.rozetka.com.ua/goods/images/original/183796793.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/183796812.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/183796825.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/183796837.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/183796843.jpg',
      ],
      title:
        'Зарядное устройство Baseus GaN 2 PRO Quick Charger 65W (2 Type-С+USB) + кабель USB-C 100W для MacBook/iPad/iPhone/Android white',
      price: 1990,
      old_price: 2200,
      id: 289791458,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/185244411.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/185244422.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/185244437.jpg',
        'https://content.rozetka.com.ua/goods/images/original/185244448.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/185244460.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185244477.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/185244489.jpg',
        'https://content.rozetka.com.ua/goods/images/original/185244497.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/185244505.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/185244508.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185244512.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185244517.jpg',
      ],
      title:
        'Зарядное устройство Baseus GaN 120W Quick Charger 4.0/PD 3.0 + кабель USB-C 100W для MacBook/iPad/iPhone/Android black',
      price: 3280,
      old_price: 3400,
      id: 286783233,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/226816375.png',
        'https://content.rozetka.com.ua/goods/images/original/226816385.png',
        'https://content2.rozetka.com.ua/goods/images/original/226816390.png',
        'https://content.rozetka.com.ua/goods/images/original/226816396.png',
        'https://content.rozetka.com.ua/goods/images/original/226816400.png',
        'https://content.rozetka.com.ua/goods/images/original/226816403.png',
        'https://content1.rozetka.com.ua/goods/images/original/226816406.png',
        'https://content1.rozetka.com.ua/goods/images/original/226816408.png',
        'https://content1.rozetka.com.ua/goods/images/original/226816409.png',
      ],
      title:
        'Автомобильное зарядное устройство Baseus Superme Digital Display 100W High Power QC4.0+PD3.0 PPS (USB + Type-C) с кабелем Type-C to Type-C 100W (20V/5A), 1 м (TZCCZX-01)',
      price: 1198,
      old_price: 1500,
      id: 321423016,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/198220182.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/198220189.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/198220195.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/198220205.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/198220216.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/198220226.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/198220236.jpg',
        'https://content.rozetka.com.ua/goods/images/original/198220244.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/198220251.jpg',
      ],
      title:
        'Зарядное устройство Baseus GaN2 100W Quick Charge 5.0 |1xType-C, QC/PD, 5A| + кабель USB-C 100W для iPad/iPhone/Huawei/Samsung/Asus/Google/Lenovo black',
      price: 2490,
      old_price: 2800,
      id: 312735163,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/271435893.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271435899.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271435905.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271435910.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271435914.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271435915.jpg',
      ],
      title:
        'Кабель для iPhone Lightning to USB кабель зарядки для iPad IOS 2m и блок питания зарядный Комплект White PAVLYSH (PZ-20)',
      price: 226,
      old_price: 328,
      id: 303236703,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/258089709.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258089719.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258089730.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258089738.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258089748.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258089753.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258089760.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/258089768.jpg',
      ],
      title:
        'Комплект быстрой зарядки 20 Вт для Apple iPhone iPod, Сетевое зарядное устройство 20W USB-C Power Adapter (Type-C), Кабель зарядки USB-C to Lightning',
      price: 749,
      old_price: 899,
      id: 337369201,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/258089724.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/258089734.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258089742.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258089751.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258089763.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258089770.jpg',
      ],
      title:
        'Комплект быстрой зарядки для Apple iPhone iPod, Сетевое зарядное устройство 18W USB-C Power Adapter (Type-C), Кабель зарядки USB-C to Lightning',
      price: 719,
      old_price: 799,
      id: 337369213,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/267077337.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267077345.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267077351.jpg',
      ],
      title:
        'Кабель Baseus Yiven USB - Lightning для Apple iPhone / iPad / iPod Lightning 2.0 A (1.8 м) Black',
      price: 235,
      old_price: 0,
      id: 342227389,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/271437004.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271437016.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271437026.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271437034.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271437045.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271437056.jpg',
      ],
      title:
        'Кабель для iPhone Lightning to USB 1M Кабель зарядки для iPad IOS + блок питания, зарядный комплект для Apple PAVLYSH 72',
      price: 293,
      old_price: 440,
      id: 339148498,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/259642437.png',
        'https://content1.rozetka.com.ua/goods/images/original/259642449.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259642460.jpg',
        'https://content.rozetka.com.ua/goods/images/original/259642467.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/259642476.png',
        'https://content2.rozetka.com.ua/goods/images/original/259642482.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259642485.jpg',
        'https://content.rozetka.com.ua/goods/images/original/259642488.jpg',
      ],
      title:
        'Сетевое зарядное устройство HOCO N6 |2USB, 3A, 2xQC3.0, 18W| адаптер с micro-USB кабелем 1м и быстрой зарядкой Black (N6MUB)',
      price: 359,
      old_price: 0,
      id: 338080090,
    },
  ],
};

const tablets = {
  data: [
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/141062451.png',
        'https://content.rozetka.com.ua/goods/images/original/141062454.png',
        'https://content.rozetka.com.ua/goods/images/original/141062459.png',
        'https://content2.rozetka.com.ua/goods/images/original/141062476.png',
        'https://content.rozetka.com.ua/goods/images/original/141062502.png',
      ],
      title: 'Планшет Prestigio Grace 4891 4G 32GB Dark Gray (PMT4891_4G_E)',
      price: 5499,
      old_price: 6599,
      id: 238052071,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/251753669.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251753670.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251753671.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251753672.jpg',
      ],
      title: 'Планшет Nokia T20 Wi-Fi 32GB Blue (F20RID1A032)',
      price: 6999,
      old_price: 6999,
      id: 334631374,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/164881277.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164881278.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164881279.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/164881319.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164881320.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/164881321.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164881322.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/164881323.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164881324.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164881286.jpg',
      ],
      title:
        'Планшет Prestigio Node A8 3G 8" 32GB Slate Grey (PMT4208_3G_E_EU)',
      price: 2999,
      old_price: 3699,
      id: 283646358,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/228625046.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228625051.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228625059.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228625065.jpg',
      ],
      title: 'Планшет Lenovo Tab P11 Plus Wi-Fi 128GB Slate Grey (ZA940099UA)',
      price: 11499,
      old_price: 11499,
      id: 322165549,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/224009737.jpg',
        'https://content.rozetka.com.ua/goods/images/original/224009738.jpg',
        'https://content.rozetka.com.ua/goods/images/original/224009739.jpg',
        'https://content.rozetka.com.ua/goods/images/original/224009740.jpg',
      ],
      title: 'Планшет Apple iPad 10.2" 2021 Wi-Fi 64GB Space Gray (MK2K3RK/A)',
      price: 14499,
      old_price: 12999,
      id: 318462577,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/220379307.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220379319.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220379330.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/220379344.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220379348.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220379352.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220379364.jpg',
      ],
      title: 'Планшет Xiaomi Mi Pad 5 Wi-Fi 6/128GB Cosmic Gray',
      price: 12999,
      old_price: 13999,
      id: 313947550,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/186993826.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186993870.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186993923.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186993957.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186993991.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186994022.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186994063.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186994099.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A7 Lite Wi-Fi 32GB Grey (SM-T220NZAASEK)',
      price: 5599,
      old_price: 5799,
      id: 303592028,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/247716706.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247716707.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247716708.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247716709.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716710.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716711.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247716712.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716714.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247716715.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716716.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A8 10.5 LTE 64GB Grey (SM-X205NZAESEK)',
      price: 9999,
      old_price: 9999,
      id: 331903660,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/166772207.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/166772208.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164954348.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164954349.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164954350.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/164954351.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164954352.jpg',
      ],
      title: 'Планшет Lenovo Tab P11 Pro LTE 128GB Slate Grey (ZA7D0074UA)',
      price: 24999,
      old_price: 24999,
      id: 283833198,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/222706322.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222706323.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222706324.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222706325.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222706327.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222706328.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222706329.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222706330.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222706331.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222706332.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222706333.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222706334.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222706335.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222706336.jpg',
      ],
      title: 'Планшет Lenovo Yoga Tab 11 4/128GB LTE Storm Grey (ZA8X0001UA)',
      price: 12999,
      old_price: 13999,
      id: 319253830,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/186993601.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186993631.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186993651.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186993685.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186993708.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186993722.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186993724.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186993725.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A7 Lite LTE 32GB Grey (SM-T225NZAASEK)',
      price: 6699,
      old_price: 6999,
      id: 303585678,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/186994111.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186994133.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186994158.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186994189.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186994214.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186994234.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186994242.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186994248.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A7 Lite Wi-Fi 64GB Grey (SM-T220NZAFSEK)',
      price: 6299,
      old_price: 6499,
      id: 303592083,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/194433607.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194433545.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194433570.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194433591.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194433631.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194433663.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194465274.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194465312.jpg',
      ],
      title: 'Планшет Samsung Galaxy Tab S7 FE LTE 64GB Pink (SM-T735NLIASEK)',
      price: 19499,
      old_price: 19999,
      id: 309776033,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/135467305.jpg',
        'https://content.rozetka.com.ua/goods/images/original/135467315.jpg',
        'https://content.rozetka.com.ua/goods/images/original/135467339.jpg',
        'https://content.rozetka.com.ua/goods/images/original/135467348.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/135467358.jpg',
      ],
      title: 'Планшет Lenovo Tab P11 LTE 4/128GB Slate Grey (ZA7S0012UA)',
      price: 11999,
      old_price: 11999,
      id: 277962773,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/186993783.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186993825.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186993841.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/186993887.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186993933.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186993958.jpg',
        'https://content.rozetka.com.ua/goods/images/original/186993986.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/186994021.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A7 Lite LTE 64GB Grey (SM-T225NZAFSEK)',
      price: 7499,
      old_price: 7499,
      id: 303592018,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/247716669.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716670.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716671.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247716672.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716673.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716674.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716675.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716676.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716677.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716678.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A8 10.5 Wi-Fi 64GB Grey (SM-X200NZAESEK )',
      price: 8699,
      old_price: 8799,
      id: 331999519,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/222659807.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222659808.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222659809.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222659811.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222659812.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222659813.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222659818.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222659819.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222659820.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222659821.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222659822.jpg',
      ],
      title:
        'Планшет Lenovo Yoga Tab 13 8/128GB Wi-Fi Shadow Black (ZA8E0009UA)',
      price: 24999,
      old_price: 24999,
      id: 319228531,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/253290156.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253290157.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253290158.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253290159.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253290160.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253290161.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253290162.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253290163.jpg',
      ],
      title: 'Планшет Samsung Galaxy Tab S8 5G 128GB Graphite (SM-X706BZAASEK)',
      price: 32099,
      old_price: 27999,
      id: 334107853,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/253290391.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253290392.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253290393.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253290394.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290395.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290396.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290397.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290398.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab S8 Wi-Fi 128GB Graphite (SM-X700NZAASEK)',
      price: 26399,
      old_price: 26999,
      id: 334106311,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/247715734.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247715761.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247715776.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247715786.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247715799.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247715809.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247715812.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247715814.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247715822.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247715829.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A8 10.5 Wi-Fi 32GB Grey (SM-X200NZAASEK)',
      price: 7999,
      old_price: 8099,
      id: 332000995,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/242275294.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/242275298.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/242275299.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/242275301.jpg',
      ],
      title: 'Планшет Lenovo Tab P11 Wi-Fi 64GB Slate Grey (ZA7R0172UA)',
      price: 10499,
      old_price: 10499,
      id: 329576485,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/222850876.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222850877.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222850878.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222850879.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222850880.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222850881.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222850883.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222850884.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab S7 FE Wi-Fi 64GB Pink (SM-T733NLIASEK)',
      price: 17199,
      old_price: 17499,
      id: 319305757,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/72396223.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/72396165.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/72396135.jpg',
        'https://content.rozetka.com.ua/goods/images/original/72396117.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/72396174.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/72396186.jpg',
        'https://content.rozetka.com.ua/goods/images/original/72396151.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/72396182.jpg',
      ],
      title: 'Планшет Pixus Blast 10.1" LTE 3/32GB Black (4897058531114)',
      price: 4999,
      old_price: 4999,
      id: 75614850,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/249527037.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249527038.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249527039.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249527041.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249527043.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249527044.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249527046.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249527048.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249527049.jpg',
      ],
      title:
        'Планшет Huawei MatePad T10S (2nd Gen) Wi-Fi 128GB Deepsea Blue (53012NFA)',
      price: 7999,
      old_price: 7999,
      id: 333399298,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/23204673.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23204701.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23204712.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23204715.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23204719.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/23204728.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23204733.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23204739.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23204744.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23204749.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23204753.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23204758.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23204761.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/23204767.jpg',
      ],
      title: 'Планшет Lenovo Tab M10 Plus FHD 128GB LTE Iron Grey (ZA5V0111UA)',
      price: 9299,
      old_price: 9299,
      id: 200497063,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/253290403.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253290404.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290405.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253290406.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290407.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290408.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290409.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253290410.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab S8+ 5G 128GB Graphite (SM-X806BZAASEK)',
      price: 40199,
      old_price: 40999,
      id: 334109113,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/236597059.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236597060.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236597061.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/236597062.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236597471.jpg',
      ],
      title: 'Планшет Lenovo Tab M7 (3rd Gen) LTE 32GB Iron Grey (ZA8D0044UA)',
      price: 5499,
      old_price: 5499,
      id: 326382265,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/247657163.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247657189.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247657198.jpg',
      ],
      title: 'Планшет Sigma mobile Tab A1015 4G 64GB Grey (4827798765319)',
      price: 8629,
      old_price: 8629,
      id: 332357566,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/222702850.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222702936.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222703012.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222703042.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222703106.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222703115.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222703124.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222703140.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222703204.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222703317.jpg',
        'https://content.rozetka.com.ua/goods/images/original/222703342.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222703349.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/222703356.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/222703394.jpg',
      ],
      title: 'Планшет Lenovo Yoga Tab 11 4/128GB Wi-Fi Storm Grey (ZA8W0020UA)',
      price: 11999,
      old_price: 12999,
      id: 319241554,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/166772250.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166772251.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164953221.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164953222.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/164953223.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164953224.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164953225.jpg',
      ],
      title: 'Планшет Lenovo Tab P11 Pro Wi-Fi 128GB Slate Grey (ZA7C0092UA)',
      price: 23999,
      old_price: 23999,
      id: 283778258,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/247716740.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716741.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716742.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716743.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716744.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247716745.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247716746.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716747.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716749.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247716750.jpg',
      ],
      title:
        'Планшет Samsung Galaxy Tab A8 10.5 LTE 32GB Grey (SM-X205NZAASEK)',
      price: 8999,
      old_price: 9299,
      id: 331893568,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/269023491.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269023492.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269023493.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269023494.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269023495.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269023496.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269023497.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269023498.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269023499.jpg',
      ],
      title:
        'Планшет Huawei MatePad T10 (2nd Gen) LTE 64GB Deepsea Blue (53012NHR)',
      price: 7699,
      old_price: 7699,
      id: 343284916,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/31760146.jpg',
        'https://content.rozetka.com.ua/goods/images/original/31760103.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/31760111.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/31760162.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/31760190.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/31760233.jpg',
      ],
      title: 'Планшет Alcatel 3T 8 2020 (9032X) 8" HD LTE 2/32GB Black',
      price: 4999,
      old_price: 5399,
      id: 248296411,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/15964785.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/15964794.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/15964823.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/15964818.jpg',
        'https://content.rozetka.com.ua/goods/images/original/15964809.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/15964920.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/15964841.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/15964883.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/15964849.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/15964903.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/15964913.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/15964862.jpg',
        'https://content.rozetka.com.ua/goods/images/original/15964869.jpg',
        'https://content.rozetka.com.ua/goods/images/original/15964874.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/15964892.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/15964831.jpg',
      ],
      title: 'Планшет Lenovo Tab M10 HD 2/32 LTE Slate Black (ZA4H0012UA)',
      price: 6299,
      old_price: 6299,
      id: 104718690,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/146759806.jpg',
        'https://content.rozetka.com.ua/goods/images/original/146759777.jpg',
        'https://content.rozetka.com.ua/goods/images/original/146759778.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/146759750.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/146759770.jpg',
        'https://content.rozetka.com.ua/goods/images/original/146759740.jpg',
        'https://content.rozetka.com.ua/goods/images/original/146759788.jpg',
        'https://content.rozetka.com.ua/goods/images/original/146759776.jpg',
        'https://content.rozetka.com.ua/goods/images/original/146759746.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/146759748.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/146759739.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/146759717.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/146759743.jpg',
      ],
      title: 'Планшет Prestigio Q Pro 8" 4G 16GB Black (PMT4238_4G_D_GY)',
      price: 3999,
      old_price: 3999,
      id: 250356306,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/20131116.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20131118.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20131238.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20131124.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/20131131.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20131138.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20131140.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20131143.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/20131216.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/20131223.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20131231.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20131251.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20131254.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20131244.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20131249.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20131135.jpg',
      ],
      title: 'Планшет Lenovo Tab M8 HD 2/32 LTE Iron Grey (ZA5H0073UA)',
      price: 5799,
      old_price: 5799,
      id: 165170258,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/75416027.jpg',
        'https://content.rozetka.com.ua/goods/images/original/75416029.jpg',
        'https://content.rozetka.com.ua/goods/images/original/75416033.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/75416035.jpg',
        'https://content.rozetka.com.ua/goods/images/original/75416037.jpg',
        'https://content.rozetka.com.ua/goods/images/original/75416048.jpg',
      ],
      title: 'Планшет Pixus Sprint 3G 2/16GB Black',
      price: 4199,
      old_price: 4199,
      id: 275119443,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/18225805.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18225659.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18225687.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18225630.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18225709.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18225736.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/18225774.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18225829.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18225869.jpg',
      ],
      title: 'Планшет Lenovo Tab M8 HD 2/32 WiFi Iron Grey (ZA5G0054UA)',
      price: 5299,
      old_price: 5299,
      id: 136984700,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/253910210.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253910211.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253910212.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253910213.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253910214.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253910215.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253910216.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253910217.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253910218.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253910219.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253910220.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253910221.jpg',
      ],
      title: 'Планшет Realme Pad 10.4" 3/32 Wi-Fi Grey (6941399063709)',
      price: 6999,
      old_price: 8499,
      id: 335767819,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/120508838.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/120508848.jpg',
        'https://content.rozetka.com.ua/goods/images/original/120508840.jpg',
        'https://content.rozetka.com.ua/goods/images/original/120508853.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/120508850.jpg',
        'https://content.rozetka.com.ua/goods/images/original/120508846.jpg',
      ],
      title: 'Планшет Pixus Sprint 3G 1/16GB Black',
      price: 3899,
      old_price: 3899,
      id: 194552828,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/148485414.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/148485329.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/148485339.jpg',
        'https://content.rozetka.com.ua/goods/images/original/148485378.jpg',
        'https://content.rozetka.com.ua/goods/images/original/148485408.jpg',
      ],
      title: 'Планшет Prestigio Smartkids 3197 16GB Pink (PMT3197_W_D_PK)',
      price: 2799,
      old_price: 2799,
      id: 253505681,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/249512901.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249512902.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249512904.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249512905.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249512906.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249512907.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249512908.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249512909.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249512910.jpg',
      ],
      title:
        'Планшет Huawei MatePad T10 (2nd Gen) Wi-Fi 64GB Deepsea Blue (53012NHH)',
      price: 6399,
      old_price: 6399,
      id: 333389596,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/159730044.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159730182.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159730183.jpg',
        'https://content.rozetka.com.ua/goods/images/original/159730184.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/159730185.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/159730186.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159730187.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/159730188.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159730189.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159730190.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159730059.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/159730060.jpg',
      ],
      title:
        'Планшет Prestigio Smartkids UP 16GB Orange/Violet (PMT3104_WI_D_EU)',
      price: 3999,
      old_price: 4399,
      id: 278931483,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/21153809.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/21153825.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21153850.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/21153867.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21153878.jpg',
        'https://content.rozetka.com.ua/goods/images/original/21153896.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/21153908.jpg',
        'https://content.rozetka.com.ua/goods/images/original/21153928.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21153944.jpg',
        'https://content.rozetka.com.ua/goods/images/original/21153963.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21153988.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21154009.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21154025.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21154042.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/21154053.jpg',
      ],
      title:
        'Планшет Lenovo Tab M10 Plus FHD 4/128GB WiFi Iron Grey (ZA5T0095UA)',
      price: 8299,
      old_price: 8299,
      id: 175678896,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/23197903.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23197915.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23198142.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23198159.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23197941.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23198026.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23198048.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23198001.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23197958.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23197971.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23197989.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23198066.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23198090.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23198096.jpg',
      ],
      title: 'Планшет Lenovo Tab M10 Plus FHD 64GB LTE Iron Grey (ZA5V0083UA)',
      price: 8799,
      old_price: 8799,
      id: 200467045,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/269063858.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269063859.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269063860.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269063861.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269063862.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269063863.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269063864.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269063865.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269063866.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269063867.jpg',
      ],
      title:
        'Планшет Huawei Matepad 10.4 2nd Gen 4+128 WIFI with Keyboard (53013AEC)',
      price: 10999,
      old_price: 10499,
      id: 343304437,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/236596949.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236596950.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236596951.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236596952.jpg',
      ],
      title: 'Планшет Lenovo Tab M7 (3rd Gen) LTE 32GB Iron Grey (ZA8D0005UA)',
      price: 5299,
      old_price: 5299,
      id: 326380312,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/270151046.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270151054.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270151060.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270151068.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270151078.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270151082.jpg',
      ],
      title: 'Планшет Teclast P30HD (4/64) LTE (TL-102737)',
      price: 5999,
      old_price: 6555,
      id: 343915027,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/261381579.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261381586.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261381596.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261381601.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/261381606.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261381609.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/261381614.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261381617.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261381620.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/261381624.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261381627.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261381629.jpg',
      ],
      title: 'Планшет защищенный iHunt Strong 10 PRO - 4/64 Гб, 10000 мАч',
      price: 11900,
      old_price: 14000,
      id: 331715434,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263646135.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263646140.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263646150.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263646157.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263646166.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263646175.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263646184.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263646193.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263646202.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263646209.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263646213.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263646219.jpg',
      ],
      title: 'Планшет Teclast M40 Pro c Клавиатурой (6/128) LTE (TL-102711)',
      price: 8990,
      old_price: 9555,
      id: 340117105,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/271560476.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271560479.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271560483.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271560488.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271560494.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271560498.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271560502.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271560507.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271560512.jpg',
      ],
      title: 'Планшет Teclast M40 Pro (6/128) LTE (TL-102707)',
      price: 7990,
      old_price: 8770,
      id: 340117111,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/248344797.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248344801.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248344809.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248344821.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248344835.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/248344844.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248344856.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248344867.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248344870.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248344879.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248344883.jpg',
      ],
      title: 'Планшет ALLDOCUBE iPlay 20P (6/128GB) LTE (AC-102592)',
      price: 6990,
      old_price: 7555,
      id: 332810512,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/233763243.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233763250.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233763258.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233763268.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233763277.jpg',
        'https://content.rozetka.com.ua/goods/images/original/233763289.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233763298.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233763312.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233763324.jpg',
        'https://content.rozetka.com.ua/goods/images/original/233763332.jpg',
      ],
      title: 'Планшет iHunt PC 10 PRO с клавиатурой - 4/64 Гб, 7680 мАч',
      price: 7950,
      old_price: 9035,
      id: 324903292,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/261604198.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261604203.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261604209.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261604216.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261604222.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/261604230.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261604241.jpg',
        'https://content.rozetka.com.ua/goods/images/original/261604250.jpg',
      ],
      title: 'Планшет защищенный iHunt Strong 10 PRO',
      price: 11900,
      old_price: 14000,
      id: 339095527,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/55538929.jpg',
        'https://content.rozetka.com.ua/goods/images/original/55538938.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/55538947.jpg',
        'https://content.rozetka.com.ua/goods/images/original/55538962.jpg',
        'https://content.rozetka.com.ua/goods/images/original/55538970.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/55538979.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/55538984.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/55538989.jpg',
      ],
      title:
        'Планшет Lenovo Tab M10 Plus TB-X606F Wi-Fi 4/128GB Platinum Grey (ZA5T0090UA) UA-UCRF [51603]',
      price: 8878,
      old_price: 0,
      id: 273359118,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/271478626.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271478630.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271478634.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271478640.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271478649.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271478661.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271478673.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271478687.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271478696.jpg',
      ],
      title:
        'Планшет Teclast M40 PRO (6GB/128GB) LTE (TL-100001) (TLA007P) + Оригинальный чехол',
      price: 8390,
      old_price: 8555,
      id: 344639479,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/177073925.jpg',
        'https://content.rozetka.com.ua/goods/images/original/177073928.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/177073930.jpg',
        'https://content.rozetka.com.ua/goods/images/original/177073931.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/177073932.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/177073933.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/177073934.jpg',
        'https://content.rozetka.com.ua/goods/images/original/177073935.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/177073936.jpg',
        'https://content.rozetka.com.ua/goods/images/original/177073937.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/177073938.jpg',
        'https://content.rozetka.com.ua/goods/images/original/177073940.jpg',
      ],
      title: 'Планшет ALLDOCUBE iPlay 40H (8/128) (T1020H) LTE (AC-102512)',
      price: 9555,
      old_price: 10990,
      id: 295735968,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/18382814.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18382919.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/18382978.jpg',
        'https://content.rozetka.com.ua/goods/images/original/18382979.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/18382980.jpg',
        'https://content.rozetka.com.ua/goods/images/original/18382981.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/18382993.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/18382997.jpg',
      ],
      title:
        'Планшет-телефон Adronix MT116 2GB RAM Silver + Чехол-книжка + Карта памяти 64GB',
      price: 4549,
      old_price: 4850,
      id: 139487833,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/271989169.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271989176.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271989185.jpg',
      ],
      title:
        'Планшетный ПК Lenovo Tab M10 TB-X505F 32GB Polar White (ZA4G0116PL)_; 10.1" (1280х800) IPS / Qualcomm Snapdragon 429 / ОЗУ 2 ГБ / 32 ГБ встроенная + microSD до 256 ГБ / камера 5 Мп + 2 Мп / Wi-Fi, Bluetooth / GPS, GLONASS / ОС Android 9.0 (Pie) / 242 х 16',
      price: 5499,
      old_price: 0,
      id: 345003679,
    },
  ],
};

const phones = {
  data: [
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/189581882.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189581909.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189581950.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189581978.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189582037.jpg',
        'https://content.rozetka.com.ua/goods/images/original/189582070.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189582089.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy M32 6/128GB Light Blue (SM-M325FLBGSEK)',
      price: 8999,
      old_price: 10499,
      id: 306660108,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/225753307.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/225753308.jpg',
        'https://content.rozetka.com.ua/goods/images/original/225753309.jpg',
        'https://content.rozetka.com.ua/goods/images/original/225753310.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/225753311.jpg',
        'https://content.rozetka.com.ua/goods/images/original/225753312.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225753313.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy M52 5G 6/128GB Light Blue (SM-M526BLBHSEK)',
      price: 13499,
      old_price: 14499,
      id: 320841586,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/250758659.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250758706.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250758713.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250758731.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250758744.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250758756.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250758772.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250758799.jpg',
      ],
      title: 'Мобильный телефон Xiaomi Redmi Note 11 4/64GB Twilight Blue',
      price: 7999,
      old_price: 8499,
      id: 334132594,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263969408.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263969409.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263969410.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263969411.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263969412.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263969413.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263969414.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263969415.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A53 5G 6/128GB Light Blue (SM-A536ELBDSEK)',
      price: 14999,
      old_price: 16799,
      id: 340365465,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/175376690.jpg',
        'https://content.rozetka.com.ua/goods/images/original/175376700.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/175376709.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175376715.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175376721.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175376697.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175376698.jpg',
        'https://content.rozetka.com.ua/goods/images/original/175376694.jpg',
      ],
      title: 'Мобильный телефон Samsung Galaxy A32 4/128GB Black',
      price: 8999,
      old_price: 10499,
      id: 280528638,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/250762458.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250762459.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250762462.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250762464.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250762466.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250762468.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250762469.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250762470.jpg',
      ],
      title: 'Мобильный телефон Xiaomi Redmi Note 11 4/128GB Graphite Gray',
      price: 8999,
      old_price: 9499,
      id: 334133923,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/221271704.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/221271711.jpg',
        'https://content.rozetka.com.ua/goods/images/original/221271737.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/221271749.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/221271753.jpg',
      ],
      title:
        'Мобильный телефон Apple iPhone 13 mini 256GB Pink Официальная гарантия',
      price: 30999,
      old_price: 30999,
      id: 318463579,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263855363.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263855364.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263855365.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263855366.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263855367.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263855368.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263855369.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263855370.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy M53 5G 6/128GB Brown (SM-M536BZNDSEK)',
      price: 15999,
      old_price: 16999,
      id: 340279507,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/221208611.jpg',
        'https://content.rozetka.com.ua/goods/images/original/221208613.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/221018246.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/221208612.jpg',
        'https://content.rozetka.com.ua/goods/images/original/221208614.jpg',
        'https://content.rozetka.com.ua/goods/images/original/221208615.jpg',
      ],
      title:
        'Мобильный телефон Apple iPhone 13 Pro 1TB Sierra Blue Официальная гарантия',
      price: 52999,
      old_price: 60999,
      id: 318462988,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263857427.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263857428.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263857429.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263857430.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263857431.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263857432.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263857433.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263857434.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy M33 5G 6/128GB Green (SM-M336BZGGSEK)',
      price: 10499,
      old_price: 11599,
      id: 340280235,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/165919739.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/165919974.jpg',
        'https://content.rozetka.com.ua/goods/images/original/165919975.jpg',
        'https://content.rozetka.com.ua/goods/images/original/165919976.jpg',
        'https://content.rozetka.com.ua/goods/images/original/165919978.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/165919980.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/165919982.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/165919984.jpg',
      ],
      title: 'Мобильный телефон Samsung Galaxy A32 4/64GB White',
      price: 8299,
      old_price: 9799,
      id: 280528623,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/269757734.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269757735.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269757736.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269757737.jpg',
      ],
      title:
        'Мобильный телефон Infinix Note 10 Pro (X695C) 8/128Gb NFC Black (4895180767036)',
      price: 8499,
      old_price: 8499,
      id: 343738594,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/220713124.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/220713170.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220713251.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220713295.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220713317.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220713355.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220713384.jpg',
      ],
      title:
        'Мобильный телефон Motorola Moto G60 6/128GB Haze Gray (PANB0007RS)',
      price: 8999,
      old_price: 8999,
      id: 318348673,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/185522922.jpg',
        'https://content.rozetka.com.ua/goods/images/original/185522947.jpg',
        'https://content.rozetka.com.ua/goods/images/original/185522961.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/185522984.jpg',
        'https://content.rozetka.com.ua/goods/images/original/185523002.jpg',
        'https://content.rozetka.com.ua/goods/images/original/185523019.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185523037.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185523052.jpg',
      ],
      title: 'Мобильный телефон Realme C11 2021 2/32GB Blue',
      price: 4199,
      old_price: 4199,
      id: 303563248,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/173867779.jpg',
        'https://content.rozetka.com.ua/goods/images/original/173867780.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/173867781.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/173867782.jpg',
      ],
      title:
        'Мобильный телефон Apple iPhone 12 64GB Purple Официальная гарантия',
      price: 26999,
      old_price: 26999,
      id: 245162389,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/271009585.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271009540.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271009541.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271009542.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271009543.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271009544.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271009545.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271009546.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271009547.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271009548.jpg',
      ],
      title:
        'Мобильный телефон Infinix HOT 12 Play NFC (X6816D) 4/64GB Racing Black (4895180779725)',
      price: 4999,
      old_price: 4999,
      id: 344434378,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/221284442.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/221284716.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/221023020.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/221284589.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/221284779.jpg',
        'https://content.rozetka.com.ua/goods/images/original/221284868.jpg',
      ],
      title:
        'Мобильный телефон Apple iPhone 13 Pro Max 128GB Sierra Blue Официальная гарантия',
      price: 41499,
      old_price: 46499,
      id: 318463621,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/254913783.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254913784.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254913786.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254913787.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254913788.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254913789.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254913790.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254913791.jpg',
      ],
      title: 'Мобильный телефон Xiaomi Redmi Note 11 6/128GB Graphite Gray',
      price: 9499,
      old_price: 9999,
      id: 336304642,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/166279499.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166279502.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/166279504.jpg',
        'https://content.rozetka.com.ua/goods/images/original/166279505.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/166279506.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166279507.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166279508.jpg',
        'https://content.rozetka.com.ua/goods/images/original/166279509.jpg',
      ],
      title: 'Мобильный телефон Samsung Galaxy A52 4/128GB Blue',
      price: 10999,
      old_price: 13299,
      id: 280536193,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/166276939.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166276941.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/166276945.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/166276948.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/166276950.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166276952.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/166276953.jpg',
        'https://content.rozetka.com.ua/goods/images/original/166276954.jpg',
      ],
      title: 'Мобильный телефон Samsung Galaxy A52 8/256GB Black',
      price: 12999,
      old_price: 15499,
      id: 280539228,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/265579429.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265579430.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265579431.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265579432.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265579433.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265579434.jpg',
      ],
      title: 'Мобильный телефон Xiaomi Redmi 10C 4/128GB Graphite Gray',
      price: 7299,
      old_price: 7299,
      id: 341366488,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/251632678.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251632693.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251632708.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251632719.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251632736.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251632757.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251632768.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253177822.jpg',
      ],
      title:
        'Мобильный телефон Infinix Hot 11S 6/128GB Green Wave (4895180776106)',
      price: 6999,
      old_price: 7299,
      id: 334556470,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/245951562.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245951565.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245951583.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245951595.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245951603.jpg',
        'https://content.rozetka.com.ua/goods/images/original/245951611.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245951617.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245951622.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy S21 FE 6/128GB Lavender (SM-G990BLVDSEK)',
      price: 25499,
      old_price: 25499,
      id: 331621069,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263940978.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263940980.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263940981.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263940982.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263940983.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263940984.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263940985.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263940986.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A23 4/64GB Black (SM-A235FZKUSEK)',
      price: 9299,
      old_price: 9699,
      id: 340331576,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/37389483.jpg',
        'https://content.rozetka.com.ua/goods/images/original/37389489.png',
        'https://content1.rozetka.com.ua/goods/images/original/37389497.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/37389503.jpg',
        'https://content.rozetka.com.ua/goods/images/original/37389521.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/37389526.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/37389529.jpg',
      ],
      title:
        'Мобильный телефон Apple iPhone 11 64GB White Slim Box (MHDC3) Официальная гарантия',
      price: 20999,
      old_price: 20999,
      id: 260904506,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263848149.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263848150.jpg',
      ],
      title: 'Мобильный телефон Nokia G11 3/32 Chacoal',
      price: 4999,
      old_price: 5399,
      id: 340276957,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/220470602.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220470636.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220470645.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/220470652.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220470663.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220470696.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220470701.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220470710.jpg',
      ],
      title: 'Мобильный телефон Xiaomi Redmi 10 2022 4/64GB Sea Blue',
      price: 7299,
      old_price: 5399,
      id: 315482908,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263969400.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263969401.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263969402.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263969403.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263969404.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263969405.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263969406.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263969407.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A53 5G 8/256GB Light Blue (SM-A536ELBHSEK)',
      price: 16999,
      old_price: 18899,
      id: 340365505,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263912872.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263912873.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263912874.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263912875.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263912876.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263912877.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263912878.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A13 3/32GB Light Blue (SM-A135FLBUSEK)',
      price: 6999,
      old_price: 7199,
      id: 340315344,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/251635576.png',
        'https://content1.rozetka.com.ua/goods/images/original/251635577.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251635578.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251635579.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251635580.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251635581.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251635582.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251635583.jpg',
      ],
      title:
        'Мобильный телефон Realme C21Y 4/64GB no NFC Cross Black (6941399059306)',
      price: 5399,
      old_price: 5399,
      id: 334552732,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/251637875.png',
        'https://content1.rozetka.com.ua/goods/images/original/251637877.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251637878.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251637879.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251637880.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251637881.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251637882.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251637883.jpg',
      ],
      title:
        'Мобильный телефон Realme C21Y 4/64GB no NFC Cross Blue (6941399059290)',
      price: 5399,
      old_price: 5399,
      id: 334557331,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263974567.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263974568.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263974569.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263974570.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263974571.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263974572.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263974573.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263974574.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A73 5G 8/256Gb White (SM-A736BZWHSEK)',
      price: 19999,
      old_price: 22099,
      id: 340365557,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/225014175.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225014176.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225014177.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225014179.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225014178.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/225014180.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225014181.jpg',
      ],
      title: 'Мобильный телефон ZTE Blade L9 1/32GB Grey',
      price: 2199,
      old_price: 1699,
      id: 320445679,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/263944408.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263944410.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263944412.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263944414.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263944416.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263944417.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263944418.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263944420.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A23 6/128GB Orange (SM-A235FZOKSEK)',
      price: 10499,
      old_price: 10499,
      id: 340353585,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263916044.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263916045.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263916046.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263916047.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263916048.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263916049.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263916051.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A13 4/128GB Black (SM-A135FZKKSEK)',
      price: 8299,
      old_price: 8799,
      id: 340325380,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263942304.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263942306.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263942308.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263942310.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263942312.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263942314.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263942316.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263942318.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy M23 5G 4/128GB Pink Gold (SM-M236BIDGSEK)',
      price: 10599,
      old_price: 11099,
      id: 340299198,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263902809.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263902810.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263902811.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263902812.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263902813.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263902814.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263902815.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263902816.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy M23 5G 4/64GB Deep Green (SM-M236BZGDSEK)',
      price: 10199,
      old_price: 10199,
      id: 340304408,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/251628681.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251628704.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251628722.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251628734.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251628749.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251628778.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251628802.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253177845.jpg',
      ],
      title:
        'Мобильный телефон Infinix Hot 11S 4/64GB Polar Black (4895180776120)',
      price: 5999,
      old_price: 4799,
      id: 334555210,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/251018079.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251018081.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251018083.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251018084.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251018085.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251018086.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251018087.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253177875.jpg',
      ],
      title:
        'Мобильный телефон Infinix Smart 6 2/32GB Polar Black (4895180775932)',
      price: 3799,
      old_price: 3999,
      id: 334230694,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/144655314.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/144655331.jpg',
        'https://content.rozetka.com.ua/goods/images/original/144655293.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/144655325.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/144655303.jpg',
      ],
      title: 'Мобильный телефон OPPO A53 4/64GB Blue',
      price: 6699,
      old_price: 5999,
      id: 245921989,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/234889840.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234889841.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234889843.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234889845.jpg',
      ],
      title: 'Мобильный телефон Poco M4 Pro 5G 4/64GB Cool Blue (883158)',
      price: 8299,
      old_price: 8299,
      id: 325403446,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/238652200.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652201.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652202.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652203.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652204.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238652205.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652206.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238652207.jpg',
      ],
      title: 'Мобильный телефон Realme C25Y 4/128GB Glacier Blue',
      price: 6499,
      old_price: 6499,
      id: 327551038,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/238652947.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652948.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238652949.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652950.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238652951.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238652954.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238652956.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238652957.jpg',
      ],
      title: 'Мобильный телефон Realme C25Y 4/64GB Metal Grey',
      price: 5999,
      old_price: 5999,
      id: 327554023,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263964999.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263964998.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263964992.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263964993.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263964997.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263964995.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263964996.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263964994.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A33 5G 6/128GB Light Blue(SM-A336BLBGSEK)',
      price: 12499,
      old_price: 14199,
      id: 340365357,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/45681746.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/45683228.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/45683242.jpg',
        'https://content.rozetka.com.ua/goods/images/original/45683255.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/45683269.jpg',
        'https://content.rozetka.com.ua/goods/images/original/45683280.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/45683299.jpg',
        'https://content.rozetka.com.ua/goods/images/original/45683314.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy S21 Plus 8/128GB Phantom Black (SM-G996BZKDSEK)',
      price: 31999,
      old_price: 31999,
      id: 272682816,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/253279672.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253279683.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253279697.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253279719.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253279745.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253279767.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253279786.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253279809.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy S22 8/128GB Phantom White (SM-S901BZWDSEK)',
      price: 31999,
      old_price: 33999,
      id: 334104679,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/220277489.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/220277490.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/220277491.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/220277492.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/220277493.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220277494.jpg',
        'https://content.rozetka.com.ua/goods/images/original/220277496.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/220277500.jpg',
      ],
      title: 'Мобильный телефон Xiaomi 11T 8/128GB Meteorite Gray',
      price: 14499,
      old_price: 14499,
      id: 313913182,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/163432102.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163432103.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163432104.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163432106.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163432109.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163432111.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163432113.jpg',
      ],
      title:
        'Мобильный телефон Xiaomi Redmi Note 10 Pro 6/128GB Onyx Gray (765960)',
      price: 11999,
      old_price: 11999,
      id: 282452808,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/175471778.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175471779.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175471780.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/175471781.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/175471782.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175471783.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/175471768.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy M12 4/64GB Light Blue (SM-M127FLBVSEK)',
      price: 6999,
      old_price: 6999,
      id: 294044243,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/253281439.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281440.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281441.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281442.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281443.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281444.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281445.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281446.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281447.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281448.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281449.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281450.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281451.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281452.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281453.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy S22 Ultra 12/256GB Burgundy (SM-S908BDRGSEK)',
      price: 48499,
      old_price: 50999,
      id: 334088128,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/221205342.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/221031468.jpg',
        'https://content.rozetka.com.ua/goods/images/original/221205359.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/221205365.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/221205375.jpg',
      ],
      title:
        'Мобильный телефон Apple iPhone 13 512GB Pink Официальная гарантия',
      price: 42999,
      old_price: 42999,
      id: 318466348,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/208448540.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/208448651.jpg',
        'https://content.rozetka.com.ua/goods/images/original/208448783.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/208448874.jpg',
        'https://content.rozetka.com.ua/goods/images/original/208448940.jpg',
        'https://content.rozetka.com.ua/goods/images/original/208449027.jpg',
        'https://content.rozetka.com.ua/goods/images/original/208449100.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A03s 4/64GB Blue (SM-A037FZBGSEK)',
      price: 5599,
      old_price: 5599,
      id: 314406793,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/208439345.jpg',
        'https://content.rozetka.com.ua/goods/images/original/208439406.jpg',
        'https://content.rozetka.com.ua/goods/images/original/208439436.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/208439445.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/208439506.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/208439557.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/208439582.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A03s 3/32GB Black (SM-A037FZKDSEK)',
      price: 4999,
      old_price: 4999,
      id: 314403685,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/45462786.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/45464903.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/45464906.jpg',
        'https://content.rozetka.com.ua/goods/images/original/45464910.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/45464912.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/45464914.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/45464917.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/45464918.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy S21 8/128GB Phantom Pink (SM-G991BZIDSEK)',
      price: 26999,
      old_price: 26999,
      id: 272627166,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/253281547.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281548.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281549.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281550.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281551.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281555.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281557.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281562.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281569.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281576.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281583.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253281595.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281608.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253281628.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253281639.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy S22 Ultra 12/512GB Green (SM-S908BZGHSEK)',
      price: 52999,
      old_price: 55699,
      id: 334086334,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/253280114.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253280115.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253280116.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253280117.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253280118.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253280120.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253280122.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253280124.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy S22 8/256GB Phantom White (SM-S901BZWGSEK)',
      price: 34499,
      old_price: 36299,
      id: 334103209,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263974510.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263974511.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263974512.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263974513.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263974514.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263974515.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263974516.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263974517.jpg',
      ],
      title:
        'Мобильный телефон Samsung Galaxy A73 5G 6/128Gb Gray (SM-A736BZADSEK)',
      price: 17999,
      old_price: 19899,
      id: 340365529,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/144090576.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/144090568.jpg',
        'https://content.rozetka.com.ua/goods/images/original/144090228.jpg',
        'https://content.rozetka.com.ua/goods/images/original/144090276.jpg',
        'https://content.rozetka.com.ua/goods/images/original/144090291.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/144090394.jpg',
      ],
      title: 'Мобильный телефон Xiaomi Redmi 9C 2/32GB Midnight Grey (660922)',
      price: 4699,
      old_price: 3399,
      id: 244758475,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/263851611.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263851612.jpg',
      ],
      title: 'Мобильный телефон Nokia G21 4/64 Nordic Blue',
      price: 6299,
      old_price: 6499,
      id: 340277152,
    },
  ],
};

const noutbooks = {
  data: [
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/163386254.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163386255.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163386256.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163386257.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163386258.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163386259.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163386260.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163386261.jpg',
      ],
      title:
        'Ноутбук Acer Aspire 7 A715-42G-R0VS (NH.QBFEU.00A) Charcoal Black',
      price: 27999,
      old_price: 27999,
      id: 282286938,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/270525898.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270525902.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270525897.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270525892.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270525894.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270525895.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270525899.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270525900.jpg',
        'https://content.rozetka.com.ua/goods/images/original/270525901.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270525903.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/270525904.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/270525906.jpg',
      ],
      title:
        'Ноутбук ASUS ExpertBook B1 B1500CEAE-BQ1663 (90NX0441-M20230) Star Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ',
      price: 17999,
      old_price: 21999,
      id: 344108557,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/252192898.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252192899.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252192900.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252192901.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252192902.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252191124.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252191125.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252191126.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252191127.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252191128.jpg',
      ],
      title: 'Ноутбук Lenovo V14 G2 ALC (82KC003NRA) Black',
      price: 16999,
      old_price: 19431,
      id: 334889104,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/272561687.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272561694.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272561690.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561691.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272561688.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561689.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561692.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561693.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561695.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272561696.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561697.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272561698.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272561699.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561700.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272561701.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272561702.jpg',
      ],
      title:
        'Ноутбук ASUS TUF Gaming A17 FA706IHR-HX029 (90NR07D5-M000P0) Graphite Black / AMD Ryzen 5 4600H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
      price: 34999,
      old_price: 38999,
      id: 345278746,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/248528822.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248528823.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248528824.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248528825.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248528826.jpg',
      ],
      title: 'Ноутбук HP Pavilion Gaming 15-ec2024ua (5A0U9EA) Shadow Black',
      price: 42999,
      old_price: 43999,
      id: 332906383,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/231490106.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/231490107.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231490108.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231490109.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231490110.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231490111.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231490112.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/231490113.jpg',
      ],
      title: 'Ноутбук Acer Nitro 5 AN515-57-54K7 (NH.QESEU.003) Shale Black',
      price: 37999,
      old_price: 42999,
      id: 322576183,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263093207.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263093217.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263093209.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263093210.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263093211.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263093212.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263093213.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263093214.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263093215.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263093216.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263093218.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263093219.jpg',
      ],
      title:
        'Ноутбук ASUS VivoBook 15 OLED K513EA-L12035 (90NB0SG1-M30870) Indie Black / Intel Core i5-1135G7 / RAM 8 ГБ / SSD 512 ГБ',
      price: 26999,
      old_price: 28999,
      id: 339784513,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/248178740.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248178741.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248178742.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248178743.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/248178745.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248178747.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248178749.jpg',
      ],
      title: 'Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700PURA) Arctic Grey',
      price: 13999,
      old_price: 16599,
      id: 332744989,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/231887316.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/231887317.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/231887318.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231887319.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231887320.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231887321.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231887322.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231887323.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231887324.jpg',
      ],
      title: 'Ноутбук Acer Swift 1 SF114-34-C4RG (NX.A77EU.00C) Pure Silver',
      price: 13999,
      old_price: 14999,
      id: 323909509,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/274267981.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274267986.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274267983.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274267984.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/274267985.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/274267982.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/274267987.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/274267988.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/274267989.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/274267990.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274267991.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274267992.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274412550.jpg',
      ],
      title:
        'Ноутбук ASUS TUF Gaming F15 FX506HC-HN023 (90NR0723-M00HU0) Eclipse Gray / Intel Core i5-11400H / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3050 + мышь ASUS TUF GAMING M5 V2',
      price: 36999,
      old_price: 40999,
      id: 346051810,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/239643280.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/239643281.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/239643282.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/239643283.jpg',
        'https://content.rozetka.com.ua/goods/images/original/239643284.jpg',
        'https://content.rozetka.com.ua/goods/images/original/239643286.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/239643288.jpg',
      ],
      title: 'Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700PVRA) Arctic Grey',
      price: 16999,
      old_price: 18999,
      id: 328047400,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/254116608.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254116609.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254116610.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254116611.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254116612.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254116613.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254116614.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254116615.jpg',
      ],
      title:
        'Ноутбук Acer Aspire 7 A715-42G-R8BL (NH.QDLEU.008) Charcoal Black',
      price: 33999,
      old_price: 36999,
      id: 335892088,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/251610427.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251610477.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251610435.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251610421.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251610444.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251610450.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251610462.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251610469.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251610474.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251610483.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251610490.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251610495.jpg',
      ],
      title:
        'Ноутбук ASUS ExpertBook B1 B1500CEAE-BQ1661R (90NX0441-M20210) Star Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ / Windows 10 Pro',
      price: 23999,
      old_price: 28799,
      id: 334543120,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/229714100.jpg',
        'https://content.rozetka.com.ua/goods/images/original/229714101.jpg',
        'https://content.rozetka.com.ua/goods/images/original/229714102.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/229714103.jpg',
      ],
      title:
        'Ноутбук Apple MacBook Pro 16" M1 Pro 512GB 2021 (MK183UA/A) Space Gray',
      price: 100999,
      old_price: 97999,
      id: 322710583,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/267795413.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267795414.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267795415.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267795416.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267795417.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267795418.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267795419.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267795420.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267795421.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267795422.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267795423.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267795424.jpg',
      ],
      title:
        'Ноутбук ASUS ROG Strix G15 G513RC-HN038 (90NR08A5-M002A0) Eclipse Gray / AMD Ryzen 7 6800H / SSD 512 ГБ / nVidia GeForce RTX 3050',
      price: 42999,
      old_price: 47999,
      id: 342602632,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/232111828.jpg',
        'https://content.rozetka.com.ua/goods/images/original/232111829.jpg',
        'https://content.rozetka.com.ua/goods/images/original/232111831.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/232111835.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/232111840.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/232111845.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/232111851.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/232111858.jpg',
        'https://content.rozetka.com.ua/goods/images/original/232111862.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/232111864.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/232111865.jpg',
        'https://content.rozetka.com.ua/goods/images/original/232111867.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/232111868.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/232111870.jpg',
      ],
      title: 'Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700L0RA) Arctic Grey',
      price: 11999,
      old_price: 14999,
      id: 324009400,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/163381583.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163381584.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163381585.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163381586.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163381575.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163381576.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163381587.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163381588.jpg',
      ],
      title:
        'Ноутбук Acer Aspire 5 A515-45G-R63J (NX.A8EEU.001) Charcoal Black',
      price: 23999,
      old_price: 24999,
      id: 282216878,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/264726475.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/264726488.jpg',
        'https://content.rozetka.com.ua/goods/images/original/264726480.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/264726485.jpg',
        'https://content.rozetka.com.ua/goods/images/original/264726487.jpg',
        'https://content.rozetka.com.ua/goods/images/original/264726496.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/264726516.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/264726527.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/264726535.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/264726538.jpg',
      ],
      title:
        'Ноутбук ASUS Laptop X515JA-EJ1815 (90NB0SR2-M34700) Transparent Silver / Intel Pentium Gold 6805 / RAM 8 ГБ / SSD 256 ГБ',
      price: 15799,
      old_price: 15999,
      id: 340876306,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/271166202.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271165570.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271166203.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271166204.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271166205.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271166206.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271166207.jpg',
      ],
      title:
        'Ноутбук Apple MacBook Pro 14" M1 Max 8TB 2021 (Z15G000DW) Space Gray',
      price: 238999,
      old_price: 0,
      id: 344525260,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/226103107.jpg',
        'https://content.rozetka.com.ua/goods/images/original/226103145.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/226103187.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/226103251.jpg',
        'https://content.rozetka.com.ua/goods/images/original/226103253.jpg',
      ],
      title: 'Ноутбук HP 250 G8 (27K02EA) Jet Black',
      price: 17899,
      old_price: 0,
      id: 303566893,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/234921272.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234921384.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234921681.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234921118.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234921152.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234921187.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234921224.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234921303.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234921347.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234921375.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234921386.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234921387.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234921388.jpg',
      ],
      title:
        'Ноутбук ASUS ExpertBook B1 B1400CEAE-BV1887 (90NX0421-M22040) Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ',
      price: 16999,
      old_price: 19499,
      id: 325419124,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/259936195.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259936196.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259936197.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259936198.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/259936199.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259936200.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/259936201.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/259936202.jpg',
      ],
      title:
        'Ноутбук Acer Aspire 7 A715-42G-R6JB (NH.QDLEU.00H) Charcoal Black',
      price: 38999,
      old_price: 40999,
      id: 338274052,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/246681697.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/246681686.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/246681416.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/246681689.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/246681418.jpg',
        'https://content.rozetka.com.ua/goods/images/original/246681419.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/246681417.jpg',
        'https://content.rozetka.com.ua/goods/images/original/246681723.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/246681691.jpg',
        'https://content.rozetka.com.ua/goods/images/original/246681413.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/246681414.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/246681415.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/246681709.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/246681717.jpg',
        'https://content.rozetka.com.ua/goods/images/original/246681687.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/246681725.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/246681688.jpg',
      ],
      title:
        'Ноутбук ASUS VivoBook 14 K413EP-EB346 (90NB0S3G-M04570) Hearty Gold / Intel Core i5-1135G7 / RAM 8 ГБ / SSD 256 ГБ / nVidia GeForce MX330',
      price: 23499,
      old_price: 25999,
      id: 331945309,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/252193529.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252193550.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252193574.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252193593.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252193594.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252193595.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252193597.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252193600.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252193605.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252193612.jpg',
      ],
      title: 'Ноутбук Lenovo V14 G2 ALC (82KC003JRA) Black',
      price: 18799,
      old_price: 20733,
      id: 334890169,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/244725612.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249356637.jpg',
        'https://content.rozetka.com.ua/goods/images/original/244725770.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244725892.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244725648.jpg',
        'https://content.rozetka.com.ua/goods/images/original/244725685.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244725897.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244725894.jpg',
        'https://content.rozetka.com.ua/goods/images/original/244725733.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244725896.jpg',
        'https://content.rozetka.com.ua/goods/images/original/244725891.jpg',
        'https://content.rozetka.com.ua/goods/images/original/244725524.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/244725583.jpg',
        'https://content.rozetka.com.ua/goods/images/original/244725554.jpg',
        'https://content.rozetka.com.ua/goods/images/original/244725893.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244725895.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/244725832.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244725879.jpg',
      ],
      title:
        'Ноутбук ASUS Vivobook Pro 14 OLED K3400PH-KM131W (90NB0UX3-M02640) Cool Silver / Intel Core i5-11300H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650 / Windows 11 Home',
      price: 35999,
      old_price: 38999,
      id: 330927004,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/263702370.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263702371.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263702372.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263702373.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263702374.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263702375.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263702376.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263702377.jpg',
      ],
      title:
        'Ноутбук Acer Aspire 7 A715-42G-R266 (NH.QDLEU.00M) Charcoal Black',
      price: 32999,
      old_price: 33999,
      id: 340152502,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/206724554.jpg',
        'https://content.rozetka.com.ua/goods/images/original/206724555.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/206724556.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/206724557.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/206724558.jpg',
        'https://content.rozetka.com.ua/goods/images/original/206724559.jpg',
      ],
      title: 'Ноутбук Lenovo V17 G2 ITL (82NX00DCRA) Iron Grey',
      price: 13999,
      old_price: 15419,
      id: 314003110,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/243277561.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247911656.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243277549.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243277550.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243277551.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243277552.jpg',
      ],
      title:
        'Ноутбук ASUS Vivobook Pro 14 OLED K3400PH-KM107 (90NB0UX2-M02280) Quiet Blue / Intel Core i5-11300H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce GTX 1650',
      price: 33999,
      old_price: 35999,
      id: 330113455,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/234489777.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234489778.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234489779.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234489780.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234489781.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234489782.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234489783.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234489784.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234489785.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234489787.jpg',
      ],
      title: 'Ноутбук MSI Modern 14 B11MOU-874XUA Carbon Gray',
      price: 20499,
      old_price: 19999,
      id: 325216981,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/238664318.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238664319.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238664320.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238664321.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238664322.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238664323.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238664324.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238664325.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238664326.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238664327.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238664328.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238664329.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238664330.jpg',
      ],
      title:
        'Ноутбук ASUS TUF Gaming F15 FX506HCB-HN161 (90NR0723-M04940) Eclipse Gray / Intel Core i5-11400H / RAM 16 ГБ / SSD 512 / nVidia GeForce RTX 3050',
      price: 38999,
      old_price: 41999,
      id: 327561304,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/258420085.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258420086.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258420087.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/258420088.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258420089.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258420090.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/258420091.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258420092.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/258420093.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258420094.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/258420095.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258420096.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258420097.jpg',
        'https://content.rozetka.com.ua/goods/images/original/258420098.jpg',
      ],
      title: 'Ноутбук Lenovo IdeaPad 3 14ITL6 (82H700KPRA) Arctic Grey',
      price: 11999,
      old_price: 13200,
      id: 337599142,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/163403141.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163403142.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163403143.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163403146.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163403148.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163403149.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163403150.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163403151.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163403152.jpg',
      ],
      title: 'Ноутбук Acer Swift 1 SF114-34-P1A1 (NX.A77EU.00V) Pure Silver',
      price: 16499,
      old_price: 15999,
      id: 282363393,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/272908480.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272908481.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272908482.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272908483.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272908484.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272908485.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272908486.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272908487.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272908488.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272908489.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272908490.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272908491.jpg',
      ],
      title:
        'Ноутбук ASUS Vivobook 15 OLED K513EA-L11220 (90NB0SG1-M00NZ0) Indie Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 512 ГБ',
      price: 23999,
      old_price: 25999,
      id: 345450295,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/132850835.jpg',
        'https://content.rozetka.com.ua/goods/images/original/132850845.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/132850858.jpg',
        'https://content.rozetka.com.ua/goods/images/original/132850874.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/132850901.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/132850805.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/132850817.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/132850825.jpg',
      ],
      title: 'Ноутбук Lenovo V14-IIL (82C400XGRA) Iron Grey',
      price: 16999,
      old_price: 19999,
      id: 221125189,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/175333147.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/175333148.jpg',
        'https://content.rozetka.com.ua/goods/images/original/175333151.jpg',
        'https://content.rozetka.com.ua/goods/images/original/175333153.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/175333156.jpg',
        'https://content.rozetka.com.ua/goods/images/original/175333159.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/175333166.jpg',
        'https://content.rozetka.com.ua/goods/images/original/175333174.jpg',
      ],
      title:
        'Ноутбук Acer Aspire 7 A715-42G-R3EZ (NH.QBFEU.00C) Charcoal Black',
      price: 31499,
      old_price: 31999,
      id: 288376303,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/247680362.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247680383.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680368.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247680369.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680371.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247680372.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680373.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680374.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247680375.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247680376.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680379.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247680381.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680382.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680384.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680385.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247680386.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247680387.jpg',
      ],
      title:
        'Ноутбук ASUS Vivobook Pro 14 OLED K3400PH-KM130W (90NB0UX3-M02620) Cool Silver / Intel Core i7-11370H / RAM 16 ГБ / SSD 1 ТБ / nVidia GeForce GTX 1650 / Windows 11 Home',
      price: 38999,
      old_price: 44999,
      id: 332371969,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/223511625.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/223511632.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/223511623.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223511619.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/223511621.jpg',
        'https://content.rozetka.com.ua/goods/images/original/223511622.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223511620.jpg',
        'https://content.rozetka.com.ua/goods/images/original/223511627.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223511630.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223511631.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223511633.jpg',
        'https://content.rozetka.com.ua/goods/images/original/223511634.jpg',
      ],
      title:
        'Ноутбук ASUS ZenBook 14 UM425QA-KI080 (90NB0TV1-M02230) Pine Grey / AMD Ryzen 7 5800H / RAM 16 ГБ / SSD 512 ГБ',
      price: 32999,
      old_price: 35999,
      id: 319601017,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/231482459.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/231482485.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231482500.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231482545.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231482580.png',
        'https://content2.rozetka.com.ua/goods/images/original/231482607.png',
        'https://content2.rozetka.com.ua/goods/images/original/231482639.png',
        'https://content2.rozetka.com.ua/goods/images/original/231482670.png',
      ],
      title: 'Ноутбук Acer Nitro 5 AN515-57-57E4 (NH.QEWEU.007) Shale Black',
      price: 46999,
      old_price: 0,
      id: 323225668,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/235253542.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/235253564.jpg',
        'https://content.rozetka.com.ua/goods/images/original/235253578.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/235253592.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/235253607.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/235253624.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/235253649.jpg',
      ],
      title: 'Ноутбук Dell Vostro 15 3515 (N6264VN3515UA_WHOM) Black',
      price: 21999,
      old_price: 26999,
      id: 325639798,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/271869887.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271871352.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271869918.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271869931.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271869909.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271869943.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271871353.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271871354.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271871355.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271871356.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271869954.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/271869962.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271869976.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271871357.jpg',
        'https://content.rozetka.com.ua/goods/images/original/271869979.jpg',
      ],
      title:
        'Ноутбук ASUS TUF Gaming F17 (2022) FX707ZM-HX017 (90NR09G2-M00250) Jaeger Gray / Intel Core i7-12700H / RAM 16 ГБ / SSD 512 ГБ / nVidia GeForce RTX 3060',
      price: 61999,
      old_price: 61999,
      id: 344951158,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/247212486.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247212487.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247212488.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247209191.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247209193.jpg',
      ],
      title: 'Ноутбук HP Pavilion Gaming 15-ec2031ua (59Y48EA) Shadow Black',
      price: 38999,
      old_price: 41999,
      id: 332148364,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/272907546.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272907554.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272907559.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272907564.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272907567.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272907574.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272907581.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272907587.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272907591.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272907594.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272907599.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272907604.jpg',
      ],
      title:
        'Ноутбук ASUS Vivobook 15 K513EA-BQ3437 (90NB0SG1-M019A0) Indie Black / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 256 ГБ',
      price: 19999,
      old_price: 22999,
      id: 345450169,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/163382661.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163382662.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163382663.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163382664.jpg',
        'https://content.rozetka.com.ua/goods/images/original/163382665.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163382666.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/163382667.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/163382668.jpg',
      ],
      title: 'Ноутбук Acer Aspire 5 A515-45G-R7C8 (NX.A8CEU.00K) Pure Silver',
      price: 21999,
      old_price: 22999,
      id: 282257488,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/159458059.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159458060.jpg',
        'https://content.rozetka.com.ua/goods/images/original/159458061.jpg',
        'https://content.rozetka.com.ua/goods/images/original/159458062.jpg',
        'https://content.rozetka.com.ua/goods/images/original/159458063.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/159458064.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/159458065.jpg',
        'https://content.rozetka.com.ua/goods/images/original/159458066.jpg',
      ],
      title: 'Ноутбук Lenovo V14 (82C600DARA) Grey',
      price: 13599,
      old_price: 15453,
      id: 278516153,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/248403839.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248403842.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/248403845.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248403846.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248403849.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/248403870.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248403892.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248403906.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248403927.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/248403942.jpg',
      ],
      title: 'Ноутбук MSI Modern 14 B11MOU-885XUA Carbon Gray',
      price: 26999,
      old_price: 27999,
      id: 332846788,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/267775719.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267775723.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267775720.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267775721.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267775722.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267775724.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267775725.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/267775726.jpg',
        'https://content.rozetka.com.ua/goods/images/original/267775727.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/267775728.jpg',
      ],
      title:
        'Ноутбук ASUS Laptop X515MA-EJ490 (90NB0TH2-M10340) Transparent Silver / Intel Celeron N4020 / RAM 4 ГБ / SSD 256 ГБ',
      price: 12999,
      old_price: 13999,
      id: 342591835,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/236530556.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236530557.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236530560.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236530561.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236530564.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236530567.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236530568.jpg',
      ],
      title: 'Ноутбук Lenovo IdeaPad 3 15ITL6 (82H800URRA) Arctic Grey',
      price: 15499,
      old_price: 16999,
      id: 326327086,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/245749178.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245749179.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245749181.jpg',
        'https://content.rozetka.com.ua/goods/images/original/245749182.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245749183.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245749185.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245749186.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245749187.jpg',
      ],
      title: 'Ноутбук Acer Nitro 5 AN517-54-555E (NH.QF8EU.006) Shale Black',
      price: 38999,
      old_price: 38999,
      id: 330206719,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/234034442.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234034443.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234034444.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/234034445.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234034446.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234025110.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234025116.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234025123.jpg',
        'https://content.rozetka.com.ua/goods/images/original/234025137.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/234025145.jpg',
      ],
      title: 'Ноутбук Lenovo V14 G2 ITL (82KA001JRA) Black',
      price: 16999,
      old_price: 18727,
      id: 325014835,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/274255994.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274256004.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/274255995.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/274255996.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/274255999.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/274256000.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274256001.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/274256002.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/274256003.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/274256005.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274256006.jpg',
        'https://content.rozetka.com.ua/goods/images/original/274256007.jpg',
      ],
      title:
        'Ноутбук ASUS VivoBook 14 K413EQ-EB347 (90NB0RKF-M05600) Indie Black / Intel Core i5-1135G7 / RAM 8 ГБ / SSD 512 ГБ / nVidia GeForce MX350',
      price: 25999,
      old_price: 27999,
      id: 346040071,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/176624460.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/176624462.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/176624465.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176624467.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/176624471.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/176624472.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176624474.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176624477.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176624478.jpg',
      ],
      title: 'Ноутбук Acer Swift 3 SF314-511-534H (NX.ABLEU.00K) Pure Silver',
      price: 23999,
      old_price: 24999,
      id: 282385553,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/206729221.jpg',
        'https://content.rozetka.com.ua/goods/images/original/206729222.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/206729223.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/206729224.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/206729225.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/206729226.jpg',
      ],
      title: 'Ноутбук Lenovo V17 G2 ITL (82NX00DRRA) Iron Grey',
      price: 13699,
      old_price: 15105,
      id: 314003125,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/247180846.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247180856.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247180847.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247180848.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247180849.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247180850.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247180851.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247180852.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247180853.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247180854.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247180855.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247180857.jpg',
      ],
      title:
        'Ноутбук ASUS ZenBook 14 UX425EA-KI852 (90NB0SM1-M007M0) Pine Grey / Intel Core i3-1115G4 / RAM 8 ГБ / SSD 512 ГБ',
      price: 23999,
      old_price: 28599,
      id: 332135320,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/229006735.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/229006736.jpg',
        'https://content.rozetka.com.ua/goods/images/original/229006737.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/229006738.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228999821.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228999829.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228999834.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/228999835.jpg',
      ],
      title:
        'Ноутбук Dell Vostro 15 3515 15.6" (N6262VN3515UA_WP) Black / AMD Ryzen 3 3250U / RAM 8 ГБ / Windows 10 Pro',
      price: 21499,
      old_price: 24750,
      id: 322377649,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/243313777.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243313778.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/243313779.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243313780.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243313781.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/243313782.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243313784.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243313786.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243313788.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243313790.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/243313791.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243313792.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243313793.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243313795.jpg',
      ],
      title:
        'Ноутбук ASUS VivoBook 17 X712EA-BX371 (90NB0TW1-M04480) Transparent Silver / Intel Pentium Gold 7505 / RAM 8 ГБ / SSD 256 ГБ',
      price: 17999,
      old_price: 0,
      id: 330129796,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/272014169.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272014170.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272014171.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272014172.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272014173.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272014174.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272014175.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/272014176.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272014177.jpg',
      ],
      title: 'Ноутбук Acer Aspire 3 A315-56-31Q4 (NX.HS5EU.02B) Shale Black',
      price: 15999,
      old_price: 16999,
      id: 345027766,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/253356275.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253356386.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253356404.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253356432.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/253356450.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253356458.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253356461.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/253356466.jpg',
      ],
      title:
        'Ноутбук Acer TravelMate P2 TMP214-52-37Y0 (NX.VLHEU.00C) Shale Black',
      price: 19899,
      old_price: 0,
      id: 335500891,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/228991359.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228991360.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/228991361.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/228991362.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228991363.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228991364.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228991365.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228991366.jpg',
      ],
      title: 'Ноутбук Dell Vostro 15 3515 (N6262VN3515UA_UBU) Black',
      price: 18499,
      old_price: 0,
      id: 322368373,
    },
  ],
};

const ebooks = {
  data: [
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/70255275.jpg',
      ],
      title: 'Amazon Kindle Paperwhite 10th Gen 32GB',
      price: 4849,
      old_price: 5299,
      id: 70542836,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/247670930.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247670943.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247670953.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247670964.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247670972.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247670981.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247670992.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247670996.jpg',
      ],
      title: 'Электронная книга Onyx Boox Note 5',
      price: 23990,
      old_price: 0,
      id: 332367724,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/243372823.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243372836.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/243372844.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243372848.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243372854.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243372867.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/243372885.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/243372888.jpg',
        'https://content.rozetka.com.ua/goods/images/original/243372897.jpg',
      ],
      title: 'Электронная книга Onyx Boox Leaf',
      price: 11390,
      old_price: 0,
      id: 329126509,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/225020550.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225020556.jpg',
        'https://content.rozetka.com.ua/goods/images/original/225020562.jpg',
        'https://content.rozetka.com.ua/goods/images/original/225020565.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/225020571.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/225020575.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/225020578.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/225020580.jpg',
        'https://content.rozetka.com.ua/goods/images/original/225020581.jpg',
      ],
      title: 'Электронная книга Onyx Boox Nova Air',
      price: 14490,
      old_price: 11450,
      id: 320446684,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/195681398.jpg',
      ],
      title: 'Электронная книга Amazon Kindle 10th Gen 8Gb White',
      price: 3399,
      old_price: 3499,
      id: 311359303,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/268240783.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240788.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240790.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240797.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240804.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268240810.jpg',
      ],
      title: 'Электронная книга Pocketbook 606, Black (PB606-E-CIS)',
      price: 3412,
      old_price: 3616,
      id: 341813050,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/269995937.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995943.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269995948.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995953.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995958.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269995963.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995971.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995972.jpg',
      ],
      title:
        'Электронная книга PocketBook 740 Pro Metallic Grey (PB740-3-J-CIS) [68347]',
      price: 8255,
      old_price: 0,
      id: 343877614,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/191434243.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/191434253.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/191434263.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/191434275.jpg',
        'https://content.rozetka.com.ua/goods/images/original/191434293.jpg',
        'https://content.rozetka.com.ua/goods/images/original/191434308.jpg',
        'https://content.rozetka.com.ua/goods/images/original/191434319.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/191434326.jpg',
      ],
      title: 'Электронная книга Onyx Boox Poke 3',
      price: 8490,
      old_price: 6450,
      id: 276236793,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/36582884.jpg',
      ],
      title: 'Электронная книга Amazon Kindle Paperwhite 10th Gen. 8GB Black',
      price: 4700,
      old_price: 0,
      id: 259279951,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/273925866.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273925871.jpg',
        'https://content.rozetka.com.ua/goods/images/original/273925876.jpg',
        'https://content.rozetka.com.ua/goods/images/original/273925892.jpg',
      ],
      title: 'Электронная книга Pocketbook 617 Black (PB617-P-CIS)',
      price: 3999,
      old_price: 4278,
      id: 341813218,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/20131864.jpg',
      ],
      title: 'Электронная книга ONYX BOOX Livingstone',
      price: 9500,
      old_price: 0,
      id: 165176397,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/265356283.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265356288.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356293.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356297.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356301.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356305.jpg',
      ],
      title:
        'Электронная книга Pocketbook 628 Touch Lux5 Ink Black (PB628-P-CIS)',
      price: 4569,
      old_price: 4999,
      id: 341232961,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/152391546.jpg',
      ],
      title: 'Электронная книга Amazon Kindle 10th Gen. (2019) Black',
      price: 3953,
      old_price: 0,
      id: 260356981,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/261868869.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/261868871.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261868875.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261868879.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/261868882.jpg',
      ],
      title: 'Электронная книга Sony PRS-600 Silver',
      price: 3099,
      old_price: 0,
      id: 62152214,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/108857844.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/108857862.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/108857877.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/108857892.jpg',
        'https://content.rozetka.com.ua/goods/images/original/108857907.jpg',
        'https://content.rozetka.com.ua/goods/images/original/108857922.jpg',
      ],
      title:
        'Электронная книга PocketBook 632 Touch HD 3 Copper (PB632-K-CIS); 6" (1448x1072) E Ink Carta, 300 dpi, сенсорный с подсветкой, ОЗУ 512 МБ, 16 ГБ встроенная, Wi-Fi, 1500 мАч, 161.3 х 108 х 8 мм, 155 г, медный',
      price: 5699,
      old_price: 5699,
      id: 163408050,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/252822749.png',
        'https://content.rozetka.com.ua/goods/images/original/252822751.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252822753.jpg',
      ],
      title:
        'Электронная книга Pocketbook 616 Basic Lux 2 Obsidian Black (PB616-H-CIS) [38945]',
      price: 4244,
      old_price: 0,
      id: 235817605,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/238201553.jpg',
      ],
      title: 'Электронная книга Amazon Kindle 10th Gen 8Gb Black',
      price: 3399,
      old_price: 3499,
      id: 95093955,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/166747429.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166747430.jpg',
        'https://content.rozetka.com.ua/goods/images/original/166747431.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/166747432.jpg',
      ],
      title: 'Электронная книга ONYX BOOX BOOX Kon-Tiki 2',
      price: 15500,
      old_price: 0,
      id: 278896213,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/13369924.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/13369931.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/13369937.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/13369941.jpg',
      ],
      title: 'Электронная книга EVROMEDIA Cambridge',
      price: 2808,
      old_price: 0,
      id: 68929347,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/268305466.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268305468.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268305471.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268305475.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268305483.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268305488.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268305495.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268305503.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268305510.jpg',
      ],
      title: 'Электронная книга AirBook Universe',
      price: 14000,
      old_price: 16999,
      id: 342895633,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/245388462.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245388475.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/245388483.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245388496.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245388503.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245388513.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/245388523.jpg',
      ],
      title:
        'Электронная книга Amazon Kindle All-new Paperwhite 11th Gen. 8GB (2021) Black *online - с возможностью регистрации на Amazon',
      price: 6649,
      old_price: 0,
      id: 331321924,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/190512652.jpg',
      ],
      title:
        'Электронная книга Amazon KIndle Paperwhite 6 8GB (10 gen, 2020) Blue',
      price: 5400,
      old_price: 0,
      id: 307201073,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/252754545.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252754561.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252754572.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252754578.jpg',
      ],
      title:
        'Электронная книга PocketBook 617 Black (PB617-P-CIS); 6" (1024х758) E-Ink Carta, 212 dpi, с подсветкой, ОЗУ 512 МБ, 8 ГБ встроенная + microSD до 32 ГБ, Wi-Fi, 1300 мАч, 161.3 х 108 х 8 мм, 155 г, черный',
      price: 3999,
      old_price: 3999,
      id: 335135926,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/273838184.jpg',
        'https://content.rozetka.com.ua/goods/images/original/273838194.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/273838202.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273838214.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273838219.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/273838223.jpg',
      ],
      title:
        'Электронная книга Amazon Kindle All-new (10th Gen) 6" Wi-Fi 8GB Black с подсветкой (KNDL-10G-8GB)',
      price: 2999,
      old_price: 3499,
      id: 345880741,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/269995545.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995561.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269995578.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995590.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995605.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995618.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995631.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995648.jpg',
      ],
      title: 'Электронная книга PocketBook 617 Ink Black (PB617-P-CIS) [68129]',
      price: 4244,
      old_price: 0,
      id: 343877617,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/273838164.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273838173.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273838187.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/273838196.jpg',
        'https://content.rozetka.com.ua/goods/images/original/273838205.jpg',
      ],
      title:
        'Электронная книга Amazon Kindle All-new (10th Gen) 6" Wi-Fi 8GB White с подсветкой (KNDL-10G-8GB)',
      price: 2999,
      old_price: 3499,
      id: 345880744,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/254527305.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254527306.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254527307.jpg',
      ],
      title: 'Электронная книга Amazon Kindle Paperwhite 11th Gen. 8GB Black',
      price: 6349,
      old_price: 0,
      id: 336117655,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/217114035.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/217114042.jpg',
        'https://content.rozetka.com.ua/goods/images/original/217114050.jpg',
        'https://content.rozetka.com.ua/goods/images/original/217114057.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/217114060.jpg',
      ],
      title: 'Электронная книга PocketBook 628 Ink Black (PB628-P-CIS)',
      price: 4286,
      old_price: 0,
      id: 316530574,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/8981684.jpg',
        'https://content.rozetka.com.ua/goods/images/original/8981687.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/8981689.jpg',
        'https://content.rozetka.com.ua/goods/images/original/8981693.jpg',
      ],
      title: 'Электронная книга Amazon Kindle Oasis 10th Gen 8Gb Graphite',
      price: 8999,
      old_price: 9999,
      id: 174926522,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/241252889.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/241252896.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/241252900.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/241252906.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/241252913.jpg',
        'https://content.rozetka.com.ua/goods/images/original/241252919.jpg',
      ],
      title:
        'Электронная книга Amazon Kindle Oasis 10th Gen. 8 Gb (2019) Graphite',
      price: 9649,
      old_price: 0,
      id: 328990279,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/167480407.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/167480409.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/167480410.jpg',
        'https://content.rozetka.com.ua/goods/images/original/167480411.jpg',
      ],
      title:
        'Электронная книга PocketBook 740 InkPad 3 Dark Brown (PB740-X-RU) [38952]',
      price: 9255,
      old_price: 0,
      id: 239423275,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/183525074.jpg',
        'https://content.rozetka.com.ua/goods/images/original/183525080.jpg',
        'https://content.rozetka.com.ua/goods/images/original/183525085.jpg',
        'https://content.rozetka.com.ua/goods/images/original/183525092.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/183525098.jpg',
      ],
      title: 'Электронная книга ONYX BOOX Lomonosov',
      price: 14700,
      old_price: 0,
      id: 301936483,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/238201554.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238201557.jpg',
      ],
      title: 'Электронная книга Amazon Kindle 6 2016 Black',
      price: 2599,
      old_price: 2499,
      id: 107553528,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/18991900.jpg',
        'https://content.rozetka.com.ua/goods/images/original/18991895.jpg',
      ],
      title: 'Amazon Kindle Oasis (10th Gen) 32GB (Oasis 3) (Online)',
      price: 10499,
      old_price: 10499,
      id: 149436435,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/254247908.jpg',
        'https://content.rozetka.com.ua/goods/images/original/254247921.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254247939.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254247960.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254247979.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254247994.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254248010.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254248027.jpg',
      ],
      title: 'Электронная книга AirBook City LED',
      price: 3999,
      old_price: 4999,
      id: 335974327,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/190512282.jpg',
      ],
      title:
        'Электронная книга Amazon Kindle Oasis 32GB (9 gen, 2019) Graphite',
      price: 9153,
      old_price: 0,
      id: 307200558,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/265355036.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265355053.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265355065.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265355077.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265355087.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265355099.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265355109.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265355120.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265355133.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265355141.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265355150.jpg',
      ],
      title:
        'Электронная книга Pocketbook 1040 InkPad X Metallic Grey (PB1040-J-CIS)',
      price: 13979,
      old_price: 15221,
      id: 341232901,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/269995532.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995541.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995551.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995560.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995570.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269995580.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269995587.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269995594.jpg',
      ],
      title: 'Электронная книга Onyx Boox Max Lumi 2 [68122]',
      price: 39577,
      old_price: 0,
      id: 343877608,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/268240852.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268240859.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268240868.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268240882.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240891.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268240895.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240903.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240914.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268240923.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268240935.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240943.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268240955.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268240964.jpg',
      ],
      title:
        'Электронная книга Pocketbook 1040 InkPad X Metallic Grey (PB1040-J-CIS)',
      price: 15206,
      old_price: 15662,
      id: 341827369,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/265355999.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356005.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265356010.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356016.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356022.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356027.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265356035.jpg',
      ],
      title: 'Электронная книга Pocketbook 970 (PB970-M-CIS)',
      price: 9339,
      old_price: 9888,
      id: 341232832,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/230953705.jpg',
        'https://content.rozetka.com.ua/goods/images/original/230953722.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/230953729.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/230953736.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230953747.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230953758.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230953773.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230953786.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/230953798.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230953811.jpg',
      ],
      title: 'Электронная книга Amazon Kindle Fire 7" 16 Гб',
      price: 6698,
      old_price: 0,
      id: 323390767,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/268976389.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268976398.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268976401.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268976406.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268976408.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268976418.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268976427.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268976435.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268976444.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268976456.jpg',
      ],
      title: 'Электронная книга Onyx Boox Nova Air C',
      price: 18890,
      old_price: 0,
      id: 343248058,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/241499890.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/241499899.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/241499910.jpg',
        'https://content.rozetka.com.ua/goods/images/original/241499917.jpg',
        'https://content.rozetka.com.ua/goods/images/original/241499929.jpg',
        'https://content.rozetka.com.ua/goods/images/original/241499937.jpg',
        'https://content.rozetka.com.ua/goods/images/original/241499948.jpg',
        'https://content.rozetka.com.ua/goods/images/original/241499960.jpg',
      ],
      title: 'Электронная книга Onyx Boox Note Air 2',
      price: 22240,
      old_price: 0,
      id: 329126506,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/252311547.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252311554.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252311566.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252311574.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252311587.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252311595.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252311616.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252311626.jpg',
        'https://content.rozetka.com.ua/goods/images/original/252311643.jpg',
      ],
      title: 'Электронная книга Onyx Boox Max Lumi 2',
      price: 39950,
      old_price: 0,
      id: 334953238,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/249039837.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249039845.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249039859.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249039873.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249039883.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249039893.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249039900.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249039912.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249039928.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249039937.jpg',
      ],
      title:
        'Электронная книга PocketBook 1040 InkPad X Metallic Grey (PB1040-J-CIS)',
      price: 20001,
      old_price: 0,
      id: 333146062,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/13369258.jpg',
        'https://content.rozetka.com.ua/goods/images/original/13369270.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/13369279.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/13369282.jpg',
      ],
      title: 'Электронная книга EVROMEDIA ONE',
      price: 2610,
      old_price: 0,
      id: 68929329,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/93138278.gif',
        'https://content.rozetka.com.ua/goods/images/original/93138286.jpg',
      ],
      title:
        'Электронная книга Amazon Kindle 6 (10 gen, 2019) White (F00189332)',
      price: 4259,
      old_price: 0,
      id: 121507372,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/265356061.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356067.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356072.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356078.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356081.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265356084.jpg',
      ],
      title: 'Электронная книга Pocketbook 606, Black (PB606-E-CIS)',
      price: 3419,
      old_price: 3554,
      id: 341232850,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/272740937.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272740938.jpg',
      ],
      title: 'Электронная книга Amazon KIndle Paperwhite 6 (6 gen, 2014) Black',
      price: 3083,
      old_price: 0,
      id: 339114625,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/20272229.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/20272231.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20272257.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/20272262.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20272299.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/20272305.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/20272309.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20272330.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20272335.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/20272354.jpg',
        'https://content.rozetka.com.ua/goods/images/original/20272366.jpg',
      ],
      title:
        'Электронная книга PocketBook 1040 InkPad X Metallic Grey (PB1040-J-CIS); 10.3" (1872х1404) E Ink Carta, сенсорный с подсветкой, ОЗУ 1 ГБ, 32 ГБ встроенная + microSD до 32 ГБ, Bluetooth, Wi-Fi, 2000 мАч, 249.2 х 173.4 х 7.7 мм, 300 г, серый',
      price: 13699,
      old_price: 0,
      id: 166609906,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/45136380.jpg',
        'https://content.rozetka.com.ua/goods/images/original/45136382.jpg',
        'https://content.rozetka.com.ua/goods/images/original/45136383.jpg',
      ],
      title: 'Электронная книга ONYX BOOX BOOX NOVA 3',
      price: 17500,
      old_price: 0,
      id: 271867071,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/249836270.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249836286.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249836301.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249836314.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249836330.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249836341.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249836353.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/249836366.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249836377.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249836388.jpg',
        'https://content.rozetka.com.ua/goods/images/original/249836401.jpg',
      ],
      title:
        'Электронная книга Pocketbook 628 Touch Lux5 Ruby Red (PB628-R-CIS)',
      price: 4800,
      old_price: 0,
      id: 333570529,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/268241391.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268241394.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268241397.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268241401.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268241405.jpg',
        'https://content.rozetka.com.ua/goods/images/original/268241409.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268241414.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268241422.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/268241428.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268241434.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/268241441.jpg',
      ],
      title:
        'Электронная книга Pocketbook 628 Touch Lux5 Ink Black (PB628-P-CIS)',
      price: 4499,
      old_price: 4813,
      id: 341812978,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/272426089.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272426099.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272426106.jpg',
        'https://content.rozetka.com.ua/goods/images/original/272426111.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/272426117.jpg',
      ],
      title: 'Електронна книга PocketBook 617, Ink Black',
      price: 4599,
      old_price: 4999,
      id: 345168658,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/250891286.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250891296.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250891307.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250891320.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250891334.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250891346.jpg',
      ],
      title: 'Электронная книга Pocketbook 606, Black (PB606-E-CIS)',
      price: 3523,
      old_price: 0,
      id: 334177057,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/181484508.jpg',
      ],
      title: 'Электронная книга PocketBook 740 Pro, Metallic Grey',
      price: 8399,
      old_price: 8999,
      id: 281835883,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/273925867.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/273925872.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273925880.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/273925889.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273925899.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/273925909.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273925917.jpg',
        'https://content.rozetka.com.ua/goods/images/original/273925926.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/273925932.jpg',
      ],
      title: 'Электронная книга Pocketbook 606, White (PB606-D-CIS)',
      price: 3199,
      old_price: 3486,
      id: 341813224,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/269995976.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995982.jpg',
        'https://content.rozetka.com.ua/goods/images/original/269995989.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269996000.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269996008.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/269996018.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269996023.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/269996031.jpg',
      ],
      title:
        'Электронная книга PocketBook 740 Color Moon Silver (PB741-N-CIS) [68348]',
      price: 9466,
      old_price: 0,
      id: 343877671,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/265356122.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356127.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265356132.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356138.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265356142.jpg',
        'https://content.rozetka.com.ua/goods/images/original/265356146.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/265356150.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/265356154.jpg',
      ],
      title: 'Электронная книга Pocketbook 740 Color Moon Silver (PB741-N-CIS)',
      price: 9699,
      old_price: 10332,
      id: 341232889,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/252771239.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/252771253.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252771267.jpg',
      ],
      title: 'Электронная книга PocketBook 970 (PB970-M-CIS) Mist Gray [60995]',
      price: 9199,
      old_price: 0,
      id: 335143996,
    },
  ],
};

const tv = {
  data: [
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/174794113.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174794115.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/174794116.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/174794117.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174794118.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/174794119.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174794120.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/174794121.jpg',
      ],
      title: 'Телевизор Samsung UE43T5300AUXUA',
      price: 12999,
      old_price: 11999,
      id: 206672437,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/254895273.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/254895277.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254895289.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254895293.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/254895297.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/271317873.jpg',
      ],
      title: 'Телевизор Akai UA40LEP1T2',
      price: 6499,
      old_price: 6999,
      id: 122618148,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275436584.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275436585.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275436586.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275436587.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275436588.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275436589.jpg',
      ],
      title: 'Телевизор Samsung UE32N4000AUXUA',
      price: 7299,
      old_price: 6999,
      id: 46830216,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/237042953.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237042955.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237042957.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237042959.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237042973.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237042974.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237042975.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237042978.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237042979.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237042982.jpg',
      ],
      title: 'Телевизор Nokia Smart TV 3200A',
      price: 7999,
      old_price: 8299,
      id: 326655724,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275435628.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435629.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435632.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435633.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435635.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435637.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435639.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435641.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435642.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435643.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435644.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435645.jpg',
      ],
      title: 'Телевизор Samsung UE55AU7100UXUA',
      price: 20999,
      old_price: 19499,
      id: 310629788,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/247647594.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247647588.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247647591.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247647592.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247647589.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247647595.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247647596.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247647597.jpg',
      ],
      title: 'Телевизор Nokia Smart TV 5800A',
      price: 17499,
      old_price: 19999,
      id: 332356741,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/174795638.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/174795639.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/174795640.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174795641.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/174795642.jpg',
      ],
      title: 'Телевизор Samsung UE32N5000AUXUA',
      price: 8199,
      old_price: 7199,
      id: 46798528,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/237057447.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237057448.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057449.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057450.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237057451.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237057452.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237057453.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057454.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057455.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057456.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237057457.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057461.jpg',
      ],
      title: 'Телевизор Philips 48OLED806/12',
      price: 39999,
      old_price: 48999,
      id: 326664469,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/174793941.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174793942.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/174793943.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174793944.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174793945.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174793946.jpg',
        'https://content.rozetka.com.ua/goods/images/original/174793947.jpg',
      ],
      title: 'Телевизор Samsung UE32T4500AUXUA',
      price: 9699,
      old_price: 9199,
      id: 200441875,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/138000464.jpg',
      ],
      title: 'Телевизор Hoffson A40HD300T2',
      price: 6699,
      old_price: 7099,
      id: 231935131,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275434904.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434909.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434916.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434925.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434931.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434940.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434948.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434954.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434959.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434963.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434969.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434974.jpg',
      ],
      title: 'Телевизор Samsung UE43AU7100UXUA',
      price: 15299,
      old_price: 14599,
      id: 297596238,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/190084826.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/190084827.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/190084831.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/190084832.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/190084833.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/190084835.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/190084836.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/190084837.jpg',
        'https://content.rozetka.com.ua/goods/images/original/190084838.jpg',
        'https://content.rozetka.com.ua/goods/images/original/190084840.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/190084841.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/190084842.jpg',
      ],
      title: 'Телевизор Philips 58PUS8506/12',
      price: 26999,
      old_price: 33999,
      id: 306981438,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/240113439.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240113441.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/176695033.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/176695035.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176695036.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240113442.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240113443.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240113447.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240113448.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176695038.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/176695042.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176695046.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176695054.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/176695056.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176695059.jpg',
        'https://content.rozetka.com.ua/goods/images/original/176695069.jpg',
      ],
      title: 'Телевизор Blaupunkt 50UN265',
      price: 14999,
      old_price: 16999,
      id: 259048116,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/275434589.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434619.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434637.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434661.jpg',
      ],
      title: 'Телевизор Samsung UE24N4500AUXUA',
      price: 7999,
      old_price: 7899,
      id: 150341591,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/227875089.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227875117.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227875127.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227875132.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227875137.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227875140.jpg',
      ],
      title: 'Телевизор Akai TV43G21S',
      price: 8780,
      old_price: 8799,
      id: 321807172,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275435419.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435433.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435437.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435446.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435452.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435461.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435471.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435483.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435495.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435504.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435517.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435529.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435536.jpg',
      ],
      title: 'Телевизор Samsung QE55Q60AAUXUA',
      price: 28999,
      old_price: 31999,
      id: 297615813,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/224023783.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/224023784.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/224023785.jpg',
        'https://content.rozetka.com.ua/goods/images/original/224023786.jpg',
        'https://content.rozetka.com.ua/goods/images/original/224023787.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/224023788.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/224023789.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/224023790.jpg',
      ],
      title: 'Телевизор Xiaomi Mi TV P1 55 Black',
      price: 17999,
      old_price: 16499,
      id: 319868209,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/231764022.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231764023.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231764025.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/231764027.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231764029.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231764030.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/231764031.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231764032.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231764033.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231764034.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231764035.jpg',
        'https://content.rozetka.com.ua/goods/images/original/231764036.jpg',
      ],
      title: 'Телевизор Samsung QE43Q60AAUXUA',
      price: 22499,
      old_price: 23999,
      id: 297615568,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/275435225.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435230.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435233.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435237.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435242.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435246.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435253.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435257.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435263.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435268.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435272.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435276.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435280.jpg',
      ],
      title: 'Телевизор Samsung UE55AU8000UXUA',
      price: 23499,
      old_price: 24499,
      id: 297605083,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/237518820.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237518835.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518850.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237518867.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518878.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518885.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518899.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518911.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518925.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518948.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518957.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237518969.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237518979.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237518987.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519001.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519014.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237519028.jpg',
      ],
      title: 'Телевизор LG OLED65C14LB',
      price: 76499,
      old_price: 84999,
      id: 292190978,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/275435404.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435417.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435425.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435430.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435434.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435441.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435450.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435460.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435470.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435477.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435486.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435494.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435507.jpg',
      ],
      title: 'Телевизор Samsung UE43AU9010UXUA',
      price: 19899,
      old_price: 20999,
      id: 297615278,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/275435351.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435352.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435354.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435356.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435358.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435360.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435362.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435364.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435366.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435368.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435370.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435371.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435373.jpg',
      ],
      title: 'Телевизор Samsung UE55AU9000UXUA',
      price: 25199,
      old_price: 28999,
      id: 297615223,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275435411.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435424.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435432.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435439.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435445.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435454.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435464.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435473.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435482.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435492.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435502.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435512.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435526.jpg',
      ],
      title: 'Телевизор Samsung QE50Q60AAUXUA',
      price: 25699,
      old_price: 28999,
      id: 297615798,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/275434917.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434930.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434937.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434945.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434952.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434958.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434965.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434972.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434975.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434982.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434987.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434993.jpg',
      ],
      title: 'Телевизор Samsung UE50AU7100UXUA',
      price: 17999,
      old_price: 16999,
      id: 297597283,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/237519282.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237519291.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237519302.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237519314.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519317.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237519328.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519336.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237519343.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519353.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237519365.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237519374.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519384.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519393.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237519398.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519403.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237519412.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237519420.jpg',
      ],
      title: 'Телевизор LG 50NANO866PA',
      price: 30499,
      old_price: 29999,
      id: 292219368,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/247653944.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247653945.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247653946.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/247653947.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247653948.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/247653949.jpg',
        'https://content.rozetka.com.ua/goods/images/original/247653950.jpg',
      ],
      title: 'Телевизор Nokia Smart TV QLED 4300D',
      price: 16999,
      old_price: 16999,
      id: 332360617,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/263325295.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263325296.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263325297.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263325298.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263325299.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263325300.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263325301.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263325302.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263325303.jpg',
      ],
      title: 'Телевизор Nokia Smart TV 3200B',
      price: 7499,
      old_price: 7499,
      id: 339911968,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/250964653.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250964658.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250964662.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250964666.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250964672.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250964681.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250964687.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250964691.jpg',
      ],
      title: 'Телевизор Samsung UE40T5300AUXUA',
      price: 11999,
      old_price: 10399,
      id: 334222114,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/241215325.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233191058.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233191059.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233191060.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233191061.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233191062.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233191063.jpg',
        'https://content.rozetka.com.ua/goods/images/original/233191064.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233191065.jpg',
        'https://content.rozetka.com.ua/goods/images/original/233191066.jpg',
      ],
      title: 'Телевизор Hisense 55E76GQ',
      price: 19999,
      old_price: 23999,
      id: 324548245,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/240233858.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233861.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233863.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233866.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233867.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233869.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233870.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233871.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233873.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233874.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233875.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233876.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233878.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233880.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233882.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233883.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233886.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233889.jpg',
      ],
      title: 'Телевизор LG 50NANO776PA',
      price: 25499,
      old_price: 25999,
      id: 292219343,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/237059487.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237059488.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237059489.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237059490.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237059491.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237059492.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237059493.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237059494.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237059495.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237059496.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237059497.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237059498.jpg',
      ],
      title: 'Телевизор Philips 65OLED806/12',
      price: 62999,
      old_price: 81499,
      id: 326665204,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/194616170.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194616005.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194616172.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194616171.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194616174.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194616175.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194616173.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194616176.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194616177.jpg',
      ],
      title: 'Телевизор Nokia Smart TV 4300A',
      price: 12999,
      old_price: 12999,
      id: 310334203,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/237057488.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237057491.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057494.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237057497.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057499.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057501.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/237057502.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057505.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237057508.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057512.jpg',
        'https://content.rozetka.com.ua/goods/images/original/237057515.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/237057517.jpg',
      ],
      title: 'Телевизор Philips 55OLED806/12',
      price: 49999,
      old_price: 57799,
      id: 326665078,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/181479242.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/181479250.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/181479255.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/181479263.jpg',
        'https://content.rozetka.com.ua/goods/images/original/181479270.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/181479281.jpg',
        'https://content.rozetka.com.ua/goods/images/original/181479290.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/181479291.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/181479299.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/181479302.jpg',
        'https://content.rozetka.com.ua/goods/images/original/181479310.jpg',
      ],
      title: 'Телевизор Samsung Frame QE32LS03TCUXUA',
      price: 17599,
      old_price: 17999,
      id: 300250038,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/240034249.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189013033.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189013048.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189013059.jpg',
        'https://content.rozetka.com.ua/goods/images/original/189013071.jpg',
        'https://content.rozetka.com.ua/goods/images/original/189013090.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189013100.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189013111.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189013124.jpg',
      ],
      title: 'Телевизор Gazer TV24-HS2G',
      price: 4999,
      old_price: 6899,
      id: 259308966,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/174795972.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/174795973.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/174795974.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/174795975.jpg',
      ],
      title: 'Телевизор Samsung UE32T4510AUXUA',
      price: 9699,
      old_price: 9199,
      id: 200449609,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/275435221.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435228.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435231.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435236.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435238.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435243.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435247.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435250.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435255.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435259.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435264.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435269.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435274.jpg',
      ],
      title: 'Телевизор Samsung UE50AU8000UXUA',
      price: 20499,
      old_price: 22199,
      id: 297605068,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/185166569.jpg',
        'https://content.rozetka.com.ua/goods/images/original/185166581.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185166589.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185166594.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/185166599.jpg',
      ],
      title: 'Телевизор Hitachi 32HAE4250',
      price: 9499,
      old_price: 8999,
      id: 303335603,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/226297814.jpg',
        'https://content.rozetka.com.ua/goods/images/original/226297815.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/226297816.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/226297817.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/226297818.jpg',
        'https://content.rozetka.com.ua/goods/images/original/226297819.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/226297820.jpg',
        'https://content.rozetka.com.ua/goods/images/original/226297821.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/226297822.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/226297823.jpg',
      ],
      title: 'Телевизор Philips 55OLED706/12',
      price: 42999,
      old_price: 48899,
      id: 321176773,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/275434585.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434610.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434626.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434639.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434655.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434671.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434679.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434691.jpg',
      ],
      title: 'Телевизор Samsung UE32T5300AUXUA',
      price: 10999,
      old_price: 9599,
      id: 200449747,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/247639501.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/169806555.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/168593281.jpg',
        'https://content.rozetka.com.ua/goods/images/original/168593284.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/168593285.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/168593287.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/168593291.jpg',
        'https://content.rozetka.com.ua/goods/images/original/168593296.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/168593309.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/168593312.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/168593318.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/168593319.jpg',
        'https://content.rozetka.com.ua/goods/images/original/168593322.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/168593323.jpg',
      ],
      title: 'Телевизор Kivi 32H710KB',
      price: 7799,
      old_price: 7499,
      id: 240618391,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275434979.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434986.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434991.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434998.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435001.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435007.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435012.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435016.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435021.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435022.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435029.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435032.jpg',
      ],
      title: 'Телевизор Samsung UE58AU7100UXUA',
      price: 21499,
      old_price: 19999,
      id: 297597463,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/194616199.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194616209.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194616210.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194616211.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194616212.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194616213.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194616214.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194616215.jpg',
      ],
      title: 'Телевизор Nokia Smart TV 5000A',
      price: 14999,
      old_price: 14999,
      id: 310334213,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/275435586.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435588.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435591.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435593.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435596.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435598.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435600.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435602.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435606.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435607.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435608.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435610.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435612.jpg',
      ],
      title: 'Телевизор Samsung QE65Q80AAUXUA',
      price: 68999,
      old_price: 62999,
      id: 297619068,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/241218192.jpg',
        'https://content.rozetka.com.ua/goods/images/original/233190427.jpg',
        'https://content.rozetka.com.ua/goods/images/original/233190433.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233190436.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233190443.jpg',
        'https://content.rozetka.com.ua/goods/images/original/233190448.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233190454.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233190464.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/233190473.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/233190479.jpg',
      ],
      title: 'Телевизор Hisense 50E76GQ',
      price: 18999,
      old_price: 20999,
      id: 324547975,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/275435164.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435169.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435174.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435181.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435186.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435192.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435198.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435203.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435208.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435212.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435216.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435220.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435224.jpg',
      ],
      title: 'Телевизор Samsung UE43AU8000UXUA',
      price: 18199,
      old_price: 18399,
      id: 297604903,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275435428.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435436.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435442.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435447.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435455.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435465.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435475.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435484.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435496.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435510.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435521.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435531.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435540.jpg',
      ],
      title: 'Телевизор Samsung QE65Q60AAUXUA',
      price: 41999,
      old_price: 41999,
      id: 297615908,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/227078708.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227078709.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227078710.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227078711.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227078712.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227078713.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227078714.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227078715.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227078716.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227078717.jpg',
      ],
      title: 'Телевизор Philips 65OLED706/12',
      price: 56999,
      old_price: 65599,
      id: 321521941,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/275435234.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435240.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435248.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435254.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435260.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435266.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435275.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435279.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435284.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435288.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435291.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435293.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435296.jpg',
      ],
      title: 'Телевизор Samsung UE65AU8000UXUA',
      price: 34199,
      old_price: 32499,
      id: 297605098,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/226283250.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/226283251.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/226283252.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/226283253.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/226283254.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/226283255.jpg',
      ],
      title: 'Телевизор Philips 32PFS6906/12',
      price: 10999,
      old_price: 11999,
      id: 321167143,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/275434594.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434623.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434658.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434684.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434707.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434716.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434721.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275434724.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434731.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275434735.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275434747.jpg',
      ],
      title: 'Телевизор Samsung QE50QN90AAUXUA',
      price: 51999,
      old_price: 47999,
      id: 291592908,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/275327091.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/252306184.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227961265.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227961188.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227961168.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227961216.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227961252.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227959999.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227961273.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227960006.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227961148.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227961205.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/227961238.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/228237755.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228237756.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/228237757.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227978425.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227978426.jpg',
        'https://content.rozetka.com.ua/goods/images/original/227978427.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/227978428.jpg',
      ],
      title: 'Телевизор Kivi 43U740LB',
      price: 13999,
      old_price: 13499,
      id: 321836566,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/184583756.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583769.jpg',
        'https://content.rozetka.com.ua/goods/images/original/184583779.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583784.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/184583792.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583797.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/184583801.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/184583807.jpg',
        'https://content.rozetka.com.ua/goods/images/original/184583815.jpg',
        'https://content.rozetka.com.ua/goods/images/original/184583821.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583831.jpg',
      ],
      title: 'Телевизор Sony KD55X81JR',
      price: 28999,
      old_price: 33999,
      id: 302861298,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/210032358.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/210032362.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/210032364.jpg',
        'https://content.rozetka.com.ua/goods/images/original/210032366.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/210032369.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/210032370.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/210032378.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/210032379.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/210032380.jpg',
      ],
      title: 'Телевизор Philips 50PUS7506/12',
      price: 14999,
      old_price: 17799,
      id: 314979412,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/240233708.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233709.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233710.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233711.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233713.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233714.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233716.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233718.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233721.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233724.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233727.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233730.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240233734.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233740.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233746.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240233753.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240233757.jpg',
      ],
      title: 'Телевизор LG OLED48C14LB',
      price: 42999,
      old_price: 47999,
      id: 292190853,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/184583237.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/184583252.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583261.jpg',
        'https://content.rozetka.com.ua/goods/images/original/184583269.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583275.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/209056407.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/209056408.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583295.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/184583302.jpg',
      ],
      title: 'Телевизор Sony KD43X81JR',
      price: 22499,
      old_price: 24999,
      id: 302860458,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/178629976.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178629977.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178629978.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178629979.jpg',
        'https://content.rozetka.com.ua/goods/images/original/178629980.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178629981.jpg',
        'https://content.rozetka.com.ua/goods/images/original/178629982.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178629983.jpg',
        'https://content.rozetka.com.ua/goods/images/original/178629984.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178629985.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178629986.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178629987.jpg',
        'https://content.rozetka.com.ua/goods/images/original/178629988.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178629989.jpg',
        'https://content.rozetka.com.ua/goods/images/original/178629990.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178629991.jpg',
      ],
      title: 'Телевизор Samsung QE50LS03AAUXUA',
      price: 35999,
      old_price: 38999,
      id: 297615353,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/275435474.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435487.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435497.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435506.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435515.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435528.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435534.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435541.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435547.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435551.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/275435556.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/275435557.jpg',
        'https://content.rozetka.com.ua/goods/images/original/275435564.jpg',
      ],
      title: 'Телевизор Samsung QE65Q70AAUXUA',
      price: 52499,
      old_price: 49999,
      id: 297618733,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/34113434.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/34113469.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/34113508.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/34113555.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/34113532.jpg',
      ],
      title: 'Телевизор Akai UA55P19UHDS9',
      price: 14299,
      old_price: 13999,
      id: 254007601,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/240234531.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240234534.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240234536.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240234539.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240234541.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240234542.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240234544.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240234545.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240234547.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240234549.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/240234551.jpg',
      ],
      title: 'Телевизор LG 43UP81006LA',
      price: 18999,
      old_price: 17999,
      id: 292230848,
    },
  ],
};

const headset = {
  data: [
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/188529538.jpg',
        'https://content.rozetka.com.ua/goods/images/original/187002185.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/187002216.jpg',
        'https://content.rozetka.com.ua/goods/images/original/187002224.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/187002237.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/187002248.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/187002262.jpg',
        'https://content.rozetka.com.ua/goods/images/original/187002282.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/177845670.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/177845671.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/177845672.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/177845673.jpg',
        'https://i8.rozetka.ua/goods/22934210/defunc_d4271m_images_22934210458.jpg',
        'https://i8.rozetka.ua/goods/22934214/defunc_d4271m_images_22934214453.jpg',
        'https://i2.rozetka.ua/goods/22934217/defunc_d4271m_images_22934217653.jpg',
        'https://i8.rozetka.ua/goods/22934250/defunc_d4271m_images_22934250983.jpg',
        'https://i8.rozetka.ua/goods/22934251/defunc_d4271m_images_22934251478.jpg',
        'https://i2.rozetka.ua/goods/22934252/defunc_d4271m_images_22934252098.jpg',
      ],
      title: 'Наушники Defunc True Music TWS Black (D4271M)',
      price: 899,
      old_price: 1199,
      id: 296932928,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/21730527.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164662032.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164662042.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164662045.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/164662056.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/164662058.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164662062.jpg',
        'https://content.rozetka.com.ua/goods/images/original/164662063.png',
        'https://content.rozetka.com.ua/goods/images/original/164662064.jpg',
      ],
      title: 'Наушники Hator Hypergang EVO Black HTA-810',
      price: 1599,
      old_price: 1399,
      id: 183602735,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/228389498.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/228389499.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228389500.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228389501.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228389502.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/228389503.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/228389504.jpg',
        'https://content.rozetka.com.ua/goods/images/original/228389505.jpg',
      ],
      title: 'Наушники Razer Opus X Green (RZ04-03760400-R3M1)',
      price: 1999,
      old_price: 2999,
      id: 322048330,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/194722220.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194722211.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194722212.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194722213.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194722214.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194722222.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194722223.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194722224.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194722225.jpg',
      ],
      title: 'Наушники Razer Barracuda X (RZ04-03800100-R3M1)',
      price: 2499,
      old_price: 3599,
      id: 310443573,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/202640004.jpg',
        'https://content.rozetka.com.ua/goods/images/original/202640006.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/202640007.jpg',
        'https://content.rozetka.com.ua/goods/images/original/202640008.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/202640009.jpg',
        'https://content.rozetka.com.ua/goods/images/original/202640010.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/202640011.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/202640012.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/202640013.jpg',
      ],
      title: 'Наушники Samsung Galaxy Buds2 Black (SM-R177NZKASEK)',
      price: 4499,
      old_price: 3999,
      id: 313489399,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/229708418.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/229708419.jpg',
        'https://content.rozetka.com.ua/goods/images/original/229708420.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/229708421.jpg',
      ],
      title:
        'Наушники Apple AirPods with Wireless Charging Case 2021 (3-е поколение) (MME73TY/A)',
      price: 7999,
      old_price: 7699,
      id: 322711225,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/18386781.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18386798.jpg',
        'https://content.rozetka.com.ua/goods/images/original/18386808.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/18386820.jpg',
        'https://content.rozetka.com.ua/goods/images/original/18386832.jpg',
        'https://content.rozetka.com.ua/goods/images/original/18386839.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/195477130.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/195477131.jpg',
      ],
      title:
        'Наушники Razer Kraken X Lite Multiplatform Black (RZ04-02950100-R381)',
      price: 1299,
      old_price: 1299,
      id: 139535566,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/251111930.jpg',
        'https://content.rozetka.com.ua/goods/images/original/251111931.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251111932.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/251111934.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251111935.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251111936.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251111939.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/251111940.jpg',
      ],
      title: 'Наушники Motorola MOTO ХТ500+ Black (XT500-B)',
      price: 1699,
      old_price: 0,
      id: 333513955,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/238513449.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238513451.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238513453.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238513454.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238513455.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238513457.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238513458.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238513460.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238513461.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238513462.jpg',
      ],
      title: 'Наушники Motorola Moto Buds 100 Black TWS (BUDS100-B)',
      price: 1199,
      old_price: 1299,
      id: 327489217,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/189687065.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/196645140.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189687066.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189687067.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189687068.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/189687069.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189687070.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/189687071.jpg',
      ],
      title: 'Наушники SteelSeries Arctis Prime (SS61487)',
      price: 4999,
      old_price: 4999,
      id: 306732608,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/244839817.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244839892.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/244839961.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/244840004.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/244840070.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244840214.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244840419.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/244840421.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/244840422.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/244840423.jpg',
      ],
      title: 'Наушники Nokia Micro Earbuds Pro TWS-521 Black',
      price: 1599,
      old_price: 1999,
      id: 331032049,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/199381283.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/199381304.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/199381344.jpg',
        'https://content.rozetka.com.ua/goods/images/original/199381358.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/199381379.jpg',
      ],
      title: 'Наушники Razer Kraken X Mercury (RZ04-02890300-R3M1)',
      price: 1799,
      old_price: 1799,
      id: 313076080,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/49618400.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/49618413.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/49618478.jpg',
        'https://content.rozetka.com.ua/goods/images/original/49618645.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/49618654.jpg',
      ],
      title:
        'Наушники SPEEDLINK Legatos Stereo Gaming Headset Black (SL-860000-BK)',
      price: 299,
      old_price: 449,
      id: 9934005,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/236660463.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236660466.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236660468.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236660470.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236660472.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236660475.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/236660477.jpg',
        'https://content.rozetka.com.ua/goods/images/original/236660478.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/236660480.jpg',
      ],
      title: 'Наушники Nokia Go Earbuds+ TWS-201 Black (8Р00000142)',
      price: 999,
      old_price: 1199,
      id: 321110092,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/194996514.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194996515.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194996516.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194996517.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194996518.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194996519.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194996520.jpg',
        'https://content.rozetka.com.ua/goods/images/original/194996521.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194996522.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194996523.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194996524.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/194996525.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/194996526.jpg',
      ],
      title: 'Наушники Huawei FreeBuds 4i Silver Frost (55034697)',
      price: 2499,
      old_price: 2199,
      id: 310571148,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/229903443.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/229903445.jpg',
        'https://content.rozetka.com.ua/goods/images/original/229903446.jpg',
        'https://content.rozetka.com.ua/goods/images/original/229903447.jpg',
        'https://content.rozetka.com.ua/goods/images/original/229903448.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/229903450.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/229903451.jpg',
      ],
      title:
        'Наушники Acme BH317 Wireless over-ear headphones Black (4770070882160)',
      price: 999,
      old_price: 999,
      id: 322831858,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/263200517.png',
        'https://content.rozetka.com.ua/goods/images/original/230281633.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263200518.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263200519.png',
        'https://content.rozetka.com.ua/goods/images/original/237173292.png',
        'https://content2.rozetka.com.ua/goods/images/original/230281636.jpg',
        'https://content.rozetka.com.ua/goods/images/original/230281637.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263200520.jpg',
      ],
      title: 'Наушники RZTK HPR 300 USB 7.1 RGB',
      price: 849,
      old_price: 1199,
      id: 315293860,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/178060227.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178060229.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178060239.png',
        'https://content1.rozetka.com.ua/goods/images/original/178060242.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/178060231.jpg',
        'https://content.rozetka.com.ua/goods/images/original/178060233.jpg',
        'https://content.rozetka.com.ua/goods/images/original/178060234.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178060235.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178060236.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/178060237.jpg',
      ],
      title: 'Наушники Defunc True Go Slim TWS Blue (D4214)',
      price: 1199,
      old_price: 1499,
      id: 267878356,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/263188895.jpg',
        'https://content.rozetka.com.ua/goods/images/original/230280773.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263188896.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/231769756.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/230280785.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230280818.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230280833.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263188897.jpg',
      ],
      title: 'Наушники RZTK HPR 200 USB 7.1 Light',
      price: 699,
      old_price: 1045,
      id: 315293854,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/28606651.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28606633.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28606670.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/28606532.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28606575.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/28606594.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/28606617.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/28606699.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28606719.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28606736.jpg',
      ],
      title: 'Наушники Samsung Galaxy Buds Live Bronze (SM-R180NZNASEK)',
      price: 4499,
      old_price: 3999,
      id: 238811347,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/223501626.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/223501622.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223501623.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223501624.jpg',
        'https://content.rozetka.com.ua/goods/images/original/223501625.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223501618.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/223501620.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223501627.jpg',
        'https://content.rozetka.com.ua/goods/images/original/223502916.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223501612.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223502917.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/223502918.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/223502919.jpg',
        'https://content.rozetka.com.ua/goods/images/original/223502921.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/223502920.jpg',
      ],
      title: 'Наушники OPPO Enco Buds W12 White (OFETI81_WHITE)',
      price: 1555,
      old_price: 0,
      id: 319607278,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/17174829.jpg',
        'https://content.rozetka.com.ua/goods/images/original/17174849.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17174864.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17174886.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17174900.jpg',
      ],
      title: 'Наушники Panasonic RP-HJE119EEK Black',
      price: 299,
      old_price: 259,
      id: 122360970,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/263186362.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230279516.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263186427.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263186496.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/263186551.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/230279676.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230279679.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263186596.jpg',
      ],
      title: 'Наушники RZTK HP 101 USB 7.1 Blue',
      price: 549,
      old_price: 765,
      id: 315293701,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/195412556.jpg',
        'https://content.rozetka.com.ua/goods/images/original/195412557.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/196624690.jpg',
        'https://content.rozetka.com.ua/goods/images/original/195412558.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/196624689.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/195412559.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/196624692.jpg',
        'https://content.rozetka.com.ua/goods/images/original/196624693.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/195412560.jpg',
        'https://content.rozetka.com.ua/goods/images/original/196624691.jpg',
      ],
      title:
        'Наушники RAZER Hammerhead True Wireless X Black (RZ12-03830100-R3G1)',
      price: 1999,
      old_price: 2799,
      id: 311145763,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/238059237.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059242.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059247.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059253.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059259.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059264.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059270.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059279.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059291.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059305.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059314.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059322.jpg',
      ],
      title: 'Наушники JBL Wave 100 TWS Ivory (JBLW100TWSIVR)',
      price: 1399,
      old_price: 1199,
      id: 327143089,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/11339501.png',
        'https://content2.rozetka.com.ua/goods/images/original/11339509.png',
        'https://content1.rozetka.com.ua/goods/images/original/11339514.png',
        'https://content.rozetka.com.ua/goods/images/original/11339516.png',
        'https://content1.rozetka.com.ua/goods/images/original/11339520.png',
        'https://content2.rozetka.com.ua/goods/images/original/11339525.png',
        'https://content2.rozetka.com.ua/goods/images/original/11339539.png',
        'https://content2.rozetka.com.ua/goods/images/original/11339556.png',
        'https://content.rozetka.com.ua/goods/images/original/11339563.png',
        'https://content2.rozetka.com.ua/goods/images/original/11339569.png',
      ],
      title: 'Наушники Acme BH203 Bluetooth Headset (4770070879436)',
      price: 569,
      old_price: 699,
      id: 25658825,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/17497439.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17497388.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17497398.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17497424.jpg',
      ],
      title: 'Наушники Edifier G2 II 7.1 USB Black',
      price: 1299,
      old_price: 1099,
      id: 127590614,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/117362508.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/117362286.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/117362318.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/117362330.jpg',
        'https://content.rozetka.com.ua/goods/images/original/117362348.jpg',
        'https://content.rozetka.com.ua/goods/images/original/117362364.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/117362386.jpg',
        'https://content.rozetka.com.ua/goods/images/original/117362433.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/117362454.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/117362531.jpg',
        'https://content.rozetka.com.ua/goods/images/original/117362538.jpg',
      ],
      title:
        'Наушники Acme BH420W True wireless inear headphones (4770070881248)',
      price: 699,
      old_price: 1299,
      id: 186096569,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/263201157.png',
        'https://content2.rozetka.com.ua/goods/images/original/230281880.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263201158.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263201159.png',
        'https://content2.rozetka.com.ua/goods/images/original/230281882.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/230281883.jpg',
        'https://content.rozetka.com.ua/goods/images/original/263201160.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/230281885.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/263201161.jpg',
      ],
      title: 'Наушники RZTK HPB 300 RGB',
      price: 799,
      old_price: 1095,
      id: 315294028,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/19908878.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/19908890.jpg',
        'https://content.rozetka.com.ua/goods/images/original/19908897.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/19908906.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/19908915.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/19908924.jpg',
        'https://content.rozetka.com.ua/goods/images/original/19908933.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/19908936.jpg',
      ],
      title: 'Наушники Real-El GDX-7800 Black-Red 7.1 Virtual (EL124100027)',
      price: 699,
      old_price: 799,
      id: 161878585,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/27403080.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/27403110.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/27403136.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/27403199.jpg',
        'https://content.rozetka.com.ua/goods/images/original/27403229.jpg',
        'https://content.rozetka.com.ua/goods/images/original/27403286.jpg',
      ],
      title: 'Наушники Aula Hex 7.1 Black (6948391235080)',
      price: 799,
      old_price: 999,
      id: 233383387,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/11364116.jpg',
        'https://content.rozetka.com.ua/goods/images/original/11364117.jpg',
        'https://content.rozetka.com.ua/goods/images/original/11364118.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/11364119.jpg',
      ],
      title: 'Наушники Trust Ziva Gaming Headset Black-Red (TR21953)',
      price: 449,
      old_price: 449,
      id: 26246761,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/10843612.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/10843623.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10843628.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10843631.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/10843633.jpg',
      ],
      title: 'Наушники Sven AP-U988MV Black-Red (AP-U988MV black-red)',
      price: 999,
      old_price: 1049,
      id: 13094921,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/12893767.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/12893786.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/12893799.jpg',
        'https://content.rozetka.com.ua/goods/images/original/12893807.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/12893820.jpg',
      ],
      title: 'Наушники SteelSeries Arctis 5 2019 Edition Black (SS61504)',
      price: 4999,
      old_price: 0,
      id: 58438623,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/10597009.jpg',
      ],
      title: 'Наушники Sennheiser PC 3 Chat (504195)',
      price: 809,
      old_price: 849,
      id: 189062,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/11178277.jpg',
        'https://content.rozetka.com.ua/goods/images/original/11178281.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/11178295.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/11178297.jpg',
      ],
      title:
        'Наушники Real-El GDX-7700 Surround 7.1 Black-orange (EL124100016)',
      price: 799,
      old_price: 749,
      id: 22320173,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/50615244.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/50615272.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/50615295.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/50615325.jpg',
        'https://content.rozetka.com.ua/goods/images/original/50615336.jpg',
      ],
      title: 'Наушники 1More Piston Fit Pink',
      price: 229,
      old_price: 0,
      id: 12827558,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/253726314.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253726315.jpg',
        'https://content.rozetka.com.ua/goods/images/original/253726313.jpg',
      ],
      title: 'Наушники Sony WF-C500G Coral/Orange (WFC500D.CE7)',
      price: 2299,
      old_price: 2799,
      id: 335691736,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/11570374.png',
        'https://content1.rozetka.com.ua/goods/images/original/11570377.png',
        'https://content.rozetka.com.ua/goods/images/original/11570380.png',
        'https://content2.rozetka.com.ua/goods/images/original/11570385.png',
        'https://content2.rozetka.com.ua/goods/images/original/11570389.png',
        'https://content2.rozetka.com.ua/goods/images/original/11570394.png',
      ],
      title:
        'Наушники Aula Prime Basic Gaming Headset Black-Blue (6948391232768)',
      price: 449,
      old_price: 599,
      id: 31447615,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/28729353.jpg',
        'https://content.rozetka.com.ua/goods/images/original/28729376.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/28729395.jpg',
        'https://content.rozetka.com.ua/goods/images/original/28729420.jpg',
        'https://content.rozetka.com.ua/goods/images/original/28729459.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28729486.jpg',
        'https://content.rozetka.com.ua/goods/images/original/28729524.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28729550.jpg',
      ],
      title:
        'Наушники HyperX Cloud Core + 7.1 Black (HX-HSCC-2-BK/WW / 4P4F2AA)',
      price: 2799,
      old_price: 0,
      id: 239107423,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/14270995.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/14271004.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/14271018.jpg',
        'https://content.rozetka.com.ua/goods/images/original/14271024.jpg',
      ],
      title:
        'Наушники Apple AirPods with Charging Case (MV7N2) (2-е поколение)',
      price: 5599,
      old_price: 5299,
      id: 82833459,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/238059238.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059246.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059251.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059257.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059262.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059268.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059276.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059286.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059294.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059302.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059313.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059320.jpg',
      ],
      title: 'Наушники JBL Tune 230 NC TWS Sand (JBLT230NCTWSSAN)',
      price: 2599,
      old_price: 0,
      id: 327142957,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/23990707.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/23990722.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23990728.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23990737.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23990744.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23990751.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23990759.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23990768.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/23990777.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/23990786.jpg',
        'https://content.rozetka.com.ua/goods/images/original/23990794.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/23990811.jpg',
      ],
      title:
        'Наушники HyperX Cloud Stinger Core PC Black (HX-HSCSC2-BK/WW / 4P4F4AA)',
      price: 1299,
      old_price: 1299,
      id: 207566437,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/250714854.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250714949.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250714948.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250714930.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250714920.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250714887.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250714891.jpg',
        'https://content.rozetka.com.ua/goods/images/original/250714901.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250714879.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250714869.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/250714863.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/250714865.jpg',
      ],
      title: 'Наушники Xiaomi Redmi Buds 3 Lite Black (BHR5489GL)',
      price: 699,
      old_price: 899,
      id: 334118530,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/10603912.jpg',
      ],
      title: 'Наушники Apple iPhone EarPods with Mic (MNHF2ZM/A)',
      price: 699,
      old_price: 899,
      id: 263987,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/230842936.jpg',
        'https://content.rozetka.com.ua/goods/images/original/230842945.jpg',
        'https://content.rozetka.com.ua/goods/images/original/230842954.jpg',
        'https://content.rozetka.com.ua/goods/images/original/230842961.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/230842971.jpg',
      ],
      title: 'Наушники AirPods Pro with MagSafe Charging Case 2021 (MLWK3TY/A)',
      price: 8999,
      old_price: 8299,
      id: 323325187,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/238059278.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059288.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059297.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059306.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059316.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059325.jpg',
        'https://content.rozetka.com.ua/goods/images/original/238059332.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/238059339.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/238059344.jpg',
      ],
      title: 'Наушники JBL Wave 200 TWS White (JBLW200TWSWHT)',
      price: 1599,
      old_price: 0,
      id: 327143338,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/10813688.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/10813669.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10813676.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10813681.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/10813682.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10813686.jpg',
      ],
      title: 'Наушники Apple iPhone EarPods with Mic Lightning (MMTN2ZM/A)',
      price: 899,
      old_price: 799,
      id: 12146555,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/10639589.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/10639601.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10639609.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/10639626.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/10639632.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10639641.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10639658.jpg',
        'https://content.rozetka.com.ua/goods/images/original/10639648.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/10639651.jpg',
      ],
      title: 'Наушники HyperX Cloud II (KHX-HSCP-GM / 4P5L9AA) Gun Metal',
      price: 3699,
      old_price: 3399,
      id: 2174177,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/28568492.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28568508.jpg',
        'https://content.rozetka.com.ua/goods/images/original/28568532.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/28568562.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/28568585.jpg',
        'https://content.rozetka.com.ua/goods/images/original/28568610.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/28568676.jpg',
      ],
      title: 'Наушники Razer Blackshark V2 Black (RZ04-03230100-R3M1)',
      price: 3499,
      old_price: 3499,
      id: 238743007,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/10605623.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/10605619.jpg',
      ],
      title: 'Наушники Panasonic RP-HJE125E-K Black',
      price: 329,
      old_price: 279,
      id: 276424,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/193559116.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/193559117.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/193559118.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/193559119.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/193559120.jpg',
      ],
      title: 'Наушники Sennheiser CX TRUE WIRELESS Black (508973)',
      price: 3599,
      old_price: 4389,
      id: 309413638,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/17380509.jpg',
        'https://content.rozetka.com.ua/goods/images/original/17380556.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17380603.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17380618.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17380633.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17380517.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17380532.jpg',
      ],
      title: 'Наушники Sony WH-CH510 Black (WHCH510B.CE7)',
      price: 1299,
      old_price: 1299,
      id: 125701656,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/50152848.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/50152857.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/50152867.jpg',
        'https://content.rozetka.com.ua/goods/images/original/50152872.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/50152878.jpg',
        'https://content.rozetka.com.ua/goods/images/original/50152883.jpg',
        'https://content.rozetka.com.ua/goods/images/original/50152888.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/50152894.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/50152898.jpg',
      ],
      title: 'Наушники HyperX Cloud Stinger (HX-HSCS-BK/EE / 4P5L7AX)',
      price: 2099,
      old_price: 0,
      id: 11689745,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/248056973.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/249336164.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/248056974.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248056975.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248056976.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/248056977.jpg',
        'https://content.rozetka.com.ua/goods/images/original/248056978.jpg',
      ],
      title: 'Наушники Hator Hypergang EVO Elite Black (HTA-830)',
      price: 1799,
      old_price: 1799,
      id: 332670214,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/240337886.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240337887.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240337888.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240337889.jpg',
        'https://content.rozetka.com.ua/goods/images/original/240337890.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240337891.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/240337892.jpg',
      ],
      title: 'Комплект геймерский HyperX Streamer Starter Pack (HBNDL0001)',
      price: 3599,
      old_price: 4399,
      id: 328476967,
    },
    {
      images: [
        'https://content2.rozetka.com.ua/goods/images/original/11391180.jpg',
        'https://content.rozetka.com.ua/goods/images/original/11391194.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/11391208.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/11391216.jpg',
      ],
      title: 'Наушники Jabra Evolve 20 MS Stereo (4999-823-109)',
      price: 1649,
      old_price: 1749,
      id: 27268081,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/13776875.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/13776909.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/13776846.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/13776863.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/13776855.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/13776900.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/13776885.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/13776895.jpg',
      ],
      title: 'Наушники HyperX Cloud MIX (HX-HSCAM-GM)',
      price: 6999,
      old_price: 6199,
      id: 75600090,
    },
    {
      images: [
        'https://content1.rozetka.com.ua/goods/images/original/97626566.jpg',
        'https://content.rozetka.com.ua/goods/images/original/97626607.jpg',
        'https://content.rozetka.com.ua/goods/images/original/97626617.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/97626618.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/97626579.jpg',
        'https://content.rozetka.com.ua/goods/images/original/97626580.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/97626598.jpg',
        'https://content.rozetka.com.ua/goods/images/original/97626604.jpg',
        'https://content.rozetka.com.ua/goods/images/original/97626616.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/97626564.jpg',
      ],
      title: 'Наушники SteelSeries Arctis 1 Wireless (SS61512)',
      price: 4999,
      old_price: 4699,
      id: 132640183,
    },
    {
      images: [
        'https://content.rozetka.com.ua/goods/images/original/17251174.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17251200.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17251216.jpg',
        'https://content.rozetka.com.ua/goods/images/original/17251230.jpg',
        'https://content.rozetka.com.ua/goods/images/original/17251250.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17251266.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17251280.jpg',
        'https://content1.rozetka.com.ua/goods/images/original/17251303.jpg',
        'https://content2.rozetka.com.ua/goods/images/original/17251352.jpg',
      ],
      title: 'Наушники HyperX Cloud Alpha S (HX-HSCAS-BL/WW / 4P5L3AA)',
      price: 4599,
      old_price: 4099,
      id: 123387127,
    },
  ],
};

export interface IProductCardListItem {
  imageCollection: string[];
  available: boolean;
  novelty: boolean;
  model: string;
  name: string;
  specifications: {
    main: {
      icon: string | JSX.Element;
      description: string;
      value: string;
    }[];
    detailed: {
      title: string;
      value: string[];
    }[];
    article: {
      title: string;
      content: string;
      subcontent: string;
      photo: string[];
    }[];
    colors: {
      color: string;
      colorName: string;
    }[];
    ram: number[];
    memorySize: string[];
    corps: string[];
  };
  category: {
    mainImage: string;
    coupled: number[];
    name: string;
    top: boolean;
    id: number;
  };
  oldprice: number;
  leader: boolean;
  price: number;
  id: number;
  brand: {
    country: string;
    name: string;
    logo: string;
    id: number;
  };
}
export const getData: () => IProductCardListItem[] = () => {
  let data: IProductCardListItem[] = [];

  let source1 = source.data;
  source1.forEach((item, index) => {
    let good: IProductCardListItem = {
      imageCollection: [],
      available: true,
      novelty: false,
      model: '',
      name: '',
      specifications: {
        main: [],
        detailed: [],
        article: [],
        colors: [],
        ram: [],
        memorySize: [],
        corps: [],
      },
      category: {
        mainImage: '',
        coupled: [],
        name: '',
        top: false,
        id: 0,
      },
      oldprice: 0,
      leader: false,
      price: 0,
      id: 0,
      brand: {
        country: '',
        name: '',
        logo: '',
        id: 0,
      },
    };
    // images
    if (item.images) {
      good.imageCollection = item.images;
    }
    // available
    if (index % 9 === 0) {
      good.available = false;
    } else {
      good.available = true;
    }
    // novelty
    if (index % 4 === 0) {
      good.novelty = true;
    } else {
      good.novelty = false;
    }

    // model
    good.model = `Model ${index} HSFG`;
    // title
    if (item.title) {
      good.name = item.title;
    }
    // specifications
    good.specifications.main.push({
      icon: <ExtendedProductCardSvgSelector id='batery' />,
      description: 'Сумісність',
      value: 'Универсальний',
    });
    good.specifications.main.push({
      icon: <ExtendedProductCardSvgSelector id='cpu' />,
      description: 'Кількість USB-портів',
      value: '1',
    });
    good.specifications.main.push({
      icon: <ExtendedProductCardSvgSelector id='screen' />,
      description: 'Швидка зарядка',
      value: 'Quick Charge 3.0',
    });
    // detailed
    // article
    const articles = [
      'USB-C Power Delivery конектор: Блискавична швидкість заряджання смартфона, планшета або повербанка на потужності до 33 Вт.',
      'USB-C Power Delivery конектор: Блискавична швидкість заряджання смартфона, планшета або повербанка на потужності до 33 Вт.',
      'Ідеальне рішення для швидкої та ефективної зарядки твоїх пристроїв у машині. А вбудований спіральний кабель оптимізує простір в авто та позбавить необхідності купівлі додаткового дроту.',
      'USB-C Power Delivery конектор: Блискавична швидкість заряджання смартфона, планшета або повербанка на потужності до 33 Вт.',
    ];
    articles.forEach((article, index) => {
      if (good.imageCollection[index]) {
        good.specifications.article.push({
          title: 'USB-C Power Delivery конектор',
          content: article,
          subcontent: '',
          photo: [good.imageCollection[index]],
        });
      } else {
        let pIndex = Math.floor(index % good.imageCollection.length);
        good.specifications.article.push({
          title: 'USB-C Power Delivery конектор',
          content: article,
          subcontent: 'Нове покоління зарядних пристроїв',
          photo: [good.imageCollection[pIndex]],
        });
      }
    });
    // color
    good.specifications.colors.push(
      { color: '#fff', colorName: 'Білий' },
      {
        color: '#AFCEEB',
        colorName: 'Light Blue',
      },
      {
        color: '#000',
        colorName: 'Black',
      }
    );

    //detailed
    good.specifications.detailed.push(
      {
        title: 'Сумісність',
        value: [
          'Apple iPhone 12 Pro / 12 Pro Max',
          '/ 12 mini / 12 / 11 Pro / 11 Pro Max',
          '/ 11 / SE (2‑го поколения) / XS / XS Max /',
          'XR / X / 8 / 8 Plus',
        ],
      },
      {
        title: 'Вид',
        value: ['Зарядні пристрої'],
      },
      {
        title: 'Вихідний струм',
        value: ['2.1A', '3A'],
      },
      {
        title: "Вихідний роз'єм",
        value: ['Apple Lightning USB Type-C'],
      },
      {
        title: 'Особливості',
        value: ['Функція швидкого заряджання'],
      },
      {
        title: 'Живлення',
        value: ['Мережа'],
      }
    );

    // category
    good.category.name = 'Зарядні пристрої та кабелі';
    good.category.mainImage =
      'https://content.rozetka.com.ua/goods/images/big_tile/35016401.jpg';
    good.category.id = 1;
    good.category.coupled.push(2, 3);
    if (index % 4 === 0) {
      good.category.top = true;
    } else {
      good.category.top = false;
    }
    // oldprice
    if (item.old_price) {
      good.oldprice = item.old_price;
    }
    // leader
    if (index % 6 === 0) {
      good.leader = true;
    } else {
      good.leader = false;
    }
    // price
    if (item.price) {
      good.price = item.price;
    }
    // id
    if (item.id) {
      good.id = item.id;
    }
    // brand
    good.brand.id = 1;
    good.brand.name = 'Aplle';
    good.brand.logo = apple;
    data.push(good);
  });

  // tablets
  let source2 = tablets.data;
  source2.forEach((item, index) => {
    let good: IProductCardListItem = {
      imageCollection: [],
      available: true,
      novelty: false,
      model: '',
      name: '',
      specifications: {
        main: [],
        detailed: [],
        article: [],
        colors: [],
        ram: [],
        memorySize: [],
        corps: [],
      },
      category: {
        mainImage: '',
        coupled: [],
        name: '',
        top: false,
        id: 0,
      },
      oldprice: 0,
      leader: false,
      price: 0,
      id: 0,
      brand: {
        country: '',
        name: '',
        logo: '',
        id: 0,
      },
    };
    // images
    if (item.images) {
      good.imageCollection = item.images;
    }
    // available
    if (index % 9 === 0) {
      good.available = false;
    } else {
      good.available = true;
    }
    // novelty
    if (index % 4 === 0) {
      good.novelty = true;
    } else {
      good.novelty = false;
    }

    // model
    good.model = `Model ${index + 34652}`;
    // title
    if (item.title) {
      good.name = item.title;
    }
    // specifications
    good.specifications.main.push({
      icon: <ExtendedProductCardSvgSelector id='screen' />,
      description: 'Діагональ екрану',
      value: '6.7”',
    });
    good.specifications.main.push(
      {
        icon: <ExtendedProductCardSvgSelector id='core' />,
        description: 'Кількість ядер',
        value: '2 ядер',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='cpu' />,
        description: 'Процесор',
        value: 'A15 Bionic',
      }
    );
    good.specifications.main.push(
      {
        icon: <ExtendedProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '3087 мАч',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='camera' />,
        description: 'Основна камера',
        value: '10 Мп',
      }
    );
    // detailed
    good.specifications.detailed.push(
      {
        title: 'Вид екрана',
        value: ['Ємнісний'],
      },
      {
        title: 'Діагональ екрану',
        value: ['8"'],
      },
      {
        title: 'Бездротові можливості',
        value: ['3G (UMTS)', '4G (LTE)', 'Bluetooth', 'Wi-Fi'],
      },
      {
        title: 'Операційна система',
        value: ['Android'],
      },
      {
        title: 'Роздільна здатність екрана',
        value: ['1280x800'],
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
      }
    );
    const articles = [
      'Значно більше,ніж просто стильний планшет. Завдяки тонкому (всього 8,15 мм) корпусу, металевій кришці й округлим граням пристрій має приголомшливо елегантний вигляд. А завдяки HD-дисплею, що займає 82% передньої поверхні, та динаміку Dolby Audio™ тепер можна назавжди забути про часи невиразного звучання та зернистої картинки.',
      "Дисплей Lenovo Tab M8 (2-е покоління), сертифікований концерном TÜV®, відфільтровує потенційно шкідливе для очей синє випроміню-вання ламп підсвічування. Таким чином, ти і твої близькі можете годинами дивитися фільми і грати на планшеті вдома й у довгих поїздках, не переймаючись за своє здоров'я.",
      'Відпочинок для очей. У прямому сенсі',
      'Завдяки тонкому (всього 8,15 мм) корпусу, металевій кришці й округлим граням пристрій має приголомшливо елегантний вигляд. А завдяки HD-дисплею, що займає 82% передньої поверхні, та динаміку Dolby Audio™ тепер можна назавжди забути про часи невиразного звучання та зернистої картинки.',
    ];
    articles.forEach((article, index) => {
      if (good.imageCollection[index]) {
        good.specifications.article.push({
          title: '',
          content: article,
          subcontent: '',
          photo: [good.imageCollection[index]],
        });
      } else {
        let pIndex = Math.floor(index % good.imageCollection.length);
        good.specifications.article.push({
          title: '',
          content: article,
          subcontent: '',
          photo: [good.imageCollection[pIndex]],
        });
      }
    });
    good.category.mainImage =
      '	https://content2.rozetka.com.ua/goods/images/big_tile/259394595.jpg';
    // color
    good.specifications.colors.push(
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
        color: '#fff',
        colorName: 'White',
      }
    );
    // ram
    good.specifications.ram.push(3, 4, 6, 8, 10, 12, 16);
    // memory size
    good.specifications.memorySize.push('128ГБ', '256ГБ', '512ГБ');
    good.specifications.corps.push('Метал', 'Пластик');
    // category
    good.category.name = 'Планшети';
    good.category.id = 2;
    good.category.coupled.push(1);
    if (index % 4 === 0) {
      good.category.top = true;
    } else {
      good.category.top = false;
    }
    // oldprice
    if (item.old_price) {
      good.oldprice = item.old_price;
    }
    // leader
    if (index % 6 === 0) {
      good.leader = true;
    } else {
      good.leader = false;
    }
    // price
    if (item.price) {
      good.price = item.price;
    }
    // id
    if (item.id) {
      good.id = item.id;
    }
    // brand
    good.brand.id = 145;
    // brand
    good.brand.name = 'Lenovo';
    good.brand.logo = lenovo;
    data.push(good);
  });

  // phones
  let source3 = phones.data;
  source3.forEach((item, index) => {
    let good: IProductCardListItem = {
      imageCollection: [],
      available: true,
      novelty: false,
      model: '',
      name: '',
      specifications: {
        main: [],
        detailed: [],
        article: [],
        colors: [],
        ram: [],
        memorySize: [],
        corps: [],
      },
      category: {
        mainImage: '',
        coupled: [],
        name: '',
        top: false,
        id: 0,
      },
      oldprice: 0,
      leader: false,
      price: 0,
      id: 0,
      brand: {
        country: '',
        name: '',
        logo: '',
        id: 0,
      },
    };
    // images
    if (item.images) {
      good.imageCollection = item.images;
    }
    // available
    if (index % 9 === 0) {
      good.available = false;
    } else {
      good.available = true;
    }
    // novelty
    if (index % 4 === 0) {
      good.novelty = true;
    } else {
      good.novelty = false;
    }

    // model
    good.model = `Model F65${index} `;
    // title
    if (item.title) {
      good.name = item.title;
    }
    // specifications
    good.specifications.main.push(
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
      }
    );

    // detailed
    good.specifications.detailed.push(
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
      }
    );
    // article
    const articles = [
      'Фірмовий дизайн iPhone доступний у чотирьох розкішних кольорах на будь-який смак. Корпус із хірургічної нержавіючої сталі доповнений суперміцною передньою панеллю Ceramic Shield та фактурним матовим склом задньої панелі.',
      "iPhone 13 Pro Max об'єднує потужну систему камер, найшвидший чіп для iPhone A15 Bioniс, ємну батарею зі збільшеним робочим ресурсом, надійну систему безпеки, приголомшливий дисплей із частотою оновлення до 120 Гц. І все це укладено у міцному корпусі із захистом за стандартом IP68.",
      'Удосконалена система камер Pro забезпечує нові можливості для початківців та просунутих фотографів. Завдяки покращеній апаратній частині кожнафотографія містить більше деталей. А інтелектуальне програмне забезпечення забезпечує доступ до нових та вдосконалених старих режимів та функцій.',
      'У камері TrueDepth реалізовані всі доступні режими та функції, за допомогою яких ви можете створювати чудові селфи за будь-яких умов. Face ID, що працює за підтримки процесора A15 Bionic та камери TrueDepth, пропонує супернадійну технологію автентифікації.',
    ];
    const titles = [
      'Приготуйтеся до епохи Pro',
      'Високий стиль. Висока надійність',
      'Мистецтво мобільної фотографії',
      'Дивовижні селфи з камерою TrueDepth',
    ];
    articles.forEach((article, index) => {
      if (good.imageCollection[index] && index % 2 === 0) {
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[index], good.imageCollection[index + 2]],
        });
      } else {
        let pIndex = Math.floor(index % good.imageCollection.length);
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[pIndex]],
        });
      }
    });
    good.specifications.corps.push('Метал', 'Пластик');
    // color
    good.specifications.colors.push(
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
        color: 'green',
        colorName: 'Green',
      }
    );
    // ram
    good.specifications.ram.push(3, 4, 6, 8, 10, 12, 16);
    // memory size
    good.specifications.memorySize.push('128ГБ', '256ГБ', '512ГБ', '1ТБ');
    // category
    good.category.name = 'Телефони';
    good.category.top = true;
    good.category.mainImage =
      'https://content1.rozetka.com.ua/goods/images/big/221208453.jpg';
    good.category.coupled.push(1);
    good.category.id = 3;
    if (index % 4 === 0) {
    } else {
      good.category.top = false;
    }
    // oldprice
    if (item.old_price) {
      good.oldprice = item.old_price;
    }
    // leader
    if (index % 6 === 0) {
      good.leader = true;
    } else {
      good.leader = false;
    }
    // price
    if (item.price) {
      good.price = item.price;
    }
    // id
    if (item.id) {
      good.id = item.id;
    }
    // brand
    good.brand.id = 35;
    // brand
    good.brand.name = 'Haier';
    good.brand.logo = haier;
    data.push(good);
  });

  // noutbooks
  let source4 = noutbooks.data;
  source4.forEach((item, index) => {
    let good: IProductCardListItem = {
      imageCollection: [],
      available: true,
      novelty: false,
      model: '',
      name: '',
      specifications: {
        main: [],
        detailed: [],
        article: [],
        colors: [],
        ram: [],
        memorySize: [],
        corps: [],
      },
      category: {
        mainImage: '',
        coupled: [],
        name: '',
        top: false,
        id: 0,
      },
      oldprice: 0,
      leader: false,
      price: 0,
      id: 0,
      brand: {
        country: '',
        name: '',
        logo: '',
        id: 0,
      },
    };
    // images
    if (item.images) {
      good.imageCollection = item.images;
    }
    // available
    if (index % 3 === 0) {
      good.available = false;
    } else {
      good.available = true;
    }
    // novelty
    if (index % 4 === 0) {
      good.novelty = true;
    } else {
      good.novelty = false;
    }

    // model
    good.model = `FT 563 ${index}C`;
    // title
    if (item.title) {
      good.name = item.title;
    }
    // specifications
    good.specifications.main.push(
      {
        icon: <ExtendedProductCardSvgSelector id='screen' />,
        description: 'Роздільна здатність',
        value: '2560x1600',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='camera' />,
        description: "Обсяг пам'яті відеокарти",
        value: '12 Мп + 12 Мп + 12 Мп',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='frontalcamera' />,
        description: 'Фронтальна камера. Мп',
        value: 'A15 Bionic',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='cpu' />,
        description: 'Покоління процесора Intel',
        value: '11-ое Tiger Lake',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='core' />,
        description: "Тип оперативної пам'яті",
        value: 'DDR4-3200 МГц',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='batery' />,
        description: 'Місткість батареї',
        value: '4352 мАч',
      }
    );
    // detailed
    good.specifications.detailed.push(
      {
        title: 'Вага',
        value: ['1.5 кг'],
      },
      {
        title: 'Ємність акумулятора',
        value: ['56 Вт*год'],
      },
      {
        title: 'Маніпулятори',
        value: ['Тачпад'],
      },
      {
        title: 'Характеристики батареї',
        value: ['56 Вт*ч'],
      },
      {
        title: 'Частота оновлення екрана',
        value: ['120 Гц'],
      },
      {
        title: 'Кількість точок торкання',
        value: ['10'],
      },
      {
        title: 'Тип екрана',
        value: ['IPS'],
      },
      {
        title: 'Покоління процесора Intel',
        value: ['11-ое Tiger Lake'],
      },
      {
        title: 'Мережеві адаптери',
        value: ['Wi-Fi 802.11ax', 'Bluetooth 5.0'],
      }
    );
    // article
    const articles = [
      'Компанія Xiaomi випустила один із самих топових ноутбуків, представлених на ринку, який називається Mi Notebook Pro 14. У поєднанні з процесором Intel останнього покоління, алюмінієвим корпусом та відеокартою NVIDIA GeForce MX450 ця технічна перлина зі сходу пропонує багато переваг за свою вартість.',
      'Ті, хто вже знайомий із серією ноутбуків Xiaomi «Pro», точно знають, яку якість виробник Xiaomi вкладає у свої ноутбуки. Корпус повністю виготовлений з алюмінію і тому не тільки виглядає елегантно та якісно, але й переконує своєю малою вагою та міцністю.',
      "Низьке енергоспоживання та висока продуктивність стали доступні завдяки використанню 4-ядерного процесора i7-11370H, який був виготовлений за 10-нм техпроцесом і забезпечує максимальну тактову частоту до 4.8 ГГц. У поєднанні з оперативною пам'яттю DDR4 об'ємом 16 ГБ із частотою 3200 Гц та двоканальною роботою, повсякденна офісна робота перетворюється на дитячу гру. Навіть для програм з інтенсивними обчисленнями, таких як Photoshop, забезпечується більш ніж достатня продуктивність. Внутрішньої пам'яті твердотільного накопичувача PCIe NVMe ємністю 512 ГБ цілком достатньо для зберігання великого обсягу інформації.",
      'Mi Notebook Pro обладнаний дисплеєм з діагоналлю 14 дюймів, роздільною здатністю 2560×1600 пікселів, а також яскравістю 300 ніт. Краї дуже тонкі, всього 4.3 мм, що надає ноутбуку сучасного вигляду.',
    ];
    const titles = [
      'Один із самих топових ноутбуків',
      'Алюмінієвий корпус',
      'Процесор Intel i7-11370H',
      'Сучасна різноманітність портів',
    ];
    articles.forEach((article, index) => {
      if (good.imageCollection[index] && index % 2 === 0) {
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[index], good.imageCollection[index + 2]],
        });
      } else {
        let pIndex = Math.floor(index % good.imageCollection.length);
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[pIndex]],
        });
      }
    });
    good.specifications.corps.push('Метал', 'Пластик', 'Каучук');
    // color
    good.specifications.colors.push(
      {
        color: '#800000',
        colorName: 'Bordo',
      },
      {
        color: '#A52A2A',
        colorName: 'Brown',
      },
      {
        color: '#00008B',
        colorName: 'Darkblue',
      },
      {
        color: '#800080',
        colorName: 'Purple',
      }
    );
    good.category.top = true;
    good.category.mainImage =
      'https://content1.rozetka.com.ua/goods/images/big/249845992.png';
    // ram
    good.specifications.ram.push(3, 4, 6, 8, 10, 12, 16);
    // memory size
    good.specifications.memorySize.push('512ГБ', '1ТБ');
    // category
    good.category.name = 'Ноутбуки';
    good.category.coupled.push(1, 2);
    good.category.id = 4;
    if (index % 4 === 0) {
      good.category.top = true;
    } else {
      good.category.top = false;
    }
    // oldprice
    if (item.old_price) {
      good.oldprice = item.old_price;
    }
    // leader
    if (index % 6 === 0) {
      good.leader = true;
    } else {
      good.leader = false;
    }
    // price
    if (item.price) {
      good.price = item.price;
    }
    // id
    if (item.id) {
      good.id = item.id;
    }

    // brand
    good.brand.id = 39;
    // brand
    good.brand.name = 'Xiaomi';
    good.brand.logo = xiaomi;
    data.push(good);
  });

  // ebooks
  let source5 = ebooks.data;
  source5.forEach((item, index) => {
    let good: IProductCardListItem = {
      imageCollection: [],
      available: true,
      novelty: false,
      model: '',
      name: '',
      specifications: {
        main: [],
        detailed: [],
        article: [],
        colors: [],
        ram: [],
        memorySize: [],
        corps: [],
      },
      category: {
        mainImage: '',
        coupled: [],
        name: '',
        top: false,
        id: 0,
      },
      oldprice: 0,
      leader: false,
      price: 0,
      id: 0,
      brand: {
        country: '',
        name: '',
        logo: '',
        id: 0,
      },
    };
    // images
    if (item.images) {
      good.imageCollection = item.images;
    }
    // available
    if (index % 9 === 0) {
      good.available = false;
    } else {
      good.available = true;
    }
    // novelty
    if (index % 4 === 0) {
      good.novelty = true;
    } else {
      good.novelty = false;
    }

    // model
    good.model = `Model ${index} SRX`;
    // title
    if (item.title) {
      good.name = item.title;
    }
    // specifications
    good.specifications.main.push(
      {
        icon: <ExtendedProductCardSvgSelector id='screen' />,
        description: 'Діагональ дисплея',
        value: '10.3"',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='camera' />,
        description: 'Кількість градацій сірого',
        value: '16',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='info' />,
        description: 'Вага',
        value: '300 г',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='cpu' />,
        description: 'Роздільна здатність екрану',
        value: '1872x1404',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='core' />,
        description: 'Тип матриці',
        value: 'E Ink Carta',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='batery' />,
        description: "Підтримка карт пам'яті",
        value: 'Відсутня',
      }
    );
    // detailed
    good.specifications.detailed.push(
      {
        title: 'Тип сенсора дисплея',
        value: ['Ємнісний'],
      },
      {
        title: 'Щільність пікселів',
        value: ['227 dpi'],
      },
      {
        title: 'Покриття дисплея',
        value: ['Скло'],
      },
      {
        title: "Оперативна пам'ять",
        value: ['1 ГБ'],
      },
      {
        title: 'Бездротові можливості',
        value: ['Wi-Fi'],
      },
      {
        title: 'Тип акумулятора',
        value: ['Літій-полімерний'],
      },

      {
        title: 'Формати зображень',
        value: ['BMP', 'JPEG', 'PNG', 'TIFF'],
      },
      {
        title: 'Формати',
        value: [
          'CHM',
          'DJVU',
          'DOC',
          'DOCX',
          'EPUB',
          'EPUB (DRM)',
          'FB2',
          'HTML',
          'MOBI',
          'PDF',
          'PDF(DRM)',
          'PRC (MOBI)',
          'RTF',
          'TXT',
        ],
      },
      {
        title: 'Додатки',
        value: ['Ігри', 'Підтримка аудіо'],
      }
    );
    // article
    const articles = [
      'PocketBook X є частиною глобальної екосистеми PocketBook. Використовуючи сервіс PocketBook Cloud, ви можете завантажувати книги в ридер, переносити окремі файли або всю свою бібліотеку на смартфон і будь-які інші пристрої, синхронізувати позиції читання, закладки та замітки.',
      'Величезний екран нового PocketBook X забезпечить ні з чим не порівнянні враження, хоч що ви читатимете: електронну книгу, газету, журнал, комікси або професійну літературу. Крім розумної підсвітки SMARTlight, новий ридер також підтримує аудіофункції, й обладнаний Bluetooth, а його вага становить усього 300 г.',
      'Ридер PocketBook X обладнаний 10.3-дюймовим HD екраном із роздільною здатністю 1404x1872, що робить його ідеальним пристроєм для читання будь-якого контенту: книг, цифрових версій газет і журналів, коміксів, наукових публікацій і навіть музичних нот. З PocketBook X користувач може бачити дедалі більше тексту на одній сторінці, не жертвуючи розміром шрифту. Крім того, не забувайте, що технологія E Ink Carta робить оптичні характеристики екрана практично ідентичними звичайній паперовій сторінці.',
      'Завдяки сучасному двоядерному процесору, PocketBook X легко та швидко справляється з будь-яким завданням. Пристрій живить акумулятор ємністю у 2000 мА·год, забезпечуючи до 1 місяця повноцінної роботи без підзаряджання. Ефективність PocketBook X підвищується також завдяки датчику обкладинки: ридер автоматично переходить у режим сну після закриття захисної кришки.',
    ];
    const titles = [
      'PocketBook X — довгоочікуваний ридер із великим 10.3-дюймовим екраном та аудіо.',
      'Розширюйте горизонти читання з 10.3-дюймовим екраном',
      'Розумна підсвітка й безліч книжкових форматів PocketBook X призначений для активного використання в будь-який час дня й ночі',
      'Потужний, економний, функційний!',
    ];
    articles.forEach((article, index) => {
      if (good.imageCollection[index] && index % 2 === 0) {
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[index], good.imageCollection[index + 2]],
        });
      } else {
        let pIndex = Math.floor(index % good.imageCollection.length);
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[pIndex]],
        });
      }
    });
    good.category.coupled.push(1, 2);
    good.category.mainImage =
      'https://content.rozetka.com.ua/goods/images/big/164894264.jpg';
    // color
    good.specifications.colors.push(
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
      }
    );
    // ram
    good.specifications.ram.push(3);
    // memory size
    good.specifications.memorySize.push('3 Гб');
    // category
    good.category.name = 'Електронні книги';
    good.category.id = 5;
    if (index % 4 === 0) {
      good.category.top = true;
    } else {
      good.category.top = false;
    }
    // oldprice
    if (item.old_price) {
      good.oldprice = item.old_price;
    }
    // leader
    if (index % 6 === 0) {
      good.leader = true;
    } else {
      good.leader = false;
    }
    // price
    if (item.price) {
      good.price = item.price;
    }
    // id
    if (item.id) {
      good.id = item.id;
    }
    // brand
    good.brand.id = 36;
    good.brand.name = 'Samsung';
    good.brand.logo =
      'https://content2.rozetka.com.ua/producers/logo/original/187345455.jpg';
    data.push(good);
    console.log(data);
  });

  // tv
  let source6 = tv.data;

  source6.forEach((item, index) => {
    let good: IProductCardListItem = {
      imageCollection: [],
      available: true,
      novelty: false,
      model: '',
      name: '',
      specifications: {
        main: [],
        detailed: [],
        article: [],
        colors: [],
        ram: [],
        memorySize: [],
        corps: [],
      },
      category: {
        mainImage: '',
        coupled: [],
        name: '',
        top: false,
        id: 0,
      },
      oldprice: 0,
      leader: false,
      price: 0,
      id: 0,
      brand: {
        country: '',
        name: '',
        logo: '',
        id: 0,
      },
    };
    // images
    if (item.images) {
      good.imageCollection = item.images;
    }
    // available
    if (index % 9 === 0) {
      good.available = false;
    } else {
      good.available = true;
    }
    // novelty
    if (index % 4 === 0) {
      good.novelty = true;
    } else {
      good.novelty = false;
    }

    // model
    good.model = `Model ${index}`;
    // title
    if (item.title) {
      good.name = item.title;
    }
    // specifications
    good.specifications.main.push(
      {
        icon: <ExtendedProductCardSvgSelector id='screen' />,
        description: 'Діагональ дисплея',
        value: '32"',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='camera' />,
        description: 'Роздільна здатність',
        value: '1366x768',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='info' />,
        description: 'Частота оновлення',
        value: '200 Гц (PQI)',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='cpu' />,
        description: 'Контрастність',
        value: 'Mega Contrast',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='core' />,
        description: 'Тип матриці',
        value: 'E Ink Carta',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='batery' />,
        description: 'Розміри з підставкою',
        value: '737.4 x 465.4 x 150.5 мм',
      }
    );
    good.category.top = true;
    // detailed
    good.specifications.detailed.push(
      {
        title: 'Підтримка Smart TV',
        value: ['без Smart TV'],
      },
      {
        title: 'Форма екрана',
        value: ['Плоский'],
      },
      {
        title: 'Технології',
        value: ['без WI-Fi'],
      },
      {
        title: 'Вихідна потужність звуку, Вт',
        value: ['10'],
      },
      {
        title: 'Бездротові можливості',
        value: ['Wi-Fi'],
      },
      {
        title: 'Діапазони цифрового тюнера',
        value: ['DVB-C', 'DVB-S2', 'DVB-T2'],
      },
      {
        title: "Роз'єми (порти)",
        value: [
          '2 x HDMI;',
          '1 x USB;',
          '1 x Оптичний цифровий аудіовихід;',
          '1 x Композитний вхід (AV);',
          '1 x Компонентний вхід (Y/Pb/Pr);',
          '1 x CI слот;',
          '1 x Антенний вхід;',
          '1 x Антенний вхід (супутниковий);',
        ],
      },
      {
        title: 'Аудіосистема',
        value: ['Вихідна потужність звуку: 10 Вт', 'Dolby Digital Plus'],
      },
      {
        title: 'Вага з підставкою',
        value: ['3.9 кг'],
      }
    );
    // article
    const articles = [
      'Технологія Clean View аналізує вміст за допомогою новітнього алгоритму для фільтрації та зниження шуму та перешкод, покращує передавання кольору та контрастність для отримання кришталево чистої картинки. Насолоджуйтесь вишуканою якістю зображення.',
      'На вас чекають яскраві, насичені кольори. Технологія Wide Color Enhancer підвищує якість зображення й дає змогу побачити невидимі раніше деталі, що забезпечує реалістичне передавання кольору.',
      'Насолоджуйтесь HD-телевізором в епоху цифрових технологій. Коли ви побачите екран із високою роздільною здатністю з яскравими та чіткими деталями, ви ніколи більше не повернетеся до стандартної роздільної здатності або аналогових телевізорів.',
      "Завдяки функції ConnectShare Movie ви можете просто під'єднати ваш USB-накопичувач до USB-роз'єму телевізора, щоб записані на носії фільми, фотознімки або музичні треки почали відтворюватися на екрані телевізора",
    ];
    const titles = [
      'Технологія Clean View',
      'Технологія Wide Colour Enhancer',
      'Якісне зображення з високою роздільною здатністю',
      'Функція ConnectShare Movie',
    ];
    articles.forEach((article, index) => {
      if (good.imageCollection[index] && index % 2 === 0) {
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[index], good.imageCollection[index + 2]],
        });
      } else {
        let pIndex = Math.floor(index % good.imageCollection.length);
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[pIndex]],
        });
      }
    });
    // coupled
    good.category.coupled.push(7);
    // color
    good.specifications.colors.push(
      {
        color: '#000',
        colorName: 'Чорний',
      },
      {
        color: '##808080',
        colorName: 'Сірий',
      },
      {
        color: '##c0c0c0',
        colorName: 'Срібний',
      }
    );
    good.category.top = false;
    // category
    good.category.name = 'Телевізори';
    good.category.mainImage =
      'https://content.rozetka.com.ua/goods/images/big/237042953.jpg';
    good.category.id = 6;
    if (index % 4 === 0) {
      good.category.top = true;
    } else {
      good.category.top = false;
    }
    // oldprice
    if (item.old_price) {
      good.oldprice = item.old_price;
    }
    // leader
    if (index % 6 === 0) {
      good.leader = true;
    } else {
      good.leader = false;
    }
    // price
    if (item.price) {
      good.price = item.price;
    }
    // id
    if (item.id) {
      good.id = item.id;
    }
    // brand
    good.brand.id = 53;
    good.brand.logo =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Acer_2011.svg/200px-Acer_2011.svg.png';
    good.brand.name = 'Acer';
    data.push(good);
  });

  // Headset
  let source7 = headset.data;

  source7.forEach((item, index) => {
    let good: IProductCardListItem = {
      imageCollection: [],
      available: true,
      novelty: false,
      model: '',
      name: '',
      specifications: {
        main: [],
        detailed: [],
        article: [],
        colors: [],
        ram: [],
        memorySize: [],
        corps: [],
      },
      category: {
        mainImage: '',
        coupled: [],
        name: '',
        top: false,
        id: 0,
      },
      oldprice: 0,
      leader: false,
      price: 0,
      id: 0,
      brand: {
        country: '',
        name: '',
        logo: '',
        id: 0,
      },
    };
    // images
    if (item.images) {
      good.imageCollection = item.images;
    }
    // available
    if (index % 9 === 0) {
      good.available = false;
    } else {
      good.available = true;
    }
    // novelty
    if (index % 4 === 0) {
      good.novelty = true;
    } else {
      good.novelty = false;
    }
    good.category.top = true;

    // model
    good.model = `Model ${index}`;
    // title
    if (item.title) {
      good.name = item.title;
    }
    // specifications
    good.specifications.main.push(
      {
        icon: <ExtendedProductCardSvgSelector id='screen' />,
        description: 'Вага',
        value: '(кожний навушник): 4.28 г',
      },
      {
        icon: <ExtendedProductCardSvgSelector id='info' />,
        description: 'Гарантія',
        value: '12 місяців',
      }
    );
    // coupled
    good.category.coupled.push(2, 3, 4, 5);
    // detailed
    good.specifications.detailed.push(
      {
        title: 'Тип навушників',
        value: ['TWS (2 окремо)'],
      },
      {
        title: 'Тип підключення',
        value: ['Бездротові'],
      },
      {
        title: 'Особливості',
        value: ['Apple-сумісність'],
      },
      {
        title: "Інтерфейс під'єднання",
        value: ['Bluetooth'],
      },
      {
        title: 'Бездротові можливості',
        value: ['Wi-Fi'],
      },
      {
        title: 'Розміри кейса',
        value: ['Висота: 46.4 мм', 'Ширина: 54.4 мм', 'Товщина: 21.38 мм'],
      }
    );
    // article
    const articles = [
      'Навушники JBL Wave 100 уособлюють звук у фізичному втіленні: стильна зовнішня оболонка з крутим обладнанням здатна передавати хвилі так, щоб ви відчули всю їх міць. Відомий у всьому світі саунд створюється за допомогою 8 драйверів, характерною рисою яких став яскраво виражений бас. Для того, щоб почути ідеальне аудіо, не потрібно йти на концерт або в кіно – досить вийняти навушники з кишені і помістити їх у свої вуха.',
      'Виробник подбав не тільки про чудову якість звучання, а й про запас енергії. Високопродуктивний акумулятор забезпечує до 20 годин звучання, які діляться на 5 годин, що припадають на кожен навушник, і 15 годин, одержуваних безпосередньо від зарядного кейсу. Так ви завжди зможете розраховувати на стабільний звук з періодичним дозарядженням',
      'Перевагою JBL Wave 100 стала їх здатність одночасно підключати обидва навушника незалежно від того, який буде першим. Така система дозволить заощадити запаси енергії і спростить використання бездротової системи. Швидке спрацьовування і подальша моментальна готовність до роботи забезпечені.',
      'Конструкція самого вкладиша чудово продумана і пристосована для щільної посадки у вушній раковині. Навіть через кілька годин прослуховування музики ви не відчуєте негативних ефектів. Для точного підбору розміру в комплектації передбачено 3 пари амбушюр, щоб прилягання було максимальним.',
    ];
    const titles = [
      'Глибоке звучання від JBL',
      '20 годин музики',
      'Подвійне підключення',
      'Ергономічна будова',
    ];
    articles.forEach((article, index) => {
      if (good.imageCollection[index] && index % 2 === 0) {
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[index], good.imageCollection[index + 2]],
        });
      } else {
        let pIndex = Math.floor(index % good.imageCollection.length);
        good.specifications.article.push({
          title: titles[index],
          content: article,
          subcontent: '',
          photo: [good.imageCollection[pIndex]],
        });
      }
    });
    // color
    good.specifications.colors.push(
      {
        color: '#000',
        colorName: 'Чорний',
      },
      {
        color: '##c0c0c0',
        colorName: 'Срібний',
      },
      {
        color: '##808080',
        colorName: 'Сірий',
      }
    );
    // category
    good.category.name = 'Навушники';
    good.category.mainImage =
      '	https://content.rozetka.com.ua/goods/images/big/229708418.jpg';
    good.category.id = 7;
    if (index % 4 === 0) {
      good.category.top = true;
    } else {
      good.category.top = false;
    }
    // oldprice
    if (item.old_price) {
      good.oldprice = item.old_price;
    }
    // leader
    if (index % 6 === 0) {
      good.leader = true;
    } else {
      good.leader = false;
    }
    // price
    if (item.price) {
      good.price = item.price;
    }
    // id
    if (item.id) {
      good.id = item.id;
    }
    // brand
    good.brand.id = 77;
    good.brand.logo =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/JBL_logo.svg/867px-JBL_logo.svg.png';
    good.brand.name = 'JBL';
    data.push(good);
  });
  return data;
};
export { source };
