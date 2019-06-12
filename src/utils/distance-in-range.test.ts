import { distanceInRange } from './distance-in-range';

describe('distanceInRange', () => {
  test.each`
    target | compare | limit  | expected
    ${100} | ${100}  | ${200} | ${1.0}
    ${100} | ${150}  | ${200} | ${0.5}
    ${100} | ${200}  | ${200} | ${0.0}
    ${100} | ${300}  | ${200} | ${0.0}
    ${100} | ${100}  | ${10}  | ${1.0}
    ${100} | ${60}   | ${10}  | ${0.555}
    ${100} | ${10}   | ${10}  | ${0.0}
    ${100} | ${2}    | ${10}  | ${0.0}
    ${100} | ${100}  | ${100} | ${1.0}
  `('percentageMatch($target, $compare, $limit) [$expected]', (testCase) => {
    const { target, compare, limit, expected } = testCase;
    const results = distanceInRange(target, compare, limit);
    expect(results).toBeCloseTo(expected);
  });
});
