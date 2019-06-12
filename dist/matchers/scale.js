"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleToCoverMatch = exports.scaleToContainMatch = void 0;

var _utils = require("../utils");

/**
 * The position the compare factor value, on the line of distance between
 * the best case 1 (no scale) and the worst case 0 (maximum scale possible.)
 *
 * e.g. https://developer.mozilla.org/en-US/docs/Web/CSS/background-size
 */

/**
 * Scale to contain.
 *
 * The compare must scale to fit completly within the target dimensions
 */
var scaleToContainMatch = function scaleToContainMatch(targetWidth, targetHeight, compareWidth, compareHeight, options) {
  var widthLimit = options.widthLimit,
      heightLimit = options.heightLimit;
  var factor = (0, _utils.scaleToContain)(targetWidth, targetHeight, compareWidth, compareHeight);
  var limitFactor = (0, _utils.scaleToContain)(targetWidth, targetHeight, widthLimit, heightLimit);
  var match = (0, _utils.distanceInRange)(1, factor, limitFactor);
  return match;
};
/**
 * Scale to cover
 */


exports.scaleToContainMatch = scaleToContainMatch;

var scaleToCoverMatch = function scaleToCoverMatch(targetWidth, targetHeight, compareWidth, compareHeight, options) {
  var widthLimit = options.widthLimit,
      heightLimit = options.heightLimit;
  var factor = (0, _utils.scaleToCover)(targetWidth, targetHeight, compareWidth, compareHeight);
  var limitFactor = (0, _utils.scaleToCover)(targetWidth, targetHeight, widthLimit, heightLimit);
  var match = (0, _utils.distanceInRange)(1, factor, limitFactor);
  return match;
};

