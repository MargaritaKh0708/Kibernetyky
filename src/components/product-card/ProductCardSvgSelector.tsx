import defaultImg from 'assets/icons/goods-card-icons/default.png';

interface IProductCardSvgSelector {
  id: string;
  children?: React.ReactChild | React.ReactNode;
  className?: string;
}

export const ProductCardSvgSelector: React.FC<IProductCardSvgSelector> = ({
  id,
  children,
  className,
}) => {
  switch (id) {
    case 'available':
      return (
        <div className='available'>
          <svg
            width='10'
            height='8'
            viewBox='0 0 10 8'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0.916992 4.5835L3.25033 6.91683L9.08366 1.0835'
              stroke='#05B263'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'basket':
      return (
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
            fill='#2B2A29'
          />
          <ellipse
            cx='17.844'
            cy='23.2385'
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
      );
    case 'full-basket':
      return (
        <svg
          width='29'
          height='29'
          viewBox='0 0 29 29'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <ellipse
            cx='11.0036'
            cy='26.2395'
            rx='2.05196'
            ry='2.05196'
            fill='#2B2A29'
          />
          <ellipse
            cx='17.844'
            cy='26.2395'
            rx='2.05196'
            ry='2.05196'
            fill='#2B2A29'
          />
          <path
            d='M1.73926 4.66211C3.81823 5.70159 4.84829 6.61032 4.84829 9.13911M4.84829 9.13911C4.84829 19.3989 7.58424 21.4509 14.4241 21.4509C21.264 21.4509 23.9999 19.3989 23.9999 11.1911C23.9999 10.0392 23.3159 9.13911 21.9479 9.13911C20.58 9.13911 9.40488 9.13911 4.84829 9.13911Z'
            stroke='#2B2A29'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M27 8C27 11.3137 24.3137 14 21 14C17.6863 14 15 11.3137 15 8C15 4.68629 17.6863 2 21 2C24.3137 2 27 4.68629 27 8Z'
            fill='#05B263'
          />
          <path
            d='M19 8L20.3333 9.33333L23 6.66667M27 8C27 11.3137 24.3137 14 21 14C17.6863 14 15 11.3137 15 8C15 4.68629 17.6863 2 21 2C24.3137 2 27 4.68629 27 8Z'
            stroke='white'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'coin':
      return (
        <div className='coin'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8 9.5C11.5899 9.5 14.5 8.15685 14.5 6.5C14.5 4.84315 11.5899 3.5 8 3.5C4.41015 3.5 1.5 4.84315 1.5 6.5C1.5 8.15685 4.41015 9.5 8 9.5Z'
              stroke='#F9E505'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M8 9.5V12.5'
              stroke='#F9E505'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M1.5 6.5V9.5C1.5 11 4 12.5 8 12.5C12 12.5 14.5 11 14.5 9.5V6.5'
              stroke='#F9E505'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12 8.88086V11.8809'
              stroke='#F9E505'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4 8.88086V11.8809'
              stroke='#F9E505'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          {children}
        </div>
      );
    case 'compare':
      return (
        <div className='compare'>
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
    case 'none':
      return (
        <div>
          <svg
            width='10'
            height='10'
            viewBox='0 0 10 10'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1.5 8.5L8.5 1.5M1.5 1.5L8.5 8.5'
              stroke='#F54503'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'likes':
      return (
        <svg
          width='24'
          height='22'
          viewBox='0 0 24 22'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M12.9776 20.3865C12.3795 20.7798 11.6205 20.7798 11.0224 20.3865C8.32916 18.6155 1 13.2166 1 6.9091C1.00022 5.54334 1.45832 4.21982 2.2964 3.16355C3.13448 2.10728 4.30082 1.38347 5.59711 1.11517C6.8934 0.846872 8.23963 1.05065 9.40692 1.69186C10.5742 2.33308 11.4905 3.37214 12 4.63239C12 4.63239 12 4.63239 12 4.6324V4.6324C12 4.6324 12 4.63239 12 4.63239C12.5095 3.37214 13.4258 2.33308 14.5931 1.69187C15.7604 1.05065 17.1066 0.846873 18.4029 1.11517C19.6992 1.38347 20.8655 2.10728 21.7036 3.16355C22.5417 4.21982 22.9998 5.54334 23 6.9091C23 13.2166 15.6708 18.6155 12.9776 20.3865Z'
            stroke='#F54503'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );
    case 'mono':
      return (
        <div className='mono'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.65641 12.8449C3.60481 12.8321 3.55294 12.8199 3.50155 12.806C3.21373 12.7268 2.96223 12.5838 2.75445 12.3688C2.39599 11.9977 2.20309 11.5544 2.18642 11.0364C2.18038 10.8418 2.20285 10.6504 2.24851 10.4613C2.3016 10.2393 2.38458 10.0295 2.49319 9.82923C2.66662 9.50957 2.8922 9.23154 3.159 8.98562C3.36008 8.80028 3.57918 8.63895 3.81395 8.49898C4.03367 8.36781 4.23886 8.21637 4.435 8.05232C4.68186 7.84545 4.91187 7.62057 5.13988 7.39356C5.34145 7.19283 5.54054 6.99018 5.75068 6.79884C5.90879 6.65443 6.07285 6.51746 6.25001 6.39709C6.47162 6.24676 6.70784 6.12802 6.97169 6.07055C7.16966 6.02734 7.36855 6.02105 7.56887 6.05206C7.79541 6.08665 8.01436 6.14831 8.22431 6.24083C8.54558 6.38273 8.80765 6.59781 9.01614 6.88037C9.15864 7.07437 9.27102 7.28522 9.37165 7.50293C9.47842 7.73378 9.57222 7.97007 9.67062 8.20465C9.78161 8.46882 9.89815 8.73011 10.0355 8.98196C10.1722 9.23297 10.3301 9.47015 10.5089 9.69316C10.7251 9.96295 10.9081 10.2531 11.052 10.568C11.1744 10.8379 11.2637 11.1177 11.3087 11.411C11.3438 11.6395 11.3508 11.8681 11.3223 12.098C11.2792 12.4472 11.1613 12.7675 10.9499 13.0512C10.7541 13.3141 10.5035 13.5087 10.2076 13.6462C9.99005 13.7473 9.763 13.8132 9.52283 13.8297C9.43777 13.8359 9.35244 13.836 9.26741 13.8293C9.25555 13.8284 9.24395 13.8286 9.23242 13.8284C9.22039 13.8327 9.20912 13.8259 9.19735 13.8253C9.18762 13.8249 9.17831 13.8188 9.16818 13.8233C9.09681 13.8107 9.02515 13.7981 8.95378 13.7855C8.94638 13.7778 8.93598 13.7804 8.92712 13.7777C8.91877 13.7762 8.91086 13.7748 8.90265 13.7734C8.89589 13.7722 8.88855 13.7709 8.88193 13.7697C8.70009 13.7315 8.52926 13.662 8.35952 13.5897C8.07201 13.4667 7.79429 13.3226 7.50944 13.1938C7.27868 13.0898 7.04387 12.9969 6.80095 12.9247C6.63262 12.8747 6.46076 12.8421 6.28791 12.8177C6.14968 12.7981 6.00952 12.7953 5.86995 12.7967C5.59429 12.8 5.32014 12.8259 5.04592 12.8514C4.75578 12.8788 4.46571 12.9058 4.17419 12.9023C4.05565 12.9005 3.93742 12.8962 3.82049 12.8744C3.79651 12.8699 3.77199 12.8693 3.74777 12.8644C3.71714 12.8572 3.68567 12.8573 3.65641 12.8449ZM10.778 2.10099C11.1554 2.21545 11.4153 2.46392 11.5857 2.81356C11.7025 3.05331 11.7574 3.30879 11.7726 3.57423C11.7853 3.80277 11.7654 4.02899 11.7184 4.25309C11.6318 4.66484 11.4655 5.0411 11.2204 5.38264C11.0506 5.61933 10.8492 5.82425 10.6094 5.98937C10.3958 6.13606 10.1647 6.24261 9.90874 6.28927C9.72893 6.32199 9.54995 6.32227 9.37196 6.27988C9.06375 6.20693 8.8213 6.03623 8.63734 5.78031C8.4806 5.56193 8.39096 5.31551 8.34527 5.05214C8.31335 4.86797 8.30583 4.6826 8.31772 4.49648C8.32568 4.36889 8.34216 4.24265 8.36827 4.1181C8.42961 3.82406 8.53333 3.54552 8.67844 3.28291C8.83264 3.00331 9.02519 2.75442 9.2653 2.54382C9.4673 2.36668 9.6916 2.22635 9.94657 2.13844C10.1339 2.07373 10.3265 2.04445 10.5249 2.05667C10.6338 2.06441 10.6767 2.07282 10.778 2.10099ZM1.63233 5.15117C1.65919 5.0342 1.70077 4.92206 1.75181 4.81352C1.85073 4.60258 1.98431 4.41798 2.16747 4.27203C2.37215 4.1092 2.6051 4.02157 2.86666 4.01577C3.07903 4.01126 3.27841 4.06442 3.46658 4.16098C3.68288 4.27217 3.86395 4.42833 4.01616 4.6169C4.25278 4.90903 4.40039 5.24319 4.4788 5.60964C4.51975 5.8015 4.53727 5.99578 4.53133 6.19187C4.5285 6.28704 4.51851 6.38154 4.50384 6.47567C4.47576 6.65431 4.42702 6.82635 4.35261 6.99088C4.25337 7.21039 4.11762 7.40219 3.92848 7.55349C3.71138 7.72707 3.46335 7.81516 3.18535 7.81152C2.98137 7.80888 2.79023 7.75272 2.61032 7.65731C2.36849 7.52852 2.17391 7.34632 2.01297 7.12646C1.85589 6.91248 1.74281 6.67621 1.66696 6.42225C1.59263 6.17317 1.55603 5.91795 1.56265 5.6574C1.56395 5.61136 1.56639 5.56552 1.56824 5.51972C1.5671 5.49839 1.57266 5.4778 1.57136 5.45659C1.57056 5.44767 1.57328 5.43982 1.5744 5.43094C1.57472 5.41984 1.58165 5.40916 1.57694 5.39717C1.58661 5.34233 1.59625 5.28764 1.60594 5.23267C1.61881 5.21946 1.61672 5.20183 1.6207 5.18602C1.62367 5.1742 1.62289 5.16096 1.63233 5.15117ZM4.62391 3.00246C4.68279 2.67614 4.78105 2.3898 4.93995 2.1256C5.0599 1.92581 5.20727 1.74974 5.39414 1.60876C5.59547 1.4565 5.81952 1.36135 6.07282 1.34263C6.32617 1.32363 6.56136 1.38325 6.78063 1.50955C6.97375 1.62097 7.1329 1.77103 7.26643 1.94857C7.47972 2.23167 7.61178 2.55134 7.68519 2.89652C7.7318 3.11601 7.75143 3.33789 7.74545 3.56195C7.74204 3.68901 7.73068 3.8157 7.71111 3.94184C7.68595 4.10048 7.64824 4.2563 7.59467 4.40784C7.48303 4.72456 7.31908 5.00899 7.07486 5.24296C6.92302 5.38804 6.75007 5.49963 6.55011 5.56674C6.32667 5.64161 6.10022 5.64944 5.87242 5.59082C5.66645 5.53799 5.48598 5.43564 5.32523 5.29719C5.1155 5.11678 4.95892 4.89576 4.84 4.64714C4.69902 4.35194 4.6215 4.03937 4.59499 3.71346C4.58043 3.53518 4.58249 3.35686 4.60053 3.17882C4.60698 3.11196 4.61422 3.04479 4.62391 3.00246ZM13.8007 7.49305C13.7985 7.50561 13.7963 7.51831 13.794 7.531C13.7241 7.84333 13.5878 8.1249 13.4023 8.38365C13.2564 8.58632 13.0846 8.76417 12.8844 8.91336C12.6274 9.10522 12.3447 9.2403 12.0271 9.2953C11.8369 9.32827 11.6471 9.32754 11.4586 9.28343C11.1804 9.21801 10.953 9.07259 10.7806 8.844C10.6382 8.65508 10.5603 8.43988 10.5283 8.20749C10.4993 7.99914 10.5094 7.79142 10.5523 7.58564C10.6465 7.13313 10.8629 6.74487 11.1781 6.41019C11.2846 6.29684 11.4017 6.19549 11.5288 6.1063C11.7899 5.92366 12.0738 5.79786 12.3914 5.75418C12.572 5.72978 12.7511 5.73562 12.9276 5.78118C13.1973 5.8506 13.4174 5.99639 13.5841 6.22083C13.7344 6.42336 13.8111 6.65425 13.8381 6.90302C13.8531 7.04046 13.8516 7.17813 13.8321 7.31528C13.8298 7.32798 13.8276 7.34082 13.8253 7.35352C13.8157 7.39973 13.8076 7.44622 13.8007 7.49305Z'
              fill='black'
            />
          </svg>
          {children}
        </div>
      );
    case 'zero-percent':
      return (
        <div className='zero-percent'>
          <svg
            width='17'
            height='15'
            viewBox='0 0 17 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M8.9209 6.50293V8.65625C8.9209 9.59375 8.83301 10.4111 8.65723 11.1084C8.48145 11.7998 8.22363 12.374 7.88379 12.8311C7.5498 13.2822 7.13965 13.6191 6.65332 13.8418C6.17285 14.0645 5.62207 14.1758 5.00098 14.1758C4.50879 14.1758 4.05762 14.1055 3.64746 13.9648C3.2373 13.8242 2.87109 13.6104 2.54883 13.3232C2.23242 13.0303 1.96289 12.6641 1.74023 12.2246C1.51758 11.7852 1.34766 11.2695 1.23047 10.6777C1.11328 10.0801 1.05469 9.40625 1.05469 8.65625V6.50293C1.05469 5.55957 1.14258 4.74512 1.31836 4.05957C1.5 3.37402 1.75781 2.80566 2.0918 2.35449C2.43164 1.90332 2.84473 1.56934 3.33105 1.35254C3.81738 1.12988 4.36816 1.01855 4.9834 1.01855C5.47559 1.01855 5.92676 1.0918 6.33691 1.23828C6.75293 1.37891 7.11914 1.58984 7.43555 1.87109C7.75781 2.15234 8.02734 2.5127 8.24414 2.95215C8.4668 3.38574 8.63379 3.89844 8.74512 4.49023C8.8623 5.08203 8.9209 5.75293 8.9209 6.50293ZM7.875 8.7793V6.37109C7.875 5.79102 7.83398 5.26367 7.75195 4.78906C7.67578 4.31445 7.56152 3.89844 7.40918 3.54102C7.25684 3.18359 7.06348 2.88477 6.8291 2.64453C6.60059 2.4043 6.33105 2.22559 6.02051 2.1084C5.71582 1.98535 5.37012 1.92383 4.9834 1.92383C4.50879 1.92383 4.08984 2.02051 3.72656 2.21387C3.36914 2.40137 3.07031 2.68262 2.83008 3.05762C2.58984 3.42676 2.4082 3.88965 2.28516 4.44629C2.16797 5.00293 2.10938 5.64453 2.10938 6.37109V8.7793C2.10938 9.35352 2.14746 9.87793 2.22363 10.3525C2.2998 10.8213 2.41699 11.2373 2.5752 11.6006C2.7334 11.9639 2.92676 12.2715 3.15527 12.5234C3.38965 12.7695 3.65918 12.957 3.96387 13.0859C4.27441 13.209 4.62012 13.2705 5.00098 13.2705C5.4873 13.2705 5.90918 13.1738 6.2666 12.9805C6.62402 12.7812 6.92285 12.4912 7.16309 12.1104C7.40332 11.7236 7.58203 11.252 7.69922 10.6953C7.81641 10.1328 7.875 9.49414 7.875 8.7793Z'
              fill='#0AAF60'
            />
            <path
              d='M9.53711 2.63379V2.25781C9.53711 1.98763 9.59408 1.74186 9.70801 1.52051C9.82194 1.29915 9.98307 1.12174 10.1914 0.988281C10.3997 0.854818 10.6439 0.788086 10.9238 0.788086C11.2103 0.788086 11.4561 0.854818 11.6611 0.988281C11.8695 1.12174 12.0306 1.29915 12.1445 1.52051C12.2585 1.74186 12.3154 1.98763 12.3154 2.25781V2.63379C12.3154 2.89746 12.2585 3.13997 12.1445 3.36133C12.0339 3.58268 11.8743 3.76009 11.666 3.89355C11.4609 4.02702 11.2168 4.09375 10.9336 4.09375C10.6504 4.09375 10.403 4.02702 10.1914 3.89355C9.98307 3.76009 9.82194 3.58268 9.70801 3.36133C9.59408 3.13997 9.53711 2.89746 9.53711 2.63379ZM10.0059 2.25781V2.63379C10.0059 2.80632 10.0384 2.97233 10.1035 3.13184C10.1719 3.28809 10.2744 3.41667 10.4111 3.51758C10.5511 3.61849 10.7253 3.66895 10.9336 3.66895C11.1419 3.66895 11.3128 3.62012 11.4463 3.52246C11.5798 3.42155 11.679 3.29297 11.7441 3.13672C11.8125 2.97721 11.8467 2.80957 11.8467 2.63379V2.25781C11.8467 2.07878 11.8125 1.91113 11.7441 1.75488C11.679 1.59538 11.5781 1.46517 11.4414 1.36426C11.3047 1.26335 11.1322 1.21289 10.9238 1.21289C10.722 1.21289 10.5527 1.26335 10.416 1.36426C10.2793 1.46517 10.1768 1.59538 10.1084 1.75488C10.04 1.91113 10.0059 2.07878 10.0059 2.25781ZM13.1113 6.6377V6.25684C13.1113 5.98991 13.1683 5.74577 13.2822 5.52441C13.3962 5.30306 13.5573 5.12565 13.7656 4.99219C13.974 4.85872 14.2197 4.79199 14.5029 4.79199C14.7894 4.79199 15.0352 4.85872 15.2402 4.99219C15.4486 5.12565 15.6097 5.30306 15.7236 5.52441C15.8376 5.74577 15.8945 5.98991 15.8945 6.25684V6.6377C15.8945 6.90462 15.8376 7.14876 15.7236 7.37012C15.613 7.59147 15.4535 7.76888 15.2451 7.90234C15.04 8.03581 14.7959 8.10254 14.5127 8.10254C14.2262 8.10254 13.9788 8.03581 13.7705 7.90234C13.5622 7.76888 13.3994 7.59147 13.2822 7.37012C13.1683 7.14876 13.1113 6.90462 13.1113 6.6377ZM13.585 6.25684V6.6377C13.585 6.81348 13.6175 6.98112 13.6826 7.14062C13.751 7.29688 13.8535 7.42546 13.9902 7.52637C14.1302 7.62728 14.3044 7.67773 14.5127 7.67773C14.7178 7.67773 14.887 7.62891 15.0205 7.53125C15.1572 7.43034 15.2581 7.30013 15.3232 7.14062C15.3916 6.98112 15.4258 6.81348 15.4258 6.6377V6.25684C15.4258 6.07129 15.3916 5.90039 15.3232 5.74414C15.2581 5.58464 15.1572 5.45768 15.0205 5.36328C14.8838 5.26562 14.7113 5.2168 14.5029 5.2168C14.3011 5.2168 14.1302 5.26562 13.9902 5.36328C13.8535 5.45768 13.751 5.58464 13.6826 5.74414C13.6175 5.90039 13.585 6.07129 13.585 6.25684ZM14.5908 1.85254L11.1191 7.40918L10.7578 7.1748L14.2295 1.61816L14.5908 1.85254Z'
              fill='#0AAF60'
            />
          </svg>
          {children}
        </div>
      );
    case 'privat':
      return (
        <div className='privat'>
          <svg
            width='15'
            height='15'
            viewBox='0 0 15 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clipPath='url(#clip0_2695_100883)'>
              <path
                d='M5.01318 2.25255C6.0878 1.58106 7.34443 1.23241 8.62425 1.25068C9.904 1.26896 11.1494 1.65334 12.2031 2.35522C13.2566 3.0571 14.0711 4.04495 14.5433 5.19386C15.0156 6.34275 15.1245 7.60113 14.8562 8.80982C14.5881 10.0185 13.9547 11.1232 13.0364 11.9843C12.1181 12.8453 10.956 13.4241 9.69712 13.6473C8.43818 13.8705 7.13906 13.7281 5.96393 13.2383C4.78881 12.7484 3.79049 11.9329 3.09521 10.8951L8.52856 7.5L5.01318 2.25255Z'
                fill='#FFCF00'
              />
              <path
                d='M0.93285 10.3125C0.501472 9.60225 0.211853 8.8125 0.080525 7.98837C-0.0508019 7.16425 -0.0212649 6.32187 0.16745 5.50936C0.356164 4.69685 0.700363 3.9301 1.18039 3.2529C1.66041 2.57569 2.26687 2.00129 2.96513 1.5625L6.25 6.97113L0.93285 10.3125Z'
                fill='#00B000'
              />
            </g>
            <defs>
              <clipPath id='clip0_2695_100883'>
                <rect width='15' height='15' fill='white' />
              </clipPath>
            </defs>
          </svg>
          {children}
        </div>
      );
    case 'review':
      return (
        <div className='review'>
          <svg
            width='18'
            height='16'
            viewBox='0 0 18 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.66667 8.00016H5.675M9 8.00016H9.00833M12.3333 8.00016H12.3417M16.5 8.00016C16.5 11.6821 13.1421 14.6668 9 14.6668C7.71728 14.6668 6.50976 14.3806 5.45389 13.876L1.5 14.6668L2.66249 11.5669C1.9263 10.5354 1.5 9.31206 1.5 8.00016C1.5 4.31826 4.85786 1.3335 9 1.3335C13.1421 1.3335 16.5 4.31826 16.5 8.00016Z'
              stroke='#05B263'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          {children}
        </div>
      );
    case 'success':
      return (
        <div className='success'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z'
              fill='#05B263'
            />
            <path
              d='M6 8L7.33333 9.33333L10 6.66667M14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z'
              stroke='white'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'arrow-down':
      return (
        <div className='arrow-down'>
          <svg
            width='6'
            height='5'
            viewBox='0 0 6 5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M3.43301 4.25C3.24056 4.58333 2.75944 4.58333 2.56699 4.25L0.834936 1.25C0.642486 0.916667 0.883049 0.5 1.26795 0.5L4.73205 0.5C5.11695 0.5 5.35751 0.916667 5.16506 1.25L3.43301 4.25Z'
              fill='#2B2A29'
            />
          </svg>
          {children}
        </div>
      );
    case 'arrow-up':
      return (
        <div className='arrow-up'>
          <svg
            width='6'
            height='5'
            viewBox='0 0 6 5'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M2.56699 0.75C2.75944 0.416667 3.24056 0.416667 3.43301 0.75L5.16506 3.75C5.35751 4.08333 5.11695 4.5 4.73205 4.5L1.26795 4.5C0.883049 4.5 0.642487 4.08333 0.834937 3.75L2.56699 0.75Z'
              fill='#2B2A29'
            />
          </svg>

          {children}
        </div>
      );
    default:
      return <div>{defaultImg}</div>;
  }
};
