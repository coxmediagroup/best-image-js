/**
 * Map (x, y) to Math.atan2(y, x)
 *
 * @returns number between -PI and PI (radians)
 */
export const angleOfVector = (x: number, y: number) => {
  return Math.atan2(y, x);
};
