import { orientationMatch } from './orientation';

describe('orientationMatch', () => {
  // Label definitions here instead of importing project constants (default)
  const square = 'square';
  const tall = 'portrait';
  const wide = 'landscape';

  const orientationLabels = {
    wideLabel: wide,
    tallLabel: tall,
    squareLabel: square,
  };

  const orientationRank = {
    [square]: {
      [square]: 1,
      [tall]: 2,
      [wide]: 2,
    },
    [tall]: {
      [square]: 2,
      [tall]: 1,
      [wide]: 3,
    },
    [wide]: {
      [square]: 2,
      [tall]: 3,
      [wide]: 1,
    },
  };

  test.each`
    targetWidth | targetHeight | compareWidth | compareHeight | expected
    ${100}      | ${100}       | ${100}       | ${100}        | ${1}
    ${100}      | ${100}       | ${100}       | ${200}        | ${0.5}
    ${100}      | ${100}       | ${200}       | ${100}        | ${0.5}
    ${100}      | ${200}       | ${100}       | ${100}        | ${0.5}
    ${100}      | ${200}       | ${100}       | ${200}        | ${1}
    ${100}      | ${200}       | ${200}       | ${100}        | ${0}
    ${200}      | ${100}       | ${100}       | ${100}        | ${0.5}
    ${200}      | ${100}       | ${100}       | ${200}        | ${0}
    ${200}      | ${100}       | ${200}       | ${100}        | ${1}
  `(
    'orientationMatch($targetWidth, $targetHeight, $compareWidth, $compareHeight) [$expected]',
    (testCase) => {
      const { targetWidth, targetHeight, compareWidth, compareHeight, expected } = testCase;
      const results = orientationMatch(targetWidth, targetHeight, compareWidth, compareHeight, {
        orientationLabels,
        orientationRank,
      });
      expect(results).toBeCloseTo(expected);
    },
  );
});
