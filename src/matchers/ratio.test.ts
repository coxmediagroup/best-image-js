import { ratioMatch } from './ratio';

describe('ratioMatch', () => {
  test.each`
    targetWidth | targetHeight | compareWidth | compareHeight | expected
    ${100}      | ${100}       | ${100}       | ${100}        | ${1}
    ${100}      | ${100}       | ${1000}      | ${1000}       | ${1}
    ${100}      | ${100}       | ${101}       | ${100}        | ${0.998}
    ${100}      | ${100}       | ${100}       | ${101}        | ${0.998}
    ${100}      | ${200}       | ${200}       | ${100}        | ${0.5903}
    ${200}      | ${100}       | ${100}       | ${200}        | ${0.5903}
    ${2000}     | ${100}       | ${200}       | ${200}        | ${0.5318}
    ${100}      | ${2000}      | ${200}       | ${200}        | ${0.5318}
    ${100}      | ${2000}      | ${100}       | ${2001}       | ${1}
    ${0}        | ${1}         | ${1}         | ${0}          | ${0.0}
    ${1}        | ${0}         | ${0}         | ${1}          | ${0.0}
  `('score($targetWidth, $targetHeight, $compareWidth, $compareHeight) [$expected]', (testCase) => {
    const { compareHeight, compareWidth, expected, targetHeight, targetWidth } = testCase;
    const results = ratioMatch(targetWidth, targetHeight, compareWidth, compareHeight);
    expect(results).toBeCloseTo(expected);
  });
});
