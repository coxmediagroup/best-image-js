"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleToContain = void 0;

var _ratio = require("./ratio");

/**
 * Scale (b1, b2) to fit within the area of (a1, a2)
 */
var scaleToContain = function scaleToContain(a1, a2, b1, b2) {
  var aFactor = (0, _ratio.ratio)(a1, a2);
  var bFactor = (0, _ratio.ratio)(b1, b2);
  var xFactor;

  if (aFactor > bFactor) {
    xFactor = (0, _ratio.ratio)(a2, b2);
  } else {
    xFactor = (0, _ratio.ratio)(a1, b1);
  }

  return xFactor;
};

exports.scaleToContain = scaleToContain;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zY2FsZS10by1jb250YWluLnRzIl0sIm5hbWVzIjpbInNjYWxlVG9Db250YWluIiwiYTEiLCJhMiIsImIxIiwiYjIiLCJhRmFjdG9yIiwiYkZhY3RvciIsInhGYWN0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7O0FBR08sSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxFQUFELEVBQWFDLEVBQWIsRUFBeUJDLEVBQXpCLEVBQXFDQyxFQUFyQyxFQUE0RDtBQUN4RixNQUFNQyxPQUFPLEdBQUcsa0JBQU1KLEVBQU4sRUFBVUMsRUFBVixDQUFoQjtBQUNBLE1BQU1JLE9BQU8sR0FBRyxrQkFBTUgsRUFBTixFQUFVQyxFQUFWLENBQWhCO0FBRUEsTUFBSUcsT0FBSjs7QUFFQSxNQUFJRixPQUFPLEdBQUdDLE9BQWQsRUFBdUI7QUFDckJDLElBQUFBLE9BQU8sR0FBRyxrQkFBTUwsRUFBTixFQUFVRSxFQUFWLENBQVY7QUFDRCxHQUZELE1BRU87QUFDTEcsSUFBQUEsT0FBTyxHQUFHLGtCQUFNTixFQUFOLEVBQVVFLEVBQVYsQ0FBVjtBQUNEOztBQUVELFNBQU9JLE9BQVA7QUFDRCxDQWJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmF0aW8gfSBmcm9tICcuL3JhdGlvJztcblxuLyoqXG4gKiBTY2FsZSAoYjEsIGIyKSB0byBmaXQgd2l0aGluIHRoZSBhcmVhIG9mIChhMSwgYTIpXG4gKi9cbmV4cG9ydCBjb25zdCBzY2FsZVRvQ29udGFpbiA9IChhMTogbnVtYmVyLCBhMjogbnVtYmVyLCBiMTogbnVtYmVyLCBiMjogbnVtYmVyKTogbnVtYmVyID0+IHtcbiAgY29uc3QgYUZhY3RvciA9IHJhdGlvKGExLCBhMik7XG4gIGNvbnN0IGJGYWN0b3IgPSByYXRpbyhiMSwgYjIpO1xuXG4gIGxldCB4RmFjdG9yOiBudW1iZXI7XG5cbiAgaWYgKGFGYWN0b3IgPiBiRmFjdG9yKSB7XG4gICAgeEZhY3RvciA9IHJhdGlvKGEyLCBiMik7XG4gIH0gZWxzZSB7XG4gICAgeEZhY3RvciA9IHJhdGlvKGExLCBiMSk7XG4gIH1cblxuICByZXR1cm4geEZhY3Rvcjtcbn07XG4iXX0=