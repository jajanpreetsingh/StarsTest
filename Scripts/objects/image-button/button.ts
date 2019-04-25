module objects {
    export class Button extends createjs.Bitmap {

        private _imageUrl: string;
        private _width: number;
        private _height: number;

        private _halfWidth: number;
        private _halfHeight: number;

        get Width(): number {
            return this._width;
        }

        set Width(newWidth: number) {
            this._width = newWidth;
        }

        get halfWidth(): number {
            return this._halfWidth;
        }

        set halfWidth(newHalfWidth: number) {
            this._halfWidth = newHalfWidth;
        }

        get Height(): number {
            return this._height;
        }

        set Height(newHeight: number) {
            this._height = newHeight;
        }

        get halfHeight(): number {
            return this._halfHeight;
        }

        set halfHeight(newHalfHeight: number) {
            this._halfHeight = newHalfHeight;
        }

        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Button
         */
        constructor(imageString: string,
            x: number = 0,
            y: number = 0,
            isCentered: boolean = false) {

            super(managers.GameManager.ResourceManager.AssetManager.getResult(imageString));

            this._imageUrl = imageString;

            this.Width = this.getBounds().width;
            this.Height = this.getBounds().height;

            if(isCentered) {
                this.regX = this.halfWidth;
                this.regY = this.halfHeight;
            }

            this.x = x;
            this.y = y;

            this.on("mouseover", this._over);

            this.on("mouseout", this._out);
        }

        private _over(event: createjs.MouseEvent): void {
            this.alpha = 0.7;
        }

        private _out(event: createjs.MouseEvent): void {
            this.alpha = 1.0;
        }

        private _click(event: createjs.MouseEvent): void {
            this.alpha = 0.7;
        }
    }
}