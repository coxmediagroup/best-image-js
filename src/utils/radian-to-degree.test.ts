import { radianToDegree } from './radian-to-degree';

describe('radianToDegree', () => {
  test.each`
    radian    | degree
    ${1.5707} | ${89.9944}
    ${0}      | ${0}
    ${0.7853} | ${44.9943}
    ${1.4711} | ${84.2894}
    ${0.0996} | ${5.7105}
  `('radianToDegree($radian) -> $degree', (testCase) => {
    const { radian, degree } = testCase;

    const asDegree = radianToDegree(radian);
    expect(asDegree).toBeCloseTo(degree);
  });
});
