// Determine if a value is within range of min and max
export const inRange = (value: number, min: number, max: number) => {
  const sign = min > max ? -1 : 1;

  const absValue = value * sign;
  const absMin = min * sign;
  const absMax = max * sign;

  if (absValue < absMin || absValue > absMax) {
    return false;
  }

  return true;
};
