"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angleOfVector = void 0;

/**
 * Map (x, y) to Math.atan2(y, x)
 *
 * @returns number between -PI and PI (radians)
 */
var angleOfVector = function angleOfVector(x, y) {
  return Math.atan2(y, x);
};

exports.angleOfVector = angleOfVector;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9hbmdsZS1vZi12ZWN0b3IudHMiXSwibmFtZXMiOlsiYW5nbGVPZlZlY3RvciIsIngiLCJ5IiwiTWF0aCIsImF0YW4yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7O0FBS08sSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxDQUFELEVBQVlDLENBQVosRUFBMEI7QUFDckQsU0FBT0MsSUFBSSxDQUFDQyxLQUFMLENBQVdGLENBQVgsRUFBY0QsQ0FBZCxDQUFQO0FBQ0QsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogTWFwICh4LCB5KSB0byBNYXRoLmF0YW4yKHksIHgpXG4gKlxuICogQHJldHVybnMgbnVtYmVyIGJldHdlZW4gLVBJIGFuZCBQSSAocmFkaWFucylcbiAqL1xuZXhwb3J0IGNvbnN0IGFuZ2xlT2ZWZWN0b3IgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIE1hdGguYXRhbjIoeSwgeCk7XG59O1xuIl19