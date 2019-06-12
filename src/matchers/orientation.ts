import { OrientationLabels, OrientationRankType } from '../types';

import { distanceInRange, getOrientation } from '../utils';
import { ORIENTATION_RANK } from '../const';

// Helper: find the lowest rank possible
const getRankLimit = (orientationRank: OrientationRankType): number => {
  const rankLimit = Object.values(orientationRank).reduce((rankValue, rankObj) => {
    return Math.max(rankValue, ...Object.values(rankObj));
  }, 1);
  return rankLimit;
};

// Memoize the RANK_LIMIT from static const ORIENTATION_RANK
const RANK_LIMIT = getRankLimit(ORIENTATION_RANK);

// Distance of orientation rank between target and compare.
export const orientationMatch = (
  targetWidth: number,
  targetHeight: number,
  compareWidth: number,
  compareHeight: number,
  options?: {
    orientationLabels?: Partial<OrientationLabels>;
    orientationRank?: OrientationRankType;
    rankMax?: number;
    sqRatioAccuracy?: number;
  },
) => {
  const {
    orientationLabels = undefined,
    orientationRank = undefined,
    sqRatioAccuracy = undefined,
  } = options || {};

  let rankLookup: OrientationRankType;
  let rankLimit: number;

  if (typeof orientationRank === 'undefined') {
    rankLookup = ORIENTATION_RANK;
    rankLimit = RANK_LIMIT;
  } else {
    rankLookup = orientationRank;
    rankLimit = getRankLimit(orientationRank);
  }

  // Get orientation keys for ranking lookup (options pass through)
  const passThroughOptions = { sqRatioAccuracy, orientationLabels };
  const targetOrientation = getOrientation(targetWidth, targetHeight, passThroughOptions);
  const compareOrientation = getOrientation(compareWidth, compareHeight, passThroughOptions);

  // Get the ranking index value from orientation-to-orientation lookup
  const compareRank = rankLookup[targetOrientation][compareOrientation];

  // Find the percentage for compare rank from 1 (best) to worst (rank limit)
  const orientationMatch = distanceInRange(1, compareRank, rankLimit);

  return orientationMatch;
};
