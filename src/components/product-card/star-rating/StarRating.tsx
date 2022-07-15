// @ts-ignore
import ReactStars from 'react-rating-stars-component';

export interface IStarRatingProps {
  onChange?: (newRating: number) => void;
  activeColor: string;
  filledIcon?: string;
  isHalf?: boolean;
  color?: string;
  value: number;
  count: number;
  size?: number;
}

export const StarRating: React.FC<IStarRatingProps> = ({
  activeColor,
  filledIcon,
  onChange,
  value,
  isHalf,
  count,
  color,
  size,
}) => {
  return (
    <ReactStars
      activeColor={activeColor}
      filledIcon={filledIcon}
      onChange={onChange}
      isHalf={isHalf}
      color={color}
      value={value}
      count={count}
      size={size}
    />
  );
};
