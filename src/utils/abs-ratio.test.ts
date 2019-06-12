import { absRatio } from './abs-ratio';

describe('absRatio', () => {
  test.each`
    numerator | denominator | expected
    ${1}      | ${1}        | ${1}
    ${1}      | ${2}        | ${0.5}
    ${2}      | ${1}        | ${0.5}
  `('absRatio($numerator, $denominator) [$expected]', (testCase) => {
    const { numerator, denominator, expected } = testCase;
    const results = absRatio(numerator, denominator);
    expect(results).toBeCloseTo(expected);
  });
});
