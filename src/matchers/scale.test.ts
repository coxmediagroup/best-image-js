import { scaleToContainMatch, scaleToCoverMatch } from './scale';

describe('scale matching', () => {
  describe('scaleToContainMatch', () => {
    test.each`
      targetWidth | targetHeight | compareWidth | compareHeight | widthLimit | heightLimit | expected
      ${100}      | ${100}       | ${100}       | ${100}        | ${2000}    | ${2000}     | ${1}
      ${100}      | ${100}       | ${120}       | ${120}        | ${2000}    | ${2000}     | ${0.8245}
      ${100}      | ${100}       | ${110}       | ${110}        | ${2000}    | ${2000}     | ${0.9043}
      ${100}      | ${100}       | ${199}       | ${199}        | ${2000}    | ${2000}     | ${0.4763}
      ${100}      | ${100}       | ${200}       | ${200}        | ${2000}    | ${2000}     | ${0.4736}
      ${100}      | ${200}       | ${200}       | ${100}        | ${2000}    | ${2000}     | ${0.4736}
      ${100}      | ${200}       | ${200}       | ${100}        | ${5000}    | ${2000}     | ${0.4897}
      ${100}      | ${200}       | ${800}       | ${400}        | ${5000}    | ${2000}     | ${0.1071}
      ${300}      | ${200}       | ${100}       | ${200}        | ${10}      | ${10}       | ${1}
      ${300}      | ${200}       | ${50}        | ${80}         | ${10}      | ${10}       | ${0.921}
    `(
      'scaleToContainMatch($targetWidth, $targetHeight, $compareWidth, $compareHeight, $widthLimit, $heightLimit) [$expected]',
      (testCase) => {
        const {
          compareHeight,
          compareWidth,
          expected,
          heightLimit,
          targetHeight,
          targetWidth,
          widthLimit,
        } = testCase;

        const options = { widthLimit, heightLimit };
        const results = scaleToContainMatch(
          targetWidth,
          targetHeight,
          compareWidth,
          compareHeight,
          options,
        );

        expect(results).toBeCloseTo(expected);
      },
    );
  });

  describe('scaleToCoverMatch', () => {
    test.each`
      targetWidth | targetHeight | compareWidth | compareHeight | widthLimit | heightLimit | expected
      ${100}      | ${100}       | ${100}       | ${100}        | ${2000}    | ${2000}     | ${1}
      ${100}      | ${100}       | ${120}       | ${120}        | ${2000}    | ${2000}     | ${0.8245}
      ${100}      | ${100}       | ${110}       | ${110}        | ${2000}    | ${2000}     | ${0.9043}
      ${100}      | ${100}       | ${199}       | ${199}        | ${2000}    | ${2000}     | ${0.4763}
      ${100}      | ${100}       | ${200}       | ${200}        | ${2000}    | ${2000}     | ${0.4736}
      ${100}      | ${200}       | ${200}       | ${100}        | ${2000}    | ${2000}     | ${0}
      ${100}      | ${200}       | ${800}       | ${400}        | ${5000}    | ${2000}     | ${0.4444}
      ${300}      | ${200}       | ${100}       | ${200}        | ${10}      | ${10}       | ${0.931}
      ${300}      | ${200}       | ${50}        | ${80}         | ${10}      | ${10}       | ${0.8275}
    `(
      'scaleToCoverMatch($targetWidth, $targetHeight, $compareWidth, $compareHeight, $widthLimit, $heightLimit) [$expected]',
      (testCase) => {
        const {
          compareHeight,
          compareWidth,
          expected,
          heightLimit,
          targetHeight,
          targetWidth,
          widthLimit,
        } = testCase;

        const options = { widthLimit, heightLimit };
        const results = scaleToCoverMatch(
          targetWidth,
          targetHeight,
          compareWidth,
          compareHeight,
          options,
        );

        expect(results).toBeCloseTo(expected);
      },
    );
  });
});