exports.scaleToCoverMatch = scaleToCoverMatch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tYXRjaGVycy9zY2FsZS50cyJdLCJuYW1lcyI6WyJzY2FsZVRvQ29udGFpbk1hdGNoIiwidGFyZ2V0V2lkdGgiLCJ0YXJnZXRIZWlnaHQiLCJjb21wYXJlV2lkdGgiLCJjb21wYXJlSGVpZ2h0Iiwib3B0aW9ucyIsIndpZHRoTGltaXQiLCJoZWlnaHRMaW1pdCIsImZhY3RvciIsImxpbWl0RmFjdG9yIiwibWF0Y2giLCJzY2FsZVRvQ292ZXJNYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQU1BOztBQU5BOzs7Ozs7O0FBUUE7Ozs7O0FBS08sSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixDQUNqQ0MsV0FEaUMsRUFFakNDLFlBRmlDLEVBR2pDQyxZQUhpQyxFQUlqQ0MsYUFKaUMsRUFLakNDLE9BTGlDLEVBU3RCO0FBQUEsTUFDSEMsVUFERyxHQUN5QkQsT0FEekIsQ0FDSEMsVUFERztBQUFBLE1BQ1NDLFdBRFQsR0FDeUJGLE9BRHpCLENBQ1NFLFdBRFQ7QUFHWCxNQUFNQyxNQUFNLEdBQUcsMkJBQWVQLFdBQWYsRUFBNEJDLFlBQTVCLEVBQTBDQyxZQUExQyxFQUF3REMsYUFBeEQsQ0FBZjtBQUNBLE1BQU1LLFdBQVcsR0FBRywyQkFBZVIsV0FBZixFQUE0QkMsWUFBNUIsRUFBMENJLFVBQTFDLEVBQXNEQyxXQUF0RCxDQUFwQjtBQUNBLE1BQU1HLEtBQUssR0FBRyw0QkFBZ0IsQ0FBaEIsRUFBbUJGLE1BQW5CLEVBQTJCQyxXQUEzQixDQUFkO0FBRUEsU0FBT0MsS0FBUDtBQUNELENBakJNO0FBbUJQOzs7Ozs7O0FBR08sSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUMvQlYsV0FEK0IsRUFFL0JDLFlBRitCLEVBRy9CQyxZQUgrQixFQUkvQkMsYUFKK0IsRUFLL0JDLE9BTCtCLEVBU3BCO0FBQUEsTUFDSEMsVUFERyxHQUN5QkQsT0FEekIsQ0FDSEMsVUFERztBQUFBLE1BQ1NDLFdBRFQsR0FDeUJGLE9BRHpCLENBQ1NFLFdBRFQ7QUFHWCxNQUFNQyxNQUFNLEdBQUcseUJBQWFQLFdBQWIsRUFBMEJDLFlBQTFCLEVBQXdDQyxZQUF4QyxFQUFzREMsYUFBdEQsQ0FBZjtBQUNBLE1BQU1LLFdBQVcsR0FBRyx5QkFBYVIsV0FBYixFQUEwQkMsWUFBMUIsRUFBd0NJLFVBQXhDLEVBQW9EQyxXQUFwRCxDQUFwQjtBQUNBLE1BQU1HLEtBQUssR0FBRyw0QkFBZ0IsQ0FBaEIsRUFBbUJGLE1BQW5CLEVBQTJCQyxXQUEzQixDQUFkO0FBRUEsU0FBT0MsS0FBUDtBQUNELENBakJNIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGUgcG9zaXRpb24gdGhlIGNvbXBhcmUgZmFjdG9yIHZhbHVlLCBvbiB0aGUgbGluZSBvZiBkaXN0YW5jZSBiZXR3ZWVuXG4gKiB0aGUgYmVzdCBjYXNlIDEgKG5vIHNjYWxlKSBhbmQgdGhlIHdvcnN0IGNhc2UgMCAobWF4aW11bSBzY2FsZSBwb3NzaWJsZS4pXG4gKlxuICogZS5nLiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvYmFja2dyb3VuZC1zaXplXG4gKi9cbmltcG9ydCB7IGRpc3RhbmNlSW5SYW5nZSwgc2NhbGVUb0NvbnRhaW4sIHNjYWxlVG9Db3ZlciB9IGZyb20gJy4uL3V0aWxzJztcblxuLyoqXG4gKiBTY2FsZSB0byBjb250YWluLlxuICpcbiAqIFRoZSBjb21wYXJlIG11c3Qgc2NhbGUgdG8gZml0IGNvbXBsZXRseSB3aXRoaW4gdGhlIHRhcmdldCBkaW1lbnNpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBzY2FsZVRvQ29udGFpbk1hdGNoID0gKFxuICB0YXJnZXRXaWR0aDogbnVtYmVyLFxuICB0YXJnZXRIZWlnaHQ6IG51bWJlcixcbiAgY29tcGFyZVdpZHRoOiBudW1iZXIsXG4gIGNvbXBhcmVIZWlnaHQ6IG51bWJlcixcbiAgb3B0aW9uczoge1xuICAgIHdpZHRoTGltaXQ6IG51bWJlcjtcbiAgICBoZWlnaHRMaW1pdDogbnVtYmVyO1xuICB9LFxuKTogbnVtYmVyID0+IHtcbiAgY29uc3QgeyB3aWR0aExpbWl0LCBoZWlnaHRMaW1pdCB9ID0gb3B0aW9ucztcblxuICBjb25zdCBmYWN0b3IgPSBzY2FsZVRvQ29udGFpbih0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0LCBjb21wYXJlV2lkdGgsIGNvbXBhcmVIZWlnaHQpO1xuICBjb25zdCBsaW1pdEZhY3RvciA9IHNjYWxlVG9Db250YWluKHRhcmdldFdpZHRoLCB0YXJnZXRIZWlnaHQsIHdpZHRoTGltaXQsIGhlaWdodExpbWl0KTtcbiAgY29uc3QgbWF0Y2ggPSBkaXN0YW5jZUluUmFuZ2UoMSwgZmFjdG9yLCBsaW1pdEZhY3Rvcik7XG5cbiAgcmV0dXJuIG1hdGNoO1xufTtcblxuLyoqXG4gKiBTY2FsZSB0byBjb3ZlclxuICovXG5leHBvcnQgY29uc3Qgc2NhbGVUb0NvdmVyTWF0Y2ggPSAoXG4gIHRhcmdldFdpZHRoOiBudW1iZXIsXG4gIHRhcmdldEhlaWdodDogbnVtYmVyLFxuICBjb21wYXJlV2lkdGg6IG51bWJlcixcbiAgY29tcGFyZUhlaWdodDogbnVtYmVyLFxuICBvcHRpb25zOiB7XG4gICAgd2lkdGhMaW1pdDogbnVtYmVyO1xuICAgIGhlaWdodExpbWl0OiBudW1iZXI7XG4gIH0sXG4pOiBudW1iZXIgPT4ge1xuICBjb25zdCB7IHdpZHRoTGltaXQsIGhlaWdodExpbWl0IH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IGZhY3RvciA9IHNjYWxlVG9Db3Zlcih0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0LCBjb21wYXJlV2lkdGgsIGNvbXBhcmVIZWlnaHQpO1xuICBjb25zdCBsaW1pdEZhY3RvciA9IHNjYWxlVG9Db3Zlcih0YXJnZXRXaWR0aCwgdGFyZ2V0SGVpZ2h0LCB3aWR0aExpbWl0LCBoZWlnaHRMaW1pdCk7XG4gIGNvbnN0IG1hdGNoID0gZGlzdGFuY2VJblJhbmdlKDEsIGZhY3RvciwgbGltaXRGYWN0b3IpO1xuXG4gIHJldHVybiBtYXRjaDtcbn07XG4iXX0=