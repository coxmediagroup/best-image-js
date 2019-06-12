import { ORIENTATION_SQUARE, ORIENTATION_TALL, ORIENTATION_WIDE } from '../const';
import { isSquare } from './is-square';

/**
 * Given width and height, determine the orientation.
 */
export const getOrientation = (
  width: number,
  height: number,
  options?: {
    orientationLabels?: {
      squareLabel?: string;
      tallLabel?: string;
      wideLabel?: string;
    };
    sqRatioAccuracy?: number;
  },
) => {
  const {
    orientationLabels: {
      squareLabel: square = ORIENTATION_SQUARE,
      tallLabel: tall = ORIENTATION_TALL,
      wideLabel: wide = ORIENTATION_WIDE,
    } = {},
    sqRatioAccuracy = undefined,
  } = options || {};

  if (isSquare(width, height, { sqRatioAccuracy })) {
    return square;
  }

  if (width > height) {
    return wide;
  }

  return tall;
};
