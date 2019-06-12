// Alias "average" calculations
export const average = (...numbers: number[]) => {
  return numbers.reduce((prev, curr) => prev + curr, 0) / numbers.length;
};
