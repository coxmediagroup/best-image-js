import { angleOfVector } from './angle-of-vector';

describe('angleOfVector', () => {
  test.each`
    x      | y      | radians   | degrees
    ${0}   | ${1}   | ${1.5707} | ${90}
    ${1}   | ${0}   | ${0}      | ${0}
    ${100} | ${100} | ${0.7853} | ${45}
    ${10}  | ${100} | ${1.4711} | ${84.2894}
    ${100} | ${10}  | ${0.0996} | ${5.7105}
  `('angleOfVector($x, $y) [$radians] i.e. $degrees', (testCase) => {
    const { x, y, radians } = testCase;
    const results = angleOfVector(x, y);
    expect(results).toBeCloseTo(radians);
  });
});
