import { scale } from './scale';

describe('scale', () => {
  test.each`
    a       | b       | expected
    ${1}    | ${1}    | ${1}
    ${2}    | ${1}    | ${0.5}
    ${1}    | ${2}    | ${2}
    ${322}  | ${2124} | ${6.5962}
    ${2124} | ${322}  | ${0.1516}
  `('scale($a, $b) [$expected]', (testCase) => {
    const { a, b, expected } = testCase;
    const results = scale(a, b);
    expect(results).toBeCloseTo(expected);
  });
});
