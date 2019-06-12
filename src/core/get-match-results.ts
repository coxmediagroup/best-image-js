import { average } from '../utils';
import { GetMatchResults } from '../types';

/**
 * Get image match results
 */
export const getMatchResults: GetMatchResults = (targetParams, imageMetaData, matchBy) => {
  const { width: targetWidth, height: targetHeight } = targetParams;
  const { width: compareWidth, height: compareHeight } = imageMetaData;

  const matchedBy = Object.entries(matchBy).reduce((results, { 0: matcherName, 1: matcher }) => {
    const match = matcher.matchFunction(
      targetWidth,
      targetHeight,
      compareWidth,
      compareHeight,
      matcher.matchOptions,
    );

    const point = typeof matcher.point === 'number' ? matcher.point : 1;
    const score = point * match;

    results[matcherName] = { point, match, score };

    return results;
  }, {});

  const score = average(...Object.values(matchedBy).map(({ score }) => score));

  const matchResults = { imageMetaData, matchedBy, score, targetParams };

  return matchResults;
};
