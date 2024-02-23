var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function car_info(manufacturer, model, options) {
    if (options === void 0) { options = {}; }
    return __assign({ manufacturer: manufacturer, model: model }, options);
}
var myCar = car_info("Toyota", "Corolla", { color: "Golden", optionalFeature: "Sunroof" });
~console.log("Car Information:");
console.log(myCar);
