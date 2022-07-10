import defaultImg from 'assets/icons/goods-card-icons/default.png';

interface IAcordionSvgSelector {
  id: string;
  children?: React.ReactNode;
  className?: string;
}

export const AccordionSvgSelector: React.FC<IAcordionSvgSelector> = ({
  id,
  children,
  className,
}) => {
  switch (id) {
    case 'arrow-down':
      return (
        <div className={className || ''}>
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
          >
            <path d='M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z' />
          </svg>
          {children}
        </div>
      );
    case 'arrow-up':
      return (
        <div className={className || ''}>
          <svg
            width='24'
            height='24'
            xmlns='http://www.w3.org/2000/svg'
            fillRule='evenodd'
            clipRule='evenodd'
          >
            <path d='M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z' />
          </svg>
          {children}
        </div>
      );
    default:
      return <div>{defaultImg}</div>;
  }
};
