"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickBestImage = void 0;

var _getMatchResults2 = require("./get-match-results");

var _utils = require("../utils");

var initialResults = {
  imageMetaData: undefined,
  score: 0
};
/**
 * Use provided matchers and data to get a "best" image meta data
 */

var pickBestImage = function pickBestImage(targetParams, matchBy, imageMetaDataList) {
  var _imageMetaDataList$fi = imageMetaDataList.filter(function (current) {
    return (0, _utils.sizeInRange)(current, targetParams);
  }).reduce(function (prevResults, imageMetaData) {
    var width = imageMetaData.width,
        height = imageMetaData.height;

    var _getMatchResults = (0, _getMatchResults2.getMatchResults)(targetParams, {
      width: width,
      height: height
    }, matchBy),
        score = _getMatchResults.score;

    if (score > prevResults.score) {
      return {
        imageMetaData: imageMetaData,
        score: score
      };
    }

    return prevResults;
  }, initialResults),
      _imageMetaDataList$fi2 = _imageMetaDataList$fi.imageMetaData,
      imageMetaData = _imageMetaDataList$fi2 === void 0 ? {} : _imageMetaDataList$fi2;

  return imageMetaData;
};

exports.pickBestImage = pickBestImage;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL3BpY2stYmVzdC1pbWFnZS50cyJdLCJuYW1lcyI6WyJpbml0aWFsUmVzdWx0cyIsImltYWdlTWV0YURhdGEiLCJ1bmRlZmluZWQiLCJzY29yZSIsInBpY2tCZXN0SW1hZ2UiLCJ0YXJnZXRQYXJhbXMiLCJtYXRjaEJ5IiwiaW1hZ2VNZXRhRGF0YUxpc3QiLCJmaWx0ZXIiLCJjdXJyZW50IiwicmVkdWNlIiwicHJldlJlc3VsdHMiLCJ3aWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUdBLElBQU1BLGNBQWMsR0FBRztBQUFFQyxFQUFBQSxhQUFhLEVBQUVDLFNBQWpCO0FBQTRCQyxFQUFBQSxLQUFLLEVBQUU7QUFBbkMsQ0FBdkI7QUFFQTs7OztBQUdPLElBQU1DLGFBQTJCLEdBQUcsU0FBOUJBLGFBQThCLENBQUNDLFlBQUQsRUFBZUMsT0FBZixFQUF3QkMsaUJBQXhCLEVBQThDO0FBQUEsOEJBQ3hEQSxpQkFBaUIsQ0FDN0NDLE1BRDRCLENBQ3JCLFVBQUNDLE9BQUQ7QUFBQSxXQUFhLHdCQUFZQSxPQUFaLEVBQXFCSixZQUFyQixDQUFiO0FBQUEsR0FEcUIsRUFFNUJLLE1BRjRCLENBRXJCLFVBQUNDLFdBQUQsRUFBY1YsYUFBZCxFQUFnQztBQUFBLFFBQzlCVyxLQUQ4QixHQUNaWCxhQURZLENBQzlCVyxLQUQ4QjtBQUFBLFFBQ3ZCQyxNQUR1QixHQUNaWixhQURZLENBQ3ZCWSxNQUR1Qjs7QUFBQSwyQkFFcEIsdUNBQWdCUixZQUFoQixFQUE4QjtBQUFFTyxNQUFBQSxLQUFLLEVBQUxBLEtBQUY7QUFBU0MsTUFBQUEsTUFBTSxFQUFOQTtBQUFULEtBQTlCLEVBQWlEUCxPQUFqRCxDQUZvQjtBQUFBLFFBRTlCSCxLQUY4QixvQkFFOUJBLEtBRjhCOztBQUl0QyxRQUFJQSxLQUFLLEdBQUdRLFdBQVcsQ0FBQ1IsS0FBeEIsRUFBK0I7QUFDN0IsYUFBTztBQUFFRixRQUFBQSxhQUFhLEVBQWJBLGFBQUY7QUFBaUJFLFFBQUFBLEtBQUssRUFBTEE7QUFBakIsT0FBUDtBQUNEOztBQUVELFdBQU9RLFdBQVA7QUFDRCxHQVg0QixFQVcxQlgsY0FYMEIsQ0FEd0Q7QUFBQSxxREFDL0VDLGFBRCtFO0FBQUEsTUFDL0VBLGFBRCtFLHVDQUMvRCxFQUQrRDs7QUFjdkYsU0FBT0EsYUFBUDtBQUNELENBZk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRNYXRjaFJlc3VsdHMgfSBmcm9tICcuL2dldC1tYXRjaC1yZXN1bHRzJztcbmltcG9ydCB7IHNpemVJblJhbmdlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgR2V0QmVzdEltYWdlIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsUmVzdWx0cyA9IHsgaW1hZ2VNZXRhRGF0YTogdW5kZWZpbmVkLCBzY29yZTogMCB9O1xuXG4vKipcbiAqIFVzZSBwcm92aWRlZCBtYXRjaGVycyBhbmQgZGF0YSB0byBnZXQgYSBcImJlc3RcIiBpbWFnZSBtZXRhIGRhdGFcbiAqL1xuZXhwb3J0IGNvbnN0IHBpY2tCZXN0SW1hZ2U6IEdldEJlc3RJbWFnZSA9ICh0YXJnZXRQYXJhbXMsIG1hdGNoQnksIGltYWdlTWV0YURhdGFMaXN0KSA9PiB7XG4gIGNvbnN0IHsgaW1hZ2VNZXRhRGF0YSA9IHt9IH0gPSBpbWFnZU1ldGFEYXRhTGlzdFxuICAgIC5maWx0ZXIoKGN1cnJlbnQpID0+IHNpemVJblJhbmdlKGN1cnJlbnQsIHRhcmdldFBhcmFtcykpXG4gICAgLnJlZHVjZSgocHJldlJlc3VsdHMsIGltYWdlTWV0YURhdGEpID0+IHtcbiAgICAgIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gaW1hZ2VNZXRhRGF0YTtcbiAgICAgIGNvbnN0IHsgc2NvcmUgfSA9IGdldE1hdGNoUmVzdWx0cyh0YXJnZXRQYXJhbXMsIHsgd2lkdGgsIGhlaWdodCB9LCBtYXRjaEJ5KTtcblxuICAgICAgaWYgKHNjb3JlID4gcHJldlJlc3VsdHMuc2NvcmUpIHtcbiAgICAgICAgcmV0dXJuIHsgaW1hZ2VNZXRhRGF0YSwgc2NvcmUgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZSZXN1bHRzO1xuICAgIH0sIGluaXRpYWxSZXN1bHRzKTtcblxuICByZXR1cm4gaW1hZ2VNZXRhRGF0YTtcbn07XG4iXX0=