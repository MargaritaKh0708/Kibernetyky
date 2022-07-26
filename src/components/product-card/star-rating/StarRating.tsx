import React from 'react';
import { Rating } from 'react-simple-star-rating';

export interface IStarRatingProps {
  onClick?: (newRating: number) => void;
  allowHalfIcon?: boolean;
  allowHover?: boolean;
  initialValue: number;
  emptyColor?: string;
  ratingValue: number;
  iconsCount: number;
  readonly?: boolean;
  fillColor: string;
  size?: number;
}

export const StarRating: React.FC<IStarRatingProps> = ({
  ...IStarRatingProps
}) => {
  return <Rating {...IStarRatingProps} />;
};
