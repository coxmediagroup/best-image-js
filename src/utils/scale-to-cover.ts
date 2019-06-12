import { ratio } from './ratio';

/**
 * Scale (b1, b2) to cover the area of (a1, b2)
 */
export const scaleToCover = (a1: number, a2: number, b1: number, b2: number): number => {
  const aFactor = ratio(a1, a2);
  const bFactor = ratio(b1, b2);

  let xFactor: number;

  if (aFactor < bFactor) {
    xFactor = ratio(a2, b2);
  } else {
    xFactor = ratio(a1, b1);
  }

  return xFactor;
};
