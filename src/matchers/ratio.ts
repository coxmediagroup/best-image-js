import { angleBetweenVectors, distanceInRange } from '../utils';

const bestCase = 0; // angle diff 0° (as radians)
const worstCase = 1.5707963267948966; // angle diff 90° (as radians)

export const ratioMatch = (
  targetWidth: number,
  targetHeight: number,
  compareWidth: number,
  compareHeight: number,
): number => {
  const angle = angleBetweenVectors(targetWidth, targetHeight, compareWidth, compareHeight);
  const match = distanceInRange(bestCase, angle, worstCase);
  return match;
};
