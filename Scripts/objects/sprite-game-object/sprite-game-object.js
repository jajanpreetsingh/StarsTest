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
    var SpriteGameObject = /** @class */ (function (_super) {
        __extends(SpriteGameObject, _super);
        /**
      *Creates an instance of Button.
      * @param {string} imageString
      * @param {math.Vec2} pos
      * @param {config.Pivot} pivot
      */
        function SpriteGameObject(imageString, pos, pivot) {
            if (pos === void 0) { pos = new math.Vec2(0, 0); }
            if (pivot === void 0) { pivot = config.Pivot.MIDCENTER; }
            var _this = _super.call(this, managers.GameManager.TextureAtlas, imageString) || this;
            _this.name = imageString;
            _this._pivot = pivot;
            if (pos == null) {
                pos = new math.Vec2(0, 0);
            }
            _this.x = pos.x;
            _this.y = pos.y;
            var normPivot = _this.GetPivot(pivot);
            _this.Init();
            return _this;
        }
        Object.defineProperty(SpriteGameObject.prototype, "OriginalWidth", {
            get: function () {
                return this.getBounds().width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(SpriteGameObject.prototype, "OriginalHeight", {
            get: function () {
                return this.getBounds().height;
            },
            enumerable: true,
            configurable: true
        });
        SpriteGameObject.prototype.Init = function () {
            this.Start();
        };
        SpriteGameObject.prototype.Start = function () {
        };
        SpriteGameObject.prototype.Update = function () {
        };
        SpriteGameObject.prototype.Reset = function () {
        };
        SpriteGameObject.prototype.Destroy = function () {
        };
        Object.defineProperty(SpriteGameObject.prototype, "Position", {
            get: function () {
                return new math.Vec2(this.x, this.y);
            },
            enumerable: true,
            configurable: true
        });
        SpriteGameObject.prototype.SetPosition = function (pos) {
            this.x = pos.x;
            this.y = pos.y;
        };
        SpriteGameObject.prototype.Pivot = function () {
            return this._pivot;
        };
        SpriteGameObject.prototype.GetPivot = function (pivot) {
            switch (pivot) {
                case config.Pivot.BOTTOMCENTER:
                    return new math.Vec2(0.5, 0);
                case config.Pivot.BOTTOMLEFT:
                    return new math.Vec2(0, 0);
                case config.Pivot.BOTTOMRIGHT:
                    return new math.Vec2(1, 0);
                case config.Pivot.MIDCENTER:
                    return new math.Vec2(0.5, 0.5);
                case config.Pivot.MIDLEFT:
                    return new math.Vec2(0, 0.5);
                case config.Pivot.MIDRIGHT:
                    return new math.Vec2(1, 0.5);
                case config.Pivot.TOPCENTER:
                    return new math.Vec2(0.5, 1);
                case config.Pivot.TOPLEFT:
                    return new math.Vec2(0, 1);
                case config.Pivot.TOPRIGHT:
                    return new math.Vec2(1, 1);
            }
        };
        return SpriteGameObject;
    }(createjs.Sprite));
    objects.SpriteGameObject = SpriteGameObject;
})(objects || (objects = {}));
//# sourceMappingURL=sprite-game-object.js.map