import { getMatchResults } from './get-match-results';
import { sizeInRange } from '../utils';
import { GetBestImage } from '../types';

const initialResults = { imageMetaData: undefined, score: 0 };

/**
 * Use provided matchers and data to get a "best" image meta data
 */
export const pickBestImage: GetBestImage = (targetParams, matchBy, imageMetaDataList) => {
  const { imageMetaData = {} } = imageMetaDataList
    .filter((current) => sizeInRange(current, targetParams))
    .reduce((prevResults, imageMetaData) => {
      const { width, height } = imageMetaData;
      const { score } = getMatchResults(targetParams, { width, height }, matchBy);

      if (score > prevResults.score) {
        return { imageMetaData, score };
      }

      return prevResults;
    }, initialResults);

  return imageMetaData;
};
