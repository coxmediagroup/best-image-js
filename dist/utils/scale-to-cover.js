"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scaleToCover = void 0;

var _ratio = require("./ratio");

/**
 * Scale (b1, b2) to cover the area of (a1, b2)
 */
var scaleToCover = function scaleToCover(a1, a2, b1, b2) {
  var aFactor = (0, _ratio.ratio)(a1, a2);
  var bFactor = (0, _ratio.ratio)(b1, b2);
  var xFactor;

  if (aFactor < bFactor) {
    xFactor = (0, _ratio.ratio)(a2, b2);
  } else {
    xFactor = (0, _ratio.ratio)(a1, b1);
  }

  return xFactor;
};

exports.scaleToCover = scaleToCover;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zY2FsZS10by1jb3Zlci50cyJdLCJuYW1lcyI6WyJzY2FsZVRvQ292ZXIiLCJhMSIsImEyIiwiYjEiLCJiMiIsImFGYWN0b3IiLCJiRmFjdG9yIiwieEZhY3RvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUVBOzs7QUFHTyxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxFQUFELEVBQWFDLEVBQWIsRUFBeUJDLEVBQXpCLEVBQXFDQyxFQUFyQyxFQUE0RDtBQUN0RixNQUFNQyxPQUFPLEdBQUcsa0JBQU1KLEVBQU4sRUFBVUMsRUFBVixDQUFoQjtBQUNBLE1BQU1JLE9BQU8sR0FBRyxrQkFBTUgsRUFBTixFQUFVQyxFQUFWLENBQWhCO0FBRUEsTUFBSUcsT0FBSjs7QUFFQSxNQUFJRixPQUFPLEdBQUdDLE9BQWQsRUFBdUI7QUFDckJDLElBQUFBLE9BQU8sR0FBRyxrQkFBTUwsRUFBTixFQUFVRSxFQUFWLENBQVY7QUFDRCxHQUZELE1BRU87QUFDTEcsSUFBQUEsT0FBTyxHQUFHLGtCQUFNTixFQUFOLEVBQVVFLEVBQVYsQ0FBVjtBQUNEOztBQUVELFNBQU9JLE9BQVA7QUFDRCxDQWJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmF0aW8gfSBmcm9tICcuL3JhdGlvJztcblxuLyoqXG4gKiBTY2FsZSAoYjEsIGIyKSB0byBjb3ZlciB0aGUgYXJlYSBvZiAoYTEsIGIyKVxuICovXG5leHBvcnQgY29uc3Qgc2NhbGVUb0NvdmVyID0gKGExOiBudW1iZXIsIGEyOiBudW1iZXIsIGIxOiBudW1iZXIsIGIyOiBudW1iZXIpOiBudW1iZXIgPT4ge1xuICBjb25zdCBhRmFjdG9yID0gcmF0aW8oYTEsIGEyKTtcbiAgY29uc3QgYkZhY3RvciA9IHJhdGlvKGIxLCBiMik7XG5cbiAgbGV0IHhGYWN0b3I6IG51bWJlcjtcblxuICBpZiAoYUZhY3RvciA8IGJGYWN0b3IpIHtcbiAgICB4RmFjdG9yID0gcmF0aW8oYTIsIGIyKTtcbiAgfSBlbHNlIHtcbiAgICB4RmFjdG9yID0gcmF0aW8oYTEsIGIxKTtcbiAgfVxuXG4gIHJldHVybiB4RmFjdG9yO1xufTtcbiJdfQ==