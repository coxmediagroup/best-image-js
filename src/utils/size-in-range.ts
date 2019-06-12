import { inRange } from './in-range';
import { SizeInRange } from '../types';

// Determine if a size is within range of min and max
export const sizeInRange: SizeInRange = (image, params) => {
  const { width, height } = image;
  const { widthMin = 0, widthMax = 9999, heightMin = 0, heightMax = 9999 } = params;

  const widthInRange = inRange(width, widthMin, widthMax);
  const heightInRange = inRange(height, heightMin, heightMax);

  return widthInRange && heightInRange;
};
