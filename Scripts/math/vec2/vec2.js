var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var math;
(function (math) {
    var Vec2 = /** @class */ (function (_super) {
        __extends(Vec2, _super);
        function Vec2(x, y) {
            return _super.call(this, x, y) || this;
        }
        Vec2.Distance = function (p1, p2) {
            var distanceSquare = Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2);
            return Math.sqrt(distanceSquare);
        };
        Vec2.prototype.AddX = function (x) {
            return new math.Vec2(this.x + x, this.y);
        };
        Vec2.prototype.AddY = function (y) {
            return new math.Vec2(this.x, this.y + y);
        };
        Vec2.prototype.AddVec = function (x, y) {
            return this.AddX(x).AddY(y);
        };
        Vec2.prototype.SortCordinates = function () {
            if (this.x <= this.y)
                return this;
            return new math.Vec2(this.y, this.x);
        };
        return Vec2;
    }(createjs.Point));
    math.Vec2 = Vec2;
})(math || (math = {}));
//# sourceMappingURL=vec2.js.map