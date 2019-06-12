/**
 * The position the compare factor value, on the line of distance between
 * the best case 1 (no scale) and the worst case 0 (maximum scale possible.)
 *
 * e.g. https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
 */
import { distanceInRange, scaleToContain, scaleToCover } from '../utils';

/**
 * Scale to contain.
 *
 * The compare must scale to fit completly within the target dimensions
 */
export const scaleToContainMatch = (
  targetWidth: number,
  targetHeight: number,
  compareWidth: number,
  compareHeight: number,
  options: {
    widthLimit: number;
    heightLimit: number;
  },
): number => {
  const { widthLimit, heightLimit } = options;

  const factor = scaleToContain(targetWidth, targetHeight, compareWidth, compareHeight);
  const limitFactor = scaleToContain(targetWidth, targetHeight, widthLimit, heightLimit);
  const match = distanceInRange(1, factor, limitFactor);

  return match;
};

/**
 * Scale to cover
 */
export const scaleToCoverMatch = (
  targetWidth: number,
  targetHeight: number,
  compareWidth: number,
  compareHeight: number,
  options: {
    widthLimit: number;
    heightLimit: number;
  },
): number => {
  const { widthLimit, heightLimit } = options;

  const factor = scaleToCover(targetWidth, targetHeight, compareWidth, compareHeight);
  const limitFactor = scaleToCover(targetWidth, targetHeight, widthLimit, heightLimit);
  const match = distanceInRange(1, factor, limitFactor);

  return match;
};
