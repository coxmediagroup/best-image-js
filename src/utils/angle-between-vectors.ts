/**
 * Calculate the radian angle between two vectors.
 *
 * `Math.acos` returns `NaN` for inputs not between `-1` and `1`. Since this
 * function is to find angles between 0 and PI/2, where `Math.acos` would
 * return `NaN`, this will return `0`.
 */
export const angleBetweenVectors = (x1: number, y1: number, x2: number, y2: number) => {
  const dotProduct = x1 * x2 + y1 * y2;
  const magnitude1 = Math.sqrt(x1 ** 2 + y1 ** 2);
  const magnitude2 = Math.sqrt(x2 ** 2 + y2 ** 2);
  const productMagnitude = magnitude1 * magnitude2;
  const quotient = dotProduct / productMagnitude;

  if (quotient > 1) {
    return 0;
  }

  const radians = Math.acos(quotient);
  return radians;
};
