"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.average = void 0;

// Alias "average" calculations
var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (prev, curr) {
    return prev + curr;
  }, 0) / numbers.length;
};

exports.average = average;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9hdmVyYWdlLnRzIl0sIm5hbWVzIjpbImF2ZXJhZ2UiLCJudW1iZXJzIiwicmVkdWNlIiwicHJldiIsImN1cnIiLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtBQUNPLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQTBCO0FBQUEsb0NBQXRCQyxPQUFzQjtBQUF0QkEsSUFBQUEsT0FBc0I7QUFBQTs7QUFDL0MsU0FBT0EsT0FBTyxDQUFDQyxNQUFSLENBQWUsVUFBQ0MsSUFBRCxFQUFPQyxJQUFQO0FBQUEsV0FBZ0JELElBQUksR0FBR0MsSUFBdkI7QUFBQSxHQUFmLEVBQTRDLENBQTVDLElBQWlESCxPQUFPLENBQUNJLE1BQWhFO0FBQ0QsQ0FGTSIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFsaWFzIFwiYXZlcmFnZVwiIGNhbGN1bGF0aW9uc1xuZXhwb3J0IGNvbnN0IGF2ZXJhZ2UgPSAoLi4ubnVtYmVyczogbnVtYmVyW10pID0+IHtcbiAgcmV0dXJuIG51bWJlcnMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiBwcmV2ICsgY3VyciwgMCkgLyBudW1iZXJzLmxlbmd0aDtcbn07XG4iXX0=