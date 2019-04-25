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
    var Label = /** @class */ (function (_super) {
        __extends(Label, _super);
        // /**
        //  *Creates an instance of Label.
        //  * @param {string} labelSting
        //  * @param {string} fontSize
        //  * @param {string} fontFamily
        //  * @param {string} fontColor
        //  * @param {number} [x=0]
        //  * @param {number} [y=0]
        //  * @param {boolean} [isCentered=false]
        //  * @memberof Label
        //  */
        /**
         *Creates an instance of Label.
         * @param {string} labelSting
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColor
         * @param {config.Pivot} [pivot=config.Pivot.MIDCENTER]
         * @memberof Label
         */
        function Label(labelSting, fontSize, fontFamily, fontColor, pivot
        // x: number = 0,
        // y: number = 0,
        // isCentered: boolean = false
        ) {
            if (pivot === void 0) { pivot = config.Pivot.MIDCENTER; }
            var _this = _super.call(this, labelSting, fontSize + " " + fontFamily, fontColor) || this;
            _this.Width = _this.getMeasuredWidth();
            _this.Height = _this.getMeasuredHeight();
            return _this;
            // if (isCentered) {
            //     this.regX = this.halfWidth;
            //     this.regY = this.halfHeight; //regx,regy means anchor
            // }
            // this.x = x;
            // this.y = y;
        }
        Object.defineProperty(Label.prototype, "Width", {
            get: function () {
                return this._width;
            },
            set: function (newWidth) {
                this._width = newWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "halfWidth", {
            get: function () {
                return this._halfWidth;
            },
            set: function (newHalfWidth) {
                this._halfWidth = newHalfWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "Height", {
            get: function () {
                return this._height;
            },
            set: function (newHeight) {
                this._height = newHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Label.prototype, "halfHeight", {
            get: function () {
                return this._halfHeight;
            },
            set: function (newHalfHeight) {
                this._halfHeight = newHalfHeight;
            },
            enumerable: true,
            configurable: true
        });
        return Label;
    }(createjs.Text));
    objects.Label = Label;
})(objects || (objects = {}));
//# sourceMappingURL=label.js.map