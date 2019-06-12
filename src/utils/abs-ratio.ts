// Alias absolute "ratio" calculations (normalizes rotation)
export const absRatio = (numerator: number, denominator: number) => {
  return Math.min(numerator, denominator) / Math.max(numerator, denominator);
};
