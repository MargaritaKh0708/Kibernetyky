import { NavLink } from 'react-router-dom';

export interface IDetailsBtnProps {
  children: string | JSX.Element;
  margin?: string | number;
  cardcolor?: string;
  path: string;
}

export const DetailsBtn: React.FC<IDetailsBtnProps> = ({
  cardcolor,
  children,
  margin,
  path,
}) => {
  return (
    <a
      className={`details-btn details-btn__${cardcolor}`}
      href={path}
      style={{ margin: margin }}
    >
      <span className='details-btn__description'>{children}</span>
    </a>
  );
};
