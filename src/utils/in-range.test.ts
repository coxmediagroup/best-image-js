import { inRange } from './in-range';

describe('inRange', () => {
  test.each`
    value  | min    | max     | expected
    ${1}   | ${0}   | ${2}    | ${true}
    ${100} | ${50}  | ${300}  | ${true}
    ${50}  | ${100} | ${300}  | ${false}
    ${-25} | ${-10} | ${-100} | ${true}
  `('inRange($value, $min, $max) [$expected]', (testCase) => {
    const { value, min, max, expected } = testCase;
    const results = inRange(value, min, max);
    expect(results).toBe(expected);
  });
});
