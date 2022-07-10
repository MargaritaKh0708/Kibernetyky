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
        <div className='extended-card__icon'>
          <svg
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M7 10L9 12L13 8M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z'
              stroke='#05B263'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'batery':
      return (
        <div className='extended-card__icon'>
          <svg
            width='38'
            height='26'
            viewBox='0 0 38 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M37 7.66602V18.3327'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M31.666 22.3333V3.66667C31.666 2.19391 30.4721 1 28.9993 1L3.66602 1C2.19326 1 0.999352 2.19391 0.999352 3.66667V22.3333C0.999352 23.8061 2.19326 25 3.66602 25H28.9993C30.4721 25 31.666 23.8061 31.666 22.3333Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16.3346 19.6673L19.0013 13.0007H13.668L16.3346 6.33398'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          {children}
        </div>
      );
    case 'camera':
      return (
        <div className='extended-card__icon'>
          <svg
            width='38'
            height='34'
            viewBox='0 0 38 34'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M34 33.125H4C3.20435 33.125 2.44129 32.8089 1.87868 32.2463C1.31607 31.6837 1 30.9206 1 30.125V9.125C1 8.32935 1.31607 7.56629 1.87868 7.00368C2.44129 6.44107 3.20435 6.125 4 6.125H9.9989L12.9989 1.625H24.9989L27.9989 6.125H34C34.7956 6.125 35.5587 6.44107 36.1213 7.00368C36.6839 7.56629 37 8.32935 37 9.125V30.125C37 30.9206 36.6839 31.6837 36.1213 32.2463C35.5587 32.8089 34.7956 33.125 34 33.125Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 25.625C22.7279 25.625 25.75 22.6029 25.75 18.875C25.75 15.1471 22.7279 12.125 19 12.125C15.2721 12.125 12.25 15.1471 12.25 18.875C12.25 22.6029 15.2721 25.625 19 25.625Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'change':
      return (
        <div className='extended-card__icon'>
          <svg
            width='16'
            height='15'
            viewBox='0 0 16 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 1V5.0625H1.50883M14.9458 6.6875C14.5153 3.48112 11.5697 1 8 1C5.06229 1 2.54726 2.68039 1.50883 5.0625M1.50883 5.0625H5.375M15 14V9.9375H14.4912M14.4912 9.9375C13.4527 12.3196 10.9377 14 8 14C4.43033 14 1.48474 11.5189 1.05416 8.3125M14.4912 9.9375H10.625'
              stroke='#2B2A29'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'core':
      return (
        <div className='extended-card__icon'>
          <svg
            width='38'
            height='35'
            viewBox='0 0 38 35'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M32.75 4H5.25C4.55964 4 4 4.60442 4 5.35V29.65C4 30.3956 4.55964 31 5.25 31H32.75C33.4404 31 34 30.3956 34 29.65V5.35C34 4.60442 33.4404 4 32.75 4Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16.7083 8H10.2917C10.1306 8 10 8.1567 10 8.35V14.65C10 14.8433 10.1306 15 10.2917 15H16.7083C16.8694 15 17 14.8433 17 14.65V8.35C17 8.1567 16.8694 8 16.7083 8Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M27.7083 8H21.2917C21.1306 8 21 8.1567 21 8.35V14.65C21 14.8433 21.1306 15 21.2917 15H27.7083C27.8694 15 28 14.8433 28 14.65V8.35C28 8.1567 27.8694 8 27.7083 8Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M27.7083 20H21.2917C21.1306 20 21 20.1567 21 20.35V26.65C21 26.8433 21.1306 27 21.2917 27H27.7083C27.8694 27 28 26.8433 28 26.65V20.35C28 20.1567 27.8694 20 27.7083 20Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16.7083 20H10.2917C10.1306 20 10 20.1567 10 20.35V26.65C10 26.8433 10.1306 27 10.2917 27H16.7083C16.8694 27 17 26.8433 17 26.65V20.35C17 20.1567 16.8694 20 16.7083 20Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M11 4L11 1'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M11 34L11 31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M37 25L34 25'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4 25L1 25'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15 4L15 1'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M15 34L15 31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M37 21L34 21'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4 21L1 21'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 4L19 1'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M19 34L19 31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M37 17L34 17'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4 17L1 17'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M23 4L23 1'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M23 34L23 31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M37 13L34 13'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4 13L1 13'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M27 4L27 1'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M27 34L27 31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M37 9L34 9'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M4 9L1 9'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'cpu':
      return (
        <div className='extended-card__icon'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M33.75 6H6.25C5.55964 6 5 6.60442 5 7.35V31.65C5 32.3956 5.55964 33 6.25 33H33.75C34.4404 33 35 32.3956 35 31.65V7.35C35 6.60442 34.4404 6 33.75 6Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12 6L12 3'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M12 36L12 33'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M38 27L35 27'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5 27L2 27'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 6L16 3'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M16 36L16 33'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M38 23L35 23'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5 23L2 23'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M20 6L20 3'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M20 36L20 33'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M38 19L35 19'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5 19L2 19'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M24 6L24 3'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M24 36L24 33'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M38 15L35 15'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5 15L2 15'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M28 6L28 3'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M28 36L28 33'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M38 11L35 11'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M5 11L2 11'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.3025 21.0281H15.7656C15.7188 21.6016 15.5627 22.113 15.2974 22.5622C15.0321 23.0074 14.6595 23.3583 14.1796 23.615C13.6997 23.8717 13.1163 24 12.4296 24C11.9029 24 11.4288 23.9037 11.0074 23.7112C10.5861 23.5147 10.2251 23.238 9.92471 22.881C9.62428 22.5201 9.39408 22.0849 9.2341 21.5755C9.07803 21.0662 9 20.4967 9 19.867V19.139C9 18.5094 9.07999 17.9398 9.23996 17.4305C9.40383 16.9211 9.63794 16.486 9.94227 16.125C10.2466 15.76 10.6114 15.4813 11.0367 15.2888C11.4659 15.0963 11.9478 15 12.4823 15C13.1612 15 13.7348 15.1283 14.203 15.385C14.6712 15.6417 15.0341 15.9967 15.2916 16.4499C15.553 16.9031 15.713 17.4225 15.7715 18.008H14.3083C14.2693 17.631 14.1835 17.3082 14.0508 17.0394C13.9221 16.7707 13.7309 16.5662 13.4773 16.4258C13.2236 16.2814 12.892 16.2092 12.4823 16.2092C12.1468 16.2092 11.8541 16.2734 11.6044 16.4017C11.3547 16.5301 11.146 16.7186 10.9782 16.9672C10.8104 17.2159 10.6836 17.5227 10.5978 17.8877C10.5158 18.2487 10.4749 18.6618 10.4749 19.127V19.867C10.4749 20.3082 10.5119 20.7092 10.5861 21.0702C10.6641 21.4271 10.7811 21.734 10.9372 21.9906C11.0972 22.2473 11.3001 22.4459 11.5459 22.5862C11.7917 22.7266 12.0863 22.7968 12.4296 22.7968C12.8471 22.7968 13.1846 22.7286 13.4421 22.5922C13.7036 22.4559 13.9006 22.2574 14.0333 21.9967C14.1698 21.732 14.2596 21.4091 14.3025 21.0281Z'
              fill='#2B2A29'
            />
            <path
              d='M20.3365 20.613H18.569V19.4158H20.3365C20.7228 19.4158 21.0349 19.3516 21.2729 19.2233C21.511 19.0949 21.6846 18.9184 21.7938 18.6939C21.907 18.4652 21.9636 18.2045 21.9636 17.9118C21.9636 17.635 21.907 17.3763 21.7938 17.1357C21.6846 16.891 21.511 16.6945 21.2729 16.5461C21.0349 16.3977 20.7228 16.3235 20.3365 16.3235H18.569V23.8797H17.1V15.1203H20.3365C20.9959 15.1203 21.5558 15.2406 22.0162 15.4813C22.4805 15.7179 22.8336 16.0468 23.0756 16.4679C23.3175 16.885 23.4384 17.3623 23.4384 17.8997C23.4384 18.4652 23.3175 18.9505 23.0756 19.3556C22.8336 19.7607 22.4805 20.0715 22.0162 20.2881C21.5558 20.5047 20.9959 20.613 20.3365 20.613Z'
              fill='#2B2A29'
            />
            <path
              d='M29.5368 15.1203H31V20.9739C31 21.6397 30.8595 22.1972 30.5786 22.6464C30.2977 23.0956 29.9153 23.4345 29.4315 23.6631C28.9516 23.8877 28.4151 24 27.822 24C27.2095 24 26.6632 23.8877 26.1833 23.6631C25.7034 23.4345 25.3249 23.0956 25.0479 22.6464C24.7748 22.1972 24.6382 21.6397 24.6382 20.9739V15.1203H26.1014V20.9739C26.1014 21.3951 26.1716 21.742 26.312 22.0147C26.4525 22.2834 26.6515 22.482 26.909 22.6103C27.1665 22.7386 27.4709 22.8028 27.822 22.8028C28.1732 22.8028 28.4756 22.7386 28.7292 22.6103C28.9867 22.482 29.1857 22.2834 29.3262 22.0147C29.4666 21.742 29.5368 21.3951 29.5368 20.9739V15.1203Z'
              fill='#2B2A29'
            />
          </svg>
          {children}
        </div>
      );
    case 'delivery':
      return (
        <div className='extended-card__icon'>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13.1111 16.5714H13.8611H13.1111ZM13.1111 7.42857H12.3611H13.1111ZM17.881 6.62045L18.4187 6.09764L18.4187 6.09764L17.881 6.62045ZM21.6746 10.5224L22.2123 9.9996V9.9996L21.6746 10.5224ZM3.11111 4.75H12V3.25H3.11111V4.75ZM12.3611 5.14286V16.5714H13.8611V5.14286H12.3611ZM2.75 16.5714V5.14286H1.25V16.5714H2.75ZM4.22222 16.9643H3.11111V18.4643H4.22222V16.9643ZM12 16.9643H8.66667V18.4643H12V16.9643ZM1.25 16.5714C1.25 17.5968 2.06347 18.4643 3.11111 18.4643V16.9643C2.93145 16.9643 2.75 16.8085 2.75 16.5714H1.25ZM12.3611 16.5714C12.3611 16.8085 12.1797 16.9643 12 16.9643V18.4643C13.0476 18.4643 13.8611 17.5968 13.8611 16.5714H12.3611ZM12 4.75C12.1797 4.75 12.3611 4.90583 12.3611 5.14286H13.8611C13.8611 4.11752 13.0476 3.25 12 3.25V4.75ZM3.11111 3.25C2.06347 3.25 1.25 4.11752 1.25 5.14286H2.75C2.75 4.90583 2.93145 4.75 3.11111 4.75V3.25ZM13.8611 16.5714L13.8611 7.42857L12.3611 7.42857L12.3611 16.5714H13.8611ZM14.2222 7.03571H17.0953V5.53571H14.2222V7.03571ZM21.25 11.3305V16.5714H22.75V11.3305H21.25ZM17.3432 7.14326L21.1368 11.0452L22.2123 9.9996L18.4187 6.09764L17.3432 7.14326ZM15.3333 16.9643H14.2222V18.4643H15.3333V16.9643ZM20.8889 16.9643H19.7778V18.4643H20.8889V16.9643ZM22.75 11.3305C22.75 10.8352 22.5589 10.3561 22.2123 9.9996L21.1368 11.0452C21.207 11.1174 21.25 11.2196 21.25 11.3305H22.75ZM17.0953 7.03571C17.1842 7.03571 17.2738 7.07182 17.3432 7.14326L18.4187 6.09764C18.0714 5.74043 17.5958 5.53571 17.0953 5.53571V7.03571ZM12.3611 16.5714C12.3611 17.5968 13.1746 18.4643 14.2222 18.4643V16.9643C14.0426 16.9643 13.8611 16.8085 13.8611 16.5714H12.3611ZM21.25 16.5714C21.25 16.8085 21.0686 16.9643 20.8889 16.9643V18.4643C21.9365 18.4643 22.75 17.5968 22.75 16.5714H21.25ZM13.8611 7.42857C13.8611 7.19155 14.0426 7.03571 14.2222 7.03571V5.53571C13.1746 5.53571 12.3611 6.40323 12.3611 7.42857H13.8611ZM7.91667 17.7143C7.91667 18.5825 7.23775 19.25 6.44444 19.25V20.75C8.10573 20.75 9.41667 19.3708 9.41667 17.7143H7.91667ZM6.44444 19.25C5.65113 19.25 4.97222 18.5825 4.97222 17.7143H3.47222C3.47222 19.3708 4.78315 20.75 6.44444 20.75V19.25ZM4.97222 17.7143C4.97222 16.8461 5.65113 16.1786 6.44444 16.1786V14.6786C4.78315 14.6786 3.47222 16.0578 3.47222 17.7143H4.97222ZM6.44444 16.1786C7.23775 16.1786 7.91667 16.8461 7.91667 17.7143H9.41667C9.41667 16.0578 8.10573 14.6786 6.44444 14.6786V16.1786ZM19.0278 17.7143C19.0278 18.5825 18.3489 19.25 17.5556 19.25V20.75C19.2168 20.75 20.5278 19.3708 20.5278 17.7143H19.0278ZM17.5556 19.25C16.7622 19.25 16.0833 18.5825 16.0833 17.7143H14.5833C14.5833 19.3708 15.8943 20.75 17.5556 20.75V19.25ZM16.0833 17.7143C16.0833 16.8461 16.7622 16.1786 17.5556 16.1786V14.6786C15.8943 14.6786 14.5833 16.0578 14.5833 17.7143H16.0833ZM17.5556 16.1786C18.3489 16.1786 19.0278 16.8461 19.0278 17.7143H20.5278C20.5278 16.0578 19.2168 14.6786 17.5556 14.6786V16.1786Z'
              fill='#235ED0'
            />
          </svg>
        </div>
      );
    case 'frontalcamera':
      return (
        <div className='extended-card__icon'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M20 35C28.2843 35 35 28.2843 35 20C35 11.7157 28.2843 5 20 5C11.7157 5 5 11.7157 5 20C5 28.2843 11.7157 35 20 35Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M14.375 18.75C15.4105 18.75 16.25 17.9105 16.25 16.875C16.25 15.8395 15.4105 15 14.375 15C13.3395 15 12.5 15.8395 12.5 16.875C12.5 17.9105 13.3395 18.75 14.375 18.75Z'
              fill='#2B2A29'
            />
            <path
              d='M25.625 18.75C26.6605 18.75 27.5 17.9105 27.5 16.875C27.5 15.8395 26.6605 15 25.625 15C24.5895 15 23.75 15.8395 23.75 16.875C23.75 17.9105 24.5895 18.75 25.625 18.75Z'
              fill='#2B2A29'
            />
            <path
              d='M26.4976 23.75C25.8391 24.8903 24.892 25.8372 23.7516 26.4955C22.6112 27.1538 21.3176 27.5004 20.0008 27.5004C18.684 27.5004 17.3904 27.1539 16.25 26.4956C15.1095 25.8372 14.1625 24.8904 13.5039 23.7501'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M31 2H36.4444C36.857 2 37.2527 2.16389 37.5444 2.45562C37.8361 2.74734 38 3.14301 38 3.55557V9'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M31 38H36.4444C36.857 38 37.2527 37.8361 37.5444 37.5444C37.8361 37.2527 38 36.857 38 36.4445V31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9 38H3.55556C3.143 38 2.74734 37.8361 2.45561 37.5444C2.16389 37.2527 2 36.857 2 36.4445V31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9 2H3.55556C3.143 2 2.74734 2.16389 2.45561 2.45562C2.16389 2.74734 2 3.14301 2 3.55557V9'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          {children}
        </div>
      );
    case 'garanty':
      return (
        <div className='extended-card__icon'>
          <svg
            width='16'
            height='15'
            viewBox='0 0 16 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M5.66667 7.67175L7.22222 9.25567L10.3333 6.08783M14.7028 2.90757C14.5436 2.91579 14.3834 2.91995 14.2222 2.91995C11.8318 2.91995 9.6512 2.00488 7.99995 0.5C6.34871 2.00483 4.16819 2.91985 1.77778 2.91985C1.6166 2.91985 1.45638 2.91569 1.29721 2.90747C1.10321 3.67061 1 4.47097 1 5.29586C1 9.72413 3.97447 13.445 8 14.5C12.0255 13.445 15 9.72413 15 5.29586C15 4.471 14.8968 3.67068 14.7028 2.90757Z'
              stroke='#2B2A29'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'percent':
      return (
        <div className='extended-card__icon'>
          <svg
            width='25'
            height='24'
            viewBox='0 0 25 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <mask id='path-1-inside-1_2120_313772' fill='white'>
              <path d='M24.5 12C24.5 18.6274 19.1274 24 12.5 24C5.87258 24 0.5 18.6274 0.5 12C0.5 5.37258 5.87258 0 12.5 0C19.1274 0 24.5 5.37258 24.5 12Z' />
            </mask>
            <path
              d='M23 12C23 17.799 18.299 22.5 12.5 22.5V25.5C19.9558 25.5 26 19.4558 26 12H23ZM12.5 22.5C6.70101 22.5 2 17.799 2 12H-1C-1 19.4558 5.04416 25.5 12.5 25.5V22.5ZM2 12C2 6.20101 6.70101 1.5 12.5 1.5V-1.5C5.04416 -1.5 -1 4.54416 -1 12H2ZM12.5 1.5C18.299 1.5 23 6.20101 23 12H26C26 4.54416 19.9558 -1.5 12.5 -1.5V1.5Z'
              fill='#05B263'
              mask='url(#path-1-inside-1_2120_313772)'
            />
            <path
              d='M11.9719 9.46603C11.9719 9.84194 11.9102 10.1793 11.7867 10.4783C11.6678 10.7772 11.5055 11.0331 11.2997 11.2459C11.094 11.4543 10.8562 11.615 10.5864 11.7283C10.3166 11.837 10.0332 11.8913 9.73594 11.8913C9.41587 11.8913 9.11866 11.837 8.84431 11.7283C8.57453 11.615 8.33905 11.4543 8.13786 11.2459C7.94124 11.0331 7.78578 10.7772 7.67147 10.4783C7.55716 10.1793 7.5 9.84194 7.5 9.46603C7.5 9.08107 7.55716 8.73687 7.67147 8.43342C7.78578 8.12545 7.94124 7.8673 8.13786 7.65897C8.33905 7.4461 8.57453 7.28306 8.84431 7.16984C9.11866 7.05661 9.41587 7 9.73594 7C10.056 7 10.3509 7.05661 10.6207 7.16984C10.8951 7.28306 11.1305 7.4461 11.3272 7.65897C11.5283 7.8673 11.6861 8.12545 11.8004 8.43342C11.9147 8.73687 11.9719 9.08107 11.9719 9.46603ZM10.8333 9.46603C10.8333 9.18976 10.8036 8.95652 10.7442 8.7663C10.6893 8.57156 10.6116 8.41531 10.511 8.29755C10.415 8.17527 10.2984 8.08922 10.1612 8.0394C10.0286 7.98505 9.88683 7.95788 9.73594 7.95788C9.58048 7.95788 9.43644 7.98505 9.30384 8.0394C9.17124 8.08922 9.05693 8.17527 8.96091 8.29755C8.86488 8.41531 8.78944 8.57156 8.73457 8.7663C8.6797 8.95652 8.65226 9.18976 8.65226 9.46603C8.65226 9.73777 8.6797 9.96649 8.73457 10.1522C8.78944 10.3379 8.86488 10.4896 8.96091 10.6073C9.05693 10.7206 9.17124 10.8021 9.30384 10.8519C9.43644 10.9017 9.58048 10.9266 9.73594 10.9266C9.88683 10.9266 10.0286 10.9017 10.1612 10.8519C10.2984 10.8021 10.415 10.7206 10.511 10.6073C10.6116 10.4896 10.6893 10.3379 10.7442 10.1522C10.8036 9.96649 10.8333 9.73777 10.8333 9.46603ZM15.3601 7.33967C15.4104 7.27627 15.4698 7.22192 15.5384 7.17663C15.6116 7.12681 15.7122 7.1019 15.8402 7.1019H16.9033L9.6262 16.6603C9.5759 16.7237 9.51417 16.7781 9.44102 16.8234C9.36786 16.8641 9.27869 16.8845 9.17353 16.8845H8.07613L15.3601 7.33967ZM17.5 14.5815C17.5 14.9574 17.4383 15.2948 17.3148 15.5938C17.1914 15.8927 17.0267 16.1463 16.821 16.3546C16.6152 16.563 16.3775 16.7237 16.1077 16.837C15.8379 16.9457 15.5544 17 15.2572 17C14.9371 17 14.6399 16.9457 14.3656 16.837C14.0958 16.7237 13.8603 16.563 13.6591 16.3546C13.4625 16.1463 13.307 15.8927 13.1927 15.5938C13.083 15.2948 13.0281 14.9574 13.0281 14.5815C13.0281 14.1966 13.083 13.8524 13.1927 13.5489C13.307 13.2409 13.4625 12.9805 13.6591 12.7677C13.8603 12.5548 14.0958 12.394 14.3656 12.2853C14.6399 12.1721 14.9371 12.1155 15.2572 12.1155C15.5773 12.1155 15.8745 12.1721 16.1488 12.2853C16.4232 12.394 16.6587 12.5548 16.8553 12.7677C17.0565 12.9805 17.2142 13.2409 17.3285 13.5489C17.4428 13.8524 17.5 14.1966 17.5 14.5815ZM16.3615 14.5815C16.3615 14.3053 16.3317 14.072 16.2723 13.8818C16.2174 13.687 16.1397 13.5308 16.0391 13.413C15.9385 13.2908 15.8196 13.2047 15.6824 13.1549C15.5498 13.1005 15.4081 13.0734 15.2572 13.0734C15.1063 13.0734 14.9646 13.1005 14.832 13.1549C14.6994 13.2047 14.5828 13.2908 14.4822 13.413C14.3861 13.5308 14.3107 13.687 14.2558 13.8818C14.201 14.072 14.1735 14.3053 14.1735 14.5815C14.1735 14.8533 14.201 15.082 14.2558 15.2677C14.3107 15.4534 14.3861 15.6051 14.4822 15.7228C14.5828 15.8361 14.6994 15.9176 14.832 15.9674C14.9646 16.0172 15.1063 16.0421 15.2572 16.0421C15.4081 16.0421 15.5498 16.0172 15.6824 15.9674C15.8196 15.9176 15.9385 15.8361 16.0391 15.7228C16.1397 15.6051 16.2174 15.4534 16.2723 15.2677C16.3317 15.082 16.3615 14.8533 16.3615 14.5815Z'
              fill='#05B263'
            />
          </svg>
          {children}
        </div>
      );
    case 'pricewatch':
      return (
        <div className='extended-card__icon'>
          <svg
            width='28'
            height='28'
            viewBox='0 0 28 28'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M25.375 21.875L14.875 11.375L10.5 15.75L2.625 7.875'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M25.375 14.875V21.875H18.375'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'sale':
      return (
        <div className='extended-card__icon'>
          <svg
            width='21'
            height='20'
            viewBox='0 0 21 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M10.5 6V19M10.5 6C10.5 6 10.5 4.50722 10.5 4C10.5 2.89543 11.3954 2 12.5 2C13.6046 2 14.5 2.89543 14.5 4C14.5 5.10457 13.6046 6 12.5 6C11.9027 6 10.5 6 10.5 6ZM10.5 6C10.5 6 10.5 4.06291 10.5 3.5C10.5 2.11929 9.38071 1 8 1C6.61929 1 5.5 2.11929 5.5 3.5C5.5 4.88071 6.61929 6 8 6C8.8178 6 10.5 6 10.5 6ZM3.5 10H17.5M3.5 10C2.39543 10 1.5 9.10457 1.5 8C1.5 6.89543 2.39543 6 3.5 6H17.5C18.6046 6 19.5 6.89543 19.5 8C19.5 9.10457 18.6046 10 17.5 10M3.5 10L3.5 17C3.5 18.1046 4.39543 19 5.5 19H15.5C16.6046 19 17.5 18.1046 17.5 17V10'
              stroke='#F54503'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          {children}
        </div>
      );
    case 'screen':
      return (
        <div className='extended-card__icon'>
          <svg
            width='40'
            height='40'
            viewBox='0 0 40 40'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M28.25 2.125H11.75C10.2312 2.125 9 3.35622 9 4.875V35.125C9 36.6438 10.2312 37.875 11.75 37.875H28.25C29.7688 37.875 31 36.6438 31 35.125V4.875C31 3.35622 29.7688 2.125 28.25 2.125Z'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9 7.625H31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9 32.375H31'
              stroke='#2B2A29'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M27.1 12.9996C27.1 12.7235 26.8761 12.4996 26.6 12.4996L22.1 12.4996C21.8239 12.4996 21.6 12.7235 21.6 12.9996C21.6 13.2758 21.8239 13.4996 22.1 13.4996L26.1 13.4996L26.1 17.4996C26.1 17.7758 26.3239 17.9996 26.6 17.9996C26.8761 17.9996 27.1 17.7758 27.1 17.4996L27.1 12.9996ZM20.3536 19.9532L26.9536 13.3532L26.2464 12.6461L19.6464 19.2461L20.3536 19.9532Z'
              fill='#2B2A29'
            />
            <path
              d='M12.4996 26.6C12.4996 26.8761 12.7235 27.1 12.9996 27.1L17.4996 27.1C17.7758 27.1 17.9996 26.8761 17.9996 26.6C17.9996 26.3239 17.7758 26.1 17.4996 26.1L13.4996 26.1L13.4996 22.1C13.4996 21.8239 13.2758 21.6 12.9996 21.6C12.7235 21.6 12.4996 21.8239 12.4996 22.1L12.4996 26.6ZM19.2461 19.6464L12.6461 26.2464L13.3532 26.9536L19.9532 20.3536L19.2461 19.6464Z'
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
