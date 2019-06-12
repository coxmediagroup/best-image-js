import { ratio } from './ratio';

describe('ratio', () => {
  test.each`
    numerator | denominator | expected
    ${1}      | ${1}        | ${1}
    ${1}      | ${2}        | ${0.5}
    ${2}      | ${1}        | ${2}
  `('ratio($numerator, $denominator) [$expected]', (testCase) => {
    const { numerator, denominator, expected } = testCase;
    const results = ratio(numerator, denominator);
    expect(results).toBeCloseTo(expected);
  });
});
