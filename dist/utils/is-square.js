"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSquare = void 0;

var _absRatio = require("./abs-ratio");

var _const = require("../const");

/**
 * Determine if a ratio is square (or close-enough.)
 *
 * @param width: Image width
 * @param height: Image height
 * @param options
 * @param options.sqRatioAccuracy: Decimal percentage of squareness: 1.0 – 0.0
 */
var isSquare = function isSquare(width, height, options) {
  var thisRatio = (0, _absRatio.absRatio)(width, height);

  var _ref = options || {},
      _ref$sqRatioAccuracy = _ref.sqRatioAccuracy,
      sqRatioAccuracy = _ref$sqRatioAccuracy === void 0 ? _const.SQUARE_RATIO_ACCURACY : _ref$sqRatioAccuracy;

  var results = thisRatio >= sqRatioAccuracy;
  return results;
};

exports.isSquare = isSquare;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9pcy1zcXVhcmUudHMiXSwibmFtZXMiOlsiaXNTcXVhcmUiLCJ3aWR0aCIsImhlaWdodCIsIm9wdGlvbnMiLCJ0aGlzUmF0aW8iLCJzcVJhdGlvQWNjdXJhY3kiLCJTUVVBUkVfUkFUSU9fQUNDVVJBQ1kiLCJyZXN1bHRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7Ozs7Ozs7O0FBUU8sSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFnQkMsTUFBaEIsRUFBZ0NDLE9BQWhDLEVBQTBFO0FBQ2hHLE1BQU1DLFNBQVMsR0FBRyx3QkFBU0gsS0FBVCxFQUFnQkMsTUFBaEIsQ0FBbEI7O0FBRGdHLGFBRTVDQyxPQUFPLElBQUksRUFGaUM7QUFBQSxrQ0FFeEZFLGVBRndGO0FBQUEsTUFFeEZBLGVBRndGLHFDQUV0RUMsNEJBRnNFOztBQUloRyxNQUFNQyxPQUFPLEdBQUdILFNBQVMsSUFBSUMsZUFBN0I7QUFFQSxTQUFPRSxPQUFQO0FBQ0QsQ0FQTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGFic1JhdGlvIH0gZnJvbSAnLi9hYnMtcmF0aW8nO1xuaW1wb3J0IHsgU1FVQVJFX1JBVElPX0FDQ1VSQUNZIH0gZnJvbSAnLi4vY29uc3QnO1xuXG4vKipcbiAqIERldGVybWluZSBpZiBhIHJhdGlvIGlzIHNxdWFyZSAob3IgY2xvc2UtZW5vdWdoLilcbiAqXG4gKiBAcGFyYW0gd2lkdGg6IEltYWdlIHdpZHRoXG4gKiBAcGFyYW0gaGVpZ2h0OiBJbWFnZSBoZWlnaHRcbiAqIEBwYXJhbSBvcHRpb25zXG4gKiBAcGFyYW0gb3B0aW9ucy5zcVJhdGlvQWNjdXJhY3k6IERlY2ltYWwgcGVyY2VudGFnZSBvZiBzcXVhcmVuZXNzOiAxLjAg4oCTIDAuMFxuICovXG5leHBvcnQgY29uc3QgaXNTcXVhcmUgPSAod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIG9wdGlvbnM/OiB7IHNxUmF0aW9BY2N1cmFjeTogbnVtYmVyIH0pID0+IHtcbiAgY29uc3QgdGhpc1JhdGlvID0gYWJzUmF0aW8od2lkdGgsIGhlaWdodCk7XG4gIGNvbnN0IHsgc3FSYXRpb0FjY3VyYWN5ID0gU1FVQVJFX1JBVElPX0FDQ1VSQUNZIH0gPSBvcHRpb25zIHx8IHt9O1xuXG4gIGNvbnN0IHJlc3VsdHMgPSB0aGlzUmF0aW8gPj0gc3FSYXRpb0FjY3VyYWN5O1xuXG4gIHJldHVybiByZXN1bHRzO1xufTtcbiJdfQ==