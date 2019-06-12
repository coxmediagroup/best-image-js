import { getMatchResults } from './get-match-results';
import { scaleToContainMatch, ratioMatch } from '../matchers';

describe('Best size match', () => {
  describe('getMatchResults', () => {
    describe('e.g. mediumNoCrop (target: 250 x 250)', () => {
      const target = { width: 250, height: 250 };

      const matchBy = {
        downscale: {
          matchFunction: scaleToContainMatch,
          matchOptions: { widthLimit: 1200, heightLimit: 1200 },
        },
        ratio: {
          matchFunction: ratioMatch,
        },
      };

      test.each`
        imageWidth | imageHeight | score
        ${250}     | ${250}      | ${1}
        ${400}     | ${400}      | ${0.7631}
        ${584}     | ${800}      | ${0.5165}
        ${70}      | ${100}      | ${0.4444}
      `('getMatchResults(target, image, matchBy) [$score]', (testCase) => {
        const { imageWidth: width, imageHeight: height, score } = testCase;
        const image = { width, height };

        const matchResults = getMatchResults(target, image, matchBy);

        expect(matchResults.score).toBeCloseTo(score);
      });
    });

    describe('e.g. heroImage (target: 830 x 464.8)', () => {
      const target = { width: 830, height: 464.8 };

      const matchBy = {
        downscale: {
          matchFunction: scaleToContainMatch,
          matchOptions: { widthLimit: 1600, heightLimit: 1600 },
        },
        upscale: {
          matchFunction: scaleToContainMatch,
          matchOptions: { widthLimit: 399, heightLimit: 399 },
        },
        ratio: {
          matchFunction: ratioMatch,
        },
      };

      test.each`
        imageWidth | imageHeight | score
        ${830}     | ${464.8}    | ${1}
        ${655}     | ${490}      | ${0.6145}
        ${584}     | ${800}      | ${0.3786}
        ${400}     | ${400}      | ${0.2808}
      `('getMatchResults(target, image, matchBy) [$score]', (testCase) => {
        const { imageWidth: width, imageHeight: height, score } = testCase;
        const image = { width, height };

        const matchResults = getMatchResults(target, image, matchBy);

        expect(matchResults.score).toBeCloseTo(score);
      });
    });

    describe('e.g. thumbnailNoCrop - (target: 58 x 58)', () => {
      const target = { width: 58, height: 58 };

      const matchBy = {
        downscale: {
          matchFunction: scaleToContainMatch,
          matchOptions: { widthLimit: 300, heightLimit: 300 },
        },
        ratio: {
          matchFunction: ratioMatch,
        },
      };

      test.each`
        imageWidth | imageHeight | score
        ${58}      | ${58}       | ${1}
        ${75}      | ${75}       | ${0.8595}
        ${172}     | ${128}      | ${0.5428}
        ${155}     | ${235}      | ${0.4687}
        ${624}     | ${936}      | ${0.4371}
      `('getMatchResults(target, image, matchBy) [$score]', (testCase) => {
        const { imageWidth: width, imageHeight: height, score } = testCase;
        const image = { width, height };

        const matchResults = getMatchResults(target, image, matchBy);

        expect(matchResults.score).toBeCloseTo(score);
      });
    });
  });
});
