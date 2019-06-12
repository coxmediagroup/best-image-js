/**
 * Convert radians to degrees (easier for some folks to reason about.)
 */
export const radianToDegree = (radians: number) => {
  return (radians * 180) / Math.PI;
};
