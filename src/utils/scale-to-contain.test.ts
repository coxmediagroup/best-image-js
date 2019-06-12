import { scaleToContain } from './scale-to-contain';

describe('scaleToContain', () => {
  test.each`
    a1   | a2   | b1   | b2   | expected
    ${1} | ${1} | ${2} | ${2} | ${0.5}
    ${2} | ${2} | ${1} | ${1} | ${2}
    ${1} | ${2} | ${1} | ${2} | ${1}
    ${2} | ${1} | ${1} | ${2} | ${0.5}
  `('scaleToContain($a1, $a2, $b1, $b2) [{ $expected }]', (testCase) => {
    const { a1, a2, b1, b2, expected } = testCase;
    const results = scaleToContain(a1, a2, b1, b2);
    expect(results).toBeCloseTo(expected);
  });
});
