import { isSquare } from './is-square';

describe('isSquare', () => {
  test.each`
    width  | height | sqRatioAccuracy | expected
    ${100} | ${100} | ${1.0}          | ${true}
    ${100} | ${105} | ${1.0}          | ${false}
    ${105} | ${100} | ${1.0}          | ${false}
    ${100} | ${105} | ${0.95}         | ${true}
    ${105} | ${100} | ${0.95}         | ${true}
    ${106} | ${100} | ${0.95}         | ${false}
    ${100} | ${106} | ${0.95}         | ${false}
    ${100} | ${1}   | ${0.0}          | ${true}
    ${1}   | ${100} | ${0.0}          | ${true}
  `('isSquare($width, $height, { sqRatioAccuracy: $sqRatioAccuracy }) [$expected]', (testCase) => {
    const { width, height, sqRatioAccuracy, expected } = testCase;
    const results = isSquare(width, height, { sqRatioAccuracy });
    expect(results).toBe(expected);
  });
});
