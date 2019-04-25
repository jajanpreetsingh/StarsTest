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
var objects;
(function (objects) {
    var BitmapGameObject = /** @class */ (function (_super) {
        __extends(BitmapGameObject, _super);
        function BitmapGameObject(imageString, scale, pivot) {
            if (scale === void 0) { scale = 1; }
            if (pivot === void 0) { pivot = config.Pivot.MIDCENTER; }
            var _this = _super.call(this, managers.GameManager.ResourceManager.AssetManager.getResult(imageString)) || this;
            _this._pivot = pivot;
            _this.SetScale(scale);
            _this.name = imageString;
            _this.Init();
            return _this;
        }
        Object.defineProperty(BitmapGameObject.prototype, "Tag", {
            get: function () {
                return this.tag;
            },
            set: function (tag) {
                this.tag = tag;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "OriginalWidth", {
            get: function () {
                return this.getBounds().width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "OriginalHeight", {
            get: function () {
                return this.getBounds().height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "Position", {
            get: function () {
                return new math.Vec2(this.x, this.y);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BitmapGameObject.prototype, "Pivot", {
            get: function () {
                return this._pivot;
            },
            enumerable: true,
            configurable: true
        });
        BitmapGameObject.prototype.Init = function () {
        };
        BitmapGameObject.prototype.Start = function () {
        };
        BitmapGameObject.prototype.Update = function () {
        };
        BitmapGameObject.prototype.Reset = function () {
        };
        BitmapGameObject.prototype.Destroy = function () {
        };
        BitmapGameObject.prototype.SetPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        BitmapGameObject.prototype.GetPivot = function (pivot) {
            switch (pivot) {
                case config.Pivot.BOTTOMCENTER:
                    return new math.Vec2(0.5, 1);
                case config.Pivot.BOTTOMLEFT:
                    return new math.Vec2(0, 1);
                case config.Pivot.BOTTOMRIGHT:
                    return new math.Vec2(1, 1);
                case config.Pivot.MIDCENTER:
                    return new math.Vec2(0.5, 0.5);
                case config.Pivot.MIDLEFT:
                    return new math.Vec2(0, 0.5);
                case config.Pivot.MIDRIGHT:
                    return new math.Vec2(1, 0.5);
                case config.Pivot.TOPCENTER:
                    return new math.Vec2(0.5, 0);
                case config.Pivot.TOPLEFT:
                    return new math.Vec2(0, 0);
                case config.Pivot.TOPRIGHT:
                    return new math.Vec2(1, 0);
            }
        };
        BitmapGameObject.prototype.SetScale = function (value) {
            this.scaleX = this.scaleY = value;
        };
        BitmapGameObject.prototype.SetRegex = function (valueX, valueY) {
            var normPivot = this.GetPivot(this._pivot);
            this.regX = valueX;
            this.regY = valueY;
        };
        BitmapGameObject.prototype.SetScales = function (valueX, valueY) {
            this.scaleX = valueX;
            this.scaleY = valueY;
        };
        return BitmapGameObject;
    }(createjs.Bitmap));
    objects.BitmapGameObject = BitmapGameObject;
})(objects || (objects = {}));
//# sourceMappingURL=bitmap-game-object.js.map