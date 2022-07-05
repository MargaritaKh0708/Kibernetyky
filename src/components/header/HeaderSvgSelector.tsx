import React from 'react';

interface IHeaderSvgSelector {
  id: string;
  children?: React.ReactChild | React.ReactNode;
  className?: string;
}

export const HeaderSvgSelector: React.FC<IHeaderSvgSelector> = ({
  id,
  children,
  className,
}) => {
  switch (id) {
    case 'zsu':
      return (
        <svg
          _ngcontent-rz-client-c105=''
          fill='none'
          height='26'
          viewBox='0 0 68 26'
          width='68'
          xmlns='http://www.w3.org/2000/svg'
          aria-hidden='true'
        >
          <path
            _ngcontent-rz-client-c105=''
            d='m1.9347 0c-1.252938 4.0662-1.9347 8.4419-1.9347 13.0003 0 4.5581.681706 8.9336 1.93455 12.9997h64.13095c1.2528-4.0661 1.9345-8.4416 1.9345-12.9997 0-4.5584-.6818-8.9341-1.9347-13.0003z'
            fill='#00a046'
          ></path>
          <g _ngcontent-rz-client-c105='' fill='#fff'>
            <path
              _ngcontent-rz-client-c105=''
              clipRule='evenodd'
              d='m17.078 1.33191h-.0425c-.1631.28822-.3119.32838-.5328.69692-1.18 1.96555.6095 6.94202-.841 10.97707-.2918.8115-1.0773 2.5656-1.6242 2.8597-.8894.1122-1.7364-.3449-1.6938-1.1812.0519-1.0607 1.317-1.017 1.6348-1.1836-.1359-1.6171-.5339-5.20206-1.1139-6.52267-.6757-1.53794-2.529-3.63815-3.89687-3.8803l-.00118 16.86897 4.54885.0177c.1205.6143.2717 1.0041.5493 1.5333.2977.5669.4926.7618.8115 1.1835.6083.8021 1.5769 1.1836 2.2219 1.8817.3165-.5138 1.278-.9568 1.7482-1.4588.6177-.6579.7973-.8079 1.3099-1.786.1217-.2327.2068-.4252.2918-.7028.111-.3674.0402-.5079.3307-.6627l4.3552-.0342.0012-16.83004c-.5623.05079-2.0778 1.28635-2.3176 1.55803-.6059.68629-1.0867 1.29225-1.5568 2.33881-.4394.98159-1.1304 5.3805-1.095 6.5699 2.327-.1086 2.0329 2.6129-.1016 2.2833-.5386-.4547-1.2852-1.949-1.6076-2.8703-.8753-2.4959-.5824-5.53522-.4288-8.22131.1051-1.85333-.0484-2.30455-.9497-3.43498zm.6662 17.44899 1.6454.0212c-.0071-.4925-.0413-1.0619-.2705-1.4198-.8091.1807-1.2284.58-1.3749 1.3986zm-3.0263.0071 1.6596.013c-.1394-.8848-.541-1.2604-1.4588-1.4305zm1.6336 3.5235.0107-2.3246-1.3797-.013c.1831.9627.7973 2.0376 1.369 2.3376zm1.4069-.0047c.4441-.1949.6083-.5469.8812-.9461.2752-.4028.4169-.8694.4972-1.3903l-1.3796.013zm-2.2361-6.0077c.3083.0886 1.2072.5895 1.4411.8198.4902-.1595 1.2037-.6154 1.6289-.8977-.7028-1.0537-.9308-1.8215-1.5285-3.0901-.2563.4725-.4004 1.0926-.652 1.5687-.313.5906-.6332 1.0713-.8895 1.5993zm-5.1891 2.5314 3.0298-.0036.2056-1.6974c-.3532-.1972-1.01-.2339-1.5758-.58-.6803-.4146-.5292-.5303-.9721-1.2284l-.632-.0036zm10.2046-1.6986.2787 1.6868 2.9779.0012-.0071-3.4799-.6946-.0154c-.9662 1.6868-.717 1.0738-2.5549 1.8073zm1.095-4.5146c.913.7418.6083.0508 1.4552 1.5108l.6851.007.0177-8.54017c-.5433.34373-1.4481 2.00807-1.6123 2.9495-.1973 1.13161-.502 2.98727-.5457 4.07287zm-11.2925 1.5285.6851-.0071c.6013-.9958.4312-.8174 1.4695-1.5214-.0627-1.1434-.3367-2.83259-.5399-4.00672-.1736-1.00049-.6567-1.87814-1.278-2.67192l-.3414-.34255z'
              fillRule='evenodd'
            ></path>
            <path
              _ngcontent-rz-client-c105=''
              d='m34.3359 10.6719-2.25-.5235c.4844-1.86455 1.862-2.79684 4.1329-2.79684 1.3437 0 2.3567.29688 3.039.89063.6875.58854 1.0313 1.28125 1.0313 2.07811 0 .5469-.1563 1.0417-.4688 1.4844-.3125.4375-.7812.8229-1.4062 1.1562.7604.2605 1.3307.6302 1.7109 1.1094.3802.474.5703 1.0599.5703 1.7578 0 1.0052-.3698 1.8177-1.1094 2.4375-.7343.6198-1.8359.9297-3.3047.9297-1.1979 0-2.1432-.1979-2.8359-.5937-.6927-.4011-1.2135-1.1485-1.5625-2.2422l2.1172-.6953c.2188.6875.5078 1.1328.8672 1.3359.3646.2031.8125.3047 1.3437.3047.7292 0 1.2605-.1563 1.5938-.4688.3333-.3177.5-.6797.5-1.0859 0-.4688-.1901-.8464-.5703-1.1328-.375-.2865-.9427-.4297-1.7032-.4297h-.5234v-1.7266h.2656c.7084 0 1.25-.1588 1.625-.4765s.5625-.7396.5625-1.2656c0-.4167-.1536-.76828-.4609-1.05474-.3021-.28646-.737-.42968-1.3047-.42968-.9687 0-1.5885.47916-1.8594 1.43752zm15.3203 4.1172 2.2422.7109c-.3437 1.25-.9166 2.1797-1.7187 2.7891-.7969.6041-1.8099.9062-3.0391.9062-1.5208 0-2.7708-.5182-3.75-1.5547-.9791-1.0416-1.4687-2.4635-1.4687-4.2656 0-1.9062.4922-3.38542 1.4765-4.4375.9844-1.05729 2.2787-1.58594 3.8828-1.58594 1.4011 0 2.5391.41406 3.4141 1.24219.5208.48958.9115 1.19271 1.1719 2.10935l-2.2891.5469c-.1354-.5938-.4192-1.0625-.8515-1.40625-.4271-.34375-.948-.51563-1.5625-.51563-.849 0-1.5391.30469-2.0703.91408-.5261.6094-.7891 1.5963-.7891 2.9609 0 1.4479.2604 2.4792.7812 3.0938.5209.6146 1.198.9219 2.0313.9219.6146 0 1.1432-.1954 1.5859-.586s.7604-1.0052.9531-1.8437zm2.8516-7.24222h2.586l2.6718 5.94532 2.2813-5.94532h2.414l-3.8671 8.70312c-.4219.9427-.8516 1.6615-1.2891 2.1562-.4375.4896-1.0026.7344-1.6953.7344-.6823 0-1.2162-.0442-1.6016-.1328v-1.7187c.3281.0208.625.0312.8906.0312.5365 0 .9193-.0963 1.1485-.2891.2343-.1979.4583-.6197.6719-1.2656z'
            ></path>
          </g>
        </svg>
      );
    case 'logo':
      return (
        <svg
          width='138'
          height='44'
          viewBox='0 0 138 44'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M117.572 43.25H20.4283C9.63026 43.25 0.75 33.7703 0.75 22C0.75 10.2297 9.63026 0.75 20.4283 0.75H117.572C128.371 0.75 137.25 10.2297 137.25 22C137.25 33.7703 128.371 43.25 117.572 43.25Z'
            fill='#404040'
            stroke='#F9E505'
            strokeWidth='1.5'
          />
          <path
            d='M24.7106 14.3994H27.1937L22.3141 18.9628L27.6757 26.2753H25.3484L20.9176 20.1172L19.3481 21.5252V26.2753H17.4512V14.3994H19.3481V18.3352C19.3481 18.8437 19.0555 19.404 18.8481 19.8622L19.1584 19.9986C19.3658 19.5404 19.6072 18.9462 19.9687 18.6231L24.7106 14.3994Z'
            fill='white'
          />
          <path
            d='M28.7285 14.3994H30.7111V16.2648H28.7285V14.3994Z'
            fill='#F9E505'
          />
          <path
            d='M28.8311 17.793H30.6419V26.2755H28.8311V17.793Z'
            fill='white'
          />
          <path
            d='M49.8111 21.3214C49.8111 20.0493 48.8454 19.0143 47.2936 19.0143C45.7073 19.0143 44.6212 20.1678 44.6212 21.3214H49.8111ZM42.5 21.9837C42.5 19.4551 44.4658 17.5381 47.2592 17.5381C50.1213 17.5381 51.8974 19.5911 51.8793 21.9155C51.8793 22.0849 51.8793 22.4923 51.8793 22.6274H44.6031C44.6031 23.6458 45.5356 24.9861 47.4833 24.9861C48.7249 24.9861 49.4827 24.375 49.6725 23.8499H51.6899C51.4485 24.7325 50.225 26.547 47.6387 26.547C44.3109 26.547 42.5 24.5114 42.5 21.9837Z'
            fill='white'
          />
          <path
            d='M55.174 21.9658C55.174 23.561 56.1565 24.8674 57.9325 24.8674C59.7257 24.8674 60.6049 23.561 60.6049 21.9658C60.6049 20.3884 59.7257 19.201 57.9325 19.201C56.1565 19.201 55.174 20.3884 55.174 21.9658ZM54.9154 30.5179H53.1045V17.7929H54.9154V18.4036C54.9154 18.9121 54.6563 19.5067 54.4846 19.9988L54.8117 20.0996C54.9847 19.6253 55.0871 18.9286 55.4322 18.573C56.0708 17.9115 56.9672 17.5215 58.1223 17.5215C60.7258 17.5215 62.4674 19.4724 62.4326 22.0001C62.3814 24.4609 60.6566 26.5304 58.1391 26.5304C56.9836 26.5304 56.0876 26.1065 55.4498 25.4438C55.0871 25.0716 54.9666 24.3927 54.8117 23.9007L54.4846 24.0192C54.6563 24.4935 54.9154 25.1046 54.9154 25.614V30.5179Z'
            fill='white'
          />
          <path
            d='M80.7076 21.3214C80.7076 20.0493 79.7419 19.0143 78.1901 19.0143C76.6034 19.0143 75.5176 20.1678 75.5176 21.3214H80.7076ZM73.3965 21.9837C73.3965 19.4551 75.3623 17.5381 78.1556 17.5381C81.0178 17.5381 82.7934 19.5911 82.7758 21.9155C82.7758 22.0849 82.7758 22.4923 82.7758 22.6274H75.4996C75.4996 23.6458 76.4317 24.9861 78.3799 24.9861C79.6209 24.9861 80.3792 24.375 80.569 23.8499H82.5873C82.345 24.7325 81.1215 26.547 78.5348 26.547C75.2069 26.547 73.3965 24.5114 73.3965 21.9837Z'
            fill='white'
          />
          <path
            d='M108.065 17.8086H110.409L106.789 21.0833L111.289 26.2924H108.961L105.53 22.186L104.684 22.9331L104.702 26.2747H102.892V17.8151H104.702V19.7595C104.702 20.302 104.41 20.9304 104.168 21.4225L104.496 21.5576C104.72 21.0668 104.996 20.4384 105.409 20.0822L108.065 17.8086Z'
            fill='white'
          />
          <path
            d='M99.8619 17.8008H101.553V26.2616H99.8619V21.6757C99.8619 21.0273 100.147 20.2464 100.355 19.6279L100.072 19.5398C99.8619 20.143 99.6072 20.9535 99.2188 21.469L95.0123 26.2616H93.3369V17.8008H95.0123V22.4028C95.0123 23.0508 94.7435 23.8308 94.5334 24.4505L94.8185 24.5383C95.0282 23.9341 95.2829 23.1242 95.6713 22.6091L99.8619 17.8008Z'
            fill='white'
          />
          <path
            d='M118.715 17.7998H120.407V26.2606H118.715V21.6748C118.715 21.0263 119 20.2454 119.209 19.627L118.925 19.5388C118.715 20.1421 118.461 20.9525 118.072 21.468L113.866 26.2606H112.19V17.7998H113.866V22.4018C113.866 23.0498 113.597 23.8298 113.387 24.4496L113.672 24.5373C113.882 23.9332 114.136 23.1232 114.525 22.6081L118.715 17.7998Z'
            fill='white'
          />
          <path
            d='M92.252 17.8389H83.0068V19.4098H86.7341V26.2524H88.5247V19.4098H92.252V17.8389Z'
            fill='white'
          />
          <path
            d='M70.3108 17.8389V21.2574H65.5521V17.8389H63.7412V26.2754H65.5521V22.8283H70.3108V26.2754H72.1212V17.8389H70.3108Z'
            fill='white'
          />
          <path
            d='M37.1283 24.8668C35.3522 24.8668 34.3698 23.5604 34.3698 21.9652C34.3698 20.3878 35.3522 19.2004 37.1283 19.2004C38.921 19.2004 39.8007 20.3878 39.8007 21.9652C39.8007 23.5604 38.921 24.8668 37.1283 24.8668ZM39.238 17.9296C38.6743 17.6672 38.0277 17.52 37.3181 17.52C36.1626 17.52 35.2662 17.9109 34.6275 18.5724C34.2828 18.9281 34.18 19.6247 34.007 20.099L33.68 19.9969C33.8415 19.5357 34.0763 18.9854 34.105 18.4985H34.1072C34.1341 18.3535 34.1663 18.2054 34.2056 18.0538C34.285 17.745 34.421 17.4618 34.6143 17.2034C34.8063 16.9463 35.0583 16.7235 35.3712 16.5367C35.6824 16.35 36.0778 16.2314 36.5567 16.1797L38.9264 15.9478C39.8563 15.8449 40.5307 15.5578 40.9482 15.0865C41.3666 14.6166 41.6023 14.0724 41.6557 13.4531H39.9424C39.8766 13.788 39.7036 14.0329 39.4247 14.188C39.1453 14.343 38.7736 14.4464 38.3093 14.4976L36.4168 14.6913C35.6334 14.7682 34.9824 14.968 34.4647 15.2898C33.9465 15.6116 33.5312 16.0468 33.22 16.5949C32.9429 17.0792 32.7398 17.6516 32.6092 18.3118C32.6092 18.3118 32.2998 19.9048 32.3011 21.9392C32.3011 21.9444 32.2998 21.9513 32.2998 21.957V22.0195C32.3166 24.5724 34.3985 26.6362 36.9641 26.6362C38.2356 26.6362 39.3876 26.129 40.2292 25.3072C41.0687 24.4187 41.6023 23.2256 41.6283 21.9995C41.6283 21.9843 41.6283 21.9687 41.6283 21.9535C41.6147 20.2245 40.6547 18.7196 39.238 17.9296Z'
            fill='white'
          />
        </svg>
      );
    case 'basket':
      return (
        <div className='header__icon-basket'>
          <svg
            width='25'
            height='26'
            viewBox='0 0 25 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse
              cx='11.0031'
              cy='23.2385'
              rx='2.05196'
              ry='2.05196'
              fill='#F9E505'
            />
            <ellipse
              cx='17.844'
              cy='23.2385'
              rx='2.05196'
              ry='2.05196'
              fill='#F9E505'
            />
            <path
              d='M1.73926 1.66211C3.81823 2.70159 4.84829 3.61032 4.84829 6.13911M4.84829 6.13911C4.84829 16.3989 7.58424 18.4509 14.4241 18.4509C21.264 18.4509 23.9999 16.3989 23.9999 8.19107C23.9999 7.03917 23.3159 6.13911 21.9479 6.13911C20.58 6.13911 9.40488 6.13911 4.84829 6.13911Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'compare':
      return (
        <div className='header__icon-compare'>
          <svg
            width='25'
            height='22'
            viewBox='0 0 25 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.65927 5.77679L19.3963 1.58794'
              stroke='#F9E505'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <circle
              cx='12.004'
              cy='3.40521'
              r='2'
              transform='rotate(-6.38769 12.004 3.40521)'
              fill='#F9E505'
            />
            <path
              d='M9 14.4048L5 7.40479L1 14.4048'
              stroke='#F9E505'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M23.167 10.4048L19.167 3.40479L15.167 10.4048'
              stroke='#F9E505'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10 16.4048H10.65C10.65 16.0458 10.359 15.7548 10 15.7548V16.4048ZM5.5 20.4048V19.7548V20.4048ZM1 16.4048L1 15.7548C0.641015 15.7548 0.35 16.0458 0.35 16.4048L1 16.4048ZM9.35 16.4048C9.35 16.8333 9.25516 17.2599 9.06829 17.661L10.2466 18.2101C10.512 17.6405 10.65 17.0268 10.65 16.4048H9.35ZM9.06829 17.661C8.88127 18.0623 8.60469 18.4322 8.25014 18.7474L9.11382 19.719C9.595 19.2913 9.98135 18.7793 10.2466 18.2101L9.06829 17.661ZM8.25014 18.7474C7.89546 19.0627 7.47037 19.3162 6.99749 19.4903L7.44666 20.7103C8.06571 20.4823 8.63278 20.1466 9.11382 19.719L8.25014 18.7474ZM6.99749 19.4903C6.52459 19.6645 6.01554 19.7548 5.5 19.7548V21.0548C6.16636 21.0548 6.82763 20.9382 7.44666 20.7103L6.99749 19.4903ZM5.5 19.7548C4.98446 19.7548 4.47541 19.6645 4.00251 19.4903L3.55334 20.7103C4.17237 20.9382 4.83364 21.0548 5.5 21.0548V19.7548ZM4.00251 19.4903C3.52963 19.3162 3.10454 19.0627 2.74986 18.7474L1.88618 19.719C2.36722 20.1466 2.93429 20.4823 3.55334 20.7103L4.00251 19.4903ZM2.74986 18.7474C2.39531 18.4322 2.11873 18.0623 1.93171 17.661L0.75337 18.2101C1.01865 18.7793 1.405 19.2913 1.88618 19.719L2.74986 18.7474ZM1.93171 17.661C1.74484 17.2599 1.65 16.8333 1.65 16.4048L0.35 16.4048C0.35 17.0268 0.487954 17.6405 0.75337 18.2101L1.93171 17.661ZM1 17.0548L2.08896 17.0548L2.08896 15.7548L1 15.7548L1 17.0548ZM8.91104 17.0548H10V15.7548H8.91104V17.0548ZM1 17.0548L10 17.0548V15.7548L1 15.7548L1 17.0548Z'
              fill='#F9E505'
            />
            <path
              d='M24 13.4048H24.65C24.65 13.0458 24.359 12.7548 24 12.7548V13.4048ZM19.5 17.4048V16.7548V17.4048ZM15 13.4048L15 12.7548C14.641 12.7548 14.35 13.0458 14.35 13.4048L15 13.4048ZM23.35 13.4048C23.35 13.8333 23.2552 14.2599 23.0683 14.661L24.2466 15.2101C24.512 14.6405 24.65 14.0268 24.65 13.4048H23.35ZM23.0683 14.661C22.8813 15.0623 22.6047 15.4322 22.2501 15.7474L23.1138 16.719C23.595 16.2913 23.9814 15.7793 24.2466 15.2101L23.0683 14.661ZM22.2501 15.7474C21.8955 16.0627 21.4704 16.3162 20.9975 16.4903L21.4467 17.7103C22.0657 17.4823 22.6328 17.1466 23.1138 16.719L22.2501 15.7474ZM20.9975 16.4903C20.5246 16.6645 20.0155 16.7548 19.5 16.7548V18.0548C20.1664 18.0548 20.8276 17.9382 21.4467 17.7103L20.9975 16.4903ZM19.5 16.7548C18.9845 16.7548 18.4754 16.6645 18.0025 16.4903L17.5533 17.7103C18.1724 17.9382 18.8336 18.0548 19.5 18.0548V16.7548ZM18.0025 16.4903C17.5296 16.3162 17.1045 16.0627 16.7499 15.7474L15.8862 16.719C16.3672 17.1466 16.9343 17.4823 17.5533 17.7103L18.0025 16.4903ZM16.7499 15.7474C16.3953 15.4322 16.1187 15.0623 15.9317 14.661L14.7534 15.2101C15.0186 15.7793 15.405 16.2913 15.8862 16.719L16.7499 15.7474ZM15.9317 14.661C15.7448 14.2599 15.65 13.8333 15.65 13.4048L14.35 13.4048C14.35 14.0268 14.488 14.6405 14.7534 15.2101L15.9317 14.661ZM15 14.0548L16.089 14.0548L16.089 12.7548L15 12.7548L15 14.0548ZM22.911 14.0548H24V12.7548H22.911V14.0548ZM15 14.0548L24 14.0548V12.7548L15 12.7548L15 14.0548Z'
              fill='#F9E505'
            />
          </svg>
          {children}
        </div>
      );
    case 'contacts':
      return (
        <div className='header__icon-contacts'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 3.44444C1 2.09442 2.09442 1 3.44444 1H7.45241C7.97849 1 8.44555 1.33664 8.61191 1.83572L10.4426 7.3277C10.6349 7.90473 10.3737 8.53538 9.82966 8.80739L7.07079 10.1868C8.41797 13.1748 10.8252 15.582 13.8132 16.9292L15.1926 14.1703C15.4646 13.6263 16.0953 13.3651 16.6723 13.5574L22.1643 15.3881C22.6634 15.5545 23 16.0215 23 16.5476V20.5556C23 21.9056 21.9056 23 20.5556 23H19.3333C9.20811 23 1 14.7919 1 4.66667V3.44444Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
      );
    case 'likes':
      return (
        <div className='header__icon-likes'>
          <svg
            width='24'
            height='22'
            viewBox='0 0 24 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.9776 20.3865C12.3795 20.7798 11.6205 20.7798 11.0224 20.3865C8.32916 18.6155 1 13.2166 1 6.9091C1.00022 5.54334 1.45832 4.21982 2.2964 3.16355C3.13448 2.10728 4.30082 1.38347 5.59711 1.11517C6.8934 0.846872 8.23963 1.05065 9.40692 1.69186C10.5742 2.33308 11.4905 3.37214 12 4.63239C12 4.63239 12 4.63239 12 4.6324V4.6324C12 4.6324 12 4.63239 12 4.63239C12.5095 3.37214 13.4258 2.33308 14.5931 1.69187C15.7604 1.05065 17.1066 0.846873 18.4029 1.11517C19.6992 1.38347 20.8655 2.10728 21.7036 3.16355C22.5417 4.21982 22.9998 5.54334 23 6.9091C23 13.2166 15.6708 18.6155 12.9776 20.3865Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'personal':
      return (
        <div className='header__icon-personal'>
          <svg
            width='23'
            height='23'
            viewBox='0 0 23 23'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11.5 11C14.5376 11 17 8.76142 17 6C17 3.23858 14.5376 1 11.5 1C8.46243 1 6 3.23858 6 6C6 8.76142 8.46243 11 11.5 11Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeMiterlimit='10'
            />
            <path
              d='M1 21.9997C2.06455 19.2633 3.59526 16.991 5.43836 15.4113C7.28145 13.8316 9.37202 13 11.5001 13C13.6281 13 15.7187 13.8317 17.5617 15.4115C19.4048 16.9913 20.9355 19.2635 22 22'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M1 22H22'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'catalog':
      return (
        <div className='header__icon-catalog'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 3.75C1 2.23122 2.23122 1 3.75 1H6.5C8.01878 1 9.25 2.23122 9.25 3.75V6.5C9.25 8.01878 8.01878 9.25 6.5 9.25H3.75C2.23122 9.25 1 8.01878 1 6.5V3.75Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.75 3.75C14.75 2.23122 15.9812 1 17.5 1H20.25C21.7688 1 23 2.23122 23 3.75V6.5C23 8.01878 21.7688 9.25 20.25 9.25H17.5C15.9812 9.25 14.75 8.01878 14.75 6.5V3.75Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M1 17.5C1 15.9812 2.23122 14.75 3.75 14.75H6.5C8.01878 14.75 9.25 15.9812 9.25 17.5V20.25C9.25 21.7688 8.01878 23 6.5 23H3.75C2.23122 23 1 21.7688 1 20.25V17.5Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.75 17.5C14.75 15.9812 15.9812 14.75 17.5 14.75H20.25C21.7688 14.75 23 15.9812 23 17.5V20.25C23 21.7688 21.7688 23 20.25 23H17.5C15.9812 23 14.75 21.7688 14.75 20.25V17.5Z'
              stroke='#F9E505'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'audio':
      return (
        <div className={className}>
          <svg
            width='18'
            height='24'
            viewBox='0 0 18 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M17 10.9C17 15.1526 13.4183 18.6 9 18.6M9 18.6C4.58172 18.6 1 15.1526 1 10.9M9 18.6V23M9 23H4.42857M9 23H13.5714M9 14.2C7.10645 14.2 5.57143 12.7225 5.57143 10.9V4.3C5.57143 2.47746 7.10645 1 9 1C10.8935 1 12.4286 2.47746 12.4286 4.3V10.9C12.4286 12.7225 10.8935 14.2 9 14.2Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'language':
      return (
        <div className={className}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.06714 10.7778H3.44444C4.79447 10.7778 5.88889 11.8722 5.88889 13.2222V14.4444C5.88889 15.7945 6.9833 16.8889 8.33333 16.8889C9.68336 16.8889 10.7778 17.9833 10.7778 19.3333V22.9329M7.11111 2.14341V4.05556C7.11111 5.74309 8.47913 7.11111 10.1667 7.11111H10.7778C12.1278 7.11111 13.2222 8.20553 13.2222 9.55556C13.2222 10.9056 14.3166 12 15.6667 12C17.0167 12 18.1111 10.9056 18.1111 9.55556C18.1111 8.20553 19.2055 7.11111 20.5556 7.11111L21.8566 7.11111M15.6667 22.3741V19.3333C15.6667 17.9833 16.7611 16.8889 18.1111 16.8889H21.8566M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'city':
      return (
        <div className={className}>
          <svg
            width='22'
            height='24'
            viewBox='0 0 22 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M18.0711 17.2635C16.8064 18.4683 14.0511 21.0932 12.3778 22.6874C11.6053 23.4233 10.3945 23.4232 9.62206 22.6873C7.97686 21.1199 5.27869 18.5494 3.92893 17.2635C0.0236892 13.543 0.0236892 7.51086 3.92893 3.79037C7.83418 0.0698773 14.1658 0.0698773 18.0711 3.79037C21.9763 7.51086 21.9763 13.543 18.0711 17.2635Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.75 10.5269C14.75 12.5 13.0711 14.0995 11 14.0995C8.92893 14.0995 7.25 12.5 7.25 10.5269C7.25 8.55382 8.92893 6.95432 11 6.95432C13.0711 6.95432 14.75 8.55382 14.75 10.5269Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'incontacts':
      return (
        <div className={className}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M23 1L15.6667 8.33333M15.6667 8.33333V2.22222M15.6667 8.33333H21.7778M3.44444 1C2.09442 1 1 2.09442 1 3.44444V4.66667C1 14.7919 9.20811 23 19.3333 23H20.5556C21.9056 23 23 21.9056 23 20.5556V16.5476C23 16.0215 22.6634 15.5545 22.1643 15.3881L16.6723 13.5574C16.0953 13.3651 15.4646 13.6263 15.1926 14.1703L13.8132 16.9292C10.8252 15.582 8.41797 13.1748 7.07079 10.1868L9.82966 8.80739C10.3737 8.53538 10.6349 7.90473 10.4426 7.3277L8.61191 1.83572C8.44555 1.33664 7.97849 1 7.45241 1H3.44444Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'compare-b':
      return (
        <div className={className}>
          <svg
            width='25'
            height='22'
            viewBox='0 0 25 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M4.65976 5.77728L19.3967 1.58843'
              stroke='#2B2A29'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <circle
              cx='12.004'
              cy='3.4057'
              r='2'
              transform='rotate(-6.38769 12.004 3.4057)'
              fill='#2B2A29'
            />
            <path
              d='M9 14.4043L5 7.4043L1 14.4043'
              stroke='#2B2A29'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M23.167 10.4043L19.167 3.4043L15.167 10.4043'
              stroke='#2B2A29'
              strokeWidth='1.3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M10 16.4043H10.65C10.65 16.0453 10.359 15.7543 10 15.7543V16.4043ZM5.5 20.4043V19.7543V20.4043ZM1 16.4043L1 15.7543C0.641015 15.7543 0.35 16.0453 0.35 16.4043L1 16.4043ZM9.35 16.4043C9.35 16.8329 9.25516 17.2595 9.06829 17.6605L10.2466 18.2096C10.512 17.64 10.65 17.0263 10.65 16.4043H9.35ZM9.06829 17.6605C8.88127 18.0618 8.60469 18.4318 8.25014 18.7469L9.11382 19.7185C9.595 19.2908 9.98135 18.7789 10.2466 18.2096L9.06829 17.6605ZM8.25014 18.7469C7.89546 19.0622 7.47037 19.3157 6.99749 19.4898L7.44666 20.7098C8.06571 20.4819 8.63278 20.1461 9.11382 19.7185L8.25014 18.7469ZM6.99749 19.4898C6.52459 19.664 6.01554 19.7543 5.5 19.7543V21.0543C6.16636 21.0543 6.82763 20.9377 7.44666 20.7098L6.99749 19.4898ZM5.5 19.7543C4.98446 19.7543 4.47541 19.664 4.00251 19.4898L3.55334 20.7098C4.17237 20.9377 4.83364 21.0543 5.5 21.0543V19.7543ZM4.00251 19.4898C3.52963 19.3157 3.10454 19.0622 2.74986 18.7469L1.88618 19.7185C2.36722 20.1461 2.93429 20.4819 3.55334 20.7098L4.00251 19.4898ZM2.74986 18.7469C2.39531 18.4318 2.11873 18.0618 1.93171 17.6605L0.75337 18.2096C1.01865 18.7789 1.405 19.2908 1.88618 19.7185L2.74986 18.7469ZM1.93171 17.6605C1.74484 17.2595 1.65 16.8329 1.65 16.4043L0.35 16.4043C0.35 17.0263 0.487954 17.64 0.75337 18.2096L1.93171 17.6605ZM1 17.0543L2.08896 17.0543L2.08896 15.7543L1 15.7543L1 17.0543ZM8.91104 17.0543H10V15.7543H8.91104V17.0543ZM1 17.0543L10 17.0543V15.7543L1 15.7543L1 17.0543Z'
              fill='#2B2A29'
            />
            <path
              d='M24 13.4043H24.65C24.65 13.0453 24.359 12.7543 24 12.7543V13.4043ZM19.5 17.4043V16.7543V17.4043ZM15 13.4043L15 12.7543C14.641 12.7543 14.35 13.0453 14.35 13.4043L15 13.4043ZM23.35 13.4043C23.35 13.8329 23.2552 14.2595 23.0683 14.6605L24.2466 15.2096C24.512 14.64 24.65 14.0263 24.65 13.4043H23.35ZM23.0683 14.6605C22.8813 15.0618 22.6047 15.4318 22.2501 15.7469L23.1138 16.7185C23.595 16.2908 23.9814 15.7789 24.2466 15.2096L23.0683 14.6605ZM22.2501 15.7469C21.8955 16.0622 21.4704 16.3157 20.9975 16.4898L21.4467 17.7098C22.0657 17.4819 22.6328 17.1461 23.1138 16.7185L22.2501 15.7469ZM20.9975 16.4898C20.5246 16.664 20.0155 16.7543 19.5 16.7543V18.0543C20.1664 18.0543 20.8276 17.9377 21.4467 17.7098L20.9975 16.4898ZM19.5 16.7543C18.9845 16.7543 18.4754 16.664 18.0025 16.4898L17.5533 17.7098C18.1724 17.9377 18.8336 18.0543 19.5 18.0543V16.7543ZM18.0025 16.4898C17.5296 16.3157 17.1045 16.0622 16.7499 15.7469L15.8862 16.7185C16.3672 17.1461 16.9343 17.4819 17.5533 17.7098L18.0025 16.4898ZM16.7499 15.7469C16.3953 15.4318 16.1187 15.0618 15.9317 14.6605L14.7534 15.2096C15.0186 15.7789 15.405 16.2908 15.8862 16.7185L16.7499 15.7469ZM15.9317 14.6605C15.7448 14.2595 15.65 13.8329 15.65 13.4043L14.35 13.4043C14.35 14.0263 14.488 14.64 14.7534 15.2096L15.9317 14.6605ZM15 14.0543L16.089 14.0543L16.089 12.7543L15 12.7543L15 14.0543ZM22.911 14.0543H24V12.7543H22.911V14.0543ZM15 14.0543L24 14.0543V12.7543L15 12.7543L15 14.0543Z'
              fill='#2B2A29'
            />
          </svg>
          {children}
        </div>
      );
    case 'contacts-b':
      return (
        <div className={className}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 3.44444C1 2.09442 2.09442 1 3.44444 1H7.45241C7.97849 1 8.44555 1.33664 8.61191 1.83572L10.4426 7.3277C10.6349 7.90473 10.3737 8.53538 9.82966 8.80739L7.07079 10.1868C8.41797 13.1748 10.8252 15.582 13.8132 16.9292L15.1926 14.1703C15.4646 13.6263 16.0953 13.3651 16.6723 13.5574L22.1643 15.3881C22.6634 15.5545 23 16.0215 23 16.5476V20.5556C23 21.9056 21.9056 23 20.5556 23H19.3333C9.20811 23 1 14.7919 1 4.66667V3.44444Z'
              stroke='#111827'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'likes-b':
      return (
        <div className={className}>
          <svg
            width='24'
            height='22'
            viewBox='0 0 24 22'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12.9776 20.3865C12.3795 20.7798 11.6205 20.7798 11.0224 20.3865C8.32916 18.6155 1 13.2166 1 6.9091C1.00022 5.54334 1.45832 4.21982 2.2964 3.16355C3.13448 2.10728 4.30082 1.38347 5.59711 1.11517C6.8934 0.846872 8.23963 1.05065 9.40692 1.69186C10.5742 2.33308 11.4905 3.37214 12 4.63239C12 4.63239 12 4.63239 12 4.6324V4.6324C12 4.6324 12 4.63239 12 4.63239C12.5095 3.37214 13.4258 2.33308 14.5931 1.69187C15.7604 1.05065 17.1066 0.846873 18.4029 1.11517C19.6992 1.38347 20.8655 2.10728 21.7036 3.16355C22.5417 4.21982 22.9998 5.54334 23 6.9091C23 13.2166 15.6708 18.6155 12.9776 20.3865Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'personal-b':
      return (
        <div className={className}>
          <svg
            width='22'
            height='23'
            viewBox='0 0 22 23'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M11.2796 0.121094C9.70903 0.121094 8.20274 0.745019 7.09214 1.85561C5.98155 2.96621 5.35762 4.4725 5.35762 6.04311C5.35762 7.61373 5.98155 9.12002 7.09214 10.2306C8.20274 11.3412 9.70903 11.9651 11.2796 11.9651C12.8503 11.9651 14.3565 11.3412 15.4671 10.2306C16.5777 9.12002 17.2017 7.61373 17.2017 6.04311C17.2017 4.4725 16.5777 2.96621 15.4671 1.85561C14.3565 0.745019 12.8503 0.121094 11.2796 0.121094ZM8.1528 2.91627C8.98209 2.08698 10.1069 1.62109 11.2796 1.62109C12.4524 1.62109 13.5772 2.08698 14.4065 2.91627C15.2358 3.74556 15.7017 4.87032 15.7017 6.04311C15.7017 7.21591 15.2358 8.34066 14.4065 9.16995C13.5772 9.99924 12.4524 10.4651 11.2796 10.4651C10.1069 10.4651 8.98209 9.99924 8.1528 9.16995C7.32351 8.34066 6.85762 7.21591 6.85762 6.04311C6.85762 4.87032 7.32351 3.74556 8.1528 2.91627ZM11.2792 13.6562C8.93532 13.6562 6.65165 14.3986 4.75578 15.7769C2.85991 17.1551 1.44928 19.0984 0.726232 21.328C0.598456 21.722 0.814283 22.145 1.2083 22.2728C1.60231 22.4006 2.0253 22.1847 2.15308 21.7907C2.77836 19.8626 3.99827 18.182 5.6378 16.9901C7.27733 15.7982 9.25224 15.1562 11.2792 15.1562C13.3062 15.1562 15.2811 15.7982 16.9207 16.9901C18.5602 18.182 19.7801 19.8626 20.4054 21.7907C20.5331 22.1847 20.9561 22.4006 21.3502 22.2728C21.7442 22.145 21.96 21.722 21.8322 21.328C21.1092 19.0984 19.6985 17.1551 17.8027 15.7769C15.9068 14.3986 13.6231 13.6562 11.2792 13.6562Z'
              fill='#2B2A29'
            />
          </svg>
          {children}
        </div>
      );

    case 'catalog-b':
      return (
        <div className={className}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 3.75C1 2.23122 2.23122 1 3.75 1H6.5C8.01878 1 9.25 2.23122 9.25 3.75V6.5C9.25 8.01878 8.01878 9.25 6.5 9.25H3.75C2.23122 9.25 1 8.01878 1 6.5V3.75Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.75 3.75C14.75 2.23122 15.9812 1 17.5 1H20.25C21.7688 1 23 2.23122 23 3.75V6.5C23 8.01878 21.7688 9.25 20.25 9.25H17.5C15.9812 9.25 14.75 8.01878 14.75 6.5V3.75Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M1 17.5C1 15.9812 2.23122 14.75 3.75 14.75H6.5C8.01878 14.75 9.25 15.9812 9.25 17.5V20.25C9.25 21.7688 8.01878 23 6.5 23H3.75C2.23122 23 1 21.7688 1 20.25V17.5Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.75 17.5C14.75 15.9812 15.9812 14.75 17.5 14.75H20.25C21.7688 14.75 23 15.9812 23 17.5V20.25C23 21.7688 21.7688 23 20.25 23H17.5C15.9812 23 14.75 21.7688 14.75 20.25V17.5Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'basket-b':
      return (
        <div className={className}>
          <svg
            width='25'
            height='26'
            viewBox='0 0 25 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <ellipse
              cx='11.0036'
              cy='23.2395'
              rx='2.05196'
              ry='2.05196'
              fill='#2B2A29'
            />
            <ellipse
              cx='17.844'
              cy='23.2395'
              rx='2.05196'
              ry='2.05196'
              fill='#2B2A29'
            />
            <path
              d='M1.73926 1.66211C3.81823 2.70159 4.84829 3.61032 4.84829 6.13911M4.84829 6.13911C4.84829 16.3989 7.58424 18.4509 14.4241 18.4509C21.264 18.4509 23.9999 16.3989 23.9999 8.19107C23.9999 7.03917 23.3159 6.13911 21.9479 6.13911C20.58 6.13911 9.40488 6.13911 4.84829 6.13911Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    default:
      return <svg></svg>;
  }
};
