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
    var Button = /** @class */ (function (_super) {
        __extends(Button, _super);
        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Button
         */
        function Button(imageString) {
            var _this = _super.call(this, imageString) || this;
            _this.on("mouseover", _this._over);
            _this.on("mouseout", _this._out);
            return _this;
        }
        Button.prototype._over = function (event) {
            this.alpha = 0.7;
        };
        Button.prototype._out = function (event) {
            this.alpha = 1.0;
        };
        Button.prototype._click = function (event) {
            this.alpha = 0.7;
        };
        return Button;
    }(objects.BitmapGameObject));
    objects.Button = Button;
})(objects || (objects = {}));
//# sourceMappingURL=button.js.map