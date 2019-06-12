"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getOrientation = void 0;

var _const = require("../const");

var _isSquare = require("./is-square");

/**
 * Given width and height, determine the orientation.
 */
var getOrientation = function getOrientation(width, height, options) {
  var _ref = options || {},
      _ref$orientationLabel = _ref.orientationLabels;

  _ref$orientationLabel = _ref$orientationLabel === void 0 ? {} : _ref$orientationLabel;
  var _ref$orientationLabel2 = _ref$orientationLabel.squareLabel,
      square = _ref$orientationLabel2 === void 0 ? _const.ORIENTATION_SQUARE : _ref$orientationLabel2,
      _ref$orientationLabel3 = _ref$orientationLabel.tallLabel,
      tall = _ref$orientationLabel3 === void 0 ? _const.ORIENTATION_TALL : _ref$orientationLabel3,
      _ref$orientationLabel4 = _ref$orientationLabel.wideLabel,
      wide = _ref$orientationLabel4 === void 0 ? _const.ORIENTATION_WIDE : _ref$orientationLabel4,
      _ref$sqRatioAccuracy = _ref.sqRatioAccuracy,
      sqRatioAccuracy = _ref$sqRatioAccuracy === void 0 ? undefined : _ref$sqRatioAccuracy;

  if ((0, _isSquare.isSquare)(width, height, {
    sqRatioAccuracy: sqRatioAccuracy
  })) {
    return square;
  }

  if (width > height) {
    return wide;
  }

  return tall;
};

exports.getOrientation = getOrientation;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9nZXQtb3JpZW50YXRpb24udHMiXSwibmFtZXMiOlsiZ2V0T3JpZW50YXRpb24iLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJvcmllbnRhdGlvbkxhYmVscyIsInNxdWFyZUxhYmVsIiwic3F1YXJlIiwiT1JJRU5UQVRJT05fU1FVQVJFIiwidGFsbExhYmVsIiwidGFsbCIsIk9SSUVOVEFUSU9OX1RBTEwiLCJ3aWRlTGFiZWwiLCJ3aWRlIiwiT1JJRU5UQVRJT05fV0lERSIsInNxUmF0aW9BY2N1cmFjeSIsInVuZGVmaW5lZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOztBQUVBOzs7QUFHTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQzVCQyxLQUQ0QixFQUU1QkMsTUFGNEIsRUFHNUJDLE9BSDRCLEVBV3pCO0FBQUEsYUFRQ0EsT0FBTyxJQUFJLEVBUlo7QUFBQSxtQ0FFREMsaUJBRkM7O0FBQUEsNkRBTUcsRUFOSDtBQUFBLHFEQUdDQyxXQUhEO0FBQUEsTUFHY0MsTUFIZCx1Q0FHdUJDLHlCQUh2QjtBQUFBLHFEQUlDQyxTQUpEO0FBQUEsTUFJWUMsSUFKWix1Q0FJbUJDLHVCQUpuQjtBQUFBLHFEQUtDQyxTQUxEO0FBQUEsTUFLWUMsSUFMWix1Q0FLbUJDLHVCQUxuQjtBQUFBLGtDQU9EQyxlQVBDO0FBQUEsTUFPREEsZUFQQyxxQ0FPaUJDLFNBUGpCOztBQVVILE1BQUksd0JBQVNkLEtBQVQsRUFBZ0JDLE1BQWhCLEVBQXdCO0FBQUVZLElBQUFBLGVBQWUsRUFBZkE7QUFBRixHQUF4QixDQUFKLEVBQWtEO0FBQ2hELFdBQU9SLE1BQVA7QUFDRDs7QUFFRCxNQUFJTCxLQUFLLEdBQUdDLE1BQVosRUFBb0I7QUFDbEIsV0FBT1UsSUFBUDtBQUNEOztBQUVELFNBQU9ILElBQVA7QUFDRCxDQTlCTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9SSUVOVEFUSU9OX1NRVUFSRSwgT1JJRU5UQVRJT05fVEFMTCwgT1JJRU5UQVRJT05fV0lERSB9IGZyb20gJy4uL2NvbnN0JztcbmltcG9ydCB7IGlzU3F1YXJlIH0gZnJvbSAnLi9pcy1zcXVhcmUnO1xuXG4vKipcbiAqIEdpdmVuIHdpZHRoIGFuZCBoZWlnaHQsIGRldGVybWluZSB0aGUgb3JpZW50YXRpb24uXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRPcmllbnRhdGlvbiA9IChcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXIsXG4gIG9wdGlvbnM/OiB7XG4gICAgb3JpZW50YXRpb25MYWJlbHM/OiB7XG4gICAgICBzcXVhcmVMYWJlbD86IHN0cmluZztcbiAgICAgIHRhbGxMYWJlbD86IHN0cmluZztcbiAgICAgIHdpZGVMYWJlbD86IHN0cmluZztcbiAgICB9O1xuICAgIHNxUmF0aW9BY2N1cmFjeT86IG51bWJlcjtcbiAgfSxcbikgPT4ge1xuICBjb25zdCB7XG4gICAgb3JpZW50YXRpb25MYWJlbHM6IHtcbiAgICAgIHNxdWFyZUxhYmVsOiBzcXVhcmUgPSBPUklFTlRBVElPTl9TUVVBUkUsXG4gICAgICB0YWxsTGFiZWw6IHRhbGwgPSBPUklFTlRBVElPTl9UQUxMLFxuICAgICAgd2lkZUxhYmVsOiB3aWRlID0gT1JJRU5UQVRJT05fV0lERSxcbiAgICB9ID0ge30sXG4gICAgc3FSYXRpb0FjY3VyYWN5ID0gdW5kZWZpbmVkLFxuICB9ID0gb3B0aW9ucyB8fCB7fTtcblxuICBpZiAoaXNTcXVhcmUod2lkdGgsIGhlaWdodCwgeyBzcVJhdGlvQWNjdXJhY3kgfSkpIHtcbiAgICByZXR1cm4gc3F1YXJlO1xuICB9XG5cbiAgaWYgKHdpZHRoID4gaGVpZ2h0KSB7XG4gICAgcmV0dXJuIHdpZGU7XG4gIH1cblxuICByZXR1cm4gdGFsbDtcbn07XG4iXX0=