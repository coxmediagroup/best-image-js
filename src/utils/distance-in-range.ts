import { inRange } from './in-range';

/**
 * Determine the percentage of distance between `target` and `compare` on the
 * line between `target` and `limit`.
 */
export const distanceInRange = (target: number, compare: number, limit: number): number => {
  const sign = target > limit ? -1 : 1;

  const absTarget = target * sign;
  const absCompare = compare * sign;
  const absLimit = limit * sign;

  // Match is match
  if (absCompare === absTarget) {
    return 1;
  }

  // No match when value of `compare` is above the `limit` or under the `target`
  if (!inRange(absCompare, absTarget, absLimit)) {
    return 0;
  }

  // Calculate the percentage from the whole
  const numerator = absCompare - absTarget;
  const denomerator = absLimit - absTarget;
  const distance = 1.0 - numerator / denomerator;

  return distance;
};
