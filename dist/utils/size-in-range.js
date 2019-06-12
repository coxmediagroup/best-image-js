"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sizeInRange = void 0;

var _inRange = require("./in-range");

// Determine if a size is within range of min and max
var sizeInRange = function sizeInRange(image, params) {
  var width = image.width,
      height = image.height;
  var _params$widthMin = params.widthMin,
      widthMin = _params$widthMin === void 0 ? 0 : _params$widthMin,
      _params$widthMax = params.widthMax,
      widthMax = _params$widthMax === void 0 ? 9999 : _params$widthMax,
      _params$heightMin = params.heightMin,
      heightMin = _params$heightMin === void 0 ? 0 : _params$heightMin,
      _params$heightMax = params.heightMax,
      heightMax = _params$heightMax === void 0 ? 9999 : _params$heightMax;
  var widthInRange = (0, _inRange.inRange)(width, widthMin, widthMax);
  var heightInRange = (0, _inRange.inRange)(height, heightMin, heightMax);
  return widthInRange && heightInRange;
};

exports.sizeInRange = sizeInRange;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zaXplLWluLXJhbmdlLnRzIl0sIm5hbWVzIjpbInNpemVJblJhbmdlIiwiaW1hZ2UiLCJwYXJhbXMiLCJ3aWR0aCIsImhlaWdodCIsIndpZHRoTWluIiwid2lkdGhNYXgiLCJoZWlnaHRNaW4iLCJoZWlnaHRNYXgiLCJ3aWR0aEluUmFuZ2UiLCJoZWlnaHRJblJhbmdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBR0E7QUFDTyxJQUFNQSxXQUF3QixHQUFHLFNBQTNCQSxXQUEyQixDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFBQSxNQUNqREMsS0FEaUQsR0FDL0JGLEtBRCtCLENBQ2pERSxLQURpRDtBQUFBLE1BQzFDQyxNQUQwQyxHQUMvQkgsS0FEK0IsQ0FDMUNHLE1BRDBDO0FBQUEseUJBRWtCRixNQUZsQixDQUVqREcsUUFGaUQ7QUFBQSxNQUVqREEsUUFGaUQsaUNBRXRDLENBRnNDO0FBQUEseUJBRWtCSCxNQUZsQixDQUVuQ0ksUUFGbUM7QUFBQSxNQUVuQ0EsUUFGbUMsaUNBRXhCLElBRndCO0FBQUEsMEJBRWtCSixNQUZsQixDQUVsQkssU0FGa0I7QUFBQSxNQUVsQkEsU0FGa0Isa0NBRU4sQ0FGTTtBQUFBLDBCQUVrQkwsTUFGbEIsQ0FFSE0sU0FGRztBQUFBLE1BRUhBLFNBRkcsa0NBRVMsSUFGVDtBQUl6RCxNQUFNQyxZQUFZLEdBQUcsc0JBQVFOLEtBQVIsRUFBZUUsUUFBZixFQUF5QkMsUUFBekIsQ0FBckI7QUFDQSxNQUFNSSxhQUFhLEdBQUcsc0JBQVFOLE1BQVIsRUFBZ0JHLFNBQWhCLEVBQTJCQyxTQUEzQixDQUF0QjtBQUVBLFNBQU9DLFlBQVksSUFBSUMsYUFBdkI7QUFDRCxDQVJNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaW5SYW5nZSB9IGZyb20gJy4vaW4tcmFuZ2UnO1xuaW1wb3J0IHsgU2l6ZUluUmFuZ2UgfSBmcm9tICcuLi90eXBlcyc7XG5cbi8vIERldGVybWluZSBpZiBhIHNpemUgaXMgd2l0aGluIHJhbmdlIG9mIG1pbiBhbmQgbWF4XG5leHBvcnQgY29uc3Qgc2l6ZUluUmFuZ2U6IFNpemVJblJhbmdlID0gKGltYWdlLCBwYXJhbXMpID0+IHtcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBpbWFnZTtcbiAgY29uc3QgeyB3aWR0aE1pbiA9IDAsIHdpZHRoTWF4ID0gOTk5OSwgaGVpZ2h0TWluID0gMCwgaGVpZ2h0TWF4ID0gOTk5OSB9ID0gcGFyYW1zO1xuXG4gIGNvbnN0IHdpZHRoSW5SYW5nZSA9IGluUmFuZ2Uod2lkdGgsIHdpZHRoTWluLCB3aWR0aE1heCk7XG4gIGNvbnN0IGhlaWdodEluUmFuZ2UgPSBpblJhbmdlKGhlaWdodCwgaGVpZ2h0TWluLCBoZWlnaHRNYXgpO1xuXG4gIHJldHVybiB3aWR0aEluUmFuZ2UgJiYgaGVpZ2h0SW5SYW5nZTtcbn07XG4iXX0=