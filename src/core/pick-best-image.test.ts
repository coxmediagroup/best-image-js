import { pickBestImage } from './pick-best-image';
import { scaleToContainMatch, ratioMatch } from '../matchers';

const targetParams = { width: 830, height: 464.8, widthMin: 200 };

const matchBy = {
  downscale: {
    matchFunction: scaleToContainMatch,
    matchOptions: { widthLimit: 1600, heightLimit: 1600 },
  },
  ratio: {
    matchFunction: ratioMatch,
  },
  upscale: {
    matchFunction: scaleToContainMatch,
    matchOptions: { widthLimit: 399, heightLimit: 399 },
  },
};

describe('pickBestImage()', () => {
  it('should return the best image from a supplied list', () => {
    const imageList = [
      { name: 'image0', height: 42, width: 75 },
      { name: 'image1', height: 250, width: 130 },
      { name: 'image2', height: 400, width: 400 },
    ];
    const { 2: expected } = imageList;
    const results = pickBestImage(targetParams, matchBy, imageList);
    expect(results).toEqual(expected);
  });

  it('will return an empty list if there is no acceptable image to choose', () => {
    const imageList = [
      { name: 'image0', height: 42, width: 75 },
      { name: 'image1', height: 25, width: 130 },
      { name: 'image2', height: 40, width: 40 },
    ];
    const expected = {};
    const results = pickBestImage(targetParams, matchBy, imageList);
    expect(results).toEqual(expected);
  });
});
