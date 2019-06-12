import { getOrientation } from './get-orientation';

describe('getOrientation', () => {
  // Label definitions here instead of importing project constants (default)
  const square = 'square';
  const tall = 'portrait';
  const wide = 'landscape';

  const orientationLabels = {
    wideLabel: wide,
    tallLabel: tall,
    squareLabel: square,
  };

  test.each`
    width  | height | sqRatioAccuracy | expected
    ${100} | ${100} | ${1.0}          | ${'square'}
    ${100} | ${105} | ${1.0}          | ${'portrait'}
    ${105} | ${100} | ${1.0}          | ${'landscape'}
    ${105} | ${100} | ${0.95}         | ${'square'}
    ${100} | ${105} | ${0.95}         | ${'square'}
    ${106} | ${100} | ${0.95}         | ${'landscape'}
    ${100} | ${106} | ${0.95}         | ${'portrait'}
  `(
    'getOrientation($width, $height, { sqRatioAccuracy: $sqRatioAccuracy }) ["$expected"]',
    (testCase) => {
      const { width, height, sqRatioAccuracy, expected } = testCase;
      const options = { sqRatioAccuracy, orientationLabels };
      const results = getOrientation(width, height, options);
      expect(results).toBe(expected);
    },
  );
});
