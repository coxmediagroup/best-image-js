/**
 * Decimal percentage of squareness. The threshold for determining how close to
 * square the orientation an image has to be for it to be considered "square".
 *
 * e.g.
 * - 1    (100%) – Only perfect squares.
 * - 0.95 ( 95%) – Up to 5% out of square is good enough.
 * - 0.01 (  1%) – Almost anything is square (if you squint hard enough.)
 * - 0    (  0%) – Everything is square.
 */
export const SQUARE_RATIO_ACCURACY = 1;

// Arbitrary values to define orientation constants
export const ORIENTATION_SQUARE = 'square';
export const ORIENTATION_WIDE = 'landscape';
export const ORIENTATION_TALL = 'portrait';

// Rankings for orientation comparisons:
export const ORIENTATION_RANK = {
  [ORIENTATION_SQUARE]: {
    [ORIENTATION_SQUARE]: 1,
    [ORIENTATION_TALL]: 3,
    [ORIENTATION_WIDE]: 2,
  },
  [ORIENTATION_TALL]: {
    [ORIENTATION_SQUARE]: 2,
    [ORIENTATION_TALL]: 1,
    [ORIENTATION_WIDE]: 3,
  },
  [ORIENTATION_WIDE]: {
    [ORIENTATION_SQUARE]: 2,
    [ORIENTATION_TALL]: 3,
    [ORIENTATION_WIDE]: 1,
  },
};
