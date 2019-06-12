import { sizeInRange } from './size-in-range';

describe('sizeInRange', () => {
  test.each`
    width  | height | widthMin | widthMax | heightMin | heightMax | expected
    ${100} | ${100} | ${0}     | ${200}   | ${0}      | ${200}    | ${true}
    ${100} | ${100} | ${150}   | ${200}   | ${10}     | ${150}    | ${false}
  `(
    'inRange($width, $height, $widthMin, $widthMax, $heightMin, $heightMax) [$expected]',
    (testCase) => {
      const { width, height, widthMin, widthMax, heightMin, heightMax, expected } = testCase;
      const results = sizeInRange({ width, height }, { widthMin, widthMax, heightMin, heightMax });
      expect(results).toBe(expected);
    },
  );
});
