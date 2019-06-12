import { average } from './average';

describe('average', () => {
  test.each`
    numbers                                                      | expected
    ${[6, 11, 7]}                                                | ${8}
    ${[3, 7, 5, 13, 20, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29]} | ${22}
    ${[3, -7, 5, 13, -2]}                                        | ${2.4}
  `('average(...$numbers) [$expected]', (testCase) => {
    const { numbers, expected } = testCase;
    const results = average(...numbers);
    expect(results).toBeCloseTo(expected);
  });
});
