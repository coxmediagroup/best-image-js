import { absRatio } from './abs-ratio';
import { SQUARE_RATIO_ACCURACY } from '../const';

/**
 * Determine if a ratio is square (or close-enough.)
 *
 * @param width: Image width
 * @param height: Image height
 * @param options
 * @param options.sqRatioAccuracy: Decimal percentage of squareness: 1.0 – 0.0
 */
export const isSquare = (width: number, height: number, options?: { sqRatioAccuracy: number }) => {
  const thisRatio = absRatio(width, height);
  const { sqRatioAccuracy = SQUARE_RATIO_ACCURACY } = options || {};

  const results = thisRatio >= sqRatioAccuracy;

  return results;
};
