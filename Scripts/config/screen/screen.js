var config;
(function (config) {
    var Screen = /** @class */ (function () {
        function Screen(height) {
            this.ASPECTRATIO = 1.7778;
            this.FRAMERATE = 60;
            this._height = height;
            this._width = this._height * this.ASPECTRATIO;
        }
        Object.defineProperty(Screen.prototype, "UnitX", {
            get: function () {
                return 1 / this.Width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "UnitY", {
            get: function () {
                return 1 / this.Height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "Width", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "Height", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "Center", {
            get: function () {
                return new math.Vec2(this.HalfWidth, this.HalfHeight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "TopLeft", {
            get: function () {
                return new math.Vec2(0, 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "TopRight", {
            get: function () {
                return new math.Vec2(this.Width, 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "BottomLeft", {
            get: function () {
                return new math.Vec2(0, this.Height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "BottomRight", {
            get: function () {
                return new math.Vec2(this.Width, this.Height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "MidLeft", {
            get: function () {
                return new math.Vec2(0, this.Height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "BottomCenter", {
            get: function () {
                return new math.Vec2(this.Width * 0.5, this.Height);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "TopCenter", {
            get: function () {
                return new math.Vec2(this.Width * 0.5, 0);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "MidRight", {
            get: function () {
                return new math.Vec2(this.Width, this.Height * 0.5);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "HalfWidth", {
            get: function () {
                return this.Width * 0.5;
                ;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Screen.prototype, "HalfHeight", {
            get: function () {
                return this.Height * 0.5;
                ;
            },
            enumerable: true,
            configurable: true
        });
        return Screen;
    }());
    config.Screen = Screen;
})(config || (config = {}));
//# sourceMappingURL=screen.js.map