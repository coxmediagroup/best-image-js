"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMatchResults = void 0;

var _utils = require("../utils");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Get image match results
 */
var getMatchResults = function getMatchResults(targetParams, imageMetaData, matchBy) {
  var targetWidth = targetParams.width,
      targetHeight = targetParams.height;
  var compareWidth = imageMetaData.width,
      compareHeight = imageMetaData.height;
  var matchedBy = Object.entries(matchBy).reduce(function (results, _ref) {
    var matcherName = _ref[0],
        matcher = _ref[1];
    var match = matcher.matchFunction(targetWidth, targetHeight, compareWidth, compareHeight, matcher.matchOptions);
    var point = typeof matcher.point === 'number' ? matcher.point : 1;
    var score = point * match;
    results[matcherName] = {
      point: point,
      match: match,
      score: score
    };
    return results;
  }, {});

  var score = _utils.average.apply(void 0, _toConsumableArray(Object.values(matchedBy).map(function (_ref2) {
    var score = _ref2.score;
    return score;
  })));

  var matchResults = {
    imageMetaData: imageMetaData,
    matchedBy: matchedBy,
    score: score,
    targetParams: targetParams
  };
  return matchResults;
};

exports.getMatchResults = getMatchResults;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb3JlL2dldC1tYXRjaC1yZXN1bHRzLnRzIl0sIm5hbWVzIjpbImdldE1hdGNoUmVzdWx0cyIsInRhcmdldFBhcmFtcyIsImltYWdlTWV0YURhdGEiLCJtYXRjaEJ5IiwidGFyZ2V0V2lkdGgiLCJ3aWR0aCIsInRhcmdldEhlaWdodCIsImhlaWdodCIsImNvbXBhcmVXaWR0aCIsImNvbXBhcmVIZWlnaHQiLCJtYXRjaGVkQnkiLCJPYmplY3QiLCJlbnRyaWVzIiwicmVkdWNlIiwicmVzdWx0cyIsIm1hdGNoZXJOYW1lIiwibWF0Y2hlciIsIm1hdGNoIiwibWF0Y2hGdW5jdGlvbiIsIm1hdGNoT3B0aW9ucyIsInBvaW50Iiwic2NvcmUiLCJhdmVyYWdlIiwidmFsdWVzIiwibWFwIiwibWF0Y2hSZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFHQTs7O0FBR08sSUFBTUEsZUFBZ0MsR0FBRyxTQUFuQ0EsZUFBbUMsQ0FBQ0MsWUFBRCxFQUFlQyxhQUFmLEVBQThCQyxPQUE5QixFQUEwQztBQUFBLE1BQ3pFQyxXQUR5RSxHQUNuQ0gsWUFEbUMsQ0FDaEZJLEtBRGdGO0FBQUEsTUFDcERDLFlBRG9ELEdBQ25DTCxZQURtQyxDQUM1RE0sTUFENEQ7QUFBQSxNQUV6RUMsWUFGeUUsR0FFakNOLGFBRmlDLENBRWhGRyxLQUZnRjtBQUFBLE1BRW5ESSxhQUZtRCxHQUVqQ1AsYUFGaUMsQ0FFM0RLLE1BRjJEO0FBSXhGLE1BQU1HLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxPQUFQLENBQWVULE9BQWYsRUFBd0JVLE1BQXhCLENBQStCLFVBQUNDLE9BQUQsUUFBNkM7QUFBQSxRQUE5QkMsV0FBOEIsUUFBakMsQ0FBaUM7QUFBQSxRQUFkQyxPQUFjLFFBQWpCLENBQWlCO0FBQzVGLFFBQU1DLEtBQUssR0FBR0QsT0FBTyxDQUFDRSxhQUFSLENBQ1pkLFdBRFksRUFFWkUsWUFGWSxFQUdaRSxZQUhZLEVBSVpDLGFBSlksRUFLWk8sT0FBTyxDQUFDRyxZQUxJLENBQWQ7QUFRQSxRQUFNQyxLQUFLLEdBQUcsT0FBT0osT0FBTyxDQUFDSSxLQUFmLEtBQXlCLFFBQXpCLEdBQW9DSixPQUFPLENBQUNJLEtBQTVDLEdBQW9ELENBQWxFO0FBQ0EsUUFBTUMsS0FBSyxHQUFHRCxLQUFLLEdBQUdILEtBQXRCO0FBRUFILElBQUFBLE9BQU8sQ0FBQ0MsV0FBRCxDQUFQLEdBQXVCO0FBQUVLLE1BQUFBLEtBQUssRUFBTEEsS0FBRjtBQUFTSCxNQUFBQSxLQUFLLEVBQUxBLEtBQVQ7QUFBZ0JJLE1BQUFBLEtBQUssRUFBTEE7QUFBaEIsS0FBdkI7QUFFQSxXQUFPUCxPQUFQO0FBQ0QsR0FmaUIsRUFlZixFQWZlLENBQWxCOztBQWlCQSxNQUFNTyxLQUFLLEdBQUdDLGdEQUFXWCxNQUFNLENBQUNZLE1BQVAsQ0FBY2IsU0FBZCxFQUF5QmMsR0FBekIsQ0FBNkI7QUFBQSxRQUFHSCxLQUFILFNBQUdBLEtBQUg7QUFBQSxXQUFlQSxLQUFmO0FBQUEsR0FBN0IsQ0FBWCxFQUFkOztBQUVBLE1BQU1JLFlBQVksR0FBRztBQUFFdkIsSUFBQUEsYUFBYSxFQUFiQSxhQUFGO0FBQWlCUSxJQUFBQSxTQUFTLEVBQVRBLFNBQWpCO0FBQTRCVyxJQUFBQSxLQUFLLEVBQUxBLEtBQTVCO0FBQW1DcEIsSUFBQUEsWUFBWSxFQUFaQTtBQUFuQyxHQUFyQjtBQUVBLFNBQU93QixZQUFQO0FBQ0QsQ0ExQk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdmVyYWdlIH0gZnJvbSAnLi4vdXRpbHMnO1xuaW1wb3J0IHsgR2V0TWF0Y2hSZXN1bHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIEdldCBpbWFnZSBtYXRjaCByZXN1bHRzXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRNYXRjaFJlc3VsdHM6IEdldE1hdGNoUmVzdWx0cyA9ICh0YXJnZXRQYXJhbXMsIGltYWdlTWV0YURhdGEsIG1hdGNoQnkpID0+IHtcbiAgY29uc3QgeyB3aWR0aDogdGFyZ2V0V2lkdGgsIGhlaWdodDogdGFyZ2V0SGVpZ2h0IH0gPSB0YXJnZXRQYXJhbXM7XG4gIGNvbnN0IHsgd2lkdGg6IGNvbXBhcmVXaWR0aCwgaGVpZ2h0OiBjb21wYXJlSGVpZ2h0IH0gPSBpbWFnZU1ldGFEYXRhO1xuXG4gIGNvbnN0IG1hdGNoZWRCeSA9IE9iamVjdC5lbnRyaWVzKG1hdGNoQnkpLnJlZHVjZSgocmVzdWx0cywgeyAwOiBtYXRjaGVyTmFtZSwgMTogbWF0Y2hlciB9KSA9PiB7XG4gICAgY29uc3QgbWF0Y2ggPSBtYXRjaGVyLm1hdGNoRnVuY3Rpb24oXG4gICAgICB0YXJnZXRXaWR0aCxcbiAgICAgIHRhcmdldEhlaWdodCxcbiAgICAgIGNvbXBhcmVXaWR0aCxcbiAgICAgIGNvbXBhcmVIZWlnaHQsXG4gICAgICBtYXRjaGVyLm1hdGNoT3B0aW9ucyxcbiAgICApO1xuXG4gICAgY29uc3QgcG9pbnQgPSB0eXBlb2YgbWF0Y2hlci5wb2ludCA9PT0gJ251bWJlcicgPyBtYXRjaGVyLnBvaW50IDogMTtcbiAgICBjb25zdCBzY29yZSA9IHBvaW50ICogbWF0Y2g7XG5cbiAgICByZXN1bHRzW21hdGNoZXJOYW1lXSA9IHsgcG9pbnQsIG1hdGNoLCBzY29yZSB9O1xuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sIHt9KTtcblxuICBjb25zdCBzY29yZSA9IGF2ZXJhZ2UoLi4uT2JqZWN0LnZhbHVlcyhtYXRjaGVkQnkpLm1hcCgoeyBzY29yZSB9KSA9PiBzY29yZSkpO1xuXG4gIGNvbnN0IG1hdGNoUmVzdWx0cyA9IHsgaW1hZ2VNZXRhRGF0YSwgbWF0Y2hlZEJ5LCBzY29yZSwgdGFyZ2V0UGFyYW1zIH07XG5cbiAgcmV0dXJuIG1hdGNoUmVzdWx0cztcbn07XG4iXX0=